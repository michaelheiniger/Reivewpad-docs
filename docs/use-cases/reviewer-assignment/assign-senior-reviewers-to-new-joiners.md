---
title: 'Assign senior reviewers to new joiners'
id: 'assign-senior-reviewers-to-new-joiners'
slug: '/use-cases/assign-senior-reviewers-to-new-joiners'
---

Here's an example of assigning senior reviewers to new joiners pull requests.

```yaml
api-version: reviewpad.com/v3.x

labels:
  priority:
    description: Priority reviews
    # color is the hexadecimal color code for the label, without the leading #.
    color: "294b69"

groups:
  - name: seniors
    description: Group of senior developers
    kind: developers
    spec: '["torvalds"]'

  - name: juniors
    description: Group of developers that have created less than 10 PRs
    kind: developers
    type: filter
    param: developer
    where: $pullRequestCountBy($developer) < 10

rules:
  - name: authoredByJunior
    kind: patch
    description: Patch is authored by a junior dev
    spec: $isElementOf($author(), $group("juniors"))

workflows:
  - name: critical
    description: PRs by juniors should be reviewed by the gods
    if:
      - rule: authoredByJunior
    then:
      - $addLabel("priority")
      - $assignReviewer($group("seniors"))
```