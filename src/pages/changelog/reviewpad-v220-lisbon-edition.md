---
title: "Reviewpad v2.2.0 (Lisbon Edition)"
slug: "reviewpad-v220-lisbon-edition"
createdAt: "2022-06-29T11:31:57.257Z"
hidden: false
---
New features :fire:
===================

YAML Specification
------------------

- `ignore-errors` property - Specify if the GitHub action should ignore execution errors. The default value is `false` which means the action will fail if an error occurs.
- `labels` now have a `name` property - Allow readable references to labels. For instance, a label can how have spaces or emojis.

Aladino Built-ins
-----------------

### Action

- [`assignTeamReviewer`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#assignteamreviewer) - Assign a review to the provided team(s).
- [`startsWith`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#addlabel) - Check whether a text starts with a certain sentence.

Improvements :rocket:
=====================

YAML Processing
---------------

- Fix `labels` section processing by creating the label in the repository whenever the defined label does not exist.

Aladino Built-ins
-----------------

### Action

- [`$assignRandomReviewer`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#assignrandomreviewer) - Fetches assignees instead of collaborators. _This is because GitHub API does not provide the correct list of reposittory collaborators when using GitHub Action token._
- [`addLabel`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#addLabel) - Automatically creates the label if it does not exist and uses the labels section to retrieve name.
- [`removeLabel`](https://docs.reviewpad.com/v2.2.0/docs/aladino-builtins#removeLabel) - Uses the labels section to retrieve name.

New Contributors :beers:
========================

Many thanks to our new contributors :clap:

- [@dukex](https://github.com/dukex)
- [@GildedHonour](https://github.com/GildedHonour)
- [@thedevsaddam](https://github.com/thedevsaddam)