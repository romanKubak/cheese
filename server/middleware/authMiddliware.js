const ApiError = require("../exceptions/apiError");
const { validateAccessToken } = require("../service/tokenService");


module.exports = async function (req, res, next)  {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next(ApiError.UnautorizedError())
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if(!accessToken) {
      return next(ApiError.UnautorizedError())
    }

    const userData = await validateAccessToken(accessToken)
    if(!userData) {
      return next(ApiError.UnautorizedError())
    }
    
    req.user = userData
    next()
  } catch (error) {
    return next(ApiError.UnautorizedError())
  }
}
