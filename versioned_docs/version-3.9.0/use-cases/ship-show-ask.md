---
id: ship-show-ask
slug: ship-show-ask
title: Ship/Show/Ask
---

**Ship/Show/Ask** is a methodology to increase the pace of software teams by not having to block developers for each pull request.

It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs.

Here's an example of a `reviewpad.yml` configuration file that we use in our team to automate these three processes.

```yaml
api-version: reviewpad.com/v3.x

labels:
  ask:
    color: 'fd5e53'
  show:
    color: 'ffd800'
  ship:
    color: '76dbbe'

groups:
  - name: juniors
    kind: developers
    type: filter
    param: developer
    where: '$totalCreatedPullRequests($developer) < 10'

workflows:
  - name: ask
  description: Ask process - request a review before merge
    if:
      - '$hasFileName("main.js")'
      - '$fileCount() > 5'
      - '$isElementOf($author(), $group("juniors"))'
    then:
      - '$addLabel("ask")'
      - '$assignRandomReviewer()'

  - name: show
    description: Show process - auto-merge and later review
    if:
      - rule: '$hasFileExtensions([".md"])'
        extra-actions:
          - '$assignReviewer($group("seniors"))'
      - '$hasFileExtensions([".test.ts"])'
    then:
      - '$addLabel("show")'
      - '$merge("rebase")'

  - name: ship
    description: Ship process - auto-merge without need for review
    if:
      - '$size() < 50'
    then:
      - '$addLabel("ship")'
      - '$merge("rebase")'
```

### Know more

- [Ship/Show/Ask methodology](https://martinfowler.com/articles/ship-show-ask.html)
