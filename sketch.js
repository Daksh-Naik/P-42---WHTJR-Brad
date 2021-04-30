
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var walking, walkingAnimation;
var ground;

var engine, world;
var rand;
var thunderCreatedFrame=0;
var g_raindrops=[];
var maxDrops=100;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");

    walkingAnimation = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png",
    "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png",
    "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png")
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1350, 620);
    umbrella = new Umbrella(200,400);

    ground = createSprite(width/2, 620, 1350, 50);

   for(var i=0; i<maxDrops; i++) {
       g_raindrops.push(new RainDrops(random(0, 700), random(0, 200), 5));

   }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    setTimeout(function(){  
        if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,130), random(50,100), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
}, 5000);

    
    bat= createSprite(Math.round(random(0,1000)),Math.round(random(0,200)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
         
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();
  
    for(var i=0; i < maxDrops; i++){
        g_raindrops[i].display();
        g_raindrops[i].update();
       
    }

    drawSprites();
}   

