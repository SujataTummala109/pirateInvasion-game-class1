class Cannon{
  constructor(x,y,width,height, angle){
    this.width=width;
    this.y=y;
    this.x=x;
    this.height=height; 
    this.angle=angle;   
    }
    display(){
        fill("#676e6a");
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.width,this.height);
        pop();
        arc(this.x-35,this.y+90,75,110,PI,TWO_PI)
        noFill()
    }
}