---
id: label-on-change-freeze
slug: /use-cases/label-on-change-freeze
title: Label on change freeze
---

Here's an example of adding a label to not merge a pull request when on change freeze.

```yaml
api-version: reviewpad.com/v3.x

labels:
  do-not-merge:
    name: "do not merge"
    description: Do not merge
    # color is the hexadecimal color code for the label, without the leading #.
    color: "294b69"

rules:
  - name: isChangeFreeze
    kind: patch
    description: Change freeze is happening
    spec: $createdAt() >= 2022-04-05 && $createdAt() <= 2022-04-15

workflows:
  - name: label-no-merge
    description: Label PR with no merge when change freeze
    if:
      - rule: isChangeFreeze
    then:
      - $addLabel("do-not-merge")
```
