var express = require('express');

var router = express.Router();
router.get('/', (req, res)=>{
    res.render('home', {
        title : 'Home',
        style : 'users.css',
        script : 'users.js'
    });
});
module.exports = router;