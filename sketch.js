const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render

var ground

function setup() {
	createCanvas(800, 700);
	background(51)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Box = new Box (425,300,200,20);
	var Box1 = new Box (330,330,40,40);
	var Box2 = new Box (330,330,40,40)
	var Box3 = new Box (330,330,40,40)
	var Box4 = new Box (330,330,40,40)
	var Box4 = new Box (330,330,40,40)

	var Box5 = new Box (370,330,40,40)
	var Box6 = new Box (370,330,40,40)
	var Box7 = new Box (370,330,40,40)
	var Box8 = new Box (370,330,40,40)
	var Box9 = new Box (370,330,40,40)

	var Box10 = new Box (400,330,40,40)
	var Box11 = new Box (400,330,40,40)
	var Box12 = new Box (400,330,40,40)
	var Box13 = new Box (400,330,40,40)
	var Box14 = new Box (400,330,40,40)

	var Box15 = new Box (440,330,40,40)
	var Box16 = new Box (440,330,40,40)
	var Box17 = new Box (440,330,40,40)
	var Box18 = new Box (440,330,40,40)
	var Box19 = new Box (440,330,40,40)

	var Box20 = new Box (470,330,40,40)
	var Box21 = new Box (470,330,40,40)
	var Box22 = new Box (470,330,40,40)
	var Box23 = new Box (470,330,40,40)
	var Box24 = new Box (470,330,40,40)


	
	BallObject6 = new Ball (20,250,40)

	rope6 = new Rope(BallObject6.body,Box.body,130*2,0)

	ground = new Ground(400,420,6000,20)
	Engine.run(engine);
  


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false,
		},
	  });
	
	  Render.run(render);
	}



function draw() {
  rectMode(CENTER);
  background(255);
  
    Box.display()
    Box1.display();
	Box2.display()
	Box3.display()
	Box4.display()

	Box5.display()
	Box6.display()
	Box7.display()
	Box8.display()
	Box9.display()

	Box10.display()
	Box11.display()
	Box12.display()
	Box13.display()
	Box14.display()

	Box15.display()
	Box16.display()
	Box17.display()
	Box18.display()
	Box19.display()

	//Box20.display()
	//Box21.display()
	//Box22.display()
	//Box23.display()
	//Box24.display()




  rope6.display();
 
  BallObject6.display();

  ground.show()
}

function drawLine (constraint) {
	BallBodyPosition = constraint.bodyA.position;    
	BoxBodyPosition = constraint.bodyB.position;
	BoxBodyOffset = constraint.pointB;
	BoxBodyX= BoxBodyPositiion.x + BoxBodyOffset.x;
	BoxBodyY= BoxBodyPosition.y + BoxBodyOffset.y; 
	line(BallBodyPosition.x, BallBodyPosition.y, BoxBodyX, BoxBodyY);           
}

//important
function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(BallObject1.body, BallObject1.body.position, {x: -50, y:-45});
	}
}
