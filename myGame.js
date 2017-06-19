/* Images Manager */
LL.addImages({
  guagua: "img/ani/run.png",
  bg: "img/bg.png",
  ground: "img/ground.png",
  cacti: "img/cacti.png",
  fire: "img/fire.png",
  flower: "img/flower.png",
  spike1: "img/spike1.png",
  spike2: "img/spike2.png",
  spike3: "img/spike3.png",
  tree: "img/tree.png",
  chomper: "img/chomper.png"
});

IMAGES = LL.getImages();

function main(){
	var S1 = new Scene();
	S1.image(IMAGES.flower, 200, 170, 50, 50);

	var S2 = new Scene();
	S2.image(IMAGES.spike1, 100, 70, 50, 50);
	S2.image(IMAGES.spike1, 300, 170, 50, 50);
	S2.image(IMAGES.spike1, 500, 70, 50, 50);

	var S3 = new Scene();
	S3.image(IMAGES.fire, 100, 170, 50, 50);
	S3.image(IMAGES.fire, 300, 170, 50, 50);

	game.addScene(S1);
	game.addScene(S2);
	game.addScene(S3);

  	game.init();
  	requestAnimationFrame(loop);
}

function loop(){
  game.loop();
  requestAnimationFrame(loop);
}

LL.loadingImageAndRun(main);
