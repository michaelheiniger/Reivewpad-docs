---
title: "Security"
id: "security"
slug: "security"
---

Reviewpad is distributed through Docker images so that it can be executed easily with any runner. This can be either a GitHub action runner, developer machine, or a server in the organization.

:::info INFO

A running instance of Reviewpad does not communicate with [reviewpad.com](http://reviewpad.com/) servers or any non-disclosed third-party to send any information.
:::

Reviewpad executions do not communicate between them, they are ephemeral and run in an isolated environment from other users so that there is no possibility of information leaks between environments.

For further investigation, you can inspect the Docker images on [dockerhub](https://hub.docker.com/repository/docker/reviewpad/action).
