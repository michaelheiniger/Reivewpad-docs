---
title: "Installation"
slug: "installation"
---

This guide describes how to install Reviewpad :zap:

:::info INFO

Some actions require a GitHub token :key:

To install Reviewpad with a GitHub token please [follow this tutorial](/getting-started/installation-with-github-token)
:::

**Reviewpad runs as a GitHub action** at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it.

To install Reviewpad on a repository, please follow the following steps.

## Step 1. Open the GitHub project on your IDE

Open the GitHub project where you wish to install Reviewpad.

Use your IDE for this since we will be adding new files to the project.

## Step 2. Add `Reviewpad Action` workflow file

At the root of your repository navigate to `.github > workflows` (This is where your project GitHub actions live. If you don't have these folders, please create them). 

![root of the repo](https://user-images.githubusercontent.com/43396684/186570617-9dab7df4-35e2-41f2-8dd3-b2823b822813.png)![workspcase folder](https://user-images.githubusercontent.com/43396684/186570760-4a8f72f8-09d5-4e88-97bb-860c40d6364f.png)

Add the file `reviewpad.yml` and copy the following content:

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
![file inside workspace folder](https://user-images.githubusercontent.com/43396684/186570845-52bf0570-567d-48eb-8855-019b2c2de54f.png)![reviewpad action](https://user-images.githubusercontent.com/43396684/186571129-83c04a46-85ea-46fb-8199-b3ead06f55f5.png)


## Step 3. Add `reviewpad.yml` to the root of your repository

Let's add a simple Reviewpad configuration. You can change it later on :muscle:

On the root of your repository create the `reviewpad.yml` file and copy the following content:

```yaml
api-version: reviewpad.com/v3.x

labels:
  small:
    color: "294b69"
  medium:
    color: "a8c3f7"
  large:
    color: "8a2138"

workflows:
  - name: label-pull-request-with-size
    if:
      - rule: $size() <= 30
        extra-actions:
          - $addLabel("small")
      - rule: $size() > 30 && $size() <= 100
        extra-actions:
          - $addLabel("medium")
      - rule: $size() > 100
        extra-actions:
          - $addLabel("large")
```
![reviewpad file in root folder](https://user-images.githubusercontent.com/43396684/186571053-7221fe45-205a-44cb-a199-9e5963e277b5.png)![reviewpad config](https://user-images.githubusercontent.com/43396684/186571269-368f57f1-f16d-47d4-91c1-485f5531fe7f.png)



This particular configuration will label the pull requests based on their size.

You can do much more with Reviewpad. Start by looking at some of Reviewpad [use cases](/use-cases) or jump right into the available [built-ins/guides/built-ins).

:::info Terms and Conditions

By running this action you're agreeing with [Reviewpad's Terms and Conditions](https://reviewpad.com/terms-and-conditions/).
:::
