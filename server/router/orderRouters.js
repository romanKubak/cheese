const router = require("express").Router();
const { Product, Basket, User, Order } = require("../db/models");

router.post('/setOrder', async (req, res) => {
  const { buyerID, productID, sellerID } = req.body
  const newOrder = await Order.create({product_id: productID, seller_id: sellerID, user_id: buyerID, status: false})
  const unComplitetProductInOrder = await Product.findOne({where: {id: productID}})
  const thisProdInCart = await Basket.findOne({where: {product_id: productID, user_id: buyerID}})
  await thisProdInCart.destroy()
  res.json({newOrder, unComplitetProductInOrder})
})

router.post('/waitingList/:id', async (req, res) => {
  try {
    const {id} = req.params
    const searchWaitingList = await Order.findAll({
      where: {user_id: id}, 
      include: Product
    })
    const waitingList = searchWaitingList.map((el) => el.Product)
    res.json(waitingList)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
