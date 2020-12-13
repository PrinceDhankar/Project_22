const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var r1,r2,r3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    var r1_options={
		isStatic:true
	}
	
	r1 = Bodies.rectangle(500,600,10,100,r1_options);
	World.add(world,r1);
    var r2_options={
		isStatic:true
	}
	
	r2 = Bodies.rectangle(300,600,10,100,r2_options);
	World.add(world,r2);

	var r3_options={
		isStatic:true
	}
	
	r3 = Bodies.rectangle(400,650,210,10,r3_options);
	World.add(world,r3);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("red");
  rect(r1.position.x,r1.position.y,10,100);
  fill("red");
  rect(r2.position.x,r2.position.y,10,100);
  fill("red");
  rect(r3.position.x,r3.position.y,210,10);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);  
  }
}