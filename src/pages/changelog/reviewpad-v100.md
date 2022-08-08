---
title: "Reviewpad v1.0.0 (Porto Edition)"
slug: "reviewpad-v100"
createdAt: "2022-06-15T23:07:29.046Z"
hidden: false
---
# New features :fire: 

## YAML Specification
- Updated protectionGates syntax to workflows format.
- Edition property 

## Aladino Language
- [Timestamps](https://docs.reviewpad.com/v1.0.0/docs/timestamps) - RFC3339 timestamps or relative timestamps.

## Aladino Built-ins

### Actions
- [`close`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#close) - Closes a pull request.
- [`comment`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#comment) - Adds a comment to the pull request.
- [`error`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#error-zap) - Add a message to the errors section of the report.
- [`info`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#info-zap) - Add a message to the info section of the report.
- [`warn`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#warn-zap) - Add a message to the warnings section of the report.

### Functions
- [`changed`](https://docs.reviewpad.com/v1.0.0/docs/aladino-builtins#changed-zap) - Checks for correlations between file patterns.