// chomperAni: "img/ani/chomper_75x104x7.png",
// flowerAni: "img/ani/flower_92x104x7.png",
// birdAni: "img/ani/bird_112x84x8.png",
// crabAni: "img/ani/crab_117x90x6.png",
// fireAni: "img/ani/fire_77x87x5.png",

// cacti: "img/cacti.png",
// spike1: "img/spike1.png",
// spike2: "img/spike2.png",
// spike3: "img/spike3.png",
// tree: "img/tree.png",


IMAGES = game.getImages();

game.loadImageAndRun(function(){

	var S1 = game.newScene();
	S1.animation(IMAGES.flowerAni, 100, 170);
  S1.text("XRD的创意", 100, 100, "red");

	var S2 = game.newScene();
	S2.image(IMAGES.spike1, 100, 70);
	S2.image(IMAGES.spike2, 300, 150);

	var S3 = game.newScene();
	S3.animation(IMAGES.fireAni, 400, 179);

	var S4 = game.newScene();
	S4.animation(IMAGES.chomperAni, 250, 170);
	S4.animation(IMAGES.chomperAni, 300, 170);

	var S5 = game.newScene();
	S5.image(IMAGES.tree, 100, 170);
	S5.image(IMAGES.cacti, 300, 170);
	S5.image(IMAGES.tree, 500, 170);

  var S6 = game.newScene();
  S6.animation(IMAGES.crabAni, 400, 177);
  S6.animation(IMAGES.crabAni, 600, 177);

  var S7 = game.newScene();
  S7.animation(IMAGES.birdAni, 400, 100);
  S7.animation(IMAGES.birdAni, 500, 80);
  S7.animation(IMAGES.birdAni, 600, 60);

  game.newScene();// incase of error

  game.init();
  game.start();
  	
})
