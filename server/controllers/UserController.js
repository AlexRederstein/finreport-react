const { response } = require("express");
const UserService = require("../services/UserService");

class UserController {
  getUser(req, res) {
    const userData = "";

    res.json(userData);
  }
  async login(req, res) {
    // const { email, password } = req.body;
    console.log(req.body);
    const user = await UserService.login();
    console.log(user);
    res.json({ user });
  }
}

module.exports = new UserController();
