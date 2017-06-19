/* Images Manager */
LL.addImages({
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

LL.loadImageAndRun(function(){

	var S1 = new Scene();
	S1.image(IMAGES.flower, 200, 170, 50, 50);

	var S2 = new Scene();
	S2.image(IMAGES.spike1, 100, 70, 50, 50);
	S2.image(IMAGES.spike1, 300, 170, 50, 50);
	S2.image(IMAGES.spike1, 500, 70, 50, 50);

	var S3 = new Scene();
	S3.image(IMAGES.fire, 300, 150, 70, 70);

	var S4 = new Scene();
	S4.image(IMAGES.chomper, 250, 170, 50, 50);
	S4.image(IMAGES.chomper, 300, 170, 50, 50);

	var S5 = new Scene();
	S5.image(IMAGES.tree, 100, 150, 70, 70);
	S5.image(IMAGES.tree, 300, 150, 70, 70);
	S5.image(IMAGES.tree, 500, 150, 70, 70);

	game.addScene(S1);
	game.addScene(S2);
	game.addScene(S3);
	game.addScene(S4);
	game.addScene(S5);

  	game.init();
  	game.start();
  	
})
