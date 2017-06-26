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
var game = new LL.RunnerGame();
var IMAGES = LL.getImages();


game.newScene()
  .animation(IMAGES.flowerAni, 200, 170)
  .text("XRD出品", 200, 100, "white")
  .animation(IMAGES.fireAni, 400, 179);

game.newScene()
  .animation(IMAGES.chomperAni, 250, 170)
  .animation(IMAGES.chomperAni, 300, 170);

game.newScene()
  .image(IMAGES.tree, 100, 170)
  .image(IMAGES.cacti, 300, 170)
  .image(IMAGES.tree, 500, 170);

game.newScene()
  .animation(IMAGES.crabAni, 300, 177)
  .animation(IMAGES.crabAni, 400, 177)
  .animation(IMAGES.crabAni, 500, 177);

game.newScene()
  .animation(IMAGES.birdAni, 300, 150)
  .animation(IMAGES.birdAni, 380, 130)
  .animation(IMAGES.birdAni, 460, 110);

game.newScene()
  .image(IMAGES.spike1, 100, 170)
  .image(IMAGES.spike2, 300, 90)
  .image(IMAGES.spike3, 500, 110);

game.init();
game.start();


