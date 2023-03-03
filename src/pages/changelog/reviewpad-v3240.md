## v3.24.0

**9 February 2023**

### Introduction

This release introduces the check `reviewpad merge gate` that enables the use of the new built-in [`disableMerge`](/guides/built-ins#disablemerge) to disable the merge button on a pull request. It updates the [JSON schema](https://github.com/reviewpad/schemas/blob/main/latest/schema.json) that can be used to help edit the `reviewpad.yml` file. It adds to the logs of the Reviewpad to check the errors when [`extends`](/guides/extends) fails or the `reviewpad.yml` configuration is invalid. Finally, it fixes the report when using Reviewpad on `mode: verbose`, and no actions are triggered.

### New features :fire:

- `reviewpad merge gate` check created for each pull request.

#### Built-ins

- [`$disableMerge`](/guides/built-ins#disablemerge) - Disables the merge button on a pull request.

### Improvements :rocket:

- [`reviewpad.yml` JSON schema](https://github.com/reviewpad/schemas/blob/main/latest/schema.json) updated to the latest version.
- Loading errors are reported when [`extends`](/guides/extends) fails.
- Configuration errors are reported when `reviewpad.yml` configuration is invalid.

### Bugs :bug:

- Fix empty report when using Reviewpad on `mode: verbose` and no actions are triggered.
