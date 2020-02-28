$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.Username);
    console.log("data received");
  });
    // $.get("/api/gob_data").then(function(data){
    //   for(let i = 0; data.length > i; i++) {
        
    //   }
    // });
});
