const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

const routes = require("./routes");

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.APP_URL,
  }),
);

app.use("", routes);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
