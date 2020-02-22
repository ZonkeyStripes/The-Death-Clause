$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.Username);
    console.log("Data is received on Users");
  });
});
