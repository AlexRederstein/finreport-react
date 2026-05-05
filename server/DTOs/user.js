module.exports = class UserDTO {
  name;
  email;
  userid;
  birthDate;

  constructor(data) {
    this.userid = data.userid;
    this.name = data.name;
    this.email = data.email;
    this.birthDate = data.birthDate;
  }
};
