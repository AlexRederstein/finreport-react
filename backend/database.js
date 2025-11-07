const Sequelize = require("sequelize");

const connect = new Sequelize({
  dialect: process.env.DB_DIALECT || "mysql",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "finreport-react",
});

const User = require("./model/user")(connect);
const Token = require("./model/token")(connect);

const syncDB = async () => {
  await connect.sync();
};

syncDB();

module.exports = {
  // connect: connect,
  User: User,
  Token: Token,
};
