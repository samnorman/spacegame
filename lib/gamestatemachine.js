function Gamestatemachine(){
	
	this.currentstate = null;

	this.changeState = function(state){

		if(this.currentstate != null){

			if(state.id == this.currentstate.id){
				return;
			}

			this.currentstate.exit()

		}

		this.currentstate = state;

		this.currentstate.enter();

	}

	this.update = function(){
		this.currentstate.update();
	}

}