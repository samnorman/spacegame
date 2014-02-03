function Menustate(){

	this.id = 'menu';

	this.enter = function()
	{
		gameoverstate = null;
		stage = new createjs.Stage("demoCanvas");
		messages = new Messages(stage);
		addEventListener("keydown", this.onDown);

        messages.start();
        messages.add();
		return true;
	}

	this.update = function()
	{
		
	}

	this.exit = function()
	{
		messages.remove();
		removeEventListener("keydown",this.onDown);
		return true;
	}

	this.onDown = function(e) {
		if(e.keyCode == 13 && gameStateMachine.currentstate.id == "menu"){
            playstate = new Playstate();
            gameStateMachine.changeState(playstate);
        }  				
    }

}