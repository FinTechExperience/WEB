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

function loadBacaModule(){
   document.getElementById("splash").style.display = "none";
   document.getElementById("content").style.display = "";
}

function credit(){
  var saldo =  document.getElementById("saldo").innerHTML;
  alert("Lo sentimos, tu saldo es de " + saldo + "\n\nNecesitas tener al menos $5,000 en cuenta para obtener un crédito.");
}
