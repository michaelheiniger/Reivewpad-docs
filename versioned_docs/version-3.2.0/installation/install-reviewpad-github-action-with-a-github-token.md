---
title: "Install Reviewpad GitHub Action with a GitHub Token"
id: "install-reviewpad-github-action-with-a-github-token"
---

This guide describes the setup for **Reviewpad GitHub Action with a GitHub Token**.

### Why?

By default a GitHub Action runs with an [automatic token](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) generated and provided by GitHub.

Although this generate token is enough to run most of Reviewpad functions, there are functions that need more permissions to run. An example is the function `$team` that requires access to the organizations' members.

_All functions that require a GitHub Token to be provided are marked with the following message:_

| :warning: Requires a GitHub token :warning: |
| ------------------------------------------- |

Therefore in order to setup Reviewpad GitHub Action with a GitHub Token, follow the following steps:

## Step 1. Generate a GitHub token

In order to do that, please follow [GitHub tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Don't forget to save the token. We will use it in the next step.

Make sure that you give the following permissions when generating the token:

![](https://files.readme.io/b6328f4-Screen_Shot_2022-04-29_at_5.51.25_PM.png "Screen Shot 2022-04-29 at 5.51.25 PM.png")

## Step 2. Add the generated GitHub token to Actions Secrets

1. Go to your GitHub project (the project where you want the Reviewpad Action to run)
2. Select the tab `Setting`
3. On the left select `Actions` under `Secrets`
4. Click the button `New Repository Secret`
5. Add the new secret and then click on `Add secret`
   - Name: `GH_TOKEN`
   - Value: _THE_GENERATED_TOKEN_ON_STEP_1_

![](https://files.readme.io/6282100-Screen_Shot_2022-04-29_at_5.50.36_PM.png "Screen Shot 2022-04-29 at 5.50.36 PM.png")

## Step 3. Open the GitHub project on your IDE

Open the GitHub project where you wish to install the Reviewpad Action with your IDE.

_This is necessary because we will be adding and committing new files to the repository._

## Step 4. Add Reviewpad Action workflow file

At the root of your repository navigate to `.github > workflows` (This is where your project actions live. If you don't have these folders, please create them).

Add the file reviewpad.yml with the following content:

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
        with:
          token: ${{ secrets.GH_TOKEN }}
```

We just added Reviewpad as a GitHub action. We now need to add you're project configuration of Reviewpad.

## Step 5. Add `reviewpad.yml` to the root of the repository

Reviewpad is extremely configurable. You can use it to automate PR labelling or comment when something is not right. It all depends on your project requirements. You can later check the [documentation](../reviewpad-file-specification/aladino-specification/aladino-built-ins.mdx) to see all you can do with Reviewpad.

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

You can do much more with Reviewpad. Start by looking at some of Reviewpad [use cases](../use-cases/ship-show-ask.md) or jump right into the available [builtins](../reviewpad-file-specification/aladino-specification/aladino-built-ins.mdx).

> ❗ ️ Terms and Conditions
> 
> By running this action you’re agreeing with [Reviewpad’s Terms and Conditions](https://reviewpad.com/terms-and-conditions/).

> 📘 We are looking for contributors 💪
> 
> Join our [discord community](https://reviewpad.com/discord).