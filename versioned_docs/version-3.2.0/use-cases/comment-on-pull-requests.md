---
title: "Comment on pull requests"
id: "comment-on-pull-requests"
---

With Reviewpad, you can automatically add comments to the pull request.

There are three different mechanisms to add a comment to the pull request:

1. Using the [`comment` action](/guides/built-ins#comment).
2. Using the [`commentOnce` action](/guides/built-ins#commentonce). 
3. Using the [`error`](/guides/built-ins#error), [`info`](/guides/built-ins#info) or [`warn`](/guides/built-ins#warn) actions.

The difference between the modes is that the `comment` action will add a comment every time the action is executed, `commentOnce` will add a comment once no matter the amount of times the action is executed, while the other commenting actions are bundled together in a comment which is also automatically updated. 

To the use the third set of comments (i.e. `error`, `warn` and `info`) you need to enable the `professional` edition.

## Automatically comment the pull request.

```yaml
api-version: reviewpad.com/v3.x

mode: verbose

rules:
  - name: tautology
    kind: patch
    description: Tautology
    spec: "true"

  - name: emptyDescription
    kind: patch
    description: Empty description
    spec: $description() == ""

  - name: isFirstTimeContributor
    kind: patch
    description: First pull request
    spec: $totalCreatedPullRequests($author()) == 1

workflows:
  - name: welcome-user
    description: Welcome user first contribution
    if:
      - rule: isFirstTimeContributor
    then:
      # Comment on pull request once
      - $commentOnce("Well done! This is your first contribution.")

  - name: comment-on-pull-request
    description: Example comment on pull request
    if:
      - rule: tautology
    then:
      # Add info message to reviewpad report
      - $info("Thanks for this pull request. @marcelosousa will take a look!")
      # Add warning message to reviewpad report
      - $warn("Please make sure the CI is green before merging.")

  - name: comment-on-empty-description
    description: Error on empty descriptions
    always-run: true
    if:
      - rule: emptyDescription
    then:
      # Add error message to reviewpad report
      - $error("The description of the pull request cannot be empty")

```

You can see this workflow in action the following [pull request](https://github.com/reviewpad/action-showcase/pull/17).