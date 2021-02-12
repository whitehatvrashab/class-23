const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin,dustbin1,dustbin2;

function setup() {
	createCanvas(800, 700);
    
	
	

  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper=new Paper(100,630,10);
 
 
 ground=new Ground(400,650,800,10)

 
 dustbin=new Dustbin(600,580,10,100);
 dustbin1=new Dustbin(200,200,20,20)
}


function draw() {
 
  background(0);
  
  Engine.update(engine);

 
 paper.display();
 ground.display();
 dustbin.display();
}