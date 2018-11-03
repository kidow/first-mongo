const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const comments = await Comment.find({ commenter: id }).populate('commenter')
    res.json(comments)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const { id, comment } = req.body
  const comments = new Comment({
    commenter: id,
    comment
  });
  try {
    const result = await comments.save()
    const result2 = await Comment.populate(result, { path: 'commenter' } )
    res.status(201).json(result2)
  } catch (e) {
    console.log(3)
    res.status(500)
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const { comment } = req.body
  try {
    const result = await Comment.update({ _id: id, comment })
    res.json(result)
  } catch (e) {
    console.log(e)
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await Comment.remove({ _id: id })
    res.json(result)
  } catch (e) {
    console.log(e)
    next(e)
  }
})

module.exports = router