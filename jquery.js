$(document).ready(function(){
    $("#mug_shot").mouseover(function(){
        $(this).attr("src", "head.jpg");
    });
    $("#mug_shot").mouseout(function(){
        $(this).attr("src", "myphoto.jpg");
    });
      $("#name").mouseover(function(){
    $("#name").css("background-color","red");
  });
  $("#name").mouseout(function(){
    $("#name").css("background-color","rgba(255,0,0,0)");
  });
});
