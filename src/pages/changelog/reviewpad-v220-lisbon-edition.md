## New features :fire: {#new-features}

### YAML Specification

- `ignore-errors` property - Specify if the GitHub action should ignore execution errors. The default value is `false` which means the action will fail if an error occurs.
- `labels` now have a `name` property - Allow readable references to labels. For instance, a label can how have spaces or emojis.

### Aladino Built-ins

### Action

- [`assignTeamReviewer`](/guides/built-ins#assignteamreviewer) - Assign a review to the provided team(s).
- [`startsWith`](/guides/built-ins#startswith) - Check whether a text starts with a certain sentence.

## Improvements :rocket: {#improvements}

### YAML Processing

- Fix `labels` section processing by creating the label in the repository whenever the defined label does not exist.

### Aladino Built-ins

### Action

- [`assignRandomReviewer`](/guides/built-ins#assignrandomreviewer) - Fetches assignees instead of collaborators. _This is because GitHub API does not provide the correct list of reposittory collaborators when using GitHub Action token._
- [`addLabel`](/guides/built-ins#addlabel) - Automatically creates the label if it does not exist and uses the labels section to retrieve name.
- [`removeLabel`](/guides/built-ins#removelabel) - Uses the labels section to retrieve name.

## New Contributors :beers: {#new-contributors}

Many thanks to our new contributors :clap:

- [@dukex](https://github.com/dukex)
- [@GildedHonour](https://github.com/GildedHonour)
- [@thedevsaddam](https://github.com/thedevsaddam)
