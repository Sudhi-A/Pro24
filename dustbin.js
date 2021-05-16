class Dustbin{
 constructor(x,y,height,width){
  var options={
	  isStatic:true
  }
  this.x=x
  this.y=y
  this.height=height
  this.width=width
  this.body=Bodies.rectangle(x,y,height,width,options)
  World.add(world,this.body)
 }	
 display(){
	 var pos=this.body.position
	 Push();
	 translate(pos.x,pos.y)
	 rectMode(CENTER)
	 fill(225,0,0)
	 rect(x,y,this.height,this.width)
	 Pop();

 }
}