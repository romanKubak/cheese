const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/all', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/cart/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const questions = await Question.findAll({ where: {category_id: id }, raw: true });
  
    res.json(questions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router
