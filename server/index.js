//React #27 'node server' using 'express'

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const session = require("express-session");

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(
  session({
    secret: "Shhhhhhh",
    saveUninitialized: true,
    resave: false
  })
);

function middleware(req, res, next) {
  if (!req.session.user) {
    req.session.user = { counter: 0 };
  } else {
    req.session.user.counter += 1;
  }
  next();
}

app.post("/api/auth/register", controller.create_user);

app.post("/api/auth/login", controller.login_user);

app.post("/api/session", (req, res, next) => {
  req.session.destroy();
  res.status(200).send("Session Destroyed");
});

app.use(middleware);

app.get("/api/posts/:userid", controller.get_posts);

app.get("/api/post/:postid", controller.post_id);

app.post("/api/post/:userid", controller.userid);

//Just place PUT on Server and not the front end and tested with Postman to make sure it is working.
app.put("/api/edit/:id", controller.edit_username);

//Just place DELETE on Server and not the front end and tested with Postman to make sure it is working.
app.delete("/api/delete/:id", controller.delete_user);

const port = 4000;

app.listen(port, () => console.log(`{0,0} is Listening on Port ${port}`));
