var button;

var database;
var height;
var balloonHeight
var lock;
var unlock;

var canva;



function preload() {
  lock = loadImage("lock.png");
  unlock = loadImage("unlock.png");
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


  } else if (height === true) {
    updateHeight(false);
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
