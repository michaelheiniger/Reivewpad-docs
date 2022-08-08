---
title: "Assign review to 3 developers"
id: "assign-review-to-3-developers"
---

An example of assigning a review to at least 3 developers when changing critical code.

```yaml
api-version: reviewpad.com/v3.x

rules:
  - name: changesTransactionsCode
    kind: patch
    description: Changes code in transactions
    spec: $hasFilePattern("src/transactions/**")

workflows:
  - name: ask
    description: Ask 3 developers for review
    if:
      - rule: changesTransactionsCode
    then:
      - $assignReviewer($organization(), 3)
```