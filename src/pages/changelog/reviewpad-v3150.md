## [Reviewpad v3.15.0](/changelog/reviewpad-v3150)

## New features :fire:

### Commands

We are introducing a new way to run Reviewpad - Reviewpad Commands 🎉 You can now run Reviewpad using the `/reviewpad` command by commenting the pull request on GitHub. The command will run the selected Reviewpad instruction on the commented pull request.

- `/reviewpad assign-reviewers` - Assigns the provided reviewers to the pull request.

### Built-ins

[`checkRunConclusion`](/guides/built-ins#checkrunconclusion) - Gets the conclusion of the given check run.

## Improvements :rocket: {#improvements}

- Metrics report is now less verbose reporting the time spent on each step.

## Bugs :bug: {#bugs}

- Extra arguments on `sprintf` are now ignored.
