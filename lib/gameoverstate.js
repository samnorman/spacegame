function Gameoverstate(){

	this.id = 'gameover';

	this.enter = function()
	{
		
		playstate = null;

		addEventListener("keydown", this.onDown);

		stage.removeAllChildren();
		this.removed = true;
	
		messages.over();
		messages.add();
	}

	this.update = function()
	{
		
	}

	this.exit = function()
	{
		removeEventListener("keydown",this.onDown);
		stage.autoClear = true; // This must be true to clear the stage.
		stage.removeAllChildren();
		stage.update();

		return true;
	}

	this.onDown = function(e) 
	{
		if(e.keyCode == 13){
			playstate = new Playstate();
			gameStateMachine.changeState(playstate);
        }  				
	}

}