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
