const router = require("express").Router();
const { Product, Basket, User } = require("../db/models");

router.get("/all", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
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

module.exports = router;
