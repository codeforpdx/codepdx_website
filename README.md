# Welcome to the CODE PDX website repo.

👋👋🏿👋🏽👋🏻👋🏾👋🏼

The website is currently live at www.codepdx.org. Detailed information for those looking to contribute can be found in [contributing.md](./contributing.md). Check the issues tab for current issues or feel free to create your own, write some code, then make a pull request. The fastest way to reach out for questions is the website-general channel in discord. 


**to install prerequisites**

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

**to run dev environment:**

```bash
npm run dev
```

**to run production:**

```bash
npm run build
```

Linting and formatting for this project has also been setup using ESlint and Prettier. To lint your changes with ESLint, you can run:

```shell
npm run lint
```

---

To fix potential lint errors, you can run:

```shell
npm run lint:fix
```

---

You can also check the formatting of the existing code using Prettier by running:

```shell
npm run prettier:check
```

---

This will enable Prettier to check if the existing code follows the rules for this project in .prettierrc.js. To format the project with existing Prettier settings, simply run:

```shell
npm run prettier:run
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**we are using vite plugin:**

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!--
    we aren't using this right now
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- -->
