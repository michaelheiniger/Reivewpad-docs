---
title: "How it Works"
slug: "how-it-works"
excerpt: "This page describes some of the Reviewpad internals."
hidden: true
createdAt: "2022-03-25T11:58:36.280Z"
updatedAt: "2022-03-25T14:29:47.765Z"
---

Reviewpad is a web code review tool for Git projects. It provides a seamless integration with code hosts such as Bitbucket, GitHub and GitLab (including their self-hosted versions) with a modern interface for code reviews that combines the best of code visualisation methods and static code analysis technology.

## Key Design Features

Reviewpad has the following key design features:

1. **On-premise deployments.** You can setup Reviewpad in a single developer environment, in a server for dozens of developers to use or even scale it with a kubernetes cluster for hundreds of developers. You can monitor all Reviewpad’s requests for maximum security.
2. **Zero configuration required.** You don’t need to configure your team members or configure review settings - Reviewpad mirrors the permission system from the code hosts so that users only have access to the same information as they would have there. The same is applied to actions - you can’t merge a pull request on Reviewpad unless you can do it on the code host.
3. **Easy adoption curve.** Reviewpad integrates seamless with code hosts. That means that in a team of 10 developers, you don’t need all 10 developers to use Reviewpad in their review process at first. Because all the actions in Reviewpad are propagated back and forth between code hosts, a subset of the team can safely use it for reviews without breaking the existing review process.

It has been designed to ease security concerns that are connected with any tool that handles sensitive and propriety information such as code, comments and personal information. If you have any security concerns or require further information [contact our security team](mailto:security@reviewpad.com).

---

## Overview

Reviewpad is an abstraction layer on top of existing code hosts that use git such as Bitbucket, GitHub and GitLab.

![How%20It%20Wor%20c0f80/Overview.png](How%20It%20Wor%20c0f80/Overview.png)

Reviewpad Conceptual Overview

Reviewpad Conceptual Overview

Reviewpad integrates with a code host so that communication is performed bidirectionally. That is, an action on Reviewpad (e.g. submission of a user review) is sent to the code host using their REST or GraphQL API. An action on the code host is propagated back to Reviewpad through Webhooks.

Communication between code hosts and Reviewpad requires extra configuration and typically done in the Team **plan. However, we provide special refresh actions that actively probe the code host through their APIs to keep your instance of Reviewpad up-to-date with actions in the code host that were not yet processed by Reviewpad.

---

## Architecture

Reviewpad is composed of two main components:

- Front-end service: Web react application that implements the review interface. This is the main service that users interact with in their browser. In terms of network, the front-end service only communicates with the back-end service.
- Back-end service: Microservices application that exposes a REST API.

The following diagram presents an overview of Reviewpad’s architecture.

![How%20It%20Wor%20c0f80/Architecture.png](How%20It%20Wor%20c0f80/Architecture.png)

Reviewpad Architecture Overview

Reviewpad Architecture Overview

Other components necessary for Reviewpad to work are:

- PostgreSQL database that stores permanent information.
- Docker volume that Reviewpad uses to store git projects.

For more information on how to deploy Reviewpad to your team check visit [Deploying Reviewpad to Your Team](Deploying%20%20d3327.md).

---

If you have any security concerns or require further information [contact our security team](mailto:security@reviewpad.com).