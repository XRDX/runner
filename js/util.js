"use strict";
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var Util = (function(){

  var inheritPrototype = function(subClass, superClass) {
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
  };

  return {
    inheritPrototype: inheritPrototype
  }
})();

/* clone */
Object.prototype.clone = function () {
  var Constructor = this.constructor;
  var obj = new Constructor();

  for (var attr in this) {
    if (this.hasOwnProperty(attr)) {
      if (typeof(this[attr]) !== "function") {
        if (this[attr] === null) {
          obj[attr] = null;
        }
        else {
          obj[attr] = this[attr].clone();
        }
      }
    }
  }
  return obj;
};

/* Method of Array*/
Array.prototype.clone = function () {
  var thisArr = this.valueOf();
  var newArr = [];
  for (var i=0; i<thisArr.length; i++) {
    newArr.push(thisArr[i].clone());
  }
  return newArr;
};

/* Method of Boolean, Number, String*/
Boolean.prototype.clone = function() { return this.valueOf(); };
Number.prototype.clone = function() { return this.valueOf(); };
String.prototype.clone = function() { return this.valueOf(); };

/* Method of Date*/
Date.prototype.clone = function() { return new Date(this.valueOf()); };

/* Method of RegExp*/
RegExp.prototype.clone = function() {
  var pattern = this.valueOf();
  var flags = '';
  flags += pattern.global ? 'g' : '';
  flags += pattern.ignoreCase ? 'i' : '';
  flags += pattern.multiline ? 'm' : '';
  return new RegExp(pattern.source, flags);
};

/* Images Manager */
var imageURLs = {
  guagua_1: "img/guagualeft/pao_1.png",
  guagua: "img/guagualeft.png",
  so: "https://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
  qb: "http://ossweb-img.qq.com/upload/adw/image/201706/1496970366462640365.jpg"
};

var IMAGES = {};

function loading(imageURLs,callback){    
  var loadedImages = 0;    
  var numImages = 0;  

  context.font='14px bold';
  context.lineWidth=5;

  var cw = canvas.width;
  var ch = canvas.height;

  // get num of imageURLs    
  for (var image in imageURLs) {    
    if(image == 'clone') continue;
    numImages++;
  }

  var drawLoading = function(){
    context.clearRect(0, 0, cw, ch);
    context.fillText('Loading:'+loadedImages+'/'+numImages, cw/4, ch/2-20);

    context.beginPath();
    context.moveTo(cw/4, ch/2);
    context.lineTo(cw*3/4, ch/2);
    context.strokeStyle='gray';
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

    if (++loadedImages >= numImages) {    
      callback();    
    }    
  };  

  for (var image in imageURLs) {    
    if(image == 'clone') continue;
    IMAGES[image] = new Image();    
    IMAGES[image].onload = loading;
    IMAGES[image].src = imageURLs[image];    
  }    

  drawLoading(); 
}    
/*end*/
