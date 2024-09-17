const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Cart = sequelize.define("carts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = Cart;
