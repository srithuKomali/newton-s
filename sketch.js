const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,roop1,roop2,roop3,roop4,roop5;

function preload(){

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

bobObject1 = new Bob(200,470,100);
bobObject2 = new Bob(300,470,100);
bobObject3 = new Bob(400,470,100);
bobObject4 = new Bob(500,470,100);
bobObject5 = new Bob(600,470,100);
roof = new Roof(400,40,500,20);

roop1 = new Roop(bobObject1.body,roof.body,-100*2,0);
roop2 = new Roop(bobObject2.body,roof.body,-50*2,0);
roop3 = new Roop(bobObject3.boby,roof.boby,-0*2,0);
roop4 = new Roop(bobObject4.boby,roof.body,50*2,0);
roop5 = new Roop(bobObject5.boby,roof.boby,100*2,0);
	
Engine.run(engine);
	
  
}


function draw() {
  
  background("white");
  rectMode(CENTER);
  Engine.update(engine)
  bobOject1.display();
  bobOject2.display();
  bobObject3.display();
  bobObject4.display();
  bobOject5.display();
  roof.display();
  roop1.display();
  roop2.display();
  roop3.display();
  roop4.display();
  roop5.display();
  
 

 
}
function keyPressed(){
	if(keyCode ===UP_ARROW)
	{Matter.Body.applyForce(bobobject1.body.posistion,{x:-100,y:100});}
}



