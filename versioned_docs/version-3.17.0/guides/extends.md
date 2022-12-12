---
id: "extends"
slug: "/guides/extends"
title: "Extends"
---

# Extends

Through the `extends` property, Reviewpad users can extend the current configuration from other configurations.

This allows the ability to share common specifications for labels, rules and workflows from multiple GitHub repositories
with the possibility to override the inherited configurations.


## How it works

In the Reviewpad configuration, users specify in the `extends` property
a list of other Reviewpad configuration files as GitHub blob urls (e.g. `https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml`).

As an example:
```yml
api-version: reviewpad.com/v3.x

extends:
  - https://github.com/baz/foo/blob/main/common.yml
  - https://github.com/baz/qux/blob/main/team_a.yml
```

These GitHub blob urls can live in different repositories.

:::caution

Please note that Reviewpad GitHub App (or the underlying token used to run Reviewpad) has to be able to read the contents of these repositories.
You can do it by installing the Reviewpad GitHub App in all repositories (or the whole organization) where you which to extend Reviewpad from.

In the example above, Reviewpad GitHub App needs to be installed either in the organization `baz` or in both projects `foo` and `qux`.

:::

The final configuration is computed by concatenating all configurations included in the extends section
(in the order they are specified) with the contents of the current configuration.

If properties have the same name, the one that was defined last overrides the previous ones.

For example, consider the following specification:

```yml
api-version: reviewpad.com/v3.x

extends:
  - https://github.com/baz/foo/blob/main/common.yml
  - https://github.com/baz/qux/blob/main/team_a.yml

workflows:
  - name: small-size
    always-run: true
    if:
      - $size() < 30
    then:
      - $info("this is a small pr")
```

Where `common.yml`:
```yml
api-version: reviewpad.com/v3.x

workflows:
  - name: small-size
    always-run: true
    if:
      - $size() < 5
    then:
      - $info("this is a very small pr")

  - name: medium-size
    always-run: true
    if:
      - $size() >= 30
    then:
      - $info("this is not a small pr")
      - $assignRandomReviewer()
```

and `team_a.yml`:
```yml
api-version: reviewpad.com/v3.x

workflows:
  - name: small-size
    always-run: true
    if:
      - $size() < 10
    then:
      - $info("this is a small pr for team a")

  - name: medium-size
    always-run: true
    if:
      - $size() >= 30
    then:
      - $info("this is not a small pr")
```

The final configuration will be:

```yml
api-version: reviewpad.com/v3.x

workflows:
  # we first load the "medium-size" workflow from common.yml (the first configuration in the extends section)
  # then we override it with the "medium-size" workflow from team_a.yml (the second configuration in the extends section)
  - name: medium-size
    always-run: true
    if:
      - $size() >= 30
    then:
      - $info("this is not a small pr")

  # we first load the "small-size" workflow from common.yml (the first configuration in the extends section)
  # then we override it with the "small-size" workflow from team_a.yml (the second configuration in the extends section)
  # and finally we override it with the "small-size" workflow from the current configuration
  - name: small-size
    always-run: true
    if:
      - $size() < 30
    then:
      - $info("this is a small pr")
```

