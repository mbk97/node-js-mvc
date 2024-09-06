const path = require("path");
const express = require("express");
const adminController = require("../controllers/admin");
const adminRoute = express.Router();

adminRoute.get("/add-product", adminController.getAddProduct);
adminRoute.post("/add-product", adminController.postAddProduct);
adminRoute.get("/edit-product/:productId", adminController.getEditProduct);
adminRoute.get("/products", adminController.getProducts);
adminRoute.post("/edit-product", adminController.postEditProduct);
adminRoute.post("/delete-product", adminController.postDeleteProduct);

exports.routes = adminRoute;
