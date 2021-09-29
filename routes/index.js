const express = require('express');
const router = express.Router();
const pages = require('./pages')

router.use(pages);

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
