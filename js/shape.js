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
