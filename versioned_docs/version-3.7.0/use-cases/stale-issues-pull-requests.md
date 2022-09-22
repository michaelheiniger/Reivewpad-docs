---
title: "Stale Issues or Pull Requests"
id: "stale-issues-or-pull-requests"
---

A `stale issue / pull request` is one which does not have activity for X time duration.

## Add stale label to an issue / pull request and close it if it remains inactive after stale labeling

The following configuration checks for a non-stale issue/pull request if it has been inactive for more than one month then add the stale label.

If after this labeling, the stale issue/pull request remains inactive for more 7 days, then a comment to the issue/pull request is made, notifying of the inactivity, and closes it.

```yaml reviewpad.yml
api-version: reviewpad.com/v3.x

labels:
  stale-label:
    name: stale
    description: Stale issue/pull request

rules:
  - name: labeled-as-stale
    kind: patch
    description: Issue/Pull request has stale label
    spec: '$isElementOf("stale", $labels())'

workflows:
  - name: stale-issue-or-pr-handling
    on:
      - "issue"
      - "pull_request"
    if:
      - rule: '!$rule("labeled-as-stale") && $lastEventAt() < 30 days ago'
        extra-actions:
          - '$info("This issue is stale.")'
          - '$addLabel("stale-label")'
      - rule: '$rule("labeled-as-stale") && $lastEventAt() < 7 days ago'
        extra-actions:
          - '$commentOnce("Closing because this issue has been inactive for more than one month.")'
          - '$close()'
```

## Reviewpad Action

In order to have the automation for `stale issues / pull requests` working properly we need to update our [reviewpad action](https://github.com/marketplace/actions/reviewpad-action) by adding a cron job to schedule the stale test.

```yaml reviewpad.yml
name: Reviewpad

on:
  schedule:
    # Run every day at midnight
    - cron: "0 0 * * *"

jobs:
  reviewpad:
    runs-on: ubuntu-latest
    steps:
      - name: Reviewpad
        uses: reviewpad/action@v3.x
```
