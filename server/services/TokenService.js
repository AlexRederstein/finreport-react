const jwt = require("jsonwebtoken")
const {Token} = require("../database")

class TokenService {
    
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: "30s"});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: "30d"});

        return {accessToken, refreshToken}
    }

    async saveToken(userid, refreshToken) {
        const tokenData = await Token.findOne({user: userid})
        if(tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await Token.create({user: userid, refreshToken})
        return token;
    }

    validateAccessToken(accessToken) {
        try {
            const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(refreshToken) {
        try {
            const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY)
            return userData
        } catch (e) {
            return null
        }
    }


    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where: {refreshToken}})
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        return tokenData
    }
}

module.exports = new TokenService()