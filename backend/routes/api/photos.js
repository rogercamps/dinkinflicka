const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../../utils/auth')

const db = require('../../db/models');
const { Image } = db;

// const handleValidationErrors = (req, res, next) => {
//   const validationErrors = validationResult(req);
//   if (!validationErrors.isEmpty()) {
//     const errors = validationErrors.array().map((error) => error.msg);

//     const err = Error('Bad request.');
//     err.errors = errors;
//     err.status = 400;
//     err.title = 'Bad request.';
//     return next(err);
//   }
//   next();
// };

// const validateImageUrl = (imageUrl) => {
//   const urlFileTypes = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];
//   const urlChuncks = imageUrl.split('.');
//   console.log(urlChuncks.includes(urlFileTypes[urlFileTypes.length - 1]));
//   if (urlChuncks.includes(urlFileTypes[urlFileTypes.length - 1]) === false) {
//     // add this to errors
//     console.log('This url is not an accepted format');
//   };
// }

// const validationResult = [
//   check('imageUrl')
//     .notEmpty()
//     .isURL({ require_protocol: false, require_host: false }),
//   check('title').not().isEmpty(),
//   handleValidationErrors
// ];

router.get('/', asyncHandler(async (req, res) => {
  const photos = await Image.findAll();
  return res.json({ photos });
})
);

router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { imageUrl, title } = req.body;
  const image = await Image.create({ userId, imageUrl, title })
  return res.json({ image })
}))

module.exports = router;
