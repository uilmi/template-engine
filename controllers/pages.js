const { Article } = require('../models');

const home = (req, res) => {
    const title = 'Hello world';
    const subTitle = 'Welcome to the world';

    res.render('index', { title, subTitle });
}

const about = (req, res) => {
    res.render('about', { title: 'About' });
}

const articles = (req, res) => {
    Article.findAll().then(articles => {
        res.render("article/index", { title: "Articles", articles });
    });
}

const showArticle = (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    }).then(article => {
        res.render('article/show', {
            id: article.id,
            title: article.title,
            body: article.body
        })
    }).catch(err => res.status(404).send('Tidak dapat menemukan artikel'))
}

module.exports = {
    home,
    about,
    articles,
    showArticle
}