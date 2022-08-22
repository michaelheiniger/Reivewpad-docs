---
title: "Attention Set"
id: "attention-set"
---

The `Attention Set` defines **what kind of attention a pull request needs at a certain time**. 

For instance, a just created pull request with an assigned reviewer requires the reviewer attention but not the author attention.

## reviewpad.yml

In order to define the attention set we will use the builtins [isWaitingForReview](https://docs.reviewpad.com/docs/aladino-builtins#iswaitingforreview) and [hasUnaddressedThreads](https://docs.reviewpad.com/docs/aladino-builtins#hasunaddressedthreads).

```yaml reviewpad.yml
api-version: reviewpad.com/v3.x

edition: professional

rules:
  - name: waiting-review
    kind: patch
    spec: '$isWaitingForReview()'
  - name: not-waiting-review
    kind: patch
    spec: '!$rule("waiting-review")'
  - name: author-attention
    kind: patch
    spec: '$hasUnaddressedThreads()'
  - name: not-author-attention
    kind: patch
    spec: '!$rule("author-attention")'

workflows:
  - name: attention-set
    if:     
      - rule: waiting-review
        extra-actions:
          - '$addLabel("waiting-review")'
      - rule: not-waiting-review
        extra-actions:
          - '$removeLabel("waiting-review")'
      - rule: author-attention
        extra-actions:
          - '$addLabel("requires-author-attention")'
      - rule: not-author-attention
        extra-actions:
          - '$removeLabel("requires-author-attention")'
```

## Reviewpad Action

In order to have the automation for `Attention Set` working properly we need to update our [reviewpad action](https://github.com/marketplace/actions/reviewpad-action), mainly the list of `events` to which reviewpad action is triggered.

```yaml reviewpad.yml
name: Reviewpad

# List of events that will trigger reviewpad
on:
  pull_request_target:
    types:
      - opened
      - reopened
      - synchronize
      - ready_for_review
      - converted_to_draft
      - edited
      - review_requested
      - review_request_removed
  pull_request_review:
  pull_request_review_comment:

jobs:
  reviewpad:
    runs-on: ubuntu-latest
    steps:
      - name: Reviewpad
        uses: reviewpad/action@v3.x
```

## Known issues

### Unavailable `pull_request_review_thread` event

As for now GitHub actions are not able to be triggered on `pull_request_review_thread` events. This limitation does not allow `reviewpad` to be triggered when a review thread status is updated (i.e. `resolved` or `unresolved`)

To solve this issue one can comment a pull request with:

```go
/reviewpad run
```