var express = require('express');
var User = require('../models/users');
var UserPayment = require('../models/userPayment');

var router = express.Router();
router.get('/userDashBoard', (req, res)=>{
    res.render('userDashBoard', {
        title : 'User DashBoard',
        style : 'users.css',
        script : 'dashboard.js'
    });
});
router.get('/admin', function(req, res){
    res.render('admin', {
        title : 'Admin',
        style : 'users.css',
        script : 'admin.js'
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

router.post('/postPayment', (req,res)=>{
    var  fullName = req.body. fullName;
    var cropVariety = req.body.cropVariety;
    var cardNumberForPayment = req.body.cardNumberForPayment;
    var cardCodeForPayment = req.body.cardCodeForPayment;
    var expiringDatForPayment = req.body.expiringDatForPayment;
    var randomNumber = req.body.randomNumber;

    var userPayment = new UserPayment({
        fullName : fullName,
        cropVariety : cropVariety,
        cardNumberForPayment : cardNumberForPayment,
        cardCodeForPayment : cardCodeForPayment,
        expiringDatForPayment : expiringDatForPayment,
        randomNumber : randomNumber 
    });

    userPayment.save().then((data)=>{
        console.log('Succes !! Your Id is : ' + data._id);
        res.status(200).json({data : data});
    }, (err)=>{
        console.log(err);
        res.status(501).json({msg : 'Un-successfull !! try again'});
    });
});

router.post('/getUsers', (req, res)=>{
    var storage = req.body.getIdInput;
    console.log(storage);
   UserPayment.find({_id : storage}, (err, doc)=>{
        if(err){
            console.log(err);
            res.status(401).json({err : 'Search Operation Unccessful'})
        }else{
            console.log(doc);
            res.render('admin',{
            title : 'Admin',
            style : 'users.css',
            script : 'admin.js',
            doc
         });
        }
   });
});

module.exports = router;