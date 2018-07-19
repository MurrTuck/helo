require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const session = require('express-session')

const { 
    CONNECTION_STRING
} = process.env;

const app = express()

app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.post('/api/auth/register', controller.create_user)

app.post('/api/auth/login', controller.login_user)

app.get("/api/posts/:userid", controller.get_posts)

app.get("/api/post/:postid", controller.post_id)

app.post("/api/post/:userid", controller.userid)

const port = 4000

app.listen(port, () => console.log(`{0,0} is Listening on Port ${port}`))