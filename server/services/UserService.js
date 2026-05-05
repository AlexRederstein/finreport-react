const UserDTO = require("../DTOs/user");

class UserService {
  async login() {
    const userData = {
      userid: "123456789",
      email: "kirya.sinichin@mail.ru",
      name: "Синицын Кирилл Сергеевич",
      birthDate: "1998-01-01",
      institution: 'ГАУ АО "Управление ИКТ АО"',
      department: "Отдел сопровождения АИС ФХД",
      position: "Техник",
    };
    const response = new UserDTO(userData);
    return response;
  }
}

module.exports = new UserService();
