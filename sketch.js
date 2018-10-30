var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;
var particels = [];
var stickman;
function newParticle(){
	var p = new Particles(300, -100, 10);
	particels.push(p);
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	stickman = new Stickman(300, 300, 40, 120);
}

function draw() {
	background(51);

	if(frameCount % 1 == 0){
		//newParticle();
	}

	for(var i = 0; i < particels.length; i++){
		particels[i].show();
		if(particels[i].isOfScreen()){
			World.remove(world, particels[i].body);
			particels.splice(i, 1);
		}
	}
	stickman.show();
	Engine.update(engine);
}
// Heisann
