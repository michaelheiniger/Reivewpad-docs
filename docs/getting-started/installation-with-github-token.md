---
id: installation-with-github-token
slug: installation-with-github-token
title: Installation with a GitHub Token
---

This guide describes how to install Reviewpad with a GitHub Token.

### Why?

Reviewpad runs as a GitHub Action and by default a GitHub Action runs with an [automatic token](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) generated and provided by GitHub.

Although this generate token is enough to run most of Reviewpad functions, there are functions that need more permissions to run. An example is the function `$team` that requires access to the organizations' members.

_All functions that require a GitHub Token to be provided are marked with the following message:_

:::caution Requires GitHub token

Please note that this function requires the [Reviewpad to be installed with a GitHub token](/getting-started/installation-with-github-token)
:::

Therefore in order to setup Reviewpad with a GitHub Token, follow the following steps:

## Step 1. Generate a GitHub token

In order to do that, please follow [GitHub tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Don't forget to save the token. We will use it in the next step.

Make sure that you give the following permissions when generating the token:

![GitHub Permissions](/img/install-token-permissions.png)

## Step 2. Add the generated GitHub token to Actions Secrets

1. Go to your GitHub project (the project where you want the Reviewpad Action to run)
2. Select the tab `Setting`
3. On the left select `Actions` under `Secrets`
4. Click the button `New Repository Secret`
5. Add the new secret and then click on `Add secret`
   - Name: `GH_TOKEN`
   - Value: _THE_GENERATED_TOKEN_ON_STEP_1_

![GitHub Secrets](/img/install-token-secrets.png)

## Step 3. Open the GitHub project on your IDE

Open the GitHub project where you wish to install the Reviewpad.

Use you're IDE for this since we will be adding new files to the project.

## Step 4. Add `Reviewpad Action` workflow file

At the root of your repository navigate to `.github > workflows` (This is where your project actions live. If you don't have these folders, please create them).

Add the file `reviewpad.yml` with the following content:

```yaml
name: Reviewpad Action

on: pull_request

jobs:
  reviewpad-action:
    runs-on: ubuntu-latest
    steps:
      - name: Running reviewpad action
        uses: reviewpad/action@v3.x
        with:
          token: ${{ secrets.GH_TOKEN }}
```

## Step 5. Add `reviewpad.yml` to the root of the repository

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

This particular configuration will ask Reviewpad to label you PRs based on their size.

You can do much more with Reviewpad. Start by looking at some of Reviewpad [use cases](/use-cases) or jump right into the available [built-ins](/guides/built-ins).

:::info Terms and Conditions

By running this action you're agreeing with [Reviewpad's Terms and Conditions](https://reviewpad.com/terms-and-conditions/).
:::
