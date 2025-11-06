const { DataTypes } = require("sequelize");
const { User } = require("../database");
// const user = require("./user");

module.exports = function (sequelize) {
  return sequelize.define("Token", {
    user: { type: DataTypes.UUID, references: { model: User, key: "userid" } },
    refreshToken: { type: DataTypes.STRING, allowNull: false },
  });
};
