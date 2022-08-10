## New features :fire:

### Aladino Built-ins

### Functions

[` reviewerStatus`](/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#reviewerstatus) - Returns the status of a reviewer in the pull request.

[`hasUnaddressedReviewThreads`](/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#hasunaddressedreviewthreads) - Verifies whether the pull request has review threads that are unaddressed.

[`isWaitingForReview`](/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#iswaitingforreview) - Verifies whether a pull request is waiting for review.

[`length`](/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#length) - Returns the length of an array.

### Actions

[`disableActions`](/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins#disableactions) - Disables the list of Aladino actions passed as argument.

## Improvements :rocket:

- Do not re-request a review when the reviewer has already `approved` the review.
- Run `reviewpad` on `dry-run` when the configuration `reviewpad.yml` has been updated in the pull request.
- Added `reviewpad-cli` to run reviewpad commands.

## Bugs :bug:

- Do not create labels when running on `dry-run`