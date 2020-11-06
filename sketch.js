const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground
var ball
var r1
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,600,1500,60);
  ball = new Ball(400,400,50,50);
  r1 = new Rope(ball.body,{x:350,y:50})
  box1 = new Box(600,550,60,60)
  box2 = new Box(540,550,60,60)
  box3 = new Box(660,550,60,60)
  box4 = new Box(600,490,60,60)
  box5 = new Box(540,490,60,60)
  box6 = new Box(660,490,60,60)
  box7 = new Box(600,430,60,60)
  box8 = new Box(540,430,60,60)
  box9 = new Box(660,430,60,60)
  box10 = new Box(600,370,60,60)
  box12 = new Box(540,370,60,60)
  box13 = new Box(660,370,60,60)

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ball.display();
  r1.display();
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
  box12.display();
  box13.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}