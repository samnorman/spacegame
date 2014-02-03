function Vector(){

	this.anglevx = function(m,angle){
		return m * Math.cos(angle);
	}  

	this.anglevy = function(m,angle){
		return m * Math.sin(angle);
	}

	this.dotproduct = function(v1valuex,v1valuey,v2valuex,v2valuey){
		return Math.acos((v1valuex * v2valuex) + (v1valuey * v2valuey));
	}

	this.normal = function(comp,valuex,valuey){
		return comp / this.mag(valuex,valuey);			
	}

	this.mag = function(valuex,valuey) {
		return Math.sqrt(valuex * valuex + valuey * valuey);
	}

	this.dotproductna = function(v1valuex,v1valuey,v2valuex,v2valuey){
		return (v1valuex * v2valuex) + (v1valuey * v2valuey);
	}
			
}