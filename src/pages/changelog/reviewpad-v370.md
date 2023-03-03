## v3.7.0

### New features :fire:

#### Aladino Built-ins

#### Functions

[`reviewers`](/guides/built-ins#reviewers) - Returns the list of GitHub user login that have reviewed the pull request.

[`totalCodeReviews`](/guides/built-ins#totalcodereviews) - Returns the total number of code reviews made by the given GitHub user login.

### Improvements :rocket: {#improvements}

- Update the label in the repository with the description defined in the `reviewpad.yml` if they are different.
- Rename previous `reviewers` built-in to [`requestedReviewers`](/guides/built-ins#requestedreviewers).
