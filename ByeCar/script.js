function rolar_direita(){
  var x = document.getElementById("rolagem").scrollLeft;        
  document.getElementById("rolagem").scrollTo(x+700,0);
  if(x>1400){
      document.getElementById("rolagem").scrollTo(0,0);
  }
}

function rolar_esquerda(){
  var x = document.getElementById("rolagem").scrollRight;
  document.getElementById("rolagem").scrollTo(x-500,0);
  if(x<400){
      document.getElementById("rolagem").scrollTo(1485,0);
  }
  
}
