// SELECT COUNT
const cvsCOUNT = document.getElementById("birdCOUNT");
const ctxCOUNT = cvsCOUNT.getContext("2d");

// GAME VARS AND CONSTS
let framesCOUNT = 0;
let globalSpeedCOUNT = 0.5;
let framesRememberCOUNT=0;


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
//GAME STATE
const stateCOUNT = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}



//CONTROL THE GAME
cvsCOUNT.addEventListener("click",function(evt){
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
            nr1COUNT.bubbleSort();
            break;
        case stateCOUNT.over:
            stateCOUNT.current = stateCOUNT.game;
            framesCOUNT = 0;
            break;
    }
});














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
//LOOP
function loop(){
    updateCOUNT();
    drawCOUNT();
    if(stateCOUNT.current == stateCOUNT.over ||stateCOUNT.current == stateCOUNT.getReady){

    }else {
        framesCOUNT++;
    }

    requestAnimationFrame(loop);
}
loop();