function Particles(x,y,r) {
  var options = {
    isStatic: false,
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Particles.prototype.isOfScreen = function(){
    var x = this.body. position.x;
    var y = this.body.position.y;
    return(x < -50 || x > width + 50 || y > height + 50);
}

Particles.prototype.show = function(){
  fill(0, 255, 0);
  stroke(0, 255, 0);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
}
