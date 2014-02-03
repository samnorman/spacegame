function Spaceship(input){

	this.vr = 0;
	this.thrust = 0;
	this.vx = 0;
	this.vy = 0;
	this.friction = 0.97;
	this.x = 0;
	this.y = 0;
	this.rotation = 0;

	this.left = 0;
	this.right = 500;
	this.top = 0;
	this.bottom = 300;
	this.name = "spaceship";
	this.user = true;
	this.removed = false;
	this.level = 0;

	var g = new createjs.Graphics();

	this.draw = function(x,y){
            g.setStrokeStyle(1);
            g.beginStroke(createjs.Graphics.getRGB(0,255,0));
           
            g.moveTo(10, 0);
            g.lineTo(-9, 9);
            g.lineTo(-9, 0);
            g.lineTo(-9, -9);
            g.lineTo(10, 0);

            s = new createjs.Shape(g);
            s.x = x;
            s.y = y;
            stage.addChild(s);
            stage.update();
	}

	this.update = function(){

		s.rotation += this.vr;
    	var angle = s.rotation * Math.PI / 180;
		var ax = Math.cos(angle) * this.thrust;
		var ay = Math.sin(angle) * this.thrust;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.vx += ax;
		this.vy += ay;
		
		s.x += this.vx;
		s.y += this.vy;

		this.x = s.x;

		this.y = s.y;

		this.rotation = s.rotation;

		this.wrap();

		stage.update();

	}

	this.remove = function(){
		gameOverState = new Gameoverstate();
        gameStateMachine.changeState(gameOverState)
		//this.remove();
	}

	this.wrap = function(){

		if (s.x > this.right)
				{
					s.x = this.left;
				}
				else if (s.x < this.left)
				{
					s.x = this.right;
				}
				if (s.y > this.bottom)
				{
					s.y = this.top;
				}
				else if (s.y < this.top)
				{
					s.y = this.bottom;
				}
	}
}