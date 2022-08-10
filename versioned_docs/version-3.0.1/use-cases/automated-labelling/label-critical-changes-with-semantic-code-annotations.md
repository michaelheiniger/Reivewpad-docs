---
title: 'Label critical changes with semantic code annotations'
id: 'label-critical-changes-with-semantic-code-annotations'
---

The [hasAnnotation](../../reviewpad-file-specification/aladino-specification/aladino-built-ins.mdx#hasannotation) built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks.

To use the annotation in `reviewpad.yml` files, you need to annotate functions of interest with the comment `reviewpad-an: critical`. For example, consider the following [Go function](https://github.com/reviewpad/action-demo/blob/policies/go/quicksort.go#L6):

```go
// reviewpad-an: critical
func quicksort(a []int) []int {
	if len(a) < 2 {
		return a
	}

	left, right := 0, len(a)-1

	pivot := rand.Int() % len(a)

	a[pivot], a[right] = a[right], a[pivot]

	for i := range a {
		if a[i] < a[right] {
			a[left], a[i] = a[i], a[left]
			left++
		}
	}

	a[left], a[right] = a[right], a[left]

	quicksort(a[:left])
	quicksort(a[left+1:])

	return a
}
```

From now on, we can automatically label PRs that modify the content of this function:

```yaml
api-version: reviewpad.com/v3.x

labels:
  critical:
    description: Critical code
    # color is the hexadecimal color code for the label, without the leading #.
    color: "fd5e53"

rules:
  - name: changesCriticalCode
    description: Patch involves a critical method or function
    kind: patch
    spec: $hasAnnotation("critical")

workflows:
  - name: critical
    description: Modifications of critical code require careful review
    if:
      - rule: changesCriticalCode
    then:
      - $addLabel("critical")
```

As an example, check out [reviewpad/action-demo/#10](https://github.com/reviewpad/action-demo/pull/10).

In a future version, we plan to allow such specification in configuration files, for developers that do not want to add such annotations to the source code. Effectively, Reviewpad allows to implement a much more advanced version of CODEOWNERS.