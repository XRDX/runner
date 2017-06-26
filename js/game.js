// runner
LL.RunnerGame = function(){

  var runner;

  var SPACE = 32;
  var ENTER = 13;

  var speed = -4; 

  var isOver = false;
  var score = 0;
  var highScore = 0;

  var scenes = [];

  var curSceneIdx = 0;
  var curScene = new Scene();
  var lastScene = new Scene();

  var bg1, bg2, g1, g2;

  var start = function(){
    isOver = false;
    score = 0;
    
    lastScene.reset();
    curScene.reset();
    
    lastScene.transform(canvas.width);
    curScene.transform(canvas.width * 2);

    MUSIC.bgm.play();

    window.requestAnimationFrame(loop, canvas);
  }

  var stop = function(){
    isOver = true;
    highScore = score > highScore ? score : highScore;
  }


  var initBg = function(){
    bg1 = new Scene();
    bg1.setXSpeed(speed/5);
    bg1.image(IMAGES.bg, 0, 0, canvas.width, canvas.height);

    bg2 = new Scene();
    bg2.setXSpeed(speed/5);
    bg2.image(IMAGES.bg, 0, 0, canvas.width, canvas.height);
    bg2.transform(canvas.width, 0);

    g1 = new Scene();
    g1.setXSpeed(speed);
    g1.image(IMAGES.ground, 0, 220, canvas.width+10, canvas.height-220);


    g2 = new Scene();
    g2.setXSpeed(speed);
    g2.image(IMAGES.ground, 0, 220, canvas.width+10, canvas.height-220);
    g2.transform(canvas.width, 0);
  }

  var initRunner = function(){
    runner = new Runner(); 
    runner.animation(IMAGES.guagua, 
      50, 172, 31, 49, 
      61, 98, 8, 5);
    runner.setGraviry(0.4); 
    runner.setJumpSpeed(-10); 
  }

  var initKeyBind = function(){
    document.onkeydown = function( event ){
      if(event.keyCode && !isOver){
        runner.jump();
      }
    }
    document.ontouchstart = function( event ){
      if(!isOver){
        runner.jump();
      }
    }
    document.onmousedown = function(event){
      if(!isOver){
        runner.jump();
      } else {
        start();
      }
    }

    document.ontouchend = function( event ){
      if(isOver){
        start();
      }
    }
    document.onkeyup = function( event ){    
      if(event.keyCode == SPACE && isOver){
        start();
      }
    }
  }

  var init = function(){
    initBg();
    initRunner();
    initScene();
    initKeyBind();
  }

  var newScene = function(){
    var scene = new Scene();
    scene.setXSpeed(speed); 
    scenes.push(scene); 
    return scene;
  }
  
  var initScene = function(){
    // at least 2 empty scenes
    for(; scenes.length <= 2; ){
      newScene();
    }
    updateScene();
    updateScene();
  }

  var updateScene = function(){
    lastScene = curScene;
    curScene = scenes[curSceneIdx];

    curScene.reset();   
    curScene.transform(canvas.width + lastScene.getTransform().x, 0);

    if(++curSceneIdx >= scenes.length){
      curSceneIdx = 0;
    }
  }

  var drawScore = function(){
    var msg;

    context.fillStyle = 'white';
    context.font='15px bold';
    context.drawImage(LL.getImages().score, 3, 3, 20, 20);
    context.fillText(score, 25, 20);

    context.drawImage(LL.getImages().hiscore, canvas.width-80, 3, 20, 20);
    context.fillText(highScore, canvas.width-55, 20);

    if(isOver){
      context.font='18px bold';
      context.fillText("press SPACE to try again", 180, 100);
    }
  }


  var run = function(){
    //context.clearRect(0, 0, canvas.width, canvas.height);
    bg1.loop();
    bg2.loop();

    curScene.run();
    lastScene.run();
    if(lastScene.getTransform().x < -canvas.width)
      updateScene();

    g1.loop();
    g2.loop();

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
      drawScore();
      requestAnimationFrame(loop);  
    }
  }

  var isCollision = function(){
    if(runner.collide(curScene) || runner.collide(lastScene))
      return true;
    return false
  }

  var mPublic = {
    init: init,
    loop: loop,
    newScene: newScene,
    start: start,
    getImages: LL.getImages,
    addImages: LL.addImages,
    loadImageAndRun: LL.loadImageAndRun,
    speed: speed
  }

  return mPublic;
};
