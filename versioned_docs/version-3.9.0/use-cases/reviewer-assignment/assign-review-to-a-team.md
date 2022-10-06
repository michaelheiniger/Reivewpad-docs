---
id: assign-review-to-a-team
slug: /use-cases/assign-review-to-a-team
title: Assign review to a team
---

:::caution Requires GitHub token

Please note that this function requires the [Reviewpad Action to be installed with a GitHub token](/getting-started/installation-with-github-token)
:::

An example of assigning a review to a team when touching a specific folder.

```yaml
api-version: reviewpad.com/v3.x

rules:
  - name: changesToConfigurations
    kind: patch
    description: Changes code in configuration folder
    spec: $hasFilePattern("src/config/**")

workflows:
  - name: ask
    description: Ask devops team
    if:
      - rule: changesToConfigurations
    then:
      # Assign the review to devops team
      - $assignTeamReviewer("devops")
```

An example of assigning a review to a specific number of elements on a team.

```yaml
api-version: reviewpad.com/v3.x

rules:
  - name: changesToConfigurations
    kind: patch
    description: Changes code in configuration folder
    spec: $hasFilePattern("src/config/**")

workflows:
  - name: ask
    description: Ask devops team
    if:
      - rule: changesToConfigurations
    then:
      # Assign the review to 3 random reviewers from devops team
      - $assignReviewer($team("devops"), 3)
```

An example of assigning a review to a team and a specific element.

```yaml
api-version: reviewpad.com/v3.x

rules:
  - name: changesToConfigurations
    kind: patch
    description: Changes code in configuration folder
    spec: $hasFilePattern("src/config/**")

workflows:
  - name: ask
    description: Ask devops team
    if:
      - rule: changesToConfigurations
    then:
      # Assign the review to john
      - $assignReviewer(["john"])
      # Assign the review to devops team
      - $assignTeamReviewer("devops")
```
