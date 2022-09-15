---
title: 'Label critical changes with code pattern'
id: 'label-critical-changes-with-code-pattern'
slug: '/use-cases/label-critical-changes-with-code-pattern'
---

The [hasCodePattern](/guides/built-ins#hascodepattern) built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code.

```yaml
api-version: reviewpad.com/v3.x

labels:
  critical:
    description: Critical code
    # color is the hexadecimal color code for the label, without the leading #.
    color: "fd5e53"

rules:
  - name: callsQuicksort
    kind: patch
    description: Patch contains the keyword quicksort
    spec: $hasCodePattern("quicksort")

workflows:
  - name: critical
    description: Modifications of critical code require careful review
    if:
      - rule: callsQuicksort
    then:
      - $addLabel("critical")
``` 