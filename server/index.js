//React #27 'node server' using 'express'

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const session = require("express-session");

const { CONNECTION_STRING } = process.env;

//React #27 using express in node server
const app = express();

app.use(bodyParser.json());

//React #50 using massive to connect to Database
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

//React #38 using sessions
app.use(
  session({
    secret: "Shhhhhhh",
    saveUninitialized: true,
    resave: false
  })
);

//React #36 & #37 using middleware
//React #38 using sessions
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

//React #38 using sessions
app.post("/api/session", (req, res, next) => {
  req.session.destroy();
  res.status(200).send("Session Destroyed");
});

app.use(middleware);

//React #32 using GET Endpoint
app.get("/api/posts/:userid", controller.get_posts);

//React #33 using POST Endpoint
app.get("/api/post/:postid", controller.post_id);

app.post("/api/post/:userid", controller.userid);

//Just place PUT on Server and not the front end and tested with Postman to make sure it is working.
//React #34 using PUT Endpoint
app.put("/api/edit/:id", controller.edit_username);

//Just place DELETE on Server and not the front end and tested with Postman to make sure it is working.
// React #35 using DELETE Endpoint
app.delete("/api/delete/:id", controller.delete_user);

const port = 4000;

app.listen(port, () => console.log(`{0,0} is Listening on Port ${port}`));
