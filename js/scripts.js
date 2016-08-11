$(document).ready(function(){
  $("form").submit(function(event){
    $("div").removeClass("has-error");
    //$(".help-block").text("");
    event.preventDefault();

    var name = $("#nameInput").val();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var result = (answer1 + answer2 + answer3)

    if(!name){
      $("#nameBox").addClass("has-error");
      $("#nameHelp").text("Please enter your name");
    }
    else {
      $("img").hide();
      $("#wizOut").show();
      $("#nameOut").text(name);
      if(result > 20){
        $("#wizard").text("Sauron")
        $("img#sauron").show();
      }
      else if (result > 13) {
        $("#wizard").text("Morgan La Faye")
        $("img#morgan").show();
      }
      else if (result > 10) {
        $("#wizard").text("Circe of Greece")
        $("img#circe").show();
      }
      else if (result > 7) {
        $("#wizard").text("Moiraine")
        $("img#moiraine").show();
      }
      else if (result > 4) {
        $("#wizard").text("Rincewind")
        $("img#rincewind").show();
      }
      else {
        $("#wizard").text("Harry Potter")
        $("img#harry").show();
      }
    }
  });
});
