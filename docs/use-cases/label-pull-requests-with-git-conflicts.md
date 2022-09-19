---
title: 'Label pull requests with Git conflicts'
id: 'label-pull-requests-with-git-conflicts'
---

It can be tiresome to open a pull request and realize that it has Git conflicts.

Here's an example of a `reviewpad.yml` configuration file that labels pull requests that have Git conflicts.

```yaml reviewpad.yml
api-version: reviewpad.com/v3.x

workflows:
  - name: label-pull-requests-with-git-conflicts
    if:
      - '$hasGitConflicts()'
    then:
      - '$addLabel("conflicts")'
```

## Reviewpad Action

In order to have the automation for the labelling of pull requests that have Git conflicts we can use the following [reviewpad action](https://github.com/marketplace/actions/reviewpad-action) configuration that will be triggered whenever there is a push to the `main` branch.

```yaml reviewpad.yml
name: Reviewpad

on:
  push:
    branches:
       - main

jobs:
  reviewpad:
    runs-on: ubuntu-latest
    steps:
      - name: Reviewpad
        uses: reviewpad/action@v3.x
```
