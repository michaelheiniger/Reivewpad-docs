---
id: auto-merge
slug: auto-merge
title: Auto-merge
---

:::caution Requires GitHub token

Please note that this function requires the [Reviewpad Action to be installed with a GitHub token](/getting-started/installation-with-github-token)
:::

The ability to configure automatic PR merges can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review.

Since not every PR needs the same review process, using the semantic features of Reviewpad, you can configure many scenarios where auto-merge seems natural.

Out of the box, Reviewpad supports a [merge action](/guides/built-ins#merge) which can be used in multiple scenarios.

## Auto-merge based on file properties

```yaml
api-version: reviewpad.com/v3.x

labels:
  ship:
    description: Ship mode
    # color is the hexadecimal color code for the label, without the leading #.
    color: "76dbbe"

rules:
  - name: changesToMDFiles
    kind: patch
    description: Patch only contains changes to files with extension .md
    spec: $hasFileExtensions([".md"])

workflows:
  - name: ship
    description: Ship process - bypass the review and merge with rebase
    if:
      - rule: changesToMDFiles
    then:
      - $addLabel("ship")
      - $merge()
```

## Auto-merge small PRs

```yaml
api-version: reviewpad.com/v3.x

labels:
  ship:
    description: Ship mode
    color: "76dbbe"

rules:
  - name: isSmallPatch
    kind: patch
    description: Patch has less than 90 changes and 6 files
    spec: $size() < 90 && $fileCount() <= 5

workflows:
  - name: ship
    description: Ship process - bypass the review and merge with rebase
    if:
      - rule: isSmallPatch
    then:
      - $addLabel("ship")
      - $merge("rebase")
```

## Auto-merge non-critical PRs

The [**hasAnnotation**](/guides/built-ins#hasannotation) built-in can be used to configure powerful auto-merges. See a more in-depth example of the usage of [**hasAnnotation**](/guides/built-ins#hasannotation) in the [automated labelling section](/use-cases/label-critical-changes-with-semantic-code-annotations).

```yaml
api-version: reviewpad.com/v3.x

labels:
  ship:
    description: Ship mode
    color: "76dbbe"

rules:
  - name: notCriticalChanges
    kind: patch
    description: Patch does not touch critical code
    spec: '!$hasAnnotation("critical")'

workflows:
  - name: ship
    description: Ship process - bypass the review and merge with rebase
    if:
      - rule: notCriticalChanges
    then:
      - $addLabel("ship")
      - $merge("rebase")
```
