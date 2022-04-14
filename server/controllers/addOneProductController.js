const uuid = require('uuid')
const path = require('path')
const { User, Product, Category, SubCategory } = require('../db/models')

class AddOneProductController {
  async create (req, res) {
    try {
      const { name, description, price, subCategory, userId } = req.body
      console.log(subCategory);
      const thisSubCategory = await SubCategory.findOne({where: { id: subCategory }})
      const { img } = req.files
      console.log('img', req.files);
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      const product = await Product
        .create({name, description, price, img: fileName, subCategory_id: thisSubCategory.id, seller_id: userId});
      return res.json(product)
    } catch (error) {
      console.log(error);
    }
  }
  async update (req, res) {
    try {
      const { name, description, price, productID } = req.body
      if (req.files !== null) {
        const { img } = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        console.log('залетело в req.files');
        const product = await Product.findOne({where: {id: productID}})
        await product.update({name: name, description: description, price: price, img: fileName})
        return res.json(product)
      } else {
        const product = await Product.findOne({where: {id: productID}})
        await product.update({name: name, description: description, price: price})
        return res.json(product)
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AddOneProductController()
