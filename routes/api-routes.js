// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// const { Op } = require("sequelize");

module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/api/register", passport.authenticate("local"),function(req, res) {
    res.json({
      Username: req.user.Username,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/register", function(req, res) {
    console.log("register req");
    console.log(req.body);
    db.User.create({
      username: req.body.Username,
      password: req.body.password
    })
      .then(function() {
        console.log("success");
        res.redirect(307, "/");

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
  // app.get("/api/login", function(req, res) {
     
  //     let verifyUser = db.User.findOne({
  //       where: {
  //         [Op.and]: [
  //           {username: req.body.username},
  //           {password: req.body.password}
  //         ]
  //       }
  //     });
  //     if(verifyUser){
  //       res.send(true);
  //     }else{
  //       res.send(false);
  //     }
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user)
    res.json({
      username: req.user.Username,
      id: req.user.id
    });

      // The user is not logged in, send back an empty object
  });
};