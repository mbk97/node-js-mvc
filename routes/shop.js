const path = require("path");
const express = require("express");
const shopRoute = express.Router();
const shopController = require("../controllers/shop");

// shopRoute.get("/pr", shopController.getProducts);
shopRoute.get("/cart", shopController.getCart);
shopRoute.post("/cart", shopController.postCart);
shopRoute.post("/cart-delete-item", shopController.postCartDeleleteProduct);
shopRoute.get("/orders", shopController.getOrders);
shopRoute.get("/", shopController.getIndex);
shopRoute.get("/products", shopController.getProducts);
shopRoute.get("/products/:productId", shopController.getProduct);
shopRoute.get("/checkout", shopController.getCheckout);
// const products = adminData.products;

// ! dirname This is a Node.js global variable that represents the directory name of the current module (i.e., the directory where the current script is located).

// ** path.join(): This is a method from Node.js's built-in path module. It joins all given path segments together using the appropriate path separator for the operating system (e.g., / on UNIX-based systems, \ on Windows) and returns a normalized path.

// ** "views" and "shop.html": These are path segments that are being joined together with __dirname to form the complete path to the shop.html file located in the views directory.

module.exports = shopRoute;
