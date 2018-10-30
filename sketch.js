var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;

var engine;
var world;
var particels = [];
var stickman;
var border;
function newParticle(){
	var p = new Particles(300, -100, 10);
	particels.push(p);
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	stickman = new Stickman(300, 300, 40, 120);
	border = new Border(width/2, height, width, 20);
}

function draw() {
	background(51);

	for(var i = 0; i < particels.length; i++){
		particels[i].show();
		if(particels[i].isOfScreen()){
			World.remove(world, particels[i].body);
			particels.splice(i, 1);
		}
	}
	stickman.show();
	border.show();
	Engine.update(engine);
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
	}
	if(keyCode === RIGHT_ARROW){
		Body.setVelocity(stickman.body, {x: 1, y :0});
	}
	if(keyCode === UP_ARROW){
		Body.setVelocity(stickman.body, {x: 1, y :0});
	}
}
function keyReleased(){
		Body.setVelocity(stickman.body, {x: 0, y :0});
}
