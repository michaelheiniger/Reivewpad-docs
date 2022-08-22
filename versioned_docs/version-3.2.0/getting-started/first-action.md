---
id: "first-action"
slug: "/first-action"
title: "First Action: Label based on size"
hidden: false
createdAt: "2022-03-25T11:41:26.268Z"
updatedAt: "2022-08-02T11:09:18.903Z"
---
This page will help you run your first Reviewpad Action to automatically label pull requests in a GitHub repository depending on their size.

You can check this Reviewpad action in the GitHub repository [reviewpad/action-showcase](https://github.com/reviewpad/action-showcase).

To keep things simple, we will consider the size of a pull request as the sum of number added lines with the number of deleted lines.

Our goal is to automatically label PRs depending on their size:

- **small** until 90 LOC
- **medium** from 90 until 300 LOC 
- **large** to PRs after 300 LOC.

To do this, we just need to do two steps.

## Step 1. Configure the GitHub action
===================================

Configure Reviewpad as a GitHub Action in a `pull_request` workflow:

```yaml
name: Reviewpad Action
on:
  pull_request

jobs:
  reviewpad-action:
    runs-on: ubuntu-latest
    steps:
      - name: Running reviewpad action
        # Set version v3.x to automatically receive minor and patch updates
        uses: reviewpad/action@v3.x
```

The source code of the GitHub Action can be found in the GitHub repository [reviewpad/action](https://github.com/reviewpad/action).

## Step 2. Add `reviewpad.yml` to the root of the repository
=========================================================

Add the configuration file `reviewpad.yml` to the root of your repository.

```yaml
api-version: reviewpad.com/v3.x

labels:
  small:
    name: "small"
    description: Small changes
    # color is the hexadecimal color code for the label, without the leading #.
    color: "294b69"
  medium:
    name: "medium"
    description: Medium changes
    color: "a8c3f7"
  large:
    name: "large"
    description: Large changes
    color: "8a2138"

rules:
  - name: isSmall
    kind: patch
    description: Small pull request
    spec: $size() <= 30

  - name: isMedium
    kind: patch
    description: Medium-sized pull request
    spec: $size() > 30 && $size() <= 100

  - name: isLarge
    kind: patch
    description: Large-sized pull request
    spec: $size() > 100

workflows:
  - name: label-pull-request-with-size
    description: Label pull request with size
    if:
      - rule: isSmall
        extra-actions:
          - $addLabel("small")
      - rule: isMedium
        extra-actions:
          - $addLabel("medium")
      - rule: isLarge
        extra-actions:
          - $addLabel("large")
```

Now, on each pull request event that triggers the GitHub workflow, Reviewpad will put the appropriated label depending on the size.

As an example of this automation, check this [pull request](https://github.com/reviewpad/action-showcase/pull/20).