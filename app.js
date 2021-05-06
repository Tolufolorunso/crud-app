const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()

app.use(cors())
dotenv.config({
  path: './config.env',
})

// Body parser
app.use(express.json({ extended: true }))

const userRoute = require('./routes/user.route')
app.use('/users', userRoute)

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: {
      name: 'Tolulope Folorunso',
      message: 'Welcome Home',
    },
  })
})

const DB = process.env.DATABASE
//const DB_LOCAL = process.env.DATABASE_LOCAL

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((c) => console.log('DATABASE connection successfull'))

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`)
})
