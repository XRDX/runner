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
  S1.text("XRD出品", 100, 100, "white");
  S1.animation(IMAGES.fireAni, 400, 179);

  var S2 = game.newScene();
  S2.animation(IMAGES.chomperAni, 250, 170);
  S2.animation(IMAGES.chomperAni, 300, 170);

  var S3 = game.newScene();
  S3.image(IMAGES.tree, 100, 170);
  S3.image(IMAGES.cacti, 300, 170);
  S3.image(IMAGES.tree, 500, 170);

  var S6 = game.newScene();
  S6.animation(IMAGES.crabAni, 300, 177);
  S6.animation(IMAGES.crabAni, 400, 177);
  S6.animation(IMAGES.crabAni, 500, 177);

  var S7 = game.newScene();
  S7.animation(IMAGES.birdAni, 300, 150);
  S7.animation(IMAGES.birdAni, 380, 130);
  S7.animation(IMAGES.birdAni, 460, 110);

  var S4 = game.newScene();
  S4.image(IMAGES.spike1, 100, 170);
  S4.image(IMAGES.spike2, 300, 90);
  S4.image(IMAGES.spike3, 500, 110);

  game.newScene();// incase of error

  game.init();
  game.start();
    
});
