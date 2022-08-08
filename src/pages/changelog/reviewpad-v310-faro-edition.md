---
title: "Reviewpad v3.1.0 (Faro Edition)"
id: "reviewpad-v310-faro-edition"
---

### New features :fire:

### Aladino Built-ins

### Functions

[` reviewerStatus`](https://docs.reviewpad.com/v3.1.0/docs/aladino-builtins#reviewerstatus) - Returns the status of a reviewer in the pull request.

[`hasUnaddressedReviewThreads`](https://docs.reviewpad.com/v3.1.0/docs/aladino-builtins#disableactions) - Verifies whether the pull request has review threads that are unaddressed.

[`isWaitingForReview`](https://docs.reviewpad.com/v3.1.0/docs/aladino-builtins#iswaitingforreview) - Verifies whether a pull request is waiting for review.

[`length`](https://docs.reviewpad.com/v3.1.0/docs/aladino-builtins#length) - Returns the length of an array.

### Actions

[`disableActions`](https://docs.reviewpad.com/v3.1.0/docs/aladino-builtins#disableactions) - Disables the list of Aladino actions passed as argument.

### Improvements :rocket:

- Do not re-request a review when the reviewer has already `approved` the review.
- Run `reviewpad` on `dry-run` when the configuration `reviewpad.yml` has been updated in the pull request.
- Added `reviewpad-cli` to run reviewpad commands.

### Bugs :bug:

- Do not create labels when running on `dry-run`