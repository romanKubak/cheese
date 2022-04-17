const router = require("express").Router();
const { Product, Basket, User, Order } = require("../db/models");

router.post('/setOrder', async (req, res) => {
  const { buyerID, productID, sellerID } = req.body
  const newOrder = await Order.create({product_id: productID, seller_id: sellerID, user_id: buyerID, statusSeller: false, statusClient: false})
  const thisProduct = await Product.findOne({where: {id: productID}})
  await thisProduct.update({statusClient: true})
  const unComplitetProductInOrder = await Product.findOne({where: {id: productID}})
  const thisProdInCart = await Basket.findOne({where: {product_id: productID, user_id: buyerID}})
  await thisProdInCart.destroy()
  res.json({newOrder, unComplitetProductInOrder})
})

router.post('/waitingList/:id', async (req, res) => {
  try {
    const {id} = req.params
    const searchWaitingList = await Order.findAll({
      where: {user_id: id, statusClient: false},
      include: Product
    })
    const waitingList = searchWaitingList.map((el) => el.Product)
    res.json(waitingList)
  } catch (error) {
    console.log(error);
  }
})

router.post('/waitingListToSend/:id', async (req, res) => {
  try {
    const { id } = req.params
    const searchWaitingListToSend = await Order.findAll({
      where: {seller_id: id, statusSeller: false},
      include: Product
    })
    const waitingListToSend = searchWaitingListToSend.map((el) => el.Product)
    res.json(waitingListToSend)
  } catch (error) {
    console.log(error);
  }
})

router.post('/sendProduct', async (req, res) => {
  try {
    const {seller_id, productID} = req.body;
    const thisOrder = await Order.findOne({where: {seller_id: seller_id, product_id: productID}})
    const thisProduct = await Product.findOne({where: {id: productID}})
    await thisOrder.update({statusSeller: true})
    console.log('thisOrder', thisOrder);
    res.json(thisProduct)
  } catch (error) {
    console.log(error);
  }
})

router.post('/getDoneSendingProducts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const searchDoneListToSend = await Order.findAll({
      where: {seller_id: id, statusSeller: true},
      include: Product
    })
    const doneListToSending = searchDoneListToSend.map((el) => el.Product)
    res.json(doneListToSending)
  } catch (error) {
    console.log(error);
  }
})

router.post('/getReceiptProducts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const searchDoneListToSend = await Order.findAll({
      where: {user_id: id, statusClient: true},
      include: Product
    })
    const doneListToSending = searchDoneListToSend.map((el) => el.Product)
    res.json(doneListToSending)
  } catch (error) {
    console.log(error);
  }
})

router.post('/receiptProduct', async (req, res) => {
  try {
    const {user_id, productID} = req.body;
    const thisOrder = await Order.findOne({where: {user_id: user_id, product_id: productID}})
    const thisProduct = await Product.findOne({where: {id: productID}})
    await thisOrder.update({statusClient: true})
    console.log('thisOrder', thisOrder);
    res.json(thisProduct)
  } catch (error) {
    console.log(error);
  }
})
module.exports = router
