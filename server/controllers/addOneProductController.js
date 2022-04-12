const uuid = require('uuid')
const path = require('path')
const { User, Product } = require('../db/models')

class AddOneProductController {
  async create (req, res) {
    try {
      const { name, description, price } = req.body
      console.log('\n req.body ---> \n', req.body, '\n-----req.body \n');
      console.log('\n req.files ---> \n', req.files, '\n-----req.files \n');
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      const product = await Product
        .create({name, description, price, img: fileName, category_id: 1, seller_id: 1});
       return res.json(product)    
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = new AddOneProductController()
