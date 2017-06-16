var Background = new Scene();

Background.fillRect(0, 0, canvas.width, canvas.height, "#00dddd");
Background.fillRect(50, 50, 50, 10, "white");
Background.fillRect(150, 60, 50, 10, "white");
Background.fillRect(250, 40, 50, 10, "white");
Background.fillRect(350, 50, 50, 10, "white");
Background.fillRect(450, 30, 50, 10, "white");
Background.fillRect(550, 50, 50, 10, "white");

var Ground = new Scene();

Ground.fillRect(0, 250, canvas.width, 5)
Ground.fillRect(20, 270, 10, 5);
Ground.fillRect(120, 280, 5, 5);
Ground.fillRect(220, 260, 15, 5);
Ground.fillRect(320, 280, 5, 5);
Ground.fillRect(420, 270, 10, 5);
Ground.fillRect(520, 260, 15, 5);

// loop

var bg1 = Background.clone();
var bg2 = Background.clone();
bg2.transform(canvas.width, 0);
bg1.setXSpeed(-0.4);
bg2.setXSpeed(-0.4);

var g1 = Ground.clone();
var g2 = Ground.clone();
g2.transform(canvas.width, 0);
g1.setXSpeed(-4);
g2.setXSpeed(-4);
// runner

var runner = new Runner();
runner.fillRect(50, 200, 30, 50, "green");

guagualeft = document.getElementById("guagualeft");
console.log(guagualeft);

//runner.image(50, 200, 30, 50, guagualeft, 82, 100, 8)
// (x, y, w, h, src, sw, sy, n)

var game = (function(){

	var SPACE = 32;
	var ENTER = 13;

	var isOver = false;
	var score = 0;
	var highScore = 0;

	var scenes = [];
	var curSceneIdx = 0;
	var curScene = new Scene();
	var lastScene = new Scene();

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

	var init = function(){
		document.onkeydown = function( event ){
			if(event.keyCode == SPACE){
				if(isOver){
					start();
				} else {
					runner.jump();
				}
			}
		}
		setNextScene(); 
		lastScene.setXSpeed(-4);
	}

	var addScene = function(scene){
		scenes.push(scene)
	}

	var setNextScene = function(){
		if(scenes.length == 0) return;

		if(curSceneIdx >= scenes.length){
			curSceneIdx = 0;
		}

		lastScene = curScene;
		curScene = scenes[curSceneIdx].clone();
		curScene.transform(canvas.width);
		curScene.setXSpeed(-4);
		curSceneIdx++;
		return 
	}

	var drawScore = function(){
		var msg;

		context.fillStyle = 'orange';
		context.font = '24px Times';
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
			setNextScene();

		runner.update();
		runner.draw();

		if(isCollision()){
			stop();
		}
		score += 1;
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
		setNextScene: setNextScene,
		addScene: addScene,
		scenes: scenes
	}

	return mPublic;
})();