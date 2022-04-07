const router = require('express').Router();
const app = require('../../app.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photosRouter = require('./photos.js');
const commentsRouter = require('./comments.js');

router.use('/photos', photosRouter);

router.use('/comments', commentsRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
