const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Pig;
var stick;
var box3;
var box4;
var stick2;
var bird;
var pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70)
    Pig = new pig (810,350);
    pig2 = new pig (810,220);
    stick=new log (810,260,300,PI/2);
    stick2=new log (810,180,300,PI/2);
    stick3=new log (760,120,150,PI/7);
    stick4=new log (870,120,150,-PI/7);
    bird=new birds (100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    Pig.display();
    stick.display();
    ground.display();
    stick2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display();
    stick3.display();
    stick4.display();
    bird.display();
    
}