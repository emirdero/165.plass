function Border(x,y,w,h) {
  var options = {
    isStatic: true,
    friction: 0,
    
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}

Border.prototype.show = function(){
  fill(0, 255, 0);
  stroke(0, 255, 0);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  rectMode(CENTER);
  rect(0, 0, this.w, this.h);
  pop();
}