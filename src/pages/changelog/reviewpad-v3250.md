## v3.25.0

**15 February 2023**

### Introduction

This release introduces two new built-ins: [`$approve`](/guides/built-ins#approve) and [`$assignCodeAuthorReviewers`](/guides/built-ins#assigncodeauthorreviewers). It also improves the [`$deleteHeadBranch`](/guides/built-ins/#deleteheadbranch) built-in to verify if the branch exists before deleting it.

### New features :fire:

#### Built-ins

- [`$approve`](/guides/built-ins#approve) - Adds a review to a pull request with the `APPROVE` state.
- [`$assignCodeAuthorReviewers`](/guides/built-ins#assigncodeauthorreviewers) - Assigns the most relevant and available reviewers to a pull request.

### Improvements :rocket:

- [`$deleteHeadBranch`](/guides/built-ins/#deleteheadbranch) built-in verifies if the branch exists before deleting it.
