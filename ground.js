class Ground{
    constructor(x , y , width , height){
        var  options = {
            isstatic:true,
            'restituttion':0,
            'friction':0,
            'density':1
        }
        this.body =Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;

        world.add(world,this.body);

    }
    display(){
        rectMode(CENTRE)
        fill(255)
        var pos =this.body.postion;
        rect(this.body.postion.x,this.body.postion.y,this.width,this.height);

    }
    
}