require('dotenv').config()


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const errorMiddleware = require('./middleware/errorMiddleware')
const {User} = require('./db/models')

const gameRouter = require('./router/productRoutes');

const PORT = process.env.PORT || 3002;
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL
}
))

app.use('/api', router);
app.use('/product', gameRouter);

app.post('/score/:id', async(req, res) => {
const id = Number(req.params.id)
  try {
    const user = await User.findOne({where: {id}})
   await user.update({score:req.body.score})
   res.json(user)
  } catch (error) {
    console.log(error);
  }
})

//Подключаем мидлвар ошибок, важно - он должен быть в самом конце всех подключений
app.use(errorMiddleware)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server start on PORT = ${PORT}`))
  } catch (error) {
    console.log(e)
  }
}

start()
