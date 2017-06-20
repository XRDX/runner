var URL = "";

game.addImages({
  guagua: URL + "img/ani/run.png",
  chomperAni: URL + "img/ani/chomper_75x104x7.png",
  flowerAni: URL + "img/ani/flower_92x104x7.png",
  bg: URL + "img/bg.png",
  ground: URL + "img/ground.png",
  score: URL + "img/score.png",
  hiscore: URL + "img/hiscore.png",
  cacti: URL + "img/cacti.png",
  fire: URL + "img/fire.png",
  flower: URL + "img/flower.png",
  spike1: URL + "img/spike1.png",
  spike2: URL + "img/spike2.png",
  spike3: URL + "img/spike3.png",
  tree: URL + "img/tree.png",
  chomper: URL + "img/chomper.png"
});

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
	S3.image(IMAGES.fire, 300, 150, 70, 70);

	var S4 = game.newScene();
	S4.animation(IMAGES.chomperAni, 250, 170, 37, 52, 
      75, 104, 7, 5);
	S4.animation(IMAGES.chomperAni, 300, 170, 37, 52, 
      75, 104, 7, 5);

	var S5 = game.newScene();
	S5.image(IMAGES.tree, 100, 150, 70, 70);
	S5.image(IMAGES.tree, 300, 150, 70, 70);
	S5.image(IMAGES.tree, 500, 150, 70, 70);

  	game.init();
  	game.start();
  	
})
