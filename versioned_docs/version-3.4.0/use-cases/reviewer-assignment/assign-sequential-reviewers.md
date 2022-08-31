---
title: 'Assign reviewers in a sequence'
id: 'assign-sequential-reviewers'
slug: '/use-cases/assign-sequential-reviewers'
---

In certain cases, it is very useful to specify an order in which the pull request should be reviewed.

For example, the following configuration enforces that changes to files in the database migration files will be first reviewed 
by john and only when john approves the changes it will be reviewed by the security team.

```yaml
api-version: reviewpad.com/v3.x

pipelines:
  - name: security-changes
    trigger: $hasFilePattern("services/db/migrations/**")
    stages:
      - actions:
          - '$assignReviewer(["john"])'
        until: $reviewerStatus("john") == "APPROVED"
      - actions:
          - '$assignTeamReviewer(["security"])'
```