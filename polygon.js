class Polygon{
    constructor(x, y, height, angle) {
       var options = {
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
       }
       polygon = Bodies.circle(50,200,20);
       this.width = 20;
       this.height = heigh;
       World.add(world, polygon);
     
       slingshot=new slingshot(this.polygon,{x:100,y:200});
       imageMode(CENTER)
       image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)
    }
   
  };
  