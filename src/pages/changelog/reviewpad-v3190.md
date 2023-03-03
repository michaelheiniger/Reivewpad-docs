## v3.19.0

### New features :fire:

#### Built-ins

- [`context`](/guides/built-ins#context) - Get a JSON serialized string of the current context (pull request / issue)
- [`filesPath`](/guides/built-ins#filespath) - Retrieve the list of all file paths changed in the pull request.
- [`join`](/guides/built-ins#join) - Concatenate an array of strings, using the specified separator between each member.
- [`matchString`](/guides/built-ins#matchstring) - Verify if a provided regular expression pattern is matched by a given text.
- [`selectFromContext`](/guides/built-ins#selectfromcontext) - Select arbitrary value(s) from the current context (pull request / issue) using a [JSONPath](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) expression.
- [`selectFromJSON`](/guides/built-ins#selectfromjson) - Select arbitrary value(s) from a JSON type using a [JSONPath](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) expression.
- [`setProjectField`](/guides/built-ins#setprojectfield) - Set the value of a [custom field](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields) of a GitHub project for the pull request / issue in the current context.
- [`toJSON`](/guides/built-ins#tojson) - Convert a JSON serialized string to a JSON object.

### Bug :bug: {#bug}

- [`review`](/guides/built-ins#review) built-in now properly creates a review for a pull request.
