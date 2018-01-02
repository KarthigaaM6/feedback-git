var user = require('user');
var express = require('express');
var router = express.Router();
let user = require('./userdetails.model/user');



module.exports = {

   router.post("/feedback",function(req,res){
      var date1= new Date();


      var data= {
               var feedback=req.body.feedback;
                 var date= JSON.Stringify(date1);
               var adId=req.body.adId;
             };

                     var db = new user(data);
                     db.save().then((doc) => {console.log("successfully inserted");
                         res.status(200).redirect('/');
                     }, (err) => {console.log("error in insertion");
                         res.send(err);}





   });

    },
