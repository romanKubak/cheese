const router = require("express").Router();
const { Product, Basket, User } = require("../db/models");
const { Op } = require('sequelize');

router.get("/all", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/allMyProduct/:id', async (req, res) => {
  try {
    const {id}  = req.params
    console.log('---userID---', id);
    const allMyProducts = await Product.findAll({where: {seller_id: id}})
    // console.log(allMyProducts);
    res.json(allMyProducts)
  } catch (error) {
    console.log(error);
  }
})

router.post("/cart/new", async (req, res) => {
  console.log(req.body);
  try {
    const newCart = await Basket.create({
      user_id: req.body.userID,
      product_id: req.body.productID,
    });
    const product = await Product.findOne({
      where: { id: newCart.product_id },
    });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

router.post("/cart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const userCart = await User.findAll({
      through: {
        model: Basket,
      },
      where: { id: id },
      include: {
        model: Product,
      },
    });
    // const products = await Product.findAll({where:{id:basket.product_id}})
    
    res.json(userCart[0].Products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


// router.post('/filter', async (req, res) => {
//   try {
//     const search = req.body.product;
//     const products = await Product.findAll({ where: { name: { [Op.iLike]: `%${search}%` } } });
//     res.json(products)
//   } catch (error) {
//     console.log(error);
//   }
// })
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('id-----', id);
    const oneProductFromCart = await Basket.findOne({ where: { product_id: id }})
    await oneProductFromCart.destroy()
    res.sendStatus(200)
  } catch (error) {
    
  }
})

router.post('/delete/:id', async (req, res) => {
  try {
    const {id} = req.params
    console.log('id-----', id);
    const oneProduct = await Product.findOne({where: { id: id }})
    await oneProduct.destroy()
    res.sendStatus(200)
  } catch (error) {
    
  }
})

module.exports = router;
