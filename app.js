$(function(){
var clicks = 1;

  $("#generate").on("click", function(event){
    $("body").append("<container id=\"moreButtons\"><br><button id=\"deleteButton\">Delete</button><button id=\"changeButton\">Change</button></container>");
  })

  $("body").on("click", "#deleteButton", function(event){  //delete function - also resets count
    $(this).parent().remove();
    clicks=1;
  });

  $("body").on("click", "#changeButton", function(event){   //change function
  $("#moreButtons").append("<div id=\"counter\"></div>");
  $(this).parent().toggleClass("red");
    clickCounter();
  });

function clickCounter(){
  $("#counter").empty();
  $("#counter").append("<p id=\"counter\">Change button clicked " + clicks + " time(s).")
  clicks++;
}

});
