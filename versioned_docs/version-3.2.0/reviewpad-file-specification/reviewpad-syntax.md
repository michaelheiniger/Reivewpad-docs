---
title: "Reviewpad Syntax"
id: "reviewpad-syntax"
---
A Reviewpad configuration file has the following shape:

```yaml
api-version: reviewpad.com/v2.x

edition: EDITION
mode: MODE
ignore-errors: IGNORE_ERRORS

labels:
 label_1
 label_2
 ...
 label_N

groups:
  group_1
  group_2
  ...
  group_N

rules:
  rule_1
  rule_2
  ...
  rule_N

workflows:
  - workflow_1
  - workflow_2
  ...
  - workflow_N
```

You can see the latest formal version of the format [here](https://github.com/reviewpad/schemas/blob/bf08b1000ca37a941c5d7533499f575be205c2db/latest/schema.json).

If you use VSCode, we recommend that you [setup yaml.schemas](../tooling/vscode-reviewpad-yaml-schema.mdx) to enjoy syntax checking and auto-completion.

The central concept in this specification is the **workflow**. 

A `workflow` is a specification of a list of actions to be executed if the pull request satisfies any of the rules in its specification.

**Example. Automated labelling of pull requests**

Consider the following `reviewpad.yml`:

```yaml
api-version: reviewpad.com/v3.x

labels:
  small:
    description: Pull requests with less than 90 LOC
    color: "f15d22"

rules:
  - name: isSmallPatch
    kind: patch
    description: Patch has less than 90 LOC
    spec: $size() < 90

workflows:
  - name: labelSmall
    description: Label small pull requests
    if:
      - rule: isSmallPatch
    then:
      - $addLabel("small")
```

This configuration file specifies one workflow called `labelSmall` which automatically labels a pull request with _small_ if it changes less than 90 lines of code.

## API Version

The `api-version` property is the version of Reviewpad specification format. The version is necessary so the the format can be evolved, and the field is used for the parser to know how to interpret the content.

## Edition

The `edition` property is a flag that allows you to access different capabilities of Reviewpad. We currently support the `team` and `professional` editions. The difference is that `team` edition is completely open-source and the `professional` edition contains closed sourced code for certain built-ins. At the moment, they are both free so we recommend the use of the `professional` edition by default.

## Mode

The `mode` property is a flag that allows you to enable or disable a report of Reviewpad as a pull request comment. By default, Reviewpad runs on `silent` mode. However, you can choose to use `verbose` mode and Reviewpad will comment on the pull request with the execution results.

## Ignore errors

The `ignore-errors` property is a flag that allows you to specify if the GitHub action should ignore execution errors. By default, this flag is `false` which means the action will fail if an error is raised.

## Label

A label specifies a label that can be used as an argument to the label related functions. 

The structure of a label is as follows:

```yaml
LABEL-ID:
  name: STRING [OPTIONAL]
  description: STRING [OPTIONAL]
  color: STRING [OPTIONAL] 
```

- `ID` of a label is used to reference it in other entities. If no `name` is provided, then the `ID` is considered the `name`.
- `name` is the name of the label as seen on GitHub.
- `description` is a short description of the label. Must be 100 characters or fewer.
- `color` is the [hexadecimal color code](https://www.color-hex.com/) for the label, without the leading #.

If the label does not exist in the repository, it will be created. If it already exists in the repository, no action will be taken.

## Group

A group specifies a list of entities. At the moment, we only support GitHub users.

There are two ways to specify a group:

### Group By Enumeration

```yaml
- name: STRING
   description: STRING
   kind: developers
   spec: '[LIST OF GITHUB USERS]'
```

- `name` of a group is used to reference it in other entities.
- `kind` of a group can only be _developers_ at the moment.
- `description` is a string that can be used to provide more details about the group.
- `spec` is an [Aladino](aladino-specification/aladino-specification.md) array.

** Example. Group by Enumeration **

```yaml
- name: groupWithMarcelo
   description: The group composed of marcelosousa
   kind: developers
   spec: '["marcelosousa"]'
```

### Group By Filter

```yaml
- name: STRING
   description: STRING
   kind: developers
   type: filter
   param: VARIABLE
   spec: ALADINO-BOOLEAN-EXPRESSION
```

- `name` of a group is used to reference it in other entities.
- `kind` of a group can only be _developers_ at the moment.
- `type` with filter specifies that we will require a _param_ and a boolean _spec_.
- `param` declares the name of a variable representing a single developer.
- `spec` is an [Aladino](aladino-specification/aladino-specification.md) boolean expression that uses the _param_ variable to define a condition on which developers should be part of the group.

** Example. Group by Filter **

```yaml
- name: newJoiners
   description: Group of devs that have created less than 10 PRs
   kind: developers
   type: filter
   param: dev
   where: $totalCreatedPRs($dev) < 10
```

## Rule

A Reviewpad rule specifies a boolean condition on a pull request. 

The structure of a rule is as follows:

```yaml
- name: STRING
   kind: [patch | author]
   description: STRING
   spec: ALADINO-BOOLEAN-EXPRESSION
```

- `name` of a rule is used to reference it in other rules and workflow. 
- `kind` of a rule can be either _patch_ or _author._ The kind is related to different properties of pull requests that will be used in the evaluation of the _spec_ field.
- `description` is a string that can be used to provide more details about the rule.
- `spec` is a boolean expression in [Aladino](aladino-specification/aladino-specification.md).

## Workflow

The structure of a workflow is as follows:

```yaml
- name: STRING
  description: STRING
  always-run: BOOLEAN
  if:
    - rule: REF_TO_RULE_1
      extra-actions: [OPTIONAL]
        - ACTION_1
        - ACTION_2
        ...
        - ACTION_N
    ...
    - rule: REF_TO_RULE_N
  then: [OPTIONAL]
    - ACTION_1
    - ACTION_2
    ...
    - ACTION_N
```

- `name` is a string that identifies the workflow.
- `description` is a string that can be used to provide more details about the rule.
- `always-run` field is a boolean that specifies the workflow should always be checked or not. By default, this value is `false`.
- `if` field specifies which rules should be checked. For each rule, we can also specify a list of **extra actions** that will be executed if this rule is activated by the pull request.
- `then` field is a list of [Aladino actions](aladino-specification/aladino-built-ins.mdx#actions) that should run.