const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ,score = 0 ;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    // base
    

    box1 = new Box(700,370,70,70);
    box2 = new Box(770,370,70,70);
    box3 = new Box(840,370,70,70);
    box4 = new Box(910,370,70,70);
    box11 = new Box(980,370,70,70)
    //4
    box5 = new Box(735,300,70,70);
    box6 = new Box(805,300,70,70);
    box7 = new Box(875,300,70,70);
    box12 = new Box(945,300,70,70)
    //3
    box8 = new Box(770,230,70,70);
    box9 = new Box(840,230,70,70);
    box13 = new Box(910,230,70,70)
    //2
    box10 = new Box(805,160,70,70);
    box14 = new Box(875,160,70,70)
    //1
    box15 = new Box(840,90,70,70)

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
        
        noStroke()
        textSize (35)
        fill(255)
        text("score -> "+score,width-300,50)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display(); 
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display(); 
    box15.display();
   
    ground.display();

    bird.display();
   
    //log6.display();
    slingshot.display();    

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getBgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON  =  await response.json();
    var time = responseJSON.datetime
    var hour = time.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<= 19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg )
}