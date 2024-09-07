const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Cart = sequelize.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autonIncrement: true,
    primaryKey: true,
  },
});

module.exports = Cart;
