var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [];
var fuelImage, powerCoinImage,obstacle1,obstacle1Image,obstacle2Img,obstacle2;
//BP
function preload() {
  backgroundImage = loadImage("assets/title.jpg");
  car1_img = loadImage("assets/Boy.png");
  car2_img = loadImage("assets/Girl.png");
  track = loadImage("assets/bg 1.jpg");
  fuelImage = loadImage("assets/jasmin.png");
  powerCoinImage = loadImage("assets/rose.png");
  lifeImage = loadImage("assets/life.png");
  obstacle1Image = loadImage("assets/Cactus.png"); 
  obstacle2Image = loadImage("assets/spear.png");

}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
