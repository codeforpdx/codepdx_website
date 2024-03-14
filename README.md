# Welcome to the CODE PDX website repo.

👋👋🏿👋🏽👋🏻👋🏾👋🏼

The website is currently live at www.codepdx.org. Detailed information for those looking to contribute can be found in [contributing.md](./contributing.md). Check the issues tab for current issues or feel free to create your own, write some code, then make a pull request. The fastest way to reach out for questions is the website-general channel in discord.

## How to install prerequisites & run a dev server

1. Clone this repo to your local computer:
   ```bash
   git clone https://github.com/codeforpdx/codepdx_website.git
   ```
2. Enter the project folder:
   ```bash
   cd codepdx_website
   ```
3. If you don't have nvm, install that:

- For Mac, Linux, and other POSIX users: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- For Windows users: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

4. If you don't have node, install it using nvm by running:
   ```bash
   nvm install node
   ```
5. Install the package prerequisites for this project:
   ```bash
   npm install
   ```
6. Fire up your dev server:
   ```bash
   npm run dev
   ```

## How to run production

1.  ```bash
    npm run build
    ```

## How to lint & format your code

Linting and formatting for this project has also been setup using ESlint and Prettier.

1. To lint your changes with ESLint, you can run:
   ```shell
   npm run lint
   ```
2. To fix potential lint errors, you can run:
   ```shell
   npm run lint:fix
   ```
3. You can also check the formatting of the existing code using Prettier by running:
   ```shell
   npm run prettier:check
   ```
4. This will enable Prettier to check if the existing code follows the rules for this project in .prettierrc.js. To format the project with existing Prettier settings, simply run:
   ```shell
   npm run prettier:run
   ```

Good luck and have fun!
