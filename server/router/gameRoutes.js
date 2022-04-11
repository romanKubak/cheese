const router = require('express').Router();
const { Category, Question } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const categories = await Category.findAll({raw: true});
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/question', async (req, res) => {
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
