const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User}, {model: Comment}]
        });
        const posts = postData.map(post => post.get({plain:true}));
        console.log(posts);
        
        res.status(200).render('home', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;