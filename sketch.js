
//variaveis de criação da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
//variaveuis de velocidade da bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;
let raio = diametro / 2;

//variaveis de criação da raquete
let xRaquete = 5;
let yRaquete = 200 - 40;
let widthRaquete = 10;
let heightRaquete = 80;
let radiusRaquete = 20;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 200 - 40;
let velocidadeYOponente;

let colisao = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0, 0, 0);
  bolinha();
  movimentobolinha();
  colisaobolinha();
  raqueteplayer(xRaquete, yRaquete);
  raqueteplayer(xRaqueteOponente, yRaqueteOponente);
  movimentoraquete();
  //colisaocomraquete();
  colisaoRaquetesBlibioteca(xRaquete, yRaquete);
  colisaoRaquetesBlibioteca(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incuiPlacar();
  marcaPontos();
}

function bolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentobolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisaobolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
}

function raqueteplayer(x,y){
  rect(x,y, widthRaquete, heightRaquete, radiusRaquete, radiusRaquete)
}

function movimentoraquete(){
  if (keyIsDown(87)){
    yRaquete -= 10
  }
  if (keyIsDown(83)){
    yRaquete += 10
  }
}

function movimentaRaqueteOponente(){
    //velocidadeYOponente = yBolinha - yRaqueteOponente - heightRaquete / 2 -30
     //yRaqueteOponente += velocidadeYOponente
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10
  }
}


function colisaocomraquete(){
  if (xBolinha - raio < xRaquete + widthRaquete && yBolinha - raio < yRaquete + heightRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1
    raquetada.play();
  }
}

function colisaoRaquetesBlibioteca(x,y){
  colisao = collideRectCircle(x,y, widthRaquete, heightRaquete, xBolinha, yBolinha, raio);

  if (colisao){
     velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function incuiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 255, 255));
    rect(150, 10, 40, 20,5);
    fill(0);
    text(meusPontos, 170, 26);
    fill(color(255, 255, 255));
    rect(450, 10, 40, 20,5);
    fill(0);
    text(pontosOponente, 470, 26);
};

function marcaPontos(){
  if (xBolinha > 585){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15){
    pontosOponente += 1;
    ponto.play();
  }
}





  


