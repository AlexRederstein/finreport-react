require("dotenv").config();
const express = require("express");
const router = require("./router/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use("/api", router);
app.use(cors());
app.use(cookieParser());

const setUp = async () => {
  try {
    const port = process.env.SERVER_PORT || 3001;
    app.listen(port, () => {
      console.log(`Сервер работает на порту ${port}`);
    });
  } catch (err) {
    console.log(`Ошибка! ${err}`);
  }
};

setUp();
