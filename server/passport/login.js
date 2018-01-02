var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../user/user.model.js')

module.exports = function(passport) {
  console.log("inside passport");
    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function(req, username, password, done) {
          console.log("inside passport1",username);
          console.log("inside passport1",password);

            UserModel.findOne({
                'username': username,
                'password': password
            }, function(err, user) {
                /* mongo server error */
                if (err)  {
                  console.log('error: ', err)
                  return done(err)
                }
                /* user will be null if no match is found  */
                else {
                  console.log('user: ', user)
                return done(null, user);
              }
            })
        }

    ))
}
