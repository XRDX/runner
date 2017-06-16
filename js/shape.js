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

/* Image */
function Image(x, y, w, h, src){
  Rect.call(this, x, y, w, h);
  this.src = src;
}

Util.inheritPrototype(Image, Rect);

Image.prototype.draw = function(){
  context.drawImage(this.src, this.x, this.y, this.w, this.h)
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
