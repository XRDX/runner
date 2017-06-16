var S1 = new Scene();
S1.fillRect(220, 200, 25, 50, "blue");

var S2 = new Scene();
S2.fillRect(320, 200, 30, 50, "green");

var S3 = new Scene();
S3.fillRect(220, 100, 50, 20, "red");
S3.fillRect(320, 200, 20, 50, "red");

game.addScene(S1);
game.addScene(S2);
game.addScene(S3);


function mainloop(){
  game.loop();
}

var timer;

function main(){
  game.init();
  if(timer){
    window.clearInterval(timer);
  }
  timer = window.setInterval(mainloop, 20);
}

loading(imageURLs, main);
