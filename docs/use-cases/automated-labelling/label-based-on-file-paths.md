---
title: 'Label based on file paths'
id: 'label-based-on-file-paths'
---

Here's an example of a `reviewpad.yml` configuration that label pull requests that contain changes to a certain filepath.

```yaml
api-version: reviewpad.com/v3.x

labels:
  critical:
    description: Critical changes
    # color is the hexadecimal color code for the label, without the leading #.
    color: "fd5e53"

rules:
  - name: changesMainFile
    kind: patch
    description: Patch contains changes to the main file
    spec: $hasFileName("go/main.go")

workflows:
  - name: critical
    description: Modifications of critical code require careful review
    if:
      - rule: changesMainFile
    then:
      - $addLabel("critical")
```