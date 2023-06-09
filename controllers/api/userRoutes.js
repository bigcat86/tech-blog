const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        res.render('home')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;