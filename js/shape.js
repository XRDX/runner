"use strict";

var ShapeTypes = Object.freeze({
  rect: 0,
  circle: 1,
  line: 2,
  triangle: 3
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

Util.inheritPrototype(FillRect, Rect)

FillRect.prototype.draw = function(){
  context.fillStyle = this.c;
  context.fillRect(this.x, this.y, this.w, this.h);
}

/* LImage */
function LImage(img, x, y, w, h){
  Rect.call(this, x, y, w, h);
  this.img = img;
}

Util.inheritPrototype(LImage, Rect);

LImage.prototype.draw = function(){
  console.log(this.img);
  context.drawImage(this.img, this.x, this.y, this.w, this.h)
}

/* Animation */
function Animation(img, x, y, w, h, sw, sh, n){
  LImage.call(this, img, x, y, w, h);
  this.frameMax = n;
  this.currentFrame = 0;
  this.sw = sw;
  this.sh = sh;
}

Util.inheritPrototype(Animation, LImage);

Animation.prototype.draw = function(){
  var offsetX = this.sw * this.currentFrame;
  context.drawImage(this.img, 
    offsetX, 0, this.sw, this.sh,
    this.x, this.y, this.w, this.h);

  this.currentFrame >= this.frameMax-1 ? this.currentFrame = 0 : this.currentFrame++;
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

Util.inheritPrototype(FillCircle, Circle)

FillCircle.prototype.draw = function(){
  context.fillStyle = this.c;
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, Math.PI*2, true ); 
  context.closePath();
  context.fill();
}
