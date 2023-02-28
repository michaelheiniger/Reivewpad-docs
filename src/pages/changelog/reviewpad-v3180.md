## [Reviewpad v3.18.0](/changelog/reviewpad-v3180)

## New features :fire:

### Configuration

- [`metrics-on-merge`](/guides/syntax#metrics-on-merge) - Specify if the Reviewpad should add a metrics report when the pull request is merged.

### Built-ins

- [`isBinary`](/guides/built-ins#isbinary) - Verifies whether the file in the provided path is a binary file.
- [`approvalsCount`](/guides/built-ins#approvalscount) - Retrieves the total number of approvals for a pull request.
- [`triggerWorkflow`](/guides/built-ins#triggerworkflow) - Triggers a workflow run for the given workflow file.
- [`eventType`](/guides/built-ins#eventtype) - Retrieves the type of the pull request event.

## Improvements :rocket: {#improvements}

- [`merge`](/guides/built-ins#merge) - By default, the merge action is only enabled for open and non-draft pull requests.

## Bug :bug: {#bug}

- Changes on labels within the `labels` property in the Reviewpad configuration are now properly propagated to the repository.
- `extends` now extends all properties of a Reviewpad configuration.
