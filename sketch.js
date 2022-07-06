var button;

var database;
var height;
var balloonHeight
var lock;
var unlock;
var w;
var canva;
var q;


function preload() {
  lock = loadImage("lock.png");
  unlock = loadImage("unlock.png");
  w = loadSound("w.wav");
  q = loadSound("q.wav");

}

function setup() {
  canva = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  balloonHeight = database.ref('key');
  balloonHeight.on("value", readHeight, showError);

}

function draw() {
  background(lock);
  canva.mousePressed(changeBG);

  if (height === false) {
    background(lock);


  } else if (height === true) {
    background(unlock);
  }


}

function changeBG() {
  if (height === false) {
    updateHeight(true);
w.play();

  } else if (height === true) {
    updateHeight(false);
q.play();
  }

}
function readHeight(data) {
  height = data.val();

}
function showError() {
  console.log("Error in writing to the database");
}
function updateHeight(x) {
  database.ref('key').set(x);
}
