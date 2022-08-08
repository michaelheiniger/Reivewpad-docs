---
title: 'Ship/Show/Ask'
id: 'ship-show-ask'
---

[Ship / Show / Ask](https://martinfowler.com/articles/ship-show-ask.html) is a methodology to increase the pace of software teams by not having to block developers for each pull request. 

It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs.

Here’s an example of a `reviewpad.yml` configuration file that we use in our team to automate these three processes.

```yaml
api-version: reviewpad.com/v3.x

labels:
  ask:
    name: "ask"
    description: Ask mode
    # color is the hexadecimal color code for the label, without the leading #.
    color: "fd5e53"
  show:
    name: "show"
    description: Show mode
    color: "ffd800"
  ship:
    name: "ship"
    description: Ship mode
    color: "76dbbe"

groups:
  - name: juniors
    description: Group of developers that have created less than 10 PRs
    kind: developers
    type: filter
    param: developer
    where: $totalCreatedPullRequests($developer) < 10

rules:
  - name: onlyChangesMDFiles
    kind: patch
    description: All files with extension .md
    spec: $hasFileExtensions([".md"])

  - name: onlyChangesTests
    kind: patch
    description: All files with extension .test.ts
    spec: $hasFileExtensions([".test.ts"])

  - name: isSmallPatch
    kind: patch
    description: Patch has less than 50 lines changed
    spec: $size() < 50

  - name: isLargePatch
    kind: patch
    description: Large patch
    spec: $fileCount() > 5

  - name: changesMainFile
    kind: patch
    description: Main file
    spec: $hasFileName("main.js")

  - name: authoredByJunior
    kind: patch
    description: Authored by junior developer
    spec: $isElementOf($author(), $group("juniors"))

workflows:
  - name: ask
    description: Standard ask process
    if:
      - rule: changesMainFile
      - rule: isLargePatch
      - rule: authoredByJunior
    then:
      - $addLabel("ask")
      - $assignRandomReviewer()

  - name: show
    description: Show process - auto-merge and later review
    if:
      - rule: onlyChangesMDFiles
        extra-actions:
          - $assignReviewer($group("seniors"))
      - rule: onlyChangesTests
    then:
      - $addLabel("show")
      - $merge("rebase")

  - name: ship
    description: Ship process - auto-merge without need for review
    if:
      - rule: isSmallPatch
    then:
      - $addLabel("ship")
      - $merge("rebase")
```