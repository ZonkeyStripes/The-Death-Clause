// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// const { Op } = require("sequelize");

module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      Username: req.user.Username,
      id: req.user.id
    });
  });
 
  
  app.post("/api/register",function(req, res) {
    console.log(req.body);
    db.User.create({
      Username: req.body.Username,
      password: req.body.password
    })
      .then(function() {
        console.log("success");
        res.redirect("/");

      })
      .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side

  // app.post("/api/login/", passport.authenticate("local"), function(req, res) {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   console.log(req.body);
  //   res.json({
  //     Username: req.user.Username,
  //     id: req.user.id
  //   });
  //   res.redirect(307, "/api/game");
  // });


  app.get("/api/click", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


};
