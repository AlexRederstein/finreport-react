module.exports = class userDto {
  email;
  userid;
  isActivated;

  constructor(model) {
    this.email = model.email;
    userid = model.userid;
    isActivated = model.isActivated;
  }
};
