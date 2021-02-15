const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,rubber,ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    hammer = new hammerClass(200,200,50,50);
    //PI=180
    rubber= new rubberClass(810,260,50,50);
    stone=new stoneClass(810,350,50,50);
    ground= new groundClass(600,390,1200,20)
}
function draw(){
    background(0);
    Engine.update(engine);
    stone.display();
    hammer.display();
    rubber.display();
    ground.display();



}