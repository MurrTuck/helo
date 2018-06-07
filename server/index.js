require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')

const { 
    CONNECTION_STRING
} = process.env;

const app = express()

app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    console.log("Massive successfully connected to DB!!")
    app.set('db', db)
})

app.post('/api/auth/register', controller.create_user)

app.post('/api/auth/login', controller.login_user)

const port = 4000

app.listen(port, () => console.log(`Listening on Port ${port}`))