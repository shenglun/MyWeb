$(document).ready(function(){
    $("#mug_shot").click(function(){
        $(this).css("src", "head.jpg");
    });
      $("#name").mouseover(function(){
    $("#name").css("background-color","red");
  });
  $("#name").mouseout(function(){
    $("#name").css("background-color","white,opacity:0.0");
  });
});
