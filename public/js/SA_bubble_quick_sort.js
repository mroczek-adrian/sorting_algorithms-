// SELECT CVS
const cvsBUBBLE = document.getElementById("birdBUBBLE");
const ctxBUBBLE = cvsBUBBLE.getContext("2d");
const bubble__sort = document.getElementById("bubble--sort");

const cvsQUICK = document.getElementById("birdQUICK");
const ctxQUICK = cvsQUICK.getContext("2d");
const quick__sort = document.getElementById("quick--sort");

const cvsCOUNT = document.getElementById("birdCOUNT");
const ctxCOUNT = cvsCOUNT.getContext("2d");
const count__sort = document.getElementById("count--sort");

const cvsMERGE = document.getElementById("birdMERGE");
const ctxMERGE = cvsMERGE.getContext("2d");
const merge__sort = document.getElementById("merge--sort");

const cvsHEAP = document.getElementById("birdHEAP");
const ctxHEAP = cvsHEAP.getContext("2d");
const heap__sort = document.getElementById("heap--sort");

// GAME VARS AND CONSTS
let framesBUBBLE = 0;
let globalSpeedBUBBLE = 0.5;
let framesRememberBUBBLE=0;

let framesQUICK = 0;
let globalSpeedQUICK = 0.5;
let framesRememberQUICK=0;

let framesCOUNT = 0;
let globalSpeedCOUNT = 0.5;
let framesRememberCOUNT=0;

let framesMERGE = 0;
let globalSpeedMERGE = 0.25;
let framesRememberMERGE=0;

let framesHEAP = 0;
let a = 0;
let globalSpeedHEAP = 0.125;//speed of movement
let simulation_speedHEAP = 1 // number of frame
let frame_speedHEAP = 0.5 // speed of simulation

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

//IMAGE OF THE BIRD
const spriteQUICK=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersQUICK=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersQUICK=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersQUICK=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startQUICK=document.getElementById("click2start");
const pauseQUICK=document.getElementById("pause");

//IMAGE OF THE BIRD
const spriteCOUNT=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersCOUNT=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersCOUNT=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersCOUNT=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startCOUNT=document.getElementById("click2start");
//IMAGE OF THE TABLE WITH NUMBERS
const table_and_numbersCOUNT=document.getElementById("table");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circleCOUNT=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circleCOUNT=document.getElementById("brown_circle");
//IMAGE OF THE GET OVER STATE
const pauseCOUNT=document.getElementById("pause");


//IMAGE OF THE BIRD
const spriteMERGE=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersMERGE=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersMERGE=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersMERGE=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startMERGE=document.getElementById("click2start");
//IMAGE OF THE TABLE WITH NUMBERS
const table_and_numbersMERGE=document.getElementById("table");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circleMERGE=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circleMERGE=document.getElementById("brown_circle");
//IMAGE OF THE GET OVER STATE
const pauseMERGE=document.getElementById("pause");


//IMAGE OF THE BIRD
const spriteHEAP=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersHEAP=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersHEAP=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersHEAP=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startHEAP=document.getElementById("click2start");
//IMAGE OF THE TABLE WITH NUMBERS
const table_and_numbersHEAP=document.getElementById("table");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circleHEAP=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circleHEAP=document.getElementById("brown_circle");
//IMAGE OF THE SQUARE AND TRAINGLE
const square_triangleHEAP=document.getElementById("square-traingle");
//IMAGE OF THE GET OVER STATE
const pauseHEAP=document.getElementById("pause");


//GAME STATE
const stateBUBBLE = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}
//GAME STATE
const stateQUICK = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}
//GAME STATE
const stateCOUNT = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}
//GAME STATE
const stateMERGE = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}
//GAME STATE
const stateHEAP = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}
//CONTROL THE GAME
bubble__sort.addEventListener("click",function(evt){
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
//CONTROL THE GAME
quick__sort.addEventListener("click",function(evt){
    switch(stateQUICK.current){
        case stateQUICK.getReady:
            stateQUICK.current = stateQUICK.game;
            framesQUICK = framesRememberQUICK;
            framesRememberQUICK=framesQUICK;
            break;
        case stateQUICK.game:
            stateQUICK.current = stateQUICK.getReady;
            framesRememberQUICK=framesQUICK;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1QUICK.bubbleSort();
            break;
        case stateQUICK.over:
            stateQUICK.current = stateQUICK.game;
            framesQUICK = 0;
            break;
    }
});
//CONTROL THE GAME
count__sort.addEventListener("click",function(evt){
    switch(stateCOUNT.current){
        case stateCOUNT.getReady:
            stateCOUNT.current = stateCOUNT.game;
            framesCOUNT = framesRememberCOUNT;
            framesRememberCOUNT=framesCOUNT;
            break;
        case stateCOUNT.game:
            stateCOUNT.current = stateCOUNT.getReady;
            framesRememberCOUNT=framesCOUNT;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            //nr1.bubbleSort();
            break;
        case stateCOUNT.over:
            stateCOUNT.current = stateCOUNT.game;
            framesCOUNT = 0;
            break;
    }
});
//CONTROL THE GAME
merge__sort.addEventListener("click",function(evt){
    switch(stateMERGE.current){
        case stateMERGE.getReady:
            stateMERGE.current = stateMERGE.game;
            framesMERGE = framesRememberMERGE;
            framesRememberMERGE=framesMERGE;
            break;
        case stateMERGE.game:
            stateMERGE.current = stateMERGE.getReady;
            framesRememberMERGE=framesMERGE;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            //nr1.bubbleSort();
            break;
        case stateMERGE.over:
            stateMERGE.current = stateMERGE.game;
            framesMERGE = 0;
            break;
    }
});
//CONTROL THE GAME
heap__sort.addEventListener("click",function(evt){
    switch(stateHEAP.current){
        case stateHEAP.getReady:
            stateHEAP.current = stateHEAP.game;
            framesHEAP = framesHEAPRemember;
            framesHEAPRemember=framesHEAP;
            break;
        case stateHEAP.game:
            stateHEAP.current = stateHEAP.getReady;
            framesHEAPRemember=framesHEAP;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            //  nr1.bubbleSort();
            break;
        case stateHEAP.over:
            stateHEAP.current = stateHEAP.game;
            framesHEAP = 0;
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
//BACKGROUD
const bgQUICK = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsQUICK.height - 226,

    draw : function(){
        ctxQUICK.drawImage(spriteQUICK,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}
//BACKGROUD
const bgCOUNT = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsCOUNT.height - 226,

    draw : function(){
        ctxCOUNT.drawImage(spriteCOUNT,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}



//CIRCLE
//RED CIRCLE
const red_circleHEAP01HEAP = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 55,
    dX : 195,
    dWidth : 60,
    dHeight :60 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame]
        ctxHEAP.drawImage(red_circleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else {

            if(350*simulation_speedHEAP > framesHEAP && framesHEAP > 250*simulation_speedHEAP){
                this.dX +=2*globalSpeedHEAP;
                // this.dY -=6.5*globalSpeedHEAP;
            }

            if(500*simulation_speedHEAP > framesHEAP && framesHEAP > 400*simulation_speedHEAP){
                this.dX +=2*globalSpeedHEAP;
                // this.dY -=6.5*globalSpeedHEAP;
            }
            if(650*simulation_speedHEAP > framesHEAP && framesHEAP > 550*simulation_speedHEAP){
                this.dX +=2*globalSpeedHEAP;
                // this.dY -=6.5*globalSpeedHEAP;
            }
            if(800*simulation_speedHEAP > framesHEAP && framesHEAP > 700*simulation_speedHEAP){
                this.dX +=2*globalSpeedHEAP;
                // this.dY -=6.5*globalSpeedHEAP;
            }
            //SWAP
            if(950*simulation_speedHEAP > framesHEAP && framesHEAP > 850*simulation_speedHEAP){
                this.dX -=6.6*globalSpeedHEAP;
                this.dY +=6*globalSpeedHEAP;
            }
            if(1150*simulation_speedHEAP > framesHEAP && framesHEAP > 1100*simulation_speedHEAP){
                this.dX -=4.4*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;

            }
            if(1350*simulation_speedHEAP > framesHEAP && framesHEAP > 1300*simulation_speedHEAP){
                this.dX +=9*globalSpeedHEAP;

            }
            if(1550*simulation_speedHEAP > framesHEAP && framesHEAP > 1500*simulation_speedHEAP){
                this.dX -=4.4*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;
            }
            if(1750*simulation_speedHEAP > framesHEAP && framesHEAP > 1700*simulation_speedHEAP){
                this.dX -=4.4*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;
            }
            if(2200*simulation_speedHEAP > framesHEAP && framesHEAP > 2150*simulation_speedHEAP){
                this.dX +=4.4*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;
            }

            if (2400*simulation_speedHEAP > framesHEAP && framesHEAP > 2350*simulation_speedHEAP) {

                this.dX +=4.8*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;


            }
            if (2600*simulation_speedHEAP > framesHEAP && framesHEAP > 2550*simulation_speedHEAP) {

                this.dX -=4.8*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;


            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){


                this.dX =195;
                this.dY =55;


            }
        }


    }
}
//RIGHT CIRCLE
const red_circleHEAP02HEAP = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 155,
    dX : 290,
    dWidth : 60,
    dHeight :60 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(red_circleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else {

            if(1150*simulation_speedHEAP > framesHEAP && framesHEAP > 1100*simulation_speedHEAP){
                this.dX -=4.8*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;

            }
            if(1350*simulation_speedHEAP > framesHEAP && framesHEAP > 1300*simulation_speedHEAP){
                this.dX +=4.8*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;
            }
            if(1750*simulation_speedHEAP > framesHEAP && framesHEAP > 1700*simulation_speedHEAP){
                this.dX -=4.8*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;
            }
            if(2050*simulation_speedHEAP > framesHEAP && framesHEAP > 2000*simulation_speedHEAP){
                this.dX +=4.8*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;
            }
            if (2400*simulation_speedHEAP > framesHEAP && framesHEAP > 2350*simulation_speedHEAP) {

                this.dX +=4.8*globalSpeedHEAP;
                this.dY +=4.2*globalSpeedHEAP;


            }
            if (2600*simulation_speedHEAP > framesHEAP && framesHEAP > 2550*simulation_speedHEAP) {

                this.dX -=4.8*globalSpeedHEAP;
                this.dY -=4.2*globalSpeedHEAP;


            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){


                this.dX =290;
                this.dY =155;


            }
        }


    }
}
//BROWN CIRCLE
const brown_circleHEAP01HEAP = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 55,
    dX : 195,
    dWidth : 60,
    dHeight :60 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(brown_circleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else {

            if (1200*simulation_speedHEAP > framesHEAP && framesHEAP > 1150*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 4 * globalSpeedHEAP;


            }
            if (1400*simulation_speedHEAP > framesHEAP && framesHEAP > 1350*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX -= 4 * globalSpeedHEAP;


            }
            if (1800*simulation_speedHEAP > framesHEAP && framesHEAP > 1750*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 4 * globalSpeedHEAP;


            }
            if (1950*simulation_speedHEAP > framesHEAP && framesHEAP > 1900*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX -= 4 * globalSpeedHEAP;


            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.dX =195;
                this.dY =55;


            }


        }
    }
}
//BROWN CIRCLE
const brown_circleHEAP02HEAP = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 55,
    dX : 245,
    dWidth : 60,
    dHeight :60 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(brown_circleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else {


            if (1200 *simulation_speedHEAP> framesHEAP && framesHEAP > 1150*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 8 * globalSpeedHEAP;


            }
            if (1400*simulation_speedHEAP > framesHEAP && framesHEAP > 1350*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 4 * globalSpeedHEAP;


            }
            if (1550 *simulation_speedHEAP> framesHEAP && framesHEAP > 1500*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX -= 12 * globalSpeedHEAP;


            }
            if (1800*simulation_speedHEAP > framesHEAP && framesHEAP > 1750*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 8 * globalSpeedHEAP;


            }
            if (2250 *simulation_speedHEAP> framesHEAP && framesHEAP > 2200*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX -= 8 * globalSpeedHEAP;


            }
            if (2400*simulation_speedHEAP > framesHEAP && framesHEAP > 2350*simulation_speedHEAP) {

                //this.dY -= 4 * globalSpeedHEAP;
                this.dX += 4 * globalSpeedHEAP;


            }
            if (2600 *simulation_speedHEAP> framesHEAP && framesHEAP > 2550*simulation_speedHEAP) {

                this.dX -= 4 * globalSpeedHEAP;


            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.dX =245;
                this.dY =55;


            }


        }
    }
}
//TREE AND BRANCHES
const branch01leftHEAP = {

    sX : 477,
    sY : 53,
    sWidth : 690 - 477,
    sHeight : 290 - 53,
    dY : 190,
    dX : 245,
    dWidth : 70,
    dHeight :50 ,
    dY2 : 232,
    dX2 : 205,
    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(square_triangleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    draw2 : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(square_triangleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX2,this.dY2,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.getReady){
        }else {
            //BACK
            // if(850 > framesHEAP && framesHEAP > 800){
            //     this.dX +=8*globalSpeedHEAP;
            //     this.dY -=6.5*globalSpeedHEAP;
            //
            // }


        }


    }
}
const branch01rightHEAP = {

    sX : 687,
    sY : 53,
    sWidth : 917 - 687,
    sHeight : 290 - 53,
    dY : 190,
    dX : 335,
    dWidth : 70,
    dHeight :50 ,
    dY2 : 232,
    dX2 : 255,
    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(square_triangleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    draw2 : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(square_triangleHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX2,this.dY2,
            this.dWidth,this.dHeight);
    },




    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateHEAP.current == stateHEAP.getReady){
        }else {
            //BACK
            // if(850 > framesHEAP && framesHEAP > 800){
            //     this.dX +=8*globalSpeedHEAP;
            //     this.dY -=6.5*globalSpeedHEAP;
            //
            // }


        }


    }
}
//BACKGROUND
//TOP TABLE OF NUMBERS
const table_topHEAP = {

    sX : 25,
    sY : 40,
    sWidth : 876 - 25,
    sHeight : 222 - 40,
    dY : 60,
    dX : 200,
    dWidth : 250,
    dHeight :50  ,

    draw : function(){
        ctxHEAP.drawImage(table_and_numbersHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}

//INDEX OF THE TABLE level 1
const index00HEAP = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 110,
    bdX : 215,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxHEAP.drawImage(blue_numbersHEAP,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.getReady){
        }else{

        }

    }
}
const index01HEAP = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 265,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxHEAP.drawImage(blue_numbersHEAP,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.getReady){
        }else{

        }

    }
}
const index02HEAP = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 315,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxHEAP.drawImage(blue_numbersHEAP,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.getReady){
        }else{

        }

    }
}
const index03HEAP = {
    //blue number
    bsX : 270,
    bsY : 9,
    bsWidth : 360 - 270,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 365,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxHEAP.drawImage(blue_numbersHEAP,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.getReady){
        }else{

        }

    }
}
const index04HEAP = {
    //blue number
    bsX : 390,
    bsY : 9,
    bsWidth : 490 - 390,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 415,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxHEAP.drawImage(blue_numbersHEAP,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.getReady){
        }else{

        }

    }
}


//NUMBERS
const nr1HEAP = {

    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    //table
    dY : 60,
    dX : 397,

    dWidth : 50,
    dHeight :50 ,
    //tree
    tdY : 260,
    tdX : 295,
    tdWidth : 50,
    tdHeight :50 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr1HEAP.sX,nr1HEAP.sY,this.sWidth,this.sHeight,nr1HEAP.dX,nr1HEAP.dY,
            this.dWidth,this.dHeight);
    },

    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr1HEAP.sX,nr1HEAP.sY,this.sWidth,this.sHeight,nr1HEAP.tdX,nr1HEAP.tdY,
            this.tdWidth,this.tdHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;
        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else{

            //REMOVE THE NODE
            if( framesHEAP >1400*simulation_speedHEAP && framesHEAP < 1450*simulation_speedHEAP){
                this.dX -=16*globalSpeedHEAP;
                // this.tdY =160;
            }
            if( framesHEAP ==1450*simulation_speedHEAP){
                this.tdX =300;
                this.tdY =160;
            }
            if( framesHEAP ==1600*simulation_speedHEAP){
                this.tdX =240;
                this.tdY =210;
            }
            //SWAP IN TABLE
            if( framesHEAP >1650*simulation_speedHEAP && framesHEAP <=1700*simulation_speedHEAP){
                this.dX +=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            if( framesHEAP ==1800*simulation_speedHEAP){
                this.tdX =185;
                this.tdY =260;
            }
            //SWAP IN TABLE
            if( framesHEAP >1850*simulation_speedHEAP && framesHEAP <=1900*simulation_speedHEAP){
                this.dX +=8*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP IN TABLE - REMOVE THE NODE
            if( framesHEAP >1950*simulation_speedHEAP && framesHEAP <=2000*simulation_speedHEAP){
                this.dX -=12*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2050*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
            }
            //SWAP
            if( framesHEAP ==2200*simulation_speedHEAP){

                this.tdX =240;
                this.tdY =210;
            }
            //SWAP IN TABLE
            if( framesHEAP >2250*simulation_speedHEAP && framesHEAP <=2300*simulation_speedHEAP){
                this.dX +=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP IN TABLE
            if( framesHEAP >2600*simulation_speedHEAP && framesHEAP <=2650*simulation_speedHEAP){
                this.dX -=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2700*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.tdX =295;
                this.tdY =260;
                this.dX =397;
                this.dY =60;
            }

        }
    }
}
const nr2HEAP = {

    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 303,
    dWidth : 50,
    dHeight :50 ,


    //frame can change the image of the images
    frame : 0,
    //tree
    tdY : 210,
    tdX : 360,
    tdWidth : 50,
    tdHeight :50 ,
    //temporary variable
    gravity : 0.25,
    jump : 4.6,
    speed : 0.25,

    draw : function(){
        //let nr2 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);



    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr2HEAP.sX,nr2HEAP.sY,this.sWidth,this.sHeight,nr2HEAP.tdX,nr2HEAP.tdY,
            this.tdWidth,this.tdHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else{
            //SWAP IN TABLE
            if( framesHEAP >2450*simulation_speedHEAP && framesHEAP <=2500*simulation_speedHEAP){
                this.dX -=8*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2500*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
            }
            //SWAP IN TABLE
            if( framesHEAP >2600*simulation_speedHEAP && framesHEAP <=2650*simulation_speedHEAP){
                this.dX +=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2700*simulation_speedHEAP){

                this.tdX =240;
                this.tdY =210;
            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.tdX =360;
                this.tdY =210;
                this.dX =303;
                this.dY =60;

            }



        }


    }
}
const nr3HEAP = {


    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 205,

    dWidth : 50,
    dHeight :50 ,

    //tree
    tdY : 160,
    tdX : 300,

    tdWidth : 50,
    tdHeight :50 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr3HEAP.sX,nr3HEAP.sY,this.sWidth,this.sHeight,nr3HEAP.dX,nr3HEAP.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr3HEAP.sX,nr3HEAP.sY,this.sWidth,this.sHeight,nr3HEAP.tdX,nr3HEAP.tdY,
            this.tdWidth,this.tdHeight);
    },




    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else{
            //SWAP
            if( framesHEAP ==1000*simulation_speedHEAP){
                this.tdX =240;
                this.tdY =210;

            }
            //SWAP IN TABLE
            if( framesHEAP >1050*simulation_speedHEAP && framesHEAP <=1100*simulation_speedHEAP){
                this.dX +=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==1200*simulation_speedHEAP){
                this.tdX =185;
                this.tdY =260;

            }
            //SWAP IN TABLE
            if( framesHEAP >1250*simulation_speedHEAP && framesHEAP <=1300*simulation_speedHEAP){
                this.dX +=7.7*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            if( framesHEAP ==1800*simulation_speedHEAP){
                this.tdX =240;
                this.tdY =210;
            }
            //SWAP IN TABLE
            if( framesHEAP >1850*simulation_speedHEAP && framesHEAP <=1900*simulation_speedHEAP){
                this.dX -=8*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2200*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
            }
            //SWAP IN TABLE
            if( framesHEAP >2250*simulation_speedHEAP && framesHEAP <=2300*simulation_speedHEAP){
                this.dX -=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP IN TABLE
            if( framesHEAP >2450*simulation_speedHEAP && framesHEAP <=2500*simulation_speedHEAP){
                this.dX +=8*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2500*simulation_speedHEAP){

                this.tdX =360;
                this.tdY =210;
            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
                this.dX =205;
                this.dY =60;


            }

        }

    }
}
const nr4HEAP = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 350,
    dWidth : 50,
    dHeight :50 ,
    //tree
    tdY : 260,
    tdX : 185,
    draw : function(){
        ctxHEAP.drawImage(numbersHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        ctxHEAP.drawImage(numbersHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.tdX,this.tdY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else{
            //SWAP
            if( framesHEAP ==1200*simulation_speedHEAP){
                this.tdX =240;
                this.tdY =210;

            }
            //SWAP IN TABLE
            if( framesHEAP >1250*simulation_speedHEAP && framesHEAP <=1300*simulation_speedHEAP){
                this.dX -=8*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==1600*simulation_speedHEAP){

                this.tdX =300;
                this.tdY =160;
            }
            //SWAP IN TABLE
            if( framesHEAP >1650*simulation_speedHEAP && framesHEAP <=1700*simulation_speedHEAP){
                this.dX -=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP IN TABLE - REMOVE THE NODE
            if( framesHEAP >1950*simulation_speedHEAP && framesHEAP <=2000*simulation_speedHEAP){
                this.dX +=12*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //SWAP
            if( framesHEAP ==2050*simulation_speedHEAP){

                this.tdX =185;
                this.tdY =260;
            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.tdX =185;
                this.tdY =260;
                this.dX =350;
                this.dY =60;


            }

        }

    }
}
const nr9HEAP = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 250,
    //tree
    tdY : 210,
    tdX : 240,
    tdWidth : 50,
    tdHeight :50 ,
    dWidth : 50,
    dHeight :50 ,
    draw : function(){
        ctxHEAP.drawImage(numbersHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxHEAP.drawImage(numbersHEAP,nr9HEAP.sX,nr9HEAP.sY,this.sWidth,this.sHeight,nr9HEAP.tdX,nr9HEAP.tdY,
            this.tdWidth,this.tdHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateHEAP.current == stateHEAP.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesHEAP % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

        }else{
            //SWAP
            if( framesHEAP ==1000*simulation_speedHEAP){
                this.tdX =300;
                this.tdY =160;

            }
            //SWAP IN TABLE
            if( framesHEAP >1050*simulation_speedHEAP && framesHEAP <=1100*simulation_speedHEAP){
                this.dX -=4*globalSpeedHEAP;
                //  this.dY +=6.5*globalSpeedHEAP;

            }
            //REMOVE THE NODE
            if( framesHEAP >1400*simulation_speedHEAP && framesHEAP < 1450*simulation_speedHEAP){
                this.dX +=16*globalSpeedHEAP;
                // this.tdY =160;
            }
            if( framesHEAP ==1450*simulation_speedHEAP){
                this.tdX =295;
                this.tdY =260;
            }
            //FINISH
            if( framesHEAP ==2999*simulation_speedHEAP){

                this.tdX =240;
                this.tdY =210;
                this.dX =250;
                this.dY =60;


            }


        }

    }
}


//CIRCLE
//RED CIRCLE
const red_circleMERGE01 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 300,
    dX : 17,
    dWidth : 50,
    dHeight :50 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame]
        ctxMERGE.drawImage(red_circleMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else {
            //BACK
            if(850 > framesMERGE && framesMERGE > 800){
                this.dX +=3.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(1000 > framesMERGE && framesMERGE > 950){
                this.dX +=4*globalSpeedMERGE;
                //this.dY -=6.5*globalSpeedMERGE;

            }
            if(1450 > framesMERGE && framesMERGE > 1400){
                this.dX +=25.7*globalSpeedMERGE;
                //this.dY +=2*globalSpeedMERGE;

            }
            if(1750 > framesMERGE && framesMERGE > 1700){
                this.dX -=26.3*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;
                //this.dY +=2*globalSpeedMERGE;

            }
            if(1900 > framesMERGE && framesMERGE > 1850){

                //this.dY +=2*globalSpeedMERGE;
                this.dX +=4*globalSpeedMERGE;
            }
            if(2050 > framesMERGE && framesMERGE > 2000){

                //this.dY +=2*globalSpeedMERGE;
                this.dX +=4*globalSpeedMERGE;
            }


            //FINISH
            if(2599==framesMERGE){
                this.dY = 300;
                this.dX = 17;


            }

        }


    }
}
//RIGHT CIRCLE
const red_circleMERGE02 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 300,
    dX : 127,
    dWidth : 50,
    dHeight :50 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxMERGE.drawImage(red_circleMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else {
            //BACK
            if(850 > framesMERGE && framesMERGE > 800){
                this.dX +=8*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }

            if(1450 > framesMERGE && framesMERGE > 1400){
                this.dX +=24*globalSpeedMERGE;
                //this.dY +=2*globalSpeedMERGE;

            }
            if(1750 > framesMERGE && framesMERGE > 1700){
                this.dX -=6*globalSpeedMERGE;
                this.dY -=6.8*globalSpeedMERGE;
            }

            if(2350 > framesMERGE && framesMERGE > 2300){
                this.dX +=4*globalSpeedMERGE;
            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 300;
                this.dX = 127;


            }

        }


    }
}
//BACKGROUND
//TOP TABLE OF NUMBERS
const table_topMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 876 - 25,
    sHeight : 222 - 40,
    dY : 60,
    dX : 200,
    dWidth : 250,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//2nd TABLE OF NUMBERS
const table_2nd_aMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 545 - 25,
    sHeight : 222 - 40,
    dY : 140,
    dX : 100,
    dWidth : 150,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//2nd TABLE OF NUMBERS
const table_2nd_bMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 380 - 25,
    sHeight : 222 - 40,
    dY : 140,
    dX : 450,
    dWidth : 100,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//3rd TABLE OF NUMBERS
const table_3rd_aMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 380 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 60,
    dWidth : 100,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_bMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 220,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_cMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 420,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_dMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 520,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//table level 4
const table_4th_aMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 300,
    dX : 20,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_4th_bMERGE = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 300,
    dX : 120,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctxMERGE.drawImage(table_and_numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//INDEX OF THE TABLE level 1
const index00MERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 110,
    bdX : 215,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{

        }

    }
}
const index01MERGE = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 265,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index02MERGE = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 315,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index03MERGE = {
    //blue number
    bsX : 270,
    bsY : 9,
    bsWidth : 360 - 270,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 365,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index04MERGE = {
    //blue number
    bsX : 390,
    bsY : 9,
    bsWidth : 490 - 390,
    bsHeight : 100 - 9,
    bdY : 110,
    bdX : 415,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
//index - level 2
const index10aMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 190,
    bdX : 115,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index11aMERGE = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 190,
    bdX : 165,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index12aMERGE = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 190,
    bdX : 215,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index10bMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 190,
    bdX : 465,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index11bMERGE = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 190,
    bdX : 515,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
//index  - level 3
const index20aMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 270,
    bdX : 75,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index21aMERGE = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 270,
    bdX : 125,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index20bMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 270,
    bdX : 235,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index20cMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 270,
    bdX : 435,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index20dMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 270,
    bdX : 535,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
//index -level 4
const index30aMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 350,
    bdX : 35,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}
const index30bMERGE = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 350,
    bdX : 135,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxMERGE.drawImage(blue_numbersMERGE,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.getReady){
        }else{

        }

    }
}

//NUMBERS
const nr1MERGE = {


    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 200,
    dWidth : 50,
    dHeight :50 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxMERGE.drawImage(numbersMERGE,nr1MERGE.sX,nr1MERGE.sY,this.sWidth,this.sHeight,nr1MERGE.dX,nr1MERGE.dY,
            this.dWidth,this.dHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;
        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{

            if(250 > framesMERGE && framesMERGE > 200){
                this.dX -=8*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(400 > framesMERGE && framesMERGE > 350){
                this.dX -=3.5*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(550 > framesMERGE && framesMERGE > 500){
                this.dX -=3.5*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            //BACK
            if(700 > framesMERGE && framesMERGE > 650){
                this.dX +=3.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(1000 > framesMERGE && framesMERGE > 950){
                this.dX +=3.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(1900 > framesMERGE && framesMERGE > 1850){
                this.dX +=8*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 60;
                this.dX = 200;


            }
        }
    }
}
const nr2MERGE = {

    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 305,
    dWidth : 50,
    dHeight :50 ,


    //frame can change the image of the images
    frame : 0,

    //temporary variable
    gravity : 0.25,
    jump : 4.6,
    speed : 0.25,

    draw : function(){
        //let nr2 = this.animation[this.frame];
        ctxMERGE.drawImage(numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);



    },
    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{
            if(250 > framesMERGE && framesMERGE > 200){
                this.dX -=8.5*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(400 > framesMERGE && framesMERGE > 350){
                this.dX +=2*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            //BACK
            if(1150 > framesMERGE && framesMERGE > 1100){
                this.dX -=6*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(2050 > framesMERGE && framesMERGE > 2000){
                this.dX +=8.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 60;
                this.dX = 305;


            }

        }


    }
}
const nr3MERGE = {


    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 253,
    dWidth : 50,
    dHeight :50 ,



    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxMERGE.drawImage(numbersMERGE,nr3MERGE.sX,nr3MERGE.sY,this.sWidth,this.sHeight,nr3MERGE.dX,nr3MERGE.dY,
            this.dWidth,this.dHeight);
    },
    bubbleSort : function(){

    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{
            if(250 > framesMERGE && framesMERGE > 200){
                this.dX -=8.2*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(400 > framesMERGE && framesMERGE > 350){
                this.dX -=3.5*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(550 > framesMERGE && framesMERGE > 500){
                this.dX +=1.5*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            //BACK
            if(850 > framesMERGE && framesMERGE > 800){
                this.dX -=1.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(1300 > framesMERGE && framesMERGE > 1250){
                this.dX +=7.5*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(2200 > framesMERGE && framesMERGE > 2150){
                this.dX +=8.2*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 60;
                this.dX = 253;


            }
        }

    }
}
const nr4MERGE = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 350,
    dWidth : 50,
    dHeight :50 ,
    draw : function(){
        ctxMERGE.drawImage(numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{
            if(250 > framesMERGE && framesMERGE > 200){
                this.dX +=8*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(1450 > framesMERGE && framesMERGE > 1400){
                this.dX -=2*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(1600 > framesMERGE && framesMERGE > 1550){
                this.dX +=2*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(2350 > framesMERGE && framesMERGE > 2300){
                this.dX -=8*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 60;
                this.dX = 350;

            }
        }

    }
}
const nr9MERGE = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 400,
    dWidth : 50,
    dHeight :50 ,
    draw : function(){
        ctxMERGE.drawImage(numbersMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateMERGE.current == stateMERGE.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesMERGE % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){

        }else{
            if(250 > framesMERGE && framesMERGE > 200){
                this.dX +=8*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(1450 > framesMERGE && framesMERGE > 1400){
                this.dX +=2*globalSpeedMERGE;
                this.dY +=6.5*globalSpeedMERGE;

            }
            if(1750 > framesMERGE && framesMERGE > 1700){
                this.dX -=2*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            if(2500 > framesMERGE && framesMERGE > 2450){
                this.dX -=8*globalSpeedMERGE;
                this.dY -=6.5*globalSpeedMERGE;

            }
            //FINISH
            if(2599==framesMERGE){
                this.dY = 60;
                this.dX = 400;
            }
        }

    }
}






//RED CIRCLE
const red_circle01COUNT = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 55,
    dX : 17,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function() {
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1COUNT = this.animation[this.frame];
        // if ( framesCOUNT > 1300) {
        //     let smaller_cycle = this.smaller[0];
        //     COUNT.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
        //         smaller_cycle.dWidth,smaller_cycle.dHeight);
        // }else{
        ctxCOUNT.drawImage(red_circleCOUNT, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
            this.dWidth, this.dHeight);
        //}
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else {
            //1ST STEM
            if (350 > framesCOUNT && framesCOUNT > 300) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            if (450 > framesCOUNT && framesCOUNT > 400) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            if (550 > framesCOUNT && framesCOUNT > 500) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            if (650 > framesCOUNT && framesCOUNT > 600) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            if (750 > framesCOUNT && framesCOUNT > 700) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            //2ND STEP
            if (850 > framesCOUNT && framesCOUNT > 800) {

                this.dY += 4 * globalSpeedCOUNT;
                this.dX -= 21 * globalSpeedCOUNT;


            }
            if (950 > framesCOUNT && framesCOUNT > 900) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1050 > framesCOUNT && framesCOUNT > 1000) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1150 > framesCOUNT && framesCOUNT > 1100) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1250 > framesCOUNT && framesCOUNT > 1200) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }

            if (1350 > framesCOUNT && framesCOUNT > 1300) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1450 > framesCOUNT && framesCOUNT > 1400) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1550 > framesCOUNT && framesCOUNT > 1500) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1650 > framesCOUNT && framesCOUNT > 1600) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            //3RD STEP -  CIRCLE
            if (1800 > framesCOUNT && framesCOUNT > 1750) {

                this.dY -= 4 * globalSpeedCOUNT;
                this.dX -= 18 * globalSpeedCOUNT;


            }
            if (1950 > framesCOUNT && framesCOUNT > 1900) {


                this.dX += 4 * globalSpeedCOUNT;


            }
            if (2100 > framesCOUNT && framesCOUNT > 2050) {


                this.dX += 4 * globalSpeedCOUNT;


            }
            if (2250 > framesCOUNT && framesCOUNT > 2200) {


                this.dX += 4 * globalSpeedCOUNT;


            }
            if (2400 > framesCOUNT && framesCOUNT > 2350) {


                this.dX += 4 * globalSpeedCOUNT;


            }
            if (2550 > framesCOUNT && framesCOUNT > 2500) {


                this.dX += 4 * globalSpeedCOUNT;


            }
            // if (1550 > framesCOUNT && framesCOUNT > 1500) {
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // if (1750 > framesCOUNT && framesCOUNT > 1700) {
            //
            //     this.dX += 16 * globalSpeedCOUNT;
            //
            // }
            // if (1950 > framesCOUNT && framesCOUNT > 1900) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // if (2350 > framesCOUNT && framesCOUNT > 2300) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 310;
                this.sY = 90;
                this.sWidth = 490 - 310;
                this.sHeight = 270 - 90;
                this.dY = 55;
                this.dX = 17;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;



            }

        }


    }
}
const red_circle02COUNT = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 225,
    dX : 195,
    dWidth : 40,
    dHeight :40 ,

    //frame can change the image of the images
    frame : 0,

    bigger : [{ dWidth : 100-24,
        dHeight :100-24 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1COUNT = this.animation[this.frame];
        if ( framesCOUNT > 800) {
            let bigger_cycle = this.bigger[0];
            ctxCOUNT.drawImage(red_circleCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                bigger_cycle.dWidth,bigger_cycle.dHeight);
        }else{
            ctxCOUNT.drawImage(red_circleCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }

    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else {
            // this.speed += this.gravity;
            // 50ms DELAY BEFORE MOVING THE NUMBER
            if (350 > framesCOUNT && framesCOUNT > 300) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 2.5 * globalSpeedCOUNT;


            }
            if (450 > framesCOUNT && framesCOUNT > 400) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 5 * globalSpeedCOUNT;


            }
            if (550 > framesCOUNT && framesCOUNT > 500) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX -= 2.5 * globalSpeedCOUNT;


            }
            if (650 > framesCOUNT && framesCOUNT > 600) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX -= 10 * globalSpeedCOUNT;


            }
            if (750 > framesCOUNT && framesCOUNT > 700) {

                //this.dY += 1.5 * globalSpeedCOUNT;
                this.dX += 2.5 * globalSpeedCOUNT;


            }
            //2ND STEP
            if (850 > framesCOUNT && framesCOUNT > 800) {

                this.dY -= 3 * globalSpeedCOUNT;
                this.dX -= 3 * globalSpeedCOUNT;


            }
            if (950 > framesCOUNT && framesCOUNT > 900) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4* globalSpeedCOUNT;


            }
            if (1050 > framesCOUNT && framesCOUNT > 1000) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1150 > framesCOUNT && framesCOUNT > 1100) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1250 > framesCOUNT && framesCOUNT > 1200) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1350 > framesCOUNT && framesCOUNT > 1300) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1450 > framesCOUNT && framesCOUNT > 1400) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1550 > framesCOUNT && framesCOUNT > 1500) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (1650 > framesCOUNT && framesCOUNT > 1600) {

                //this.dY -= 3 * globalSpeedCOUNT;
                this.dX += 2.4 * globalSpeedCOUNT;


            }
            //3RD STEP - SMALL CIRCLE
            if (1800 > framesCOUNT && framesCOUNT > 1750) {


                this.dX -= 14.5 * globalSpeedCOUNT;


            }
            if (1950 > framesCOUNT && framesCOUNT > 1900) {


                this.dX += 2.4 * globalSpeedCOUNT;


            }
            if (2100 > framesCOUNT && framesCOUNT > 2050) {


                this.dX += 2*2.4 * globalSpeedCOUNT;


            }
            if (2250 > framesCOUNT && framesCOUNT > 2200) {


                this.dX -= 2.4 * globalSpeedCOUNT;


            }
            if (2400 > framesCOUNT && framesCOUNT > 2350) {


                this.dX -= 4 * 2.4 * globalSpeedCOUNT;


            }
            if (2550 > framesCOUNT && framesCOUNT > 2500) {


                this.dX += 2.4 * globalSpeedCOUNT;


            }

            //THE END OF SIMULATION


            if( framesCOUNT == 2999){

                this.sX = 310;
                this.sY = 90;
                this.sWidth = 490 - 310;
                this.sHeight = 270 - 90;
                this.dY = 225;
                this.dX = 195;
                this.dWidth = 40;
                this.dHeight =40 ;



            }
        }




    }
}
//BROWN CIRCLE
const brown_circleCOUNT01 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 155,
    dX : 217,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1COUNT = this.animation[this.frame];
        ctxCOUNT.drawImage(brown_circleCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateCOUNT.current == stateCOUNT.getReady){
        }else {

            // if (1550 > framesCOUNT && framesCOUNT > 1500) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            //
            // }
            // if (1750 > framesCOUNT && framesCOUNT > 1700) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX += 16 * globalSpeedCOUNT;
            //
            // }
            // if (1950 > framesCOUNT && framesCOUNT > 1900) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // if (2350 > framesCOUNT && framesCOUNT > 2300) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // //THE END OF SIMULATION
            // if( framesCOUNT == 2599){
            //
            //     this.sX = 310;
            //     this.sY = 90;
            //     this.sWidth = 490 - 310;
            //     this.sHeight = 270 - 90;
            //     this.dY = 155;
            //     this.dX = 217;
            //     this.dWidth = 100 - 24;
            //     this.dHeight =100 - 24 ;
            //
            //
            //
            // }

        }
    }
}
const brown_circleCOUNT02 = {

    //circle
    sX: 310,
    sY: 90,
    sWidth: 490 - 310,
    sHeight: 270 - 90,
    dY: 155,
    dX: 217,
    dWidth: 100 - 24,
    dHeight: 100 - 24,

    //frame can change the image of the images
    frame: 0,


    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1COUNT = this.animation[this.frame];
        if ( framesCOUNT > 1300) {
            let smaller_cycle = this.smaller[0];
            ctxCOUNT.drawImage(brown_circleCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                smaller_cycle.dWidth,smaller_cycle.dHeight);
        }else{
            ctxCOUNT.drawImage(brown_circleCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {
            //1ST STEM - SMALLER CIRCLE
            // if (1350 > framesCOUNT && framesCOUNT > 1300) {
            //
            //     this.dY += 7 * globalSpeedCOUNT;
            //
            //     this.dX -= 3 * globalSpeedCOUNT;
            //
            // }
            // if (1550 > framesCOUNT && framesCOUNT > 1500) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            //
            // }
            // if (1750 > framesCOUNT && framesCOUNT > 1700) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX += 20 * globalSpeedCOUNT;
            //
            // }
            // if (1950 > framesCOUNT && framesCOUNT > 1900) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // if (2150 > framesCOUNT && framesCOUNT > 2100) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // if (2350 > framesCOUNT && framesCOUNT > 2300) {
            //
            //     //this.dY -= 4 * globalSpeedCOUNT;
            //
            //     this.dX -= 4 * globalSpeedCOUNT;
            //
            // }
            // //THE END OF SIMULATION
            // if( framesCOUNT == 2599){
            //
            //     this.sX = 310;
            //     this.sY = 90;
            //     this.sWidth = 490 - 310;
            //     this.sHeight = 270 - 90;
            //     this.dY = 155;
            //     this.dX = 217;
            //     this.dWidth = 100 - 24;
            //     this.dHeight =100 - 24 ;
            //
            //
            //
            // }
        }
    }
}

//NUMBER OF NUMBERS AT TABLE NR 2
const how_many_numbers_at_index0COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 10,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],


    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);

        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index1COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 70,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],


    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if (  framesCOUNT > 675 && framesCOUNT <=2400) {
            let how_many_numbers_at_index1COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index1COUNT.bsX,how_many_numbers_at_index1COUNT.bsY,how_many_numbers_at_index1COUNT.bsWidth,how_many_numbers_at_index1COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(framesCOUNT <12331 && framesCOUNT > 2400){

            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }
        // if ( framesCOUNT > 675 && framesCOUNT <= 1500) {
        //     let how_many_numbers_at_index1 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }
        // else{

        //}
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index2COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 130,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr02 : [{  bsX : 145,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {


        if ( framesCOUNT <= 975 && framesCOUNT > 775) {
            let how_many_numbers_at_index2COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index2COUNT.bsX,how_many_numbers_at_index2COUNT.bsY,how_many_numbers_at_index2COUNT.bsWidth,how_many_numbers_at_index2COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if ( framesCOUNT <= 2550 && framesCOUNT > 975) {
            let how_many_numbers_at_index2COUNT = this.nr02[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index2COUNT.bsX, how_many_numbers_at_index2COUNT.bsY, how_many_numbers_at_index2COUNT.bsWidth, how_many_numbers_at_index2COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        }else if ( framesCOUNT >2550 && framesCOUNT < 22975) {
            let how_many_numbers_at_index2COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index2COUNT.bsX, how_many_numbers_at_index2COUNT.bsY, how_many_numbers_at_index2COUNT.bsWidth, how_many_numbers_at_index2COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }

        // }else if ( framesCOUNT > 1300 ) {
        //     let how_many_numbers_at_index2 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index2.bsX,how_many_numbers_at_index2.bsY,how_many_numbers_at_index2.bsWidth,how_many_numbers_at_index2.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // } else{

        // }



    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index3COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 185,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr03 : [{  bsX : 267,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr02 : [{  bsX : 145,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {

        if (framesCOUNT <= 1075 && framesCOUNT > 150 ) {
            let how_many_numbers_at_index3COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index3COUNT.bsX, how_many_numbers_at_index3COUNT.bsY, how_many_numbers_at_index3COUNT.bsWidth, how_many_numbers_at_index3COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        } else if ( framesCOUNT > 1075 && framesCOUNT <= 1800) {
            let how_many_numbers_at_index3COUNT = this.nr03[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index3COUNT.bsX,how_many_numbers_at_index3COUNT.bsY,how_many_numbers_at_index3COUNT.bsWidth,how_many_numbers_at_index3COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if ( framesCOUNT < 12075 && framesCOUNT >= 1800) {
            let how_many_numbers_at_index3COUNT = this.nr02[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index3COUNT.bsX, how_many_numbers_at_index3COUNT.bsY, how_many_numbers_at_index3COUNT.bsWidth, how_many_numbers_at_index3COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }

        // } else if ( framesCOUNT > 2300) {
        //     let how_many_numbers_at_index3 = this.nr02[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index3.bsX,how_many_numbers_at_index3.bsY,how_many_numbers_at_index3.bsWidth,how_many_numbers_at_index3.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else{

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index4COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 245,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr02 : [{  bsX : 145,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr03 : [{  bsX : 267,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if (  framesCOUNT <= 1175 && framesCOUNT > 375) {
            let how_many_numbers_at_index4COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index4COUNT.bsX,how_many_numbers_at_index4COUNT.bsY,how_many_numbers_at_index4COUNT.bsWidth,how_many_numbers_at_index4COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        } else if ( framesCOUNT > 1175 && framesCOUNT <= 1950) {
            let how_many_numbers_at_index4COUNT = this.nr04[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index4COUNT.bsX, how_many_numbers_at_index4COUNT.bsY, how_many_numbers_at_index4COUNT.bsWidth, how_many_numbers_at_index4COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        }else if ( framesCOUNT < 11175 && framesCOUNT > 1950) {
            let how_many_numbers_at_index4COUNT = this.nr03[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT, how_many_numbers_at_index4COUNT.bsX, how_many_numbers_at_index4COUNT.bsY, how_many_numbers_at_index4COUNT.bsWidth, how_many_numbers_at_index4COUNT.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        } else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }

        // } else if ( framesCOUNT <= 475 && framesCOUNT > 375) {
        //     let how_many_numbers_at_index4 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        //
        // }  else if ( framesCOUNT <= 1175 && framesCOUNT > 475) {
        //     let how_many_numbers_at_index4 = this.nr02[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        //
        // } else if ( framesCOUNT > 1175 && framesCOUNT <= 1900) {
        //     let how_many_numbers_at_index4 = this.nr05[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        //
        // }else if ( framesCOUNT > 1900 && framesCOUNT <=2100) {
        //     let how_many_numbers_at_index4 = this.nr04[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        //
        // }if ( framesCOUNT > 2100) {
        //     let how_many_numbers_at_index4 = this.nr03[0];

        //
        // }

        // }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index5COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 305,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr06 : [{  bsX : 146,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
            let how_many_numbers_at_index5COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index5COUNT.bsX,how_many_numbers_at_index5COUNT.bsY,how_many_numbers_at_index5COUNT.bsWidth,how_many_numbers_at_index5COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(framesCOUNT <= 2250 && framesCOUNT > 1275){
            let how_many_numbers_at_index5COUNT = this.nr05[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index5COUNT.bsX,how_many_numbers_at_index5COUNT.bsY,how_many_numbers_at_index5COUNT.bsWidth,how_many_numbers_at_index5COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(framesCOUNT < 22250 && framesCOUNT > 2250){
            let how_many_numbers_at_index5COUNT = this.nr04[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index5COUNT.bsX,how_many_numbers_at_index5COUNT.bsY,how_many_numbers_at_index5COUNT.bsWidth,how_many_numbers_at_index5COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }
        // if(framesCOUNT <= 575){
        //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //     this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
        //     let how_many_numbers_at_index5 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1700 && framesCOUNT > 1275) {
        //     let how_many_numbers_at_index5 = this.nr06[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }if ( framesCOUNT > 1700) {
        //     let how_many_numbers_at_index5 = this.nr05[0];

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index6COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 365,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr06 : [{  bsX : 146,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if ( framesCOUNT <= 1375 && framesCOUNT > 475) {
            let how_many_numbers_at_index6COUNT = this.nr01[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index6COUNT.bsX,how_many_numbers_at_index6COUNT.bsY,how_many_numbers_at_index6COUNT.bsWidth,how_many_numbers_at_index6COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if( framesCOUNT <= 2100 && framesCOUNT > 1375){
            let how_many_numbers_at_index6COUNT = this.nr06[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index6COUNT.bsX,how_many_numbers_at_index6COUNT.bsY,how_many_numbers_at_index6COUNT.bsWidth,how_many_numbers_at_index6COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if( framesCOUNT < 22100 && framesCOUNT > 2100){
            let how_many_numbers_at_index6COUNT = this.nr05[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index6COUNT.bsX,how_many_numbers_at_index6COUNT.bsY,how_many_numbers_at_index6COUNT.bsWidth,how_many_numbers_at_index6COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        } else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }

        // if(framesCOUNT <= 575){
        //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
        //     let how_many_numbers_at_index5 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1700 && framesCOUNT > 1275) {
        //     let how_many_numbers_at_index5 = this.nr06[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }if ( framesCOUNT > 1700) {
        //     let how_many_numbers_at_index5 = this.nr05[0];

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index7COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 425,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr06 : [{  bsX : 146,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if( framesCOUNT <= 3000 && framesCOUNT > 1475){
            let how_many_numbers_at_index7COUNT = this.nr06[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index7COUNT.bsX,how_many_numbers_at_index7COUNT.bsY,how_many_numbers_at_index7COUNT.bsWidth,how_many_numbers_at_index7COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index7COUNT.bsX,how_many_numbers_at_index7COUNT.bsY,how_many_numbers_at_index7COUNT.bsWidth,how_many_numbers_at_index7COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }
        // if(framesCOUNT <= 575){
        //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
        //     let how_many_numbers_at_index5 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1700 && framesCOUNT > 1275) {
        //     let how_many_numbers_at_index5 = this.nr06[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }if ( framesCOUNT > 1700) {
        //     let how_many_numbers_at_index5 = this.nr05[0];

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index8COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 485,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr06 : [{  bsX : 146,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if( framesCOUNT <= 3000 && framesCOUNT > 1575){
            let how_many_numbers_at_index8COUNT = this.nr06[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index8COUNT.bsX,how_many_numbers_at_index8COUNT.bsY,how_many_numbers_at_index8COUNT.bsWidth,how_many_numbers_at_index8COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index8COUNT.bsX,how_many_numbers_at_index8COUNT.bsY,how_many_numbers_at_index8COUNT.bsWidth,how_many_numbers_at_index8COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }
        // if(framesCOUNT <= 575){
        //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
        //     let how_many_numbers_at_index5 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1700 && framesCOUNT > 1275) {
        //     let how_many_numbers_at_index5 = this.nr06[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }if ( framesCOUNT > 1700) {
        //     let how_many_numbers_at_index5 = this.nr05[0];

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index9COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 165,
    bdX : 545,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],

    nr06 : [{  bsX : 146,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr05 : [{  bsX : 18,
        bsY : 135,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    nr04 : [{  bsX : 392,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9}],
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // } else {
        if( framesCOUNT <= 3000 && framesCOUNT > 1675){
            let how_many_numbers_at_index9COUNT = this.nr06[0];
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index9COUNT.bsX,how_many_numbers_at_index9COUNT.bsY,how_many_numbers_at_index9COUNT.bsWidth,how_many_numbers_at_index9COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxCOUNT.drawImage(blue_numbersCOUNT,how_many_numbers_at_index9COUNT.bsX,how_many_numbers_at_index9COUNT.bsY,how_many_numbers_at_index9COUNT.bsWidth,how_many_numbers_at_index9COUNT.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }
        // if(framesCOUNT <= 575){
        //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1275 && framesCOUNT > 575) {
        //     let how_many_numbers_at_index5 = this.nr01[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }else if ( framesCOUNT <= 1700 && framesCOUNT > 1275) {
        //     let how_many_numbers_at_index5 = this.nr06[0];
        //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
        //         this.bdWidth,this.bdHeight);
        // }if ( framesCOUNT > 1700) {
        //     let how_many_numbers_at_index5 = this.nr05[0];

        // }
        //}


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (stateCOUNT.current == stateCOUNT.getReady) {
        } else {

        }


    }
}
//TOP TABLE OF NUMBERS
const table_topCOUNT = {

    sX : 25,
    sY : 40,
    sWidth : 1037 - 25,
    sHeight : 222 - 40,
    dY : 60,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctxCOUNT.drawImage(table_and_numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//MIDDLE TABLE OF NUMBERS
const table_middleCOUNT = {

    sX : 25,
    sY : 40,
    sWidth : 1706 - 25,
    sHeight : 222 - 40,
    dY : 160,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctxCOUNT.drawImage(table_and_numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//BOTTOM TABLE OF NUMBERS
const table_bottomCOUNT = {

    sX : 25,
    sY : 40,
    sWidth : 1037 - 25,
    sHeight : 222 - 40,
    dY : 260,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctxCOUNT.drawImage(table_and_numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//NUMBERS
const nr1COUNT = {

    //green number
    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 410,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1COUNT = this.animation[this.frame];
        ctxCOUNT.drawImage(numbersCOUNT,nr1COUNT.sX,nr1COUNT.sY,this.sWidth,this.sHeight,nr1COUNT.dX,nr1COUNT.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else {

            if (2500 > framesCOUNT && framesCOUNT > 2450) {

                this.dY += 8 * globalSpeedCOUNT;
                this.dX -= 16 * globalSpeedCOUNT;


            }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 24;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 410;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }

        }


    }
}

const nr2COUNT = {

    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 515,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,


    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr2COUNT = this.animation[this.frame];

        ctxCOUNT.drawImage(numbersCOUNT,nr2COUNT.sX,nr2COUNT.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else{

            if (2650 > framesCOUNT && framesCOUNT > 2600) {

                this.dY += 8 * globalSpeedCOUNT;
                this.dX -= 16 * globalSpeedCOUNT;


            }

            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 230;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 515;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }

        }


    }
}
const nr3COUNT = {

    //green number
    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,


    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3COUNT = this.animation[this.frame];
        ctxCOUNT.drawImage(numbersCOUNT,nr3COUNT.sX,nr3COUNT.sY,this.sWidth,this.sHeight,nr3COUNT.dX,nr3COUNT.dY,
            this.dWidth,this.dHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else{
            if(framesCOUNT < 1900 && framesCOUNT > 1850){
                this.dY += 8 * globalSpeedCOUNT;
                this.dX += 8 * globalSpeedCOUNT;
            }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 430;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 20;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }

        }

    }
}
const nr4_aCOUNT = {
    //green number
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 115,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else{
            if( framesCOUNT  < 2050 && framesCOUNT > 2000){
                this.dY += 8 * globalSpeedCOUNT;
                this.dX += 8 * globalSpeedCOUNT;
            }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 24;
                this.sY = 215;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 115;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }

        }

    }
}
const nr6COUNT = {
    //green number
    sX : 429,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 215,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else{
            if(2200 > framesCOUNT && framesCOUNT > 2150){
                this.dY += 8 * globalSpeedCOUNT;
                this.dX += 12 * globalSpeedCOUNT;
            }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 24;
                this.sY = 215;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 215;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }

        }

    }
}
const nr5COUNT = {
    sX : 230,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 315,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(numbersCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
        // ctx.drawImage(numbers, -190, 0);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

        }else{
            //
            if (2350 > framesCOUNT && framesCOUNT > 2300) {

                this.dY += 8 * globalSpeedCOUNT;
                this.dX += 4 * globalSpeedCOUNT;


            }
            //THE END OF SIMULATION
            if( framesCOUNT == 2999){

                this.sX = 230;
                this.sY = 215;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 55;
                this.dX = 315;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;


            }
        }

    }
}

//INDEX OF THE TOP TABLE
const index00COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 130,
    bdX : 45,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index01COUNT = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 130,
    bdX : 145,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index02COUNT = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 130,
    bdX : 245,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index03COUNT = {
    //blue number
    bsX : 270,
    bsY : 9,
    bsWidth : 360 - 270,
    bsHeight : 100 - 9,
    bdY : 130,
    bdX : 345,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index04COUNT = {
    //blue number
    bsX : 390,
    bsY : 9,
    bsWidth : 490 - 390,
    bsHeight : 100 - 9,
    bdY : 130,
    bdX : 445,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index05COUNT = {
    //blue number
    bsX : 17,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 130,
    bdX : 545,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}



//INDEX OF THE MIDDLE TABLE
const index10COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 230,
    bdX : 20,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index11COUNT = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 230,
    bdX : 80,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index12COUNT = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 230,
    bdX : 140,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index13COUNT = {
    //blue number
    bsX : 270,
    bsY : 9,
    bsWidth : 360 - 270,
    bsHeight : 100 - 9,
    bdY : 230,
    bdX : 200,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index14COUNT = {
    //blue number
    bsX : 390,
    bsY : 9,
    bsWidth : 490 - 390,
    bsHeight : 100 - 9,
    bdY : 230,
    bdX : 260,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index15COUNT = {
    //blue number
    bsX : 17,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 230,
    bdX : 320,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index16COUNT = {
    //blue number
    bsX : 144,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 230,
    bdX : 380,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index17COUNT = {
    //blue number
    bsX : 272,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 230,
    bdX : 440,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index18COUNT = {
    //blue number
    bsX : 392,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 230,
    bdX : 500,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index19COUNT = {
    //blue number
    bsX : 20,
    bsY : 260,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 230,
    bdX : 560,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
//INDEX OF THE BOTTOM TABLE
const index20COUNT = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 330,
    bdX : 45,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index21COUNT = {
    //blue number
    bsX : 17,
    bsY : 9,
    bsWidth : 105 - 17,
    bsHeight : 100 - 9,
    bdY : 330,
    bdX : 145,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index22COUNT = {
    //blue number
    bsX : 140,
    bsY : 9,
    bsWidth : 236 - 140,
    bsHeight : 100 - 9,
    bdY : 330,
    bdX : 245,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index23COUNT = {
    //blue number
    bsX : 270,
    bsY : 9,
    bsWidth : 360 - 270,
    bsHeight : 100 - 9,
    bdY : 330,
    bdX : 345,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index24COUNT = {
    //blue number
    bsX : 390,
    bsY : 9,
    bsWidth : 490 - 390,
    bsHeight : 100 - 9,
    bdY : 330,
    bdX : 445,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}
const index25COUNT = {
    //blue number
    bsX : 17,
    bsY : 135,
    bsWidth : 110 - 17,
    bsHeight : 225 - 135,
    bdY : 330,
    bdX : 545,
    bdWidth : 30,
    bdHeight :30 ,




    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxCOUNT.drawImage(blue_numbersCOUNT,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateCOUNT.current == stateCOUNT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesCOUNT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateCOUNT.current == stateCOUNT.getReady){
        }else{

        }

    }
}



//NUMBERS
const nr1QUICK = {

    //green number
    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 340,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 15,
    bsY : 11,
    bsWidth : 107 - 15,
    bsHeight : 101 - 11,
    bdY : 70+15+155,
    bdX : 20+15+10,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxQUICK.drawImage(numbersQUICK,nr1QUICK.sX,nr1QUICK.sY,this.sWidth,this.sHeight,nr1QUICK.dX,nr1QUICK.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1150 > framesQUICK && framesQUICK > 1050){

                this.dY +=1.5*globalSpeedQUICK;
                this.dX -=4.8*globalSpeedQUICK;


            }

            //2ND STEP
            if(1700 > framesQUICK && framesQUICK > 1600){
                this.dY +=1.6*globalSpeedQUICK;
                this.dX -=1.5*globalSpeedQUICK;

            }


            //3ND STEP
            if(1850 > framesQUICK && framesQUICK > 1750){
                this.dY +=1.6*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=3.2*globalSpeedQUICK;
                this.bdY -=3.2*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 24;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 340;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+155;
                this.bdX = 30+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }

    }
}
const nr2QUICK = {

    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 180,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 140,
    bsY : 11,
    bsWidth : 234 - 140,
    bsHeight : 104 - 11,
    bdY : 70+15+75,
    bdX : 180+15,
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

        ctxQUICK.drawImage(numbersQUICK,nr2QUICK.sX,nr2QUICK.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },
    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > framesQUICK && framesQUICK > 850){
                this.dY +=1.5*globalSpeedQUICK;

            }
            //2ND STEP
            if(1350 > framesQUICK && framesQUICK > 1250){

                this.dY +=1.6*globalSpeedQUICK;
                this.dX -=1.3*globalSpeedQUICK;
                this.bdX -=1.3*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;

            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=1.6*globalSpeedQUICK;
                this.bdY -=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 230;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 180;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+75;
                this.bdX = 180+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }


    }
}
const nr3QUICK = {

    //green number
    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 266,
    bsY : 11,
    bsWidth : 360 - 266,
    bsHeight : 99 - 11,
    bdY : 70+15,
    bdX : 20+15,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxQUICK.drawImage(numbersQUICK,nr3QUICK.sX,nr3QUICK.sY,this.sWidth,this.sHeight,nr3QUICK.dX,nr3QUICK.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(650 > framesQUICK && framesQUICK > 350){
                this.dX +=1.6*globalSpeedQUICK;
                this.dY +=globalSpeedQUICK/2;
                this.bdX +=1.6*globalSpeedQUICK;
                this.bdY +=globalSpeedQUICK/2;

            }



            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 430;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 20;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15;
                this.bdX = 20+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;




            }
        }

    }
}
const nr4QUICK = {
    //green number
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 100,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 387,
    bsY : 11,
    bsWidth : 485 - 387,
    bsHeight : 100 - 11,
    bdY : 70+15+75,
    bdX : 100+15+250,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxQUICK.drawImage(numbersQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(850 > framesQUICK && framesQUICK > 700){
                this.dY +=globalSpeedQUICK;
                this.dX +=3.3*globalSpeedQUICK;
            }

            //2ND STEP
            if(1500 > framesQUICK && framesQUICK > 1400){
                this.dY +=1.6*globalSpeedQUICK;
                //  this.dX -=1.3*globalSpeed;
                //  this.bdX -=1.3*globalSpeed;
                this.bdY +=1.6*globalSpeedQUICK;
            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=1.6*globalSpeedQUICK;
                this.bdY -=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 24;
                this.sY = 215;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 100;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+75;
                this.bdX = 100+15+250;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }

    }
}
const nr9QUICK = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,


    //blue number
    bsX : 15,
    bsY : 260,
    bsWidth : 110 - 15,
    bsHeight : 350 - 260,
    bdY : 70+15+155,
    bdX : 20+15+10+400-7,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxQUICK.drawImage(numbersQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },

    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },



    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > framesQUICK && framesQUICK > 950){

                this.dY +=1.5*globalSpeedQUICK;
                this.dX +=3.3*globalSpeedQUICK;


            }
            //2ND STEP
            if(1600 > framesQUICK && framesQUICK > 1500){
                this.dY +=1.6*globalSpeedQUICK;
                //this.dX +=3.3*globalSpeed;

            }
            //3ND STEP
            if(2050 > framesQUICK && framesQUICK > 1950){
                this.dY +=1.6*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=3.2*globalSpeedQUICK;
                this.bdY -=3.2*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 430;
                this.sY = 400;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 260;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+155;
                this.bdX = 20+15+10+400-7;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;
            }
        }

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
//GET READY MESSAGE
const getReadyQUICK = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateQUICK.current == stateQUICK.getReady){
            ctxQUICK.drawImage(pauseQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverQUICK = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateQUICK.current == stateQUICK.over){
            ctxQUICK.drawImage(click2startQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
//GET READY MESSAGE
const getReadyCOUNT = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateCOUNT.current == stateCOUNT.getReady){
            ctxCOUNT.drawImage(pauseCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverCOUNT = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateCOUNT.current == stateCOUNT.over){
            ctxCOUNT.drawImage(click2startCOUNT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
//GET READY MESSAGE
const getReadyMERGE = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateMERGE.current == stateMERGE.getReady){
            ctxMERGE.drawImage(pauseMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverMERGE = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateMERGE.current == stateMERGE.over){
            ctxMERGE.drawImage(click2startMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
//GET READY MESSAGE
const getReadyHEAP = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateHEAP.current == stateHEAP.getReady){
            ctxHEAP.drawImage(pauseHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverHEAP = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateHEAP.current == stateHEAP.over){
            ctxHEAP.drawImage(click2startHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
//DRAW
function drawQUICK(){
    //background
    ctxQUICK.fillStyle = "#70c5ce";
    ctxQUICK.fillRect(0,0,cvsQUICK.width,cvsQUICK.height);

    //title of canvas
    ctxQUICK.font = "30px Arial";
    ctxQUICK.strokeText("Quick Sort!",225,50);

    //draw function
    bgQUICK.draw();
    //c2n.draw();

    nr1QUICK.draw();
    nr2QUICK.draw();
    nr3QUICK.draw();
    nr4QUICK.draw();
    nr9QUICK.draw();
    //line.draw();
    // nr3.piwot_draw();
    getReadyQUICK.draw();
    gameOverQUICK.draw();


    //DRAWING ACTION FOR 'PIWOT' NUMBER
    // if(stateQUICK.current == stateQUICK.getReady){}
    // else{
        if(13650 > framesQUICK && framesQUICK > 150){
            nr3QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1200){
            nr2QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1350){
            nr4QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1700){
            nr1QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1850){
            nr9QUICK.piwot_draw();

        }
    //}


}
//DRAW
function drawCOUNT(){
    //BACKGROUND
    ctxCOUNT.fillStyle = "#70c5ce";
    ctxCOUNT.fillRect(0,0,cvsCOUNT.width,cvsCOUNT.height);

    //TITILE OF CANVAS
    ctxCOUNT.font = "30px Arial";
    ctxCOUNT.strokeText("Counting Sort!",225,50);

    //DRAWING TABLES
    table_topCOUNT.draw();table_middleCOUNT.draw();table_bottomCOUNT.draw();

    //DRAWING NUMBER OF NUMBER IN MIDDLE TABLE
    how_many_numbers_at_index0COUNT.draw();
    how_many_numbers_at_index1COUNT.draw();
    how_many_numbers_at_index2COUNT.draw();
    how_many_numbers_at_index3COUNT.draw();
    how_many_numbers_at_index4COUNT.draw();
    how_many_numbers_at_index5COUNT.draw();
    how_many_numbers_at_index6COUNT.draw();
    how_many_numbers_at_index7COUNT.draw();
    how_many_numbers_at_index8COUNT.draw();
    how_many_numbers_at_index9COUNT.draw();

    //DRAWING SORTED NUMBERS
    nr1COUNT.draw();nr2COUNT.draw();nr3COUNT.draw();nr4_aCOUNT.draw();nr5COUNT.draw();nr6COUNT.draw();

    //DRAWING STATE
    getReadyCOUNT.draw();gameOverCOUNT.draw();

    //DRAWING 1ST LINE OF INDEX
    index00COUNT.draw();index01COUNT.draw(); index02COUNT.draw(); index03COUNT.draw(); index04COUNT.draw(); index05COUNT.draw();

    //DRAWING 2ND LINE OF INDEX
    index10COUNT.draw();
    index11COUNT.draw();
    index12COUNT.draw();
    index13COUNT.draw();
    index14COUNT.draw();
    index15COUNT.draw();
    index16COUNT.draw();
    index17COUNT.draw();
    index18COUNT.draw();
    index19COUNT.draw();

    //DRAWING 3ND LINE OF INDEX
    index20COUNT.draw();index21COUNT.draw(); index22COUNT.draw(); index23COUNT.draw(); index24COUNT.draw(); index25COUNT.draw();

    //DRAWING ACTION FOR 'PIWOT' NUMBER
    // if(state.current == state.getReady){}
    // else{
    // if(state.current == state.over ||state.current == state.getReady){
    //
    // }else{
    if(framesCOUNT <= 2800   && framesCOUNT > 10){
        red_circle01COUNT.draw();
        red_circle02COUNT.draw();

    }
    if(framesCOUNT > 1300  && framesCOUNT <=3000){
        // brown_circle01.draw();
        // brown_circle02.draw();
    }
    //}

    // }


}

//DRAW
function drawMERGE(){
    //background
    ctxMERGE.fillStyle = "#70c5ce";
    ctxMERGE.fillRect(0,0,cvsMERGE.width,cvsMERGE.height);
    table_topMERGE.draw();
    index00MERGE.draw();index01MERGE.draw();index02MERGE.draw();index03MERGE.draw();index04MERGE.draw();




    //DRAWING ACTION FOR 'PIWOT' NUMBER
    // if(state.current == state.over ||state.current == state.getReady){
    //
    // }else{
    if( framesMERGE > 100 && framesMERGE <=20000){
        table_2nd_aMERGE.draw();
        index10aMERGE.draw();index11aMERGE.draw();index12aMERGE.draw();
        table_2nd_bMERGE.draw();
        index10bMERGE.draw();index11bMERGE.draw();

    }
    if( framesMERGE > 300 && framesMERGE <=20000){
        table_3rd_aMERGE.draw();
        index20aMERGE.draw();    index21aMERGE.draw();
        table_3rd_bMERGE.draw();
        index20bMERGE.draw();


    }
    if( framesMERGE > 450 && framesMERGE <=20000){
        table_4th_aMERGE.draw();
        index30aMERGE.draw();
        table_4th_bMERGE.draw();
        index30bMERGE.draw();

    }

    if( framesMERGE > 1350 && framesMERGE <=20000){
        table_3rd_cMERGE.draw();
        index20cMERGE.draw();
        table_3rd_dMERGE.draw();
        index20dMERGE.draw();

    }


    //title of canvas
    ctxMERGE.font = "30px Arial";
    ctxMERGE.strokeText("Merging Sort!",225,50);

    //draw function
    // bg.draw();
    //c2n.draw();

    nr1MERGE.draw();
    nr2MERGE.draw();
    nr3MERGE.draw();
    nr4MERGE.draw();
    nr9MERGE.draw();
    if( framesMERGE > 550 && framesMERGE <=650){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 700 && framesMERGE <=800){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 850 && framesMERGE <=950){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1000 && framesMERGE <=1100){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1150 && framesMERGE <=1250){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1450 && framesMERGE <=1550){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1600 && framesMERGE <=1700){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1750 && framesMERGE <=1850){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 1900 && framesMERGE <=2000){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 2050 && framesMERGE <=2150){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 2200 && framesMERGE <=2300){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }
    if( framesMERGE > 2350 && framesMERGE <=2450){
        red_circleMERGE01.draw();
        red_circleMERGE02.draw();

    }

    //line.draw();
    getReadyMERGE.draw();
    gameOverMERGE.draw();
}

//DRAW
function drawHEAP(){
    //background
    ctxHEAP.fillStyle = "#70c5ce";
    ctxHEAP.fillRect(0,0,cvsHEAP.width,cvsHEAP.height);
    table_topHEAP.draw();
    index00HEAP.draw();index01HEAP.draw();index02HEAP.draw();index03HEAP.draw();index04HEAP.draw();




    //DRAWING ACTION FOR 'PIWOT' NUMBER
    // if(state.current == state.getReady){}
    // else{

    if( framesHEAP > 200*simulation_speedHEAP && framesHEAP <=2850*simulation_speedHEAP){
        red_circleHEAP01HEAP.draw();

    }
    if( framesHEAP > 200*simulation_speedHEAP && framesHEAP <=350*simulation_speedHEAP){
        nr3HEAP.drawTree();

    }
    if( framesHEAP > 350*simulation_speedHEAP && framesHEAP <=500*simulation_speedHEAP){
        branch01leftHEAP.draw();
        nr3HEAP.drawTree();
        nr9HEAP.drawTree();
    }
    if( framesHEAP > 500*simulation_speedHEAP && framesHEAP <=650*simulation_speedHEAP){
        branch01leftHEAP.draw();
        branch01rightHEAP.draw();
        nr3HEAP.drawTree();
        nr9HEAP.drawTree();
        nr2HEAP.drawTree();
    }
    if( framesHEAP > 650*simulation_speedHEAP && framesHEAP <=800*simulation_speedHEAP){
        branch01leftHEAP.draw();branch01leftHEAP.draw2();
        branch01rightHEAP.draw();
        nr3HEAP.drawTree();
        nr9HEAP.drawTree();
        nr2HEAP.drawTree();
        nr4HEAP.drawTree();

    }
    if( framesHEAP > 800*simulation_speedHEAP && framesHEAP <=65000*simulation_speedHEAP){


        if( framesHEAP < 2550 *simulation_speedHEAP){
            branch01rightHEAP.draw();
        }
        if( framesHEAP < 2800*simulation_speedHEAP ){
            branch01leftHEAP.draw();
        }

        if( framesHEAP > 650 *simulation_speedHEAP&& framesHEAP <=2100*simulation_speedHEAP){
            branch01leftHEAP.draw2();
            if( framesHEAP > 800*simulation_speedHEAP && framesHEAP <=1450*simulation_speedHEAP){
                branch01rightHEAP.draw2();
            }
            nr4HEAP.drawTree();
            if( framesHEAP > 800*simulation_speedHEAP && framesHEAP <=1450*simulation_speedHEAP){
                nr9HEAP.drawTree();
            }
        }
        if( framesHEAP < 2550 *simulation_speedHEAP){
            nr3HEAP.drawTree();
        }
        if( framesHEAP < 2800 *simulation_speedHEAP){
            nr2HEAP.drawTree();
        }


        nr1HEAP.drawTree();
    }
    if( framesHEAP > 950*simulation_speedHEAP && framesHEAP <=2850*simulation_speedHEAP){
        red_circleHEAP02HEAP.draw();
    }
    if( framesHEAP > 1000 *simulation_speedHEAP&& framesHEAP <=2850*simulation_speedHEAP){
        brown_circleHEAP01HEAP.draw();
        brown_circleHEAP02HEAP.draw();
    }






    //title of canvas
    ctxHEAP.font = "30px Arial";
    ctxHEAP.strokeText("Heap Sort!",225,50);

    //draw function
    // bg.draw();
    //c2n.draw();

    nr1HEAP.draw();
    nr2HEAP.draw();
    nr3HEAP.draw();
    nr4HEAP.draw();
    nr9HEAP.draw();

    //line.draw();
    getReadyHEAP.draw();
    gameOverHEAP.draw();
}
//UPDATE
function update(){
    nr1BUBBLE.update();
    nr2BUBBLE.update();
    nr3BUBBLE.update();
    c2nBUBBLE.update();
    lineBUBBLE.update();
    if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

    }else{
        if(framesBUBBLE == 5000){
            stateBUBBLE.current = stateBUBBLE.over;
        };
    }



}
//UPDATE
function updateQUICK(){
    nr1QUICK.update();
    nr2QUICK.update();
    nr3QUICK.update();
    nr4QUICK.update();
    nr9QUICK.update();
    //c2n.update();
    //line.update();
    if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {

    } else {
        if (framesQUICK == 2300) {
            stateQUICK.current = stateQUICK.over;
        }
        ;
    }


}
//UPDATE
function updateCOUNT(){
    nr1COUNT.update();
    nr2COUNT.update();
    nr3COUNT.update();
    nr4_aCOUNT.update();
    nr6COUNT.update();
    nr5COUNT.update();
    how_many_numbers_at_index0COUNT.update();
    how_many_numbers_at_index1COUNT.update();
    how_many_numbers_at_index2COUNT.update();
    how_many_numbers_at_index3COUNT.update();
    how_many_numbers_at_index4COUNT.update();
    how_many_numbers_at_index5COUNT.update();
    how_many_numbers_at_index6COUNT.update();
    how_many_numbers_at_index7COUNT.update();
    how_many_numbers_at_index8COUNT.update();
    how_many_numbers_at_index9COUNT.update();
    red_circle01COUNT.update();
    red_circle02COUNT.update();
    // brown_circle01.update();
    // brown_circle02.update();
    //c2n.update();
    //line.update();
    if(framesCOUNT == 3000){
        stateCOUNT.current = 2;
    };


}
//UPDATE
function updateMERGE(){
    nr1MERGE.update();
    nr2MERGE.update();
    nr3MERGE.update();
    nr4MERGE.update();
    nr9MERGE.update();
    red_circleMERGE01.update();
    red_circleMERGE02.update();
    //c2n.update();
    //line.update();
    if(framesMERGE == 2600){
        stateMERGE.current = stateMERGE.getReady;
    };


}
//UPDATE
function updateHEAP(){
    branch01leftHEAP.update();
    nr1HEAP.update();
    nr2HEAP.update();
    nr3HEAP.update();
    nr4HEAP.update();
    nr9HEAP.update();
    red_circleHEAP01HEAP.update();
    red_circleHEAP02HEAP.update();
    brown_circleHEAP01HEAP.update();
    brown_circleHEAP02HEAP.update();
    //c2n.update();
    //line.update();
    if(framesHEAP == 3000*simulation_speedHEAP){
        stateHEAP.current = stateHEAP.getReady;
    };


}
//LOOP
function loop(){
    update();
    updateQUICK();
    updateCOUNT();
    updateMERGE();
    updateHEAP();

    draw();
    drawQUICK();
    drawCOUNT();
    drawMERGE();
    drawHEAP();

    framesBUBBLE++;
    framesBUBBLE++;
    if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
    }else{
        framesQUICK++;
    }
    if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

    }else {
        framesCOUNT++;
    }
    if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){
    }else {
        framesMERGE++;
    }
    if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

    }else{
        framesHEAP=framesHEAP + frame_speedHEAP;

    }
    requestAnimationFrame(loop);
}

loop();

//LOOP
// function loopQUICK(){
//     updateQUICK();
//     drawQUICK();
//     framesQUICK++;
//     requestAnimationFrame(loopQUICK);
// }
// loopQUICK();