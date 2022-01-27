static-server-node
==================

A simple Node + Express.js app for serving static files

## Usage

1. Copy `.env.dist` to `.env` and set the `APP_PORT` to your preferred value.
2. Put your files (to serve) in `./public/`.
3. Run either a `docker-compose run -u node node npm install` or a `npm install`.
4. Run either a `docker-compose up` command to use Docker or `node ./app.js` to use Node directly.