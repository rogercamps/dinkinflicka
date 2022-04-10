const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const { Image } = db;

router.get('/', asyncHandler(async (req, res) => {
  const images = await Image.findAll();
  return res.json({ images });
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const id = +req.params.id;
  const images = await Image.findByPk(id, {include: db.User});
  console.log(images);
  return res.json({ images });
}));

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { imageUrl, title } = req.body;
  const image = await Image.create({ userId, imageUrl, title })
  return res.json({ image })
}))

// router.delete('/:id(\\d+)', async (req, res, next) => {
//   const image = await Image.findByPk(req.params.id);
//   if (image) {
//     await image.destroy();
//     res.status(204).end();
//   } else {
//     next(productNotFoundError(req.params.id));
//   }
// });

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
  const image = await Image.findByPk(req.params.id);
  image.title = req.body.title || image.title
  await image.save()
  res.json({ image })
}))

router.delete('/:id(\\d+)', async(req, res) => {
  const image = await Image.findByPk(req.params.id)
  await image.destroy()
  res.status(204).end()
})

module.exports = router;
