---
title: "Syntax"
id: "syntax"
---

A Reviewpad configuration file has the following shape:

```yaml
api-version: reviewpad.com/v3.x

mode: MODE [OPTIONAL]
ignore-errors: IGNORE_ERRORS [OPTIONAL]

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

pipelines:
  - pipeline_1
  - pipeline_2
  ...
  - pipeline_N
```

:::note note

You can check the latest formal version of the format [here](https://github.com/reviewpad/schemas/blob/main/latest/schema.json).
:::

If you use VSCode, we recommend that you [setup yaml.schemas](/tooling/vscode-reviewpad-yaml-schema) to enjoy syntax checking and auto-completion.

## API Version

The `api-version` property is the version of Reviewpad specification format. The version is necessary so the format can be evolved, and the field is used for the parser to know how to interpret the content.

#### Example

```yml
api-version: reviewpad.com/v3.x
```

## Mode

The `mode` property is a flag that allows you to enable or disable a report of Reviewpad as a pull request comment. By default, Reviewpad runs on `silent` mode. However, you can choose to use `verbose` mode and Reviewpad will comment on the pull request with the execution results.

#### Example

```yml
mode: verbose # optional
```

## Ignore errors

The `ignore-errors` property is a flag that allows you to specify if the GitHub action should ignore execution errors. By default, this flag is `false` which means the action will fail if an error is raised.

#### Example

```yml
ignore-errors: true # optional
```

## Label

A label specifies a label that can be used as an argument to the label related functions. 

The structure of a label is as follows:

```yaml
LABEL-ID:
  name: STRING [OPTIONAL]
  description: STRING [OPTIONAL]
  color: STRING [OPTIONAL] 
```

- `LABEL-ID` of a label is used to reference it in other entities. If no `name` is provided, then the `LABEL-ID` is considered the `name`.
- `name` [OPTIONAL] is the name of the label as seen on GitHub.
- `description` [OPTIONAL] is a short description of the label. Must be 100 characters or fewer.
- `color` [OPTIONAL] is the [hexadecimal color code](https://www.color-hex.com/) for the label, with or without the leading #.

If the label does not exist in the repository, it will be created. 

If the label already exists in the repository and the description set in the `reviewpad.yml` file is different from the description in the repository then this descritpion will be updated to the description defined in the `reviewpad.yml` file.

#### Example

```yml
labels:
  small:
    name: small # optional
    description: defines a small pull request # optional
    color: d2697a # optional
```

## Group

A group specifies a list of entities. At the moment, we only support GitHub users.

There are two ways to specify a group:

### Group By Enumeration

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  kind: developers
  spec: '[LIST OF GITHUB USERS]'
```

- `name` of a group is used to reference it in other entities.
- `description` [OPTIONAL] is a string that can be used to provide more details about the group.
- `kind` of a group can only be _developers_ at the moment.
- `spec` is an [Aladino](/guides/aladino/specification) array.

#### Example

```yaml
groups:
  - name: seniors
    description: project seniors # optional
    kind: developers
    spec: '["peter"]'
```

### Group By Filter

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  kind: developers
  type: filter
  param: VARIABLE
  spec: ALADINO-BOOLEAN-EXPRESSION
```

- `name` of a group is used to reference it in other entities.
- `description` [OPTIONAL] is a string that can be used to provide more details about the group.
- `kind` of a group can only be _developers_ at the moment.
- `type` with filter specifies that we will require a _param_ and a boolean _spec_.
- `param` declares the name of a variable representing a single developer.
- `spec` is an [Aladino](/guides/aladino/specification) boolean expression that uses the _param_ variable to define a condition on which developers should be part of the group.

#### Example

```yaml
groups:
  - name: new-joiners
    description: groups of developers that have created less than 10 PRs # optional
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
  kind: [patch | author] [OPTIONAL]
  description: STRING [OPTIONAL]
  spec: ALADINO-BOOLEAN-EXPRESSION
```

- `name` of a rule is used to reference it in other rules and workflow. 
- `kind` [OPTIONAL] of a rule can be either _patch_ or _author._ The kind is related to different properties of pull requests that will be used in the evaluation of the _spec_ field.
- `description` [OPTIONAL] is a string that can be used to provide more details about the rule.
- `spec` is a boolean expression in [Aladino](/guides/aladino/specification).

#### Example

```yml
rules:
  - name: small-change
    kind: patch # optional
    description: checks pr size is small # optional
    spec: $size() < 30 
```

## Workflow

The structure of a workflow is as follows:

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  always-run: BOOLEAN [OPTIONAL]
  on:
    - [pull_request | issue]
  if:
    - rule: REF_TO_RULE_1 | INLINE_RULE_1
      extra-actions: [OPTIONAL]
        - ACTION_1
        - ACTION_2
        ...
        - ACTION_N
    ...
    - rule: REF_TO_RULE_N | INLINE_RULE_N
  then: [OPTIONAL]
    - ACTION_1
    - ACTION_2
    ...
    - ACTION_N
```

- `name` is a string that identifies the workflow.
- `description` [OPTIONAL] is a string that can be used to provide more details about the workflow.
- `always-run` [OPTIONAL] field is a boolean that specifies the workflow should always be checked or not. By default, this value is `false`.
- `on` [OPTIONAL] field is a list of github entity types that should trigger the workflow. By default, the value is `pull_request`.
- `if` field specifies which rules should be checked. For each rule, we can also specify a list of **extra actions** that will be executed if this rule is activated by the pull request.
- `then` field is a list of [Reviewpad actions](/guides/built-ins#actions) that should run.

A `workflow` is a specification of a list of actions to be executed if the pull request **satisfies** any of the specified rules.

#### Example

```yaml
workflows:
  - name: size-labelling
    description: label pr based on size # optional
    on: # optional
      - pull_request
    if:
      - rule: $size() < 90
        extra-actions: $addLabel("small")
```

This configuration specifies one workflow called `size-labelling` which automatically labels a `pull_request` with the label `small` if the inline rule `$size() < 90` is true. This means that the total number of changed lines i.e. `$size` is lower than 90.

## Pipeline

The structure of a pipeline is as follows:

```yaml
- name: STRING
  description: STRING [OPTIONAL]
  trigger: [STRING | RULE] # optional
  stages:
    - actions:
        - ACTION_1
        - ACTION_2
        ...
        - ACTION_N
      until: [STRING | RULE] # optional
    ...
    - actions:
        - ACTION_1
        - ACTION_2
        ...
        - ACTION_N
      until: [STRING | RULE] # optional
```

- `name` is a string that identifies the pipeline.
- `description` [OPTIONAL] is a string that can be used to provide more details about the pipeline.
- `trigger` [OPTIONAL] field is a rule that if true enables the pipeline.
- `stages` is a list of stages of the pipeline. Each stage is a list of actions that will execute until the `until` condition is true.

