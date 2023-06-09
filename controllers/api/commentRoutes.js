const router = require('express').Router();
const Comment = require('../../models/Comment');

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

module.exports = router;