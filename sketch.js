var crumpledball;

var crumpledpaperballIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	//crumpledpaperballIMG=loadImage("crumpledpaperball.png")
	
}

function setup() {
	createCanvas(800,565);
	background(255,255,255);


	engine = Engine.create();
	world = engine.world;

	crumpledball=new Paper(100,270,70);
	dustbin=new Dustbin(190,590,20,20);
	


	ground = new Ground(600,height,1200,20);
	
	rect1= new Dustbin(390,450,20,170);
	rect2=new Dustbin(550,455,20,170);
	rect3=new Dustbin(473,545,190,20);

	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,101,0);
 crumpledball.display();
  ground.display();
 
  
  rect1.display();

  
  rect2.display();
  rect3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {

	
			if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:8.5,y:-8.5});
	   
	 }
   }

   function mouseDragged(){
    Matter.Body.setPosition(crumpledball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launch.fly();
}
   
   

