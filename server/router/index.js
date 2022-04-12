const router = require('express').Router();

const { registrationUser, loginUser, logoutUser, getUsers, refreshUser, seller } = require('../controllers/userControllers')
const { body } = require('express-validator')
const authMiddleware = require('../middleware/authMiddliware')


router.post('/registration', 
      body('email').isEmail(), 
      body('password').isLength({ min: 4, max: 32 }),
      registrationUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

// Показывает всех пользователей только зарегестрированному пользователю
router.get('/users', authMiddleware, getUsers)

router.get('/refresh', refreshUser)

router.post('/seller/:id', seller)


module.exports = router
