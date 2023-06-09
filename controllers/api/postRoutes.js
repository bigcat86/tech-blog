const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Pull post data
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_name : req.session.user_name},
            include: [{ model: User }]
        });
        const posts = postData.map(post => post.get({ plain: true }));
        res.status(200).render('dash', {
            posts
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;