
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var can
var greenCan;
var dust;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    can = new trashedCan(200,70,10);
greenCan=new trashedCanGreen(600,70,20);
dust = new paper(220,200,2);


Engine.run(engine);
  
}


function draw() {
	background("skyblue");
 
	rectMode(CENTER);
  Engine.update(engine);
 groundObject.display();
  dustbinObj.display();
  ///can .display();
 ///greenCan.display();
dust.display();

keyPressed();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(dust.body,dust.body.position,{x:85,y:-150})


}	
}