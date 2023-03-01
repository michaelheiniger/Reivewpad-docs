## [Reviewpad v3.4.0](/changelog/reviewpad-v340)

## New features :fire:

### Aladino Language

[Lambda expressions](/guides/aladino/syntax) - Aladino now supports lambda functions.

### Aladino Built-ins

### Functions

[`addToProject`](/guides/built-ins#addtoproject) - Adds a pull request to a project with a particular status. It is not supported for GitHub issues.
[`issueCountBy`](/guides/built-ins#issuecountby) - Returns the total number of issues created by the given GitHub user and issue state.
[`pullRequestCountBy`](/guides/built-ins#pullrequestcountby) - Returns the total number of pull requests created by the given GitHub user and state.

### Actions

[`titleLint`](/guides/built-ins#titlelint) - Checks if the pull request title follows the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

## Improvements :rocket: {#improvements}

- Fix `issue_comment` event handling to support GitHub issues and pull requests.
