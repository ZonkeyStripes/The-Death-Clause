$(document).ready(function () {
    let inventory;
    let act = 0;

    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let dialogue = {
        Frank_Frankard: [
            "That's Frank Frankard. Poor Bastard. I can't believe we didn't even notice until now.",
            "You rifle through Frank's pockets with the most repectful of manners and find a piece of paper with a code on it.",
            "Frank doesn't have anything else useful on him. His blank face is getting uncomfortable to look at.",
            "Frank's cold, he won't be melting this key for me.",
            "You inspect Frank's body again, he has a puncture wound in his neck. Odd.",
            "You notice a puncture wound on Frank's neck. You turn over the eye drops but there's nothing to suggest a connection."
        ],
        Plant: [
            "A nice, hearty plant.", 
            "Someone needs to water that thing.",
            "Sorry buddy, I only brought whiskey.",
            "That plant looks a little worse for wear.",
            "That ficus is fading fast.",
            "There's no way a healthy plant can die in less time than it takes to finish a point-and-click game. You dig through the dirt and find another bottle of eye drops, this one has a hand-written letter 'P' on it. <br> Now confront the killer!"
        ],
        Closet: [
            "That's the coat closet, it's locked.", 
            "This door needs a good, old-fashioned key to open.",
            "The fridge code does nothing here.",
            "I need something to melt the key before I can use it.",
            "The closet unlocks, there's only one coat hanging in it. You go through the pockets and find a bottle of eye drops.",
            "There's nothing left in the closet."
        ],
        Fridge: [
            "I still don't know how to get ice out of here. Is that a keypad?", 
            "I need to find the code for the fridge",
            "You enter in the code and a single ice cube tumbles out. There's a key frozen inside!",
            "Nothing else in the fridge, Frank was a minimalist to the end.",
            "The key doesn't work on the fridge",
            "There's nothing left in the fridge."
        ],
        Tito: [
            "Who's cat is this?", 
            "'Meow'",
            "He purrs.",
            "'Do you know how to melt this key little kitty?', you say. He just stares.",
            "You poke the cat with the key. He says 'Mrow?'",
            "'We're getting close, right buddy?', you say. He meows in affirmnation."
        ],
        James_Hooker: [
            "James Hooker, Frank's mysteriously one-eyed co-worker says 'How could we have seen this coming?'",
            "'Don't look at me, I don't know anything about secret refridgerator codes.'",
            "'That note looks like it has my luggage code on it, '12345''",
            "'I doesn't look like I have anything that could melt that ice cube, sorry.'",
            "'Not sure what that key goes to, looks useless to me.'",
            "'Erm, yes those are my eyedrops. Why do you ask?'"
        ],
        Penelope: [
            "Penelope, Frank's fiance sobs and cries 'Not Frank! He had so much mon- er, so much to live for!'",
            "'The code to the fridge? Frank never told me, he said my ice usage was wasteful. I think he kept it written down though.'",
            "'You found the code? Could you top up my drink while its open?' You frown at her and she seems to get the point.",
            "'Something to melt that? No, I'm on a heat-free cleanse so I can't have anything warm.",
            "'Frank was going to upgrade the closet to an electronic lock but he never got around to it. Keys are just so outdated, don't you think?'",
            "'No, I don't use eyedrops. My eyes are perfectly moist.' Penelope bats her eyelashes."
        ],
        Bank_Frankard: [
            "Bank Frankard, Frank's less successful brother who was named with a touch of irony, comforts Penelope.",
            "'I can't believe Frank wasted money on a fridge he could never remember the combination to. He kept practically all his passwords on sticky notes shoved in his pockets'",
            "Find anything else in Frank's pockets? He owed me $50.",
            "'You want to melt an ice cube? I brought my hairdryer with me, let me get thet for you,' he says as he blasts the cube and leaves a puddle of water and a key in your hand. You look at him perplexed, but greatful.",
            "'You're welcome.' Bank says. You decide not to ask about where he keeps that hairdyer.",
            "'No, I don't carry eye drops. Those belong in the bathroom.' Bank says and tucks the cord of his hairdryer back into place."
        ]
    }

    if(vh>vw){
        alert("This game is best played in landscape mode!");
    }

    $(".object").click(function (event) {
        let name = $(this).attr("data-id");
        renderDialogue(dialogue[name][act]);

        if($(this).attr("data-act") == act + 1){
            act++;
            changePlant();
        }else if($(this).attr("data-act2") == act + 1){
            act++;
            changePlant();
        }
    });

    // render responses in a modal using typed.js
    function renderDialogue(dialogue){
        // display: block
        
        $(".element").empty();
        $(".modal").css("display","block");

        let options = {
            strings: [dialogue],
            typeSpeed: 20,
            showCursor: false
        };
    
        let typed = new Typed('.element', options);
        // $(".module").append(typed);

    }

    function changePlant(){
        // swap out images depending on act
    }

    function updateInv() {
        $.ajax({
            url: "/api/state",
            type: "PUT",
            data: {
                inv: inventory,
                act: act
            },
            success: function (result) {
                // inventory = JSON.parse(result);
                for (let i = 0; i < inventory.length - 1; i++) {
                    let li = `<li data-id="{inventory[i]}">{inventory[i]}</li>`
                    $("#invList").append(li);
                }
            }
        });
    }

    $(".modal").click(function(){
        $(".modal").css("display","none");
    });

});