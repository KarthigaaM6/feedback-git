var express = require('express');
var router = express.Router();

module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    console.log("inside login route");
      passport.authenticate('login', function(err, user, info) {
        if(err) {console.log(err);}
           if (user) {
            return res.status(200).json({
              message: "success"
            });
          } else {
            return res.status(500).json({
              message: 'Invalid User'
            });
          }
      })(req, res, next);
  });


     router.post("/feedback",function(req,res){
        var date1= new Date();


        var data= {
                  feedback:req.body.feedback,
                    date: new Date(),
                  adId:req.body.adId
               };

                       var db = new user(data);
                       db.save().then((doc) => {
                         console.log("successfully inserted");
                           res.status(200).redirect('/');
                       }), (err) => {
                         console.log("error in insertion");
                           res.send(err);
                         }





     });
  return router;
}
