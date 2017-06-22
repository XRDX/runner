/* Runner */

function Runner(){
	Scene.call(this)
	this.g = 1;
  this.jumpSpeed = -10; 
  this.secondJump = false;
}

LL.inheritPrototype(Runner, Scene);

Runner.prototype.jump = function(){
	if(!this.isInAir()){
		this.setYSpeed(this.jumpSpeed);
		this.secondJump = true;
	}
	if(this.secondJump && this.ySpeed > 0){
		this.setYSpeed(this.jumpSpeed*0.8);
		this.secondJump = false;
	}
}

Runner.prototype.isInAir = function(){
	return this.getTransform().y < 0;
}

Runner.prototype.update = function(){
	if(this.isInAir() || this.ySpeed <0){
		this.ySpeed += this.g;
	} else {
		this.ySpeed = 0;
		this.reset();
	}

	Scene.prototype.update.call(this);
}

Runner.prototype.setGraviry = function(g){
  this.g = g; 
}

Runner.prototype.setJumpSpeed = function(speed){
  this.jumpSpeed = speed; 
}
