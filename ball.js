class Ball{
    constructor(x,y,radius){
        var options ={
            density:1.5,
            frictionAir:0.005
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius
        World.add(world,this.body);
    }
   display(){
       var POS = this.body.position
       var angle = this.body.angle
       
     push();
     translate(POS.x,POS.y)
     rotate(angle)
     ellipse(0,0,this.r,this.r)
     pop();
   }
}