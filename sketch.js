var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
}

function draw() {
	background(51);
	Engine.update(engine);
}
