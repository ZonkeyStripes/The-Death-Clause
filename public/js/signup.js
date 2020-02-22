$(document).ready(function() {
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      Username: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.Username || !userData.password) {
      return;
    }
    signUpUser(userData.Username, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(Username, password) {
    $.post("/api/signup", {
      Username: Username,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
