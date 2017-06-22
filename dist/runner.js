var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var LL = (function(){

	var inheritPrototype = function(subClass, superClass) {
	    var prototype = Object.create(superClass.prototype);
	    prototype.constructor = subClass;
	    subClass.prototype = prototype;
	};


	/* Images Manager */
	var imageURLs = {};

	var IMAGES = {};

	function addImages(images){
	  for (var image in images) {    
	    imageURLs[image] = images[image];
	  }
	}

	function getImages(){
		return IMAGES;
	}

	function loadImageAndRun(callback){
	  var loadedImages = 0;    
	  var numImages = 0;  

	  context.font='14px bold';
	  context.lineWidth=5;

	  var cw = canvas.width;
	  var ch = canvas.height;

	  // get num of imageURLs    
	  for (var image in imageURLs) {    
	    numImages++;
	  }

	  var drawLoading = function(){
	    context.clearRect(0, 0, cw, ch);
	  	context.fillStyle = "#40eeee";
	    context.fillRect(0, 0, cw, ch);
	    context.fillStyle = "orange";
	    context.fillText('Loading:'+loadedImages+'/'+numImages, cw/4, ch/2-20);

	    context.beginPath();
	    context.moveTo(cw/4, ch/2);
	    context.lineTo(cw*3/4, ch/2);
	    context.strokeStyle='white';
	    context.stroke();
	    context.closePath(); 

	    context.beginPath();
	    context.moveTo(cw/4, ch/2);
	    context.lineTo(cw/4+cw/2*loadedImages/numImages, ch/2);  
	    context.strokeStyle='orange';
	    context.stroke();
	    context.closePath(); 
	  }
	  
	  var loading = function(){ 
	    drawLoading();

	    if (++loadedImages >= numImages && callback) {    
	      callback();    
	    }    
	  };  

	  for (var image in imageURLs) {    
	    IMAGES[image] = new Image();    
	    IMAGES[image].onload = loading;
	    IMAGES[image].src = imageURLs[image].src;
	    IMAGES[image].w = imageURLs[image].w;
	    IMAGES[image].h = imageURLs[image].h;

	    IMAGES[image].fs = imageURLs[image].fs;
	  }    

	  drawLoading(); 
	}

  	return {
	    inheritPrototype: inheritPrototype,
	    loadImageAndRun: loadImageAndRun,
	    addImages: addImages,
	    getImages: getImages
  	}

})();

LL.addImages(images);
LL.loadImageAndRun();
var Collision =  (function(){

	/*
	rect: x, y, w, h
	circle: x, y, r
	line: x1, y1, x2, y2
	*/
	var rect2rect = function(rect1, rect2){
		if(rect1.x + rect1.w < rect2.x) return false;
		if(rect1.x > rect2.x + rect2.w) return false;
		if(rect1.y + rect1.h < rect2.y) return false;
		if(rect1.y > rect2.y + rect2.h) return false;

		return true;
	}

	var rect2circle = function(rect, circle){
		if(rect.x + rect.w < circle.x - circle.r) return false;
		if(rect.x 		     > circle.x + circle.r) return false;
		if(rect.y + rect.h < circle.y - circle.r) return false;
		if(rect.y          > circle.y + circle.r) return false;

		return true;
	}

	var circle2circle = function(circle1, circle2){
		if(((circle1.x - circle2.x) * (circle1.x - circle2.x) +
			(circle1.y - circle2.y) * (circle1.y - circle2.y))
			> (circle1.r + circle2.r) * (circle1.r + circle2.r))
			return false;

		return true;
	}

	var rect2line = function(rect, line){
		if(rect.x > line.x1 && rect.x > line.x2) return false;
		if(rect.x + rect.w < line.x1 && rect.w < line.x2) return false;
		if(rect.y > line.y1 && rect.y > line.y2) return false;
		if(rect.y + rect.h < line.y1 && rect.y + rect.h < line.y2) return false;

    return true;
	}

  var getDupRect = function(rect1, rect2){
    var rect = {};
    rect.x = Math.max(rect1.x, rect2.x),
    rect.y = Math.max(rect1.y, rect2.y),
    rect.w = Math.min(rect1.x + rect1.w, rect2.x + rect2.w) - rect.x;
    rect.h = Math.min(rect1.y + rect1.h, rect2.y + rect2.h) - rect.y;

    return rect;
  }

  var canvas1 = document.getElementById("canvas1");
  var canvas2 = document.getElementById("canvas2");

  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");

  canvas1.width = canvas2.width = canvas.width;
  canvas1.height = canvas2.height = canvas.height;

	var image2image = function(image1, image2){
		if(rect2rect(image1, image2)){

      ctx1.clearRect(0, 0, canvas.width, canvas.height);
      ctx2.clearRect(0, 0, canvas.width, canvas.height);

      image1.draw(ctx1);
      image2.draw(ctx2);

      var rect = getDupRect(image1, image2);

      if(rect.w <= 0 || rect.h <= 0) return false;

      var image1Date = ctx1.getImageData(rect.x, rect.y, rect.w, rect.h);
      var image2Date = ctx2.getImageData(rect.x, rect.y, rect.w, rect.h);

      var imgData1Data = image1Date.data;
      var imgData2Data = image2Date.data;

      for(var i = 3, len = imgData1Data.length; i < len; i += 17) {
        if(imgData1Data[i] && imgData2Data[i]) {;
          return true;
        }
      }
      return false;
		}

		return false;
	}

	var mPublic = {
		rect2rect: rect2rect,
		rect2circle: rect2circle,
		circle2circle: circle2circle,
    image2image: image2image
	}

	return mPublic;

}());
var ShapeTypes = Object.freeze({
  rect: 0,
  circle: 1,
  line: 2,
  triangle: 3,
  image: 4,
  animation: 5,
  text: 6
})

/* Rect */

function Rect(x, y, w, h, c){
  this.type = ShapeTypes.rect;

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c || "orange";
}

Rect.prototype.draw = function(){
  context.strokeStyle = this.c;
  context.beginPath();
  context.rect(this.x, this.y, this.w, this.h);
  context.closePath();
  context.stroke();
}

Rect.prototype.collide = function(target){
  switch(target.type)
  {
    case ShapeTypes.rect: 
      return Collision.rect2rect(this, target);

    case ShapeTypes.circle:
      return Collision.rect2circle(this, target);

    default:
      return false;

  }
}

Rect.prototype.transform = function(dx, dy){
  this.x += dx;
  this.y += dy;
}

/* FillRect */

function FillRect(x, y, w, h, c){
  Rect.call(this, x, y, w, h, c);
}

LL.inheritPrototype(FillRect, Rect)

FillRect.prototype.draw = function(){
  context.fillStyle = this.c;
  context.fillRect(this.x, this.y, this.w, this.h);
}

/* LImage */
function LImage(img, x, y, w, h){
  Rect.call(this, x, y, w, h);
  this.type = ShapeTypes.image;
  this.img = img;
}

LL.inheritPrototype(LImage, Rect);

LImage.prototype.draw = function(c){

  this.w = this.w || Math.floor(this.img.w / 2);
  this.h = this.h || Math.floor(this.img.h / 2);

  if(c){
    c.drawImage(this.img, this.x, this.y, this.w, this.h) 
  } else {
    context.drawImage(this.img, this.x, this.y, this.w, this.h)    
  }
}

LImage.prototype.collide = function(target){
  switch(target.type)
  {
    case ShapeTypes.rect: 
      return Collision.rect2rect(this, target);

    case ShapeTypes.circle:
      return Collision.rect2circle(this, target);

    case ShapeTypes.image:
    case ShapeTypes.animation:
      return Collision.image2image(this, target);

    default:
      return false;

  }
}

/* Animation */
function Animation(img, x, y, w, h, sw, sh, n, f){
  LImage.call(this, img, x, y, w, h);
  this.type = ShapeTypes.animation;
  this.frameMax = n || this.img.fs;
  this.currentFrame = 0;
  this.sw = sw || this.img.w;
  this.sh = sh || this.img.h;
  this.animationFrame = f || 5; 
}

LL.inheritPrototype(Animation, LImage);

Animation.prototype.draw = function(c){
  var intFrame = Math.floor(this.currentFrame/this.animationFrame);
  var offsetX = this.sw * intFrame;

  this.w = this.w || Math.floor(this.img.w / 2);
  this.h = this.h || Math.floor(this.img.h / 2);

  if(c){
    c.drawImage(this.img, 
      offsetX, 0, this.sw, this.sh,
      this.x, this.y, this.w, this.h);    
  } else {
    context.drawImage(this.img, 
      offsetX, 0, this.sw, this.sh,
      this.x, this.y, this.w, this.h);    
  }

  if(++this.currentFrame >= this.frameMax * this.animationFrame)
    this.currentFrame = 0;
}

/* Circle */
function Circle(x, y, r, c){
  this.type = ShapeTypes.circle;

  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c || "orange";
}

Circle.prototype.draw = function(){
  context.strokeStyle = this.c;
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, Math.PI*2, true ); 
  context.closePath();
  context.stroke();
}

Circle.prototype.collide = function(target){
  switch(target.type)
  {
    case ShapeTypes.rect: 
      return Collision.rect2circle(target, this);

    case ShapeTypes.circle:
      return Collision.circle2circle(this, target);

    default:
      return false;

  }
}

Circle.prototype.transform = function(dx, dy){
  this.x += dx;
  this.y += dy;
}

/* FillCircle */
function FillCircle(x, y, r, c){
  Circle.call(this, x, y, r, c);
}

LL.inheritPrototype(FillCircle, Circle)

FillCircle.prototype.draw = function(){
  context.fillStyle = this.c;
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, Math.PI*2, true ); 
  context.closePath();
  context.fill();
}

function Text(msg, x, y, c){
  this.c = c || "orange";
  this.x = x;
  this.y = y;
  this.msg = msg;
}

Text.prototype.draw = function(){
  context.fillStyle = this.c;
  context.font='15px bold';
  context.fillText(this.msg, this.x, this.y);
}

Text.prototype.transform = function(dx, dy){
  this.x += dx;
  this.y += dy;
}
function Scene(){
	this.shapes = new Array();
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.transformPosition = {x: 0, y: 0};
}

Scene.prototype.rect = function(x, y, w, h, c){
	var rect = new Rect(x, y, w, h, c);
	this.shapes.push(rect);
	return this;
}

Scene.prototype.fillRect = function(x, y, w, h, c){
	var rect = new FillRect(x, y, w, h, c);
	this.shapes.push(rect);
	return this;
}


Scene.prototype.circle = function(x, y, r, c){
	var circle = new Circle(x, y, r, c);
	this.shapes.push(circle);
	return this;
}

Scene.prototype.fillCircle = function(x, y, r, c){
	var circle = new FillCircle(x, y, r, c);
	this.shapes.push(circle);
	return this;
}

Scene.prototype.image = function(img, x, y, w, h){
	var image = new LImage(img, x, y, w, h);
	this.shapes.push(image);
	return this;
}

Scene.prototype.animation = function(img, x, y, w, h, sw, sy, n, f){
	var animation = new Animation(img, x, y, w, h, sw, sy, n, f);
	this.shapes.push(animation);
	return this;
}

Scene.prototype.text = function(msg, x, y, c){
	var text = new Text(msg, x, y, c);
	this.shapes.push(text);
	return this;
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
	if(this.secondJump && this.ySpeed > this.jumpSpeed*0.5){
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
// runner
LL.RunnerGame = function(){

  var runner;

  var SPACE = 32;
  var ENTER = 13;

  var speed = -4; 

  var isOver = false;
  var score = 0;
  var highScore = 0;

  var scenes = [];
  var curSceneIdx = 0;
  var curScene = new Scene();
  var lastScene = new Scene();

  var bg1, bg2, g1, g2;

  var start = function(){
    isOver = false;
    score = 0;
    
    lastScene.reset();
    curScene.reset();
    
    lastScene.transform(canvas.width);
    curScene.transform(canvas.width * 2);

    window.requestAnimationFrame(loop, canvas);
  }

  var stop = function(){
    isOver = true;
    highScore = score > highScore ? score : highScore;
  }


  var initBg = function(){
    bg1 = new Scene();
    bg1.setXSpeed(speed/5);
    bg1.image(IMAGES.bg, 0, 0, canvas.width, canvas.height);

    bg2 = new Scene();
    bg2.setXSpeed(speed/5);
    bg2.image(IMAGES.bg, 0, 0, canvas.width, canvas.height);
    bg2.transform(canvas.width, 0);

    g1 = new Scene();
    g1.setXSpeed(speed);
    g1.image(IMAGES.ground, 0, 220, canvas.width+10, canvas.height-220);


    g2 = new Scene();
    g2.setXSpeed(speed);
    g2.image(IMAGES.ground, 0, 220, canvas.width+10, canvas.height-220);
    g2.transform(canvas.width, 0);
  }

  var initRunner = function(){
    runner = new Runner(); 
    runner.animation(IMAGES.guagua, 
      50, 172, 31, 49, 
      61, 98, 8, 5);
    runner.setGraviry(0.4); 
    runner.setJumpSpeed(-10); 
  }

  var init = function(){
    initBg();
    initRunner();
    initScene();
    document.onkeydown = function( event ){
      if(event.keyCode == SPACE && !isOver){
        runner.jump();
      }
    }
    document.onkeyup = function( event ){    
      if(event.keyCode == SPACE && isOver){
        start();
      }
    }
  }

  var newScene = function(){
    var scene = new Scene();
      scene.setXSpeed(speed); 
    scenes.push(scene); 
    return scene;
  }
  
  var initScene = function(){
    updateScene();
    updateScene();
  }

  var updateScene = function(){
    lastScene = curScene;

    if(scenes.length == 0){
      return;
    };

    curScene = scenes[curSceneIdx];
    curScene.reset();   
    curScene.transform(canvas.width + lastScene.getTransform().x, 0);

    if(++curSceneIdx >= scenes.length){
      curSceneIdx = 0;
    }
  }

  var drawScore = function(){
    var msg;

    context.fillStyle = 'white';
    context.font='15px bold';
    context.drawImage(LL.getImages().score, 3, 3, 20, 20);
    context.fillText(score, 25, 20);

    context.drawImage(LL.getImages().hiscore, canvas.width-80, 3, 20, 20);
    context.fillText(highScore, canvas.width-55, 20);

    if(isOver){
      context.font='18px bold';
      context.fillText("press SPACE to try again", 180, 100);
    }
  }


  var run = function(){
    //context.clearRect(0, 0, canvas.width, canvas.height);
    bg1.loop();
    bg2.loop();
    g1.loop();
    g2.loop();

    curScene.run();
    lastScene.run();
    if(lastScene.getTransform().x < -canvas.width)
      updateScene();

    runner.update();
    runner.draw();

    score += 1;

    if(isCollision()){
      stop();
    }
  }

  var loop = function(){
    if(!isOver){
      run();
      drawScore();
      requestAnimationFrame(loop);  
    }
  }

  var isCollision = function(){
    if(runner.collide(curScene) || runner.collide(lastScene))
      return true;
    return false
  }

  var mPublic = {
    init: init,
    loop: loop,
    newScene: newScene,
    start: start,
    getImages: LL.getImages,
    addImages: LL.addImages,
    loadImageAndRun: LL.loadImageAndRun,
    speed: speed
  }

  return mPublic;
};
