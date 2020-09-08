class Roof extends BaseClass{
  constructor(x,y,width,height,angle){
    super(x,y,20,height,angle);
    this.body.position.x = x;
    this.body.position.y = y;
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  };
};