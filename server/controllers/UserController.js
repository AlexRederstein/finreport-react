const UserService = require("../services/UserService");
const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/api-error")

class UserController {
  getUser(req, res) {
    const userData = "";

    res.json(userData);
  }


  async login(req, res, next) {
    try { 

      const data = {
        email: req.body.email,
        password: req.body.password
      }
      const user = await UserService.login(data);
    
      res.cookie("refreshToken", user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
      res.json(user);
    } catch (e) {
      next(e)
    }
  }


  async registration(req, res, next) {
    try {

      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return next(ApiError.badRequest("Ошибка валидации", errors.array()))
      }

      const data = {
        name: req.body.name,
        email: req.body.email,
        birthDate: req.body.birthDate,
        password: req.body.password
      }
  
      const user = await UserService.registration(data) // Получаем DTO
  
      res.cookie("refreshToken", user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.json(user)

    } catch (e){
      next(e)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken)
      res.clearCookie('refreshToken')
      return res.json(token)
    } catch (e) {
      next(e)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const user = await UserService.refresh(refreshToken)
      res.cookie("refreshToken", user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(user)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserController();
