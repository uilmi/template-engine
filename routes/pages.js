const router = require('express').Router();

const page = require('../controllers/pages');

router.get('/', page.home);
router.get('/about', page.about);
router.get('/article', page.articles);
router.get('/article/:id', page.showArticle);

module.exports = router;