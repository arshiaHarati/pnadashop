const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');

app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port ${process.env.SERVER_PORT} ...`);
})

