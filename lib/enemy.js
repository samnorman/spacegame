function Enemy(ship,vector){

	var enemyCount = 1;
	var enemysKilled = 0;
	var enemys = [];

	this.init = function(){
		
		for (var i= 0; i < enemyCount; i++) {
			var enemy = new Enemys(ship,vector);
			var missile = new Missile(enemy,vector);
			enemy.missile = missile;
			enemy.draw(Math.random() * 500,Math.random() * 300);
			enemys.push(enemy);
		}

	}

	this.update = function(){
		for (var i= 0; i < enemys.length; i++) {
			
			var enemy = enemys[i];
			
			if (enemy.enemycomp == true && enemy.alreadycomming == false) {
				var randX = Math.random() * 475;
				var randY = Math.random() * 275;
				enemy.initPoint(randX,randY);
				enemy.enemycomp = false;
			}

			enemy.update();
			enemy.missile.update();
		}
	}

	this.checkHitTest = function(userXMissile,userYMissile){
		
		for (var i= 0; i < enemys.length; i++) {
			
			var enemy = enemys[i];
			var dx = enemy.x - userXMissile;
        	var dy = enemy.y - userYMissile;
        	var dist = Math.sqrt(dx * dx + dy * dy);

        	if(dist < 15){
        		enemy.remove();
        		enemys.splice(i, 1);
        		enemyCount--;
        		enemysKilled++;
        		this.addNewEnemys();
        	}
		}
	}

	this.addNewEnemys = function(){

		if(enemyCount == 0){

			if (enemysKilled < 4) {
				enemyCount = 2;
				ship.level = 1;
			}else if (enemysKilled < 10) {
				enemyCount = 3;
				ship.level = 2;
			}else if (enemysKilled < 14) {
				enemyCount = 4;
				ship.level = 3;
			}else if (enemysKilled < 18) {
				enemyCount = 5;
				ship.level = 5;
			}else if (enemysKilled < 22) {
				enemyCount = 6;
				ship.level = 6;
			}else if (enemysKilled > 26) {
				enemyCount = 7;
				ship.level = 7;
			}

			this.init();
		}
	}
}