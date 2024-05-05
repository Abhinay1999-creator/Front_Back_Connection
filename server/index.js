require('dotenv').config();
const express = require("express");
const app = express();
const router = require('./router/auth')
const connectDb = require('./db')

app.use(express.json()); //middleware for postman to see it in json format

app.use('/api/auth', router)

const port = 5000;


connectDb().then(() => {
    app.listen(port, () => {
        console.log('PORT RUNNING AT ' + port)
    })
})

