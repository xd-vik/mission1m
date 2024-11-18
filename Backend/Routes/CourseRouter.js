const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req,res) =>{
    res.status(200).json([
        {
            name:"Full Stack Webdevlopment",
            price: 10000
    },
    {
        name : "Cloud Computing",
        price: 20000
    }
    ])
})


module.exports = router;