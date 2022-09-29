---
id: check-issue-description
slug: check-issue-description
title: Check issue description
---

Reviewpad can be used for workflows on both issues and pull requests.

For example, the following configuration adds an error message to an issue or pull request whose description is empty.

```yaml
api-version: reviewpad.com/v3.x

workflows:
  - name: report-empty-description
    on:
      - "issue"
      - "pull_request"
    always-run: true
    if:
      - '$description() == ""'
    then:
      - '$error("The description is empty. Please add more information!")'
```
