const router = require("express").Router();
const { Category, Product,SubCategory} = require("../db/models");
const { Op } = require('sequelize');

router.get('/all', async (req, res) => {
try {
  const categories = await Category.findAll()
  res.json(categories)
} catch (error) {
  console.log(error);
}

})

router.post('/sub/:id', async (req, res) => {
  try {
    const sub = await SubCategory.findAll({where: {category_id: req.params.id}})
    res.json(sub)
  } catch (error) {
    console.log(error);
  }
  
  })

router.get('/:id', async (req, res) => {
  try {
    const products = await Product.findAll({where: {category_id: req.params.id}})
    res.json(products)
  } catch (error) {
    console.log(error);
  }
  
  })


module.exports = router
