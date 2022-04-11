const router = require('express').Router()
const fileMiddleware = require('../middleware/uploadFile')

router.post('/upload', fileMiddleware.single('avatar'),(req, res) => {
  try {
    if(req.file) {
      console.log('req.path ===> \n\n', req.file.path);
      // нужно записать req.path в базу данных
      res.json(req.file)
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
