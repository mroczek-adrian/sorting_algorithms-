// SELECT CVSHEAP
const cvsHEAP = document.getElementById("birdHEAP");
const ctxHEAP = cvsHEAP.getContext("2d");

// GAME VARS AND CONSTS
let framesHEAP = 0;
let a = 0;
let globalSpeedHEAP = 0.125;//speed of movement
let simulation_speedHEAP = 1 // number of frame
let frame_speedHEAP = 0.5 // speed of simulation

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
const stateHEAP = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsHEAP.addEventListener("click",function(evt){
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
    updateHEAP();
    drawHEAP();
    if(stateHEAP.current == stateHEAP.over ||stateHEAP.current == stateHEAP.getReady){

    }else{
        framesHEAP=framesHEAP + frame_speedHEAP;

    }
    requestAnimationFrame(loop);
}
loop();