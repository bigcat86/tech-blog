const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try {
        res.render('home')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;