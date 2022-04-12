require('dotenv').config()


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const errorMiddleware = require('./middleware/errorMiddleware')
const {User} = require('./db/models')


const productRoutes = require('./router/productRoutes');
const uploadPhotoRouter = require('./router/uploadPhotoRouters')


const PORT = process.env.PORT || 3002;
const app = express()


app.use(express.json({ extended: true }))
app.use(cookieParser())
app.use(cors(
  {
    credentials: true,
    origin: process.env.CLIENT_URL
}
))

app.use('/api', router);
app.use('/', uploadPhotoRouter)
app.use('/product', productRoutes);



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
