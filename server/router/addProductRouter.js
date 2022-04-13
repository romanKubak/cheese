const router = require('express').Router()

const { User, Product } = require('../db/models')

const AddOneProductController = require('../controllers/addOneProductController')

router.post('/addProduct', AddOneProductController.create)


module.exports = router
