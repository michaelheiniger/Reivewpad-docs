# Changelog

## Reviewpad v3.0.0 (Faro Edition)

### New features :fire:

This is a major version of the Reviewpad Action. 

### Action

- Feature: Use GitHub event to react to more workflow run triggers beside `pull_request` and `pull_request_target`.
- Feature: Allow file as input of the GitHub action.

### Aladino Built-ins

### Functions

[`workflowStatus`](https://docs.reviewpad.com/v3.0.0/docs/aladino-builtins#workflowstatus) - Returns the result of a GitHub workflow run.

***

## Reviewpad v2.4.0 (Lisbon Edition)

### New features :fire:

### Aladino Built-ins

### Action

[`commitLint`](https://docs.reviewpad.com/docs/aladino-builtins#commitlint-zap) - Checks if the commits in the pull request follow the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

***

## Reviewpad v2.3.0 (Lisbon Edition)

### New features :fire:

### Aladino Built-ins

### Action

[`assignAssignees`](https://docs.reviewpad.com/v2.3.0/docs/aladino-builtins#assignassignees) - Assigns up to 10 assignees to a pull request.

[`fail`](https://docs.reviewpad.com/v2.3.0/docs/aladino-builtins#fail) - Fails the action with a given fail message which will appear in the logs of the GitHub action.

### Functions

[`commentCount`](https://docs.reviewpad.com/docs/aladino-builtins#commentcount) -  Returns the total number of comments made into the pull request.

[`comments`](https://docs.reviewpad.com/docs/aladino-builtins#comments) -  List comment bodies of the pull request.

***

## Reviewpad v2.2.0 (Lisbon Edition)

### New features :fire:

### YAML Specification

- `ignore-errors` property - Specify if the GitHub action should ignore execution errors. The default value is `false` which means the action will fail if an error occurs.
- `labels` now have a `name` property - Allow readable references to labels. For instance, a label can how have spaces or emojis.

### Aladino Built-ins

### Action

- [`assignTeamReviewer`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#assignteamreviewer) - Assign a review to the provided team(s).
- [`startsWith`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#addlabel) - Check whether a text starts with a certain sentence.

### Improvements :rocket:

### YAML Processing

- Fix `labels` section processing by creating the label in the repository whenever the defined label does not exist.

### Aladino Built-ins

### Action

- [`$assignRandomReviewer`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#assignrandomreviewer) - Fetches assignees instead of collaborators. _This is because GitHub API does not provide the correct list of reposittory collaborators when using GitHub Action token._
- [`addLabel`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#addLabel) - Automatically creates the label if it does not exist and uses the labels section to retrieve name.
- [`removeLabel`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#removeLabel) - Uses the labels section to retrieve name.

### New Contributors :beers:

Many thanks to our new contributors :clap:

- [@dukex](https://github.com/dukex)
- [@GildedHonour](https://github.com/GildedHonour)
- [@thedevsaddam](https://github.com/thedevsaddam)