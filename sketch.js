var ground, groundImage;
var cat,catimg,catimg2, catimg3;
var mouse, mouseimg;

function preload() {
    //load the images here
    groundImage = loadImage("images/garden.png");

    catimg = loadImage("images/cat1.png");
    mouseimg = loadImage("images/mouse1.png");

    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

    catimg3 = loadImage("images/cat4.png");
    mouseimg3 = loadImage("images/mouse4.png");
}

function setup(){

    createCanvas(1100,1200);

    ground = createSprite(400,600,900,10);
    ground.scale = 1.7;
    ground.x = ground.width/2;
    ground.addImage(groundImage);

     
    //create tom and jerry sprites here
    cat = createSprite(850,1000,1000,10);
    cat.addImage("images/cat4.png",catimg);
    cat.scale = 0.3;

    mouse = createSprite(100,1000,300,10);
    mouse.addImage("images/mouse4.png",mouseimg);
    mouse.scale = 0.3;
}

function draw() {
      
    background(180);

    if (ground.x<0){
        ground.x = ground.width/2;
        }

    //Write condition here to evalute if tom and jerry collide
    if (cat.x -mouse.x<(cat.width-mouse.width)/2){
        mouse.changeAnimation(mouseimg3);
        mouse.velocityX = 0;
        cat.changeAnimation(catimg3);
        cat.velocityX = 0;
    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -1; 
    cat.addAnimation("catMoving",catimg2);
    cat.changeAnimation("catMoving");
    cat.frameDelay = 25;
}

if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
}