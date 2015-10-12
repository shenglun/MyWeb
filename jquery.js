$(document).ready(function(){
    $("#mug_shot").click(function(){
        $(this).attr("src", "head.jpg");
    });
      $("#name").mouseover(function(){
    $("#name").css("background-color","red");
  });
  $("#name").mouseout(function(){
    $("#name").css("background-color","rgba(255,0,0,0)");
  });
});
