# Express TypeScript Template

My personal Express app template, using:

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/v6/)

This project references some TypeScript my personal monorepo template, [vue-express-template](https://github.com/biggestcookie/vue-express-template). To remove these dependencies, search and remove all references to the `shared` folder. Additionally, this template repo does not contain linting configuration; that can be found in and copied from the monorepo template.

## Setup

1. Run `npm install` in the root folder.
2. Run the dev server:
   - If you are using Visual Studio Code, press `Ctrl/Cmd + Shift + B` to run the default dev task.
   - If you are not using Visual Studio Code or wish to run this manually, run `npm run dev`.
3. Build the project:
   - Run `npm run build` in the root folder.
   - When deploying this app, point your deployment to the `dist` folder.
