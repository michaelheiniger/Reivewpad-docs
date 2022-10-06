---
id: label-potential-missing-changes
slug: /use-cases/label-potential-missing-changes
title: Label potential missing changes
---

It is fairly common that changes in some files imply changes in other files.

As an example, modifying files in the _src_ directory might need changes in the _docs_ directory.

```yaml
api-version: reviewpad.com/v3.x

labels:
  missing-specs:
    description: Likely missing specs
    # color is the hexadecimal color code for the label, without the leading #.
    color: "294b69"

rules:
  - name: codeChangesImplySpecChanges
    kind: patch
    description: Changes to src and not to spec
    spec: $hasFilePattern("src/**") && !$hasFilePattern("docs/**")

workflows:
  - name: check-for-specs
    description: Check for specs
    if:
      - rule: codeChangesImplySpecChanges
    then:
      - $addLabel("missing-specs")
```

You can see this policy in the following pull request [reviewpad/action-demo/#2](https://github.com/reviewpad/action-demo/pull/2).
