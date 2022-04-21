const { registration, login, logout, refresh, getAllUsers } = require('../service/userService')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/apiError')
const {User, Comment} = require('../db/models')


const registrationUser = async (req, res, next) => {
  const errors = validationResult(req) 
  try {
    
    if (!errors.isEmpty()) {
      return res.json(errors.array())
    } 
    const { email, password, name } = req.body
    const userData = await registration(name, password, email)
      if(userData instanceof ApiError) {
        return res.json(userData)
      } else {
        // Добавляем рефреш токен в куки
        res.cookie('refreshtoken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true})
        return res.json(userData)
      }
  } catch (e) {
    next(e)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await login(email, password)
    if (userData instanceof ApiError) {
      return res.json(userData)
    } else {
      res.cookie('refreshtoken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true})
      return res.json(userData)
    }
  } catch (e) {
    next(e)
  }
}

const logoutUser = async (req, res, next) => {
  try {
    const { refreshtoken } = req.cookies;
    const token = await logout(refreshtoken)
    res.clearCookie('refreshtoken')
    return res.json(token)
  } catch (e) {
    next(e)
  }
}

const refreshUser = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshtoken; 
    const userData = await refresh(refreshToken)
    // Добавляем рефреш токен в куки
    res.cookie('refreshtoken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true})
    return res.json(userData)
  } catch (e) {
    console.log(e);
    next(e) 
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (e) {
    console.log(e);
  }
}

const newCommentUser = async (req, res, next) => {
try {
  console.log(typeof req.body.rating);
  const comment = await Comment.create({user_name:req.body.user, text:req.body.text, rating:req.body.rating,user_id:req.params.id})
  const commentsArr = await Comment.findAll({where:{user_id:req.params.id},raw:true})
 const rating = commentsArr.map(el => el.rating)
  const newRating = Number(rating.reduce((acc, el) => acc + Number(el), 0)/ rating.length).toFixed(2) || 0
  const user = await User.findOne({where: {id:req.params.id}})
  await user.update({rating:newRating})
  

  res.json({comment,newRating})
} catch (error) {
  console.log(error);
}
}

const commentUser = async (req, res, next) => {
try {
  const comments = await Comment.findAll({where:{user_id:req.params.id}})
  const user = await User.findOne({where: {id:req.params.id}, attributes:['name','rating', 'img']})
  res.json({comments,user})
} catch (error) {
  console.log(error);
}
}


module.exports = { registrationUser, loginUser, logoutUser, getUsers, refreshUser,newCommentUser,commentUser}
