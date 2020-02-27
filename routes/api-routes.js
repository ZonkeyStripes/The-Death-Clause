// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// const { Op } = require("sequelize");

module.exports = function(app) {
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/register", passport.authenticate("local"),function(req, res) {
  //   res.json({
  //     Username: req.user.Username,
  //     id: req.user.id
  //   });
  // });

  app.get("/api/game",function(req,res){
    db.findAll({
      where: {
        name : name
      }
    }).then(function(results){
      res.json(results);
    });
  });

  app.get("/api/game",function(req,res){
    db.findAll({
      where: {
        dialog : dialog
      }
    }).then(function(results){
      res.json(results)
    });
  });

  app.post("/api/register",function(req, res) {
    db.User.create({
      username: req.body.Username,
      password: req.body.password
    })
      .then(function() {
        console.log("success");
        res.redirect(307, "/api/game");

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
  app.post("/api/login/", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.body);
    res.json({
      username: req.user.Username,
      id: req.user.id
    });
    res.redirect(307, "/api/game");
  });

};

