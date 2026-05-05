const ApiError = require("../exceptions/api-error")
const TokenService = require("../services/TokenService")

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if(!authorizationHeader) {
            return next(ApiError.UnathorizedError())
        }

        const accessToken = authorizationHeader.split(' ')[1] // Bearer
        if(!accessToken) {
            return next(ApiError.UnathorizedError())
        }

        const userData = TokenService.validateAccessToken(accessToken)
        console.log(userData)
        if(!userData) {
            return next(ApiError.UnathorizedError())
        }

        req.user = userData
        next()
    } catch (err) {
        return next(ApiError.UnathorizedError())
    }
}