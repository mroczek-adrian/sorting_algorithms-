// SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;

//LOAD SPRITE IMAGE
//const sprite = new Image();
const sprite=document.getElementById("image");
const numbers=document.getElementById("numbers");
//ctx.font = "30px Arial";

//sprite.src = 'js/img/sprite.png';
//var html = '<img class="imagesData" src="' + img + '" alt="' + alt + '">';


//BACKGROUD
const bg = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvs.height - 226,

    draw : function(){
        ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}

//NUMBERS
const nr1 = {
    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const nr2 = {
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 180,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const nr3 = {
    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 100,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const nr4 = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const nr9 = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 340,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//DRAW
function draw(){
    //background
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0,0,cvs.width,cvs.height);

    //title of canvas
    ctx.font = "30px Arial";
    ctx.strokeText("Bubble Sort!",10,50);

    //draw function
    //bg.draw();
    nr1.draw();
    nr2.draw();
    nr3.draw();
    nr4.draw();
    nr9.draw();
}
//UPDATE
function update(){


}
//LOOP
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();