function Playstate(){

	this.id = 'play';
	this.vector = new Vector();
    this.ship = new Spaceship();
    this.enemy = new Enemy(this.ship,this.vector);
    this.missile = new Missile(this.ship,this.vector,this.enemy);

	this.enter = function()
	{
		menustate = null;

		addEventListener("keydown", this.onDown);
        addEventListener("keyup", this.onUp);

		this.ship.draw(250,150);
		this.missile.init()
		this.enemy.init();
	}

	this.update = function()
	{
		this.ship.update();
		this.missile.update();
        this.enemy.update();
	}

	this.exit = function()
	{  
		removeEventListener("keydown",this.onDown);
		removeEventListener("keyup",this.onUp);
	}

	this.onUp = function(e) {
			 	switch(e.keyCode)  {
            case 37: 
       
            playstate.ship.vr = 0;   
            break;

            case 38: 
            playstate.ship.thrust = 0;
            break;

            case 39: 
			playstate.ship.vr = 0; 
            break;

            case 40:  
            break;


        }	
}
	this.onDown = function(e){

				
			 		 switch(e.keyCode)  {
            case 37: // left
            //console.log("left"); 
            playstate.ship.vr = -3;   
            break;

            case 38: 
            
            playstate.ship.thrust = 0.2;
            //console.log("up",ship.thrust);
            break;

            case 39: 
			//console.log("right");
			playstate.ship.vr = 3; 
            break;

            case 40: 
            //console.log("down"); 
            break;

            case 32:
            //space
            //missile.fire = true;
            playstate.missile.add();
            //console.log(missile);
      
            break;

            case 13: 
            /*if(!main.start){
                  
            }
            main.start = true;*/
            break;
        }

    }

}