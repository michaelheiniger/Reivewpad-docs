---
title: "Aladino semantics"
id: "semantics"
slug: "semantics"
---

Aladino supports five types of values: `booleans`, `numbers`, `strings`, `arrays` and a special type `_action_`.

Since the language is quite simple, it is also straightforward to perform type inference.

There are two requirements when it comes to typing:

1. The type of the expression in a rule `spec` is _bool_. For example, the following rule is invalid:

```yaml
- name: doesnt-type-check-to-bool
  kind: patch
  description: Rule that does not type check to bool
  spec: "hello" # type error
```

2. The type of each action to be _effect._ For example, the following `workflow` is invalid because of its actions:

```yaml
- name: invalid-workflow
  description: Invalid workflow because of action
  if:
    - rule: rule_1
  then:
    - "hello" # type error
```

Since, by design, you cannot define functions or variables, the usefulness of the language comes down to the set of built-in variables and functions that are provided.
