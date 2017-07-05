//动态图片障碍物类型
// chomper: 食人花
// flower: 太阳花
// bird: 小鸟
// crab: 螃蟹
// fire: 火

//静态图片障碍物类型
// cacti: 仙人掌
// spike1: 带钉子的方框1
// spike2: 带钉子的方框2
// spike3: 带钉子的方框3
// tree: 树

// ******************** Canvas 画布 ********************************************
canvas.width=600;
canvas.height=300;

var game = new LL.RunnerGame();

// ******************** 障碍物函数 ********************************************

game.newScene()
  .text("柏凯瑞爱爸爸",  120,  100,  "orange")
  .animation(crab,  50,  100)
  .animation(crab,  80,  100)
  .image(spike3,  250,  110);


game.newScene()
  .text("柏凯瑞爱妈妈",  200,  100,  "blue")
  .animation(bird,  150,  10)  
  .image(cacti,  370,  100);


game.newScene()
  .animation(spike3,  250,  170)
    .animation(fire,  300,  170);


game.newScene()
    //写文本的函数
  .text("吕思远出品",  200,  100,  "black")
    //画动态图的函数
  .animation(flower,  195,  170)  
  .animation(chomper,  430,  170)
  .animation(fire,  600,  180)
  //画静态图的函数
  .image(spike2,  250,  150)  ;  

game.newScene()
//写文本的函数
  .text("吕思远出品",  200,  100,  "black")
  //画静态图的函数
    .image(cacti,  30,  170)
    .image(spike3,  510,  110)
//画动态图的函数
    .animation(bird,  280,  10)
    .animation(crab,  280,  175)
    .animation(fire,  480,  180);

 game.newScene()
  //写文本的函数
 .text("吕思远出品", 200, 100, "black")
  //画动态图的函数
 .animation(flower, 195, 170) 
 .animation(chomper, 430, 170)
 .animation(fire, 600, 180)
 //画静态图的函数
 .image(spike2, 250, 150) ; 

game.newScene()
//写文本的函数
 .text("吕思远出品", 200, 100, "black")
 //画静态图的函数
  .image(cacti, 30, 170)
  .image(spike3, 510, 110)
//画动态图的函数
  .animation(bird, 280, 10)
  .animation(crab, 280, 175)
  .animation(fire, 480, 180);

  game.newScene()
    //写文本的函数  
    .text("ABC出品",  100,  100,  "orange")
    //画动态图的函数
  .animation(fire,  100,    180)
    .animation(bird,  440,    100)    
  //画静态图的函数
  .image(tree,  300,  170)  
.image(spike2,  590,  150);  


game.newScene()
    //写文本的函数  
    .text("ABC出品",  100,  100,  "orange")    
    //画静态图的函数
    .image(flower,  190,  150)
    .image(cacti,  370,  170)
    .image(spike2,  410,  150);

 game.newScene()
    //写文本的函数
  .text("Coco出品",  200,  100,  "red")
    //画动态图的函数
  .animation(chomper,  100,  170)
  .animation(flower,  250,  170)
.animation(bird,  400,  100)
.animation(fire,  590,  170);
  


game.newScene()
//写文本的函数
  .text("Coco出品",  200,  100,  "red")
//画静态图的函数
    
  .image(spike1,  140,  170)
  .image(spike1,  180,  170)
  .image(tree,  400,  170)
  .image(tree,  430,  170)
//画动态图的函数
    .animation(flower,  590,  180);


game.newScene()
  //写文本的函数
 .text("Frank出品", 200, 100, "green")
  //画动态图的函数
 .animation(flower, 200, 170)  
 //画静态图的函数
 .image(tree, 400, 170);  


game.newScene()
  .image(tree, 50, 170)
  .image(cacti, 300, 170)
  .image(spike3, 150, 10 )
  .animation(flower, 250, 170)
  .animation(bird, 320, 150)
  .animation(bird, 320, 100)
  .animation(fire, 450, 130)
  .animation(chomper, 570, 120);

 game.newScene()
    //写文本的函数
  .text("周瓒出品",  200,  100,  "blue")
    //画动态图的函数
.image(spike1,  190,  145)
.image(spike1,  230,  145)
.image(spike1,  270,  145)
  .animation(flower,  200,  180)    
.animation(flower,  250,  180)  
  //画静态图的函数
  .image(tree,  400,  170);    


game.newScene()
.text("周瓒出品",  200,  100,  "blue")
    .image(spike2,  100,  150)
    .image(cacti,  300,  170)
    .animation(crab,  500,  180);


game.newScene()
    //写文本的函数
  .text("曹正澔",  300,  200,  "green")
    //画动态图的函数
  .animation(crab,  100,  170)  
.animation(chomper,  200,  180)  
.animation(bird,  300,  30)  
.animation(fire,  400,  160)
.animation(flower,  500,  170)  
  //画静态图的函数
  .image(tree,  400,  170);    


game.newScene()
    .image(cacti,  100,  150)
    .image(spike1,  250,  160)
  
    .image(spike3,  450,  120)
    .image(tree,  600,  170);

 game.newScene()
    //写文本的函数
  .text("刘昕怡",  200,  100,  "yellow")
    //画动态图的函数
  .animation(chomper,  100,  170)    
  .animation(bird,  250,  100)  
  .animation(fire,  400,  170)  
  .animation(crab,  350,  170)  
  //画静态图的函数
  .image(spike3,  600,  120);    


game.newScene()
    .image(spike3,  150,  150)
    .image(spike1,  300,  170)
    .animation(bird,  500,  100);

game.newScene()
    .text("Elaine出品",  70,  100,  "orange")
    .animation(fire,  50,  180)
  .animation(fire,  90,  180)
.animation(bird,  190,  80)
.animation(crab,  320,  180)
.animation(flower,  580,  170);

game.newScene()
    .image(spike3,  250,  110)
    .image(spike1,  300,  170)
  .image(spike2,  500,  140);


game.newScene()
    //写文本的函数
  .text("jack出品",  200,  100,  "black")
    //画动态图的函数
  .animation(fire,  210,  170)    
  //画静态图的函数
  .image(spike1,  500,  170);    


game.newScene()
    .image(spike2,  100,  10)
    .image(cacti,  300,  170)
    .animation(crab,  500,  180);


game.newScene()
    //写文本的函数
  .text("蒋志敏出品",  200,  100,  "red")
    //画动态图的函数
  .animation(flower,  100,  100)    
  //画静态图的函数
  .image(tree,  100,  170)
.animation(fire,  200,  170)  
.image(spike1,  300,  50)
.image(spike1,500,  170)
.image(spike2,550,  1)
.animation(chomper,  600,  1);

game.newScene()
  .image(spike3,500,  10)
.animation(bird,  600,  1);


game.newScene()
    //写文本的函数
  .text("郑想出品",  200,  100,  "green")
    //画动态图的函数
  .animation(  crab,  200,  170)  
  .animation(  bird,  300,  50)
  //画静态图的函数
  .image(spike1,  600,  170)
.image(spike1,  600,  150)
.image(spike1,  600,  130);
  
game.newScene()
      .animation(flower,  100,  150)
      .animation(chomper,  300,  170);


game.newScene()
    //写文本的函数
  .text("黄天齐出品",  200,  100,  "white")
    //画动态图的函数
  .animation(chomper,  100,  170)  
.animation(bird,  200,  90)
  //画静态图的函数
  .image(spike2,  400,  120)
.animation(crab,  400,  90)
.animation(fire,  600,  180);    


game.newScene()
  .image(spike3,  200,  100)  
.image(spike1,  400,  120);


game.newScene()
    //写文本的函数
  .text("莲宝出品",  200,  30,  "pink")
    //画动态图的函数
  .animation(flower,  200,  170)    
  .animation(chomper,  20,  170)
  //画静态图的函数
  .image(tree,  70,  170)
.image(cacti,  400,  170);  


game.newScene()
  .text("莲宝出品",  200,  30,  "pink")
    .image(tree,  100,180)
    .image(cacti,  300,  170)
    .animation(crab,  500,  180);


game.newScene()
    //写文本的函数
  .text("严心怡出品",  200,  100,  "blue");
    //画动态图的函数
/*  .animation(flower,  200,  170)    
  //画静态图的函数
  .image(tree,  400,  170);    
*/
game.newScene()
    .animation(chomper,10,170)
    .animation(flower,50,170)
    .animation(crab,180,170)
    .image(spike3,350,10)
    .image(tree,450,170)
    .image(cacti,600,170);

game.newScene()
    .animation(bird,  100,  20)
    .animation(fire,  300,  170)
    .image(spike2,  500,  180)
    .image(tree,600,170);


game.newScene()
.text("Daniel",  200,  100,  "white")
  .animation(chomper,  100,  170)  
.animation(bird,  200,  100)
.animation(fire,  400,  170)  
  .image(spike2,  500,  150);

game.newScene()
    .animation(fire,  60,  180)
    .image(tree,  100,  170)
    .image(spike2,  300,150)
    .animation(bird,  420,  30)
.animation(flower,  550,  170);

game.newScene()
.animation(chomper,10,160)
.image(cacti,  100,  170)
.image(tree,  300,  170)
  .animation(crab,  500,  170);


game.newScene()
.text("Henry出品",  200,  100,  "white")
    .animation(bird,  60,  170)
    .image(spike2,  200,  145)
  .animation(flower,  380,  160)
    .image(tree,  600,  170);

game.newScene()
    .animation(chomper,  80,  170)
    .animation(crab,150,  170)
  .image(spike3,  390,  110)
    .animation(fire,  600,  160);


 game.newScene()
    .animation(fire,  100,  180)
    .animation(fire,  300,  180)
  .animation(bird,  400,  180)
    .animation(bird,  500,  150)
    .image(tree,  550,  170);

game.newScene()
    .image(spike1,  100,  170)  
    .image(spike2,  300,  145)  
    .animation(fire,  500,  180)
    .animation(bird,  550,  170);


game.newScene()
    //写文本的函数
  .text("thomas出品",  200,  100,  "blue")
    //画动态图的函数
  .animation(chomper,  200,  170)    
  //画静态图的函数
  .image(spike3,  400,  170);    


game.newScene()
    .image(spike2,  100,  150)
    .animation(fire,  300,  180)
    .image(tree,  500,  160);

game.newScene()

 

 .text("徐瑞涛", 100, 100, "white")

 

 .animation(fire, 150, 250)

 

 .image(crab, 200, 200)



.image(spike1, 200, 200);



game.newScene()

  

.text("徐瑞涛", 100, 100, "white")

 

 .animation(bird, 150, 150)

 

 .image(spike1, 250, 170);
game.newScene()

  //写文本的函数

 .text("raymond出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 200, 170)

 .animation(chomper,400,180)

 //画静态图的函数

 .image(spike1, 200, 170)  

 .image(spike2,500,180);

 game.newScene()

.animation(flower,300,120)  

  .animation(bird,550,100)

.image(tree,500,170)

.text("王宇轩出品", 200, 100, "YELLOW");



 game.newScene()

  .animation(crab,350,160);
game.newScene()

.text("oscar出品", 200, 100, "red")

  .animation(chomper, 100, 170)

  .animation(chomper, 300, 170)

  .animation(fire, 500, 180)

  .animation(flower, 600, 170) ;



game.newScene()

.text("oscar出品", 200, 100, "red")

  .animation(bird, 100, 150)

  .image(cacti, 300, 170)

  .image(spike3, 400,110)

  .image(tree, 500, 180);



game.newScene()

  //写文本的函数

 .text("李乐棋1", 300, 70, "red")

  //画动态图的函数

 .animation(bird, 320, 90)  

 //画静态图的函数

 .image(cacti,540, 170);  





game.newScene()

 .text("李乐棋2", 300, 70, "yellow")

  .image(spike1, 100, 150)

  .image(tree, 540, 170)

  .animation(chomper, 400, 180);
game.newScene()

  //写文本的函数

 .text("方馨", 200, 90, "black")

  //画动态图的函数

 .animation(bird, 200, 150)  

 //画静态图的函数

 .image(spike2, 400, 140);  





game.newScene()

  .text("方馨", 200, 90, "black")

  .image(cacti, 90, 160)

  .image(tree, 300, 170)

  .animation(chomper, 500, 180);
game.newScene()

  //写文本的函数

 .text("李景初出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 200, 180)  

 //画静态图的函数

 .image(spike2, 400, 150);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

  //写文本的函数

 .text("汪珊以出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 100, 180)  

.animation(flower, 250, 180)  

.animation(bird, 400, 80)  

.animation(crab, 550, 180)

.animation(bird, 560, 100)

 //画静态图的函数

 .image(spike2, 700, 300);

  





game.newScene()

 .image(spike3, 100, 110)

.image(spike2, 300, 90)

  .image(tree, 500, 180)

  .animation(flower, 600, 170);

game.newScene()

  //写文本的函数

 .text("张艺严小朋友出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .animation(bird, 100, 100)

  .image(spike2, 300, 170)

  .animation(fire, 500, 180);

game.newScene()

  //写文本的函数

 .text("胡弈小朋友出品", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 100, 170)  

.animation(crab, 300, 100) 

 //画静态图的函数

 .image(cacti, 500, 170);  





game.newScene()

  .animation(bird, 100, 100)

  .image(spike3, 300, 110)

  .image(tree, 500, 180);
game.newScene()

  //写文本的函数

 .text("RC出品", 250, 16, "BLUE")

  //画动态图的函数

 .animation(bird, 200, 13)

.animation(fire, 200, 150) 

 //画静态图的函数

 .image(spike3, 400, 110);  





game.newScene()

.text("RC出品", 250, 16, "BLUE")

  .image(spike3, 10, 150)

  .image(cacti, 300, 100)

.image(cacti, 300, 160)

.image(tree, 400, 150)

.image(tree, 400, 110)

  .animation(crab, 500, 180);

// ******************** 障碍物函数 ********************************************



game.newScene()

  //写文本的函数

 .text("louie出品", 200, 100, "white")

  //画动态图的函数

  

.animation(flower, 330, 190)

.animation(bird, 330, 0) 

.animation(fire, 400, 170) 

.animation(fire, 420, 170) 

 

.animation(fire, 440, 170) 

.animation(bird, 650, 100) 

.animation(chomper, 150, 170)  

 //画静态图的函数

 .image(spike1, 150, 70);

game.newScene()

  .image(spike3 , 750, 150)

.image(spike1 , 1120, 170)



.animation(fire, 920, 170)



.animation(chomper, 1020, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("kimi出品1", 300, 100, "green")

  //画动态图的函数

 .animation(chomper, 200,100) 

.animation(fire, 300,180)

 //画静态图的函数

.image(spike1, 100,100)

.animation(bird, 400,100); 





game.newScene()

 .text("kimi出品2", 300, 100, "green")

  .image(spike3, 200, 100)

  .image(tree, 350, 30)

.animation(fire, 200, 180)

.animation(chomper, 350, 80)

.animation(bird, 500, 170)

  .animation(crab, 100, 100);
game.newScene()

.text("仇煜皓出品", 200, 100, "white")

   .animation(fire, 100, 180)

   .animation(bird, 300, 170)

   .image(tree, 400, 170)

   .animation(chomper,450 , 180)

   .animation(flower,470 , 180);



game.newScene()

.text("仇煜皓出品", 200, 100, "white")

   .animation(flower, 220, 180)

   .animation(chomper, 100, 170)

   .animation(fire, 600, 170)

   .image(tree,350 , 180)

   .animation(bird,500 , 180)

   .animation(flower,470 , 180);
game.newScene()

  //写文本的函数

 .text("alex出品1", 300, 100, "white")

  //画动态图的函数

 .image(spike2, 100, 150)  

 //画静态图的函数

 .image(spike3, 300, 10)

.animation(bird, 400, 180)

.animation(bird,450, 160)

.animation(bird, 500, 140);  





game.newScene()

.text("alex出品2", 300, 100, "white")

  .image(tree, 100, 170)

  .animation(bird, 300, 10)

  .animation(crab, 300, 180)

  .animation(crab, 350, 180)

  .animation(crab, 400, 180)

  .image(spike2, 450, 150);


game.newScene()

  //写文本的函数

 .text("vincent出品", 200, 150, "yellow")

  //画动态图的函数

 .animation(chomper, 25, 170) 

.animation(bird, 200, 100)

.animation(flower, 200, 60)

 //画静态图的函数

 .image(tree, 325, 170);  





game.newScene()

  .animation(fire, 100, 180)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



//game.init();

//game.testRun();

game.newScene()

  //写文本的函数

 .text("ERIC出品", 200, 100, "BLUE")

  //画动态图的函数

 .animation(fire, 200, 180)  

 //画静态图的函数

 .image(spike3, 350, 110)

 .image(cacti,520, 180);  





game.newScene()

  .text("ERIC出品", 200, 100, "BLUE")

  .animation(fire, 100, 180)

  .animation(bird, 250, 70)

  .animation(crab, 450, 180)

  .image(spike1, 350, 30)

  .image(cacti, 550, 180)

  .animation(bird,600, 70);
game.newScene()

 .text("闵梓沁", 200, 200, "white")

  .animation(flower, 100, 170)

  .image(spike2, 350, 145)

  .animation(crab, 600, 180);

game.newScene()

 .text("闵梓沁", 200, 200, "white")

  .animation(bird, 300, 180)

  .image(tree,350, 170)

  .image(cacti, 600, 170);
game.newScene()

  //写文本的函数

 .text("汤梓晗出品", 200, 100, "pink");

  //画动态图的函数

 /*.animation(flower, 300, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .image(tree, 100, 150)

  .animation(flower, 300, 170)

  .image(spike3, 400, 110)

.animation(bird,540,80);



game.newScene()

.image(cacti,100,150)

.image(tree,220,170)

.image(spike1,160,170)

.animation(fire,400,170)

.animation(chomper,540,30)

.image(spike2,340,2)

.animation(fire,600,170);
game.newScene()

  //写文本的函数

 .text("bob出品", 250, 50, "blue")

  //画动态图的函数

 .animation(fire, 450, 180)  

 //画静态图的函数

 .image(cacti, 600, 170);  





game.newScene()

  .text("bob出品", 200, 100, "white")

  .animation(chomper, 200, 180)

  .animation(bird, 500, 100)

  .animation(fire, 350, 180)

  .animation(crab, 600, 180);
game.newScene()

  .text("ywy鍑哄搧", 200, 100, "white")

  .image(spike2, 100, 150)

  .image(cacti, 100, 170)

  .animation(fire, 599, 20)

  .animation(crab, 500, 180);



game.newScene()

  .image(spike1, 200, 150)

  .image(cacti, 50, 170)

  .animation(bird, 600, 30)

.animation(crab, 500, 180);
game.newScene()

 .text("Terry", 200, 100, "white")

  .image(spike1, 100, 0)

.image(spike1, 100, 180)

  .image(cacti, 200, 170)

 .animation(chomper, 400, 180)

.animation(bird, 550, 150)

.animation(fire, 600, 180);



game.newScene()

 .text("Terry", 200, 100, "white")

 .image(spike1, 170, 170)

.image(spike1, 200, 170)

.animation(fire, 320, 180)

.animation(bird, 500, 50)

 .animation(flower,600, 180);
game.newScene()

.text("Diego出品", 200, 100, "white")

  .image(spike3, 100, 100)

.animation(bird, 320, 60)

.animation(bird, 350, 60)

  .animation(chomper, 500, 180);

  



game.newScene()

.text("Diego出品", 200, 100, "white")

.image(tree, 60, 170)

.animation(flower, 200,170)

.animation(crab, 430, 170)

  .animation(fire, 600, 180);
game.newScene()

  .text("chengxiaosong", 100, 100, "white")

  .animation(chomper, 200, 180)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180);



game.newScene()

  .text("chengxiaosong", 200, 100, "white")

  .image(spike3, 500, 110)

  .image(spike2, 250, 145)

  .image(spike1, 100, 170);

game.newScene()

 

   .animation(bird, 100, 20)

.animation(chomper, 400, 170)   

   .image(cacti, 200, 170)

  .image(spike1, 550, 30)

  .animation(crab, 700, 180);

  

 

game.newScene()

  .animation(fire, 95, 180)

.animation(bird, 200, 0)

 .image(tree, 400, 170)

 .image(spike1, 500, 170)

 .animation(crab, 600, 180);


game.newScene()

  //写文本的函数

 .text("martin出品", 200, 100, "green")

  //画动态图的函数    

 .animation(fire, 100, 180)

 //画静态图的函数

 .image(spike3, 400, 150); 





game.newScene()

  .image(spike2, 70, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);





game.newScene()

   .animation(flower,300,170)

   .image(cacti,600,170);
game.newScene()

  .animation(chomper, 100, 180)

  .animation(fire, 300, 180)

  .image(spike3, 400, 110);



game.newScene()

.text("brian", 200, 100, "white")

  .animation(bird, 300, 180)

  .animation(bird, 300, 140)

  .animation(bird, 300, 110);
game.newScene()

  

//写文本的函数



 .text("谢其言出品", 200, 100, "blue")

 

 //画动态图的函数

 .animation(flower, 200, 170) 

 .animation(bird, 300, 50)



.animation(fire, 406,150)

 

//画静态图的函数



.image(cacti, 150, 170)



 .image(tree, 400, 170); 

 





game.newScene()



.text("谢其言出品", 200, 100, "blue")



  .image(spike2, 100, 150)



.animation(crab, 96, 120)



  .image(cacti, 300, 170)



.animation(fire, 490, 160)



.animation(fire, 530, 160)



  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("steven出品", 230, 150, "black")

  //画动态图的函数

 .animation(fire, 160  , 180)  

  .animation(bird, 330 , 90)  

.animation(bird, 370   , 90)

.animation(crab, 570   , 170)

 //画静态图的函数

 

 .image(spike1, 200 , 170)

.image(cacti, 470 , 170);





game.newScene()

  .image(spike3, 250, 110)

  .image(spike1, 450, 170)

.image(spike2, 500, 140)

  .animation(flower, 570, 170);




game.newScene()

  .image(tree, 50, 150)

  .animation(chomper, 200, 150)

  .image(spike2, 350, 130)

  .animation(fire,400,170)

  .animation(flower,600,5)

  .image(cacti,600,180);



game.newScene()

  .image(spike3,25,110)

  .animation(crab,125,25)

  .image(spike3,425,110)

  .animation(fire,525,30);
game.newScene()

  

//写文本的函数

 

.text("罗宇涵出品", 200, 100, "white")

 

//画动态图的函数



 .animation(flower, 200, 170) 

 

.animation(flower, 250, 170) 



.animation(fire, 305, 5)



.animation(bird, 400, 5)



.animation(bird, 100, 15)



.animation(bird, 300, 15)



 //画静态图的函数



.animation(fire, 405, 160)



 .image(tree, 400, 170);

  





game.newScene()



.text("罗宇涵出品", 200, 100, "white")

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)



.image(spike2, 400, 5)

 

 .animation(crab, 500, 180)



.animation(crab, 550, 180);
game.newScene()

  //写文本的函数

 .text("刘凯瑞出品", 200, 50, "blue")

  //画动态图的函数

 .animation(crab, 200, 180)  

.animation(chomper,500 , 180) 

 .animation(fire, 100, 180)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

   .text("刘凯瑞出品", 200, 50, "blue")

  .image(spike2, 100, 150)

  .image(cacti,20 , 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("兰郑溪出品", 600, 100, "white")

  //画动态图的函数

 .animation(flower, 300, 200)

.animation(chomper, 600, 50) 

.animation(bird, 350, 30) 

//画静态图的函数

  .image(tree, 400, 170)

.image(spike2,300, 170);  





game.newScene()



.animation(crab, 300, 10)

.image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("ella出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 50, 170)  

 //画静态图的函数

 .image(cacti, 300, 170);  





game.newScene()

  .image(tree, 50, 20)

  .animation(crab, 400, 180);

game.newScene()

 

.image(spike2, 100, 150)



.image(spike3, 400, 100)

 

.image(cacti, 100, 170)

 

.animation(crab, 600, 180)



.animation(bird, 200, 20)



.animation(fire, 400, 120)



.animation(fire, 200,2);



game.newScene()

 

.image(spike2, 100, 150)

 

.image(spike1, 300, 15)

  

.image(cacti, 300, 170)



 .image(tree, 200, 10)

  

.animation(crab, 500, 180)



 .animation(fire, 150, 180)



 .animation(chomper, 400, 18)



 .animation(fire, 500, 203);

game.newScene()

  .text("出品", 200, 100, "white")

  .image(tree, 100, 170)

  .image(spike3, 200, 110)

  .image(spike1, 250, 170)

  .animation(fire, 450, 180);



game.newScene()

  .text("出品", 200, 100, "white")

  .image(cacti, 300, 170)

  .animation(chomper, 530, 170)

  .animation(crab, 590, 180);



game.newScene()

  .text("出品", 200, 100, "white")

  .image(cacti, 300, 170)

  .animation(chomper, 530, 170)

  .animation(crab, 590, 180);



game.newScene()

  .text("出品", 200, 100, "white")

  .image(spike2, 70, 150)

  .image(spike1, 300, 170)

  .animation(bird, 400, 120);
game.newScene()

  //写文本的函数

 .text("jack出品1", 200, 100, "green")

  //画动态图的函数    

 .animation(fire, 100, 180)

.image(tree, 400, 170)

 //画静态图的函数

 .animation(chomper, 500, 10); 

 





game.newScene()

 .text("jack出品2", 200, 100, "green")

 .animation(bird, 80, 100)

 .animation(bird, 80, 140)

.animation(bird, 80, 180)

.animation(fire, 300, 180)

.animation(fire, 300, 150)

  .animation(chomper, 400, 170)

.image(spike2, 600, 140);

game.newScene()

  .text("吕雨琦宝宝", 100, 70, "yellow")

 

 .animation(flower, 50, 170)



  .image(spike3, 200, 50);





game.newScene()

  

.text("谢轶萍妈妈", 200, 100, "black")

 

 .animation(flower, 0, 170)



  .image(fire, 30, 130)

 

 .animation(flower, 60, 100)

 

 .image(tree, 150, 170);
game.newScene()

.text("刘奎元出品", 300, 50, "yellow")

  .animation(fire, 100, 160)

  .image(tree, 400, 160)

  .animation(bird, 500, 180);



game.newScene()

.text("刘奎元出品", 300, 50, "yellow")

  .animation(chomper, 356, 140)

  .image(spike2, 300, 140)

  .image(cacti, 400,150);
game.newScene()

.text("杨泽垚出品", 200, 70, "blue")

  .animation(crab, 100, 100)

  .image(tree, 300, 99)

  .animation(bird, 500, 97);



game.newScene()

.text("杨泽垚出品", 200, 70, "blue")

  .animation(flower, 100, 170)

  .animation(fire, 300, 170)

  .animation(chomper, 500, 100);
game.newScene()

  //写文本的函数

 .text("高欣阳", 300, 200, "red")

  //画动态图的函数

 .animation(fire, 100, 170)  

 //画静态图的函数

 .image(spike2, 400, 170);  





game.newScene()

  .image(spike3, 100, 150)

  .image(tree, 200, 170)

  .animation(chomper, 400, 180);
game.newScene()

  //写文本的函数

 .text("邱郁宸", 400, 100, "red")

  //画动态图的函数

 .animation(crab, 150, 170) 

 

.animation(crab, 90, 170) 

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .image(tree, 100, 150)

.image(tree, 90, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("林思涵", 250, 150, "red")

  //画动态图的函数

 .animation(crab, 100, 170)  

 //画静态图的函数

 .image(spike2, 400, 170);  





game.newScene()

 .animation(bird, 120, 80)

  .image(cacti, 300, 200)

  .image(cacti, 500, 170);

game.newScene()

.text("zyp出品", 300, 50, "green")

  

.animation(crab, 56,150)

 

 .animation(fire, 180, 160)

 

 .image(cacti, 500, 150);







game.newScene()



.text("zyp出品", 300, 50, "green")

  

.image(tree, 100, 150)

 

 .animation(bird,400, 120)



  .image(spike2, 190, 100);


// ******************** 障碍物函数 ********************************************



game.newScene(1)

  //写文本的函数

 .text("赵滢出品",80, 100, "blue")

  //画动态图的函数 

 .animation(crab,80, 170)

 .animation(flower,280, 170) 

 .animation(bird,280, 10) 

 .animation(fire,600,170) 

 //画静态图的函数

 .image(spike2, 340,140)

 .image(cacti, 440,170) 

 .image(cacti, 480,170); 





game.newScene()

  .image(tree,100, 170)

  .image(tree, 140, 170)

  .image(spike3, 300, 110)

  .animation(chomper, 450, 170) 

  .animation(crab,550, 170)

  .animation(bird,550, 10);

game.newScene()

  .image(spike2, 100, 150)

  .animation(flower, 300, 170)

  .animation(chomper, 500, 170)

  .image(tree,360,150)

  .animation(crab,430,180);



game.newScene()

  .text("william",200,100,"grey")

  .animation(bird, 100, 140)

  .animation(fire, 300, 170)

  .image(cacti, 500, 170);
 game.newScene()

.text("Allen出品", 500, 200, "white")

.image(tree, 100,170)

 .image(spike2, 270,90)

 .animation(fire, 500, 180);

game.newScene()

.text("Allen出品", 500, 200, "white")

.animation(chomper, 300, 170)

.animation(flower, 500, 170)

.image(spike3, 100,110);
game.newScene()

.text("zss出品", 200, 100, "white")

.animation(bird, 150, 10)

.animation(chomper, 150, 170)

.image(cacti, 190, 170)

.animation(spike1, 256, 30);

game.newScene()

  .animation(fire, 100, 170)

  .animation(bird, 150, 0)

  .image(tree, 200, 170) 

  .image(spike3, 300, 170);
game.newScene()

.text("Justin出品", 200, 100, "white")

  .animation(fire, 0, 180)

  .animation(bird, 300, 160)

  .image(spike1, 550, 150);

game.newScene()

.text("Justin出品", 200, 100, "white")

  .animation(chomper, 300, 170)

.image(spike2, 500, 90);
game.newScene()
//写文本的函数
.text("梁予凡出品", 200, 40, "orange")

 

 //画动态图的函数

  

.animation(crab, 200, 180)  

 .animation(bird, 100, 50)

 

.image(spike3, 450, 110)

 

 .image(spike1, 450, -10)

 

//画静态图的函数

 

 .image(tree, 400, 170); 

 





game.newScene()

  

.text("梁予凡出品", 200, 40, "orange")

 

 .animation(chomper, 65, 175)

  .animation(chomper, 100, 175)

 

 .animation(flower, 300, 175)

 

.animation(bird, 530, 100)

  

.image(cacti, 350, 175);
game.newScene()

  //写文本的函数

 .text("顾琢之出品", 200, 100, "PURPLE")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);





game.newScene()

  .image(cacti, 100, 150);

game.newScene()

  //写文本的函数

 .text("selina出品", 200, 100, "black")

  //画动态图的函数

 .animation(chomper, 30, 170) 

 .animation(bird, 380, 100)  

 .animation(fire, 550, 170)  

 //画静态图的函数

 .image( spike1, 200, 170)

 .image( spike1, 240, 170)

 .image(tree, 500, 170); 



game.newScene()

  //写文本的函数

 .text("selina出品", 200, 100, "black");

game.newScene()

  //画静态图的函数

  .image(spike3, 250, 150)

//画动态图的函数

  .animation(fire, 200, 180)

  .animation(chomper, 420, 180)

  .animation(bird, 580, 100)

  .animation(crab, 700, 180);

game.newScene()

  //写文本的函数

 .text("葛泓睿出品", 200, 100, "green")

       

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .image(spike1, 100, 150)

  .image(tree, 300, 170)

  .animation(flower, 500, 180);

game.newScene()

  

.image(cacti, 100, 50)

 

.image(tree, 200, 18)

  

.image(cacti, 300, 170)

 

 .animation(bird, 500, 18)



.animation(bird, 100, 100);



game.newScene()

 

 .image(spike3, 20, 170)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 600, 180)



.animation(fire, 500, 170)



 .animation(flower, 450, 20);

game.newScene()

  //写文本的函数

 .text("zhuym出品", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 200, 170)  

 .animation(fire, 250, 170) 

 //画静态图的函数

  .image(tree, 500,30)

 .image(tree, 500,100);  

game.newScene()

  .image(spike1, 100, 150)

  .image(spike1, 140, 150)

  .animation(flower, 160, 170);

game.newScene()

.image(cacti,400,80);

game.newScene()

.text("Xinyi出品", 200, 100, "white")

  .image(cacti, 100, 170)

.animation(chomper, 130, 170)

  .image(spike2, 300, 140)

  .image(tree, 500, 160);



game.newScene()

  .animation(fire, 100, 170)

.animation(crab, 130, 170)

  .image(spike1, 300, 140)

.animation(flower, 453, 170);
game.newScene()
.text("献给三连跳专家——徐浩伦，李乐琪，谢其言，我的助手——高思敏，汪玥莹",150,50,"green")

  //画动态图的函数

 .animation(bird, 200, 170)  

 .animation(bird,215,155)

.animation(bird,230,140)

//画静态图的函数

.image(spike1,400,5); 



  





game.newScene()

 

  .animation(fire, 300, 170)

  .animation(crab,580,180)



.animation(chomper,250,150)

.animation(fire,600,5)

.image(spike3,450,150)

.animation(flower, 500, 180);
game.newScene()

.text("鲁俊成", 200, 100, "white") 

  .animation(chomper, 250,160)

  .image(cacti, 300,160)

  .animation(bird, 550, 180)

  .image( tree,200,170);

game.newScene()

.text("鲁俊成", 150, 100, "white") 

  .animation(fire, 399,160)

  .animation(bird, 600, 180)

  .image( spike3,190,110);

game.newScene()

.text("鲁俊成", 150, 100, "white") 

  .image(spike1, 200160)

  .image(spike2, 600, 145)

  .image( spike3,190,110);

game.newScene()

  //写文本的函数

 .text("aa出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 50, 190)  

 //画静态图的函数

 .image(spike3, 200, 150);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  .text("张誉诚", 200, 100, "yellow")

 

.animation(chomper, 240, 160)

 

 .image(spike3, 100, 150);





game.newScene()

 

 .animation(fire, 130, 130)

 

 .animation(bird, 300, 170);

game.newScene()

 

 .text("张誉诚", 200, 100, "white")
 .animation(flower, 150, 120)
 .image(spike3, 400, 200);

game.newScene()
.text("张誉诚", 200, 100, "white")
 .animation(flower, 200, 170)
 .image(cacti, 140, 150);
game.newScene()
 .text("吕雨萱", 150, 90, "blue")
.animation(crab, 180, 130)
 .image(cacti, 111, 180);

game.newScene()
 .text("吕雨萱", 200, 100, "pink")
 .animation(fire, 120, 170)
 .image(spike2, 300, 130);

game.newScene()

  //写文本的函数

 .text("施楷量出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(spike2, 400, 145)  

 .image(tree, 550, 170);

game.newScene()

  .animation(bird, 150, 140)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180);

game.newScene()

  //写文本的函数

 .text("陈妙言出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170)

.animation(crab, 400, 170)

 //画静态图的函数

 .image(cacti, 500, 170);  





game.newScene()

  .animation(chomper, 100, 170)

  .image(tree, 300, 170)

   .animation(bird, 500, 180);

game.newScene()

 .text("Gavin出品", 200, 100, "green")

  .animation(flower, 200, 170)

  .animation(fire, 450, 170)

  .image(spike2, 400, 170)

  .image(spike1, 350, 170);





game.newScene()

  .animation(bird, 250, 170)

  .animation(chomper, 300, 170);
game.newScene()

  //写文本的函数

 .text("louie出品", 200, 100, "black")

 //画动态图的函数

 .animation(bird, 200,10 )

.animation(fire,200,170)



 //画静态图的函数

 .image(spike3, 400, 110)

.image(spike1,1,175);



game.newScene()

.animation(chomper, 100, 150)

  .animation(flower, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Shane出品", 300, 50, "blue")

  //画动态图的函数

 .animation(bird, 300, 100) 

 .animation(chomper, 300, 170)

.animation(crab, 550, 170)

 //画静态图的函数

 .image(spike3, 50, 110);  





game.newScene()

 //写文本的函数

 .text("Shane出品", 300, 50, "blue")

 //画静态图的函数

  .image(spike1, 550, 5)

 

 //画动态图的函数

  .animation(chomper, 300, 170)

 .animation(fire, 550, 180)

 .animation(flower, 150, 100);
game.newScene()

  .animation(crab, 20, 170)

  .image(cacti, 140 , 170)

.image(spike3, 380 , 110)

  .image(tree, 530, 180);



game.newScene()

  .animation(chomper, 100, 170)

  .animation(fire, 300, 170)

  .animation(bird, 450, 120)

 .animation(flower, 600, 150);
game.newScene()

 

 //写文本的函数



 .text("周朗出品", 200, 100, "green")



  //画动态图的函数



 .animation(chomper, 200, 170)



.animation(fire,100,150)



.animation(bird,200,140)



 //画静态图的函数



 .image(spike3,500,115)



.image(tree, 400, 170)



.image(cacti,400,130);









game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 500, 180)



.animation(fire,350,180);
game.newScene()

  .animation(chomper, 15,100)

  .image(cacti, 300, 170)

  .animation(fire, 20, 180);

game.newScene()

  .animation(chomper, 15,100)

  .image(cacti, 300, 170)

  .animation(fire, 20, 180);
game.newScene()

  .animation(chomper, 100, 170)

  .image(spike2, 350, 145)

  .animation(flower, 570, 170);

game.newScene()

  .animation(crab, 200, 175)

  .image(cacti, 400, 170)

  .animation(bird, 590, 150);

game.newScene()

  .animation(fire, 135, 177)

  .image(spike3, 400, 110)

  .animation(chomper, 600, 170);
game.newScene()

.animation(fire, 100, 180)

.animation(chomper, 130, 170)

.animation(chomper, 130, 180)

.animation(flower, 140, 170)

 .image(spike3, 400, 110)

.image(spike2, 370, 150)

.image(spike1, 340, 175)

 .animation(crab, 450, 180);



game.newScene()

.image(tree, 100, 170)

.image(cacti, 110, 170)

.animation(bird, 260, 80)

.animation(chomper, 265, 45);
game.newScene()

  

.image(spike3, 50, 110)

  

.animation(chomper, 250, 170);

game.newScene()

 

 .text("徐瑞涛", 100, 100, "white")

 

 .animation(fire, 150, 250)

 

 .image(crab, 200, 200)



.image(spike1, 200, 200);



game.newScene()

  

.text("徐瑞涛", 100, 100, "white")

 

 .animation(bird, 150, 150)

 

 .image(spike1, 250, 170);
game.newScene()

  //写文本的函数

 .text("Thomas出品", 100, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 260, 170) 

 .animation(fire, 300, 170)



 //画静态图的函数

 .image(cacti, 500, 170)

.image(spike2, 540, 150);



game.newScene()

 //写文本的函数

 .text("Thomas出品", 100, 100, "yellow")

 //画静态图的函数

  .image(spike3, 550, 110)

 

//画动态图的函数

  .animation(flower, 150, 150)

  .animation(bird, 350, 100);
game.newScene()

  //写文本的函数

 .text("张安昊出品", 200, 100, "green")

  //画动态图的函数

 .animation(chomper, 100, 100)

.animation(flower, 200, 170) 

.animation(bird, 400, 50) 

 //画静态图的函数

 .image(spike3, 500,60)  

.image(tree, 600,100);  



game.newScene()

  .image(spike2, 100, 150)

  .animation(crab, 500, 180);
game.newScene()

 .text("贝贝出品", 200, 100, "pink")

  .animation(chomper, 100, 150)

  .animation(bird, 300, 170)

  .animation(flower, 500, 180)

  .animation(fire, 550, 180);



game.newScene()

 .text("贝贝出品", 200, 100, "pink")

  .animation(crab, 200, 150)

  .image(tree, 300, 170)

  .image(cacti, 500, 180);
game.newScene()

  

//写文本的函数

 

.text("JAMES出品", 200, 100, "yellow")

  

//画动态图的函数

 

.animation(crab, 50, 170)  

 

//画静态图的函数

 

.image(cacti, 250, 170)

 

.image(spike2,450,145)

 

.animation(fire,650,170); 

 





game.newScene()

  

.animation(flower, 40,170)

  

.image(spike3, 250, 110)

  

.image(tree, 450, 170)

  

.animation(bird,630,100);



 





game.newScene()

  

.animation(chomper, 200,170)

  

.animation(chomper, 250, 170)

 

 .animation(crab, 400, 170);

game.newScene()

  //写文本的函数

 .text("赵韬博出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 140, 180) 

 .animation(bird, 240, 80) 

.animation(flower, 420, 170)

.animation(chomper, 460, 170)

.animation(bird, 460, 120); 

 //画静态图的函数

 





game.newScene()

 .text("赵韬博出品", 200, 100, "blue")

  .image(spike2, 180, 150)

.image(spike2, 180, 90)

.image(spike1, 230, 170)

.image(spike1, 260, 130)

.image(tree, 420, 170)

.image(tree, 470, 170)

.image(tree, 560, 170)



  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("赵韬博出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 140, 180) 

 .animation(bird, 240, 80) 

.animation(flower, 420, 170)

.animation(chomper, 460, 170)

.animation(bird, 460, 120); 

 //画静态图的函数

 





game.newScene()

 .text("赵韬博出品", 200, 100, "blue")

  .image(spike2, 180, 150)

.image(spike2, 180, 90)

.image(spike1, 230, 170)

.image(spike1, 260, 130)

.image(tree, 420, 170)

.image(tree, 470, 170)

.image(tree, 560, 170)



  .animation(crab, 500, 180);




game.newScene()

  //写文本的函数

 .text("金昊出品", 200, 100, "white")

  //画动态图的函数

 .animation(bird, 50, 150) 

.animation(chomper, 100, 170)

    .animation(crab, 350, 170)

               .animation(fire, 500, 140)

.animation(flower, 650, 170)

.animation(crab, 700, 170);

 //画静态图的函数

//.image(tree, 400, 170);  





game.newScene()

  .image(tree, 100, 150)

  .image(spike1, 150, 140)

 .image(spike2, 350, 150) 

.image(spike3, 450, 130)

//.image(spike1, 600, 100)

  .animation(crab, 670, 170);

game.newScene()

  //写文本的函数

 .text("Alvin出品", 300, 200, "gold")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(cacti, 460, 170)

.image(spike1, 400, 170);  





game.newScene()

  .image(spike2, 360, 140)

   .animation(bird, 109, 120)

.animation(bird, 100, 140);

game.newScene()

  .text("lrycjn", 200, 200, "black")

  .animation(crab, 100, 110)

  .animation(fire, 100, 110)

  .image(spike3, 500, 140);

game.newScene()

  .animation(chomper, 100, 170)

  .animation(bird, 300, 170)

  .image(cacti, 500, 170);

game.newScene()

  .image(tree, 10, 170)

  .animation(fire,50 , 170)

  .animation(bird,300, 170)

.animation(flower,475,170)

.image(spike3,45,90);

game.newScene()

  .image(spike2, 50, 145)

  .image(spike3, 150, 110)

  .animation(fire, 85, 110)

  .animation(bird,300,100)

  .image(tree,510,120)

  .animation(chomper,530,90);
game.newScene()

  //写文本的函数

 .text("董佳琦出品", 400, 20, "pink")

  //画动态图的函数

 .animation(flower, 203,140 )

.animation(bird, 400,120 ) 

 .animation(fire, 405,150 ) 



 //画静态图的函数

.image(cacti, 200, 170)

 .image(tree, 400, 170);  





game.newScene()

.text("董佳琦出品", 400, 20, "pink")

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 490, 150)

.animation(chomper, 500, 180);
game.newScene()

  //写文本的函数

 .text("周祎杨出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 400, 170)  

 .animation(bird, 250, 40)

//画静态图的函数

 .image(tree, 100, 170);  





game.newScene()

  .image(cacti,100,170)

  .animation(chomper, 540, 170)

.animation(flower,300,170);
game.newScene()

  //写文本的函数

 .text("Mendes", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

game.newScene()



  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

.image(spike3,200,170)



.animation(bird,300,20);

game.newScene()

  .text("Yoyo,Leo", 200, 100, "green")

  .animation(flower, 100, 169)

  .animation(fire, 300, 180)

  .animation(chomper, 500, 180);

  

game.newScene()

  .animation(chomper, 100, 169)

  .animation(crab, 300, 178)

  .image(cacti, 500, 170);

  

game.newScene()

  .animation(bird, 100, 169)

  .image(spike2, 300, 180)

  .image(tree, 400, 180)

  .animation(bird,450,0)

  .animation(chomper,475,178)

.image(tree,500,250);

game.newScene()

  .image(spike3, 100, 135)

  .image(tree, 300, 180)

  .animation(bird, 500, 180)

  .image(spike1,560,179)

  .animation(bird,600,300);
game.newScene()

  //写文本的函数

 .text("沈靖轩出品", 200, 100, "blue");

 /* //画动态图的函数

 .animation(flower, 600, 30)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 100, 170)

  .animation(bird, 300, 170)

   .animation(bird, 450, 170)

 .animation(bird, 600, 20);



game.newScene()

  .image(spike3,100,5)

  .image(spike1,100,100)

  .image(cacti,200,170)      

  .animation(fire,300,170)

  .image(spike3,600,110)

  .image(spike1,600,70);
game.newScene()

.text("杨浩仁出品", 259, 80, "black")

  .image(cacti, 100, 170)

  .image(cacti, 130  , 170)

  .image(spike2, 440, 145)

 .image(spike1, 600, 170);



game.newScene()

.text("杨浩仁出品", 259, 80, "black")

  .image(spike1, 140, 170)

  .animation(bird, 130  , 150)

  .animation(bird, 300, 130)

 .image(cacti, 450, 170);
game.newScene()

  //写文本的函数

 .text("葛羽霏出品", 400, 20, "white")

  //画动态图的函数

.animation(fire, 210, 150) 

 .animation(crab, 200, 180)  



 //画静态图的函数

 .image(tree, 400, 170)

.image(cacti, 450, 170);  





game.newScene()

.text("葛羽霏出品", 400, 20, "white")

.animation(chomper, 105, 115)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(flower, 505, 150)

.animation(crab, 500, 180)

.animation(bird, 555, 10);

game.newScene()

  //写文本的函数

 .text("Juliana", 150,50, "black")

  //画动态图的函数

 .animation(chomper, 100,100    )  

 .animation(fire, 350,100    )  

.animation(spike3, 350,100    )

.animation(crab, 350,100    ) 



 //画静态图的函数   

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

  //写文本的函数

 .text("吴灏铭出品", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 100, 170) 

 .animation(bird,160,170)

 //画静态图的函数

 .image(spike1, 340, 200)

 .image(spike2,450,20)

.image(cacti,600,170);



game.newScene()

  .image(spike3,100,120)

.image(spike1,300,170)

.image(spike2,390,5)

.animation(flower,500,170);
game.newScene()

  .image(tree, 50, 170)

  .image(spike2, 160, 50)

  .animation(crab, 315, 180)

 .animation(bird,355, 100)

  .animation(fire, 400, 180)

  .animation(flower, 450, 180)

.image(spike1, 570, 50);



game.newScene()

.animation(flower,10, 100)

.animation(chomper, 130, 170)

 .animation(flower, 180, 170)

.animation(bird,280, 10)

  //.image(tree, 50, 170)

  //.image(spike2, 160, 50)

  .animation(crab, 315, 180)

 .animation(bird,480, 100)

 .animation(fire, 370, 180)

.image(cacti, 400, 170)

.image(spike1, 440, 170)

.image(tree, 590, 50);
game.newScene()

  //写文本的函数

 .text("aiden出品", 200, 100, "green")

  //画动态图的函数

 .animation(chomper, 200, 1)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(cacti, 100, 1)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)
 .text("徐逸丰出品", 300, 150, "green")

  .animation(bird, 200, 60);

 

game.newScene()

  .animation(fire, 300, 170)

  .image(tree, 400, 170);



game.newScene()

  .animation(flower, 250, 170)

  .image(spike3,350, 170)

  .animation(crab, 300, 170);



game.newScene()

  .animation(chomper, 250, 170)

  .animation(chomper, 300, 170)

  .animation(crab, 350, 120 );
game.newScene()

 

 .text("STEVEN", 100, 100, "blue")

  

.animation(fire, 100, 170)

  

.image(spike1, 350, 170)

  

.image(spike1,400, 170);





game.newScene()

  

.text("SSTEVEN", 100, 100, "white")

 

 .animation(crab, 150, 170)

 

 .animation(crab, 200, 170)

 

 .animation(bird, 20, 20)

 

 .animation(bird, 50, 20)



  .animation(bird, 60, 20)

 

 .image(tree, 400, 170);





game.newScene()

 

 .animation(flower, 250, 170)



  .animation(chomper, 300, 170);


game.newScene()

  //写文本的函数

 .text("XRD出品", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 200, 180) 

 //画静态图的函数

 .animation(fire, 200, 130)

.animation(bird, 250, 100)

.animation(bird, 400, 80 );

game.newScene()

  .image(spike2, 300, 150)

  .image(cacti, 350, 170)

  

  .image(spike3 ,550 ,61);


game.newScene()

  //写文本的函数



 .text("YOYO", 100, 100, "black")

 

//画动态图的函数

 

.animation(bird, 110, 0)  



 .animation(bird, 50, 160)

 

//画静态图的函数

 

.image(spike3, 300, 100); 

 



game.newScene()

 

 //写文本的函数



 .text("YOYO", 100, 100, "black")

 

 //画动态图的函数

 

.animation(fire, 50, 170) 



 .animation(crab, 100, 170)



 .animation(bird, 150, 70)



 //画静态图的函数



 .image(tree, 400, 170);

  



game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 500, 180);
game.newScene()

.text("Annie", 200, 100, "white")

  .image(tree, 100, 170)

.animation(flower, 150, 170) 

.image(spike3, 550, 110)

.animation(bird, 350, 130) ;



game.newScene()

.text("Annie", 200, 100, "white")

.image(spike1, 10, 170)

.animation(bird, 350, 150)

.image(spike2, 400, 150)

.animation(fire, 590, 180);
game.newScene()

  .image(tree, 10, 130)

  .animation(fire, 47, 170)

  .animation(flower, 120, 170)

  .image(spike3,180,100)

  .animation(bird,310,100)

  .animation(bird,390,120)

  .animation(bird,500,80)

  .image(cacti,575,150);



game.newScene()

  .animation(chomper, 10, 130)

  .animation(fire, 47, 170)

  .image(tree, 120, 170)

  .image(spike2,170,140)

  .image(cacti,380,170);



game.newScene()

  .animation(flower, 50, 170)

  .animation(fire,140, 170)

  .image(tree, 190, 170)

  .image(spike3,240,115)

  .animation(bird,350,50)

  .animation(fire,430,170)

  .animation(bird,530,80);



game.newScene()

  .image(spike2,5,150)

  .image(spike1,160, 170)

  .image(tree, 200,170)

  .animation(fire,330,170)

  .animation(fire,380,150);
game.newScene()

  .animation(crab,50, 160)

  .image(spike3,300, 110)

   .image(cacti, 100, 160);

game.newScene()

  .animation(fire, 150, 180)

   .animation(bird,300, 140)

   .animation(chomper, 500, 140)

 .image(tree, 600, 160);

game.newScene()

 .image(tree, 400, 170);


game.newScene()

  //写文本的函数

 .text("Rain出品", 300, 100, "black")

  //画动态图的函数

 .animation(chomper, 130, 170)  

 //画静态图的函数

 .image(spike1,300,170)

 .animation(bird, 200, 40)

 .animation(bird, 400, 30)

 .animation(bird,600,40);



game.newScene()

  .animation(flower,100,170)

  .animation(crab,260,170)

  

  .image(spike2, 500, 150);

  
game.newScene()

  //写文本的函数

 .text("卢尚谦出品", 200, 100, "red");

  //画动态图的函数

 /*.animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 100, 170)

  .animation(fire, 300, 180)

  .image(tree, 500, 170)

  .image(tree, 500, 140);

 

game.newScene()

  .image(spike3, 150, 110)

  .image(spike1, 500, 20)

  .image(spike1, 600, 170);

  

game.newScene()

.animation(flower,10,170)

  .image(cacti,100,170)

  .animation(bird,200,10)

  .animation(crab,500,170)

  .animation(chomper,600,170);

game.newScene()

  //写文本的函数

 .text("Ethan出品", 200, 15, "blue")

  //画动态图的函数

  .animation(bird, 200, 120)

 //画静态图的函数

 .image(spike1, 400, 170);  





game.newScene()

.text("Ethan出品", 200, 15, "blue")

 .image(spike3, 500, 170)

  .image(spike1, 290, 150)

  .image(cacti, 300, 170)

.image(cacti, 250, 110)

.animation(bird, 200, 130)

.animation(bird, 200, 100)

  .animation(crab, 600, 180)

.animation(fire, 550, 180)

.image(spike3, 200, 170);
game.newScene()
 .text("薛嘉和出品", 200, 100, "purple")

  .animation(fire, 200, 170)

  .image(spike3, 400, 100)

  .animation(bird, 500, 150);



game.newScene()

  .animation(chomper, 250, 170)

  .image(cacti, 100, 170)

  .animation(chomper, 300, 170);

game.newScene()

.text("yxq出品", 200, 100, "black")

  .image(tree, 50, 150)

 .animation(chomper, 200, 170) 

.image(spike1, 250, 170)

.image(spike2, 370, 150)

  .animation(flower, 250, 130)

.animation(crab, 50, 195);

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数



 .text("Jeremy出品", 200, 100, "red")



  //画动态图的函数



 .animation(flower, 200, 170)

 

.animation(flower,250,170)



.animation(fire,100,170)

 

//画静态图的函数

 

.image(tree, 400, 170)



.image(spike1,500,170);









game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)



  .animation(crab, 500, 180);
game.newScene()

.text("张逸飞出品", 400, 80, "blue")

  .image(spike1, 100, 80)

  .animation(chomper, 300, 80)

  .image(tree, 500, 80);



game.newScene()

.text("张逸飞出品", 400, 80, "blue")

  .animation(fire, 100, 90)

  .animation(bird, 300, 170)

  .animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("郁思源出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 50, 170)  

.animation(flower, 200, 170)  

.animation(crab, 400, 170)  

.animation(crab, 440, 170);  

 //画静态图的函数

 //.image(tree, 400, 170);  





game.newScene(2)

  .image(cacti, 350, 170)

  .image(cacti, 300, 170)

  .image(tree, 450, 170)

  .animation(fire, 100, 170);

game.newScene()

  .text("Leo出品", 200, 100, "white")

  .image(spike2, 199, 110)

  .image(tree, 300, 1)

  .animation(bird, 400, 150);



game.newScene()

  .text("Leo出品", 200, 100, "white")

  .animation(chomper, 100, 1)

  .animation(bird, 450, 180)

.animation(bird, 550, 100)

.animation(bird, 600, 20);


game.newScene()

  //写文本的函数

 .text("伊晨出品", 200, 150, "")

  //画动态图的函数 

.animation(crab, 200, 180)

.animation(flower, 600, 170)

 //画静态图的函数

 .image(spike1, 400, 170);  





game.newScene()

  .image(spike1, 400, 170)

  .animation(flower, 500, 170)

  .animation(bird, 200, 80);


game.newScene()

  //写文本的函数

 .text("Yolanda出品", 200, 100, "purple")

  //画动态图的函数  

 //画静态图的函数

 .image(tree, 100, 170)

.image(tree, 120, 170)

.image(tree, 140, 170)

.animation(bird, 125, 130)

.animation(flower, 300, 90)

.animation(flower, 500, 30)

.image(cacti, 600, 170);  





game.newScene()

  .image(tree, 100, 10)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180);


game.newScene(1)

  //写文本的函数

 .text("Teddy出品", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 200, 10)  

 //画静态图的函数

 .image(spike1, 50, 170);  





game.newScene(2)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("吴煜宸出品", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 270, 170)  

 .animation(flower, 200, 170)

.animation(bird, 200, 100)

.animation(crab, 450, 170)

.animation(fire, 550, 170);

 //画静态图的函数







game.newScene()

  .image(spike2, 100, 150)

  .animation(crab, 500, 180);
game.newScene()

  .animation(bird, 100, 150)

  .animation(fire, 300, 170)

  .animation(chomper, 500,160);



game.newScene()

  .animation(crab, 100, 150)

  .animation(flower, 300, 170)

  .image(cacti, 500, 170);
game.newScene()

  //写文本的函数

 

.text("曾好", 100, 100, "white")

 

 //画动态图的函数



 .animation(bird, 70, 20) 

 

 .animation(bird, 120, 20)



 .animation(fire, 210, 150)

 //



 .image(spike1, 350, 170)

 

.image(tree, 400, 170); 

 



game.newScene()

  





 .text("曾好", 200, 100, "white")

 

 

.animation(flower, 100, 170) 

 

 .animation(chomper, 150, 170) 




 .image(tree, 400, 170); 





game.newScene()

 

.image(spike2, 100, 150)

  

.image(cacti, 300, 170)

 

 .animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("Ryan出品", 100, 100, "black")

  //画动态图的函数

 .animation(fire,100, 170)  

 .image(spike3, 300, 110)

 //画动态图的函数

 .animation(bird, 500, 90)  

 //画动态图的函数

 .animation(flower, 600, 170);

       

game.newScene()

  .animation(flower, 110, 170)

  .image(spike2, 200, 150)

  .animation(crab, 400, 180);

  
game.newScene()

  //写文本的函数

 .text("YYT出品", 300, 50, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170)

 

.image(spike3,500,110)

.animation(chomper,200,140)



.animation(bird,400,10) 

.animation(bird,350,20);





game.newScene()

 .text("YYT出品", 300, 50, "black")

.image(cacti,400,170)



  .image(cacti, 300, 170)

   .animation(crab, 500, 180);

 game.newScene()

  //画动态图的函数

 .animation(crab,300,180)

 .animation(crab,340,180)

 .animation(crab,325,150)

 .animation(bird,50, 0)

 //画静态图的函数

 .image(cacti, 500, 170)

  //写文本的函数

 .text("MADE BY CYNTHIA", 200, 100, "black");



 

game.newScene()

   .text("MADE BY CYNTHIA", 200, 100, "black")

  .image(tree,130,170)

  .image(spike1,320,170)

  .image(spike1,320,0)

  .animation(flower,370,170);

game.newScene()

 

 //写文本的函数

 .text("RUSSELL", 100, 100, "black")

 

 //画动态图的函数



 .animation(chomper, 50, 160) 

 

 .animation(chomper, 100, 160)

 

//画静态图的函数



 .image(spike2, 300, 130)

 

.image(cacti, 400, 170);  





game.newScene()

  

//写文本的函数

 

.text("RUSSELL", 100, 100, "black")

  

//画动态图的函数



 .animation(bird, 0, 80)  



 .animation(chomper, 100, 160)

 

//画静态图的函数

 

.image(spike2, 300, 170)



 .image(cacti, 400, 170); 





game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("刘雨桐出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 100, 150)  

 //画静态图的函数

 .image(cacti, 400, 170)

.animation(bird, 500, 100)  

.image(spike2, 300, 100)

.animation(bird, 400, 170);

game.newScene()

  .image(tree, 100, 150)

  .image(tree, 300, 170)

  .image(tree, 500, 180)

  .animation(chomper, 300, 120)

.animation(fire, 500, 160);
game.newScene()

  //写文本的函数

 .text("张紫涵出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

.animation(flower, 100, 170)

.animation(flower, 200, 170)

.image(spike2, 220, 170)

.image(cacti, 380, 170)

.image(spike3, 550, 10)

.animation(bird, 10, 10)

.animation(bird, 400, 10);

  

game.newScene()

  .animation(crab, 100, 177)

  .image(spike3, 300,115)

  .image(spike2, 500, 180);

game.newScene()

  .animation(flower, 100, 177)

  .animation(fire, 300, 180)

  .animation(bird, 500, 30);
game.newScene()

  //写文本的函数

 .text("Angela出品",200 , 100, "black")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(cacti, 400, 170)

.animation(flower,500,170)

.animation(bird,460,150);  



 

game.newScene()

  .image(tree    , 100, 170)

  .animation(fire, 300, 180)

  .image(spike3, 500, 100);
game.newScene()

  //写文本的函数

 .text("徐千千出品", 200, 100, "black")

  //画动态图的函数

 .animation(bird, 200, 45)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(fire, 600, 180);
game.newScene()

  //写文本的函数

 .text("李俊哲出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

 .text("沈欣出品", 200, 100, "pink")

 .animation(flower, 200, 170)  

 .animation(crab,550, 170)

 .image(tree, 400, 170);  





game.newScene()

.text("沈欣出品", 200, 100, "pink") 

.image(spike2, 100, 150)

.animation(chomper,200,170);
game.newScene()

  //写文本的函数

 .text("丁思源出品", 500, 100, "blue")

  //画动态图的函数

 .animation(chomper, 400, 1)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .image(spike3, 400,1)

  .text("坑死你",500,20,"black")

  .image(cacti,550,10);
game.newScene()

  .animation(flower, 10, 80)

.image(spike1, 100, 170)

  .image(cacti, 200, 170)

 .image(tree, 320, 170)

  .animation(crab, 350, 10)

 .animation(chomper, 450, 170)

.animation(bird, 450, 30);
game.newScene()
.text("David出品", 200, 70, "white")

  //画动态图的函数

 .animation(flower, 200, 70)  

 //画静态图的函数

 .image(tree, 400, 70);  





game.newScene()

  .image(spike2, 100, 70)

  .image(cacti, 300, 70)

  .animation(crab, 500, 70);
game.newScene()

  //写文本的函数

 .text("沈靖皓", 600, 200, "red")

  //画动态图的函数

 .animation(chomper, 200, 170)

.animation(crab,210,1)

 //画静态图的函数

 .image(cacti, 400, 170)

.image(tree,600,1);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .image(tree, 50, 170)

 .image(spike3, 100, 120)

 .animation(bird, 150, 120)

 .animation(fire, 350, 170)

 .image(cacti, 550, 170)

 .text("by Pauline", 200, 100, "white");

  //画动态图的函数

  





game.newScene()

  .image(spike1, 200, 170)

  .image(spike2, 250, 150)

  .animation(bird, 250, 50)

  .image(tree, 450, 170);
game.newScene()

  //写文本的函数

 .text("陈思语出品", 200, 100, "pink")

  //画动态图的函数

 .animation(fire, 200, 170) 

.animation(bird,150,100)

 //画静态图的函数

 .image(tree, 400, 170)  

.image(spike1,500,110);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("tracy出品", 50, 150, "white")

  //画动态图的函数

 .animation(chomper, 80, 150)  

 .animation(chomper, 100, 150)

 .animation(chomper, 140, 150)

 .animation(chomper, 160, 150)

 //画静态图的函数

 .image(spike2, 400, 180);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

.image(spike1, 50, 170)

.animation(bird, 150, 70) 

.animation(chomper, 250, 170) 

.text("金灵岳", 200, 100, "green")

.image(tree, 350, 170); game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 

.text("阳淳熙", 300, 100, "green")

  //画动态图的函数

 .animation(flower,200, 170)  

 .animation(fire,400, 170) 

.animation(bird,600, 100);

 //画静态图的函数

   





game.newScene()

.text("老陈",250,150,"purple")

  .image(spike3, 300, 150)

  .image(cacti, 500, 170)

  .animation(crab, 600,200);
game.newScene()

  //写文本的函数

 .text("甘一哲", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 200, 170)

 .animation(chomper, 250, 170)

 .animation(bird, 550, 110)

 .animation(bird, 650, 170)

 //画静态图的函数

 .image(spike3, 400, 110);  

 





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 350, 170)

  .animation(fire, 500, 180);
game.newScene()

  //写文本的函数

 .text("joy出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 200, 170)  

.animation(bird,200,100)

 //画静态图的函数

 .image(tree, 400, 170)

.image(spike3,500,120);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .image(tree,210,170)

  .animation(crab, 500, 180)

  .animation(chomper,200,100);
game.newScene()

  //写文本的函数

 .text("made by 熊文嘉", 300, 200, "purple")

 .text("made by Mum", 200, 90, "blue")

  //画动态图的函数

 .animation(fire, 300, 160)  

 //画静态图的函数

 .image(cacti, 200, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("刘敏易出品", 200, 100, "blue");

  //画动态图的函数

 /*.animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/

game.newScene()

  .image(spike3,10,110)

  .animation(chomper,200,170)

  .animation(fire,300,180)

  .animation(bird,400,170)

  .animation(bird,300,15);

game.newScene()

  .image(cacti,60, 170)

  .animation(crab,100, 170)

  .animation(flower,173, 170)

  .animation(bird,21,30)

  .image(spike1,400,170)

  .image(spike2,450,145)

  .image(spike3,500,120)

  .animation(bird,600,30);

game.newScene()

  //写文本的函数

 .text("叶煊煜出品", 200, 100, "green")

  //画动态图的函数

 .animation(fire, 50, 10)

 .animation(chomper, 200, 170)

 //画静态图的函数

 .image(spike1, 400, 10)

 .image(spike2, 500, 150);  





game.newScene()

  .image(tree, 300, 150)

  .animation(flower, 400, 170)

  .animation(crab,600, 180);
game.newScene()

 

 .text("程瑞鑫", 100, 100, "white")

  

.animation(chomper, 50, 170)

  

.animation(fire, 10, 170)

 

 .animation(bird, 101, 20)

  

.image(spike2, 200, 20)

 

 .image(spike3, 350, 160)



  .image(spike2, 400, 150);





game.newScene()

 

 .text("程瑞鑫", 200, 100, "white")



  .animation(crab, 60, 170)

 

 .animation(fire, 120, 170)

 

 .image(spike1, 380, 130)

  

.image(spike3, 320, 100)

 

 .image(spike1, 400, 130);





game.newScene()



  .animation(crab, 200, 170)



  .animation(crab, 300, 170);
game.newScene()

 .text("Sheldon出品", 200, 100, "green")

  .animation(bird, 300, 150)

  .image(spike2, 400, 150)

  .image(tree, 450, 170);



game.newScene()

 .text("Tiffany出品", 200, 100, "white")

  .animation(bird, 100, 150)

  .animation(bird, 200, 130)

  .image(spike3, 350, 20)

  .image(tree, 450, 170)

  .animation(fire, 600, 160)

  .image(spike3, 450, 120);
game.newScene()

  //写文本的函数

 .text("朱懿出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 200, 50) 

.animation(chomper,100,50)

 //画静态图的函数

 .image(spike3, 500, 100)

.image(spike2,300,50);





game.newScene()

  .image(tree, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 500, 100);
game.newScene()

  //写文本的函数

 .text("Mary出品", 100, 50, "pink")

  //画动态图的函数

 .animation(chomper, 270, 170) 

 .animation(flower, 300, 170) 

 .animation(fire, 500, 180) 

 //画静态图的函数

 .image(tree, 540, 170) 

.image(spike1, 680, 100); 



game.newScene()

//写文本的函数

 .text("Mary出品", 100, 50, "pink")

//画静态图的函数

  .image(spike2, 530, 150)

  .image(cacti, 300, 170)

  .image(tree, 680, 170)

//画动态图的函数

  .animation(crab, 100, 180)

 .animation(bird, 680, 10);

game.newScene()

  //写文本的函数

 .text("yommy出品", 200, 80, "purple")

  //画动态图的函数

 .animation(crab, 200, 170)  

 //画静态图的函数

 .image(spike2, 400, 140);  





game.newScene()

  .image(tree, 350, 170)

  .animation(chomper, 200, 170)

  .animation(fire, 100, 100);
game.newScene()

  

.text("Moen出品", 200, 100, "green")

  

.animation(flower, 250, 170)

  

.image(spike2, 400, 80);







game.newScene()

  

.animation(chomper, 250, 170)

  

.animation(chomper, 300, 170)

  

.image(tree,540,170)

  

.image(tree,580,170);







game.newScene()

  

.text("Moen出品", 200, 100, "green")

  

.image(spike1, 200, 170)

  

.animation(bird,400,140)

  

.image(spike3,630,110);







game.newScene()

  

.text("Moen出品", 200, 100, "green")

  

.animation(crab, 200, 170)

  

.animation(crab, 250, 170)

  

.animation(crab,300,170)

  

.image(spike2,480,145)

  

.image(cacti,600,170)

  

.image(cacti,650,170);


game.newScene()

  //写文本的函数

 .text("张若涵出品", 200, 100, "pink");

 /* //画动态图的函数

 .animation(flower, 240, 100)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(flower, 10, 170)

  .animation(fire, 150, 180)

  .image(tree, 400, 170)

.image(spike2,460,150);



game.newScene()

  .animation(bird,20,20)

  .image(cacti,200,170)

  .animation(chomper,460,170);


game.newScene()

  //写文本的函数

 .text("XRD出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike3, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

  .animation(fire, 100, 190)

  .image(spike1, 190, 201);

 
game.newScene()

 .text("ywy出品", 200, 100, "white")

  .image(spike2, 200, 150)

  .image(cacti, 100, 170)

  .animation(fire,599,20)

.animation(crab, 500, 180);



game.newScene()

  .image(spike1, 200, 150)

  .image(cacti, 50, 170)

  .animation(bird, 600, 30)

.animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("关皓文出品", 100, 60, "black")

  //画动态图的函数

  .animation(flower,50,170)

  .animation(bird,130,10)

  .animation(fire,270,175)

  .animation(crab,490,170);



game.newScene()

  .animation(crab,50,170)

  .animation(crab,190,170)

  //画静态图的函数

  .image(cacti,390,170)

  .image(spike3,500,60);


game.newScene()

  .text("ZYF出品", 200, 100, "blue")

  .image(spike3, 100, 50)

  .image(tree, 300, 170)

  .animation(fire, 500, 180);

game.newScene()

  .image(spike2, 100, 150)

  .image(spike1, 100, 0)

  .image(cacti, 250, 180)

  .animation(bird,250,10)

  .animation(crab,350,0)

  .animation(flower,500,150);
game.newScene()

  //写文本的函数

 .text("B&B", 200, 100, "red")

  //画动态图的函数

 .image(spike3, 150, 200)  

 //画静态图的函数

 .image(tree, 400, 170); 

//画静态图的函数;



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("Tiger出品", 300, 100, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(flower,400, 170) 

//画静态图的函数

 .animation(bird,600,150)

.animation(crab, 600, 180);  





game.newScene()

  .animation(fire,550.90)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("刘希贤出品", 200, 100, "purple")

  //画动态图的函数

 .animation(crab, 100, 100)

.animation(fire, 300, 100)

 //画静态图的函数

 .image(cacti, 450, 100);  





game.newScene()

 .animation(fire, 15, 100)

.image(tree, 140, 100);
game.newScene()

 .text("孙正一出品", 200, 50, "blue")

  .image(spike3, 100, 110)

  .image(spike1, 140, 100)

  .image(spike1,180, 100)

.animation(flower,350,200)

.image(spike2, 500, 150);



game.newScene()

 .text("孙正一出品", 200, 50, "blue")

  .image(spike3, 100, 110)

  .image(spike2, 300, 150)

 .animation(flower,400,180)

.animation(flower,450,180)

.animation(flower,500,180);
game.newScene()

  //写文本的函数

 .text("yoyo出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 390, 170);  





game.newScene()

.text("yoyo出品", 200, 100, "red")

 .image(spike2, 400, 170)

 .image(tree, 600, 170)

  .image(spike2, 100, 150);
game.newScene()

  //写文本的函数

 .text("戴家乐出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 200, 170)

.animation(flower, 300, 170)

.animation(bird, 350, 80)

 //画静态图的函数

 .image(spike1, 400, 170); 





game.newScene()

 .text("第2关", 200, 100, "white")

  .image(spike1, 100, 170)

  .animation(crab, 100, 150)

.image(spike1, 200, 100)

.image(spike2, 300, 90)

.image(tree, 400, 170)

.animation(crab, 400, 20)

.image(cacti, 450, 170)

.animation(chomper, 600, 150);
game.newScene()

  .animation(flower, 100, 170)

  .image(spike2, 300, 150)

  .animation(chomper, 500, 170);



game.newScene()

.image(tree, 100, 170)

.image(spike1, 300, 170);



game.newScene()

.animation(crab, 100, 180)

.image(cacti, 300, 170);



game.newScene()

.animation(bird, 100, 130)

.animation(fire, 300,180)

.image(spike3, 500,110);


game.newScene()

  //写文本的函数

 .text("王子涵出品", 200, 160, "red")

  //画动态图的函数

 .animation(chomper,100, 170)

 //.animation(flower,120,170)

 .animation(bird,240,50)

 .animation(crab,400,170);

 //.animation(fire,550,170);



game.newScene()

  //写文本的函数

 .text("王子涵出品", 200, 160, "red")

  //画静态图的函数

 .image(cacti,100,170)

 .image(spike1,300,170)

 .image(spike2,500,145);



game.newScene()

  //写文本的函数

 .text("龙炎出品", 400, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 100, 165)

 .animation(bird,500,100)

 .animation(crab,450,60)



 //画静态图的函数

 .image(spike2, 150, 150) 

 .image(spike1,150,1);



game.newScene()

  .image(spike2, 200, 150)

  .image(spike1,200,1)

 .animation(chomper,30, 165)

.animation(fire,500,180);


game.newScene()
 .text("单金浩出品", 300, 150, "blue")

  //画动态图的函数

 .animation(fire, 200, 100)  

 //画静态图的函数

 .image(cacti, 450, 170);  





game.newScene()

  .image(tree  , 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("石跃昊出品", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 200, 10)  

 //画静态图的函数

 .image(tree, 200, 170)

.image(spike1, 300,1) 

.animation(crab, 500, 170)

.animation(chomper, 600, 10);



game.newScene()

  .image(cacti, 100, 170)

  .animation(flower, 300, 170)

  .animation(chomper, 500, 170)

  .image(tree, 600, 170)

  .image(spike1, 400, 10)

  .image(tree, 200, 10);
game.newScene()

 .text("刘燚", 200, 100, "black")

  .image(spike1, 100, 100)

  .image(spike3, 300, 150)

  .animation(fire, 500, 180)

.image(spike3,550,160);



game.newScene()

  .image(tree, 100, 100)

  .image(spike1, 300, 150);



game.newScene()

.text("张家仪", 200, 100, "purple")

  .animation(chomper, 150, 170)

  .image(spike1, 300, 100)

  .animation(bird, 400, 100)

.image(spike3,550,150);

game.newScene()

  .image(tree, 100, 170)

  .animation(crab, 300, 170)

.animation(fire,500,160);
game.newScene()
.text("余立奇出品", 300, 150, "blue")

  .animation(crab, 200, 100)

  .image(spike2, 450, 170)

  .image(spike3, 500, 170)

  .image(spike1, 400, 170);



game.newScene()

  .animation(fire, 250, 170)

  .animation(bird, 300, 170);

game.newScene()

.text("晏子欣出品", 200, 100, "white")

  .animation(crab, 100, 150)

  .animation(bird, 300, 80)

  .animation(flower, 500,145)

  .animation(chomper,550,155)

  .animation(chomper,580,155);



game.newScene()

.text("晏子欣出品", 200, 100, "white")

  .image(spike2, 200, 150)

  .image(cacti, 300, 170)

  .image(spike3, 500, 110);



game.newScene()

  //写文本的函数

 .text("沈昕出品", 200, 100, "red")

  //画动态图的函数

 .animation(crab, 300, 170)  

 .animation(bird,300,15)

 

 //画静态图的函数

 .image(tree, 600,170);  





game.newScene()

  .image(cacti, 300, 170)

  .image(spike2, 100, 145)

  .animation(crab, 500, 180);


game.newScene()

  

.text("GZC出品", 200, 100, "black")

  

.image(spike1, 100, 170)

  

.image(spike2, 150, 145)

  

.image(spike1, 200, 170)

  

.animation(fire,400,170)

  

.animation(fire,450,170)

  

.animation(bird,600,120);







game.newScene()

  

.animation(chomper, 200, 170)

  

.animation(chomper, 250, 170)

  

.image(spike1,200,0)

  

.animation(bird,400,170)

  

.animation(crab,470,170);



 



game.newScene()

  

.image(spike1, 100, 170)

  

.image(spike2, 150, 145)

  

.image(spike3, 200, 110);






game.newScene()

  //写文本的函数

 .text("许砚南出品", 200, 20, "white")

  //画动态图的函数

 .animation(fire, 400,140)  

.animation(fire, 400,160)

.animation(fire, 400,180) 

 //画静态图的函数

 .image(spike1, 150, 170)

.image(spike1, 150, 10)

 .image(tree, 200, 170)

 .image(tree, 550, 170)

 .image(tree, 580, 170);  





game.newScene()

.text("许砚南出品", 200, 20, "white")

  .image(spike2, 100, 150)

.animation(chomper, 150, 170)

  .image(cacti, 300, 170)

.animation(bird, 540, 180)

.animation(bird, 560, 150)



  .animation(crab, 500, 180);
game.newScene()

.text("yvonne出品", 200, 100, "yellow")

  .animation(flower, 100, 170)

  .image(spike2, 300, 145)

.image(spike2, 250, 145)

  .animation(bird, 500, 130);

game.newScene()

.text("yvonne出品", 200, 100, "yellow")

  .image(cacti, 100, 170)

.image(cacti, 150, 150)

  .animation(chomper, 300, 170)

  .image(tree, 500, 170)

.image(tree, 550, 140)

.image(tree, 600, 110);
game.newScene()

  //写文本的函数

 .text("王穆浩壤的作品", 200, 100, "red")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(fire, 450, 170) 

.animation(bird, 600, 50)

 //画静态图的函数

 .image(spike1, 400, 170);  





game.newScene()

 .text("第2关", 200, 100, "red")

  .animation(flower,200, 170)

  .image(tree, 300, 170)

  .image(spike2, 500, 50)

.animation(crab, 600, 180);
game.newScene()

  //写文本的函数

 .text("Dolly出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 150, 170)

.animation(fire, 180, 180)

.animation(bird, 350, 100)

 //画静态图的函数

 .image(spike1, 550, 170)  

.image(spike1, 590, 170);



game.newScene()

//写文本的函数

 .text("Dolly出品", 200, 100, "yellow")

//画静态图的函数

  .image(tree, 100, 170)

  .image(spike1, 300, 170)

 .image(cacti, 330, 170)

 .image(tree, 680, 170)

 //画动态图的函数

  .animation(flower, 500, 170)

 .animation(flower, 530, 170);

game.newScene()

 .text("朱玥莹出品", 400, 30, "pink")

 .animation(chomper, 200, 170)

.animation(chomper, 240, 170) 

.animation(fire, 440, 180) 

.image(spike1, 20, 170);  





game.newScene()

 .animation(bird, 120, 180)

.animation(bird, 170, 150)

  .image(spike1, 400, 130);


game.newScene()

  //写文本的函数

 .text("曾云汐", 200, 100, "pink")

  //画动态图的函数

 .image(spike2, 200, 150)  

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .animation(bird, 100, 130)

  .animation(crab, 300, 180)

  .animation(flower, 450, 170)

  .animation(fire,500,180)

    .animation(chomper,540,180);




game.newScene()

  //写文本的函数

 .text("Grace出品", 200, 150, "yellow")

  //画动态图的函数

 .animation(bird, 200, 100)

 .animation(fire, 300, 180) 

 //画静态图的函数

 .image(spike2, 600, 150);  





game.newScene()

  .image(tree, 300, 170)

  .animation(flower, 400, 170);

game.newScene()

.text("Sophia出品", 200, 100, "purple")

  .animation(flower, 100, 170)

  .image(spike2, 300, 145)

  .animation(fire, 500, 180)

  .image(tree,600, 180);

game.newScene()

  .animation(chomper, 100, 170)

  .animation(bird, 300, 145)

  .animation(bird, 530, 60)

  .image(cacti, 400, 170);
game.newScene()

 .text("龙野", 100, 100, "blue")

 .animation(flower, 50, 170)

 .image(spike3, 130,110)

 .animation(chomper,350, 170) 

.image(tree, 550,170)

 .animation(crab, 240, 10) 

.animation(fire,250, 40);  


game.newScene()

 .text("zyz出品", 100, 10, "white")

  .image(spike3, 100, 110)

  .animation(bird, 300, 80)

 // .image(cacti, 300, 170)

  .animation(fire, 400, 180)

 .image(cacti, 460, 170)

.image(spike2, 580,50 );



game.newScene()

.text("zyz出品", 100, 100, "white")

 .image(tree, 100, 170)

.image(tree,130 , 170)

  .image(spike1, 250, 100)

 .image(spike2, 380, 145)

  .animation(crab, 430, 180)

.image(spike3, 480, 110)

 .animation(fire, 252, 76)

 .animation(bird, 560, 30)

 .animation(bird,590, 76);


game.newScene()

.image(spike2, 80, 145)

.animation(flower,130, 170)

.image(spike3, 240, 110)

.animation(bird, 320, 30)

.animation(bird, 350, 76)

.image(spike1, 450, 170)

.image(cacti, 450, 138);
game.newScene()

  

.text("JERRY", 200, 100, "white")

  

.animation(fire, 20, 170)

 

 .animation(fire, 80, 170)

 

 .animation(bird, 150, 20)



  .image(spike3, 350, 130)

 

 .image(spike2, 400, 150);





game.newScene()

 

 .text("jerry", 200, 100, "white")



  .animation(fire, 60, 170)

 

 .animation(fire, 120, 170)

 

 .image(spike3, 280, 30)

 

 .image(spike2, 400, 110);





game.newScene()

 

 .animation(crab, 200, 170)

 

 .animation(crab, 300, 170);



game.newScene()

  //写文本的函数

 .text("张思语", 200, 100, "purple")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(spike2, 400, 140);  





game.newScene()

  .image(tree, 100, 170)

  .animation(fire, 300, 180)

  .animation(chomper, 500, 170);


game.newScene()

  . animation(chomper, 100, 170)

  .animation(bird, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

  . image(cacti, 90, 170)

  .image(spike1,140, 170)

  .image(spike2, 500, 150);



game.newScene()

  //写文本的函数

 .text("cat出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  

 .animation(chomper,260,150)

 //画静态图的函数

 .image(tree, 400, 170)  

 .image(spike3,440,130)

  .animation(fire,540,20)

  .animation(fire,580,25);





game.newScene()

  .image(spike1, 100, 150)

.image(spike2,200,120)

  .animation(crab, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

.text("刘有恒出品", 10, 200, "purple")

  .image(tree, 190,170)

  .animation(chomper, 250, 170)

  .image(spike3, 500, 110)

.image(spike1, 500, 68)

.animation(flower, 550, 170);



game.newScene()

.text("刘有恒出品", 50, 200, "purple")

  .image(spike3, 450, 110)

.image(spike1, 450, 68)

 .animation(crab, 600, 20);

 

game.newScene()

.text("刘有恒出品", 10, 200, "purple")

  .animation(bird, 70,30)

.image(spike1, 150, 170)

.image(spike1, 200, 170)

.image(spike2, 400, 144)

 .image(cacti,400, 100);
game.newScene()

  //写文本的函数

 .text("mini出品", 200, 100, "white")

  //画动态图的函数

 .animation(crab, 300, 170)  

.animation(bird, 500, 30) 

//画静态图的函数

 .image(tree, 500, 170)

.image(spike1, 100, 170);  





game.newScene()

  .image(spike3, 570, 100)

 

   .animation(chomper, 400, 170)

.animation(flower, 200, 170);
game.newScene()

  //写文本的函数

 .text("djuhugf出品", 200, 100, "black")

  //画动态图的函数

 .animation(chomper, 100, 170) 

.animation(flower, 300, 170)   

 //画静态图的函数

 .image(tree, 500, 170)

.image(spike1, 500, 3);   





game.newScene()

//写文本的函数

 .text("fyvhb出品", 200, 100, "black")

//画静态图的函数

  .image(spike3, 100, 3)

.image(tree, 300, 3)

  .image(cacti, 500, 170) 

//画动态图的函数

  .animation(crab, 500, 180)

.animation(bird, 500, 100);



game.newScene()

  //写文本的函数

 .text("kimi出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

//写文本的函数

 .text("kimi出品", 200, 100, "blue")

//画静态图的函数

  .image(spike3, 100, 3)

  .image(cacti, 300, 170) 

//画动态图的函数

  .animation(crab, 500, 180);
game.newScene()

  

//写文本的函数

 .text("赵喆远出品", 200, 100, "purple")



  //画动态图的函数

 

.animation(flower, 200, 170)  

 

//画静态图的函数



 .image(tree, 400, 170);

  





game.newScene()

 

 .image(spike2, 700, 150)



.image(spike3, 200, 20)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 500, 180)





.animation(bird, 600, 100)



.animation(chomper, 500, 100);

game.newScene()

  .image(spike2, 100, 150)

  .image(spike2, 300, 150)

  .image(spike2, 500, 150)

.image(spike2, 550, 150);



game.newScene()

  .image(spike2, 100, 150)

  .image(spike2, 300, 150)

  .image(spike2, 500, 150)

.image(spike2, 550, 150);
game.newScene()

  .image(spike2, 100, 150)

  .image(spike2, 300, 150)

  .image(spike2, 500, 150)

.image(spike2, 550, 150);



game.newScene()

  .image(spike2, 100, 150)

  .image(spike2, 300, 150)

  .image(spike2, 500, 150)

.image(spike2, 550, 150);
game.newScene()

  .image(cacti, 100, 150)

  .image(tree, 300, 170)

  .animation(bird, 500, 180);



game.newScene()

  .image(spike3, 10, 100)

  .image(spike2,300 , 100)

  .animation(fire, 500, 180);
game.newScene()

 

 //写文本的函数



 .text("赵李诚出品", 200, 100, "blue")

 

 //画动态图的函数



 .animation(chomper, 500, 150)



.animation(bird,250,100)



.animation(fire,500,200)

 

//画静态图的函数

 

.image(spike3, 400, 50);



  





game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)



.animation(flower,400,170)

 

 .animation(crab, 500, 180);
game.newScene()

  .text("rongyi", 200, 100, "white")

  .image(spike1, 200, 100)

  .animation(fire, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

  .image(spike1, 100, 170)

  .image(spike2, 300, 90)

  .animation(bird, 500, 170)

  .animation(bird,550,160)

  .animation(bird,600,150);
game.newScene()

  //写文本的函数

 .text("于然出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(cacti, 550, 170)

.animation(crab, 350, 70)

.image(spike3, 400, 50)

.image(tree, 600, 170);  
game.newScene()

  //写文本的函数

 .text("乐滨宁", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .animation(chomper, 10, 170)

  .image(spike2, 300, 145)

  .image(tree, 500, 170)

  .animation(bird,700,160);



game.newScene()

  .animation(fire, 10, 1)

  .animation(fire, 30, 1)

  .animation(fire, 50, 1)

  .animation(fire, 70, 1)

  .animation(fire, 90, 1)

  .animation(fire, 110, 1)

  .animation(fire, 130, 1)

  .animation(fire, 150, 1)

  .animation(fire, 170, 1)

  .animation(fire, 190, 1)

  .animation(fire, 210, 1)

  .animation(fire, 230, 1)

  .animation(fire, 250, 1)

  .animation(fire, 270, 1)

  .animation(fire, 290, 1)

  .animation(fire, 310, 1)

  .animation(fire, 330, 1)

  .animation(fire, 350, 1)

  .animation(fire, 370, 1)

  .animation(fire, 390, 1)

  .animation(fire, 410, 1)

  .animation(fire, 430, 1)

  .animation(fire, 450, 1)

  .animation(fire, 470, 1)

  .animation(fire, 490, 1)

  .animation(fire, 510, 1)

  .animation(fire, 530, 1)

  .animation(fire, 550, 1)

  .animation(fire, 570, 1)

  .animation(fire, 590, 1)

  .animation(fire, 610, 1)

  .animation(fire, 630, 1)

  .animation(fire, 650, 1)

  .animation(fire, 670, 1)

  .animation(fire, 690, 1);
game.newScene()

  .text("包子出品", 200, 100, "blue")

.animation(chomper, 100, 150)

  .image(spike2, 300, 135)

  .animation(bird, 500, 50);

  

game.newScene()

  .image(tree , 100, 170)

  .image(spike1, 300, 170)

  .animation(fire, 500, 180)

  .animation(bird , 700 , 50);
game.newScene()

  //写文本的函数

 .text("Helen出品", 200, 150, "blue")

  //画动态图的函数

 .animation(bird, 200, 80)  

.animation(bird, 150, 80)

.animation(chomper, 50, 200)

 //画静态图的函数

 .image(tree, 400, 170)

.image(tree, 300, 95)

.image(tree, 500, 200);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(fire, 600, 180);
game.newScene()

  //写文本的函数

 .text("许博雅出品", 200, 100, "purple");

  //画动态图的函数

 /*.animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 10, 170)

  .animation(flower, 150, 170)

  .animation(fire,500,180)

  .image(cacti,206,168)

  .image(tree,324,170);

game.newScene()

  .animation(bird,100,10);

game.newScene()

.text("明星星出品", 200, 100, "red")

.animation(flower, 150, 170)

  .image(spike2, 300, 150)

  .image(cacti, 350, 170)

.image(tree, 550, 170)

  .animation(crab, 500, 180);

game.newScene()

.text("明星星出品", 200, 100, "red")

.image(spike1, 600, 10)

  .image(spike2, 300, 150)

.image(spike3, 340, 110)

  .image(cacti, 150, 170)

.image(tree, 550, 170)

  .animation(crab, 500, 180);
   

game.newScene()

  .text("Elaine出品", 70, 100, "orange   ")

  .animation(fire, 50, 180)

 .animation(fire, 90, 180)

.animation(bird, 190, 80)

.animation(crab, 320, 180)

.animation(flower, 580, 170)

;



game.newScene()

  .image(spike3, 250, 110)

  .image(spike1, 300, 170)

 .image(spike2, 500, 140);


game.newScene()

  //写文本的函数

 .text("madhav出品", 200, 100, "green")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(spike3, 400, 17);  





game.newScene()

  .image(tree, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(bird,400, 90 );
game.newScene()

  .animation(flower, 100, 170)

  .animation(bird, 290, 170)

  .animation(fire, 500, 180);

game.newScene()

  .image(cacti, 100, 170)

  .animation(crab, 270, 180)

  .animation(chomper, 500, 170);

game.newScene()

  .animation(bird, 100, 70)

  .animation(chomper, 270, 170)

  .animation(flower, 350, 170);
game.newScene()

  .animation(bird, 100, 130)

  .image(spike2, 300, 145)

  .animation(fire, 500, 180);

game.newScene()

  .image(cacti, 80, 170)

  .animation(flower, 300, 170)

  .animation(chomper, 500, 170);

game.newScene()

  .image(spike3, 100, 150)

  .animation(bird, 300, 150)

  .image(tree, 500, 170);
game.newScene()

 .text("Gorden出品", 200, 100, "gold")

  .animation(bird, 100, 150)

  .animation(crab, 300, 180)

  .image(spike1, 500, 170);

game.newScene()

  .image(spike2, 100, 140)

  .animation(fire, 300, 180)

.animation(fire, 315, 180)

  .animation(flower, 500, 170)

.animation(bird, 600, 170);
game.newScene()

.text("唐迎羔出品", 200, 100, "purple")

.animation(bird, 100, 30)

  .animation(fire, 200, 170)

  .image(cacti, 400, 180)

.image(spike3, 500, 140);



game.newScene()

.text("唐迎羔出品", 200, 100, "purple")

.animation(flower, 100,170)

  .animation(fire, 200, 170)

  .animation(chomper, 450, 180)

.image(tree, 500, 140);

game.newScene()

  //写文本的函数

 .text("吴泓毅出品", 200, 100, "green")

  //画动态图的函数

 .animation(chomper , 200, 170)

.animation(bird , 300, 130) 

 //画静态图的函数

 .image(spike1, 500, 170)

.animation(fire, 30, 170)

.image(tree , 300, 170);



game.newScene()

  .image(spike1, 100, 170)

  .image(cacti, 300, 170)

  .animation(flower, 470, 170);


game.newScene()

  //写文本的函数

 .text("Jason出品", 200, 100, "white")

  //画动态图的函数

 .image(spike3, 100, 110)  

 //画静态图的函数

.animation(bird,100,10)

.image(spike2, 320, 145)

 .image(spike1, 370, 170)

.image(spike3,420,110)

.image(spike3, 760, 110);

 





game.newScene()

  .image(spike1, 70, 170)

  .image(spike3, 300, 110)

  .image(spike1, 350, 170)

.image(spike2,400,145)

.animation(fire,650,170);

game.newScene()

  //写文本的函数

 .text("dyx出品", 199, 101, "black")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(fire,350,170)

//画静态图的函数

 .image(tree, 400, 170);  

  



game.newScene()

  .animation(bird  , 100, 100  )

  .animation(flower, 300, 170)

  .image(spike3, 550, 105);

game.newScene()

.text("朱彩晴", 100, 100, "orange")

  .animation(chomper, 100,170)

 .animation(chomper, 200,120)

 .animation(bird, 450,100)

.image(spike3, 600, 100);



game.newScene()

.text("朱彩晴", 100, 100, "orange")

.image(spike2,50, 90)

 .animation(crab, 300, 170)

.animation(flower, 350, 170)

.animation(fire, 460, 150)

.animation(bird, 450,130)

.image(tree, 600, 170);
game.newScene()

  //写文本的函数

 .text("彭浩余出品", 200, 100, "blue");

  /*//画动态图的函数

 .animation(flower, 500, 100)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 20, 170)

  .image(spike1, 100, 80)

  .image(tree, 120, 170)

  .animation(fire, 200, 180)

 .animation(bird, 300, 130);



game.newScene()

 .animation(crab, 400, 170)

.image(cacti, 10, 175)

 .image(spike1, 100, 80)

.image(spike3, 250, 120)

.image(spike2, 300,150)

.image(spike2, 350, 120);

game.newScene()

  .animation(flower, 100, 172)

 .image(spike3, 254, 110)

.image(spike1, 405, 170)

  .animation(fire,506, 170)

  .image(spike2, 550, 180)

.animation(bird, 330, 33)

.animation(fire, 340, 2);



game.newScene()

  .image(tree, 120, 170)

 .image(spike2, 254, 145)

.image(spike1, 467, 170)

  .animation(chomper,550, 145)

.animation(bird, 330, 33)

.animation(fire, 340, 2);
game.newScene()

  .image(spike1, 100, 150)

  .image(spike3, 150, 100)

  .animation(bird, 200, 85)

 .animation(bird, 400, 160)

 .animation(bird, 450, 85)

.image(tree, 530, 120);



game.newScene()

 .animation(crab, 140, 180)

  .animation(bird, 210, 88)

 .animation(fire, 270, 130)

 .animation(fire, 300, 170)

  .image(spike2, 470, 130)

  .animation(flower, 530, 160)

.image(cacti, 600, 60);
game.newScene()

  //写文本的函数

 .text("Jerry出品", 100, 50, "blue")

  //画动态图的函数

 .animation(chomper,100, 170) 

.animation(bird,300, 100) 

.animation(fire, 500, 170) 

 //画静态图的函数

 .image(tree, 540, 170);  





game.newScene()

 //写文本的函数

 .text("Jerry出品", 100, 50, "blue")

 //画静态图的函数

  .image(spike3, 100, 110)

 //画动态图的函数

  .animation(flower, 300, 170)

  .animation(crab, 500, 100);
game.newScene()

  //写文本的函数

 .text("Jay出品", 100, 200, "blue")

  //画动态图的函数

 .animation(chomper, 50, 170)  

 //画静态图的函数

    

.animation(fire, 250, 170)

.animation(flower,350, 170)

.animation(bird,400 , 170)

.animation(fire,450 , 170)

.animation(crab,590 , 170)

.image(spike1,275,100);  





game.newScene()

  .animation(bird, 100, 150)

  .animation(fire, 300, 170)

  .animation(crab, 400, 180)

.image(tree,150,170)

.image(spike2,450,150);

game.newScene()

  

.text("超级无敌机智璐   出品", 200, 50, "black")

  

.animation(flower, 30, 170)

  

.image(tree, 230, 170)

  

.animation(crab,430,170)

  

.image(spike2,500,100);







game.newScene()

  

.animation(chomper, 250, 170)

  

.animation(chomper, 300, 170)

  

.animation(chomper, 350, 170);







game.newScene()

  

.image(spike2, 50, 90)

  

.image(spike1, 250, 170)

  

.image(spike2, 300, 145)

  

.image(spike3, 350, 110);







game.newScene()

  

.animation(fire, 50, 170)

  

.animation(fire, 200, 100)

  

.image(spike1,350, 100)

  

.image(spike1,400,170);







game.newScene()

  

.animation(bird, 80, 100)

  

.image(cacti, 340, 170)

  

.animation(bird, 580, 100);



game.newScene()

  //写文本的函数

 .text("李笑禾", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 140)  

 //画静态图的函数

 .animation(bird, 400, 110);  





game.newScene()

  .animation(fire, 100, 180)

  .animation(chomper,300,170)

  .image(spike3, 350, 110)

  .image(tree, 550, 170);


game.newScene()

  //写文本的函数

 .text("康怀瑾", 300, 200, "blue")

.text("陈瑶", 400, 100, "red")

  //画动态图的函数

 .animation(chomper, 10, 160)  

.animation(crab, 301, 5)

 //画静态图的函数

 .image(tree, 200, 170) 

.image(cacti, 531, 165);





game.newScene()

 .text("康海涛", 560, 131, "green")

.image(tree, 50, 103)

.animation(bird, 501, 8);



game.newScene()

  //写文本的函数

 .text("Emily出品", 200, 110, "purple")

  //画动态图的函数

 .animation(chomper, 100,  170)  

 .animation(bird, 200, 170);  

 //画静态图的函数

 





game.newScene()

  .image(tree, 400, 160)

  .animation(chomper, 500, 170)

  .animation(crab, 700, 190);

game.newScene()

  //写文本的函数

 .text("Frank出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(bird,400,50)  

 //画静态图的函数

 .image(spike3, 400, 100);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("Julia出品", 200, 100, "pink")

  .animation(fire, 300, 170)

  .image(tree, 100, 180)

 .image(spike3, 50, 99)

 .animation(flower, 500, 60);



game.newScene()

.text("Julia出品", 200, 100, "pink")

  .image(spike3, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180);
game.newScene() 

 

.text("Lisa Elina Lucy Annie出品", 400, 20, "blue")



 .animation(fire, 200, 180) 



 .animation(crab, 300, 50)

 

 .image(tree, 400, 170)



 .image(chomper, 8, 2)



 .animation(crab, 200, 160);







game.newScene()

 

 .image(tree, 100, 150)



  .image(fire, 300, 170)



.animation(fire, 200, 23);





game.newScene()



 .image(spike2, 100, 150)



.image(fire, 300, 170)



.animation(fire, 200, 23);

game.newScene()

  .text("leo出品", 200, 100, "blue")

  .animation(chomper, 100, 150)

  .animation(bird, 300, 170)

  .animation(fire, 500, 180);



game.newScene()

  .text("leo出品", 200, 100, "blue")

  .image(spike3, 100, 150)

  .image(spike1, 300, 170)

  .animation(flower, 500, 180)

   .image(spike2,590,140) ;

game.newScene()

  //写文本的函数

 .text("赵文瑞", 50, 30, "red")

  //画动态图的函数

 .animation(chomper,50, 170) 

 .animation(fire,170, 180)

 .animation(chomper,250, 170)  

 //画静态图的函数

 .image(spike3, 450, 110)  

 .image(cacti, 500, 170)

 .image(spike2, 550, 150); 





game.newScene()

  .image(spike1, 100,5)

  .animation(crab,100, 170) 

  .animation(flower,200, 170)

  .animation(flower,440, 170) 

 .image(spike3, 600, 110)

 .image(spike2, 560, 150);



game.newScene()

  //写文本的函数

 .text("赵文敏",150, 30, "blue")

  //画动态图的函数

 .animation(chomper,150, 170)  

 //画静态图的函数

 .image(spike1,450, 170) 

 .image(cacti,300, 170) 

 .image(spike2,500, 150)

 .animation(bird,600,30) ; 





game.newScene()

  .animation(chomper,100, 170) 

  .animation(chomper,150, 170) 

 .image(spike3,350, 110)

 .image(spike1, 300, 170)

.image(spike1, 400, 170)

.image(tree, 500, 170);
game.newScene()

.text("rainy出品", 200, 100, "green")

  .image(spike2, 100, 150)

  .animation(chomper, 300, 170)

  .animation(fire, 500, 180);
game.newScene()

  //写文本的函数

 .text("祁奕豪出品", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 100, 130)  

.animation(flower, 100, 170)  

 //画静态图的函数

 .animation(fire, 300, 180) 

.animation(crab, 500, 180) ;  





game.newScene()

.text("祁奕豪出品", 200, 100, "blue")

  .image(spike2, 100, 150)

 .animation(chomper, 240, 180)

  .image(tree, 450, 170)

  .animation(bird, 450, 120);
game.newScene()

  //写文本的函数

 .text("Isabella出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200,145)  

 //画静态图的函数

 

.image(spike1,200, 170);  





game.newScene()

 .text("Isabella出品", 200, 100, "white")

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 490, 170)

.animation(fire, 500, 190);
game.newScene()

  .animation(fire, 100, 180)

  .animation(chomper, 200, 170)

  .animation( flower, 450, 170)

.image(tree, 600, 170)  

.image(cacti, 500, 170); 



game.newScene()

  .image(spike3, 300, 110)

  .animation(crab, 360, 180)

  .animation( fire, 570, 180)

.image(tree, 600, 170) ;
game.newScene()

 

 .text("ETHAN", 200, 100, "white")

  

.animation(bird, 20, 170)



  .animation(fire, 80, 170)

 

 .animation(bird, 150, 20)

  

.image(tree, 350, 160)

  

.image(spike2, 400, 150);





game.newScene()

 

 .text("ETHAN", 200, 100, "white")

 

 .animation(fire, 60, 170)

 

 .animation(fire, 120, 170)



  .image(spike1, 280, 30)

 

 .image(spike1, 400, 110);





game.newScene()

 

 .animation(crab, 200, 170)



  .animation(crab, 300, 170);
game.newScene()

.text("10003出品", 200, 100, "blue")

.image(spike1, 100, 150)

  .image(cacti, 300, 170);



game.newScene()

  .animation(flower, 100, 150)

  .image(tree, 300, 170)

.image(tree, 500, 170);
game.newScene()

  .animation(chomper,250,170)

  .animation(bird,100,170)

 .animation(bird, 500, 120)

  .animation(bird, 400, 180) 

  .animation(bird, 450, 150);

game.newScene()

  .image(spike1, 0, 170)

  .image(spike2, 60,50)

  .animation(crab, 500, 180);

game.newScene()
  .text("汪宇辰出品", 300, 120, "red")

  .animation(bird, 100, 100)

  .animation(bird, 100, 150)

  .image(tree, 400, 170)

  .image(spike2, 500, 150);



game.newScene()

  .animation(fire, 250, 170)

  .animation(crab, 300, 170);



game.newScene()

  .text("Rita出品", 200, 100, "pink")

  .animation(flower, 200, 170)

  .animation(fire, 300, 170)

  .image(tree, 400, 170);



game.newScene()

  .animation(flower, 250, 170)

  .animation(crab, 300, 170);
game.newScene()

  //写文本的函数

 .text("Todd出品", 10, 50, "blue")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(spike2, 500, 140)

.image(cacti, 350, 70)  

.animation(chomper, 100, 180);



game.newScene()

 .text("Todd出品", 10, 50, "blue")

.image(spike2, 480, 90)

.animation(bird, 300, 100)

.animation(bird, 350, 50)

.animation(bird, 400, 10)

  .image(cacti, 100, 300)

  .image(cacti, 100, 170)

  .animation(crab, 600, 180);


game.newScene()

  //写文本的函数

 .text("Ray出品", 200, 150, "black")

  //画动态图的函数

 .image(spike1, 50, 175)  

 //画静态图的函数

 .image(spike2, 150, 143)  

 .image(spike3, 400, 110)

 .animation(chomper, 450, 175);



game.newScene()

  .animation(fire, 100, 180)

  .animation(crab, 350, 180)

  .animation(flower, 400, 170);

game.newScene()

 .text("sherry出品",50, 50, "purple")

  .animation(flower, 80, 170)

  .image(spike3, 300, 110)

  .image(tree, 500, 170);

game.newScene()

 .text("sherry出品",50, 50, "purple")

  .image(cacti, 100, 150)

  .animation(fire, 300, 180)

  .image(spike2, 500, 140   )

.image(spike2, 540, 140   );
game.newScene()

  //写文本的函数

 .text("江思琦的作品", 200, 100, "red")

 //画静态图的函数

 .image(spike1, 100, 170)

.image(cacti, 300, 170)

.image(spike2, 400,50)

  //画动态图的函数

 .animation(flower, 600, 170)

.animation(chomper, 500, 170);





game.newScene()

.text("第2关", 200, 100, "red")

.image(tree, 400,180)

  .animation(crab, 300, 170)

.animation(crab, 320, 170)

.animation(bird, 500, 100)

.animation(bird, 500, 130)

.animation(fire, 600, 150);
game.newScene()

  .text("april出品", 200, 100, "white")

  .animation(chomper, 100,170)

  .image(cacti, 300, 170)

  .animation(bird, 500, 60);

game.newScene()

  .image(spike1,150,20)

  .image(tree, 330, 170)

  .animation(crab, 100, 170)

  .image(spike3,370,120);
game.newScene()

  //写文本的函数

 .text("庞博", 200, 100, "white")

  //画动态图的函数

 .image(spike1, 5, 170)

 .image(spike2, 45, 143)

.animation(fire, 45, 100)

 .animation(chomper, 250, 170)

 .animation(chomper, 300, 125)

 //画静态图的函数

 .image(spike3, 480, 10);  

 

 



game.newScene()

.text("庞博", 200, 100, "white")

 .animation(bird, 300, 175)

 .animation(bird, 350, 150)

 .animation(bird, 400, 125)

  .image(spike2, 600, 150)

  .image(cacti, 130, 165)

.animation(flower, 70, 165)

.image(tree, 10, 165);
game.newScene()

  .image(cacti, 50, 150)

  .image(spike1, 400, 170)

.image(tree, 200, 170)

  .animation(fire, 500, 180)

.animation(bird,160, 140);



game.newScene()

  .animation(chomper, 100, 150)

  .image(spike2, 300, 170)

  .image(spike3, 500, 130);
game.newScene()

  //写文本的函数

 .text("蒋婉滢出品", 200, 100, "yellow");

  /*//画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(crab, 100, 180)

  .animation(fire, 200, 170)

  .image(tree, 500, 103)

  .animation(chomper,540,188);
game.newScene()

  //写文本的函数

 .text("翁姜琅玥出品", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 170)  

 .animation(bird, 300, 30) 

 .image(cacti, 450, 170)

.animation(bird, 585,180)

 //画静态图的函数

 .image(tree, 150, 170)

.image(spike3, 500, 110)

.image(spike2, 540, 150); 

game.newScene()

  //写文本的函数

 .text("翁姜琅玥出品", 200, 100, "pink")

 .image(tree, 250, 170)

.image(spike3, 300, 110)

.image(spike2, 340, 150)

.image(spike1, 380, 170)

.image(spike2, 550, 150)

.image(spike1, 590, 170); 

game.newScene()

  //写文本的函数

 .text("钟瑜悦", 200, 100, "red")

  //画动态图的函数

 .animation(bird, 100, 130)

  .animation(bird, 150, 130)

  .image(tree,270,170)

  .animation(crab,350,180);

 //画静态图的函数

 //.image(tree, 300, 170); 





game.newScene()

  //.image(spike2, 100, 150)

  //.image(cacti, 300, 170)

  //.animation(crab, 500, 180);

  .animation(fire,100,180)

  .image(cacti,150,180)

  .image(spike2,120,170)

.animation(flower,200,260);

game.newScene()

 

 //写文本的函数

 .text("徐子媛出品", 200, 50, "orange")

 

 //画动态图的函数



 .animation(fire, 200, 150)



.animation(fire, 200, 180)

 

//画静态图的函数



 .image(spike1, 400, 170) 



.image(spike2, 450, 150);





game.newScene()

 

 .image(spike2, 100, 150)

  

.image(cacti, 300, 170)

 

 .animation(crab, 500, 180) 



.animation(bird, 400, 50);



game.newScene()

  

//写文本的函数

 .text("徐子媛出品", 200, 100, "black")

 

 //画动态图的函数



 .animation(flower, 200, 170) 

 

 //画静态图的函数



 .image(tree, 400, 170) 



 .image(tree, 300, 150);





game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)

 

 .animation(crab, 500, 180);

game.newScene()
 .text("曾璨出品", 300, 150, "pink")

  //画动态图的函数

 .animation(bird, 200, 100)  

 //画静态图的函数

 .image(cacti, 400, 170)

 .image(tree, 550, 170);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("李佳妍出品", 200, 100, "PINK")

  //画动态图的函数

 .image(spike1, 250, 170)

.animation(bird,450,120)

.animation(fire,750,180)

 //画静态图的函数

 .image(tree, 950, 170);  





game.newScene()

  .image(spike2, 100, 170)

  .animation(flower, 300, 170)

  .animation(chomper, 500, 170);
game.newScene()

  //写文本的函数

 .text("张清淏出品", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 200, 180)  

.animation(bird, 230, 130) 

.animation(flower,445, 180) 

 //画静态图的函数

 .image(tree, 400, 170)

.image(cacti, 230, 170);  





game.newScene()

.text("我喜欢程咬金", 200, 100, "white")

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

.animation(fire, 460, 180)

  .animation(crab, 500, 180);
 //写文本的函数
game.newScene()
 .text("毛舜祺出品",300,150, "red")

 .text("毛舜祺好帅",500,150, "red")

  //画动态图的函数

 .animation(bird, 300, 170)  

 //画静态图的函数

 .image(spike3, 400, 100) 

//画静态图的函数

 .image(tree, 450, 150);  

 







game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180)

  .animation(chomper, 550, 180);
game.newScene()

  

//写文本的函数

 

.text("方皓麟", 200, 50, "white")



//画动态图的函数



 .animation( chomper, 200, 170)  



 .animation(bird,350,20 ) 

 

 //画静态图的函数

 .image(tree, 400, 170) 

 

 .image(cacti, 500, 170) 

 

 .image( spike3,600, 110);  





game.newScene()



 .image(tree,240, 170)  



 .image(cacti,400, 170) 

 

 .image( spike1,120, 90)  



 .image( spike3,600,110); 

 



game.newScene()

 

 //写文本的函数

 

.text("fona", 200, 50, "white")



//画动态图的函数

 

.animation( chomper, 200, 170)  



 .animation(bird,350,20 )  



 //画静态图的函数



 .image(tree, 400, 170)  



 .image(cacti, 500, 170)  



 .image( spike3,600, 110); 

 



game.newScene()

 

.image(tree,240, 170) 

 

 .image(cacti,400, 170)  



 .image( spike1,120, 90) 

 

 .image( spike3,600,110);
game.newScene()

  //写文本的函数

 .text("Betty出品", 200, 100, "purple")

  //画动态图的函数

 .animation(crab,50, 170)

 .animation(chomper, 210, 170)

 .animation(fire,380, 170)

 //画静态图的函数

 .image(tree, 550, 170);  





game.newScene()

  .image(spike2, 100, 150)

 .image(spike3, 260, 120)

  .image(cacti, 420, 170)

  .animation(crab, 580, 50)

.animation(cacti, 590, 180);
game.newScene()

 .text("if you win, you will be super", 200, 100, "black")

  .image(spike1, 100, 170)

  .image(spike2, 300, 150)

  .animation(bird, 500, 100)

.animation(crab,600,170);

game.newScene()

  .image(spike1, 100, 170)

  .image(spike1, 100, 0)

.image(spike1, 200, 170)

  .image(spike1, 200, 0)

  .animation(chomper, 300, 170)

.animation(flower,300,0)

.animation(flower,400,0)

.animation(fire,500,170)

.animation(bird,500,0)

.animation(fire,600,170)

.animation(bird,600,0);
game.newScene()

.text("MADE FROM IVY", 200, 100, "purple")

  .image(spike1, 100, 170)

  .image(spike2, 300, 145)

  .image(spike3, 500, 110)

  .animation(chomper,600,170);

game.newScene()

  .animation(bird, 100, 124)

  .animation(flower, 300,170)

  .image(cacti, 500, 170)

  .animation(bird,550,100);
game.newScene()

  //写文本的函数

 .text("caitlin出品", 150, 60, "black")

  //画动态图的函数

 .image(tree, 150, 170)  

 //画静态图的函数

 .image(tree, 350, 170)

.image(spike2,380,150)

.image(spike3,420,110);  





game.newScene()

  .animation(fire, 50, 180)

  .animation(flower, 250, 170)

  .image(spike1, 450, 160)

.image(tree,520,170)

.image(tree,570,170);
game.newScene()

  //写文本的函数

 .text("陆希文小朋友出品", 200, 100, "purple")

  //画动态图的函数

 .animation(chomper, 50, 170)

 .animation(bird, 200, 20) 

 //画静态图的函数

.image(cacti, 350, 170)

 .image(tree, 500, 170);  





game.newScene()

.animation(fire, 320, 170)

  .image(spike3, 430, 20)

.animation(flower, 520, 170)

.animation(crab, 650, 170);
game.newScene()

  //写文本的函数

 .text("mandy出品", 200, 160, "blue")

  //画动态图的函数

 .animation(fire, 14, 180) 

.animation(bird, 260, 19)

.animation(bird, 140, 180)

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

.text("mandy出品", 200, 160, "blue")

 .image(spike1, 4, 170)

.animation(chomper, 260, 160) 

  .image(spike3, 200, 150)

  

  .animation(crab, 500, 100);

game.newScene()

  //写文本的函数

 .text("jERRY", 100, 100, "red")

  //画动态图的函数

 .animation(chomper, 120, 170)  

.animation(chomper, 170, 170)

.animation(bird, 170, 80)

 //画静态图的函数.

.image(spike1, 380, 150)

 .image(spike3, 450, 100);  



game.newScene()

  //写文本的函数

 .text("jERRY", 100, 100, "white")

  //画动态图的函数

 .animation(fire, 120, 170)  

.animation(flower, 170, 170)

 //画静态图的函数

 .image(spike2, 330, 120)

 .image(spike3, 380, 120);  



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

 .animation(crab, 450, 150)

  .animation(crab, 500, 180);
game.newScene()

 .text("candy", 200, 100, "white")

 .image(tree, 200, 170)  

 .image(spike3, 400, 110);  





game.newScene()

 .text("candy", 200, 100, "white")

  .animation(fire, 100, 165)

  .image(cacti, 300, 170)

  .animation(crab, 600, 180)

 .animation(chomper, 200, 170);
game.newScene()
 .text("高方洁出品", 450, 150, "yellow")

  //画动态图的函数

 .animation(crab, 200, 150) 

 .animation(crab, 250, 130) 

 .animation(crab, 300, 110) 

 //画静态图的函数

 .image(tree, 350, 170);  





game.newScene()

  .image(spike3, 100, 100)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

.text("陈墨轩", 100, 100, "white")

 .animation(chomper,50, 140)

 .animation(fire,170, 170)

.image(spike2, 400,200)

.image(spike3, 500,100);

game.newScene()

.text("陈墨轩", 100, 100, "white")

.image(tree, 100, 170)

 .animation(flower, 400, 170);
game.newScene()

  //写文本的函数

 .text("小米出品", 200, 100, "yellow")

  //画动态图的函数

.animation(chomper, 50, 170)

.animation(bird, 350, 100)

.animation(bird,450, 180)

.animation(bird, 500, 155)

.animation(bird, 600, 100)

 //画静态图的函数

 .image(cacti, 150, 170);  





game.newScene()

  .image(spike3, 130, 115)

  .image(tree, 300, 170)

.image(tree, 350, 150)

  

 .animation(flower, 550, 170)

 .animation(crab, 550, 120);
game.newScene()

.text("cake", 200, 100, "blue")

  .animation(fire, 100, 150)

  .animation(chomper, 300, 170)

  .image(tree, 500, 180)

  .animation(bird,450,50)

  .image(spike1, 500,170);



game.newScene()

  .animation(crab, 100, 170)

  .image(spike2, 300, 170)

  .image(cacti, 500, 180)

  .animation(bird,450,50);
game.newScene()

  //写文本的函数

 .text("FELIX", 100, 100, "BLUE")

  //画动态图的函数

 .animation(chomper, 50, 170)  

 .animation(flower, 80, 170)  

 .animation(bird, 160, 60)

 //画静态图的函数

.image(spike1, 400, 170)

 .image(spike2,450, 150);  



game.newScene()

  //写文本的函数

 .text("FELIX", 200, 100, "BLUE")

  //画动态图的函数

 .animation(crab, 50, 170)  

.animation(crab, 80, 170)  

 //画静态图的函数

.image(tree, 400, 170)

 .image(tree,450, 170);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("bella出品", 200, 100, "purple")

  .animation(bird, 100, 150)

  .animation(crab, 450, 170)

  .animation(flower, 500, 170)

  .animation(chomper, 200, 170);

game.newScene()

  //写文本的函数

 .text("yuan出品1", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 100, 70) 

.animation(chomper, 350, 50)

.animation(fire,240, 180)

 .image(tree, 450, 170)

.animation(flower,530, 170)

 //画静态图的函数

 ;  





game.newScene()

.text("yuan出品2", 200, 100, "blue")

  .image(spike3, 350, 110)

  .animation(chomper, 100, 170)

  .animation(flower, 550, 170)

.animation(bird, 200, 30)

.animation(bird, 500, 30);

game.newScene()

  .animation(chomper, 80, 170) 

  .animation(bird, 350, 140)

.image(tree, 350, 100);



game.newScene()  

  .animation(flower,  300, 170)

.animation(bird , 350, 140)  

.image(tree, 350, 100)

.image(spike3,650, 110)

.image(spike1,490, 100);
game.newScene()

  //写文本的函数

 .text("毕凯城小朋友出品", 200, 100, "blue")

  //画动态图的函数

 .animation(crab, 50, 180)

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("elsa出品", 300, 50, "blue")

  //画动态图的函数

 .animation(crab, 200, 170)  

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

.text("elsa出品", 300, 50, "blue")

  .image(spike2, 100, 150)

.animation(flower, 200, 170)

  .image(cacti, 600, 170)

  .animation(crab, 500, 180);

//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("胡馨悦出品", 100, 100, "pink")

  //画动态图的函数

 .animation(chomper,150,170)

 //画静态图的函数

 .image(cacti,200,170)

 .image(spike2,400,145)

 .animation(flower,600,170)

 .animation(bird,600,0);

game.newScene()

  .text("胡馨悦出品", 100, 100, "pink")

  .animation(fire,100,180)

  .animation(bird,200,50)

  .image(spike3,320,110)

  //.animation(crab,450,0)

  .image(spike2,520,145);

 
game.newScene()

  //写文本的函数

 .text("金懿弘作品", 200, 100, "white")

  //画动态图的函数

 .animation(bird, 200, 45) 

.animation(chomper, 200, 90) 

.animation(fire, 20, 150) 

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("谢佳霓出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 200, 110)  

.animation(chomper, 400, 170)

.animation(bird, 400, 10)

 //画静态图的函数

 .image(tree, 600, 170);  





game.newScene()

  .image(spike2, 200, 140)

  .image(cacti, 450, 170)

  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("杨帆出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 100, 180)  

.animation(bird, 200, 30)  

 //画静态图的函数

 .image(spike2,300, 150)  

.image(spike2, 600, 150) 

.image(tree, 550, 100) ;

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 450, 170)

  .animation(flower, 100, 100)

  .animation(chomper, 450, 100);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("Jamnes出品", 200, 150, "gold")

  //画动态图的函数

 .animation(chomper, 80, 150)  

.animation(bird, 500, 150)

.animation(fire, 550, 200)



 //画静态图的函数

 .image(tree, 50, 170)

.image(spike2,200 , 90)

.image(spike2, 250, 90)

.image(spike2,350, 150)

.image(spike2, 400, 150);



game.newScene()

  .image(tree, 100, 160)

  .image(tree,130, 170)

.image(spike2,300, 90)

.image(spike2,350, 90)

.image(spike2,450, 150)

.image(spike2,500, 150);







 
game.newScene()

  .text("王一帆", 200, 100, "white")

  .animation(bird, 100,175 )

  .animation(chomper, 300, 120)

  .animation(flower, 250, 180)

.image(spike1, 500, 170)

.image(tree, 600, 170);



game.newScene()

.image(spike1, 200, 170)

.animation(bird, 450, 150)

.animation(crab,400,100);
game.newScene()

  .animation(fire, 100, 200)

  .image(cacti, 300, 170)

  .animation(fire, 100, 200)

.animation(flower, 500, 170)

.image(spike2, 100, 70)

 .animation(bird, 450, 60)

.animation(flower, 100,150)

.animation(bird, 430, 60)

.animation(bird, 420, 60);



game.newScene()

  .animation(fire, 100, 200)

  .animation(chomper, 300, 170)

  .image(tree, 100, 80)

.image(cacti, 500, 170)

.image(spike3, 600, 60)

.image(spike2, 100, 70)

 .animation(fire,450, 60)

.animation(flower,100,150)

.animation(crab,100,150)

.animation(fire,450, 60);
game.newScene()

 

 //写文本的函数



 .text("XZASV", 200, 100, "blue")

  

//画动态图的函数



 .animation(chomper, 200, 170)

 

.animation(fire, 370, 170)



 .animation(bird, 180, 140)



 //画静态图的函数

 

.image(tree, 400, 170); 

 



game.newScene()



  //写文本的函数

 

.text("XZASV", 0, 100, "blue")

 

 //画动态图的函数



 .animation(fire, 150, 100)



 .animation(fire, 150, 140)



 .animation(fire, 150, 170)



.image(spike1, 370, 100)



.image(spike1, 370, 140)



.image(spike1, 370, 170)

 

//画静态图的函数

 

.image(tree, 530, 170);





game.newScene()

  

.animation(bird, 250, 170)



  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("szx出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 170)  

 .animation(bird, 600, 120) 

 //画静态图的函数

 .image(spike1, 600, 170)

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 300, 150)

  .animation(chomper, 300, 100)

  .image(cacti, 500, 180);



game.newScene()

  .image(spike1, 250, 170)

  .image(spike2, 350, 140)

  .text("Bye-Bye", 200, 100, "white")

  .image(spike3, 600, 110)

  .animation(fire, 100, 180);
game.newScene()

  //写文本的函数

 .text("Kunson出品", 100, 50, "black")

  //画动态图的函数

 .animation(flower, 300, 170) 

 .animation(bird, 300, 1) 

 //画静态图的函数

 .image(spike1, 100, 170) 

.image(spike3, 500, 110);





game.newScene()

  .image(spike2, 300, 150)

 .animation(crab, 100, 180)

 .animation(bird, 450, 1)

  .animation(chomper, 540, 50)

  .animation(flower, 630, 100);
game.newScene()

  //写文本的函数

 .text("仇择尧出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 170)

 .animation(fire, 350, 170)

 //画静态图的函数

 .image(spike3, 500, 10);  





game.newScene()

  .image(tree, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

 .animation(chomper, 650, 150);
game.newScene()

.text("Jim出品", 200, 100, "yellow")

  .animation(chomper, 250, 150)

  .animation(fire, 300, 180)

  .image(spike1, 100, 150) 

.image(tree, 600, 170); 

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("jr出品", 10, 90, "black")

  //画动态图的函数

 .animation(chomper, 90, 170)  

 //画静态图的函数

 .image(spike1, 290, 170)

 .image(spike2, 320, 150)

 .image(spike3, 350, 110)

 .animation(fire,590, 170);







game.newScene()

  .animation(flower, 90, 170)

  .animation(flower, 120, 170)

  .image(tree, 160, 170)

  .image(tree, 180, 170)

  .animation(bird, 430, 140)

  .animation(bird, 450, 120)

  .animation(bird, 470, 100);
game.newScene()

  //写文本的函数

 .text("张念杰的作品",50, 50, "green")

  //画动态图的函数

 .animation(chomper, 300, 170) 

.animation(bird, 50, 50)

 //画静态图的函数

 .image(spike3, 200, 120)  

 .image(cacti, 500, 170)

.animation(crab, 600,170);  





game.newScene()

.text("第2关",50, 50, "black")

  .image(spike3, 300, 110)

.animation(chomper, 250, 170)

.animation(bird, 450,50)

  .animation(fire, 550, 180)

 .image(cacti, 600, 5);
game.newScene()

  //写文本的函数

 .text("yang出品", 150,100, "purple")

  //画动态图的函数

 .animation(flower, 300, 170) 

 .animation(fire, 500, 180) 

.animation(chomper, 680, 170) 

 //画静态图的函数

 .image( spike1, 100, 170)

.image( spike1, 500,1);





game.newScene()

  //写文本的函数

 .text("yang出品", 150,100, "purple")

 //画静态图的函数

  .image(tree, 100, 170)

  .image(tree, 130, 170)

.image(spike1, 300, 100)

.image(spike1, 680, 60)

 //画动态图的函数

  .animation(fire, 500, 180)

.animation(fire, 470, 180);
game.newScene()

  //写文本的函数

 .text("Alice出品", 300, 100, "purple")

  //画动态图的函数

 .animation(chomper, 200, 170) 

 .animation(chomper, 400, 170);



game.newScene()

 .animation(fire,200, 170) 

 .animation(fire,150, 170) 

 .animation(bird,300, 70) 

  .animation(crab, 500, 170);



game.newScene()

.image(spike3,500, 110)

.image(tree,600, 170)

.image(tree,100, 170)

 .image(cacti,300, 70);
game.newScene()

  //写文本的函数

 .text("TOM出品", 200, 100, "black")

  //画动态图的函数 

 .animation(fire, 400, 170) 

 .animation(bird, 500, 100)

 //画静态图的函数

 .image(tree, 100, 170) 

.image(spike1, 200, 170)

.image(cacti, 300, 200);

game.newScene()

  .image(spike3, 200, 90)

  .animation(crab, 100,120)

  .animation(flower, 300,70)

  .animation(chomper, 400,100);
game.newScene()
.text("刘雨鑫出品", 300, 80, "purple")

  .image(tree, 100, 170)

  .image(spike2, 300, 140)

  .animation(crab, 490, 180)

 .animation(crab, 550, 180);

 

game.newScene()

.text("刘雨鑫出品", 300, 80, "purple")

  .animation(fire, 100, 180)

  .animation(bird, 300, 180)

  .animation(bird, 380, 130)

 .animation(bird,330 , 90);

game.newScene()

.text("刘雨鑫出品", 300, 80, "purple")

  .image(cacti, 100, 170)

  .animation(chomper, 290, 170)

  .animation(chomper, 340, 170);
game.newScene()

.text("辰辰", 300, 50, "red")

  .image(spike3, 350, 110)

  .image(spike3, 400, 110)

  .animation(fire, 50, 180)

.animation(fire,100, 180)

.animation(fire, 150, 180);

game.newScene()

.text("辰辰", 300, 50, "red")

  .image(spike2, 350, 90)

  .image(spike2, 500, 150)

  .animation(bird, 50, 180)

.animation(bird,100, 180)

.animation(bird, 150, 180);
game.newScene()

.text("彭宸畅，kitty", 200, 50, "white")

.animation(fire, 100, 180) 

.animation(crab, 290, 180) 

.animation(bird, 399, 33)

.animation(chomper, 555, 170)

.image(spike1, 555, 1)

.text("小心！！", 400, 100, "white");







game.newScene()

.text("来者必死", 200, 50, "white")

.image(tree, 100, 170)

.animation(fire, 290, 180)

.animation(bird, 399, 33)

.animation(fire, 555, 170)

.animation(flower, 600, 170)

;
game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .animation(chomper, 80, 170)

  .animation(bird, 260, 160)

  .image(spike2, 480, 145);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .image(tree, 100, 170)

  .animation(crab, 260, 180)

  .animation(fire, 480, 180);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .animation(fire, 80, 180)

  .image(cacti, 260, 170)

  .image(tree, 480, 170);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .image(spike3, 80, 110)

  .animation(chomper, 300, 170)

  .animation(bird, 480, 145);
game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .animation(chomper, 80, 170)

  .animation(bird, 260, 160)

  .image(spike2, 480, 145);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .image(tree, 100, 170)

  .animation(crab, 260, 180)

  .animation(fire, 480, 180);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .animation(fire, 80, 180)

  .image(cacti, 260, 170)

  .image(tree, 480, 170);



game.newScene()

.text("宁诚，莫隽棠", 200, 100, "green")

  .image(spike3, 80, 110)

  .animation(chomper, 300, 170)

  .animation(bird, 480, 145);
game.newScene()

.text("范语晨", 200, 100, "yellow")

  .animation(chomper, 100, 170)

  .image(cacti, 400, 170)

  .animation(crab, 450, 180);

game.newScene()

.text("范语晨", 200, 100, "yellow")

   .animation(fire, 250, 180)

  .image(spike1, 400, 170)

   .image(tree, 600, 170);

game.newScene()

.text("范语晨", 200, 100, "yellow")

  .animation(bird, 500, 180)

  .image(spike3, 300, 20)

  .animation(flower, 400, 170);

game.newScene()

  //写文本的函数

 .text("吕俊杰的作品", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 200, 170) 

.image(spike3, 400, 110)

.animation(bird, 600, 50) 

 //画静态图的函数

 .image(tree, 100, 170);  





game.newScene()

.text("第2关", 200, 100, "yellow")

  .animation(flower, 100, 180)

.animation(crab,190, 180)

.animation(chomper,410,5)

.image(cacti, 400, 170);



game.newScene()

.text("张晋奕的作品", 200, 100, "yellow")

.image(tree, 100, 170)

.animation(bird,150, 10)

.image(spike2, 250, 160)

.image(spike3, 350, 110)

.animation(fire,550, 170);
game.newScene()

  //写文本的函数

 .text("ylc出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 400, 170)  

 .animation(chomper, 550, 170)  

 //画静态图的函数

 .image(spike2, 200, 145);  





game.newScene()

  .animation(bird,130, 100) 

.animation(fire,350, 180) 

   .animation(flower, 230, 170) 

.animation(crab,490, 175);





game.newScene()

 .animation(bird,130, 100);
game.newScene()

  //写文本的函数

 .text("刘小天", 300, 200, "red")

.text("妈妈",400,100,"green")

  //画动态图的函数

 .animation(flower, 200, 170) 

.animation(bird,50,50)

 //画静态图的函数

 .image(tree, 400, 170)  

.image(spike3,450,100);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(chomper,600,180)

.animation(fire,400,180);
game.newScene()

  //写文本的函数

 .text("倪楷玲出品", 200, 100, "pink")

  //画动态图的函数

 .animation(crab, 200, 170)

 //画静态图的函数

 .image(spike2, 480, 140) 

 .image(tree,40, 150);  

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 425, 180);

game.newScene()

  //写文本的函数

 .text("王羽轩小朋友出品", 200, 100, "orange")

  //画动态图的函数

 .animation(fire, 280, 170) 

 .animation(fire, 304, 170) 

 .animation(fire, 509, 170) 

 .animation(fire,550, 170) 

 .animation(fire, 600, 170) 

 .animation(bird, 700, 11)

.animation(bird, 650, 20)

.animation(bird, 600,20)

.animation(bird, 550,11)

.animation(crab, 500, 11);

 //画静态图的函数  





game.newScene()

 .animation(crab, 200, 170) 

 .animation(fire, 200, 170) 

 .animation(fire, 200, 170) 

  .image(spike3, 100, 150)

  .image(cacti, 300, 170);
game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

.animation(flower, 150, 170)

.animation(flower, 200, 130)

.image(spike1, 250, 170)

.image(tree, 450, 170)

.image(spike1, 500, 140)

.image(cacti, 550, 170);
game.newScene()

  .text("Allen出品", 200, 100, "blue")

  .animation(fire, 30, 180)

  .animation(bird,200, 170)

  .animation(bird, 250, 150)

  .animation(bird, 300, 130)

.animation(crab, 500, 170)

.image(cacti, 600, 170);



game.newScene()

  .text("Allen出品", 200, 100, "blue")

  .image(spike3, 60, 110)

.image(tree, 300, 170)

  .animation(flower,350, 170)

.animation(chomper,600, 170);
game.newScene()

  //写文本的函数r

 .text("郭翰星",150,100 , "red")

 .text("小鸟",190,110,"blue")

 .image(spike3,350,100)

 .image(cacti,395,200)

 .animation(crab,80,110)

 .animation(fire,199,180);



  game.newScene()

.animation(fire,600,170)

.animation(bird,400,0)

.animation(chomper,90,150)

.image(spike2,135,150)

.image(tree,435,155)

.animation(bird,350,10);
game.newScene()

  //写文本的函数

 .text("Luke", 300, 200, "red")

.text("妈妈",200,100,"green")

  //画动态图的函数

 .animation(chomper, 220, 170) 



 //画静态图的函数

 .image(spike1, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数r

 .text("夏侯焜", 300, 200, "blue")

.text("某某某",285,50,"grey")

  //画动态图的函数g

 //画静态图的函数

 .image(tree, 600, 0)

.image(spike2,345,135)

.animation(crab,0,115)

.animation(fire,600,170)

.image(cacti,295,150);



  game.newScene()



.animation(fire,600,170)

.animation(bird,400,0)



.animation(chomper,90,150);
game.newScene()

.text("lynn jonny", 200, 100, "blue")

  .animation(flower, 100, 168)

  .animation(fire, 300, 170)

  .animation(chomper, 500, 174);



game.newScene()

  .image(spike3, 100, 111)

  .animation(flower, 300, 170)

  .animation(chomper, 500, 174);

game.newScene()

  .image(tree, 100, 168)

  .image(spike3, 300,113)

  .image(cacti, 500, 174);

game.newScene()

  .animation(bird, 100, 12)

  .image(cacti, 300, 170)

  .animation(crab, 500, 174)

.image(spike3,550,114)

.image(tree,580,171);
game.newScene()

.text("sherry出品", 222, 90, "pink")

  .image(tree, 100, 170)

  .image(spike2, 300, 145)

  .animation(flower, 500, 165);

game.newScene()

.text("sherry出品", 222, 90, "pink")

  .image(cacti, 100, 170)

  .image(spike1, 300, 120)

  .image(spike3, 500, 120);
game.newScene()

 .text("ghstyh", 200, 100, "blue")

  .animation(flower, 100, 170)

  .animation(crab, 300, 180)

.image(cacti, 600, 170);



game.newScene()

 .text("ghstyh", 200, 100, "blue")

  .animation( chomper, 100, 170)

  .animation(bird, 300, 10)

  . animation(fire, 500, 180)

.image(tree, 400, 170);
game.newScene()

  //写文本的函数

 .text("陆昱鈜出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170)

.animation(chomper, 250, 170)

.animation(crab, 450, 180)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

.text("奶奶你辛苦了！", 200, 100, "red")

.image(cacti, 400, 170)

  .image(spike2, 100, 150)

  .image(cacti, 450, 170)

  .animation(crab, 500, 180)

 .animation(fire, 480, 180)

.animation(bird, 250, 20);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("nmy", 200, 100, "yellow")

 .text("nicole", 300, 100, "purple")

  //画动态图的函数

.animation(chomper,100,170)

 //画静态图的函数

 .image(cacti,130,170)

.image(spike1,300,170)

.animation(bird,450,30)

.animation(fire,600,180);

game.newScene()

.text("hello",200,100,"green")

.text("bye",300,100,"blue")

.image(tree,250,170)

.animation(crab,280,130)

.animation(flower,300,170)

.image(spike1,450,170)

.image(spike2,480,150)

.animation(flower,500,170);

 
game.newScene()

  //写文本的函数

 .text("王泽铭出品", 200, 100, "YELLOW")

  //画动态图的函数

 .animation(chomper, 250, 170)  

 //画静态图的函数

 .image(spike3, 450, 120)  

.animation(bird, 70, 150); 



game.newScene()

.animation(fire,10, 180)

  .image(cacti, 130, 170)

  .animation(crab, 300, 180)

  .animation(flower, 500, 170);
game.newScene()

  //写文本的函数

 .text("徐忆辰出品", 200,90, "BLUE")

  //画动态图的函数

 .animation(chomper, 180, 170)  

 .animation(bird, 295, 60) 

 .animation(bird, 360, 30)

 .image(spike1, 540, 60) 

 //画静态图的函数

 .image(cacti, 400, 170)

 .animation(flower, 25, 170) ;



game.newScene()

.text("徐忆辰出品", 200,90, "BLUE")

.image(tree, 50, 170)

  .image(spike2, 120, 150)

  .image(cacti, 250, 170)

  .animation(chomper, 520, 180)

.animation(fire, 385, 180)

.animation(bird, 330, 40)

.animation(bird, 400, 15)

.animation(bird, 490, 5)

.image(spike2, 190, 60);
game.newScene()

.text("郑欣言", 200, 50, "white")

 .animation(fire,50,180)  

.image(cacti, 200, 170)

.animation(chomper, 378,111)

.image(spike1, 500, 170)  ;

game.newScene()

.animation(bird, 200,110)  

.image(tree, 400, 170);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("张芮琪", 200, 100, "gold")

  //画动态图的函数

 .animation(chomper, 0, 0)  

 //画静态图的函数

 .image(spike2, 300, 150)

 .animation(bird,300,120)

 .animation(fire,500,170)

 .animation(flower,500,120);  





game.newScene() 

  .image(tree, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab,500,170);



 
game.newScene()

  .text("Tommy Wang出品", 200, 100, "green")

  .animation(fire, 100, 179)

  .animation(flower, 300, 170)

  .image(spike1, 500, 173);



game.newScene()

  .text("Tommy Wang出品", 200, 100, "green")

  .image(tree, 100, 170)

  .animation(crab, 300, 180)

  .animation(chomper, 500, 173)

  .image(spike3, 100, 110);
game.newScene()

.text("DVD出品", 200, 100, "blue")

  .animation(chomper, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180)

  .animation(bird, 500, 130);



game.newScene()

  .image(spike1, 150, 170)

  .image(spike3, 400, 130)

  .animation(flower, 600, 170);
game.newScene()

  //写文本的函数

 .text("mary出品", 87, 100, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .animation(flower, 400, 170);  





game.newScene()

  .animation(fire, 100, 180)

  .image(spike2, 300, 150)

  .image(tree, 500, 170)

.image(cacti,600,170);

game.newScene()

  //写文本的函数

 .text("mary出品", 87, 100, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .animation(flower, 400, 170);  





game.newScene()

  .animation(fire, 100, 180)

  .image(spike2, 300, 150)

  .image(tree, 500, 170)

.image(cacti,600,170);

game.newScene()

 .image(spike2, 550, 150)

  .image(spike2, 450, 150)

.animation(bird, 400, 5) 

.animation(crab, 100, 180) 

.animation(chomper,200, 170)

.animation(fire, 400, 180); 



game.newScene()

 .image(spike1, 100, 70)

  .image(tree, 450, 150)

.animation(bird, 400, 10) 

.animation(fire, 300, 170) 

  .image(spike1, 350, 150);
game.newScene()

  .animation(flower, 100, 170)

 .animation(fire, 120, 120)

 .image(tree, 12, 170)

  .image(spike1, 200, 170)

  .animation(chomper, 500, 180)

 .animation(bird, 600, 170);
game.newScene()

  //写文本的函数

 .text("Cici出品", 200, 100, "black")

  //画动态图的函数

 .animation(chomper, 20, 170)

 .animation(crab, 170, 170) 

 .animation(fire, 310, 170)

 //画静态图的函数

 .image(tree, 530, 170);  





game.newScene()

  .image(spike3, 0, 110)

  .animation(bird, 170, 10);
game.newScene()

 .text("王晗琳", 200, 100, "white")

 .animation(chomper, 100, 170)

.image(spike1, 150, 170)

.image(cacti, 190, 170)

.animation(chomper, 350, 170)

.animation(crab, 387, 180)

.image(spike3, 450, 110)

.animation(bird, 100, 10)

.animation(bird, 150, 10)

.animation(bird, 200, 10)

.animation(bird, 250, 10)

.animation(fire, 300, 40);

game.newScene()

 .text("王晗琳", 200, 100, "white")

.animation(flower, 300, 180)

.animation(flower, 335, 180)

.animation(flower, 370, 180)

.animation(chomper, 380, 8)

.animation(chomper, 335, 2)

.animation(chomper, 290, 8)

.image(spike3, 530, 110)

.image(spike2, 565, 150)

.animation(bird, 20, 180)

.animation(bird, 20, 150);

game.newScene()

  //写文本的函数

 .text("Thomas出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 400, 170)

  .animation(crab, 167, 180)

.animation(fire, 400, 190)

.animation(chomper, 480, 170);



game.newScene()

.image(spike2, 60, 150)

.image(crab, 90, 170);
game.newScene()

  //写文本的函数

 .text("zc出品", 200, 100, "orange")

  //画动态图的函数

 .animation(flower, 200, 170) 

 .animation(bird, 300, 100)  

 //画静态图的函数

 .image(tree, 300, 170)

.image(cacti, 500, 170);  





game.newScene()

.text("zc出品", 200, 100, "orange")

.animation(bird, 100, 100)

.animation(flower, 150, 170)

  .image(spike1, 300, 70)

  .image(tree, 400, 170);
game.newScene()

  //写文本的函数

 .text("马国瑞", 100, 100, "black")

  //画动态图的函数

 .animation(fire, 50, 120)  

 .animation(fire, 50, 150)  

 .animation(fire, 50, 170) 

 .animation(chomper, 250, 170) 

 //画静态图的函数

.image(spike1, 350, 150)

 .image(spike2, 400, 120);



game.newScene()

  .image(tree, 200, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("joey出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 300, 170)  

.animation(bird, 500, 1) 

 //画静态图的函数

 .image(cacti, 100, 170)

 .image(spike1, 500, 170)

 .image(tree, 680, 170);  





game.newScene()

  .image(tree, 30, 150)

  .image(spike1, 300, 100)

  .animation(chomper, 300, 180)

 .animation(chomper, 500, 180)

 .animation(crab, 540, 180)

 .animation(fire, 650, 100);
game.newScene()

  //写文本的函数

 .text("李然诺出品", 100, 50, "GREEN")

  //画动态图的函数

 .animation(crab, 100, 170) 

.animation(bird,300,25)

.animation(fire, 200, 175)

 //画静态图的函数

 .image(spike3, 500, 25)

.image(tree,350, 170);  





game.newScene()

.text("李然诺出品", 100, 50, "GREEN")

  .image(spike2, 100, 145)

    .animation(crab, 500, 180)

.animation(bird, 500, 85)

.animation(bird, 300, 85)

.animation(bird,100, 85)

.animation(chomper, 400, 180)

.animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Rojer出品", 200, 100, "orange")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



game.newScene()

.image(spike1, 80, 170)

.image(spike1, 120, 170)

 .animation(fire,360,180)

  .image(tree, 499, 170)          

   .image( cacti,540, 170)

 .image(spike1, 160, 170)

.image(spike2, 199, 150);

    

 
game.newScene()

  //写文本的函数

 .text("Abby出品", 200, 100, "purple")

  //画动态图的函数

 .animation(chomper, 20, 170)

 .animation(bird, 120, 70) 

 .animation(fire, 250, 170) 

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike3, 100, 100)

  .image(cacti, 350, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Jeremy出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 100, 170)  

 .animation(flower, 300, 170)

 .animation(bird, 500, 1)

 //画静态图的函数

 .image(cacti, 340, 170) 

 .image(spike1, 500, 170);





game.newScene()

  .image(spike1, 600, 30)

  .image(spike3, 700, 110)

  .animation(crab, 100, 180)

.animation(crab, 300, 180)

.animation(bird, 400, 30)

.animation(fire, 500, 180);



game.newScene()

  //写文本的函数

 .text("赵梓涵出品", 100, 100, "pink")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(cacti, 456, 170)

.image(tree,423,170)

.image(spike1,500,170);  





game.newScene()

  .animation(flower, 100, 170)

  .animation(bird, 300, 170)

  .animation(chomper, 500, 170)

.image(spike1,550,170);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("robert出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)

 .animation(flower, 250, 170)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike3, 90, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);



 
game.newScene()

  .animation(chomper, 70, 170)

  .animation(fire, 300, 177)

  .animation(crab, 500, 179)

.image(cacti, 700, 170)

.image(tree, 1, 170);



game.newScene()

  .image(tree, 70, 170)

  .image(spike3, 300, 110)

  .animation(fire, 500, 179)

.animation(bird, 600, 180);



game.newScene()

  .image(cacti, 70, 170)

.image(spike2, 130, 140)

  .animation(chomper, 300, 170)

  .animation(bird, 500, 110)

.animation(fire, 600, 180);
game.newScene()

  //写文本的函数

 .text("胡杨", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 100, 170)  

.animation(flower, 200, 170)

.animation(bird, 200, 140)

 //画静态图的函数

.image(spike2, 0, 0)

.image(spike1, 350, 170)

.image(spike1, 380, 170)

 .image(cacti, 500, 170);  



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("付子宸出品", 200, 100, "blue")

 .animation(chomper, 100, 170)

  .animation(crab, 500, 180)

  .animation(fire, 450, 170)

.animation(bird, 200, 170);
game.newScene()

.text("Ray出品", 200, 100, "green")

  .animation(chomper, 100, 170)

  .animation(fire, 300, 180)

  .image(tree, 500, 170);

game.newScene()

  .image(spike2,100,130)

  .image(spike1,200,50)

  .image(spike3,300,140)

  .animation(flower,460,170)

  .animation(bird,600,40);
game.newScene()

  .text("Larry出品", 200, 100, "blue")

  .image(spike2, 100, 150)

  .image(spike3, 150, 110)

  .animation(bird, 350, 100)

  .animation(chomper, 450, 180)

  .animation(fire, 500, 180);



game.newScene()

  .text("Jessie出品", 200, 100, "yellow")

  .animation(crab, 100, 180)

  .animation(bird, 250, 100)

  .animation(chomper, 400, 180)

  .image(spike3, 500, 110)

  .animation(fire, 600, 180);
game.newScene()

  //写文本的函数

 .text("OLIVER爱妈妈", 0, 100, "blue")

  //画动态图的函数

 .animation(chomper, 0, 170)  

 .animation(bird, 100, 150)

 .animation(bird, 130, 120)

 //画静态图的函数

 .image(spike2, 350, 140)

 .image(spike3, 400, 110);  



game.newScene()

  //写文本的函数

 .text("OLIVER爱爸爸", 0, 100, "blue")

  //画动态图的函数

 .animation(chomper, 80, 170)  

 .animation(crab, 150, 170)

 .animation(crab, 190, 170)

 //画静态图的函数

 .image(tree, 370, 170);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 250, 170)

  .animation(crab, 340, 180);
game.newScene()

  //写文本的函数

 .text("严心怡出品", 200, 100, "blue");

  //画动态图的函数

/* .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/

game.newScene()

  .animation(chomper,10,170)

  .animation(flower,50,170)

  .animation(crab,180,170)

  .image(spike3,350,10)

  .image(tree,450,170)

  .image(cacti,600,170);



game.newScene()

  .animation(bird, 100, 20)

  .animation(fire, 300, 170)

  .image(spike2, 500, 180)

  .image(tree,600,170);
game.newScene()

  .text("Thomas出品", 200, 100, "blue")

  .image(spike3, 100, 110)

  .animation(chomper, 300, 170)

  .image(tree, 500, 170)

 .animation(fire, 400, 170);



game.newScene()

  .text("Thomas出品", 200, 100, "white")

  .animation(flower, 100, 170)

  .animation(crab,200, 180)

  .image(spike1, 500, 180)

  .animation(fire,460, 170);
game.newScene()

  //写文本的函数

 .text("陈妙言出品", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 100, 180)  

 //画静态图的函数

 .image(spike3, 200, 110)

.animation(bird,300,10)

.animation(chomper,400,170)

.image(tree,500,170)

.animation(flower,600,170);







game.newScene()

  .image(spike2, 150, 150)

  .animation(bird, 300, 50)

  .animation(fire, 400, 180)

.image(cacti,500,170)

.animation(crab,600,170);

game.newScene()

  //写文本的函数

 .text("CRB出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 0, 170)  

.animation(fire, 700, 170) 

 //画静态图的函数

 .image(tree, 600, 170)

 .image(spike3, 200,110)

 .image(spike1, 400, 10);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

 .text("chencheng", 200, 100, "pink")

  .animation(chomper, 100, 170)

  .animation(flower, 300, 170)

  .animation(bird, 500,1)

.animation(bird,400,3);

game.newScene()

  .animation(fire, 100, 180)

  .animation(chomper, 300, 170)

  .animation(bird, 500,1)

.animation(bird,400,3)

.animation(flower,500,170);
game.newScene()

  //写文本的函数

 .text("小白熊出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 50, 170)  

.animation(flower, 300, 170)

.animation(bird, 456, 90)

.animation(bird, 550, 75)

 //画静态图的函数

 .image(cacti,135, 170);  





game.newScene()

  .animation(bird, 50, 15)

 .animation(bird, 135, 80)

.animation(crab, 350, 180);
game.newScene()

  //写文本的函数

 .text("justin出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  
 //画静态图的函数
 .image(spike1, 400, 110);  





game.newScene()

 .animation(fire, 100, 180)

  .image(spike1, 590, 110)

  .image(spike2, 50, 150)

  .image(spike3, 400, 110);



game.newScene() 

.animation(chomper, 300, 170)

 .image(spike3,550, 110)

.image(tree, 60,90);
game.newScene()

  //写文本的函数

 .text("justin出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(spike1, 400, 110);  





game.newScene()

 .animation(fire, 100, 180)

  .image(spike1, 590, 110)

  .image(spike2, 50, 150)

  .image(spike3, 400, 110);



game.newScene() 

.animation(chomper, 300, 170)

 .image(spike3,550, 110)

.image(tree, 60,90);
game.newScene()

  .animation(chomper, 100, 170)

  .animation(flower, 400, 170)

  .animation( bird, 500, 160);

game.newScene()

  .animation(crab, 100, 180)

  .animation(fire, 200, 180)

  .image( cacti, 500, 170);
game.newScene()

  //写文本的函数

 .text("Lillian出品", 100, 50, "blue")

  //画动态图的函数

 .animation(bird, 300, 1) 

 .animation(flower, 140, 170)

.animation(fire, 500, 170)

 //画静态图的函数

 .image( spike2, 100, 150) 

.image( tree, 300, 170);





game.newScene()

//写文本的函数

 .text("Lillian出品", 100, 50, "blue")

  //画静态图的函数

.image(tree, 100,60)

.image(spike1, 100, 100)

.image(spike1, 340, 170)

  .image(cacti, 300, 170)

 //画动态图的函数

  .animation(bird, 500, 1)

.animation(flower, 500, 170)

.animation(fire, 680, 180);



game.newScene()

  //写文本的函数

 .text("Judy出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 170)  

.animation(fire, 360, 180)

 //画静态图的函数

 .image(spike2, 600, 150);

 





game.newScene()

  .image(tree, 200, 160)

.animation(bird, 300, 190)

 

  .animation(chomper, 300, 230);
game.newScene()

.text("cf出品", 200, 100, "white")

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(crab, 250, 180)

.animation(chomper, 500, 180);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 190)

.animation(crab, 300, 180)

.animation(chomper, 500, 180);
game.newScene()

 .text("A公司出品", 200, 100, "yellow")

  .animation(chomper, 100, 170)

  .animation(bird, 300, 120)

  .image(spike3, 500, 180)

  .animation(fire,150,170);



game.newScene()

  .animation(crab, 100, 170)

  .image(tree, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

  .animation(chomper, 100, 170)

  .animation(fire, 300, 210)

  .image(crab, 500, 180)

 .image(spike3, 500, 100)

.animation(bird, 200, 210)

 .image(spike1, 700, 180);



game.newScene()

  .animation(flower, 100, 190)

  .image(tree, 300, 190)

  .image(crab, 500, 180)

 .image(spike2, 500, 110)

.animation(bird, 200, 190)

 .image(spike1, 600, 180);
game.newScene()

  //写文本的函数

 .text("sophie出品", 100, 50, "pink")

  //画动态图的函数

 .animation(flower, 70, 170)

.animation(chomper, 270, 170)

.animation(crab, 500, 175)

.animation(fire, 540, 175)

.animation(bird, 680, 100)

 //画静态图的函数

  .image(spike2, 310, 150);  





game.newScene()

  .image(tree, 180, 170)

.image(cacti, 220, 170)

  .image(spike3, 480, 110)

  .animation(chomper, 520, 170)

.animation(fire, 700, 180);
game.newScene()

  .text("张舒阳出品", 200, 100, "white")

  .animation(chomper, 100, 4)

  .image(tree, 300, 170)

  .animation(bird, 500, 1);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("Alex Maggie 傅哲出品", 200, 150, "red")

  //画动态图的函数

 .animation(chomper, 100, 170)  

.animation(fire, 195, 180)



 //画静态图的函数

   

 

.image(tree, 300, 170)

.image(spike3 ,600, 110);



game.newScene()

  .animation(fire, 130, 190)

  .image(spike3, 270, 110)

  .animation(crab, 500, 180)

  .animation(bird, 600, 50);

 
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text(" 傅哲", 100, 150, "gold")

  //画动态图的函数  

.animation(fire, 195, 180)

.animation(bird, 500, 180)

 //画静态图的函数

.image(spike3, 10, 110)  

.image(tree,60, 170)

 .image(spike1, 120, 30)

.image(spike1, 240, 170);

game.newScene()

 .image(spike3, 100, 120)

 .image(cacti, 30, 30)

 .animation(chomper, 300, 170)

.image(spike1, 400, 40);

 
game.newScene()

  //写文本的函数

 .text("Tristand", 200, 100, "green")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(spike3, 400, 10);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(fire,540,123)

  .animation(crab,169,21);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("DAN出版", 200, 100, "green")

  //画动态图的函数

 .animation(bird, 200, 100)  

 //画静态图的函数

 .image(spike3, 400, 110)

 .animation(chomper,290,170);  



game.newScene()

  //写文本的函数

 .text("SUNNY出品", 200, 100, "blue")

  //画动态图的函数

 .animation(crab, 200, 170)  

 //画静态图的函数

 .image(cacti, 400, 170)

 .animation(bird,300,110);  



game.newScene()

  //写文本的函数

 .text("wyt出品", 200, 100, "black")

  //画动态图的函数

 .animation(fire, 200, 170)  

 //画静态图的函数

 .image(spike1, 400, 170)

 .animation(crab,100,170);  





 
game.newScene()

  .image(spike1, 120, 170)

  .animation(fire, 300, 180)

  .animation(chomper, 455, 170);

game.newScene()

  .image(tree, 100, 170)

  .image(spike2, 300, 145)

  .animation(flower, 500, 170);
game.newScene()

.text("alisa出品", 200, 100, "pink")

  .image(tree, 100, 150)

  .animation(bird, 175, 170)

  .animation(fire, 400, 180) 

  .animation(chomper, 500, 180);



game.newScene()

  .image(spike2, 165, 170)

  .animation(crab, 230, 180)

  .animation(chomper, 550, 165)

  .image(cacti, 475, 170);
game.newScene()

 .text("大便", 200, 100, "white")

.image(spike3, 10, 110)

  .image(cacti, 46, 170)

  .animation(fire,86, 180)

 .animation(bird, 120, 15)

 .animation(chomper,215, 170)

.animation(bird, 230, 15)

.animation(flower, 327, 170)

.animation(fire,355,180)

.animation(bird,440,10);

game.newScene()

.text("", 200, 100, "white")

  .image(spike1, 10, 2)

  .image(spike1, 10, 170)

  .image(tree, 100, 170)

.animation(bird,200,10) 

.animation(chomper,350,170)

.animation(bird,350,10)

.animation(bird,380,10)

.animation(fire,400,180)

.animation(bird,420,10);
game.newScene()

 .text("gu出品1", 200, 100, "blue")

 .animation(bird, 100, 70) 

.animation(chomper, 350, 50)

.animation(fire,240, 180)

 .image(tree, 450, 170)

.animation(flower,530, 170);  





game.newScene()

.text("gu出品2", 200, 100, "blue")

  .image(spike3, 350, 110)

  .animation(chomper, 100, 170)

  .animation(flower, 550, 170)

.animation(bird, 200, 30)

.animation(bird, 500, 30);
game.newScene()

 .text("serena出品", 200, 100, "pink")

  .image(spike1, 170, 170)

  .animation(flower, 300, 170)

  .animation(fire, 520, 180);

game.newScene()

  .animation(bird, 170, 100)

  .animation(chomper, 300, 170)

  .image(spike3, 530, 110);
game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);





game.newScene()

  .image(spike3, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 560, 150)

  .animation(bird, 500, 170);





game.newScene()

  .image(spike3, 100, 120)

  .animation(bird, 100, 0)

  .animation(flower, 150, 120)

  .animation(fire, 500, 180)

  .animation(fire, 550, 150)

  .animation(fire, 600, 120);



game.newScene()

  .animation(fire, 100, 180)

  .animation(bird, 100, 150)

  .animation(crab, 300, 150)

  .image(spike1, 300, 180)

  .animation(bird, 500, 180)

  .animation(bird, 500, 20);



  game.newScene()

  .image(spike3, 100, 120)

  .animation(bird, 100, 0)

  .animation(flower, 150, 120)

  .animation(fire, 500, 180)

  .animation(fire, 550, 150)

  .animation(fire, 600, 120);
game.newScene()

  //写文本的函数

 .text("CRQ出品1", 200, 100, "yellow")

  //画动态图的函数

 .animation(flower, 80, 170) 

 .animation(bird, 260, 120) 

.animation(crab, 550, 175) 

 //画静态图的函数

 .image(cacti, 260, 170)

.image(spike2, 300, 150);  





game.newScene()

.text("CRQ出品2", 200, 100, "yellow")

 .animation(bird, 150, 180) 

 .animation(chomper, 200, 170) 

  .image(spike2, 500, 150)

  .image(cacti, 400, 170);
game.newScene()

  //写文本的函数

 .text("CRQ出品1", 200, 100, "yellow")

  //画动态图的函数

 .animation(flower, 80, 170) 

 .animation(bird, 260, 120) 

.animation(crab, 550, 175) 

 //画静态图的函数

 .image(cacti, 260, 170)

.image(spike2, 300, 150);  





game.newScene()

.text("CRQ出品2", 200, 100, "yellow")

 .animation(bird, 150, 180) 

 .animation(chomper, 200, 170) 

  .image(spike2, 500, 150)

  .image(cacti, 400, 170);
game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

 .image(spike1, 60, 160)

.image(spike2, 220, 20)

 .animation(bird, 350, 20)

 .animation(bird, 390, 20)

.image(tree, 600, 170);

game.newScene()

  //写文本的函数

 .text("Jenny出品", 267, 46, "pink")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(cacti, 100, 170);  





game.newScene()

 

  .image(tree, 500, 170)

  .animation(chomper, 100, 170)

.animation(crab,300,170);
game.newScene()

.text("karen出品", 200, 100, "white")

  .image(tree,30, 170)

  .image(spike3,150, 110)

  .animation(bird, 250, 10)

 .image(cacti,320, 170)

.animation(fire, 380, 180)

.animation(flower, 430, 170)

.animation(bird, 480, 10);
game.newScene()

  //写文本的函数

 .text("vector出品", 100, 50, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(fire, 350, 170)

 .animation(bird, 400, 100)

 .animation(crab, 400, 50)

//画静态图的函数

 .image(cacti, 440, 170);  



game.newScene()

  .image(spike2, 50, 130)

  .image(tree, 300, 170)

  .image(tree, 350, 190)  

  .image(spike3, 90, 110);
game.newScene()

.text("程牧冉出品", 200, 100, "purple")

  .animation(crab, 100, 150)

  .animation(flower, 300, 170)

  .animation(fire, 450, 180)

  .image(spike3, 400, 170);



game.newScene()

  .animation(bird, 100, 150)

  .animation(bird, 300, 170)

  .animation(bird, 600, 180)

  .animation(bird, 350, 170);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("Oscar出品", 200, 150, "blue")

.text("Stely出品", 200, 100, "black")

  //画动态图的函数

 .animation(chomper, 50, 170) 

.animation(crab, 360, 170)

 .animation(bird,190, 170)

.animation(fire, 510, 170) 

 //画静态图的函数

 .image(spike3, 70, 110)  

 .image(tree, 130, 170)

.image(spike1, 590, 170);



game.newScene()

  .image(spike3, 290, 200)

  .image(spike1, 400, 200)

  .animation(fire, 230, 180);



 
game.newScene()

  //写文本的函数

 .text("DEAD MAN", 100, 100, "red")

  //画动态图的函数

 .animation(chomper, 100, 170)  

.animation(flower, 150, 170)

 //画静态图的函数

.image(spike2, 450, 140)

 .image(spike1, 500, 170);  

 

game.newScene()

  //写文本的函数

 .text("DEAD MAN", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 100, 170)  

.animation(fire, 130, 180)

.animation(bird,300,140)

.animation(bird,350,140)

 //画静态图的函数

 .image(tree, 500, 170); 



game.newScene()

  .image(spike3, 100, 100)

  .image(spike2, 150, 150)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("张扬出品", 200, 100, "pink")

  //画动态图的函数

 .animation(chomper, 100, 170) 

 .animation(crab,600, 170) 

 //画静态图的函数

 .image(spike1, 400, 170)

 .image(spike2, 50, 120) 

 .animation(fire,50, 80) ;



game.newScene()

 .animation(crab,100, 170)

 .animation(crab,50, 170)

 .animation(flower,300, 170) 

 .animation(bird,600, 170);
game.newScene()

  //写文本的函数

 .text("吴宇涵出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 100, 170)

.animation(flower, 200, 170)

.animation(fire, 300, 100)

 //画静态图的函数

.image(spike1, 500, 160)

.image(spike2, 600, 140); 





game.newScene()

.image(tree, 300, 170); 
game.newScene()

 .text("暖春出品", 200, 100, "black")

  .animation(fire, 100, 150)

  .animation(flower, 300, 170)

  .animation(bird, 550, 180)

  .image(tree, 350, 170); 
game.newScene()

  //写文本的函数

 .text("朱承睿出品", 200, 100, "BLUE")

  //画动态图的函数

.image(spike3, 550, 100)  

 .animation(bird, 450, 10)  

 //画静态图的函数

 .image(spike2, 300, 140)  

.image(spike3, 150, 10)

.animation(fire, 500, 170);

game.newScene()

  .image(spike2, 200, 150)

  .image(cacti, 400, 170)

  .animation(crab, 500, 150);

game.newScene()

  //写文本的函数

 .text("Andy出品", 120, 170, "blue")

  //画动态图的函数

 .image(tree, 200, 170)  

 //画静态图的函数

 .image(spike1, 400, 170)

.animation(fire,460,180);  





game.newScene()

  .animation(flower, 100, 169)

   .animation(chomper, 300, 170)

.image(spike3, 500, 120)

.image(cacti,560,170);

//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("陈福锵，谭倬奇出品", 50, 100, "red")

  //画动态图的函0数

.animation(chomper,200,150)

. animation(flower,170,190)  

. animation(bird,400,20)

. animation(fire,200,100)



 //画静态图的函数

















 ;  





game.newScene()

.image(tree,200,170)

.image(spike2,400,170)

.image(spike1,600,150)

;



 
game.newScene()

  //写文本的函数

 .text("TIM出品", 100, 100, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)

.animation(fire, 250, 180)

 //画静态图的函数

 .image(tree, 400, 170)

.image(cacti, 450, 170);  





game.newScene()

.text("冰棍", 100, 100, "blue")

  .image(spike2, 100, 150)

.animation(crab, 150, 180)

.animation(bird, 150, 1)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("Ray", 200, 100, "white")

.image(spike2, 30, 145)

  .animation(bird, 85, 50)

//.image(spike2, 100, 150)

  .image(cacti,80, 170)

  .animation(crab,290, 180)

  .animation(crab, 330, 180)

  .animation(bird, 320, 10)

  .animation(chomper,450,170)

 .animation(chomper,500,170)

 .image(spike1,580,30)

 .animation(fire,580,5);

 

game.newScene()

.animation(crab,40,180)

.animation(bird,60,10)

.image(tree,90,170)

.image(tree,130,170)

.image(tree,170,170)

.image(spike3, 220, 110)

.animation(fire,380,180)

.animation(bird,390,10)

 .image(cacti,480, 170)

.animation(flower,580,170);



game.newScene()

.animation(bird,100,20)

.image(tree,200,170)

.image(spike1,500,110);
game.newScene()

  //写文本的函数

 .text("杨瑷宁出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170)  

.animation(bird, 400, 10)

.animation(bird, 450, 10)

.animation(crab, 400, 180)

 //画静态图的函数

 .image(tree, 150, 170);  





game.newScene()

 .text("节日快乐", 500, 100, "red")

.image(tree, 150, 170)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(flower, 400, 10)

.animation(bird, 400, 45);
game.newScene()

.text("陈柏颐出品", 150, 100, "white")

  .animation(chomper, 50, 170)

.animation(bird, 50, 100)

.animation(crab,240, 180)

.animation(fire, 500,180)

  .animation(bird, 590, 100);



game.newScene()

  .image(cacti, 50, 170)

.animation(fire, 240, 180)

.animation(flower,450, 180)

.image(spike2, 590,150)

  .animation(bird, 590, 100);
game.newScene()

.text("陈瑾轩出品", 350, 50, "green")

   .animation(fire, 100, 180)

  .animation(chomper, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

.text("陈瑾轩出品", 350, 50, "green")

   .image(cacti, 100, 170)

  .image(tree, 300, 170)

  .image(spike3, 500, 110);
game.newScene()

  //写文本的函数r

 .text("高祥豪",399,199 , "red")

.text("我很棒！",490,199,"green")

 .image(cacti,450,200)

.animation(fire,150,180)

 .animation(crab,220,180);

  game.newScene()

.animation(fire,600,170)

.animation(bird,400,0)

.animation(chomper,90,150)

.image(spike2,135,150)

.image(tree,435,155)

.animation(bird,350,10);
game.newScene()

 .text("方正圆出品", 100, 200, "yellow")

 .animation(bird, 100, 10)

  .animation(fire, 100, 170)

  .image(spike3, 510,120)

 .image(spike2, 550,150)

.image(spike1,590,170);



game.newScene()

 .text("方正圆出品", 100, 200, "yellow")

  .animation(flower, 45, 170)

 .animation(chomper, 200,170)

 .animation(crab, 250,180);
//动态图片障碍物类型

// chomper: 食人花

// flower: 太阳花

// bird: 小鸟

// crab: 螃蟹

// fire: 火



  


game.newScene()

  //写文本的函数

 .text("Lucas出品", 200, 100, "black")

  //画动态图的函数

// .animation(flower, 200, 170)  

 //画静态图的函数

 //.image(tree, 400, 170);  

.image(tree,100,170)

.image(tree,150,170)

.animation(fire,230,180)

.image(spike3,420,110)

.image(spike1,420,0)

;

game.newScene()

//  .image(spike2, 100, 150)

 // .image(cacti, 300, 170)

// .animation(crab, 500, 180);

.animation(bird,100,0)

.animation(bird,100,150)

.animation(chomper,300,170)

.animation(crab,400,180)

;

 
game.newScene()

  .text("XRD出品", 200, 100, "white")

  .image(spike1, 50, 170)

  .image(spike1, 100, 120)

  .image(spike1, 150, 70)

  .animation(crab, 200, 130)

  .animation(flower,380,170)

  .animation(chomper,580,160)

  .animation(bird,580,10);



game.newScene()

.animation(fire, 120, 170)

  .animation(bird,340,110)

  .image(spike2, 430, 120);
game.newScene()

  //写文本的函数r

 .text("姜承君",599,200 , "blue")

 .image(cacti,450,200)

.image(tree,289,150)

 .animation(fire,199,180)

.animation(fire,150,180)

.text("陈逸轩",500,100 , "red");



  game.newScene()

.animation(fire,600,170)

.animation(bird,400,0)

.animation(chomper,90,150)

.image(spike2,135,150)

.image(tree,435,155)

.animation(bird,350,10);

game.newScene()

  //写文本的函数

 .text("陆浩然出品", 200, 100, "purple")

  //画动态图的函数

 .animation(chomper, 250, 100)

.animation(crab,370,130)

.animation(bird,290,30)

 //画静态图的函数

 .image(spike3,420,100);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

.animation(fire,200,170)

  .animation(crab, 500, 180);
game.newScene()

 .text("ming can", 200, 50, "white")

  .image(cacti, 1, 170)

.animation(bird, 200, 110)

.animation(fire, 400, 180);

game.newScene()

.image(spike3, 100,110)

.animation(flower, 400, 170)  ;

game.newScene()

  .text("余添祺出品", 200, 100, "green")

  .animation(flower, 200, 180)

  .animation(bird, 320, 100)

  .image(tree, 400, 170)

  .image(spike1, 500, 100);



game.newScene()

  .text("余添祺出品", 200, 100, "green")

  .animation(fire, 100, 150)

  .image(spike2, 220, 140)

  .animation(crab, 400, 100)

  .image(cacti, 500, 170)

  .animation(chomper,600, 170);
game.newScene()

 .text("jimmy", 200, 100, "white")

  .image(spike1, 80, 170)

  .image(tree, 280, 170)

  .animation(fire, 450, 180)

 .animation(flower, 480, 170);

game.newScene()

 .text("frank", 200, 100, "white")

  .image(spike2, 80, 145)

  .image(tree,150, 170)

  .animation(chomper,300, 170)

 .animation(flower, 480, 170);
game.newScene()

  .animation(chomper, 200, 150)

  .animation(bird, 400, 170)

  .image(spike3, 500, 100);





game.newScene()

  .animation(fire, 200, 150)

  .animation(crab, 390, 180)

  .animation(flower, 500, 100);



game.newScene()

  .animation(chomper, 200, 170)

  .image(cacti, 390, 170)

  .animation(crab, 500, 180);



game.newScene()

  .image(spike2, 200, 145)

  .animation(flower, 390, 170)

  .animation(fire, 500, 180);
game.newScene()

  //写文本的函数

 .text("samy出品", 200, 100, "black")

  //画动态图的函数

  .animation(chomper, 300, 170)

 .animation(flower, 200, 170)

 //画静态图的函数

 .image(spike3, 500,105);  





game.newScene()

  .image(spike2, 100, 150)

  .image(tree, 300, 170)

  .animation(fire, 500, 180)

  .animation(bird, 600, 180);
game.newScene()

  .animation(chomper, 90, 150)

  .animation(fire, 300, 170)

  .animation(bird, 500,160 ) 

.image(tree, 600,160 );



game.newScene()

  .animation(chomper, 90, 150)

  .animation(fire, 300, 170)

  .animation(bird, 500,160 ) 

.image(tree, 600,160 );
game.newScene()

.text("LEA出品", 200, 100, "white")

  .image(spike2, 100, 80)

  .animation(chomper, 300, 170)

  .image(spike3, 500, 110);

game.newScene()

.text("LEA出品", 200, 100, "white")

  .image(tree, 100, 170)

  .animation(bird, 300, 100)

  .animation(fire, 500, 180);
game.newScene()

  .text("Sam出品", 200, 100, "white")

  .image(spike3, 100, 110)

  .animation(flower, 300, 170)

  .animation(bird, 400, 100)

  .animation(fire, 600, 170);
game.newScene()

  //写文本的函数

 .text("sally出品", 100, 50, "orange")

  //画动态图的函数

 .animation(chomper, 50, 170) 

.animation(chomper, 300, 170)

.animation(bird, 200, 30)

 //画静态图的函数

 .image(cacti, 500, 170) 

 .image(spike2, 680, 150);  





game.newScene()

  .image(tree, 150, 170)

  .image(tree, 190, 170)

.image(cacti, 350, 170)

.image(spike3, 550, 170)

  .animation(bird, 150, 1)

.animation(bird, 610, 1)

.animation(flower, 700, 180);

 //写文本的函数
game.newScene()
 .text("顾敬梁出品", 200, 100, "green")

  //画动态图的函数

 .animation(bird, 200, 150)

 .animation(bird,250,130)

 .animation(bird,300,110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(cacti, 100, 100)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  .image(spike3, 53, 110)

  .animation(fire, 215, 180)

  .image(cacti, 267, 180)

.image(tree, 350  , 40)

.animation(flower, 445  , 160)

.animation(chomper, 495  , 160)

.image(spike2, 578  , 80)

.animation(crab,620, 180);
game.newScene()

  .image(spike3, 53, 110)

  .animation(fire, 215, 180)

  .image(cacti, 267, 180)

.image(tree, 350  , 40)

.animation(flower, 445  , 160)

.animation(chomper, 495  , 160)

.image(spike2, 578  , 80)

.animation(crab,620, 180);
game.newScene()

  //写文本的函数

 .text("mary2", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 200, 180)

 .animation(bird,500,150)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .image(spike3,550,110)

  .animation(crab, 500, 180);
game.newScene()

.text("亢钰童", 200, 50, "purple")

.animation(flower, 100, 170)

.animation(chomper, 200, 170)

.animation(chomper, 220, 170)

.animation(chomper, 240, 170)

.animation(crab,450, 170)

.animation(bird,520,100);

game.newScene()

.animation(bird,100,100)

.animation(fire,190,170)

.image(spike3, 360, 110)

.image(tree, 550, 170);
game.newScene()

.text("Emily出品", 100, 100, "white")

  .animation(fire, 100, 180)

  .image(tree, 200, 170)

  .animation(bird, 350, 130)

.image(spike1, 450, 170)

 .animation(flower, 600, 140)

.image(spike2, 600, 170);



game.newScene()

  .animation(bird, 100, 50)

  .animation(crab, 250, 180)

 .animation(chomper, 351, 170)

 .animation(fire, 450, 180)

.image(tree, 600, 170);
game.newScene()

 .text("Jessie出品", 200, 100, "purple")

  .animation(chomper, 100, 170)

  .image(spike2, 370, 148)

  .animation(fire, 537, 180);

game.newScene()

  .image(cacti, 17, 171)

  .animation(bird, 441,17)

  .image(tree,277 , 170)

  .animation(flower,361,141)

  .image(spike1,599,177);
game.newScene()

.animation(flower, 100, 170)

.image(spike1, 200, 100)

  .animation(fire, 500, 180);

game.newScene()

.animation(flower, 100, 170)

.image(spike1, 200, 100)

  .image(cacti, 400, 170)

  .animation(fire, 500, 180);
game.newScene()

.text("bruce出品", 200, 100, "yellow")

  .animation(chomper, 100, 170)

  .image(spike3, 250, 150)

  .image(tree,450, 170)

.animation(crab,500,170);



game.newScene()

  .animation(bird, 100, 170)

  .image(tree, 250, 170)

  .animation(fire,500,180);
game.newScene()

  //写文本的函数

 .text("刘佳怡出品", 200, 100, "green")

  //画动态图的函数

 .animation(bird,130,50)

  .image(tree, 500, 170) 

 .image(spike1, 40, 170) 

 //画静态图的函数

 .animation(crab, 300, 170);  





game.newScene()

  .image(spike1, 100, 150)

  .image(spike2, 300, 140)

  .animation(flower, 500, 160);

game.newScene()

  //写文本的函数

 .text("czy出品", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(spike3, 400, 110)  

 .image(spike2,290,150)

 .animation(fire,600,180);

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(flower,440,170);
game.newScene()

  .animation(flower, 100, 170)

  .animation(bird, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  .image(cacti, 100, 170)

  .image(spike2, 300, 150)

  .animation(chomper, 500, 170);
game.newScene()

.text("czh出品", 200, 100, "black")

  .image(spike2, 100, 150)

  .image(spike1, 300, 170)

  .image(spike3, 500, 180);



game.newScene()

.text("姜涵曦出品", 200, 100, "white")

  .animation(chomper, 100, 150)

  .animation(fire, 300, 170)

  .animation(bird, 500, 180)

  .image(tree, 400, 170);

game.newScene()

  //写文本的函数

 .text("孔梦茹出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

game.newScene()

  //写文本的函数

 .text("Thomas", 280, 110, "white")

  //画动态图的函数

 .animation(chomper, 240, 180) 

.animation(bird,90,80)

 //画静态图的函数

 

.image(cacti,320,180);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  //写文本的函数

 .text("严文诣出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 560, 170) 

.animation(bird, 200, 150) 

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 180, 150)

 .image(spike2, 400, 150)

  .animation(fire, 600, 180);
game.newScene()

  //写文本的函数

 .text("Joy and Sophia出品", 200, 100, "pink");

 /* //画动态图的函数

 .animation(flower, 100, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 100, 170)

  .animation(fire, 300, 180)

  .image(spike2, 500, 180)

  .image(cacti,600,170);

 

game.newScene()

  .animation(flower,200,170)

  .image(spike2,300,180)

  .animation(chomper,500,180)

  .image(tree,600,170);



game.newScene()

  .image(spike1,500,170)

  .animation(fire,400,180)

  .animation(bird,180,120);
game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180)

  .animation(bird,60,105);
game.newScene()

  //写文本的函数

 .text("朱宇馨出品", 200, 100, "black")

  //画动态图的函数

 .animation(flower, 300, 150)  

 //画静态图的函数

 .image(tree, 450, 100);  





game.newScene()

  .image(spike3, 50, 100)

  .image(cacti, 300, 170)

  .animation(fire, 500, 150)

  .animation(chomper,500,5);
game.newScene()

  //写文本的函数

 .text("陈思羽出品", 200, 100, "blue")

  //画动态图的函数

 .animation(fire, 200, 170)

 .animation(crab,580,170)

.animation(chomper,20,160)

 //画静态图的函数

 .image(cacti, 300, 170);  





game.newScene()

  .image(spike1, 100, 150)

  .image(spike2, 300, 140)

  .animation(flower, 500, 160);

game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 500, 170)

  .animation(bird, 500, 0)

.animation(bird, 400, 50)

.animation(bird, 300, 100);

game.newScene()

  .animation(bird,300,5)

  .animation(crab,400,170)

  .image(cacti,450,170)

.image(spike3,350,100);
game.newScene()

  //写文本的函数

 .text("邱靖涵出品", 300, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 170) 

 .animation(bird, 600, 10)

.animation(flower, 450, 170) 

 .animation(crab, 400, 180)

 //画静态图的函数

 .image(tree,250, 170);  





game.newScene()

.text("我姐姐是邱可馨", 300, 100, "pink")

.animation(bird, 500, 10)

.animation(chomper, 550, 170)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

.text("lily出品", 500, 100, "white")

  //画动态图的函数

.animation(flower, 0, 170)  

.animation(chomper, 560, 190)



.animation(bird, 140, 170)  

 //画静态图的函数

 .image(tree, 400, 170); 

 



game.newScene()

.text("cherry出品", 200, 100, "white")

  .image(spike3, 200, 110)

  .image(cacti, 250, 170)

  .animation(bird, 500, 180);
game.newScene()

  .animation(flower, 10, 80)

.image(spike1, 100, 170)

  .image(cacti, 200, 170)

 .image(tree, 320, 170)

  .animation(crab, 350, 10)

 .animation(chomper, 450, 170)

.animation(bird, 450, 30);
game.newScene()
.text("郭俊凯出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 150)

 .animation(flower,250,130)

 .animation(flower,300,110)

  //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);


game.newScene()

  //写文本的函数

 .text("刘桓彤出品", 200, 100, "black")

  //画动态图的函数

 .animation(chomper,200,170)

 .animation(crab,600,170)

 .animation(bird,550,5)

 .animation(bird,600,5)

 //画静态图的函数 

  .image(tree,400,170);





game.newScene()

.text("丰尚宇出品", 200, 100, "white")

.image(spike1,240,170)

.image(spike2,280,150)

.image(spike3,320,120)

.animation(bird,50,20)

.image(spike1,500,175);



 
game.newScene()

  //写文本的函数

 .text("张乐桐出品", 400, 100, "yellow")

  //画动态图的函数

 .animation(bird, 250, 100) 

.animation(bird, 200, 170)

.animation(fire, 530, 180)



 //画静态图的函数

 .image(tree, 400, 170)

 .image(tree, 450, 170);  





game.newScene()

.text("Hi", 400, 100, "yellow")

.animation(flower, 150, 170)

.animation(chomper, 600, 170)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("陈骞出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 150, 170)  

 .animation(fire, 250, 170)

 //画静态图的函数

.image(tree, 600, 170);  





game.newScene()

 .animation(flower, 150, 170)

.animation(flower, 300, 170)

  .animation(crab, 450, 170);
game.newScene()

  //写文本的函数

 .text("Aurora出品", 200, 100, "pink")

  //画动态图的函数

 .animation(chomper, 200, 140) 

.animation(chomper,200,100)

 //画静态图的函数

.image(spike3,500,110);  





game.newScene()

.text("前方有陷阱，请注意。",300,140,"red")

  .image(spike2, 100, 150)

.animation(fire,130,75)

  .animation(crab, 500, 180);
game.newScene()

 .text("aryan出品", 200, 100, "white")

.animation(bird,100, 10)

.image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(flower, 500, 1);
game.newScene()

 

 //写文本的函数



 .text("孟佳琪出品", 200, 100, "red")

 

 //画动态图的函数

 

.animation(fire, 100, 170)

  

 .animation(flower, 400, 170) 



.animation(crab, 500, 170)

 

 //画静态图的函数

 

.image(tree, 200, 170);  







game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(cacti, 300, 170)

 

 .animation(bird, 500, 5);



game.newScene()

 

 //写文本的函数

 

 .text("孟佳琪出品", 200, 100, "red")

  

 //画动态图的函数

 

.animation(crab, 350, 170)  



 .animation(flower, 400, 170) 



.animation(crab, 530, 170)

 

.animation(bird, 550, 20)

 

//画静态图的函数

 

.image(tree, 200, 170); 

 





game.newScene()

 

 .image(spike2, 100, 150)



  .image(cacti, 300, 170)

 

 .animation(crab, 500, 180);



game.newScene()

 

 //写文本的函数

 

.text("Daniel", 300, 200, "orange")



.text("注意前方",400,150,"red")

 

 //画动态图的函数



.animation(flower,200,170)



.animation(bird,400,6)



.animation(chomper,100,170)



 //画静态图的函数



 .image(tree, 600, 170)



.image(spike2,550,30)



.image(spike1,400,170);















game.newScene()

 

 .image(spike2, 100, 150)

 

 .animation(crab, 500, 180);
 //写文本的函数
game.newScene()
 .text("袁晨霖出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130) 

 .animation(flower, 300, 110) 

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .animation(crab, 400, 150)

  .animation(crab, 450, 130)

  .animation(crab, 500, 110);
game.newScene()

  //写文本的函数

 .text("赵子竣出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 100, 170)  

.animation(crab, 500, 170) 

.animation(fire, 200, 170); 

 //画静态图的函数;  





game.newScene()

  .image(spike3, 200, 110)

  .image(cacti, 500, 170);

game.newScene()

  //写文本的函数

 .text("CHRIS",50, 100, "BLUE")

  //画动态图的函数

 .animation(flower, 100, 130)  

.animation(chomper, 150, 130) 

 //画静态图的函数

 .image(spike2, 350, 120);  



game.newScene()

  //写文本的函数

 .text("CHRIS",50, 100, "BLUE")

  //画动态图的函数

 .animation(crab, 100, 120)  

.animation(crab, 130, 140) 

 //画静态图的函数

 .image(tree, 400, 170);  



game.newScene()

  .image(spike2, 100, 160)

.image(spike1, 150, 170)

  .image(cacti, 330, 170)

  .animation(crab, 550, 180);
game.newScene()

  //写文本的函数

 .text("candy出品", 300, 100, "black")

  //画动态图的函数

 .animation(flower, 200, 170)  

 .animation(chomper, 400, 170) 

 .animation(bird, 500, 50)

//画静态图的函数

 .image(tree, 600, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(spike1, 300, 170)

  .animation(fire, 500, 180);



game.newScene()

  .animation(bird, 200, 40)

  .animation(crab, 350, 180)

  .animation(crab, 300, 180)

  .image(spike3, 500, 105);
game.newScene()
 .text("Bruce出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130) 

 .animation(flower, 300, 110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .animation(chomper, 350, 170)

  .image(cacti, 300, 170)

  .animation(crab, 500, 170)

  .animation(fire, 550, 170);

 //写文本的函数
game.newScene()
 .text("宋鸣飞出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(bird,150,170)

 .animation(crab, 200, 150)  

 .animation(crab, 250, 130) 

 .animation(crab, 300, 110) 

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  .animation(bird, 100, 20)

  .image(spike3, 300, 110)

  .animation(chomper, 500, 170)

  .animation(fire, 600, 180);



game.newScene()

  .image(tree, 250, 170)

  .image(spike1, 350, 170)

  .animation(crab, 530, 180)

  .image(cacti, 600, 170);



game.newScene()

  .animation(flower, 250, 170)

  .image(spike2, 350, 145)

  .animation(chomper, 600, 170);
 //写文本的函数
game.newScene()
 .text("毛盾出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(chomper, 500, 180)

 .animation(flower, 250, 130)  

 .animation(flower, 300, 110)

 .animation(bird, 550, 150)

 //画静态图的函数

 .image(tree, 300, 170);  



game.newScene()

  .animation(crab, 400, 150)

  .animation(crab, 450, 130)  

  .animation(crab, 500, 110);
game.newScene()
 .text("徐可涵出品", 200, 100, "pink")

  //画动态图的函数

 .animation(bird, 200, 150)  

 .animation(bird, 250, 130)  

.animation(bird, 300, 100) 

 //画静态图的函数

 .image(tree, 350, 170);  





game.newScene()

  .image(spike3, 100, 130)

  .image(cacti, 300, 170)

  .animation(flower, 500, 180)

  .animation(flower, 550, 180);

game.newScene()

  //写文本的函数

 .text("龚嘉宜出品", 200, 100, "violet")

  //画动态图的函数

 .animation(fire, 100, 170) 

.animation(chomper, 250, 170) 

.animation(bird, 300, 5) 

 //画静态图的函数

 .image(spike3, 450, 120);  





game.newScene()

  .image(spike1, 100, 150)

  .image(tree, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("王辰萱出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(chomper,200, 170)

.animation(bird,500, 40)

  .image(spike2, 400, 140);

game.newScene()

  .image(spike2, 100, 150)

  .image(tree, 300, 170)

.animation(bird,520, 10)

  .animation(fire, 500, 180);
game.newScene()

    

  .animation(crab, 100, 180)

  .image(spike2, 250, 70)

  .image(spike1, 350, 150)

.animation(bird, 400, 100)

.image(tree, 500, 150);
game.newScene()

  //写文本的函数

 .text("汤宇轩出品", 200, 100, "blue");

  //画动态图的函数

/* .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .image(spike3, 100, 110)

  .image(cacti, 350, 170)

  .animation(crab, 100, 10)

  .image(spike3, 250, 50)

  .image(spike3, 500, 110)

  .image(cacti, 550, 170)

  .animation(crab, 600, 10)

  .image(spike3, 250, 50);

game.newScene()

.text("谭恒杰", 200, 50, "white")

.animation(flower, 100, 170)

 .image(spike2, 300, 140)

 .image(tree, 340, 170)

.animation(chomper,550, 170)

.animation(chomper,580, 170);
game.newScene()

  //写文本的函数

 .text("郁蕙怡", 50, 50, "white")

  //画动态图的函数

 .animation(bird, 150, 170)  

.animation(bird, 200, 130) 

 //画静态图的函数

 .image(spike2, 400, 70);  



game.newScene()

  //写文本的函数

 .text("郁蕙怡", 100, 50, "white")

  //画动态图的函数

 .animation(crab, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("李泽尧出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(bird, 200, 100)  

.animation(flower,450,170)

.animation(chomper,490,170)

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("张誉淇出品", 200, 100, "blue")

  .image(tree, 100, 170)

  .animation(flower, 300, 170)

  .animation(fire, 500, 180);
game.newScene()

 

 //写文本的函数



 .text("cat出品", 200, 100, "red")

 

 //画动态图的函数



 .animation(bird, 100, 100)

 

.animation(fire,170,150)



.animation(flower, 200,130)

 

//画静态图的函数

 

.image(tree, 400, 170)



.image(cacti, 500, 100);









game.newScene()

  

.image(spike2, 100, 150)



  .image(cacti, 300, 170)

  

.animation(crab, 500, 180)



.animation(chomper,700,180);
  //写文本的函数
game.newScene()
 .text("姜沣城出品 妈妈，我爱你", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)  

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(chomper, 550, 180);
 //写文本的函数
game.newScene()
 .text("王天屹,吴加杰，唐子杰3位小朋友出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)  

 .animation(flower, 300, 110)

 //画静态图的函数

 .image(tree, 350, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(spike2, 150, 150)

  .image(spike2, 200, 150)

  .animation(crab, 400, 150)

  .animation(crab, 450, 130)

  .animation(crab, 500, 110); 
game.newScene()

.text("Ethan出品", 200, 100,"orange")

  .animation(bird, 100, 100)

  .image(spike3, 200, 40)

  .animation(chomper, 400, 110)

.animation(bird, 500, 110)

.animation(crab, 450, 40);



game.newScene()

  .image(tree, 100, 170)

  .animation(crab, 200, 180)

.image(spike1, 400, 110)

.animation(crab, 450, 170);
game.newScene()

  //写文本的函数

 .text("黄绘骋出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 600, 170)

.animation(flower, 200, 170)  

.animation(fire, 50, 150)

 //画静态图的函数

.image(spike3, 350, 0) 

.image(spike3, 500, 0);



game.newScene()

  .image(spike2, 100, 150)

.image(cacti, 400, 170);
game.newScene()

  //写文本的函数

 .text("李嘉睿出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 20, 170) 

.animation(crab, 480, 170)

 //画静态图的函数

.animation(fire, 200, 110)

 .image(tree, 350, 170);  





game.newScene()

  .image(spike2,482, 150)

 .animation(bird,590, 19)

  .animation(flower, 111, 180)

 .animation(fire,280, 180);

 //写文本的函数
game.newScene()
 .text("Linda出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  .text("jeff出品", 200, 100, "blue")

  .animation(flower, 100, 170)

  .image(spike2, 300, 140)

  .animation(bird, 400, 90)

  .animation(bird, 450, 80)

  .animation(bird, 500, 70)

  .animation(fire, 600, 90);



game.newScene()

  .text("no name出品", 200, 100, "yellow")

  .animation(chomper, 110, 170)

  .animation(chomper, 110, 70)

  .animation(flower, 200, 170)

  .animation(bird, 330, 190)

  .animation(fire, 440, 190)

  .image(spike1, 530, 140)

  .image(spike3, 600, 140);
game.newScene()

  .animation(chomper, 80, 170)

  .animation(bird, 250, 160)

  .image(cacti, 350, 170)

.image(spike3, 600, 110);



game.newScene()

  .animation(fire, 100, 180)

  .animation(crab, 300, 180)

  .image(spike1, 350, 170)

.image(tree, 500, 170);
game.newScene()

.text("王彦哲", 200,50, "white")

 .image(cacti, 100, 170)

.animation(bird, 300, 100)

 .image(tree, 400, 170)

 .image(spike1,450,100);

game.newScene()

.animation(fire, 100, 170)

.animation(chomper,400, 170)

.animation(crab,400,100);
game.newScene()

  //写文本的函数

 .text("Jerold出品", 400, 100, "red")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(flower, 300, 170)

   //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .animation(fire, 200, 180)

  .image(cacti, 500, 170)

  .animation(crab, 300, 180);



game.newScene()

  .image(spike3, 100, 101)

  .image(spike2, 350, 105)

  .image(spike1, 600, 170);



game.newScene()

  .image(tree, 500, 170);
//写文本的函数
game.newScene()
 .text("嵇俊哲出品", 200, 100, "orange")

  //画动态图的函数

 .animation(bird, 200, 150)  

 .animation(bird, 250, 130)

 .animation(bird, 300, 110)  

//画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180)

  .animation(fire, 500, 130);
game.newScene()

  //写文本的函数

 .text("小鸟出品", 200, 100, "blue")

  //画动态图的函数

 .animation(bird, 100, 100)  

.animation(fire,100,150)

.animation(chomper,500,170)

.animation(crab,300,50)

 //画静态图的函数

 .image(tree, 400, 170)

.image(tree,700,170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

.image(spike2,400,130)

  .animation(crab, 500, 60);
game.newScene()

.text("朱欣妍", 200, 100, "white")

.text("sindy", 400, 100, "black")

  .animation(bird, 100, 150)

  .image(spike1, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

  .animation(fire, 100, 180)

  .animation(bird, 300, 170)

  .animation(flower, 500, 170);

game.newScene()

  .image(spike3, 100, 110)

  .animation(bird, 400, 170)

  .animation(chomper, 450, 170)

  .image(spike2,600,150);

game.newScene()

  .image(spike3, 100, 110)

  .animation(chomper, 400, 170)

  .image(cacti, 500, 170);
game.newScene()

  //写文本的函数

 .text("注意障碍物", 200, 100, "purple")

  //画动态图的函数

 .animation(bird, 300, 100) 

.animation(bird,400,10)

 //画静态图的函数

.image(cacti,300,10)

.image(tree, 400, 170);  





game.newScene()

  .image(spike1, 100, 150)

  .image(tree, 300, 170)

  .animation(fire, 500, 180);
game.newScene()
.text("楼怡临出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(tree, 300, 170)

  .animation(crab, 500, 180);

game.newScene()

  .animation(chomper, 100, 170)

  .image(tree, 200, 170)

  .animation(fire, 450, 180);



game.newScene()

  .animation(bird, 100, 170)

  .animation(flower, 400, 170)

  .image(cacti, 500, 170);

  



game.newScene()

  .animation(chomper, 200, 170)

  .animation(fire, 400, 180)

  .image(spike3, 500, 110);



game.newScene()

  .image(tree, 600, 170)

  .animation(bird, 400, 170)

  .image(cacti, 120, 170);
game.newScene()

  .text("天马行空出品", 200, 100, "green")

  .image(spike1, 100, 170)

  .image(spike1, 180, 170)

  .image(spike3, 400, 110)

  .animation(bird,580,10)

  .image(spike1,600, 170);
game.newScene()

  //写文本的函数

 .text("张赟出品", 200, 100, "pink")

  //画动态图的函数

 .animation(chomper, 100,170)

.animation(bird,30,10)

.animation(flower,30,170)

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .image(spike3, 100, 110)

  .image(cacti, 300, 170)

  .animation(fire, 500, 180);
game.newScene()

  //写文本的函数

 .text("仲瀚雯", 200, 50, "purple")

  //画动态图的函数

 .animation(bird, 100, 170)  

.animation(bird, 100, 120)  

.animation(crab, 200, 170) 

.animation(crab, 200, 120) 

.animation(fire, 50, 170)

 //画静态图的函数

 .image(cacti, 450, 170)  

.image(cacti, 450, 120); 





game.newScene()

  .image(spike2, 60, 150)

.image(tree, 130, 170)

  .image(cacti, 300, 170)

.image(spike2, 240, 20)

.image(spike1, 550, 20)

  .animation(crab, 450, 180)

 .animation(chomper, 400, 170);



game.newScene()

  //写文本的函数

 .text("happy", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 //画静态图的函数

 .image(spike2, 400, 150);  





game.newScene()

  .text("happy", 200, 100, "white")

  .image(tree, 100, 170)

  .image(cacti, 300, 170)

  .animation(bird, 500, 100);



game.newScene()

  //写文本的函数u

 .text("孙灏宸出品", 200, 100, "blue")

  //画动态图的函数 

 .animation(flower,400, 170)

 .animation(fire, 100, 170)

 //画静态图的函数

  .image(spike1, 600, 170);  





game.newScene()

  .image(spike1, 500, 110)

  .animation(chomper, 300, 180);



game.newScene()

  //写文本的函数

 .text("leaf", 200, 100, "blue")

  //画动态图的函数

 .animation(crab,300,170)  

 //画静态图的函数

 .image(tree,100,170)

 .image(spike1,500,170);





game.newScene()

  .text("leaf", 200, 100, "blue")

  .image(cacti, 100, 170)

  .animation(bird, 300, 100)

 .animation(flower,500,170);

 
game.newScene()

  //写文本的函数

 .text("ZYX和SYJ出品", 200, 100, "purple");

 /* //画动态图的函数

 .animation(flower, 500, 100)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 10, 170)

  .animation(flower,188,0)

  .image(tree, 188, 170)

  .animation(crab,370,170)

  .animation(bird,450,20)

  .image(cacti,590,170);



game.newScene()

  .animation(fire,50,170)

  .animation(fire,50,150)

  .animation(fire,50,130)

  .image(spike3,200,5)

  .image(spike2,400,90);
 



 


game.newScene()

  //写文本的函数

 .text("Oliver出品", 200, 100, "blue")

.text("Gant出品", 200, 150, "black")

  //画动态图的函数

 .animation(chomper, 400, 177)  

 .animation(bird, 500, 50) 



 //画静态图的函数

 .image(spike3, 20, 110)

.image(tree, 90, 170)

.image(spike3, 600, 150);



game.newScene()

  .animation(chomper, 50, 170)

  .animation(flower, 300, 170)

  .image(spike1, 360, 170)

.image(cacti, 580, 170);

 
game.newScene()

  //写文本的函数

 .text("跳一次", 300 , 220, "blue")

  //画动态图的函数

 .animation(fire, 100, 100)  

.animation(chomper,300,150)

 //画静态图的函数

 .image(tree, 400, 100)  

.image(spike3, 500,50);



game.newScene(2)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

.image(tree,600,170)

.image(spike2,600,100)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("kevin出品", 200, 100, "green")

  //画动态图的函数

   .animation(bird, 500,120 )

.animation(bird, 550,100)

 //画静态图的函数

 .image(spike2,600,150)

.image(cacti, 150, 170)

.image(tree,540, 170);  





game.newScene()

.text("kevin出品", 200, 100, "green")

  .image(spike2, 250, 150)

  .image(cacti, 300, 170)

  .animation(crab, 590, 179)

.animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Rojer出品", 200, 100, "black")

  //画动态图的函数

 .animation(bird, 200,11)

 .animation(chomper, 200, 170);  

  



game.newScene()

  .image(spike3, 100, 110)

  .image(spike1, 60, 170)

  .image(spike1, 140, 170)

  .image(spike1, 400, 170)

  .image(spike1, 440, 170)

  .image(spike2, 440, 70);



game.newScene()

 .animation(flower, 250,170)

  .animation(bird, 300,11)

  .image(tree, 100, 170);
game.newScene()

  //写文本的函数

 .text("朱昊轩出品", 400, 100, "yellow")

  //画动态图的函数

 .animation(fire, 100, 175)  

 .animation(bird, 200, 5) 

 .animation(chomper, 400, 175) 

 //画静态图的函数

 .image(tree, 600, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("李心竹出品", 200, 100, "purple")

  //画动态图的函数

 .animation(flower, 100, 170)

.animation(bird, 600, 180)

.animation(bird, 600, 140) 

.animation(bird, 600, 100)

 //画静态图的函数

 .image(tree, 300, 170)

 .image(tree, 350, 160)

 .image(tree, 400, 150);

  

game.newScene()

  .text("game over", 200, 100, "purple")

  .animation(crab,250, 180)

 .image(spike1, 300, 180)

.animation(chomper,450, 180)

.animation(fire,600, 180);
game.newScene()
 .text("Lucy出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 150)

 .animation(flower,250,130)

 .animation(flower,300,110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(cacti, 100, 130)

  .image(spike3, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("James出品", 300, 100, "yellow")

  //画动态图的函数

 .animation(chomper, 300, 170)  

 .animation(crab, 500, 170)

 //画静态图的函数

 .image(cacti, 100, 170);  





game.newScene()

  .image(spike3, 100, 105)

  .image(tree, 300, 170)

  .animation(flower, 500, 170);



game.newScene()

  .animation(bird, 500, 10)

  .animation(crab, 300, 170)

  .animation(fire, 200, 170);
game.newScene()

  //写文本的函数

 .text("岳俊廷出品", 200, 100, "blue")

  //画动态图的函数

.animation(bird,599,110)





 //画静态图的函数

 .image(tree, 200, 170)

 

.image(spike2,470,150)

.animation(chomper,400,170);

 





game.newScene()

 .text("岳俊廷出品", 200, 100, "blue")  

  

  .animation(crab, 500, 180)

.animation(bird,100,120)



.image(spike2,320,150);
game.newScene()

  //写文本的函数

 .text("岳俊廷出品", 200, 100, "blue")

  //画动态图的函数

.animation(bird,599,110)





 //画静态图的函数

 .image(tree, 200, 170)

 

.image(spike2,470,150)

.animation(chomper,400,170);

 





game.newScene()

 .text("岳俊廷出品", 200, 100, "blue")  

  

  .animation(crab, 500, 180)

.animation(bird,100,120)



.image(spike2,320,150);
game.newScene()

  .animation(flower, 100, 170)

  .animation(bird, 300, 100)

  .animation(chomper, 500, 170);



game.newScene()

  .image(tree, 100, 170)

  .image(spike1, 300, 100)

  .animation(crab, 500, 170);
game.newScene()

  //写文本的函数

 .text("wangtao", 200, 100, "yellow")

.text("这是一个智商的游戏", 400, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 170)  

.animation(crab, 100, 170)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 30, 160)

.animation(bird, 100, 100)

.animation(bird, 300, 30)

.animation(bird, 400, 170)

  .image(cacti, 300, 170);
game.newScene(1)

  //写文本的函数

 .text("joy", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 300, 100) 

.animation(bird,360,80)

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene(2)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .image(spike3,200,10)

  .animation(crab, 500, 180);
game.newScene()

.text("carl出品", 200, 100, "black")

  .animation(chomper, 100, 140)

  .image(spike3, 130, 110)

  .image(tree, 400, 170) 

  .animation(bird,550,50);



game.newScene()

  .image(spike1, 100, 150)

  .animation(fire, 300, 170)

  .image(tree, 400, 170) 

  .animation(bird,550,50);

game.newScene()

  .animation( chomper, 100, 170)

  .animation( bird, 400, 170)

  .animation(fire, 600, 180);



game.newScene()

  .image(cacti , 100, 170)

  .image(  tree, 400, 170)

  .animation(crab, 600, 180);

  



game.newScene()

  .animation(chomper,129,170)

  .animation(flower,329,170)

  .image(spike1,555,170);



game.newScene()

  .image(spike2,129,80)

  .image(spike3,329,110)

  .animation(fire,540,180);
game.newScene()
.text("Kate出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)

 .animation(flower, 250, 130)

 .animation(flower, 300, 100)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 500, 130);
game.newScene()

.text("张欣彤出品", 200, 100, "pink")

.animation(bird, 100, 150)

  .image(cacti,400, 170)

  .image(spike1, 500, 180);



game.newScene()

.text("张欣妍出品", 200, 100, "blue")

.image(spike3, 100, 150)

  .animation(chomper,400, 170)

  .image(tree, 500, 180)

  .image(spike1, 200, 150);

game.newScene()

  //写文本的函数

 .text("max出品", 100, 50, "white")

  //画动态图的函数

 .animation(flower, 100, 170) 

.animation(flower,430, 170)

.animation(chomper, 470, 170)

.animation(chomper, 650, 170)

.animation(bird, 260, 1)

.animation(bird, 400, 1)

//画静态图的函数

 .image(spike3, 690, 110); 





game.newScene()

  .image(tree, 300, 170)

  .image(spike2, 500, 150)

  .image(spike1, 680, 170)

  .animation(bird, 400, 1)

  .animation(bird, 120, 1);
game.newScene()

  //写文本的函数

 .text("陈翔涛出品", 200, 100, "green")

  //画动态图的函数

 .animation(chomper, 40, 170)

.animation(bird, 200, 100) 

.animation(fire, 400, 170) 

 //画静态图的函数

 .image(tree, 600, 170);  





game.newScene()

  .image(spike3, 100, 150)

  .image(tree, 300, 170);
game.newScene()

  //写文本的函数

 .text("郁萱怡", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 20, 170)  

 .animation(bird, 200, 150) 

 //画静态图的函数

 .image(tree, 400, 170);  



game.newScene()

  //写文本的函数

 .text("郁萱怡", 200, 100, "white")

  //画动态图的函数

 .animation(chomper, 250, 170)  

.animation(chomper, 300, 170) 

 //画静态图的函数

 .image(tree, 400, 170);  



game.newScene()

  .image(spike2, 100, 150)

 .image(spike3, 150, 150)

  .image(cacti, 360, 170)

  .animation(crab, 530, 180);
 



 


game.newScene()

  //写文本的函数

 .text("杜嘉怡出品", 50, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 170)  



.animation(chomper,400,300)

 //画静态图的函数



 .image(tree, 400, 170)  

.image(cacti,150,170);



game.newScene()

  .image(spike2, 100, 150)



  .image(cacti, 300, 170)

.animation(flower,450,170)

  .animation(crab, 500, 180);



 
game.newScene()

 .text("Dora", 200, 100, "white")

  .animation(flower, 100, 170)

.image(spike1, 200, 170)

.animation(flower, 400, 170)

.image(tree, 590, 170);

game.newScene()

.image(cacti, 100, 170)

.animation(crab, 300, 180)

.animation(fire, 400, 180)

.animation(chomper, 590, 170);

game.newScene()

.animation(chomper, 100, 170)

.animation(bird, 400, 100)

.animation(bird, 450, 120)

.animation(bird, 500, 140);

game.newScene()

.image(spike2, 200, 140)

.image(spike3, 500, 115);
 



 


game.newScene()

  //写文本的函数

 .text("Reck", 200, 50, "blue")

  //画动态图的函数

 .animation(chomper,5,170)

 .animation(chomper,200,170)

 .animation(bird,230,10)

 .animation(bird,300,0) 

 //画静态图的函数

 .image(spike3,400,110);





game.newScene()

  .text("Reck", 200, 50, "blue")

  .animation(fire,50,170)

  .image(spike1,200,170)

  .animation(fire,200,140)

  .image(spike2,390,150)

  .animation(fire,390,115);

  

  

 



 
game.newScene()

  //写文本的函数

 .text("rachel出品", 20, 40, "yellow")

  //画动态图的函数

 .animation(fire, 200, 170) 

.animation(crab, 300, 170) 

 //画静态图的函数

 .image(cacti, 500, 170);  





game.newScene()

  .image(spike2, 100, 150)

.animation(chomper, 200, 170)

  .image(cacti, 600, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("叶硕轩出品", 200, 100, "green")

  //画动态图的函数

 .image(spike3, 200, 110)  

 //画静态图的函数

 .animation(chomper, 400, 170);  





game.newScene()

  .image(cacti, 100, 170)

  .image(spike1, 300, 170)

  .image(flower, 600, 110);
game.newScene()
 .text("波比出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)  

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()



  //写文本的函数



.text("luhaoqian", 200, 100, "blue")

 

 //画动态图的函数



 .animation(bird, 100, 100)



 .animation(crab, 650, 100)



 //画静态图的函数



 .image(spike3, 400, 100); 



 





game.newScene()

 

 .image(spike2, 100, 150)

 

 .image(spike3, 400, 100)



  .animation(crab, 700, 180);







game.newScene()



.image(cacti,150,180);
game.newScene()

  //写文本的函数

 .text("奥特曼出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 170)  

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

.image(cacti,350,170)

  .image(cacti, 600, 10)

.image(spike3,150,110)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Harry出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 200, 170)  

 .animation(chomper, 599, 20)

 //画静态图的函数

 .image(spike3, 400, 105);  





game.newScene()

  .image(spike2, 376, 30)

 .image(spike2, 426, 30)

  .image(spike2,326, 30)

 .image(spike1, 567, 170)

  .animation(crab, 600, 170)

  .animation(fire, 100, 170);
game.newScene()

  //写文本的函数

 .text("Tony出品", 100, 90, "orange")

  //画动态图的函数

 .animation(fire, 200, 50)  

 //画静态图的函数

 .image(spike3, 400, 100)  

 .image(spike3, 400, 200);



game.newScene()

  .text("当心刺",100,50,"black")

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(crab,550,180);



game.newScene()

  .image(spike2, 90, 150)

  .image(spike2, 300, 70)

  .animation(crab, 500, 180);
game.newScene()

.text("方畅", 200, 80, "white")

.animation(chomper,100, 170)

.image(spike3, 200, 170)

.animation(fire, 550, 170);





game.newScene()

.animation(flower, 200, 170)

.image(tree, 400, 100)

.image(tree, 550, 170);
game.newScene()

.text("方畅", 200, 80, "white")

.animation(chomper,100, 170)

.image(spike3, 200, 170)

.animation(fire, 550, 170);





game.newScene()

.animation(flower, 200, 170)

.image(tree, 400, 100)

.image(tree, 550, 170);
  



 


game.newScene()

  //写文本的函数

 .text("刘欣出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower,200,170)

 .animation(bird,300,30)

 .animation(crab,400,180)

 .animation(bird,500,30)

 .animation(fire,600,180);

 //画静态图的函数

   





game.newScene()

.image(tree,200,170)

.image(cacti,500,170);

  



 
game.newScene()

  

 .text("郑宇轩出品", 200, 100, "red")

 .animation(fire, 200, 170)  

 .image(tree, 400, 170);  





game.newScene()

  .image(spike3, 100, 10)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(bird,600,100);
game.newScene()

  //写文本的函数

 .text("于安菘出品", 600,100, "black")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(bird, 340, 50) 

.animation(chomper, 200, 170)  





 //画静态图的函数

 .image(spike3, 580, 110);  





game.newScene()
  .image(cacti, 270, 170)

  .image(tree, 500, 170)

.animation(crab,590, 180) ;


game.newScene()
 .text("王天一出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)

 .animation(flower, 350, 90)

 //画静态图的函数

 .image(tree, 300, 170);  



    

game.newScene()

  .animation(bird, 100, 150)

  .animation(bird, 150, 130) 

  .animation(bird, 200, 110)

  .image(cacti, 550, 170)

  .animation(crab, 500, 180);



game.newScene()

  //写文本的函数

 .text("姚乐帆出品", 200, 100, "red")

  //画动态图的函数

 .image(cacti, 100, 170)

.animation(chomper,300,170)

 //画静态图的函数

 .image(spike2, 400, 150)  

.image(tree, 600, 170);



game.newScene()

  .animation(crab, 100, 150)

  .image(spike1, 300, 170)

  .animation(fire, 500, 180);

game.newScene()

  //写文本的函数

 .text("金正宇出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 240, 170)  

 //画静态图的函数

 .image(spike3, 300, 110)  

 .animation(chomper, 600, 170);



game.newScene()

  .image(cacti, 100, 150)

  .image(spike2, 300, 150)

  .image(spike1, 500, 170);

game.newScene()



 .text("CRABLAND!!!!!!", 200, 100, "white");



game.newScene()

  .animation(crab, 440, 180)

  .animation(crab, 500, 70)

  .animation(crab, 580, 180);

game.newScene()

 .animation(crab, 440, 180)

  .animation(crab, 500, 70)

  .animation(crab, 580, 180);

game.newScene()

.animation(crab, 440, 180)

  .animation(crab, 500, 70)

  .animation(crab, 580, 180);

game.newScene()

 .animation(crab, 440, 180)

  .animation(crab, 500, 70)

  .animation(crab, 580, 180);
game.newScene()

  //写文本的函数

 .text("13570",60 , 50, "red")

  //画动态图的函数

 .animation(fire, 200, 170)  

.animation(fire, 500, 170)

 //画静态图的函数

 .image(cacti, 400, 170);  





game.newScene()

  .image(spike3, 100, 110)

.animation(chomper, 500, 170)

.image(cacti, 600, 170)

.image(spike2, 300, 20);

game.newScene()

  //写文本的函数

 .text("lina出品", 200, 100, "white")

  //画动态图的函数

 .animation(bird, 180, 170)  

.animation(crab, 252, 170)

.animation(fire, 456, 170)

 //画静态图的函数

 .image(spike3, 598,111)

 .image(tree, 380,168);  

game.newScene()

.text("赵陆洋", 300, 50, "blue")

  .image(cacti, 200, 170)

  .image(tree, 300, 170)

  .animation(crab, 500, 180)

  .animation(flower, 550, 170)

  .animation(flower, 600, 170);



  game.newScene()

.text("赵陆洋", 300, 50, "blue")

  .animation(flower, 200, 170)

  .animation(fire, 300, 180)

  .animation(fire, 320, 180)

  .animation(fire, 340, 180)

  .image(spike1, 600, 170);

  

  

  game.newScene()

.text("赵陆洋", 300, 50, "blue")

  .image(spike2, 200, 145)

  .image(spike3, 500, 110);
game.newScene()

  .animation(chomper, 200, 150)

  .animation(bird, 400, 170)

  .image(spike3, 500, 100);





game.newScene()

  .animation(fire, 200, 150)

  .animation(crab, 390, 180)

  .animation(flower, 500, 100);



game.newScene()

  .animation(chomper, 200, 170)

  .image(cacti, 390, 170)

  .animation(crab, 500, 180);



game.newScene()

  .image(spike2, 200, 145)

  .animation(flower, 390, 170)

  .animation(fire, 500, 180);
game.newScene()

  .image(spike1, 200, 150)

  .animation(chomper, 400, 170)

  .animation(fire, 500, 180);



  game.newScene()

 .animation(flower, 190, 170)

 .image(tree, 400, 170)

  .animation(bird, 500, 180);
game.newScene()

 .text("Ella，Amy", 200,80, "white")

 .image(spike1,100, 170)

 .image(spike1,300, 170)

 .animation(chomper,350, 170)

.animation(bird,490, 100)

.animation(bird,550, 100);

game.newScene()

 .image(spike3,100,110 )

.animation(bird,300, 100)

 .image(tree,470,170 )

.image(tree,500,170 );
game.newScene()

  //写文本的函数

 .text("徐翊潇出品", 200, 100, "red")

  //画动态图的函数

 .animation(chomper, 200, 170) 

.animation(crab, 250, 30)

.animation(bird, 350, 30)

.animation(bird, 470, 140)

.animation(fire, 600, 180)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

 .text("徐翊潇出品", 200, 100, "red")

.animation(fire, 30, 160)

   .image(spike2, 350, 170)

  .image(tree, 210, 170)

  .animation(crab, 350, 10);
game.newScene()

  //写文本的函数

 .text("Geoffrey", 200, 170, "blue")

  //画动态图的函数

 .animation(flower, 200, 100)  

 //画静态图的函数

 .image(tree, 400, 100);  





game.newScene()

  .image(spike2, 100, 80)

  .image(cacti, 300, 100)

  .animation(crab, 500, 100);
  //写文本的函数
game.newScene()
 .text("杜嘉怡 林弋帆出品", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130) 

 .animation(flower, 300, 110) 

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(spike3, 150, 110)

  .animation(crab, 500, 180)

  .animation(bird, 500, 130)

  .animation(chomper, 550, 170);
game.newScene()

  //写文本的函数

 .text("你好", 200, 100, "green")

  //画动态图的函数

.animation(chomper,200,170)

 .animation(bird, 50, 100) 

 //画静态图的函数

 .image(cacti, 400, 170)  

.image(spike3,450,100)

.image(spike2,550,150);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(fire,550,170)

.animation(flower,600,170);





game.newScene()

.animation(fire,700,180)

.image(spike3,750,100);
game.newScene()

  //写文本的函数

 .text("YOLANDA", 200, 100, "white")

  //画动态图的函数

 .animation(bird, 200, 120)  

 .animation(bird, 250, 150)  

 //画静态图的函数

 .image(tree, 500, 170);  



game.newScene()

  //写文本的函数

 .text("YOLANDA", 100, 100, "white")

  //画动态图的函数

 .animation(fire, 200, 140)  

.animation(fire, 250, 170) 

 //画静态图的函数

 .image(tree, 450, 170);  



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("陈曦", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 100, 100)

.animation(chomper,435,100)

.animation(bird,310,65)

 //画静态图的函数

 .image(tree, 400, 170)

.image(cacti,140,75)

.image(spike2,150,225);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("吴越", 200, 100, "white")

  .animation(chomper, 50, 170)

  .image(spike2, 190, 145)

  .image(spike3, 350, 110)

.animation(bird, 130, 170)

.animation(bird, 250, 10)

.animation(bird, 390, 170);

game.newScene()

.text("盛天昊", 200, 100, "white")  .animation(fire, 50, 180)

  .image(spike3, 100, 10)

  .image(spike1, 150, 110)

.animation(bird, 270, 170)

.animation(bird, 250, 10)

.animation(bird, 390, 170);

  

game.newScene()

  //写文本的函数

 .text("XRD出品", 200, 100, "white")

  //画动态图的函数

 .image(cacti, 100, 170)  

.image(cacti, 160, 170) 

 //画静态图的函数

 .image(tree, 210, 170)  

.animation(bird,300,50)

.animation(bird,360,70)



;

game.newScene()

  .animation(fire, 150, 180)

  .image(spike3, 240, 110)

  .animation(crab, 300, 180);




game.newScene()

  //写文本的函数

 .text("王钰莹和宋哲凯出品", 200, 100, "green");

/*  //画动态图的函数

 .animation(flower, 600, 130)  

 //画静态图的函数

 .image(tree, 400, 170);  

*/



game.newScene()

  .animation(chomper, 100, 170)

  .animation(flower, 300, 170)

  .animation(bird, 500, 90)

  .image(spike3,600,10);



game.newScene()

  .image(spike1,210,124)

  .animation(flower,90,170);
game.newScene()

 .text("XRD出品", 200, 100, "blue")

  .animation(flower, 100, 170)

  .image(tree, 150, 170)

 .image(spike1, 350, 170)

.image(spike2, 470, 100)

.animation(bird, 600, 70);
game.newScene()

  //写文本的函数

 .text("朱浩宇出品", 200, 100, "white") 

 //画静态图的函数

 .image(tree, 600, 170)

 .image(spike2, 400, 150)

 .image(spike1, 200, 170);  





game.newScene()

 .image(spike3, 500, 105)

  .image(tree, 300, 170)

  .animation(crab, 200, 180);



game.newScene()

  .animation(chomper, 600, 170)

  .animation(fire, 400, 180)

 .image(spike3, 300, 105);
game.newScene()

  //写文本的函数

 .text("APPLE 出品", 500, 50, "yellow")

  //画动态图的函数

.image(spike1, 60, 170)

.animation(flower, 250, 170)

.animation(chomper, 430, 170)

.animation(crab, 600, 180);

 //画静态图的函数

 //.image(spike1, 550, 170) 





game.newScene()



  

  .animation(bird,150,50)

  .image(tree, 300, 170)

  .animation(fire,480,180);
game.newScene()

  .text("王涵璐出品", 200, 100, "orange")

  .image(cacti, 100, 170)

  .animation(fire, 300, 170)

  .animation(flower, 500, 170)

  .image(tree, 600, 170);



game.newScene()

  .text("高海辰出品", 200, 100, "yellow")

  .animation(chomper, 90,170)

  .image(cacti,150,170)

  .animation(bird,200,25)

  .animation(fire,260,150)

  .animation(bird,360,40)

  .image(spike3,520,110)

  .image(tree,580,170);
game.newScene()

.text("Nancy出品", 200, 100, "blue")

  .animation(chomper, 100, 170)

  .animation(bird,100,10)

  .animation(fire, 300, 180)

  .image(tree, 500, 170)

.animation(bird,500,10);

game.newScene()

  .image(spike3, 100, 110)

.animation(bird,200,10)

  .animation(crab, 300, 180)

.animation(bird,300,10)

  .image(spike1, 500, 170)

.animation(bird,500,10)

  .animation(flower,550,170);
game.newScene()

 .text("徐昕蕾的作品", 200, 100, "pink")

  .animation(fire,300 ,180 )

  .image(spike1,450 , 170)

.image(spike2,600 , 70);



game.newScene()

 .text("徐昕蕾的第2关", 200, 100, "red")

 .image(tree, 150,170 )

.image(cacti,300 ,170 )

 .animation(bird,500 ,70 );
game.newScene()

  //写文本的函数

 .text("沈万鑫", 50, 100, "blue")

  //画动态图的函数

 .animation(chomper, 100,170)  

.animation(fire, 150,170)

 //画静态图的函数

 .image(cacti, 400, 170);  



game.newScene()

  //写文本的函数

 .text("沈万鑫", 50, 100, "blue")

  //画动态图的函数

 .animation(bird ,100,170)  

.animation(bird ,150,120) 

 //画静态图的函数

 .image(spike3, 450, 110);  



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  .text("LDian出品", 200, 100, "white")

  .image(spike1, 100, 150)

  .image(spike3, 170, 110)

  .animation(chomper, 230, 120)

  .image(spike1, 400, 5)

  .animation(chomper, 400, 170);
game.newScene()

.text("RUNNER", 200, 30, "red")

.text("Alex", 200, 100, "blue")

  .animation(chomper, 150, 170)

  .image(spike3, 300, 110)

  .animation(fire, 500, 180);

game.newScene()

  .animation(chomper, 150, 170)

  .animation(bird, 300, 110)

  .image(spike2, 500,145);

game.newScene()

  .image(tree, 150, 170)

  .animation(fire, 300, 300)

  .image(spike2, 500, 300)

  .animation(bird,300,300)

  .image(cacti, 320, 300)

  .animation(chomper, 510, 300)

  .image(spike1, 580, 300);

game.newScene()

  .animation(chomper, 150, 1)

  .animation(flower, 320, 1)

  .animation(bird, 420, 1)

  .animation(bird,300,1)

  .image(tree, 420, 1)

  .animation(crab,580, 1);
  

game.newScene()

  //写文本的函数

 .text("gifwcn",50,50 , "black")

 .image(spike2,60,145)

 .image(spike3,300,110)

 .animation(chomper,520, 170);  





game.newScene()

  .text("How long can you go?", 200, 100, "white")

  .animation(flower, 100, 170)

  .image(spike2, 200, 145)

  .image(tree, 400, 170)

  .image(spike3,450,110);


game.newScene()

  .animation(fire, 50, 180)

  .image(spike3, 100, 10)

  .image(spike1, 150, 110)

.animation(bird, 270, 170)

.animation(bird, 250, 10)

.animation(bird, 390, 170)

.animation(bird, 380, 10)

.image(spike1, 480, 170)

.image(spike2, 550, 10);



game.newScene()

  .animation(flower, 30, 170)

  .animation(chomper, 130, 170)

  .animation(chomper, 170, 170)

.animation(chomper, 210, 170)

.animation(bird, 380, 10)

.image(spike2, 400, 145)

.image(tree, 515, 170)

.image(tree, 555, 170)

.image(tree, 600, 170);

game.newScene()

  //写文本的函数

 .text("LEON", 100, 100, "white")

  //画动态图的函数

 .animation(chomper, 200, 170)  

 .animation(flower, 250, 170)  

 //画静态图的函数

 .image(tree, 500, 170);  



game.newScene()

  //写文本的函数

 .text("LEON", 100, 100, "white")

  //画动态图的函数

 .animation(fire, 200, 170)  

 .animation(fire, 240, 170) 

 .animation(fire, 290, 170) 

 //画静态图的函数

 .image(spike1, 550, 170);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(flower, 500, 170);
game.newScene()

  //写文本的函数

 .text("曹语涵", 200, 100, "white")

  //画动态图的函数

 .animation(bird, 50, 170)  

.animation(fire, 250, 170)

.animation(fire, 200, 170)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  .image(spike3, 100, 110)

  .animation(chomper, 300, 170)

  .animation(flower, 500, 170)

.animation(bird, 600, 170);

game.newScene()

  .animation(fire, 200, 180)

  .image(cacti, 300, 170)

  .image(tree, 500, 170);
game.newScene()

  //写文本的函数

 .text("李早出品", 200, 100, "red")

  //画动态图的函数

 .image(tree, 200, 170)  

 //画静态图的函数

 .image(spike1, 400, 100)  

.image(spike1, 570, 170);



game.newScene()

  .image(spike2, 150, 80)

  .animation(flower, 300, 170)

  .animation(fire, 500, 180)

 .animation(flower, 550, 170)

 .image(tree,750,170) 

.image(tree,700,170);
game.newScene()

  //写文本的函数

 .text("于子涵出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 72, 170) 

.animation(fire, 350, 170)

.animation(crab, 599, 170)

.animation(bird, 250, 50);

 //画静态图的函数;  





game.newScene()

  .image(spike3, 50, 101)

  .image(tree, 350, 170)

.image(tree, 600, 170);
 //写文本的函数
game.newScene()
 .text("曹一炜 周道一出品", 200, 100, "green")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(chomper, 300, 130)

  .animation(crab, 500, 180)

  .animation(fire, 500, 130);
  

game.newScene()

  //写文本的函数

 .text("肖瑶出品", 200, 100, "white")

  //画动态图的函数

 //.animation(flower, 200, 170)  

 //画静态图的函数

 //.image(tree, 400, 170);  

.animation(chomper,100,170)

.animation(chomper,160,170)

.animation(fire,250,170)

.animation(fire,310,170)

.animation(fire,450,170)

.image(spike3,550,110)

.image(spike3,590,110)

;

game.newScene()

 // .image(spike2, 100, 150)

  //.image(cacti, 300, 170)

 //.animation(crab, 500, 180);

.image(tree,160,170)

.image(tree,220,170)

.image(tree,260,170)

.image(tree,300,170)

.image(cacti,350,170)

.image(cacti,400,170)

.animation(bird,400,0)





;


game.newScene()

  .animation(crab, 100, 150)

  .image(tree, 300, 170)

  .animation(bird, 500, 150);



game.newScene()

  .animation(chomper,460,170)

  .image(cacti,340,170)

  .animation(fire,690,169);
game.newScene()

 .animation(chomper,500,300)

 .animation(flower,400,100)

 .animation(crab,300,200);

            

game.newScene()

 .image(spike2,500,200)

 .animation(bird,400,100)

 .image(tree,300,100)

 .image(cacti,500,200);



game.newScene()

  //写文本的函数

 .text("holly出品", 50, 130, "yellow")

  //画动态图的函数

 .animation(chomper, 100, 170)  

 .animation(bird,430, 120)  

.animation(bird,450, 120)  

 //画静态图的函数

 .image(spike2, 150, 170) 

.image(tree,300, 170);

//.image(cacti,600, 170)





game.newScene()

  .image(spike3, 100, 150)

  .image(flower, 200, 170)

  .animation(crab,500, 180);
game.newScene()

  //写文本的函数

 .text("Victoria 出品", 400, 50, "purple")

  //画动态图的函数

 .image(tree, 200, 170)

.animation(flower, 400, 170)



//.animation(flower, 200, 170)



 //画静态图的函数

 .animation(fire, 550, 180);  





game.newScene()

  .image(spike1, 150, 170)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("邓嘉彭出品", 300, 100, "black")

  //画动态图的函数

 .animation(chomper, 200, 0)  

 .animation(flower, 200, 170)

 .image(spike1, 400, 170)

 .animation(bird, 500, 0)

 .animation(flower, 300, 0);  





game.newScene()

 .animation(crab, 200, 0)

  .image(spike2, 300, 150)

  .image(spike3, 550, 105)

  .animation(fire, 500, 0);



game.newScene()

  .image(cacti, 300, 0)

  .image(tree, 300, 170);
game.newScene()

  //写文本的函数

 .text("杨佳鑫", 300, 100, "blue")



  //画动态图的函数

 .animation(chomper, 200, 170) 

 .animation(fire, 300, 170)

 //画静态图的函数  

.image(tree, 400, 170) 

.image(cacti, 600, 170) 

 .image(spike2, 0, 90); 





game.newScene()

.text("宗语赞", 300, 100, "pink")

  .image(spike1, 100, 150)

.image(spike2, 600, 100)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(bird, 400, 20);



game.newScene()

  //写文本的函数

 .text("Nick出品1", 100, 100, "green")

  //画动态图的函数

 .animation(crab, 200, 180)

.animation(fire, 500, 180)

 //画静态图的函数

 .image(spike3, 300, 40)

.image(cacti, 350, 40)

.image(cacti, 450, 100)

.image(tree, 380, 170);  





game.newScene()

.text("Nick出品2", 100, 100, "purple")

.animation(chomper, 50, 50)

  .image(spike2, 130, 150)

  .image(cacti, 300, 170)

.image(cacti, 350, 50)

.image(tree, 260, 170)

  .animation(crab, 470, 180)

.animation(fire, 200, 100)

.animation(flower, 400, 100)

.animation(bird, 550, 50);



game.newScene()

.text("Nick出品3", 100, 100, "blue")

.image(spike3,180, 100)

.image(tree,240, 40)

.animation(fire, 390, 100)

.image(spike2,540, 150)

.image(spike3,440, 10);
game.newScene()

  //写文本的函数

 .text("王继萱", 10, 100, "green")

.text("爱爸爸妈妈", 60, 150, "green")

  //画动态图的函数

 .animation(chomper, 10, 170)  

 .animation(bird, 60, 165) 

 //画静态图的函数

.image(spike2, 300, 130)

 .image(spike3, 350, 100);  



game.newScene()

  //写文本的函数

 .text("王继萱", 200, 100, "yellow")

  //画动态图的函数

 .animation(fire, 130, 170)  

.animation(fire, 130, 140)

.animation(crab, 300, 70)

.animation(crab, 350, 70)

 //画静态图的函数

.image(spike1, 70, 170)

 .image(tree, 450, 170);



game.newScene()

  .image(cacti, 150, 150)

  .image(cacti, 200, 170)

  .animation(crab, 360, 180);
game.newScene()

  //写文本的函数

 .text("李席远的作品", 200, 100, "red")

  //画动态图的函数

  .animation(flower, 500, 170)

 //画静态图的函数

 .image(tree, 300, 170)

.image(spike2, 600, 150);  





game.newScene()

 .text("李席远的第2关", 200, 100, "red")

  .image(tree, 200, 170)

  .animation(chomper,300 ,170 )

  .image(tree,500 , 170)

.image(spike1,600 ,170 );
game.newScene()

  .text("贺彦祺出品", 200, 100, "black")

  .animation(chomper, 100, 60)

  .animation(bird, 275, 90)

  .image(cacti, 400, 200);
game.newScene()

  .text("蔡东溯出品", 200, 100, "blue")

  .animation(fire, 100, 180)

  .animation(bird, 300, 110)

  .image(cacti, 590, 170);
game.newScene()
.text("chloe出品", 200, 100, "white")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)  

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 300, 130)

  .animation(crab, 500, 180)

  .animation(crab, 550, 150)

  .animation(crab, 600, 120);

game.newScene()

  //写文本的函数

 .text("Danny出品", 200, 100, "blue")

  //画动态图的函数

 .animation(chomper, 200, 170)  

.animation(bird, 265, 130)

.animation(bird, 330, 90)

 //画静态图的函数

 .image(tree, 420, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
  

game.newScene()

  //写文本的函数

 .text("十枚金币", 68, 30, "gold")

 .image(tree,1,170)

 .animation(chomper,50,170)

 .image(spike3,300,110)

 .animation(fire,480,175)

 .animation(flower,550,170)

 .animation(bird,50,10);




  

game.newScene()

  //写文本的函数

 .text("王一雅", 300, 100, "white")

  //画动态图的函数

 .animation(bird, 100, 50)  

 //画静态图的函数

 .image(tree, 200, 170)  

 .image(spike2,380,145)

.animation(fire,380,110)

.animation(flower,550,170);


game.newScene()  //写文本的函数

 .text("孙琛懿出品", 200, 100, "green")

  //画动态图的函数

 .image(spike1, 450, 170)

 //画静态图的函数

 .image(spike1, 400, 170)

.animation(chomper, 100, 200)

.animation(chomper, 150, 200);  





game.newScene()

.text("孙琛懿出品", 200, 100, "green")

  .image(spike2, 100, 150)

  .image(spike3, 300, 110)

  .animation(crab, 100, 110)

.image(cacti, 500, 170)

.image(cacti, 500, 130);
game.newScene()

  //写文本的函数

 .text("靳舒寒", 200, 100, "red")

  //画动态图的函数

.animation(bird, 125, 125)

 .animation(flower, 225, 170)

.animation(bird, 275, 125)

 //画静态图的函数

 .image(tree, 550, 170);  





game.newScene()

 .animation(fire, 50, 170)

 .image(spike3, 100, 50)

 .animation(bird, 450, 50)  

 .image(cacti, 300, 170)

 .animation(crab, 600, 180);
game.newScene()
.text("关皓芮出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()
.text("杨琬之 周淇涵出品", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130) 

 .animation(flower, 300, 110) 

 

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 300, 130)

  .animation(crab, 500, 180)

  .animation(crab, 550, 180);
game.newScene()

.text("Rebecca出品", 200, 100, "yellow")

.text("Flora出品", 300, 100, "purple")

  .animation(flower, 100, 170)

  .animation(bird, 300, 0)

  .animation(fire, 500, 180);

game.newScene()

  .image(tree, 100, 170)

  .animation(flower, 300, 170)

  .animation(fire, 500, 180);

game.newScene()

  .image(spike3, 100, 110)

  .image(spike1, 300, 170)

  .image(tree, 500, 170)

   .animation (bird,600,80);

game.newScene()

  .image(spike1, 100, 170)

  .image(spike2, 140, 150)

  .image(spike3, 180, 110)

.image(spike2,220,150)

.image(spike1,260,170);
game.newScene()

  //写文本的函数

 .text("Aaron Lu出品", 100, 100, "blue")

  //画动态图的函数

 .animation(chomper, 20, 170)  

.animation(bird, 100, 120) 

.animation(bird, 120, 170)



.animation(bird, 260, 100)

.animation(crab, 340, 180)

.animation(flower, 380, 120)

.animation(fire, 400, 180)

 //画静态图的函数

 .image(cacti, 450, 170) 

.image(spike2, 520, 150);





game.newScene()

  .image(spike1,15,60)

 .image(spike3, 150, 110)

  .image(cacti, 300, 170)

;
game.newScene()

.text("Faded", 200, 100, "yellow")

  .animation(chomper, 50, 150)

  .animation(bird, 300, 150)

  .animation(fire, 400, 200)

  .image(spike1,100,150);



game.newScene()

  .image(spike3, 50, 100)

  .image(spike2, 300, 150)

  .image(cacti, 400, 180)

  .image(tree,100,150);
game.newScene()

  .image(spike2, 100, 130)

  .animation(flower, 150, 170)

  .animation(fire, 1, 180)

.animation(bird, 320, 170)

.image(cacti, 500, 170)

 .image(tree, 550, 170);
game.newScene()

  //写文本的函数

 .text("Andrea出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 200, 170) 

.animation(chomper,600,100)

 //画静态图的函数

 .image(tree, 300, 0) 

.image(cacti,120,100);



game.newScene()

  .image(spike2, 100, 150)

//.image(cacti, 100, 0)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("张乐妍出品", 200, 100, "yellow")

  //画动态图的函数

 .animation(flower, 200, 170) 

 .animation(bird, 300, 120) 

 //画静态图的函数

 .image(spike1, 600, 170);  





game.newScene()

 .animation(fire, 200, 170) 

  .image(tree, 320, 170)

  .image(spike2, 380, 150);
game.newScene()

.text("wzy出品", 200, 100, "blue")

  .image(tree, 100, 170)

  .image(tree, 150, 170)

  .animation(bird, 500, 150)

.animation(bird, 550, 150);



game.newScene()

.text("wzy出品", 200, 100, "blue")

.image(spike2,300,140)

.animation(fire,500,180);
game.newScene()

.text("XRD出品", 200, 100, "white")

  .animation(bird, 100, 110)

  .animation(flower, 260, 120)

.image(spike1, 350, 170)

.image(tree, 400, 130)

.image(cacti, 550, 130);
game.newScene()

  //写文本的函数

 .text("Davy的作品", 200, 20, "blue")

  .image(tree, 100, 170)

.animation(fire, 300, 180)

 .image(spike1, 350, 170)

.image(cacti, 400, 170)

.image(spike3, 600, 5); 



game.newScene()

  //写文本的函数

 .text("Davy的第2关", 200, 20, "blue")

  .image(tree, 200, 170)

.animation(crab, 350, 180)

.animation(bird, 450, 20);



game.newScene()

.text("allen的作品", 200, 20, "blue")

.animation(chomper, 200, 170)

.animation(bird, 250, 20) 

.animation(flower, 350, 170);



game.newScene()

.text("allen的第2关", 200, 20, "blue")

.image(spike2, 50, 150)

.animation(crab, 250, 170)

.animation(bird, 250, 100)

.image(tree,500, 170);

 



game.newScene()

.text("allen的第3关", 200, 20, "blue")

  .image(spike1, 100, 170)

  .animation(bird, 100, 10)

 .animation(fire, 300, 170)

.image(cacti, 400, 170)

.image(spike1, 600, 170)

.animation(bird, 600, 10);
game.newScene()
 .text("Mr.TT Fu出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)      

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(chomper, 500, 130);
game.newScene()

  //写文本的函数

 .text("666", 200, 50, "red")

.text("666", 200, 160, "red")

  //画动态图的函数

 .animation(chomper,380, 100) 

.animation(fire, 100, 170)

.animation(chomper,200, 50)

 //画静态图的函数

.image(tree, 500, 170)  

.image(spike1, 600, 40); 





game.newScene()

  

.text("w", 200, 50, "red")

.animation(chomper, 600, 170) 

.animation(fire, 90, 170)

.image(spike3, 400, 170) 

.animation(bird, 400, 5);
game.newScene()

  //写文本的函数

 .text("kitty出品", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 200, 180)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike3, 100, 110)

  .animation(bird, 300, 1)

  .animation(crab, 400, 180);
game.newScene()

  //写文本的函数

 .text("杨佳鑫", 300, 100, "blue")



  //画动态图的函数

 .animation(chomper, 200, 170) 

 .animation(fire, 300, 170)

 //画静态图的函数  

.image(tree, 400, 170) 

.image(cacti, 600, 170) 

 .image(spike2, 0, 90); 





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);

game.newScene()
.text("万睿松出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 150)  

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)  

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(bird, 300, 130)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("周子涵出品", 200, 100, "red")

  //画动态图的函数

 .animation(fire, 400, 170)  

 .animation(flower, 600, 170) 

 //画静态图的函数

 .image(tree, 200, 170);  





game.newScene()

  .image(spike2, 200, 150)

  .image(cacti, 300, 170)

  .animation(chomper, 500, 170)

  .animation(bird, 600, 0)

  .animation(bird, 100, 0);



game.newScene()

 .image(tree, 200, 170)

 .image(spike1, 400, 170);
  

game.newScene()

  //写文本的函数

 .text("刘懿萱", 200,50, "blue")

  //画动态图的函数

 .animation(chomper,9,170)

 .animation(bird,90,0) 

 //画静态图的函数

 .image(cacti, 200, 170)

 .image(tree,400,170)

 .image(spike2,450,145);  






game.newScene()

  //写文本的函数

 .text("XRD出品", 200, 100, "white")

  //画动态图的函数

 .animation(fire, 500, 10)  

 //画静态图的函数

 .image(tree, 100, 10)

.image(spike2, 100, 40)

 .image(tree, 200, 0)

.image(spike2, 350, 30)

 .image(tree, 300, 10)

.animation(fire, 470, 180)  

 .image(tree, 400, 0)

.image(spike1, 200,170);  





game.newScene()

  .image(tree, 100, 10)

  .image(tree, 200, 0)

  .image(tree, 300, 180)

.image(tree, 400, 0)

.image(spike2, 200, 40)

.image(spike2, 450, 40)

.animation(fire, 350, 170) 

.animation(flower, 500, 170)  ;

game.newScene()

.text("好运 多米出品", 387, 60, "blue")

  .animation(chomper, 100, 170)

  .animation(bird, 150,160)

  .animation(crab, 350, 170)

 .image(cacti, 400, 170)

.animation(fire, 600, 180);





game.newScene()

.text("好运 多米出品", 387, 60, "blue")

  .image(spike3, 100, 110)

  .image(spike1, 300, 170)

  .image(spike2, 500, 145);
game.newScene()

  //写文本的函数

 .text("王喻晓小游戏", 100, 100, "purple")

  //画动态图的函数

 .animation(flower, 100, 170)  

 //画静态图的函数

 .image(spike2, 400, 150)  

.animation(fire, 150, 180)

.image(tree, 600, 170);

game.newScene()

  .animation(bird, 10, 110)

  .animation(chomper, 300, 170)

  .animation(crab, 500, 180);

game.newScene(1)

  //写文本的函数

 .text("Oscar出品", 200, 100, "yellow")

.text("小心陷阱，嘻嘻",600,101,"yellow")

  //画动态图的函数

 .animation(chomper, 300, 100) 

.animation(crab,600,100)

 //画静态图的函数

 .image(tree, 400, 170);  





game.newScene(2)

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

.animation(fire,700,180)

 .image(spike3,400,120);
game.newScene()

  //写文本的函数

 .text("杨杰瑞出品", 200, 100, "red")

  //画动态图的函数

 .animation(flower, 1, 170)  

 //画静态图的函数

 .image(spike1, 100, 170)

.image(spike1, 300, 170)

.image(spike1, 500, 170)

.animation(bird, 200, 50)

.animation(bird, 400, 50);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("Annie the bear's game", 200, 100, "brown")

  .image(spike1, 100, 170)

  .animation(fire, 300, 180)

  .image(tree, 300, 110)

  .animation(chomper, 450, 190)

  .image(spike3, 600 ,100);
game.newScene()

  //写文本的函数

 .text("KING", 10, 100, "red")

  //画动态图的函数

 .animation(chomper, 20, 165)  

.animation(flower, 70, 170)

.animation(fire, 250, 140)

.animation(fire, 250, 170)

 //画静态图的函数

 .image(tree, 400, 170);  



game.newScene()

  //写文本的函数

 .text("KING", 10, 100, "red")

  //画动态图的函数

 .animation(bird, 50, 100)  

.animation(bird, 110, 100)

.animation(fire, 250, 150)

 //画静态图的函数

 .image(tree, 400, 170);



game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("奚忱宇出品", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 170) 

.animation(chomper, 250, 170)

 .animation(bird, 300, 10)

 //画静态图的函数

 .image(tree, 400, 170)

 .image(spike3, 450, 170)

.image(spike2, 500, 170);  





game.newScene()

.text("奚忱宇出品", 200, 100, "blue")

 .animation(fire, 450, 180)  

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

  //写文本的函数

 .text("Anglea的作品", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 170)

.animation(bird, 100, 10)

 //画静态图的函数

 .image(spike2, 300, 150)

.image(spike1, 500, 10)

.animation(fire, 600, 170);  





game.newScene()

  .image(tree, 100, 170)

  .image(spike1, 400, 10)

.animation(chomper, 300, 170)

.animation(crab, 600, 170);



game.newScene()

 .text("夙殇的作品", 200, 100, "white")

.animation(chomper, 150, 170)

.image(spike2, 250, 150)

.image(spike3, 300, 110)

.image(tree, 500, 170)

.image(tree, 520, 170)

.animation(bird, 500, 10)

.image(tree, 600,10);



game.newScene()

.animation(fire, 150, 170)

.image(cacti, 250, 150)

.image(spike3, 300, 110)

.animation(fire, 500, 10)

.animation(crab, 520, 10)

.animation(bird, 550, 10);

game.newScene()

  //写文本的函数

 .text("Apple 出品", 400, 100, "blue")

  //画动态图的函数

 .animation(flower,200 , 170)  

 .animation(chomper,400 , 170) 







 //画静态图的函数

 .image(cacti, 600, 170);  





game.newScene()

  .image(spike3, 200, 110)

 

  .animation(fire, 500, 180);
game.newScene()

  //写文本的函数

 .text("candy", 200, 100, "pink")

  //画动态图的函数

 .animation(fire, 200, 170)  

.animation(fire, 250, 170) 

.animation(fire, 300, 170)  

 //画静态图的函数

 .image(cacti, 500, 170);  





game.newScene()

  .image(spike2, 100, 150)

.animation(bird, 250, 170) 

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);
game.newScene()

.text("Jojo", 200,80, "white")

  .image(spike1, 100, 170)

 .animation(flower, 200, 170)  

 .animation(flower,400, 170) 

 .animation(chomper, 500, 170)  ;

game.newScene()

.image(spike2, 100,145)

.animation(fire,150, 180)

.animation(bird,300, 100)

.animation(bird, 500, 150);

game.newScene()

.image(cacti, 100,145)

.image(spike3, 590,110)

.image(spike3, 300,110);
game.newScene(1)

  //写文本的函数

 .text("食人花", 200, 100, "blue")

  //画动态图的函数

 .animation(flower, 200, 170)  

.animation(bird,100,50)

.animation(fire,300,150)

 //画静态图的函数

 .image(tree, 400, 170)

.image(spike3,350,180);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 140);





game.newScene()

  .text("赵鑫奇",450, 100,"purple")

  .animation(chomper,220,150)

  .image(tree,260,140);
game.newScene()

.text("郭羿午出品", 100, 80, "white")

  .animation(bird,100,110)

  .animation(flower, 300, 170)

.animation(fire,500,170)

  .animation(crab, 350, 180);

game.newScene()



  .animation(bird,100,10)

  .image(tree, 100, 170)

.animation(crab,150,170)

  .image(spike2, 230, 150)

.image(cacti,450,170)

.image(spike3,550,100)

.animation(chomper,300,170);
  

game.newScene()

  //写文本的函数

 .text("周凌西出品", 200, 100, "white")

  //画动态图的函数

// .animation(flower, 200, 170)  

 //画静态图的函数

 //.image(tree, 400, 170);  

.image(spike3,100,110)

.image(spike3,160,110)

.image(cacti,360,170)

.image(cacti,410,170)

.animation(chomper,510,170)

.animation(chomper,560,170)

;

game.newScene()

 // .image(spike2, 100, 150)

 // .image(cacti, 300, 170)

  //.animation(crab, 500, 180);

.animation(crab, 150, 180)

.animation(crab, 200, 130)

//.animation(fire,300,170)

.animation(fire,300,170)

.image(spike2,450,160)

.image(spike2,500,160)

;


game.newScene()

  .image(cacti, 100, 110)

  .image(cacti, 300, 170)

  .animation(bird, 550, 180);



game.newScene()

  .animation(bird, 100, 170)

  .animation(bird, 200, 160)

  .image(tree, 500, 170);
game.newScene()

.text("1992QBE出品", 200, 100, "blue")

  .image(spike1, 100,170 )

  .image(spike2,200,50)

  .image(spike3, 250, 150)

  .animation(fire,450,140);

game.newScene()

 .text("张辰元出品", 200, 100, "yellow")

 .image(tree, 400, 170);  



game.newScene()

.text("张辰元出品", 200, 100, "yellow")

  .image(spike2, 100, 150)

 .image(tree, 400, 170); 
  

game.newScene()

  //写文本的函数

 .text("Frog", 100, 100, "black")

  //画动态图的函数

 .animation(flower,180,170)  

 .image(spike2,380,140)

 .image(cacti,420,170)

 .animation(bird,580,80);

 



game.newScene()

  .image(tree,150,170)

  .image(spike3, 380, 110)

  .animation(chomper,480,170);




game.newScene()

  //写文本的函数

 .text("Harry  出品", 200, 100, "black")



  //画动态图的函数

 .animation(flower, 140, 170)  

 //画静态图的函数

 .image(spike3, 380, 110)  

.image(tree, 580, 170); 





game.newScene()

  .animation(fire, 150, 180)

  .animation(bird, 300, 50)

  .animation(chomper, 500, 180);
game.newScene()
 .text("胡嘉予出品", 200, 100, "pink")

  //画动态图的函数

 .animation(flower, 200, 150)

 .animation(flower, 250, 130)

 .animation(flower, 300, 110)

 //画静态图的函数

 .image(tree, 300, 170);  





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180)

  .animation(chomper, 500, 135);
game.newScene()

  .animation(chomper, 100, 170)

  .animation(fire, 300, 180)

  .animation(bird, 500, 150);



game.newScene()

  .animation(crab, 100, 180)

  .image(spike1, 300, 170)

  .image(cacti, 500, 170);

game.newScene()

.text("小飞鸟出品", 200, 100, "pink")

  .animation(chomper, 200, 160)

  .animation(flower, 100, 170)

  .animation(crab, 400, 170)

  .animation(bird,500,150);
  

game.newScene()

  //写文本的函数

 .text("Jadd出品", 200, 150, "gold ")

  //画动态图的函数

 .animation(crab, 50, 180)  

 .animation(bird, 330, 30)

 .animation(fire, 400, 180)

 //画静态图的函数

 .image(spike3, 130, 110)

 .image(cacti, 200, 170);





game.newScene()

  .image(spike2, 100, 150)

  .image(cacti, 300, 170)

  .animation(crab, 500, 180);




game.newScene()

 .text("Mike出品", 200, 100, "black")

  .image(spike2, 100, 150)

  .animation(fire, 250, 180)

  .animation(bird, 250, 10)

  .animation(chomper, 400, 170)

  .image(tree, 600, 170)

  .animation(bird,600, 10);
game.newScene()

 .text("刘易明", 200, 80, "white")

 .image(spike1,100, 170)

.animation(fire,300, 180)  

 .animation(flower, 350, 170)  

 .image(spike2,570, 150); 


game.init();
//game.testRun();
game.start();