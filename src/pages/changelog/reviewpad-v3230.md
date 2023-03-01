## [Reviewpad v3.23.0](/changelog/reviewpad-v3230)

## New features :fire:

- Reviewpad execution logs now include the [overrides](/guides/extends#tracking-overrides-with-logs) made when using [`extends`](/guides/extends).

### Built-ins

- [`$rebase`](/guides/built-ins#rebase) - Rebases a pull request.

### Commands

- [`/reviewpad dry-run`](/guides/commands#dry-run) - Runs Reviewpad in dry-run mode on the pull request where the command is invoked.

## Improvements :rocket:

- Ability to `re-run` Reviewpad check suite.
- Ability to run [Reviewpad commands](/guides/commands) without the need to set a [Reviewpad configuration](/getting-started/configuration).

## Bugs :bug:

- Fix [`$haveAllChecksRunCompleted`](/guides/built-ins#haveallchecksruncompleted) to ignore Reviewpad check.
- Fix [`$deleteHeadBranch`](/guides/built-ins#deleteheadbranch) to skip pull requests from forks.
