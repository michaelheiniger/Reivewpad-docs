---
title: "Install Reviewpad GitHub Action"
slug: "install-reviewpad-github-action"
---

_This guide describes the setup for Reviewpad GitHub Action._

Reviewpad Action runs at the level of a single GitHub repository, which means that you need to install Reviewpad Action for each repository where you wish to run it.

To setup Reviewpad Action on a repository, you just need to perform the following steps.

## Step 1. Open the GitHub project on your IDE

Open the GitHub project where you wish to install the Reviewpad Action with your IDE.

_This is necessary because we will be adding and committing new files to the repository._

## Step 2. Add `Reviewpad Action` workflow file

At the root of your repository navigate to `.github > workflows` (This is where your project actions live. If you don't have these folders, please create them). 

Add the file `reviewpad.yml` with the following content:

```yaml
name: Reviewpad Action
on:
  pull_request

jobs:
  reviewpad-action:
    runs-on: ubuntu-latest
    steps:
      - name: Running reviewpad action
        uses: reviewpad/action@v3.x
```

We just added Reviewpad as a GitHub action. We now need to add you're project configuration of Reviewpad.

## Step 3. Add `reviewpad.yml` to the root of the repository

Reviewpad is extremely configurable. You can use it to automate PR labelling or comment when something is not right. It all depends on your project requirements. You can later check the [documentation](../reviewpad-file-specification/aladino-specification/aladino-built-ins) to see all you can do with Reviewpad.

For now let's add a simple configuration. For that navigate to the root of your repository and add a new file named `reviewpad.yml` with the following content:

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
    description: Medium sized pull request
    spec: $size() > 30 && $size() <= 100

  - name: isLarge
    kind: patch
    description: Large sized pull request
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

This particular configuration will ask Reviewpad to label you PRs based on their size.

You can do much more with Reviewpad. Start by looking at some of Reviewpad [use cases](../use-cases/ship-show-ask) or jump right into the available [built-ins](../reviewpad-file-specification/aladino-specification/aladino-built-ins).

> ❗ ️ Terms and Conditions
> 
> By running this action you’re agreeing with [Reviewpad’s Terms and Conditions](https://reviewpad.com/terms-and-conditions/).

> 📘 We are looking for contributors 💪
> 
> Join our [discord community](https://reviewpad.com/discord).