"use strict";

/* Runner */

function Runner(){
	Scene.call(this)
	this.g = 1;
  this.jumpSpeed = -10; 
}

LL.inheritPrototype(Runner, Scene);

Runner.prototype.jump = function(){
	if(!this.isInAir())
		this.setYSpeed(this.jumpSpeed);
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
