---
id: "annotations"
slug: "/guides/annotations"
title: "Annotations"
---

# Annotations

Annotations are a way to add metadata to your code. They are not executed by the compiler, but they can be used by other tools to generate code, generate documentation, or perform other tasks.

## Why?

There are several reasons why using annotation in code can be beneficial.

One reason is to enhance code review by creating means to identify areas that need special care. For example, you can create an annotation that marks a method as deprecated, which can then be used to generate a warning to when the method is changed.

Another example is to annotate a symbol as being critical. This can be used to create awareness of when critical code is being changed and therefore to ensure that the change is reviewed by the appropriate people.

## Reviewpad Annotations

Reviewpad supports the following annotations:

### `@reviewpad-an: <annotation>`

This annotation marks a symbol with the provided `<annotation>`. The annotation can be any string, but it is recommended to use a short string that is unique to your project. For example, `@reviewpad-an: critical`.

This annotation can then be used to identify when a symbol has been changed. We can do that using the built-in [hasAnnotation](/guides/built-ins/#hasannotation).

#### Example

Here's an example of how to use the `@reviewpad-an` annotation.

Let's say we want to identify all pieces of code (i.e. symbols) that are `critical` to our project. We can do that by adding the `@reviewpad-an: critical` annotation to all of the critical symbols.

```go
package main

import "fmt"

// @reviewpad-an: critical
func main() {
  fmt.Println("Hello, World!")
}
```

We've marked our `main` function as `critical` symbol to our project.

Now, we can use the [hasAnnotation](/guides/built-ins/#hasannotation) built-in, in our reviewpad configuration, to identify when a `critical` symbol has been changed, and take the appropriate action.

```yml
api-version: reviewpad.com/v3.x

workflows:
  - name: changes-critical-code
    if:
    - rule: $hasAnnotation("critical")
        extra-actions:
        - $warn("This pull request includes critical changes! Please review it carefully.")
```

Now, every time a `critical` symbol is changed, reviewpad will add a warning to the pull request.

In this example, if we change the `main` function, because it is a `critical` symbol, reviewpad will add the specified warning to the pull request.
