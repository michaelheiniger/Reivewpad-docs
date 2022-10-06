---
id: comment-on-pull-requests
slug: comment-on-pull-requests
title: Comment on pull requests
---

With Reviewpad, you can automatically add comments to the pull request.

There are three different mechanisms to add a comment to the pull request:

1. Using the [`comment`](/guides/built-ins#comment) action.
2. Using the [`commentOnce`](/guides/built-ins#commentonce) action.
3. Using the [`error`](/guides/built-ins#error), [`info`](/guides/built-ins#info) or [`warn`](/guides/built-ins#warn) actions.

The difference between the modes is that the `comment` action will add a comment every time the action is executed, `commentOnce` will add a comment once no matter the amount of times the action is executed, while the other commenting actions are bundled together in a comment which is also automatically updated.

To the use the third set of comments (i.e. `error`, `warn` and `info`) you need to enable the `professional` edition.

## Automatically comment the pull request.

```yaml
api-version: reviewpad.com/v3.x

mode: verbose

rules:
  - name: emptyDescription
    spec: '$description() == ""'

  - name: isFirstTimeContributor
    spec: "$pullRequestCountBy($author()) == 1"

workflows:
  - name: welcome-user
    description: Welcome user first contribution
    if:
      - rule: isFirstTimeContributor
    then:
      # Comment on pull request once
      - '$commentOnce("Well done! This is your first contribution.")'

  - name: comment-on-empty-description
    description: Error on empty descriptions
    if:
      - rule: emptyDescription
    then:
      # Add error message to reviewpad report
      - '$error("The description of the pull request cannot be empty")'

  - name: comment-on-pull-request
    description: Example comment on pull request
    if:
      - "true"
    then:
      # Add info message to reviewpad report
      - '$info("Thanks for this pull request. @marcelosousa will take a look!")'
      # Add warning message to reviewpad report
      - '$warn("Please make sure the CI is green before merging.")'
```

You can see this workflow in action the following [pull request](https://github.com/reviewpad/action-showcase/pull/17).
