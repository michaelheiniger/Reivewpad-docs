---
title: 'Label based on author groups'
id: 'label-based-on-author-groups'
slug: '/use-cases/label-based-on-author-groups'
---

Here's an example of a `reviewpad.yml` configuration that label pull requests authored by a member of a group of developers.

Suppose that, as Spotify, you consider developers _new joiner_ until they create/merge their [10th PR](https://backstage.spotify.com/blog/measuring-backstage-success-at-spotify/). Each time a _new joiner_ creates a PR, you want to label it in order to be able to perform a dedicated code review process. Using Reviewpad groups you can easily do such labeling.

```yaml
api-version: reviewpad.com/v3.x

labels:
  new-joiner:
    description: Pull requests created by new joiners
    # color is the hexadecimal color code for the label, without the leading #.
    color: "294b69"

groups:
  - name: newJoiners
    description: Group of developers that have created less than 10 PRs
    kind: developers
    type: filter
    param: developer
    where: $totalCreatedPullRequests($developer) < 10

rules:
  - name: authoredByNewJoiner
    kind: patch
    description: Patch authored by new joiner
    spec: $isElementOf($author(), $group("newJoiners"))

workflows:
  - name: critical
    description: Modifications by new joiners require careful review
    if:
      - rule: authoredByNewJoiner
    then:
      - $addLabel("new-joiner")
```