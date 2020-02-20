$(document).ready(function () {

    //to-do
    //check if landscape
    // implement typed.js


    import Typed from 'typed.js';

    let options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40
      };
      
    let typed = new Typed('.element', options);
    
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

            $.ajax("/api/register/", {
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

// user login
    $("#login").click(function(){
        let user = {};

        user.username = $("#username").val().trim();
        user.password = $("#password").val();

        $.ajax("/api/login/", {
            type: "GET",
            data: user
        }).then(
            function (response) {
                console.log("user log in attempt", user);
                //send back to index or give feedback that registered
                //   location.reload();
                if(!response){
                    alert("login failed");
                }else{
                    console.log("logging in");
                }
            }
        );
    });

});