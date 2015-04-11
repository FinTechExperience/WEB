function showMenu(){
  var menu    = document.getElementById("menu");
  var burger  = document.getElementById("burger");
  var close   = document.getElementById("close-button");
  
  burger.style.display = "none";
  
  $(close).fadeIn("fast");
  $(menu).animate({left: "+=300px"}, 300);
  
}

function hideMenu(){
   var menu    = document.getElementById("menu");
  var burger  = document.getElementById("burger");
  var close   = document.getElementById("close-button");
  
  close.style.display = "none";
  
  $(burger).fadeIn("fast");
  $(menu).animate({left: "-=300px"}, 300);
}

function test(){
  alert("Alojomora");
}