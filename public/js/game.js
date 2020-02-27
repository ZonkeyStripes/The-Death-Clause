$(document).ready(function () {
    // import Typed from 'typed.js';

    let inventory;
    let username;

    // retrieve inventory from database, save to localstorage
    $.get("/api/inventory", {
        user: username
    }).done(function (result) {
        inventory = JSON.parse(result);
        updateInv();
    })

    $(".object").click(function (event) {
        let name = $(this).attr("data-id");
        renderDialogue(name);
        $.get("/api/dialogue", {
            name: $(this).attr("data-id"),
            inv: inventory
        }).done(function (result) {
            console.log(result);
            inventory = JSON.parse(result.inventory);
            renderDialogue(result.dialogue);
            updateInv();
        });
    });

    // render responses in a modal using typed.js
    function renderDialogue(dialogue){
        // display: block
        
        $(".element").empty();
        $(".element").css("display","block");

        let options = {
            strings: [dialogue],
            typeSpeed: 40,
            showCursor: false
        };
    
        let typed = new Typed('.element', options);
        // $(".module").append(typed);

    }


    function updateInv() {
        for (let i = 0; i < inventory.length - 1; i++) {
            let li = `<li data-id="{inventory[i]}">{inventory[i]}</li>`
            $("#invList").append(li);
        }
    }

    $(".element").click(function(){
        $(".element").css("display","none");
    })


});