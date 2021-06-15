class Particle{
    constructor(x,y,r){
        var options={
            'restitution':0.4
        }
      this.r=r;
      this.body=Bodies.circle(x,y,this.r,options)
      this.color=Color(random(0,255),random(0,255),random(0,255))
      world.add(world,this.body)
    }
    display(){
        var pos = this.body.postion;
         var angle = this.body.angle;
       push()
       Translate(pos.x,pos.y)
       imageMode(CENTRE)
       noStroke()
       Fill(this.color)
        ellipseMode(RADIUS)   
       ellpse(0,0,this.r,this.r)
       Pop()
    }
    
}