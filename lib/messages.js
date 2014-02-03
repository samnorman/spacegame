function Messages(stage){

	this.text;

	this.start = function(){
		text = new createjs.Text("Press Enter to Start", "20px Arial", "#ff7700");
            text.x = 150;
            text.y = 150;
            text.textBaseline = "alphabetic";
	}

	this.over = function(){
		text = new createjs.Text("Game Over Press Enter to Restart", "20px Arial", "#ff7700");
            text.x = 80;
            text.y = 150;
            text.textBaseline = "alphabetic";
	}

	this.add = function(){
		stage.addChild(text);
        stage.update();
	}

	this.remove = function(){
		stage.removeChild(text);
        stage.update();
	}

}