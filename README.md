# Full Stack Contact Form Frontend

Welcome to the Full Stack Contact Form Frontend repository! This project serves as the frontend component of a comprehensive full-stack contact form, designed to enhance user engagement and communication on your web application. The frontend is built using React and incorporates various elements to create an intuitive and visually appealing user interface.

## Project Overview

This project is part of a tutorial series available on [dev.to](https://dev.to/) that guides you through building a complete full-stack contact form. The series covers the following key steps:

- [Part 1 - Building a Full Stack Contact Form: React Frontend](https://dev.to/elenadiaz32505/part-1-full-stack-contact-form-getting-started-react-frontend-2023-1bh4)
- [Part 2 - Building a Full Stack Contact Form: Node.js Backend](https://dev.to/elenadiaz32505/part-2-building-a-full-stack-contact-form-nodejs-backend-2023-jdp)
- [Part 3 - Building a Full Stack Contact Form: Deployment](https://dev.to/elenadiaz32505/part-3-building-a-full-stack-contact-form-deployment-2023-2dj6)

To see the complete backend code and setup, visit the [backend repository on GitHub](https://github.com/diazelena325/contactform_backend).

Feel free to explore the code, learn from it, and adapt it to your own projects. If you have any questions or feedback, don't hesitate to get in touch.

Happy coding! 🚀


# Getting Started: Nano React App Default Javascript Template

The default template project for [nano-react-app](https://github.com/nano-react-app/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `5173`.
- `npm run build` — This will output a production build in the `dist` directory.
- `npm run preview` — This will run the production build locally with a default port of `5173` (this will not work if you haven't generated the production build yet).

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 3000
```

Or edit the `start` script directly:

```
vite --port 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app) is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

Use the following scripts for deployment:

```js
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "rm -rf dist && vite build",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
