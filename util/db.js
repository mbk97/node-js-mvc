// const mysql = require("mysql2");
const Sequelize = require("sequelize");

//** what is sequelize actually? Sequelize is a third party package, to be precise:it's an object relational mapping library and this is a pretty long name which simply means it does all the heavy lifting which ensure we don't write SQL codes with our application.

// Create a connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "oyindamola97$",
//   database: "node-complete",
// });

// module.exports = pool.promise();

const sequelize = new Sequelize("node-complete", "root", "oyindamola97$", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
