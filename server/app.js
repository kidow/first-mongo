require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const usersRouter = require('./src/routes/users')
const commentsRouter = require('./src/routes/comments')

const app = express()

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL, { dbName: 'nodejs', useNewUrlParser: true, useCreateIndex: true }, err => {
  if (err) {
    console.log('몽고디비 연결 에러', err)
  } else {
    console.log('몽고디비 연결 성공')
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', usersRouter)
app.use('/api/comments', commentsRouter)

app.listen(4000, () => {
  console.log('App listening on port 4000!');
});