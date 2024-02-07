# Contributing to CODE PDX WEBSITE

## Contents

1. [Project Summary](#1-project-summary)
2. [Tech Stack & Resources](#2-tech-stack--resources)
3. [Code of Conduct](#3-code-of-conduct)
4. [Connect With the Team](#4-connect-with-the-team)
5. [Development Process](#5-development-process)
   - [Github Issues](#github-issues)
   - [Clone the Repo](#clone-the-repo)
   - [Submitting a Pull Request](#submitting-a-pull-request)
   - [Code Styling/Linting](#code-stylinglinting)

## 1. Project summary

Building a new CODE PDX website with react and vite, current planning is for a static 3 page site.
All assets for contributors can be pulled from the [Figma Board](https://www.figma.com/file/QWycOkxNJmtiyZ3v8imIzx/Code-PDX-website?type=design&node-id=0%3A1&mode=design&t=npSHzjSeJuwAa1vc-1)

## 2. Tech Stack & Resources

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 3. Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](https://github.com/codeforpdx/codeofconduct). Please make sure to read and understand it before contributing.

## 4. Connect With the Team

- Join [CODE PDX Discord](https://discord.gg/uwqrPpyuap). If you run into any issues join the discord and drop a message in [introductions](https://discord.com/channels/1068260532806766733/1075286322530484256) or [general-chat](https://discord.com/channels/1068260532806766733/1068260535080063028).
- Post your GitHub name in the [**#github-access-request**](https://discord.com/channels/1068260532806766733/1078124139983945858) channel and we’ll add you to our [GitHub](https://github.com/codeforpdx).

## 5. Development Process

- ## Github Issues

1. Search through open [issues](https://github.com/codeforpdx/codepdx_website/issues).
2. Find an issue that interests you.
3. Check if someone is currently working on that issue and if a [pull request](https://github.com/codeforpdx/codepdx_website/pulls) exists. If someone is working on an issue they should also have a branch created for it and be assigned to the issue.
4. Assign yourself to an issue leave a comment stating your plans and create a branch for your issue.

- All bug reporting, feature requests, or enhancements can be found in [issues](https://github.com/codeforpdx/codepdx_website/issues)
- Templates for each one can be found [here](./.github/ISSUE_TEMPLATE/) in the .github/ISSUE_TEMPLATE folder. These will automatically populate when using github issues.

- ## Clone the repo

1. Clone repo to local environment in IDE of choice. If you are new to Git/GitHub you can also check out [this article](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) for a broad overview.

   - Open terminal & change working directory to the location you want the repository cloned to.
   - `gh repo clone codeforpdx/codepdx_website` [learn more about git clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?platform=linux) This will set the git origin to `https://github.com/codeforpdx/codepdx_website`. By default the branch is set to Main.
     [learn more about git remote](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
   - Change directory to the cloned directory, in this case /codepdx_website: `cd ./codepdx_website`
   - Origin can be verified by running `git remote -v` which should show:
     ```
     origin https://github.com/codeforpdx/codepdx_website.git (fetch)
     origin https://github.com/codeforpdx/codepdx_website.git (push)
     ```

2. Create a new branch to work on your feature (We recommend doing this via terminal) Branches should all be based off of `Development`:

   A. `git switch Development` or `git checkout Development` - to switch to the Development branch.

   B. `git checkout -b "<your branch name>"` [learn more about git branches](https://www.atlassian.com/git/tutorials/using-branches/git-checkout) using the recommended naming convention:`<issue number><branch name>` with a concise title.

   > Example: `112/delete-client-modal`

  <!-- This section will need images reflecting the website repo not pass, cant do because on flight -->

> This can also be done directly from an issue in GitHub with the following three steps(Default branch is Master and will need to be changed to Development). If done manually via command line, link branch to corresponding GitHub issue.
>
> A. Create a branch by clicking `create a branch` under Development within the issues page.
>
>  <img src="https://drive.google.com/uc?id=11zUuOYSkv8K0CJE_snet12YSdyLDKP8q" width="200"/>

> B. Select `change branch source`.
>
>  <img src="https://drive.google.com/uc?id=1ciU2NgtAjkEx3Pi5FnzxNxDjw0KkZXF-" width="200">

> C. Select Development as the base branch.
>
>  <img src="https://drive.google.com/uc?id=1rqRkau7lxTVEcwRFc8NcHRf-Z4U_lVxb" width="200">

- Work on feature in your own branch.

- When feature is ready:

  - run `git add .` to add all changed files in commit. or `git add <fileName>` to include an individual file.
  - run `git commit -m "some message abut changes in commit"` with a concise message to describe what changes are included in the push.
  - push to GitHub in terminal: `git push origin <your branch name>`

- ## Submitting a Pull Request

  If you are new to GitHub and/or the team, feel free to make your first pull request on the README/Contributing documentation to familiarize yourself with the project and GitHub. Add any comments and/or feedback and request reviews.

- Make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) to the `Development` branch. Request reviews from members of the team - you’ll need their approval to merge. \*\*Make sure to close your branch once merged.

- ## Code Styling/Linting

  Website code is formatted with ESLint and Prettier. see repo prettierrc.js and eslintrc.cjs for formatting settings. They are included as dependencies and will be installed while following the instructions of the readme. To lint your changes with ESLint follow the instructions
   <!-- update link to website formatting guide which needs to be written[here](./README.md#linting) -->

**[⬆️ Back to Top](#contributing-to-code-pdx-website)**
