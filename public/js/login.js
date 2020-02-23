$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.Username || !userData.password) {
      return;
    }

   
    loginUser(userData.Username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

   function loginUser(Username, password) {
    $.post("/api/login", {
      Username: Username,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
