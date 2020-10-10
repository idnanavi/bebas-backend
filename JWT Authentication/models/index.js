const config = require("../config/db.config.js");

//mengkoneksikan sequelize dengan config database yang sudah kita buat
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
      host: config.HOST,
      dialect: config.dialect,
      operatorsAliases: false,
    }
  );

const db = {};

//karena kita punya 2 model(user dan roles) yang berbeda,maka kita juga membuat 2 objek sequelize yang berbeda
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);

//user dan role mempunyai hubungan many to many relationship
//satu user bisa mempunyai banyak role
//satu role bisa dimiliki banyak user
//oleh karena itu kita membuat table baru hasil dari join kedua table user dan role dengan nama user_roles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//define roles apa aja yang ada
db.ROLES = ["user", "admin"];

module.exports = db;