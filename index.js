const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");
const sequelize = require("./util/db");
const ProductModel = require("./models/product");
const UserModel = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const app = express();

app.use(bodyParser.urlencoded());
// ** adds the middleware function to your application. This middleware intercepts HTTP requests and processes the body of the request. Once the middleware is set up, the parsed data from the request body is populated into req.body. For example, if a form with an input field named username is submitted, you can access the value using req.body.username.

//** This intercepts the incoming request, always ensure all middleware are declared before route handlers
app.use((req, res, next) => {
  UserModel.findByPk(3)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// ** Configure template engine for MVC

app.set("view engine", "ejs");
app.set("views", "views");

// !** You can do this to create a base route for a path
app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use(express.static(path.join(__dirname, "public")));
// !This static middleware forwards the request to the public folder, there by making assets like css available.

// ! adding a 404 page
app.use(errorController.get404);

// ** The code below will not overide the existing data unless we set {force: true} on the sync method.

//! Only do this in developement {force: true}
ProductModel.belongsTo(UserModel, {
  constraints: true,
  onDelete: "CASCADE",
});
UserModel.hasMany(ProductModel);
UserModel.hasOne(Cart);
Cart.belongsToMany(ProductModel, { through: CartItem });
ProductModel.belongsToMany(Cart, { through: CartItem });

//** I add a second argument to belongs to many and there we add the through keep telling sequelize where these connection should be stored and that is my cart item model, so I'll add that to both belongs to many calls here.

// ! This will sync your model to database by creating appropriate tables for them
sequelize
  // .sync()
  .sync({ force: true })
  .then((res) => {
    return UserModel.findByPk(3);
  })
  .then((user) => {
    if (!user) {
      return UserModel.create({
        name: "Mubarak",
        email: "Mubarak@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
