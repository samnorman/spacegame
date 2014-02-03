function Missileb(vector,enemy){

	this.missileVX = 0;
	this.missileVY = 0;
	this.x = 0;
	this.y = 0;
	this.vector = vector;
	this.ship;
	var circle = new createjs.Shape();

	this.speed = 2;

	this.draw = function(ship) {
		

		this.ship = ship;
		//console.log(this.ship.x,this.ship.y,this.ship.rotation)
		this.x = this.ship.x;
		this.y = this.ship.y;
		circle.graphics.beginFill("red").drawCircle(0, 0, 2);
		circle.x = this.x;
		circle.y = this.y;
		stage.addChild(circle);
		stage.update();
	}

	this.calulateV = function() {
		this.missileVX = this.vector.anglevx(1, (this.ship.rotation) * Math.PI / 180);
		this.missileVY = this.vector.anglevy(1, (this.ship.rotation) * Math.PI / 180);
	}

	this.update = function() {
		circle.x += this.missileVX * this.speed;
		circle.y += this.missileVY * this.speed;
		this.x = circle.x;
		this.y = circle.y;
		stage.update();

		this.removeUser();

		if(this.ship.user == true){
			//console.log("user missile",circle.x,circle.y,enemy.x,enemy.y);
			enemy.checkHitTest(circle.x,circle.y);
		}

	}

	this.removeUser = function(){
		if(this.ship.user == false && this.ship.name == "spaceship"){

		var dx = this.ship.x - circle.x;
        var dy = this.ship.y - circle.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if(dist < 15){
            this.ship.remove();
        }

		}
	}

	this.remove = function(){
		stage.removeChild(circle);
	}

	/*this.__defineSetter__("speed1", function(val){
        this.speed = val;
    });

    this.__defineGetter__("speed1", function(){
        return speed;
    });*/

}