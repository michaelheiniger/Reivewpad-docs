---
id: "migrations"
slug: "/guides/migrations"
title: "Migrations"
---

import CodeBlock from "@theme/CodeBlock";
import LabelSizeConfiguration from "!!raw-loader!../use-cases/automated-labelling/label-with-size/example.yml";

# Migrations

This guide explains how to complete Reviewpad migrations.

## Migrate from the GitHub Action to the GitHub App

Using [Reviewpad action](/getting-started/installation-action-tokenized) is a great way to get started with Reviewpad. However, it has some limitations. Depending if you are using [Reviewpad action with a GitHub token](/getting-started/installation-action-tokenized) you won't be able to use all Reviewpad built-ins. Also, some of the [Reviewpad use cases](/use-cases) won't be possible to implement.

To overcome these limitations, you can migrate to the Reviewpad GitHub App. The migration is a simple process that can be completed in a few steps.

:::caution

**To install the [Reviewpad GitHub App](https://github.com/apps/reviewpad), you need to be an admin of the GitHub organization where you want to install it**.

If you are not an admin, you can ask your admin to install the [Reviewpad GitHub App](https://github.com/apps/reviewpad).

:::

## Step 1. Navigate to the Reviewpad GitHub App page

Open the [Reviewpad GitHub App page](https://github.com/apps/reviewpad) and click the green button `Install`.

![Reviewpad Installation - Step 1](/img/installation/step1.png)

## Step 2. Choose which repositories to install Reviewpad on

You can choose to install Reviewpad on all repositories or select specific repositories.

Once you have selected the option you want, click the green button `Install`.

![Reviewpad Installation - Step 2](/img/installation/step2.png)

:::info

After you click the `Install` button you will be redirected to Reviewpad documentation. You can close it and continue with this migration.

:::

## Step 3. Configure Reviewpad

:::tip

If you already have a Reviewpad configuration file, you can [skip this step](#step-4-delete-reviewpad-action).

:::

If you don't have a Reviewpad configuration file, create a file called `reviewpad.yml` in the root of your repository and add the following content:

<CodeBlock language="yml">{LabelSizeConfiguration}</CodeBlock>

## Step 4. Delete Reviewpad action

Finally, delete the Reviewpad action from your repository. To do this, navigate to `.github > workflows` and delete the file `reviewpad.yml`.

![Reviewpad Delete Action](/img/migrations/delete-action.gif)
