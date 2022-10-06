---
id: enforce-branch-conventions
slug: enforce-branch-conventions
title: Enforce branch conventions
---

To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.

Reviewpad can be used enforce a branch naming policy and also automatically add labels based on the branch names.

## Enforce branch name and add label based on branches

```yaml
api-version: reviewpad.com/v3.x

labels:
  release-minor:
    name: "release:minor :hash::arrow_up::hash:"
    description: Release the changes as a minor
    color: "E96F70"
  release-patch:
    name: "release:patch :hash::hash::arrow_up:"
    description: Release the changes as a patch
    color: "FF9085"
  release-skip:
    name: "release:skip :hash::hash::hash:"
    description: Do not release changes
    color: "FFE9DE"
  type-bugfix:
    name: "type:bugfix :beetle:"
    description: Provides a bug fix
    color: "F9B1C9"
  type-enhancement:
    name: "type:enhancement :ok_hand:"
    description: Provides an enhancement
    color: "92E7F3"
  type-feature:
    name: "type:feature :rocket:"
    description: Provides a new feature
    color: "65ECA3"
  type-hotfix:
    name: "type:hotfix :ninja:"
    description: Provides a hot fix
    color: "BBA7E4"
  type-support:
    name: "type:support :hammer:"
    description: Provides a misc change
    color: "CDDBDC"

workflows:
  - name: enforce-branch-naming
    if:
      - rule: '$startsWith($head(), "bugfix/")'
        extra-actions:
          - '$addLabel("release-patch")'
          - '$addLabel("type-bugfix")'
      - rule: '$startsWith($head(), "enhancement/")'
        extra-actions:
          - '$addLabel("release-minor")'
          - '$addLabel("type-enhancement")'
      - rule: '$startsWith($head(), "feature/")'
        extra-actions:
          - '$addLabel("release-minor")'
          - '$addLabel("type-feature")'
      - rule: '$startsWith($head(), "hotfix/")'
        extra-actions:
          - '$addLabel("release-patch")'
          - '$addLabel("type-hotfix")'
      - rule: '$startsWith($head(), "support/")'
        extra-actions:
          - '$addLabel("release-patch")'
          - '$addLabel("type-support")'

  - name: default-policy
    description: By default it will put a warning
    if:
      - "true"
    then:
      - '$addLabel("needs-review")'
      - '$warn("All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.")'

  - name: require-linear-history
    always-run: true
    if:
      - "!$hasLinearHistory()"
    then:
      - '$warn("This pull request does not have linear history - please fix this!")'
```
