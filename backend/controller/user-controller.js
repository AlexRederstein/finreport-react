const User = require("../database").User;
const bcrypt = require("bcrypt");

class userController {
  async registration(req, res, next) {
    try {
      const protectedPass = await bcrypt.hash(req.body.password, 10);
      const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        surname: req.body.surname,
        email: req.body.email,
        password: protectedPass,
      };
      const newUser = await User.create(data);
      res.json({ message: `Новая запись создана ${newUser}` });

      // Service.registration(data);
    } catch (err) {
      console.log(err);
    }
  }

  async login(req, res, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async activate(req, res, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async users(req, res, next) {
    try {
      res.json({ name: "Иван", lastname: "Иванов" });
      // user.sync({ force: true });
    } catch (err) {
      console.log(err);
    }
  }

  async test(req, res, next) {
    res.json({ message: "Подключение установлено" });
  }
}

module.exports = new userController();
