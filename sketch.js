let cnv; 
let stars = [];
let speed;

//immagini  
let tree;
let sand;  
let corals;
let water; 
let blueshape;
let dune; 
let grass; 
let greenshape; 
let orangeshape; 
let rock; 
let mount; 
let hill; 
let bluemount; 
let universe; 
let lovers; 
let beatles; 
let planet; 
let flag; 
let submarine; 
let bird; 

//canzoni 
let allYouNeedIsLove 
let comeTogether
let acrossTheUniverse
let imagine
let yellowSubmarine 
let blackBird

//testi 
let title; 
let instructions; 
let songName; 


//centro canvas 
function centerCanvas() { 
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  //immagini
  tree = loadImage("./assets/immagini/sfondo/albero.png");
  sand = loadImage("./assets/immagini/sfondo/sabbia.png");
  corals = loadImage("./assets/immagini/sfondo/coralli.png");
  water = loadImage("./assets/immagini/sfondo/mare.png");
  blueshape = loadImage("./assets/immagini/sfondo/formablu.png");
  dune = loadImage("./assets/immagini/sfondo/duna.png");
  grass = loadImage("./assets/immagini/sfondo/erba.png");
  greenshape = loadImage("./assets/immagini/sfondo/verde.png");
  orangeshape = loadImage("./assets/immagini/sfondo/arancio.png");
  rock = loadImage("./assets/immagini/sfondo/roccia.png");
  mount = loadImage("./assets/immagini/sfondo/montagna.png");
  hill = loadImage("./assets/immagini/sfondo/collina.png");
  bluemount = loadImage("./assets/immagini/sfondo/azzurro.png");
  universe = loadImage("./assets/immagini/sfondo/universe.png");
  lovers = loadImage("./assets/immagini/sfondo/lovers.png");
  beatles = loadImage("./assets/immagini/sfondo/thebeatles.png");
  planet = loadImage("./assets/immagini/sfondo/planet.png");
  flag = loadImage("./assets/immagini/sfondo/peace.png");
  submarine = loadImage("./assets/immagini/sfondo/submarine.png");
  bird = loadImage("./assets/immagini/sfondo/bird.png");

  //canzoni
  allYouNeedIsLove = loadSound("./assets/canzoni/All you need is love.mp3");
  comeTogether = loadSound("./assets/canzoni/Come together.mp3");
  acrossTheUniverse = loadSound("./assets/canzoni/Across the universe.mp3");
  imagine = loadSound("./assets/canzoni/Imagine.mp3");
  yellowSubmarine = loadSound("./assets/canzoni/yellow submarine.mp3");
  blackBird = loadSound("./assets/canzoni/Blackbird.mp3");
}

function setup() {
  cnv = createCanvas(1423, 800);
  centerCanvas();

//creazione stelle 
  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background("#040733");

  speed = map(mouseX, 0, width, 0, 3); //movimento delle stelle in base al movimento del mouse sull'asse x
  push();
  translate(width / 2, height / 2); //movimento stelle dal centro 
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  pop(); 

  //posiziono immagini per lo sfondo 
  image(universe, 1104, 31, universe.width, universe.height);
  image(bluemount, 681, map(mouseX, width, height, 197, 196), bluemount.width, bluemount.height);
  image(hill, map(mouseX, width, height, 836, 834), 189, hill.width, hill.height);
  image(mount, map(mouseX, width, height, 280, 283), 197, mount.width, mount.height);
  image(rock, map(mouseX, width, height, 0, - 5), 243, rock.width, rock.height);
  image(orangeshape, map(mouseY, width, height, 729, 735), 347, orangeshape.width, orangeshape.height);
  image(greenshape, map(mouseX, width, height, -2, 0), 381, greenshape.width, greenshape.height);
  image(grass, 0, map(mouseX, width, height, 410, 408), grass.width, grass.height); 
  image(water, 0, map(mouseY, width, height, 545, 548) , water.width, water.height);
  image(dune, map(mouseY, width, height, 0, -2), 402, dune.width, dune.height);
  image(blueshape, 0, map(mouseX, width, height, 523, 525), blueshape.width, blueshape.height);
  
  //posiziono elementi dinamici
  image(beatles, 867, 291, beatles.width, beatles.height);
  image(planet, 160, 0, planet.width, planet.height);
  image(flag, 1290, 144, flag.width, flag.height);
  image(submarine, 1075, 562, submarine.width, submarine.height);
  image(bird, 377, 437, bird.width, bird.height);

  //elementi sfondo prima fila
  image(corals, map(mouseX, width, height, 747, 749), 648, corals.width, corals.height);
  image(sand, 0, map(mouseY, width, height, 680, 678), sand.width, sand.height);
  image(tree, 0, map(mouseY, width, height, 68, 66), tree.width, tree.height);

  image(lovers, 582, 427, lovers.width, lovers.height);

  //testi 
  textFont("Poppins")
  textAlign(CENTER); 
  fill("white");
  
  title = "THE BEETLE GARDEN"; 
  textStyle("bold")
  textSize(45); 
  text(title, width/2, height/9);

  instructions = "Click on the black and white images to discover the matching Beatles song \n Click elsewhere to stop the music or go directly to the next image";  

  //le istruzioni mostrano il nome della canzone quando la si ascolta
  if (allYouNeedIsLove.isPlaying() == true) {
    instructions = "All You Need Is Love";
  } else if (yellowSubmarine.isPlaying() == true) {
    instructions = "Yellow Submarine";
  } else if (blackBird.isPlaying() == true) {
    instructions = "Blackbird";
  } else if (comeTogether.isPlaying() == true) {
    instructions = "Come Together";
  } else if (acrossTheUniverse.isPlaying() == true) {
    instructions = "Across the Universe";
  } else if (imagine.isPlaying() == true) {
    instructions = "Imagine - John Lennon";
  }

  textStyle("bold")
  textSize(15); 
  text(instructions, width/2, height/6);
}

//definisco funzione con cui parte una canzone quando si clicca sulle immagini di riferimento
function mousePressed() {

//All you need is love 
  if (
    mouseX > 582 &&
    mouseX < 582 + lovers.width &&
    mouseY > 427 &&
    mouseY < 427 + lovers.height
  ) { 
    allYouNeedIsLove.play();
  } else {   
    allYouNeedIsLove.stop();
  }

  //Yellow Submarine 
  if (
    mouseX > 1075 &&
    mouseX < 1075 + submarine.width &&
    mouseY > 562 &&
    mouseY < 562 + submarine.height
  ) { 

    yellowSubmarine.play();
  } else {   
    yellowSubmarine.stop();
  }

  //Blackbird
  if (
    mouseX > 377 &&
    mouseX < 377 + bird.width &&
    mouseY > 437 &&
    mouseY < 437 + bird.height
  ) { 
    blackBird.play();
  } else {   
    blackBird.stop();
  }

  //Come together
  if (
    mouseX > 867 &&
    mouseX < 867 + beatles.width &&
    mouseY > 291 &&
    mouseY < 291 + beatles.height
  ) { 
    comeTogether.play();
  } else {   
    comeTogether.stop();
  }

  //Imagine
  if (
    mouseX > 1290 &&
    mouseX < 1290 + flag.width &&
    mouseY > 144 &&
    mouseY < 144 + flag.height
  ) { 
    imagine.play();
  } else {   
    imagine.stop();
  }

  //Across the universe
  if (
    mouseX > 247 &&
    mouseX < 247 + planet.width &&
    mouseY > 0 &&
    mouseY < 0 + planet.height
  ) { 
    acrossTheUniverse.play();
  } else {   
    acrossTheUniverse.stop();
  }








}







//stelle 

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, random(1, 8), 0);
    ellipse(sx, sy, r, r);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;
  }
}

function windowResized() {
  centerCanvas();
 }

