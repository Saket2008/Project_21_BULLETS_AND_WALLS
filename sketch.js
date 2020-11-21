var bullet, wall, line;
var sprite1, sprite2;
var speed, weight, thickness;
var damage;
var grade;

function setup() {
  createCanvas(1600,600);

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = "white";

  bullet = createSprite(50, 200, 50, 25);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  line = createSprite(800, 400, 1600, 5);
  line.shapeColor = "white";

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
}

function draw() {
  background("black");

  if (collided(bullet, wall))
  {
    bullet.velocityX = 0;
    
    if (damage <= 5){
      bullet.shapeColor = "green";
      grade = "good";
    }
    else if (damage > 5 && damage < 10){
      bullet.shapeColor = "yellow";
      grade = "average";
    }
    else if (damage >= 10){
      bullet.shapeColor = "red";
      grade = "bad";
    }
  }

  drawSprites();

  fill("Red");
  textSize(20);
  text("Speed= "+ speed, 725, 450);
  text("Weight= "+ weight, 725, 480);
  text("Thickness= "+ thickness, 725, 510);
  text("Damage= "+ damage, 725, 540);
  text("Grade= "+ grade, 725, 570);
  fill("pink");
  textSize(30);
  text("Press F5 for a new wall", 700, 75);
}