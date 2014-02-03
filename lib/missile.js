function Missile(ship,vector,enemy){
	this.fire = false;
	this.missiles = [];
	this.ship = ship;
	this.missilec = 0;
	var missileB;

	this.init = function(){
	
	}

	this.add = function(){

		missileB = new Missileb(vector,enemy);
		missileB.speed = 4;
		missileB.draw(this.ship);
		missileB.calulateV();
		this.missilec++;
		this.missiles.push(missileB); 
	}

	this.update = function(){
		
		for (var i= 0; i < this.missiles.length; i++) {
			var missileu = this.missiles[i];
			missileu.update();
			this.remove();
		}
	}

	this.removeNotScreen = function(){

		for (var i= 0; i < this.missiles.length; i++) {
					
			var missileu = this.missiles[i];
			this.missiles.splice(i, 1);
			missileu.remove();
			this.missilec--;
		
		}

	}

	this.remove = function(){

		for (var i= 0; i < this.missiles.length; i++) {
					
			var missileu = this.missiles[i];
					
			if(	missileu.x > 500 ||
				missileu.x < 0 ||
				missileu.y > 300 ||
				missileu.y < 0) {
				this.missiles.splice(i, 1);
				missileu.remove();
				this.missilec--;
			}
		}

	}
}