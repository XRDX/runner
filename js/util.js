var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

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

	var MUSIC = {};

	var initMusics = function(){
		MUSIC.jump  = document.getElementById('jump');
		MUSIC.jump2 = document.getElementById('jump2'); 
		MUSIC.collision = document.getElementById('collision'); 
		MUSIC.bgm = document.getElementById('bgm');
	}

	var getMusics = function(){
		return MUSIC;
	}

	return {
    inheritPrototype: inheritPrototype,
    loadImageAndRun: loadImageAndRun,
    addImages: addImages,
    getImages: getImages,
    initMusics: initMusics,
    getMusics: getMusics
	}

})();

LL.addImages(images);
LL.initMusics();
LL.loadImageAndRun();

var MUSIC = LL.getMusics();


