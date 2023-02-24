## [Reviewpad v3.27.0](/changelog/reviewpad-v3260)

## Release date - 24 February 2023

## Introduction

This update introduces several new features and improvements. One of the latest additions is the [`$isUpdatedWithBaseBranch`](/guides/built-ins#isupdatedwithbasebranch) built-in that verifies if the pull request has been updated with the base branch. Additionally, the new [`/reviewpad run`](/guides/commands#run) command has been added to trigger a reviewpad run. The [`$haveAllChecksRunCompleted`](/guides/built-ins/#haveallchecksruncompleted) built-in now includes a new `check_conclusions_to_ignore` parameter, and the algorithm for the [`$assignCodeAuthorReviewers`](/guides/built-ins/#assigncodeauthorreviewers) built-in has been enhanced.

Furthermore, the [`$review`](/guides/built-ins/#review) built-in has been improved to enable it to perform a review even when the state or body of the review being conducted is different from the current review. Finally, this update addresses a bug where the transform action was missing in the [`pipeline`](/guides/syntax#pipeline)'s `until` expressions.

## New features :fire:

### Built-ins

- [`$isUpdatedWithBaseBranch`](/guides/built-ins#isupdatedwithbasebranch) - Checks if the pull request is updated with the base branch.

### Commands

- [`/reviewpad run`](/guides/commands#run) - Triggers a reviewpad run.

## Improvements :rocket:

- [`$haveAllChecksRunCompleted`](/guides/built-ins/#haveallchecksruncompleted) built-in now accepts an optional parameter `check_conclusions_to_ignore` with the list of check conclusions to ignore.
- [`$assignCodeAuthorReviewers`](/guides/built-ins/#assigncodeauthorreviewers) built-in has an improved algorithm to assign a random reviewer when there aren't any code authors to assign.
- [`$review`](/guides/built-ins/#review) built-in now performs a review whenever the state or body of the review to be performed is different from the existing review.

## Bug :bug:

- [`pipeline`](/guides/syntax#pipeline)'s `until` expressions are now appropriately transformed.

