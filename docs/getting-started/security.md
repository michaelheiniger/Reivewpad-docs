---
title: "Security"
id: "security"
slug: "security"
---

Reviewpad is distributed as a GitHub App. This means that it is installed on your GitHub account and has access to your repositories.

The repositories to which Reviewpad has access are defined at the installation time. All repositories outside of the defined list are not accessible to Reviewpad.

Reviewpad executions do not communicate between them, they are ephemeral and run in an isolated environment from other users so that there is no possibility of information leaks between environments.

## Permissions

Reviewpad requires the following permissions:

### Repository permissions

| Description                                                                                                    | Permissions    |
| -------------------------------------------------------------------------------------------------------------- | -------------- |
| [Actions](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#actions)               | Read and write |
| [Administration](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#administration) | Read-only      |
| [Checks](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#checks)                 | Read and write |
| [Code scanning alerts](https://docs.github.com/v3/apps/permissions)                                            | Read-only      |
| [Commit statuses](https://docs.github.com/v3/apps/permissions#commit-statuses)                                 | Read and write |
| [Contents](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#contents)             | Read and write |
| [Dependabot alerts](https://docs.github.com/v3/apps/permissions#dependabot-alerts)                             | Read-only      |
| [Deployments](https://docs.github.com/v3/apps/permissions#deployments)                                         | Read-only      |
| [Issues](https://docs.github.com/v3/apps/permissions#issues)                                                   | Read and write |
| [Merge queues](https://docs.github.com/v3/apps/permissions)                                                    | Read and write |
| [Metadata](https://docs.github.com/v3/apps/permissions#metadata)                                               | Read-only      |
| [Packages](https://docs.github.com/v3/apps/permissions)                                                        | Read-only      |
| [Pull requests](https://docs.github.com/v3/apps/permissions#pull-requests)                                     | Read and write |
| [Secret scanning alerts](https://docs.github.com/v3/apps/permissions#secret-scanning-alerts)                   | Read-only      |
| [Webhooks](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#repository-webhooks)  | Read and write |

### Repository permissions

| Description                                                                                                                 | Permissions    |
| --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [Administration](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#organization-administration) | Read-only      |
| [Members](https://docs.github.com/v3/apps/permissions#members)                                                              | Read-only      |
| [Projects](https://docs.github.com/v3/apps/permissions#organization-projects)                                               | Read and write |
