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

module.exports = router;
