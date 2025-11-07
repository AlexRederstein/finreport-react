const { DataTypes } = require("sequelize");
// const { User } = require("../database");
// const User = require("./user");

module.exports = function (sequelize) {
  return sequelize.define("Token", {
    user: {
      type: DataTypes.UUID,
      references: { model: "Users", key: "userid" },
    },
    refreshToken: { type: DataTypes.TEXT, allowNull: false },
  });
};
