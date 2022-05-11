const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
let engine;
let world;

var computer,player;
var top,bottom,left,right;


function setup(){
 createCanvas(400,400)
  engine=Engine.create()
  world=engine.world
  top=new Wall(200,10,400,20)
  bottom=new Wall(200,390,400,20)
  left=new Wall(10,200,20,400)
  right=new Wall(390,200,20,400)

}

function draw(){
background("black")

top.show();
bottom.show();
left.show();
right.show();

Engine.update(engine)
}