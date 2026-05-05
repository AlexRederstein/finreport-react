const {DataTypes} = require("sequelize");

module.exports = function (connect) {
    return connect.define("User", {
        userid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        }
    })
}