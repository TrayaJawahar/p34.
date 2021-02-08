//Create variables here
var dog , happyDog,database, foodS , foodStock;
var ndog;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  ndog=createSprite(250,350,2,2);
  ndog.addImage(dog);
  ndog.scale=0.3;

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  ndog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke("white");
  text("Food Remaining:"+foodStock,50,100);
  text("Note: Press UP_ARROW Key To Feed Drago Milk",30,490)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else
  {
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })
}


