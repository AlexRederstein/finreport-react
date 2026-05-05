const Sequelize = require("sequelize")
require("dotenv").config()

const connect = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    schema: process.env.DB_SCHEMA,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

const User = require("./models/User")(connect)
const Token = require("./models/Token")(connect)

async function testConnecton() {
    try {
        await connect.authenticate()
        console.log("Подключение установлено")
    } catch (e) {
        console.error(`Ошибка подключения к базе данных ${e}`)
    } finally {
        connect.close()
    }
}

async function syncDB() {
    await connect.sync()
}

syncDB()

// testConnecton()

module.exports = {
    User,
    Token
}