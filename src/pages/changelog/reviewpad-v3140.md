## New features :fire:

### Aladino Language

- New `Func` type - `Func(<PARAMETERS_TYPE_LIST>) <RETURN_TYPE>` (e.g. `Func(Int) String`)
- Nested array types - `<NESTED_ARRAYS_TYPE><ITEMS_TYPE>` (e.g. `[][]String` or `[][][]Int`)

## Improvements :rocket: {#improvements}

### Aladino Language

- Array type syntax updated to `[]<RETURN_TYPE>` (e.g. `[]String`)

### Aladino Built-ins

### Functions

- Set `pullRequestCountBy` parameter `state` as optional (e.g. `$pullRequestCountBy("username")`)
- Set `issueCountBy` parameter `state` as optional (e.g. `$issueCountBy("username")`)

## Bugs :bug: {#bugs}

- Do not re-request a review unless a new commit has been pushed.
