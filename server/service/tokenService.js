const jwt = require('jsonwebtoken')
const { Token } = require('../db/models')

const generateToken = (payload) => {

  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' })
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
  
  return { accessToken, refreshToken}
}

const saveToken = async ( user_id, refreshToken ) => {
  // сначала находим по такому user_id запись в БД
  const tokenData = await Token.findOne({where: { user_id }})
  if (tokenData) {
    tokenData.refreshToken = refreshToken
    return tokenData.save()
  } else {
    const token = await Token.create({ user_id, refreshToken })
    return token
  }
}

const removeToken = async ( refreshToken ) => {
  const tokenData = await Token.findOne({where: { refreshToken }})
  await tokenData.destroy()
  return tokenData
}

const validateAccessToken = async (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    return userData;
  } catch (error) {
    return null
  }
}

const validateRefreshToken = async (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    return userData;
  } catch (error) {
    return null
  }
}

const findToken = async ( refreshToken ) => {
  const tokenData = await Token.findOne({where: { refreshToken }})
  return tokenData
}
module.exports = { generateToken, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken }
