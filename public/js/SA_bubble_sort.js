// SELECT CVS
const cvsBUBBLE = document.getElementById("birdBUBBLE");
const ctxBUBBLE = cvsBUBBLE.getContext("2d");

// GAME VARS AND CONSTS
let framesBUBBLE = 0;
let globalSpeedBUBBLE = 0.5;
let framesRememberBUBBLE=0;

//IMAGE OF THE BIRD
const spriteBUBBLE=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersBUBBLE=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersBUBBLE=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersBUBBLE=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startBUBBLE=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
const pauseBUBBLE=document.getElementById("pause");

//GAME STATE
const stateBUBBLE = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsBUBBLE.addEventListener("click",function(evt){
   switch(stateBUBBLE.current){
       case stateBUBBLE.getReady:
           stateBUBBLE.current = stateBUBBLE.game;
           framesBUBBLE = framesRememberBUBBLE;
           framesRememberBUBBLE=framesBUBBLE;
           break;
       case stateBUBBLE.game:
           stateBUBBLE.current = stateBUBBLE.getReady;
           framesRememberBUBBLE=framesBUBBLE;
           //HERE I WILL WRITE THE ALGORITHM
         //  bird.flap();
           nr1BUBBLE.bubbleSort();
           break;
       case stateBUBBLE.over:
           stateBUBBLE.current = stateBUBBLE.game;
           framesBUBBLE = 0;
           break;
   }
});


//BACKGROUD
const bgBUBBLE = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsBUBBLE.height - 226,

    draw : function(){
        ctxBUBBLE.drawImage(spriteBUBBLE,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}
//COMPARE 2 NUMBERS
const c2nBUBBLE = {

    sX : 328,
    sY : 200,
    sWidth : 510-328,
    sHeight : 300-200,
    dY : 280,
    dX : 50,
    dWidth : 100,
    dHeight :50  ,
    draw : function(){

        ctxBUBBLE.drawImage(compare2numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            if(600 > framesBUBBLE && framesBUBBLE > 250){
                this.dX +=globalSpeedBUBBLE;
            }
            if(1200 > framesBUBBLE && framesBUBBLE > 850){
                this.dX +=globalSpeedBUBBLE;
            }
            if(1800 > framesBUBBLE && framesBUBBLE > 1450){
                this.dX +=globalSpeedBUBBLE;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if( framesBUBBLE == 2050){
                this.dX =50;
            }
            if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                this.dX +=globalSpeedBUBBLE;
            }
            if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                this.dX +=globalSpeedBUBBLE;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if( framesBUBBLE == 3500){
                this.dX =50;
            }
            if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                this.dX +=globalSpeedBUBBLE;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(framesBUBBLE == 4250){
                this.dX =50;
            }
            //finish
            if(framesBUBBLE==4998){
                this.dX =50;
            }
        }


    }
}



//NUMBERS
const nr1BUBBLE = {
    //1/3 CODE WHICH IS IMPORTANT FOR ANIMATION
    // animation : [
    //     {sX : 24, sY : 24 ,
    //         dY : 210, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 200, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 190, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 180, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 190, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 200, dX : 20},
    //     {sX : 24, sY : 24 ,
    //         dY : 210, dX : 20}
    // ],

    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxBUBBLE.drawImage(numbersBUBBLE,nr1BUBBLE.sX,nr1BUBBLE.sY,this.sWidth,this.sHeight,nr1BUBBLE.dX,nr1BUBBLE.dY,
            this.dWidth,this.dHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;
    }
}
const nr2BUBBLE = {
    // animation : [
    //     { sX : 230,sY : 24},
    //     {sX : 230,sY : 24},
    //     {sX : 230,sY : 24},
    //     {sX : 230,sY : 24}
    // ],
    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 180,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 162,
    bsY : 27,
    bsWidth : 84 - 35,
    bsHeight : 81 - 27,
    bdY : 215,
    bdX : 195,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,

    //temporary variable
    gravity : 0.25,
    jump : 4.6,
    speed : 0.25,

    draw : function(){
        //let nr2 = this.animation[this.frame];

            ctxBUBBLE.drawImage(numbersBUBBLE,nr2BUBBLE.sX,nr2BUBBLE.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);

            // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);



    },
    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

        }else{
           // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > framesBUBBLE && framesBUBBLE > 650){
                this.dX -=globalSpeedBUBBLE;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE == 4998){
                this.dX =180;

            }
        }


    }
}
const nr3BUBBLE = {
    // animation : [
    //     { sX : 430,sY : 24,
    //         dY : 210, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 200, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 190, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 180, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 190, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 200, dX : 100},
    //     {sX : 430,sY : 24,
    //         dY : 210, dX : 100}
    // ],

    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 100,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,



    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxBUBBLE.drawImage(numbersBUBBLE,nr3BUBBLE.sX,nr3BUBBLE.sY,this.sWidth,this.sHeight,nr3BUBBLE.dX,nr3BUBBLE.dY,
            this.dWidth,this.dHeight);
    },
    bubbleSort : function(){

    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > framesBUBBLE && framesBUBBLE > 650){
                this.dX +=globalSpeedBUBBLE;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE == 4998){
                this.dX =100;

            }
        }

    }
}
const nr4BUBBLE = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const nr9BUBBLE = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 340,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}

const lineBUBBLE = {
    sX : 115,
    sY : 47,
    sWidth : 5,
    sHeight : 60,
    dY : 150,
    dX : 450,
    dWidth : 10,
    dHeight :200  ,
    draw : function(){
        ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    //frame can change the image of the images
    frame : 0,

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(2500 > framesBUBBLE && framesBUBBLE > 2050){
                this.dX -=globalSpeedBUBBLE;

            }
            if(3850 > framesBUBBLE && framesBUBBLE > 3500){
                this.dX -=globalSpeedBUBBLE;

            }
            if(4600 > framesBUBBLE && framesBUBBLE > 4250){
                this.dX -=globalSpeedBUBBLE;

            }

            //THE END OF SIMULATION
            if( framesBUBBLE == 4998){
                this.dX =450;
                this.dY =150;

            }
        }


    }
}


//GET READY MESSAGE
const getReadyBUBBLE = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateBUBBLE.current == stateBUBBLE.getReady){
            ctxBUBBLE.drawImage(pauseBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverBUBBLE = {

    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateBUBBLE.current == stateBUBBLE.over ){
            ctxBUBBLE.drawImage(click2startBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW
function draw(){
    //background
    ctxBUBBLE.fillStyle = "#70c5ce";
    ctxBUBBLE.fillRect(0,0,cvsBUBBLE.width,cvsBUBBLE.height);

    //title of canvas
    ctxBUBBLE.font = "20px Arial";

    ctxBUBBLE.strokeText("Bubble Sort! - click if you want to pause or start simulation",25,50);

    //draw function
   // bg.draw();
    c2nBUBBLE.draw();

    nr1BUBBLE.draw();
    nr2BUBBLE.draw();
    nr3BUBBLE.draw();
    nr4BUBBLE.draw();
    nr9BUBBLE.draw();
    lineBUBBLE.draw();
    getReadyBUBBLE.draw();
    gameOverBUBBLE.draw();
}
//UPDATE
function update(){
    nr1BUBBLE.update();
    nr2BUBBLE.update();
    nr3BUBBLE.update();
    c2nBUBBLE.update();
    lineBUBBLE.update();
    if(framesBUBBLE == 5000){
        stateBUBBLE.current = stateBUBBLE.over;
    };


}
//LOOP
function loop(){
    update();
    draw();
    framesBUBBLE++;
    framesBUBBLE++;
    requestAnimationFrame(loop);
}
loop();