const uuid = require('uuid')
const path = require('path')
const { User, Product, Category } = require('../db/models')

class AddOneProductController {
  async create (req, res) {
    try {
      const { name, description, price, category, userId } = req.body
      const thisCategory = await Category.findOne({where: { name: category }})
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      const product = await Product
        .create({name, description, price, img: fileName, category_id: thisCategory.id, seller_id: userId});
      return res.json(product)
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = new AddOneProductController()
