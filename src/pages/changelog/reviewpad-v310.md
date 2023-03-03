## v3.1.0

### New features :fire: {#new-features}

#### Aladino Built-ins

#### Functions

[`reviewerStatus`](/guides/built-ins#reviewerstatus) - Returns the status of a reviewer in the pull request.

[`hasUnaddressedReviewThreads`](/guides/built-ins#hasunaddressedreviewthreads) - Verifies whether the pull request has review threads that are unaddressed.

[`isWaitingForReview`](/guides/built-ins#iswaitingforreview) - Verifies whether a pull request is waiting for review.

[`length`](/guides/built-ins#length) - Returns the length of an array.

#### Actions

[`disableActions`](/guides/built-ins#disableactions) - Disables the list of Aladino actions passed as argument.

### Improvements :rocket: {#improvements}

- Do not re-request a review when the reviewer has already `approved` the review.
- Run `reviewpad` on `dry-run` when the configuration `reviewpad.yml` has been updated in the pull request.
- Added `reviewpad-cli` to run reviewpad commands.

### Bugs :bug: {#bugs}

- Do not create labels when running on `dry-run`
