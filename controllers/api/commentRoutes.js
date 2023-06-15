const router = require('express').Router();
const { Post, User } = require('../../models');
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

// Pull comment data
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {user_name : req.session.user_name}
        });
        res.status(200).json(commentData);
    } catch (error) {
        console.log(error);
    }
});

//post comment route
router.post('/', withAuth, async(req,res) => {
    let today = new Date();
    let date = today.toLocaleDateString();
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            date: date,
            post_id: req.body.post_id
        });

        const postData = await Post.findAll({
            where: {user_id : req.session.user_id}, //define req.session.user_name
            include: [{ model: User }, {model: Comment}]
        });
        const posts = postData.map(post => post.get({ plain: true }));
        console.log(posts);
        res.status(200).render('dashboard', {
        posts,
        logged_in: req.session.logged_in
        });

    } catch(err) {
        console.log(err)
    }
});

module.exports = router;