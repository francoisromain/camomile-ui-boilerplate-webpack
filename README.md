# Camomile UI boilerplate

> A boilerplate for
> [Camomile-ui](https://github.com/francoisromain/camomile-ui).

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

## Create a local API server

Create a local
[Camomile API server](https://github.com/camomile-project/camomile-server) in a
directory next to this one.

Create an additional `camomile-data` directory, resulting in the following
structure:

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

Start the server (from the _camomile-ui-boilerplate_ directory):

```bash
export CMML_DB=../camomile-data/mongodb/files && export CMML_LOGS=../camomile-data/camomile/logs && export CMML_MEDIA=../camomile-data/media && export CMML_UPLOAD=../camomile-data/upload && export CMML_PORT=3000 && export CMML_PASSWORD=roO7p4s5wOrD && docker-compose -f ../camomile-server/docker-compose.dev.yml up --build -d
```