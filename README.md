# Contributing to CRUD Posts App for STDev

The following is a set of guidelines for contributing to the STDev project.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

# Guideline

### Structure of folders

1.  The assets folder includes all asset files like images or maybe external css and js file locating in `src/assets`

2.  The components folder includes reusable components which are used globally across the other components or pages locating in `src/components`

3.  The config folder includes the main configuration of using some services or 3rd party packages locating in `src/config`

4.  The constant folder includes all the constant data which are used globally locating in `src/constants`.

5.  The helpers folder includes utils and functions using globally locating in `src/helpers`.

6.  All custom hooks used in components should have a folder inside `src/hooks` and all of them should start the with "use" keyword.

7.  The pages folder includes all views which are determined by pages locating in `src/pages`.

8.  The router folder includes a files for representing the routes of each pages locating in `src/router`.

9.  The editorconfig and prettierrc file contains all attribute for corresponding editor code style in each IDEs

10. Eslint file expose the rules for linting the project also prettier file help to format code properly

11. Tsconfig and vite.config file include the configuration of TypeScript and Vite

12. Test files for each folders are in the `__test__` folder and its config in the jset.config.ts in the root

---

# References

We are using some frameworks and third parties in this app and we could refer to them by following links

- Vite official documentation [here](https://vitejs.dev/)
- ReactJS official documentation [here](https://reactjs.org/)
- TypeScript official documentation [here](https://www.typescriptlang.org/)
- ESlint Rules [here](https://eslint.org/docs/latest/rules)
- UI Library documentation [here](https://mui.com/)
- Asynchronous data management [here](https://tanstack.com/query/v4/docs/overview)
- Package manager [here](https://yarnpkg.com/)
- Javascript style guide from Airbnb [here](https://github.com/airbnb/javascript)
- SASS guidelines [here](https://sass-guidelin.es/#architecture)
- Testing Library [here](https://testing-library.com/)

---

### Project setup

```
yarn install
```

### Project run

```
yarn dev
```

### Project build for production

```
yarn build
```

### Project lint

```
yarn lint
```

### Project test

```
yarn test
```
