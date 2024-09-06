const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");
const sequelize = require("./util/db");

const app = express();

app.use(bodyParser.urlencoded());
// ** adds the middleware function to your application. This middleware intercepts HTTP requests and processes the body of the request. Once the middleware is set up, the parsed data from the request body is populated into req.body. For example, if a form with an input field named username is submitted, you can access the value using req.body.username.

// ** Configure template engine for MVC

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
// !This static middleware forwards the request to the public folder, there by making assets like css available.

// !** You can do this to create a base route for a path
app.use("/admin", adminData.routes);

app.use(shopRoute);

// ! adding a 404 page

app.use(errorController.get404);

// ! This will sync your model to database by creating appropriate tables for them
sequelize
  .sync()
  .then((res) => {
    app.listen(8080, () => {
      console.log("server is running on port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
