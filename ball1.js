class Ball1 extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.body.position.x = x;
      this.body.position.y = y;
      this.image = loadImage("sprites/enemy.png");
    }
  
    display() {
      
      super.display();
    }
  }
  