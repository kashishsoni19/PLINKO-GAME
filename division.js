class Division{
    constructor(x , y , width , height){
        var  options = {
            isstatic:true,
            
        }
        this.body =Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;

        world.add(world,this.body);

    }
    display(){
        rectMode(CENTRE)
        fill(white)
        var pos =this.body.postion;
        rect(this.body.postion.x,this.body.postion.y,this.width,this.height);

    }
    
}