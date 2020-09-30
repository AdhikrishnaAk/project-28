
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


		engine = Engine.create();
		world = engine.world;
		ground = new Ground(600,height,1200,20)
		tree=new Tree(700,600,400,400)
		boy=new Boy(150,722,200,250)
		stone=new Stone(200,650,30,50)
		mango1=new Mango(600,550,50,50)
		mango2=new Mango(100,50,50,50)
		mango3=new Mango(100,-10,50,50)
		mango4=new Mango(-80,-80,50,50)
		mango5=new Mango(100,-20,50,50)
		rope=new Rope(stone.body,{x:100,y:650})
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  	
  tree.display()
	ground.display()
	boy.display()
	stone.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	rope.display()
	
	detectcollision(stone,mango1)
	detectcollision(stone,mango2)
	detectcollision(stone,mango3)
	detectcollision(stone,mango4)
	detectcollision(stone,mango5)


	drawSprites();
 
}

function detectcollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}

}


