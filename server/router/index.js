const router = require('express').Router();
const uuid = require('uuid')
const path = require('path')
const { registrationUser, loginUser, logoutUser, getUsers, refreshUser,newCommentUser,commentUser  } = require('../controllers/userControllers')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/authMiddliware')
const { User } = require('../db/models')


router.post('/registration', 
      body('email').isEmail(), 
      body('password').isLength({ min: 4, max: 32 }),
      registrationUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

// Показывает всех пользователей только зарегестрированному пользователю
router.get('/users', authMiddleware, getUsers)

router.get('/refresh', refreshUser)

router.post('/comment/new/:id', newCommentUser)

router.get('/comments/:id', commentUser)

router.post('/updateImgProfile', async (req, res) => {
  // const { img } = req.files
  // console.log('\n\n\n попало в ручку update \n\n\n');
  const { userID } = req.body
  console.log('\n\n\nuserID \n\n\n', userID);
  try {
    if (req.files !== null) {
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      // console.log('залетело в req.files');
      const user = await User.findOne({where: {id: userID}})
      await user.update({img: fileName})
      return res.json({
        img: user.img, 
        id: user.id, 
        rating: user.rating, 
        email: user.email, 
        name: user.name})
    } else {
      const user = await User.findOne({where: {id: userID}})
      return res.json(user)
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
