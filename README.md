# Camomile UI boilerplate (with webpack)

> A boilerplate for [Camomile-ui](https://github.com/francoisromain/camomile-ui).

This project requires:

* [npm](https://www.npmjs.com/package/npm) to install dependencies.
* [webpack](https://webpack.js.org/) to bundle javascript.

A similar (simpler) project, without webpack and npm is available here: [Camomile UI boilerplate](https://github.com/francoisromain/camomile-ui-boilerplate).

---

## Directory structure

```bash
.
+-- build
+-- dist
+-- src
|   +-- app.js
|   +-- app.vue
|   +-- index.html
+-- .babelrc
+-- .gitignore
+-- .package-lock.json
+-- .package.json
+-- .README.md
```

### /build

Webpack configuration. It should not be necessary to modify it.

### /dist

Production application including html, js and css. These files are bundled by webpack whith the command `npm run dist`.

### /src

Development application. A local webpack-dev-server (with hot reload) can be launched with `npm run dev` and visible at `http://localhost:8080`.

* `index.html`: main html file, copied to the dist folder at build time.
* `app.js`: main javascript file, imported in index.html at build time.
* `app.vue`: main vue.js component, bundled with [vue-loader](https://vue-loader.vuejs.org/en/) and imported in app.js.

**`app.vue` is the only file that needs to be edited to build an application.**

---

## Getting started (local dev environment)

1.  Clone this repo on your computer.

2.  Camonile UI is a front end application only and requires a connection to a [Camomile API server](https://github.com/camomile-project/camomile-server). Clone the Camomile API server repo in a directory next to this one. Create an additional `camomile-data` directory, resulting in the following structure:

```txt
.
+-- camomile-ui-boilerplate
+-- camomile-server
+-- camomile-data
    +-- mongodb
        +-- files
    +-- camomile
        +-- logs
    +-- media
    +-- upload
```

Set the `env` variables and start the server:

```bash
export CMML_DB=../camomile-data/mongodb/files && export CMML_LOGS=../camomile-data/camomile/logs && export CMML_MEDIA=../camomile-data/media && export CMML_UPLOAD=../camomile-data/upload && export CMML_PORT=3000 && export CMML_PASSWORD=roO7p4s5wOrD && docker-compose -f ../camomile-server/docker-compose.dev.yml up --build -d
```

3.  From this repo, start building your interface.

```bash
# Install dependencies.
npm install

# Serve with hot reload at localhost:8080.
npm run dev

# Build for production with minification.
npm run build
```
