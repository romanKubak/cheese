const { User} = require('../db/models')

const bcrypt = require('bcrypt')

const { generateToken, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken  } = require('./tokenService')

const UserDto = require('../dtos/userDtos')
const ApiError = require('../exceptions/apiError')

const registration = async (name, password, email) => {
  const candidate = await User.findOne({where: { email }})
  if (candidate) {
    return  ApiError.BadRequest('anymess', 'Пользователь с таким email уже существует')
  } else if(!candidate) {
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await User.create( {name:name, email:email, password: hashPassword, isSeller:false})
    const userDto = new UserDto({email:user.email, id:user.id, name:user.name,isSeller:user.isSeller})
    const tokens = generateToken( { ...userDto } )
    await saveToken(userDto.id, tokens.refreshToken)
    return { ...tokens, user: userDto }
  }
}

const login = async (email, password) => {
  const user = await User.findOne({where: { email }})

  if(!user) {
   return  ApiError.BadRequest('Пользователь с таким email не найден', 'Пользователь с таким email не найден')
  }
  const isPassEquals = await bcrypt.compare(password, user.password) 
  if (!isPassEquals) {
    return ApiError.BadRequest('Неверный пароль', 'Неверный пароль')
  } else {
    const userDto = new UserDto(user)
    const tokens = generateToken( { ...userDto } )
    await saveToken(userDto.id, tokens.refreshToken)
  
    return { ...tokens, user: userDto }
  }
}

const logout = async ( refreshToken ) => {
  const token = await removeToken(refreshToken)
  return token
}

const refresh = async (refreshToken) => {
  if(!refreshToken) {
    throw ApiError.UnautorizedError()
  }
  const userData = await validateRefreshToken(refreshToken);
  const tokenFromDb = await findToken(refreshToken);
  if( !userData || !tokenFromDb ) {
    throw ApiError.UnautorizedError()
  } else {
    const user = await User.findOne({where: {id: userData.id}})
    const userDto = new UserDto(user)
    const tokens = generateToken( { ...userDto } )
    await saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }
}

const getAllUsers = async () => {
  const users = User.findAll()
  return users
}

module.exports = { registration, login, logout, refresh, getAllUsers }
