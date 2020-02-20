$(document).ready(function () {

    // register new user
    $("#register").click(function () {
        let newUser = {};

        newUser.username = $("#username").val().trim;

        // validate passwords match
        if ($("#password").val() != $("#confirm").val()) {
            alert("Passwords do not match");
            break;
        } else {

            newUser.password = $("#password").val();

            $.ajax("/api/register/" + id, {
                type: "POST",
                data: newUser
            }).then(
                function () {
                    console.log("user registered", newUser);
                    //send back to index or give feedback that registered
                    //   location.reload();
                }
            );
        }
    });


    $("#login").click(function(){

    });

});