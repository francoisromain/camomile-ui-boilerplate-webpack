# Camomile UI boilerplate

> A boilerplate for [Camomile-ui](https://github.com/francoisromain/camomile-ui).

Camomile UI is a component library to create media annotations.

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

#### /build

Webpack configuration. It should not be necessary to modify it.

#### /dist

Production application including html, js and css. These files are bundled by webpack whith the command `npm run dist`.

#### /src

Development application. A local webpack-dev-server (with hot reload) can be launched with `npm run dev` and visible at `http://localhost:8080`.

* `index.html`: main html file, copied to the dist folder at build time.
* `app.js`: main javascript file, imported in index.html at build time.
* `app.vue`: main vue.js component, bundled with [vue-loader](https://vue-loader.vuejs.org/en/) and imported in app.js.

**`app.vue` is the only file that needs to be edited to build an application.**

---

## Create a local API server

Camonile UI is a front end application only and requires a connection to a [Camomile API server](https://github.com/camomile-project/camomile-server).

For local development, create a Camomile API server in a directory next to this one.

Create an additional `camomile-data` directory, resulting in the following structure:

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

Set env variables and start the server (from the _camomile-ui-boilerplate_ directory):

```bash
export CMML_DB=../camomile-data/mongodb/files && export CMML_LOGS=../camomile-data/camomile/logs && export CMML_MEDIA=../camomile-data/media && export CMML_UPLOAD=../camomile-data/upload && export CMML_PORT=3000 && export CMML_PASSWORD=roO7p4s5wOrD && docker-compose -f ../camomile-server/docker-compose.dev.yml up --build -d
```

---

## Npm scripts

```bash
# Install dependencies.
npm install

# Serve with hot reload at localhost:8080.
npm run dev

# Build for production with minification.
npm run build
```

---
