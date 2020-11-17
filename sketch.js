
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var ground,block1;
score=0;
var bg = "goodmorning2.jpg";
function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
}

polygon = new Polygon(150,200,30,30);

launcher = new Rope(polygon.body,{x:150, y:110})
  ground=new Ground(595,300,250,15,options);
  ground2=new Ground(1010,180,250,15,options);
 



  //last level 
  block1 =new Block(590,280,35,35);
  block2 =new Block(607,280,35,35);
  block3 =new Block(627,280,35,35);
  block4 =new Block(644,280,35,35);
  block5 =new Block(573,280,35,35);
  block6 =new Block(556,280,35,35);
  block9 =new Block(581,280,35,35);
  //third level 
  block7 =new Block(575,262,35,35);
 block8 =new Block(557,262,35,35);
 block10 =new Block(574,262,35,35);
  block11 =new Block(593,262,35,35);
  block12 =new Block(615,262,35,35);
  block13 =new Block(635,262,35,35);
  //second level 
  block14 =new Block(580,244,35,35);
  block15 =new Block(593,244,35,35);
  block16 =new Block(605,244,35,35);
  block17 =new Block(573,244,35,35);
  //first level 
  block18 =new Block(589,232,35,35);

  //last level 2
  block19 =new Block(1000,170,35,35);
  block20 =new Block(1017,170,35,35);
  block21 =new Block(1034,170,35,35);
  block22 =new Block(1051,170,35,35);
  block23 =new Block(983,170,35,35);
  block24 =new Block(984,170,35,35);
//third level 2
block25 =new Block(995,152,35,35);
block26 =new Block(1012,152,35,35);
block27 =new Block(1029,152,35,35);

//first level 2
block29 =new Block(1013,134,35,35);

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
 // background("pink"); 
  Engine.update(engine);
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block9.score();
 block6.score();
 block7.score();
 block8.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();

 
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 //block25.display();
 block25.score();
 block26.score();
 block27.score();
block29.score();
  ground.display();
  ground2.display();
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("white")
  textSize(30)
  text("SCORE:"+score,40,40)
  fill("black")
  textSize(30)
  fill("white")
  text("Try to read the positive statement behind the blocks",300,40)
  text("Drag the polygon and if wanted the second chance Press space",50,600)
  fill("yellow")
  block5.display();
  block9.display();
 block6.display();
 fill("pink");
 block7.display();
 block8.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 fill("red")
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 fill("lime");
 
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 fill("orange")
 block25.display();
 block26.display();
 block27.display();
 fill("white")
 block29.display();
 polygon.display();
 launcher.display();

}
/*function touchStarted() {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}*/
function touchMoved() {
  Matter.Body.setPosition(polygon.body,{x: ptouchX, y: ptouchY})
  }
  function touchReleased()  {
    launcher.fly()
    
  
  }

console.log(touchMoved);
function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
 
}

function mouseReleased()  {
  launcher.fly()
  textSize(30);
  text("hello",200,200)

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "goodmorning2.jpg";
  }
  else{
   
    
      bg = "good night.jpg";
     
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
