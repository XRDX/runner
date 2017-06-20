"use strict";

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

  var canvas1 = document.createElement("canvas");
  var canvas2 = document.createElement("canvas");

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