var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {usernameField: 'Username',
passwordField: 'password'},
  function(Username, password, done) {
    console.log('hit middleware', Username, password)
    db.User.findOne({
       where:{Username: Username}
    }).then(function(dbUser) {
      console.log(dbUser)
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect Username."
        });
      }
      else if (!dbUser.validPassword(password)) {
        console.log('wrong password')
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    }).catch(function(err){
      console.log(err)
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
