function Enemys(ship,vector){

	var g = new createjs.Graphics();
	var s;
      var degrees = 0;
      var dirclockwise = false;
      var pointhit = false;
      var turncomp = false;
      this.alreadycomming = false;
      var stepangle = 8;
      var accx = 0;
      var accy = 0;
      var velx = 0;
      var vely = 0;
      var magtotal = 0;
      var magacc = 0;
      var magtotal = 0;
      var attackdist = 100;
      this.enemycomp = false;
      var missile;
      this.x = 0;
      this.y = 0;
      this.rotation = 0;
      this.name = "enemy";
      this.user = false;
      this.fireOnce = false;

	this.draw = function(x,y) {
		g.setStrokeStyle(1);
            g.beginStroke(createjs.Graphics.getRGB(255,0,0));
           
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

            this.initPoint(0,0);
	}

      this.initPoint = function(x,y){

            magacc = 0;
            pointhit = true;

            //resoving vectors witha m of 1 (direction of arrow split into x and y componets) we only know this because we already have the angle
            //we can covert the angle and the lenght(mag) into it's vector componets
            var arrowhx = vector.anglevx(1,(s.rotation + 180) * Math.PI / 180);
            var arrowhy = vector.anglevy(1, (s.rotation + 180) * Math.PI / 180);

            //get the vector the mouse is pointing in (or just the point)
            mVDX = s.x - x;
            mVDY = s.y - y;

            //convert to unit vector
            var normalx = vector.normal(mVDX,mVDX,mVDY);
            var normaly = vector.normal(mVDY, mVDX, mVDY);

            //Dot Product (angle between the two) 
            var dotpr = vector.dotproduct(normalx,normaly,arrowhx,arrowhy);

            degrees  = dotpr * 180 / Math.PI;

            //work out which way the enemy needs to turn
            var arrowface = vector.dotproductna(normalx, normaly, vector.anglevx(1, (s.rotation - 90) * Math.PI / 180), vector.anglevy(1, (s.rotation - 90) * Math.PI / 180));
            
            if (arrowface < 0) {
                  dirclockwise = false;
            }else {
                  dirclockwise = true;
            }

            //console.log(mVDX,mVDY,arrowhx,arrowhy,arrowhxt,arrowhyt);
      }

      this.remove = function(){
            stage.removeChild(s);
            this.missile.removeNotScreen();
      }

	this.update = function(){

            if(pointhit == true){   
            //stepangle moves the rotation as well as the degrees counter
            if (dirclockwise == true) {
                  s.rotation += stepangle;
                  degrees -= stepangle;
            }else {
                  s.rotation -= stepangle;
                  degrees -= stepangle;
            }
                        
            //the degrees could be even or odd so we have to do an equal or less than     
            if (degrees <= 0) {
                  pointhit = false;
                  turncomp = true;
            }

            }

            if (turncomp == true) {

                  //add on our acc
                  accx = vector.anglevx(1, (s.rotation) * Math.PI / 180) * 0.045;
                  accy = vector.anglevy(1, (s.rotation) * Math.PI / 180) * 0.045;

                  velx += accx;
                  vely += accy;
                  
                  s.x += velx;
                  s.y += vely;

                  this.x = s.x;
                  this.y = s.y;
                  this.rotation = s.rotation;

                  if(this.fireOnce){
                        this.missile.add();
                        this.fireOnce = false;
                  }

                  // calulate the mag of velocity added on
                  magtotal = vector.mag(velx, vely);
                  
                  // the acculative total
                  magacc += magtotal;

                  // if its greater than the mag for the mouse triangle
                  if (magacc > vector.mag(mVDX, mVDY)) {
                        //reset variables (if we dont do this it still goes in the last location)
                        this.enemycomp = true;
                        accx = 0;
                        accy = 0;
                        velx = 0;
                        vely = 0;
                        turncomp = false;
                        this.alreadycomming = false;
                        
                  }

                  if(!ship.removed){

                        var dx = ship.x - s.x;
                        var dy = ship.y - s.y;
                        var dist = Math.sqrt(dx * dx + dy * dy);

                        if(dist < 15){
                              ship.remove();
                        }

                  }

                  if (dist < attackdist && this.alreadycomming == false) {
                      
                        this.alreadycomming = true;
                  
                        this.fireOnce = true;

                        this.enemycomp = true;
                        accx = 0;
                        accy = 0;
                        velx = 0;
                        vely = 0;
                        turncomp = false;
                  
                        this.initPoint(ship.x, ship.y);
                  }     

            }


	}

}