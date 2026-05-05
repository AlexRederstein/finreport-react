module.exports = class ApiError extends Error {
  status;
  error;
  constructor(status, message, errors = []) {
    super(message);
    ((this.status = status), (this.errors = errors));
  }

  static UnathorizedError() {
    return new ApiError(401, "Пользователь не авторизирован!");
  }

  static badRequest(message, error) {
    return new ApiError(400, message, errors);
  }
};
