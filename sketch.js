const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var box1,box2,box3,paper,ground
function setup() {
	createCanvas(800,700)
    engine=Engine.create()
	world=engine.world
	ground=new Ground(400,700,10,20)
	box1=new Dustbin(500,690,50,10)
	box2= new Dustbin(520,690,20,100)
	box3=new Dustbin(620,670,50,10)
	paper=new Paper(100,670,7)
	
}
function draw() {
	backdround(0,0,0)
	Engine.update(engine)
	ground.display()
	box1.display()
	box2.display()
	box3.display()
	paper.display()
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}





