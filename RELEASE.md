# Release

This documentation details the release process.

## Prerequisites

Please make sure that:

1. You are on the `main` branch of the repository.

```bash
git checkout main
```

2. You have the **latest** version of `main` branch.

```bash
git pull
```

1. You don't have local changes.

```bash
git status
```

## Create version

The first step into the release is to defined which version of [docs.reviewpad.com](https://docs.reviewpad.com) is to be released.

```bash
yarn run docusaurus docs:version VERSION
```

Where `VERSION` is the version to be released, e.g. `3.3.1`.

This command will do the following:

1. Create a copy of the current documentation and add it a new folder `version-VERSION` under `versioned_docs`.
2. Create a copy of the current `sidebars` add it as a new file `version-VERSION-sidebars.json` under `versioned_sidebars`.
3. Add the `VERSION` into `versions.json` file.

## Commit and push it

The next step is to commit and push these changes into the `main` branch.

For this please follow the commit syntax:

```bash
git commit -m "feat(release): version VERSION"
```

Where `VERSION` is the version to be released, e.g. `3.3.1`.

After this you can push the changes into the `main` branch.

```bash
git push origin main
```

## Deploy it

Once the current version of `main` is updated with the version to release we can deploy it.

```bash
yarn deploy
```

This will deploy the documentation into github pages which will be live at [docs.reviewpad.com](https://docs.reviewpad.com).

## Deleting an existing version
You can delete/remove versions as well.

Remove the version from versions.json.

Example:

```diff
[
  "2.0.0",
  "1.9.0",
- "1.8.0"
]
```

Delete the versioned docs directory. Example: `versioned_docs/version-1.8.0`.
Delete the versioned sidebars file. Example: `versioned_sidebars/version-1.8.0-sidebars.json`.