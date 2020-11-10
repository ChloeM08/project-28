
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree;
var mango1, mango2, mango3;

function preload()
{
	boy = loadImage("boy.png")
	tree = loadImage("tree.png")
	
}

function setup() {
	createCanvas(2000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new Stone(10,10,30); 
  mango1 = new Mango(850, 375, 20)
  mango2 = new Mango(735, 37, 20)
  mango3 = new Mango(855, 380, 20)
  mango4 = new Mango(862, 375, 20)
  mango5 = new Mango(871, 373, 20)
  mango6 = new Mango(864, 372, 20)


  groundObject = Bodies.rectangle(width/2, 600, width, 20 , {isStatic: true});
  World.add(world, groundObject);
  
	launcherObject = new Launcher(stoneObj.body,{x:-350,y:-10});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 console.log(mouseX, mouseY);
  
  
image(boy, 200, 300, 200, 300)
image(tree, 800, 100, 300, 600)
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
launcherObject.display();
stoneObj.display();
detectCollision(stoneObj, mango1);

  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}); 
}

function mouseReleased()
{
	launcherObject.fly();
}
function keyPressed() 
{
  if (keyCode === 32) 
  {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
	  launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango)
{
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance <= lmango.r + lstone.r)
  {
  	  Matter.Body.setStatic(lmango.body, false);
  }
}


