const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const { name, age, married } = req.body
  const users = new User({ name, age, married })
  try {
    await users.save()
    res.json(users)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

module.exports = router