---
title: "Enforce conventional commits"
id: "enforce-conventional-commits"
---

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification for adding human and machine readable meaning to commit messages

Reviewpad can be used to check and provide an error message if a commit in a pull request do not comply with the conventional commits specification.

## Enforce conventional commits

```yaml
api-version: reviewpad.com/v3.x

mode: silent
edition: professional

rules:
  - name: tautology
    kind: patch
    description: Always true
    spec: 'true'

  - name: does-not-have-linear-history
    kind: patch
    description: Does not have linear history
    spec: '!$hasLinearHistory()'

workflows:
  - name: lint-commits
    description: Lint commit messages 
    if:
      - rule: does-not-have-linear-history
        extra-actions:
          - '$warn("This pull request does not have linear history - please fix this!")'
      - rule: tautology
        extra-actions:
          - '$commitLint()'
```