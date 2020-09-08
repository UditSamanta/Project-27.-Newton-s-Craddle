const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain; 

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    text(mouseX + " " + mouseY, 100, 200);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(600, 320);
    ball2 = new Ball1(660, 320);
    ball3 = new Ball(720, 320);
    ball4 = new Ball1(780, 320);
    roof = new Roof(700,70,300,15, PI/2);
  
    constraintLog1 = new Roof(600, 150, 6, 250, PI/2);
    constraintLog2 = new Roof(660, 150, 6, 250, PI/2);
    constraintLog3 = new Roof(720, 150, 6, 250, PI/2);
    constraintLog4 = new Roof(780, 150, 6, 250, PI/2);

     chain1 = new Chain(ball1.body, constraintLog1.body);
     chain2 = new Chain(ball2.body, constraintLog2.body);
     chain3 = new Chain(ball3.body, constraintLog3.body);
     chain4 = new Chain(ball4.body, constraintLog4.body);

    //  roof = Bodies.rectangle(700, 70, 300, 15, {isStatic:true});
    //  World.add = (world, roof); 
       
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    roof.display();
    
    constraintLog1.display();
    constraintLog2.display();
    constraintLog3.display();
    constraintLog4.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
   
}
