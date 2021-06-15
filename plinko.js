class Plinko{
    constructor(x,y,wight,height){
        var options={
            isstatic:true,
            'restitution':1,
            'friction':0,
        }
         this .r=10;
        this.body=Bodies.circle(x,y,this.r,options);
        
        world.add(world,this.body)

    }
    display(){
        
        var pos=this.body.postion;
        var angle=this.body.angle;
        push()
        Translate(pos.x,pos.y)
       rotate(angle)
       ImageMode(CENTRE)
       noStroke()
       ellipse(Radius)
        ellipse(0,0,this.r,this.r);
        Pop()
    }
  

    }

