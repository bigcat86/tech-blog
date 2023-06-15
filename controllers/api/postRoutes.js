const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

//post post route
router.post('/', withAuth, async(req,res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            body: req.bod.body,
            user_id: req.session.user_id
        });

        const postData = await Post.findAll({
            where: {user_id : req.session.user_id}, //define req.session.user_name
            include: [{ model: User }]
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.status(200).render('dashboard', {
        posts
        });

    } catch(err) {
        console.log(err)
    }
});
  
  //post a gpt route
router.post('/gpt', withAuth, async(req,res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            body: req.bod.body,
            user_id: req.session.user_id
        });

        const postData = await Post.findAll({
            where: {user_id : req.session.user_id}, //define req.session.user_name
            include: [{ model: User }]
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.status(200).render('dashboard', {
        posts
        });

    } catch(err) {
        console.log(err)
    }
})
  
  // delete a post route
router.delete('/', withAuth, async(req,res) => {
try {
    const deletePost = await Post.destroy({
        where: {id: req.body.id}
    });

    const postData = await Post.findAll({
        where: {user_id : req.session.user_id}, 
        include: [{ model: User }]
    });
    const posts = postData.map(post => post.get({ plain: true }));

    res.status(200).render('dashboard', {    // might not need to render if using replace
    posts
    });

} catch(err) {
    console.log(err);
}

});
  
  // update post
router.put('/', withAuth, async(req,res) => {
try {
    const updatePost = await Post.update(req.body, {
        where: {id: req.body.id}  // use a different where?
    });

    const postData = await Post.findAll({
        where: {user_id : req.session.user_id}, 
        include: [{ model: User }]
    });
    const posts = postData.map(post => post.get({ plain: true }));

    res.status(200).render('dashboard', {    // might not need to render if using replace
    posts
    });

} catch(err) {
    console.log(err);
}
});

module.exports = router;