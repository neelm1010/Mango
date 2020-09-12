
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;
function preload(){
boy=loadImage("PluckingMangoes/boy.png")
}
function setup(){
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);	
	stoneObj=new stone(235,420,30); 
	groundObject=new Ground(width/2,600,width,20);
	
	treeObj=new tree(1050,580)
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	  Engine.run(engine);
}
function draw(){
	background(230);
	textSize(25);
    text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);
	mango1.display();
	stoneObj.display();
	
	groundObject.display();
	treeObj.display();
	launcherObject.display();
	detectollision(stoneObj,mango1);

}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

