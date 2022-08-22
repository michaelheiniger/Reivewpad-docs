---
title: "Notify when long live pull request"
id: "notify-when-long-live-pull-request"
slug: "/use-cases/notify-when-long-live-pull-request"
---

Here's an example of notifying the pull request author when the pull request has been opened for a long time.

```yml
api-version: reviewpad.com/v3.x

rules:
  - name: longLiveChange
    kind: patch
    description: PR has been open for more than 15 days
    spec: $createdAt() < 15 days ago

workflows:
  - name: notify-long-live-pr
    description: Notify author when long live PR
    if:
      - rule: longLiveChange
    then:
      - $comment("This PR has been opened for more than 15 days. Please consider closing it!")
```