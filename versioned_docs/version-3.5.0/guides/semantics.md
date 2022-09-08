---
title: "Semantics"
id: "semantics"
---

A Reviewpad configuration file goes through a series of syntactic checks.

## Syntactic checks

### Unused rule

Each rule specified in the _rules_ section must be used in a _workflow_. The following file is not valid since `dummyRule` is not used in any workflow.

```yaml
api-version: reviewpad.com/v3.x

labels:
  fastTrack:
    name: "fast track" # optional
    description: Fast track mode # optional
    color: "76dbbe"

rules:
  - name: changesOneFile
    kind: patch # optional
    description: Patch has more one file # optional
    spec: $fileCount == 1

  - name: dummyRule
    kind: patch # optional
    description: Simple dummy rule # optional
    spec: 1 == 1

workflows:
  - name: fastTrack
    description: Fast track of pull requests # optional
    if:
      - rule: changesOneFile
    then:
      - $addLabel("fastTrack")
```

### Reference to undefined rule

Each rule referenced in a _workflow_ must be defined in the rules section. The following file is not valid as `changesOneFile` is not defined.

```yaml
api-version: reviewpad.com/v3.x

labels:
  fastTrack:
    description: Fast track mode # optional
    color: "76dbbe"

rules:

workflows:
  - name: fastTrack
    description: Fast track of pull requests # optional
    if:
      - rule: changesOneFile
    then:
      - $addLabel("fastTrack")
```

## Interpreter

If a Reviewpad configuration file is syntactically valid, then it will be passed to the interpreter. 

This interpreter receives the file and an environment as input and if no error is found during the interpretation, it outputs the program to be executed.

### Environment

The environment used by the interpreter is specified in the [reviewpad/action](https://github.com/reviewpad/action/blob/main/action.yml): 

1. GitHub repository (e.g. `google/guava`);
2. The event that triggers the current run of Reviewpad;
3. A pull request or issue that is impacted by the trigger event;
4. Access token. By default, it uses automatic token authentication. For more information read [https://docs.github.com/en/actions/security-guides/automatic-token-authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication).

### Design decisions

The task of the interpreter is to traverse the workflow list to find which (if any) workflow or pipeline is enabled in the environment.

The program will be executed respect the following rules:

1. A workflow is enabled if and only if any of its rules evaluates to **true.**
2. The order in which the workflows are specified determines the evaluation order.
3. The final program is built by iterating over all workflows in the specified list.
4. Only one workflow with `always-run: false` is enabled per execution.
5. The evaluation of workflow is lazy, i.e. as soon as a workflow is activated, all the others are disregarded unless they have `alwaysRun: true`.
6. A pipeline is enabled if and only if the trigger evalues to **true**.
7. Only the actions of one pipeline will be executed.

For example, consider the following pseudo Reviewpad file:

```yaml
api-version: reviewpad.com/v2.x

rules:
 rule_1
 rule_2
 ...
 rule_5

workflows:
  - name: workflow_1
    description: Workflow 1 # optional
    on: # optional
      - pull_request
    if:
      - rule: rule_1
    then:
      - action_1

  - name: workflow_2
    description: Workflow 2 # optional
    on: # optional
      - issue
      - pull_request
    if:
      - rule: rule_1
      - rule: rule_2
    then:
      - action_2

pipelines:
  - name: pipeline_1
    description: Pipeline 1 # optional
    trigger: rule_3 # optional
    stages:
      - actions:
          - action_3
          - action_4
        until: rule_4 # optional
      - actions:
          - action_5
        until: rule_5 # optional
```

The interpreter starts by evaluating the rules of `workflow_1` and only if all the rules are false it will go evaluate the rules of `workflow_2`. At the moment, there is no caching between rules. 

If `rule_1` is true, then `workflow_1` would be active. As a consequence `workflow_2` would never be evaluated and therefore `rule_2`.

The specification of the rules only contains read-only actions.

After evaluating the workflows, the interpreter moves to the evaluation of the pipelines. 

If `rule_3` is true, then `pipeline_1` would be active. The interpreter then starts to evaluate the conditions in the `until` field for each stage sequentially until the evaluation of is **false**.

### Program generation

As we mentioned, the interpreter will produce an [Aladino](/guides/aladino/specification) program that will be executed.  
This program is simply a sequence of actions. 

We will use an example to illustrate how this program is generated. Assume that we have the following specification:

```yaml
api-version: reviewpad.com/v2.x

rules:
 rule_1
 rule_2
 ...
 rule_5

workflows:
  - name: workflow_X
    if:
      - rule: rule_1
        extra-actions:
          - rule_1_action_1
          - rule_1_action_2
      - rule: rule_2
        extra-actions:
          - rule_2_action_1
      - rule: rule_3
      - rule: rule_4
        extra-actions:
          - rule_4_action_1
    then:
      - gen_action_1
      - gen_action_2

pipelines:
  - name: pipeline_Y
    trigger: rule_5
    stages:
      - actions:
          - stage_1_action_1
          - stage_2_action_2
        until: rule_6
      - actions:
          - stage_2_action_1
        until: rule_7
```

Assume that `rule_1`, `rule_3`, `rule_4`, `rule_5` and `rule_6` evaluate to `true` and `rule_2` and `rule_7` to `false`.

It follows that `workflow_X` and `pipeline_Y` are active. 

The program is generated by concatenating the general actions of the workflow with the extra actions of each enabled rule
together with the actions of the stage which the `until` clause evaluates to false.

In this case this would be:

```yaml
gen_action_1
gen_action_2
rule_1_action_1
rule_1_action_2
rule_4_action_1
stage_2_action-1
```

**Note: The order in which workflow, rules and pipelines are specified matters. This is similar to any programming language where the order of statements matters.**

### Difference between Workflows and Pipelines

A workflow and a pipeline specify different behaviours.

While a workflow encodes a `if-then` statement, a pipeline is encodes a choice. 
In theory, we could specify a pipeline with just workflows where each pipeline stage is one workflow.

For example:

```yaml
pipelines:
  - name: pipeline_1
    trigger: initial-condition
    stages:
      - actions:
          - ACTION_1
        until: RULE_1
      - actions:
          - ACTION_2
        until: RULE_2
```

Could be encoded as:

```yaml
workflows:
  - name: pipeline_1_stage_1
    always-run: true
    if: initial-condition && !RULE_1
    then:
      - ACTION_1

  - name: pipeline_1_stage_2
    always-run: true
    if: initial-condition && RULE_1 && !RULE_2
    then:
      - ACTION_2
```

However there are two major disadvantages of this approach:
1. As the number of stages increase, the conditions become more and more become unnecessarily
2. Since the evaluation of rules is not cached it is possible for two stages to be enabled. 
In the example above, assume that while we are evaluating `pipeline_1_stage_1`, the `RULE_1` is false.
This means that `ACTION_1` will be added to the program; as we move to the second stage it could be 
that the state of the issue/pull request changes in the code host in such a way that in the second 
evaluation of `RULE_1` it is now true.