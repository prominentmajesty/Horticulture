var express = require('express');

var router = express.Router();
router.get('/userDashBoard', (req, res)=>{
    res.render('userDashBoard', {
        title : 'User DashBoard',
        style : 'users.css',
        script : 'users.js'
    });
});
module.exports = router;