//   guagua: "img/ani/run.png",
//   chomperAni: "img/ani/chomper_75x104x7.png",
//   flowerAni: "img/ani/flower_92x104x7.png",
//   birdAni: "img/ani/bird_112x84x8.png",
//   crabAni: "img/ani/crab_117x90x6.png",
//   fireAni: "img/ani/fire_75x87x5.png",
//   bg: "img/bg.png",
//   ground: "img/ground.png",
//   score: "img/score.png",
//   hiscore: "img/hiscore.png",
//   cacti: "img/cacti.png",
//   fire: "img/fire.png",
//   flower: "img/flower.png",
//   spike1: "img/spike1.png",
//   spike2: "img/spike2.png",
//   spike3: "img/spike3.png",
//   tree: "img/tree.png",
//   chomper: "img/chomper.png"

IMAGES = game.getImages();

game.loadImageAndRun(function(){

	var S1 = game.newScene();
	S1.animation(IMAGES.flowerAni, 100, 170, 46, 52, 
      92, 104, 7, 5); // frame w,h, frame count, speed

	var S2 = game.newScene();
	S2.image(IMAGES.spike1, 100, 70, 50, 50);
	S2.image(IMAGES.spike1, 300, 170, 50, 50);
	S2.image(IMAGES.spike1, 500, 70, 50, 50);

	var S3 = game.newScene();
	S3.animation(IMAGES.fireAni, 400, 179, 37, 43,
    77, 87, 5, 5);

	var S4 = game.newScene();
	S4.animation(IMAGES.chomperAni, 250, 170, 37, 52, 
      75, 104, 7, 5);
	S4.animation(IMAGES.chomperAni, 300, 170, 37, 52, 
      75, 104, 7, 5);

	var S5 = game.newScene();
	S5.image(IMAGES.tree, 100, 150, 70, 70);
	S5.image(IMAGES.tree, 300, 150, 70, 70);
	S5.image(IMAGES.tree, 500, 150, 70, 70);

  var S6 = game.newScene();
  S6.animation(IMAGES.crabAni, 400, 177, 58, 45,
    117, 90, 6, 5);
  S6.animation(IMAGES.crabAni, 600, 177, 58, 45,
    117, 90, 6, 5);
  S6.setXSpeed(game.speed * 1.1);

  var S7 = game.newScene();
  S7.animation(IMAGES.birdAni, 400, 100, 56, 42,
    112, 84, 8, 5);
  S7.animation(IMAGES.birdAni, 500, 80, 56, 42,
    112, 84, 8, 5);
  S7.animation(IMAGES.birdAni, 600, 60, 56, 42,
    112, 84, 8, 5);
  S7.setXSpeed(game.speed * 1.2);
  game.newScene();// incase of error

  game.init();
  game.start();
  	
})
