## v3.8.0

### Improvements :rocket: {#improvements}

- Support escaped strings on `reviewpad.yml` file.

**Example:**

```yaml
$comment("<a href=\"https://reviewpad.com/discord\">Join our Discord server</a>")
```

### Bugs :bug: {#bugs}

- Support for the [`schedule`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) event.
- Run Reviewpad on safe mode when changing `reviewpad.yml` file.
