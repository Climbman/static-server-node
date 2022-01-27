const express = require('express');
require('dotenv').config()

const port = process.env.APP_PORT;
const app = express();
app.use('/', express.static('public'));


app.listen(port, () => {
    console.log(`Serving static files on ${port}`);
})

