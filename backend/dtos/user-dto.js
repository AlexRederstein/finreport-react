module.exports = class userDto {
  email;
  userid;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.userid = model.userid;
    this.isActivated = model.isActivated;
  }
};
