const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const { Comment } = db;


router.get('/', asyncHandler(async (req, res) => {
  const comments = await Comment.findAll();
  return res.json({ comments });
}));

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { comment, imageId } = req.body;
  const commentText = await Comment.create({ userId, comment, imageId })
  return res.json({ comment: commentText })
}))

router.delete('/:id(\\d+)', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id)
  console.log('re.params:', req.params.id);
  if (comment) {
    await comment.destroy();
    res.status(204).end();
  } else {
    console.log('That did not work');
    next(productNotFoundError(req.params.id))
  }
})

module.exports = router;
