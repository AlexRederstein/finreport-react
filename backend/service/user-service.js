const User = require("../database").User;
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

class userService {
  async registration(data) {
    const candidate = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (candidate) {
      throw new Error(`Такой пользователь уже есть email ${email}`);
    }

    const protecredPass = await bcrypt.hash(data.password, 1488);
    const activationLink = uuid.v4();

    const user = await User.create({
      name: data.name,
      lastname: data.lastname,
      surname: data.surname,
      email: data.email,
      password: protecredPass,
      activationLink: activationLink,
    });
    await mailService.sendActivationMail(data.mail, activationLink);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.userid, tokens.refreshToken);
    return user;
  }
}

module.exports = new userService();
