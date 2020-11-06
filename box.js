class Box{
    constructor(x,y,width,height){
        var options = {
            friction:1.0
        }
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.width = width
       this.height = height
       World.add(world,this.body)
    }
    display(){
        var POS = this.body.position
        var angle = this.body.angle
        push();
        translate(POS.x,POS.y)
        rotate(angle)
        rect(0,0,this.width,this.height);
        pop();
    }
}