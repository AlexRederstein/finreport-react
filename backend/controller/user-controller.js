const service = require("../service/user-service");

class userController {
  async registration(req, res, next) {
    try {
      const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
      };

      var userData = await service.registration(data);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 26 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
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
