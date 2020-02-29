// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// const { Op } = require("sequelize");

module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      Username: req.user.Username,
      id: req.user.id
    });
  });


  app.post("/api/register", function (req, res) {
    console.log(req.body);
    db.User.create({
        Username: req.body.Username,
        password: req.body.password
      })
      .then(function () {
        console.log("success");
        res.redirect("/");

      })
      .catch(function (err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // MMAKE THIS NOT SEND BACK THE PASSWORD
  app.get("/api/load", function (req, res) {
    console.log("load");
    let data = db.User.findOne({where:{Username: req.user.Username}}).then(function(result){
      let save = {
        inventory: result.inventory,
        act: result.act
      }
      res.send(save);
    });
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

  app.put("/api/state", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      console.log(req.body);
      console.log(req.user.Username);
      db.User.update({
        inventory: req.body.inv,
        act: req.body.act
      }, {
        where: {
          Username: req.user.Username
        }
      }).then(function (result) {
        res.end();
      }).catch(function (err) {
        console.log(err);
      })
    }
  });


};