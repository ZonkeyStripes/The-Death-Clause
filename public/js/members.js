$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
    $.get("/api/gob_data").then(function(data){
      for(let i = 0; data.length > i; i++) {
        
      }
    });
});
