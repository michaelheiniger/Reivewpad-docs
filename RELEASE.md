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

3. You don't have local changes.

```bash
git status
```

4. You can build the project.

```bash
yarn build
```

## Delete the current version from the documentation

| :exclamation: In the following steps we assume that the current version is `v4`. |
| -------------------------------------------------------------------------------- |

1. Navigate into the `versioned_docs` directory and delete the current version.

```bash
rm -rf versioned_docs/version-v4
```

2. Navigate into the `versioned_sidebars` directory and delete the current version.

```bash
rm -rf versioned_sidebars/version-v4-sidebars.json
```

3. In the root of the project open the `versions.json` file and remove the current version.

After the changes the file should look like this:

```json
[
    "v3"
]
```

## Create a new version

| :exclamation: In the following steps we assume that the new version is `v4`. |
| ---------------------------------------------------------------------------- |

On your terminal run the following command:

```bash
yarn run docusaurus docs:version v4
```

This command will do the following:

1. Create a copy of the current documentation and add it a new folder `version-v4` under `versioned_docs`.
2. Create a copy of the current `sidebars` add it as a new file `version-v4-sidebars.json` under `versioned_sidebars`.
3. Add the `v4` into `versions.json` file.

## Run and built it locally

The next step is to run the documentation locally to make sure everything is working as expected.

```bash
yarn start
```

Make sure that the new version is available in the version selector.

Then, build the project.

```bash
yarn build
```

You should be able to build the project without any errors.

## Test the Reviewpad configurations

The project contains a set of Reviewpad configurations used for built-ins showcases and use cases.

If you have updated or added any new Reviewpad configuration please make sure you test it.

For that, you can use the `checker.sh` script that lives in the `scripts` directory.

For the argument `-e` you case use a [GitHub event](https://github.com/reviewpad/reviewpad#using-a-github-event-from-a-reviewpad-github-app-run) from a Reviewpad GitHub App run.

```bash
./scripts/checker.sh <local_location_of_your_reviewpad_cli> <directory_to_look_for_yml_configurations> <github_token> <github_repo> <local_location_of_JSON_file_with_GitHub_event>
```

e.g.

```bash
./scripts/checker.sh ~/reviewpad-cli ./docs GITHUB_TOKEN https://github.com/mascarilha/paddy/pull/1 my_event.json
```

## Commit and push it

The next step is to commit and push these changes into the `main` branch.

Before committing please add the files that were created by the previous step:

```bash
git add .
```

Then commit the changes following the commit syntax:

```bash
git commit -m "chore(release): update version v4"
```

After this, you can push the changes into the `main` branch which will trigger the deployment.

```bash
git push origin main
```

This will deploy the documentation into GitHub pages which will be live at [docs.reviewpad.com](https://docs.reviewpad.com).

You can check the status of the deployment [here](https://github.com/reviewpad/docs/deployments).

## Update algolia

The last step is to update the search index in algolia.

Go to [algolia crawler](https://crawler.algolia.com/admin/crawlers/efcdfdf9-be65-45b0-8fc1-c76dcac68fe2/overview) and click on `Restart crawling`.
