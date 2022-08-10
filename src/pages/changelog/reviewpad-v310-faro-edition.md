## New features :fire:

### Aladino Built-ins

### Functions

[` reviewerStatus`](../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#reviewerstatus) - Returns the status of a reviewer in the pull request.

[`hasUnaddressedReviewThreads`](../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#hasunaddressedreviewthreads) - Verifies whether the pull request has review threads that are unaddressed.

[`isWaitingForReview`](../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#iswaitingforreview) - Verifies whether a pull request is waiting for review.

[`length`](../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#length) - Returns the length of an array.

### Actions

[`disableActions`](../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#disableactions) - Disables the list of Aladino actions passed as argument.

## Improvements :rocket:

- Do not re-request a review when the reviewer has already `approved` the review.
- Run `reviewpad` on `dry-run` when the configuration `reviewpad.yml` has been updated in the pull request.
- Added `reviewpad-cli` to run reviewpad commands.

## Bugs :bug:

- Do not create labels when running on `dry-run`