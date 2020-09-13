class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.2,
          'friction':0.5,
          'density':1.8
      }

      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      World.add(world, this.body);
    }


  display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    
    
    fill("violet");
    ellipse( 0, 0);
    pop();
  }
}
