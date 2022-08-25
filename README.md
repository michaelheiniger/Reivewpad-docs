# Reviewpad Documentation

This repo contains the source powering up [docs.reviewpad.com](https.docs.reviewpad.com).

## Getting started

### Prerequisites

1. [Git](https://git-scm.com/)
2. [Nodejs](https://nodejs.org/en/): version v16.14.0 or greater
3. Yarn v1: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
4. A fork of the repo (for any contributions)
5. A clone of the [reviewpad/docs](https://github.com/reviewpad/docs) repo on your local machine

### Installation

1. Navigate into the project root
   
```bash
cd docs
```

3. Install the website's npm dependencies

```bash
yarn
```

### Running locally

1. Start a local development server

```bash
yarn start
```

> **Note**
> 
>  You browser should open automatically. If that's not the case please navigate to [http://localhost:3000](http://localhost:3000).

> **Note**
> 
>  Most changes are reflected live without having to restart the server.

## Contributing

### Create a branch

1. Checkout the `main` branch from any folder in your local `docs.reviewpad.com` repository

```bash
git checkout main
```

2. Ensure you have the latest main code

```bash
git pull origin main
```

3. Create a new branch

```bash
git checkout -b THE-NAME-OF-MY-BRANCH
```

> **Warning**
> 
>  Please replace `THE-NAME-OF-MY-BRANCH` with a suitable name for your branch

### Make the change

1. Follow the ["Running locally"](#running-locally) instructions
2. Save the files and check in the browser
   
### Test the change

If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.

### Push it

1. Stage and commit your changes

```bash
git add -A && git commit -m "MY MESSAGE"
``` 

> **Warning**
> 
>  Please replace `MY MESSAGE` with a [conventional commit message](https://www.conventionalcommits.org/en/v1.0.0/), such as `fix: typo on installation section`

2. Push your changes

```bash
git push MY-FORK-NAME THE-NAME-OF-MY-BRANCH
```

> **Warning**
> 
>  Please replace `MY-FORK-NAME` with the name of your fork
>  Please replace `THE-NAME-OF-MY-BRANCH` with the name of your branch

3. Go to the [reviewpad/docs](https://github.com/reviewpad/docs) repo and you should see recently pushed branches.

3. Follow GitHub's instructions.

4. If possible, include screenshots of visual changes. A preview build is triggered after your pull request is opened.

> **Note**
> 
> After a pull request is created, a preview is built automatically.

## Troubleshooting

- `yarn reset` to clear the local cache
