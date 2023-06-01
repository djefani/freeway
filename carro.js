//codigo dos carros 1, 2, 3
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 148, 210, 263, 318];
let velocidadeCarros = [3, 2.5, 3.2, 5, 4, 3.2];
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length;i ++){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for(let i = 0; i < velocidadeCarros.length;i ++){
   xCarros[i] -= velocidadeCarros[i]; 
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i ++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
  }
}

function passouTodaATela(xCarros){
  return xCarros < - 50;
}