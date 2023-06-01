//codigo do ator
let yAtor = 370;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover())
    yAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaAPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaAPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 235, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 18){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaAPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366;
}