const router = require('express').Router()
const fileMiddleware = require('../middleware/uploadFile')
const testUpload = require('../middleware/testUpload')

const { User, Product } = require('../db/models')

router.post('/api/upload', testUpload, (req, res) => {
  try {
    console.log('req.body ---> \n\n', req.body);
    console.log('req.file ===> \n\n', req.file);
    console.log('req.fileы ===> \n\n', req.files);
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
