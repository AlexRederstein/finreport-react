const UserDTO = require("../DTOs/user");
const ApiError = require("../exceptions/api-error");
const { User } = require("../database");
const bcrypt = require("bcrypt");
const TokenService = require("./TokenService");

class UserService {
  async login(data) {
    console.log(data)
    const userData = await User.findOne({where: {email: data.email}})
    if(!userData) {
      throw ApiError.badRequest("Пользователь не был найден")
    }
    const isPassEquals = await bcrypt.compare(data.password, userData.password)
    
    if(!isPassEquals) {
      throw ApiError.badRequest("Неверный пароль!")
    }
    const user = new UserDTO(userData)
    const tokens = TokenService.generateTokens({...user})
    console.log(tokens)
    await TokenService.saveToken(user.userid, tokens.refreshToken)

    return {user, ...tokens}
  }

  async registration(data) {

    const candidate = await User.findOne({where: {email: data.email}})

    if(candidate) {
      throw ApiError.badRequest("Email занят!")
    }
    
    const password = await bcrypt.hash(data.password, Number(4))
    data.password = password
    
    
    const userData = await User.create(data);
    const user = new UserDTO(userData)

    const tokens = await TokenService.generateTokens({...user});
    await TokenService.saveToken(user.userid, tokens.refreshToken);

    return {user, ...tokens};
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);
    if(!userData || !tokenFromDB) {
      throw ApiError.UnathorizedError();
    }

    const user = new UserDTO(userData)

    const tokens = await TokenService.generateTokens({...user});
    await TokenService.saveToken(user.userid, tokens.refreshToken);

    return {user, ...tokens};
  }
}

module.exports = new UserService();
