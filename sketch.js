const Engine=matter.Engine;
const world=matter.world;
const Bodies=matter.Bodies;
const Body=matter.Body;
const Constraint=matter.Constraint;

var division=[];
var divisionHeight=300;
var plinkos=[];
var particle=[];

function setup() {
  createCanvas(800,400);
 engine=Engine.create;
 world=engine.world;

 //create the bodies here
  ground = createSprite(400, 200, 50, 50);

  for(var i = 0;i<= width;i=i+80){
  divisions.push(new divisions(k-divisionHeight/2,10,divisionHeight))

for(var j = 75;j <= width;j=j+50){
  divisions.push(new plinkos(75))
}
  for(var j= 50;j <= width;j=j+50){
    divisions.push(new plinkos(175))
  }
    for(var j = 75;j<= width;j=j+50){
      divisions.push(new plinko(275))
    }
      for(var j = 50;j <= width;j=j+50){
        divisions.push(new plinko(375))
      }
    Engine.run(engine);
  
  }
}

function draw() {
  background(0);  
  rectMode(CENTRE)
  
  drawSprites();

  for(var n=0;n<=division.length;n++){
  division[n].display();
  }

  if(frameCount %60 === 0) {
    particles.push(new particles(random(width/2-30,width/2+30,),10,10))
  }
  for (var h=0;h<=particles.length;h++){
    particles[h].display();
  }
  for(var j=0;j<=plinkos.length;j++){
  plinkos[j].display();
  }

  ground.display();

} 