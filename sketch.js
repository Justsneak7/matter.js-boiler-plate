const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
}

function draw() {
  background(100);
  Engine.update(engine);
}