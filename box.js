class Box{
  constructor(posx, posy, width, height){
    this.body = Bodies.rectangle(posx, posy, width, height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(255, 0, 255);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
