---
title: "Timestamps"
id: "timestamps"
---

Reviewpad timestamps allow us to trigger workflows based on time.

We are able to use [RFC3339 timestamps](https://pkg.go.dev/time#pkg-constants) or relative timestamps.

### RFC3339 and similar Timestamps

Here we can use a timestamp in similar `RFC3339` format:

- **YYYYMMDD** - e.g. 20220405
- **YYYY-MM-DD** - e.g. 2022-04-05
- **YYYYMMDDTHH:MM:SS** - e.g. 20220405T22:01:50
- **YYYY-MM-DDTHH:MM:SS** - e.g. 2022-04-05T22:01:50

### Relative Timestamps

Use time as expression **`TIME year|month|day|week|hour|minute ago`**:

- 15 days ago
- 3 months ago
- 1 hour ago

> 📘 Aladino Syntax
> 
> Check [Aladino Syntax](../../reviewpad-file-specification/aladino-specification/aladino-syntax.md) for more details about timestamps.