function Scene(){
	this.shapes = new Array();
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.transformPosition = {x: 0, y: 0};
}

Scene.prototype.rect = function(x, y, w, h, c){
	var rect = new Rect(x, y, w, h, c);
	this.shapes.push(rect);
}

Scene.prototype.fillRect = function(x, y, w, h, c){
	var rect = new FillRect(x, y, w, h, c);
	this.shapes.push(rect);
}


Scene.prototype.circle = function(x, y, r, c){
	var circle = new Circle(x, y, r, c);
	this.shapes.push(circle);
}

Scene.prototype.fillCircle = function(x, y, r, c){
	var circle = new FillCircle(x, y, r, c);
	this.shapes.push(circle);
}

Scene.prototype.image = function(img, x, y, w, h){
	var image = new LImage(img, x, y, w, h);
	this.shapes.push(image);
}

Scene.prototype.animation = function(img, x, y, w, h, sw, sy, n, f){
	var animation = new Animation(img, x, y, w, h, sw, sy, n, f);
	this.shapes.push(animation);
}

Scene.prototype.text = function(msg, x, y, c){
	var text = new Text(msg, x, y, c);
	this.shapes.push(text);
}

Scene.prototype.draw = function(){
	for(var i=0; i<this.shapes.length; i++){
		this.shapes[i].draw();
	}
}

Scene.prototype.setXSpeed = function(xSpeed){
	this.xSpeed = xSpeed;
}

Scene.prototype.setYSpeed = function(ySpeed){
	this.ySpeed = ySpeed;
}

Scene.prototype.update = function(){
	this.transform(this.xSpeed, this.ySpeed);
}

Scene.prototype.transform = function(dx, dy){
	dy = dy || 0;
	this.transformPosition.x += dx;
	this.transformPosition.y += dy;
	for(var i=0; i<this.shapes.length; i++){
		this.shapes[i].transform(dx, dy);
	}
}

Scene.prototype.getTransform = function(){
	return this.transformPosition;
}

Scene.prototype.reset = function(){
	this.transform(-this.transformPosition.x, -this.transformPosition.y)
}

Scene.prototype.run = function(){
	this.update();
	this.draw();
}

Scene.prototype.loop = function(){
	this.run();
	if(this.transformPosition.x < -canvas.width){
    	this.reset();
		this.transform(canvas.width, 0);
	}
}

Scene.prototype.collide = function(otherScene){
	for(var i=0; i<this.shapes.length; i++){
		for(var j=0; j<otherScene.shapes.length; j++){
			if(this.shapes[i].collide(otherScene.shapes[j]))
				return true;
		}
	}
	return false;
}
