$(document).ready(function () {

    $("#register").click(function (event) {
        let newUser = {};

        if ($("#username").val()) {
            newUser.Username = $("#username").val().trim();
        }

        // validate passwords match
        if ($("#password").val() != $("#confirm").val()) {
            alert("Passwords do not match");
            return;
        } else {

            newUser.password = $("#password").val();

            $.post("/api/register",
                newUser,
                function (data) {
                    console.log("user registered", newUser);
                    console.log(data);
                });
        }
    });

    // user login
    $("#login").click(function () {
        let user = {};

        user.Username = $("#username").val().trim();
        user.password = $("#password").val();

        console.log("login");
        console.log(user);

        $.ajax("/api/login/", {
            type: "POST",
            data: user
        }).then(
            function (response) {
                console.log("user log in attempt", user);
                //send back to index or give feedback that registered

                if (!response) {
                    alert("login failed");
                } else {
                    console.log("logging in");
                }
            }
        );
    });
});