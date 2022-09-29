---
id: enforce-conventional-commits
slug: enforce-conventional-commits
title: Enforce conventional commits
---

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification for adding human and machine readable meaning to commit messages

Reviewpad can be used to check and provide an error message if a commit in a pull request do not comply with the conventional commits specification.

## Enforce conventional commits

```yaml
api-version: reviewpad.com/v3.x

workflows:
  - name: lint-commits
    description: Lint commit messages
    if:
      - rule: "!$hasLinearHistory()"
        extra-actions:
          - '$warn("This pull request does not have linear history - please fix this!")'
      - rule: "true"
        extra-actions:
          - "$commitLint()"
```
