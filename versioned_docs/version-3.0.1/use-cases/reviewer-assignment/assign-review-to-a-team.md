---
title: "Assign review to a team"
id: "assign-review-to-a-team"
---

| :warning: [Requires GitHub token](../docs/installation/install-reviewpad-github-action-with-a-github-token) :warning: |
| -------------------------------------------------------------------------------------------------------------------- |

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