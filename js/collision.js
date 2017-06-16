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
		if(rect.x + rect.w < circle.x) return false;
		if(rect.x > circle.x + circle.r) return false;
		if(rect.y + rect.h < circle.y) return false;
		if(rect.y > circle.y + circle.r) return false;

		return true;
	}

	var circle2circle = function(circle1, circle2){
		if(((circle1.x - circle2.x) * (circle1.x - circle2.x) +
			(circle1.y - circle2.y) * (circle1.y - circle2.y))
			> (circle1.r + circle2.r) * (circle1.r + circle2.r))
			return false;

		return true;
	}

	var mPublic = {
		rect2rect: rect2rect,
		rect2circle: rect2circle,
		circle2circle: circle2circle
	}

	return mPublic;

}());