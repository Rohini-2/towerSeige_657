
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine,world;
var block;
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(450,380,900,10);

    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
   block8= new Block(330, 235, 30, 40);
block9 = new Block(360, 235, 30, 40);
block10 = new Block(390, 235, 30, 40);
block11 = new Block(420, 235, 30, 40);
block12 = new Block(450, 235, 30, 40);
block13 = new Block(360, 195, 30, 40);
block14 = new Block(390, 195, 30, 40);
block15 = new Block(420, 195, 30, 40);
block16= new Block(390, 155, 30, 40);

}


function draw() {
    background("skyblue")
    text("SCORE : "+score, 900,50)

    ground.display()
    stand1.display()
    stand2.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    
   

}
// function mouseDragged() {
//     Matter.Body.setPosition(plolygon.body, { x: mouseX, y: mouseY })
// }   
// function mouseReleased() {
//     sling.fly()
// }
// function keyPressed() {
//     if (keyCode === 32) {
//         sling.attach(plolygon.body)
//     }
// }