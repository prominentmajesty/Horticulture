var express = require('express');
var User = require('../models/users');

var router = express.Router();
router.get('/userDashBoard', (req, res)=>{
    res.render('userDashBoard', {
        title : 'User DashBoard',
        style : 'users.css',
        script : 'users.js'
    });
});

router.post('/postData', (req, res)=>{
    var UserName = req.body.UserName;
    var Email = req.body.Email;
    var Password = req.body.Password;
    var ConfirmPassword = req.body.ConfirmPassword;
    
   User.findOne({Email : Email}, function(err, returnedEmail){
      
    if(err){
            console.log(err);
            return res.status(406).send(err);
    
        }else if(returnedEmail){
           console.log("email already exist !!");
           return res.status(501).json({msg: 'Email Adress Allready Exist'});
       }else{

           var user = new User({
               UserName : UserName,
               Email : Email,
               Password : Password,
               ConfirmPassword : ConfirmPassword
           }); 

           user.save().then((data)=>{
            console.log(data);
            res.status(200).json({data : data});

           }).catch((err)=>{
               console.log(err);
           });
       }

   });
});

module.exports = router;