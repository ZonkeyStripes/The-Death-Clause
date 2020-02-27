$(document).ready(function () {

    //to-do
    //check if landscape
    // implement typed.js


    // import Typed from 'typed.js';

    // let options = {
    //     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    //     typeSpeed: 40
    //   };

    // let typed = new Typed('.element', options);

    // register new user
    // $(window).click(function(event){
    //     console.log(event);
    // })

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
                newUser).
                then(
                function (data) {
                    console.log("user registered", newUser);
                    console.log(data);
                    window.location.replace("/login");
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
        
        // $.post("/api/login",
        // user,
        // function (data) {
        //     console.log("user login", user);
        //     console.log(data);
        // });

        $.ajax("/api/login/", {
            type: "POST",
            data: user
        }).then(
            function (response) {
                console.log("user log in attempt", user);
                //send back to index or give feedback that registered
                //   location.reload();
                if (!response) {
                    alert("login failed");
                } else {
                    console.log("logging in");
                }
            }
        );
    });

});