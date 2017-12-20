var bg, pinDoll, banner, top1, top2, top3, top4, bottom1, bottom2, bottom3, bottom4, hair1, hair2;
var interfaceItems = [];
var locX = 200;
var locY = 200;
var curBack = 255;
var doll;

var eatSound;
var music;
var button;

function preload(){
  //sounds
eatSound = loadSound("assets/sounds/sound1.mp3");

    
  bg = loadImage("assets/clean_background2.png");
  banner = loadImage("assets/banner.png");
  pinDoll = loadImage("assets/pin_Doll.png");
  top1 = loadImage("assets/top1.png");
  top2 = loadImage("assets/top2.png");
  top3 = loadImage("assets/top3.png");
  top4 = loadImage("assets/top4.png");
  bottom1 = loadImage("assets/bottom1.png");
  bottom2 = loadImage("assets/bottom2.png");
  bottom3 = loadImage("assets/bottom3.png");
  bottom4 = loadImage("assets/bottom4.png");
  hair1 = loadImage("assets/hair1.png");
  hair2 = loadImage("assets/hair2.png");

 
}
function setup() {
  createCanvas(1920,1080);
    
//DragDropInterface
interfaceItems.push(new interface(233, 855, 200, color (0),bottom2));
interfaceItems.push(new interface(208, 262, 200, color(0),bottom4));
interfaceItems.push(new interface(565, 689, 200, color(0),top4));
interfaceItems.push(new interface(648, 314, 200, color(0),bottom1));
interfaceItems.push(new interface(592, 1003, 200, color(0),hair1));
interfaceItems.push(new interface(1425, 1005, 200, color(0),hair2));
interfaceItems.push(new interface(1390, 330, 200, color(0),top2));
interfaceItems.push(new interface(1404, 685, 200, color(0),top1));
interfaceItems.push(new interface(1719, 393, 300, color(0),bottom3));
interfaceItems.push(new interface(1713, 909, 200, color(0),top3));
 
//Doll Animation    
doll = createSprite(1000, 600, 412, 645);
var myAnimation = doll.addAnimation("bones",  "assets/animations/pin_Doll001.png");
doll.addAnimation("build", "assets/animations/pin_Doll001.png", "assets/animations/pin_Doll013.png");
doll.addAnimation("stay", "assets/animations/pin_Doll013.png");
doll.addAnimation("bones", "assets/animations/pin_Doll001.png");

//music
    music = loadSound("assets/sounds/Antony_The_Johnsons _For_Today_I_Am_A_Boy.mp3", loaded);
    button = createButton("PLAY SONG");
    button.position(width/2, 950);
    button.mousePressed(togglePlaying);
    
    
}
function loaded(){
    
}

 function togglePlaying(){
     if (!music.isPlaying()){
     music.play();
     music.setVolume(0.3);
     button.html("PAUSE SONG");
 }else{
     music.pause();
     button.html("PLAY SONG");
 }
 }
 
function draw() {
  imageMode(CORNER);
  background(bg);
  fill(255,255,255);
  textAlign(CENTER);
  textSize(34);
  text("            press and hold p to build the doll", width/2, 1020);
    textSize(28);
  text("            click and unclick clothes to dress", width/2, 1050);
  
//Banner
image (banner, 680, 25, 626, 130);
    
//Pin Doll
    //image(pinDoll, 780, 275, 412, 645)
  
    
  if(keyWentDown("p"))
    doll.changeAnimation("build");
    
  if(keyWentDown("p"))
      eatSound.play();
    
    if(keyWentUp("p")) 
    doll.changeAnimation("stay");
    
    
    

  drawSprites();

 

 


//Clothes



  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  interfaceItems[2].check();
  interfaceItems[2].display();
  interfaceItems[3].check();
  interfaceItems[3].display();
  interfaceItems[4].check();
  interfaceItems[4].display();
  interfaceItems[5].check();
  interfaceItems[5].display();
  interfaceItems[6].check();
  interfaceItems[6].display();
  interfaceItems[7].check();
  interfaceItems[7].display();
  interfaceItems[8].check();
  interfaceItems[8].display();
  interfaceItems[9].check();
  interfaceItems[9].display();

  if (interfaceItems[0].drag == true) {
    interfaceItems[0].x = mouseX;
    interfaceItems[0].y = mouseY;
  }

  if (interfaceItems[1].drag == true) {
    interfaceItems[1].x = mouseX;
    interfaceItems[1].y = mouseY;
  }
  if (interfaceItems[2].drag == true) {
    interfaceItems[2].x = mouseX;
    interfaceItems[2].y = mouseY;
  }

  if (interfaceItems[3].drag == true) {
    interfaceItems[3].x = mouseX;
    interfaceItems[3].y = mouseY;
  }
  if (interfaceItems[4].drag == true) {
    interfaceItems[4].x = mouseX;
    interfaceItems[4].y = mouseY;
  }

  if (interfaceItems[5].drag == true) {
    interfaceItems[5].x = mouseX;
    interfaceItems[5].y = mouseY;
  }
    if (interfaceItems[6].drag == true) {
    interfaceItems[6].x = mouseX;
    interfaceItems[6].y = mouseY;
  }
    if (interfaceItems[7].drag == true) {
    interfaceItems[7].x = mouseX;
    interfaceItems[7].y = mouseY;
  }
    if (interfaceItems[8].drag == true) {
    interfaceItems[8].x = mouseX;
    interfaceItems[8].y = mouseY;
  }
    if (interfaceItems[9].drag == true) {
    interfaceItems[9].x = mouseX;
    interfaceItems[9].y = mouseY;
  }

  if (interfaceItems[0].drag == false && interfaceItems[1].drag == false && interfaceItems[2].drag == false
  && interfaceItems[3].drag == false && interfaceItems[4].drag == false && interfaceItems[5].drag == false && interfaceItems[6].drag == false && interfaceItems[7].drag == false && interfaceItems[8].drag == false && interfaceItems[9].drag == false) {
      
    var loc0 = dist(locX, locY, interfaceItems[0].x, interfaceItems[0].y);
    if (loc0 < 10) {
      curBack = 200;
    }


    var loc1 = dist(locX, locY, interfaceItems[1].x, interfaceItems[1].y);
    if (loc1 < 10) {
      curBack = 100;
    }
  }
  //console.log(interfaceItems[0].check());
}

function mousePressed() {
  if (interfaceItems[0].check() == true) {
    if (interfaceItems[0].drag == false) {
      interfaceItems[0].drag = true;
    } else {
      interfaceItems[0].drag = false;
    }
  }

  if (interfaceItems[1].check() == true) {
    if (interfaceItems[1].drag == false) {
      interfaceItems[1].drag = true;
    } else {
      interfaceItems[1].drag = false;
    }
  }
  if (interfaceItems[2].check() == true) {
    if (interfaceItems[2].drag == false) {
      interfaceItems[2].drag = true;
    } else {
      interfaceItems[2].drag = false;
    }
  }
  if (interfaceItems[3].check() == true) {
    if (interfaceItems[3].drag == false) {
      interfaceItems[3].drag = true;
    } else {
      interfaceItems[3].drag = false;
    }
  }
  if (interfaceItems[4].check() == true) {
    if (interfaceItems[4].drag == false) {
      interfaceItems[4].drag = true;
    } else {
      interfaceItems[4].drag = false;
    }
  }
  if (interfaceItems[5].check() == true) {
    if (interfaceItems[5].drag == false) {
      interfaceItems[5].drag = true;
    } else {
      interfaceItems[5].drag = false;
    }
  }
    if (interfaceItems[6].check() == true) {
    if (interfaceItems[6].drag == false) {
      interfaceItems[6].drag = true;
    } else {
      interfaceItems[6].drag = false;
    }
  }
    if (interfaceItems[7].check() == true) {
    if (interfaceItems[7].drag == false) {
      interfaceItems[7].drag = true;
    } else {
      interfaceItems[7].drag = false;
    }
  }
    if (interfaceItems[8].check() == true) {
    if (interfaceItems[8].drag == false) {
      interfaceItems[8].drag = true;
    } else {
      interfaceItems[8].drag = false;
    }
  }
    if (interfaceItems[9].check() == true) {
    if (interfaceItems[9].drag == false) {
      interfaceItems[9].drag = true;
    } else {
      interfaceItems[9].drag = false;
    }
  }
}



function interface(tempX, tempY, tempBoxSize, tempColor, tempImage) {
  this.x = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;
  this.drag = false;
  this.hand= false;
  this.img = tempImage;

  this.display = function() {
   fill(this.setFill);
   (this.x, this.y, this.boxSize, this.boxSize);
    
   


  imageMode(CENTER);
      image(this.img, this.x, this.y);
  

    if (this.overlay == true) {
        fill(255,235,243);
      (this.x, this.y, this.boxSize, this.boxSize);
        cursor(HAND);
    }
  }
   
       

  this.check = function() {
    if (mouseX >= this.x && mouseX < (this.x + this.boxSize) && mouseY >= this.y && mouseY < (this.y + this.boxSize )) {
      this.overlay = true;
      return true;
    } else {
      this.overlay = false;
      return false;
    }
  
  }
 

}
