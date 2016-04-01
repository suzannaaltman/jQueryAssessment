$(function(){
  $("#generate").on("click", function(event){
    $("body").append("<br><container id=\"moreButtons\"><button id=\"deleteButton\">Delete</button><button id=\"changeButton\">Change</button></container>");
  })

  $("body").on("click", "#deleteButton", function(event){
    console.log("delete button clicked");
    $(this).parent().remove();
  });

  $("body").on("click", "#changeButton", function(event){
    console.log("change button clicked");
  });

});

// Additionally, there should be text that provides a number. The number should be the number of times the 'generate' button has been clicked.
