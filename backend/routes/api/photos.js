const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const db = require('../../db/models');
const { Image } = db;

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const photos = await Image.findAll();
    return res.json({ photos });
  })
);

module.exports = router;
