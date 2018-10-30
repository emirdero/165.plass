function Stickman(x,y,w,h) {
  var options = {
    isStatic: false,
  }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);

  World.add(world, this.body);
}

Stickman.prototype.isOfScreen = function(){
    var x = this.body. position.x;
    var y = this.body.position.y;
    return(x < -50 || x > width + 50 || y > height + 50);
}

Stickman.prototype.show = function(){
  fill(0, 255, 0);
  stroke(0, 255, 0);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
  rect(0, 0, this.w, this.h);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  //Hode
  ellipse(0, ((this.w/2) - (this.h/2)) , this.w);
  //Kropp
  strokeWeight(3);
  line(0, ((this.w/2) - (this.h/2)), 0,  ((this.h/2) - (this.w)));
  //Ben
  line(0,  ((this.h/2) - (this.w)), (this.w/2), (this.h/2));
  line(0,  ((this.h/2) - (this.w)), (-this.w/2), (this.h/2));
  //Armer
  line(0,0,(this.w/2),0);
  line(0,0,(-this.w/2),0);
  pop();
}
/*
Stickman.prototype.up = function(){
  for(var i = 0; i < 20; i++){
    this.y += 1;
  }
}

Stickman.prototype.right = function(){
  this.x = this.x + 10;
}

Stickman.prototype.left = function(){
  this.x = this.x + 10;
}
*/
