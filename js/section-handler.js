function loadSavings(){
  document.getElementById("container").innerHTML='<object type="text/html" data="cuenta.html" ></object>';
}

function loadHome(){
  document.getElementById("container").innerHTML='<object type="text/html" data="home.html" ></object>';
}

function loadBanca(){
  var obj = document.getElementById("container");
  obj.innerHTML = '';
  obj.innerHTML = '<object type="text/html" data="banca.html" ></object>';
}

function loadCredit(){
   document.getElementById("container").innerHTML='<object type="text/html" data="credito.html" ></object>';
}