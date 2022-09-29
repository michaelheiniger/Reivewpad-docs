---
id: remove-label-based-on-file-paths
slug: /use-cases/remove-label-based-on-file-paths
title: Remove label based on file paths
---

Here's an example of a `reviewpad.yml` configuration that removes a label from a pull request that contains the proper changes based on the file path.

```yaml
api-version: reviewpad.com/v3.x

labels:
  missing-tests:
    description: Change misses the test specification
    # color is the hexadecimal color code for the label, without the leading #.
    color: "fd5e53"

rules:
  - name: codeChangesWithoutTests
    kind: patch
    description: Changes to src and not to test files
    spec: $hasFilePattern("src/**") && !$hasFilePattern("*_test.go")
  - name: codeChangesWithTests
    kind: patch
    description: Changes to src and to test files
    spec: $hasFilePattern("src/**") && $hasFilePattern("*_test.go")

workflows:
  - name: requireTests
    description: Tests are required
    if:
      - rule: codeChangesWithoutTests
    then:
      - $addLabel("missing-tests")
  - name: clean
    description: Clean up process
    if:
      - rule: codeChangesWithTests
    then:
      - $removeLabel("missing-tests")
```
