"use strict";


// runner


var game = (function(){

  var runner;

	var SPACE = 32;
	var ENTER = 13;

  var FPS = 50;
  var speed = -200/FPS; 
  var g = 20/FPS; 
  var jumpSpeed = -500/FPS; 

	var isOver = false;
	var score = 0;
	var highScore = 0;

	var scenes = [];
	var curSceneIdx = 0;
	var curScene, lastScene;

  var bg1, bg2, g1, g2;

	var start = function(){
		isOver = false;
		score = 0;
		curScene.transform(canvas.width);
		lastScene.transform(canvas.width);
	}

	var stop = function(){
		isOver = true;
		highScore = score > highScore ? score : highScore;
	}


  var initBg = function(){
    bg1 = new Scene();
    bg1.setXSpeed(speed/5);

    bg1.fillRect(0, 0, canvas.width, canvas.height, "#00dddd");
    bg1.fillRect(50, 50, 50, 10, "white");
    bg1.fillRect(150, 60, 50, 10, "white");
    bg1.fillRect(250, 40, 50, 10, "white");
    bg1.fillRect(350, 50, 50, 10, "white");
    bg1.fillRect(450, 30, 50, 10, "white");
    bg1.fillRect(550, 50, 50, 10, "white");

    bg2 = bg1.clone();
    bg2.transform(canvas.width, 0);

    g1 = new Scene();
    g1.setXSpeed(speed);

    g1.fillRect(0, 250, canvas.width, 5)
    g1.fillRect(20, 270, 10, 5);
    g1.fillRect(120, 280, 5, 5);
    g1.fillRect(220, 260, 15, 5);
    g1.fillRect(320, 280, 5, 5);
    g1.fillRect(420, 270, 10, 5);
    g1.fillRect(520, 260, 15, 5);

    g2 = g1.clone();
    g2.transform(canvas.width, 0);
  }

  var initRunner = function(){
    runner = new Runner(); 
    runner.animation(IMAGES.guagua, 
      50, 200, 43, 50, 
      86, 100, 
      8, 
      FPS/10);
    runner.setGraviry(g); 
    runner.setJumpSpeed(jumpSpeed); 
  }

	var init = function(){
    initBg();
    initRunner();
    initScene();
		document.onkeydown = function( event ){
			if(event.keyCode == SPACE){
				if(isOver){
					start();
				} else {
					runner.jump();
				}
			}
		}
	}

	var addScene = function(scene){
    scene.setXSpeed(speed); 
		scenes.push(scene); 
	}
  
  var initScene = function(){
    curScene = new Scene();
    curScene.setXSpeed(speed);
    updateScene(); 
  }

	var updateScene = function(){
		lastScene = curScene;

		if(scenes.length == 0) return;

		curScene = scenes[curSceneIdx];
    curScene.reset();
		curScene.transform(canvas.width);

		if(++curSceneIdx >= scenes.length){
			curSceneIdx = 0;
		}
	}

	var drawScore = function(){
		var msg;

		context.fillStyle = 'orange';
    context.font='14px bold';
		msg = "Score: " + score;

		context.fillText(msg, 0, 20);
		msg = "HI: " + highScore;

		context.fillText(msg, 300, 20);

		if(isOver){
			context.fillText("press SPACE to try again", 150, 150);
		}
	}


	var run = function(){
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
		} 

		drawScore();		
	}

	var isCollision = function(){
		if(runner.collide(curScene) || runner.collide(lastScene))
			return true;
		return false
	}

	var mPublic = {
		init: init,
		loop: loop,
		addScene: addScene,
    fps: FPS
	}

	return mPublic;
})();
