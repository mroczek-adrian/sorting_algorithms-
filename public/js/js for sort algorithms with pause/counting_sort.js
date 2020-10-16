// SELECT CVS
const cvs = document.getElementById("bird1");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;
let globalSpeed = 0.5;
let framesRemember=0;


//IMAGE OF THE BIRD
const sprite=document.getElementById("image");
//IMAGE OF NUMBERS
const numbers=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbers=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbers=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2start=document.getElementById("click2start");
//IMAGE OF THE TABLE WITH NUMBERS
const table_and_numbers=document.getElementById("table");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circle=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circle=document.getElementById("brown_circle");

//IMAGE OF THE GET OVER STATE
const pauseQUICK=document.getElementById("pause");
//GAME STATE
const state = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}



//CONTROL THE GAME
cvs.addEventListener("click",function(evt){
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            frames = framesRemember;
            framesRemember=frames;
            break;
        case state.game:
            state.current = state.getReady;
            framesRemember=frames;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1.bubbleSort();
            break;
        case state.over:
            state.current = state.game;
            frames = 0;
            break;
    }
});














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
//RED CIRCLE
const red_circle01 = {

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
        //let nr1 = this.animation[this.frame];
        // if ( frames > 1300) {
        //     let smaller_cycle = this.smaller[0];
        //     ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
        //         smaller_cycle.dWidth,smaller_cycle.dHeight);
        // }else{
        ctx.drawImage(red_circle, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
            this.dWidth, this.dHeight);
    //}
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.over ||state.current == state.getReady){

        }else {
            //1ST STEM
            if (350 > frames && frames > 300) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            if (450 > frames && frames > 400) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            if (550 > frames && frames > 500) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            if (650 > frames && frames > 600) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            if (750 > frames && frames > 700) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            //2ND STEP
            if (850 > frames && frames > 800) {

                this.dY += 4 * globalSpeed;
                this.dX -= 21 * globalSpeed;


            }
            if (950 > frames && frames > 900) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1050 > frames && frames > 1000) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1150 > frames && frames > 1100) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1250 > frames && frames > 1200) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }

            if (1350 > frames && frames > 1300) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1450 > frames && frames > 1400) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1550 > frames && frames > 1500) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1650 > frames && frames > 1600) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            //3RD STEP -  CIRCLE
            if (1800 > frames && frames > 1750) {

                this.dY -= 4 * globalSpeed;
                this.dX -= 18 * globalSpeed;


            }
            if (1950 > frames && frames > 1900) {


                this.dX += 4 * globalSpeed;


            }
            if (2100 > frames && frames > 2050) {


                this.dX += 4 * globalSpeed;


            }
            if (2250 > frames && frames > 2200) {


                this.dX += 4 * globalSpeed;


            }
            if (2400 > frames && frames > 2350) {


                this.dX += 4 * globalSpeed;


            }
            if (2550 > frames && frames > 2500) {


                this.dX += 4 * globalSpeed;


            }
            // if (1550 > frames && frames > 1500) {
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (1750 > frames && frames > 1700) {
            //
            //     this.dX += 16 * globalSpeed;
            //
            // }
            // if (1950 > frames && frames > 1900) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (2350 > frames && frames > 2300) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            //THE END OF SIMULATION
            if( frames == 2999){

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
const red_circle02 = {

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
        //let nr1 = this.animation[this.frame];
        if ( frames > 800) {
            let bigger_cycle = this.bigger[0];
            ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                bigger_cycle.dWidth,bigger_cycle.dHeight);
        }else{
            ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }

    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.over ||state.current == state.getReady){

        }else {
            // this.speed += this.gravity;
            // 50ms DELAY BEFORE MOVING THE NUMBER
            if (350 > frames && frames > 300) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 2.5 * globalSpeed;


            }
            if (450 > frames && frames > 400) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 5 * globalSpeed;


            }
            if (550 > frames && frames > 500) {

                //this.dY += 1.5 * globalSpeed;
                this.dX -= 2.5 * globalSpeed;


            }
            if (650 > frames && frames > 600) {

                //this.dY += 1.5 * globalSpeed;
                this.dX -= 10 * globalSpeed;


            }
            if (750 > frames && frames > 700) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 2.5 * globalSpeed;


            }
            //2ND STEP
            if (850 > frames && frames > 800) {

                this.dY -= 3 * globalSpeed;
                this.dX -= 3 * globalSpeed;


            }
            if (950 > frames && frames > 900) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4* globalSpeed;


            }
            if (1050 > frames && frames > 1000) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1150 > frames && frames > 1100) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1250 > frames && frames > 1200) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1350 > frames && frames > 1300) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1450 > frames && frames > 1400) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1550 > frames && frames > 1500) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            if (1650 > frames && frames > 1600) {

                //this.dY -= 3 * globalSpeed;
                this.dX += 2.4 * globalSpeed;


            }
            //3RD STEP - SMALL CIRCLE
            if (1800 > frames && frames > 1750) {


                this.dX -= 14.5 * globalSpeed;


            }
            if (1950 > frames && frames > 1900) {


                this.dX += 2.4 * globalSpeed;


            }
            if (2100 > frames && frames > 2050) {


                this.dX += 2*2.4 * globalSpeed;


            }
            if (2250 > frames && frames > 2200) {


                this.dX -= 2.4 * globalSpeed;


            }
            if (2400 > frames && frames > 2350) {


                this.dX -= 4 * 2.4 * globalSpeed;


            }
            if (2550 > frames && frames > 2500) {


                this.dX += 2.4 * globalSpeed;


            }
            // //3RD STEP - BIG CIRCLE
            // if (1350 > frames && frames > 1300) {
            //
            //     this.dY -= 4 * globalSpeed;
            //     //this.dX += 4 * globalSpeed;
            //
            //
            // }
            // if (1550 > frames && frames > 1500) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //     this.dX -= 4 * globalSpeed;
            //
            //
            // }
            // if (1750 > frames && frames > 1700) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (1950 > frames && frames > 1900) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (2150 > frames && frames > 2100) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (2350 > frames && frames > 2300) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            //THE END OF SIMULATION


            if( frames == 2999){

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
const brown_circle01 = {

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
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady){
        }else {

            // if (1550 > frames && frames > 1500) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //     this.dX -= 4 * globalSpeed;
            //
            //
            // }
            // if (1750 > frames && frames > 1700) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX += 16 * globalSpeed;
            //
            // }
            // if (1950 > frames && frames > 1900) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // if (2350 > frames && frames > 2300) {
            //
            //     //this.dY -= 4 * globalSpeed;
            //
            //     this.dX -= 4 * globalSpeed;
            //
            // }
            // //THE END OF SIMULATION
            // if( frames == 2599){
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
const brown_circle02 = {

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
        //let nr1 = this.animation[this.frame];
            if ( frames > 1300) {
                let smaller_cycle = this.smaller[0];
                ctx.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    smaller_cycle.dWidth,smaller_cycle.dHeight);
            }else{
                ctx.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        },


        bubbleSort: function () {

        },


        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = state.current == state.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
            //this.frame = this.frame % this.animation.length;

            if (state.current == state.getReady) {
            } else {
                //1ST STEM - SMALLER CIRCLE
                // if (1350 > frames && frames > 1300) {
                //
                //     this.dY += 7 * globalSpeed;
                //
                //     this.dX -= 3 * globalSpeed;
                //
                // }
                // if (1550 > frames && frames > 1500) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //     this.dX -= 4 * globalSpeed;
                //
                //
                // }
                // if (1750 > frames && frames > 1700) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX += 20 * globalSpeed;
                //
                // }
                // if (1950 > frames && frames > 1900) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2150 > frames && frames > 2100) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2350 > frames && frames > 2300) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // //THE END OF SIMULATION
                // if( frames == 2599){
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
const how_many_numbers_at_index0 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);

        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index1 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if (  frames > 675 && frames <=2400) {
                let how_many_numbers_at_index1 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames <12331 && frames > 2400){

                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if ( frames > 675 && frames <= 1500) {
            //     let how_many_numbers_at_index1 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }
            // else{

            //}
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index2 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {


            if ( frames <= 975 && frames > 775) {
                let how_many_numbers_at_index2 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index2.bsX,how_many_numbers_at_index2.bsY,how_many_numbers_at_index2.bsWidth,how_many_numbers_at_index2.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if ( frames <= 2550 && frames > 975) {
                let how_many_numbers_at_index2 = this.nr02[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index2.bsX, how_many_numbers_at_index2.bsY, how_many_numbers_at_index2.bsWidth, how_many_numbers_at_index2.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else if ( frames >2550 && frames < 22975) {
                let how_many_numbers_at_index2 = this.nr01[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index2.bsX, how_many_numbers_at_index2.bsY, how_many_numbers_at_index2.bsWidth, how_many_numbers_at_index2.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // }else if ( frames > 1300 ) {
            //     let how_many_numbers_at_index2 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index2.bsX,how_many_numbers_at_index2.bsY,how_many_numbers_at_index2.bsWidth,how_many_numbers_at_index2.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // } else{

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index3 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {

            if (frames <= 1075 && frames > 150 ) {
                let how_many_numbers_at_index3 = this.nr01[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index3.bsX, how_many_numbers_at_index3.bsY, how_many_numbers_at_index3.bsWidth, how_many_numbers_at_index3.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            } else if ( frames > 1075 && frames <= 1800) {
                    let how_many_numbers_at_index3 = this.nr03[0];
                    ctx.drawImage(blue_numbers,how_many_numbers_at_index3.bsX,how_many_numbers_at_index3.bsY,how_many_numbers_at_index3.bsWidth,how_many_numbers_at_index3.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if ( frames < 12075 && frames >= 1800) {
                let how_many_numbers_at_index3 = this.nr02[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index3.bsX, how_many_numbers_at_index3.bsY, how_many_numbers_at_index3.bsWidth, how_many_numbers_at_index3.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // } else if ( frames > 2300) {
            //     let how_many_numbers_at_index3 = this.nr02[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index3.bsX,how_many_numbers_at_index3.bsY,how_many_numbers_at_index3.bsWidth,how_many_numbers_at_index3.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else{

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index4 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if (  frames <= 1175 && frames > 375) {
                let how_many_numbers_at_index4 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            } else if ( frames > 1175 && frames <= 1950) {
                let how_many_numbers_at_index4 = this.nr04[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index4.bsX, how_many_numbers_at_index4.bsY, how_many_numbers_at_index4.bsWidth, how_many_numbers_at_index4.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else if ( frames < 11175 && frames > 1950) {
                let how_many_numbers_at_index4 = this.nr03[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index4.bsX, how_many_numbers_at_index4.bsY, how_many_numbers_at_index4.bsWidth, how_many_numbers_at_index4.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            } else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // } else if ( frames <= 475 && frames > 375) {
            //     let how_many_numbers_at_index4 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            //
            // }  else if ( frames <= 1175 && frames > 475) {
            //     let how_many_numbers_at_index4 = this.nr02[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            //
            // } else if ( frames > 1175 && frames <= 1900) {
            //     let how_many_numbers_at_index4 = this.nr05[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            //
            // }else if ( frames > 1900 && frames <=2100) {
            //     let how_many_numbers_at_index4 = this.nr04[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            //
            // }if ( frames > 2100) {
            //     let how_many_numbers_at_index4 = this.nr03[0];

            //
            // }

        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index5 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if ( frames <= 1275 && frames > 575) {
                let how_many_numbers_at_index5 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames <= 2250 && frames > 1275){
                let how_many_numbers_at_index5 = this.nr05[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames < 22250 && frames > 2250){
                let how_many_numbers_at_index5 = this.nr04[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index6 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if ( frames <= 1375 && frames > 475) {
                let how_many_numbers_at_index6 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if( frames <= 2100 && frames > 1375){
                let how_many_numbers_at_index6 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if( frames < 22100 && frames > 2100){
                let how_many_numbers_at_index6 = this.nr05[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            } else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index7 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
             if( frames <= 3000 && frames > 1475){
                let how_many_numbers_at_index7 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index7.bsX,how_many_numbers_at_index7.bsY,how_many_numbers_at_index7.bsWidth,how_many_numbers_at_index7.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                 ctx.drawImage(blue_numbers,how_many_numbers_at_index7.bsX,how_many_numbers_at_index7.bsY,how_many_numbers_at_index7.bsWidth,how_many_numbers_at_index7.bsHeight,this.bdX,this.bdY,
                     this.bdWidth,this.bdHeight);
             }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index8 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if( frames <= 3000 && frames > 1575){
                let how_many_numbers_at_index8 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index8.bsX,how_many_numbers_at_index8.bsY,how_many_numbers_at_index8.bsWidth,how_many_numbers_at_index8.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,how_many_numbers_at_index8.bsX,how_many_numbers_at_index8.bsY,how_many_numbers_at_index8.bsWidth,how_many_numbers_at_index8.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
const how_many_numbers_at_index9 = {
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
        if(state.current == state.over ||state.current == state.getReady){

        } else {
            if( frames <= 3000 && frames > 1675){
                let how_many_numbers_at_index9 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index9.bsX,how_many_numbers_at_index9.bsY,how_many_numbers_at_index9.bsWidth,how_many_numbers_at_index9.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,how_many_numbers_at_index9.bsX,how_many_numbers_at_index9.bsY,how_many_numbers_at_index9.bsWidth,how_many_numbers_at_index9.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
        }


    },


    bubbleSort: function () {

    },


    update: function () {
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if (state.current == state.getReady) {
        } else {

        }


    }
}
//TOP TABLE OF NUMBERS
const table_top = {

    sX : 25,
    sY : 40,
    sWidth : 1037 - 25,
    sHeight : 222 - 40,
    dY : 60,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//MIDDLE TABLE OF NUMBERS
const table_middle = {

    sX : 25,
    sY : 40,
    sWidth : 1706 - 25,
    sHeight : 222 - 40,
    dY : 160,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//BOTTOM TABLE OF NUMBERS
const table_bottom = {

    sX : 25,
    sY : 40,
    sWidth : 1037 - 25,
    sHeight : 222 - 40,
    dY : 260,
    dX : 0,
    dWidth : 600,
    dHeight :70  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//NUMBERS
const nr1 = {

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
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr1.sX,nr1.sY,this.sWidth,this.sHeight,nr1.dX,nr1.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.over ||state.current == state.getReady){

        }else {

            if (2500 > frames && frames > 2450) {

                this.dY += 8 * globalSpeed;
                this.dX -= 16 * globalSpeed;


            }
            //THE END OF SIMULATION
            if( frames == 2999){

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

const nr2 = {

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
        //let nr2 = this.animation[this.frame];

            ctx.drawImage(numbers,nr2.sX,nr2.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(state.current == state.over ||state.current == state.getReady){

        }else{

            if (2650 > frames && frames > 2600) {

                this.dY += 8 * globalSpeed;
                this.dX -= 16 * globalSpeed;


            }

            //THE END OF SIMULATION
            if( frames == 2999){

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
const nr3 = {

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
        //let nr3 = this.animation[this.frame];
        ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
            this.dWidth,this.dHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.over ||state.current == state.getReady){

        }else{
            if(frames < 1900 && frames > 1850){
                this.dY += 8 * globalSpeed;
                this.dX += 8 * globalSpeed;
            }
            //THE END OF SIMULATION
            if( frames == 2999){

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
const nr4_a = {
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
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.over ||state.current == state.getReady){

        }else{
            if( frames  < 2050 && frames > 2000){
                this.dY += 8 * globalSpeed;
                this.dX += 8 * globalSpeed;
            }
            //THE END OF SIMULATION
            if( frames == 2999){

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
const nr6 = {
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
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.over ||state.current == state.getReady){

        }else{
            if(2200 > frames && frames > 2150){
                this.dY += 8 * globalSpeed;
                this.dX += 12 * globalSpeed;
            }
            //THE END OF SIMULATION
            if( frames == 2999){

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
const nr5 = {
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
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
       // ctx.drawImage(numbers, -190, 0);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.over ||state.current == state.getReady){

        }else{
            //
            if (2350 > frames && frames > 2300) {

                this.dY += 8 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            //THE END OF SIMULATION
            if( frames == 2999){

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
const index00 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index01 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index02 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index03 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index04 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index05 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}



//INDEX OF THE MIDDLE TABLE
const index10 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index11 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index12 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index13 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index14 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index15 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index16 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index17 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index18 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index19 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
//INDEX OF THE BOTTOM TABLE
const index20 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index21 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index22 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index23 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index24 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
const index25 = {
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
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = state.current == state.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(state.current == state.getReady){
        }else{

        }

    }
}
//GET READY MESSAGE
const getReady = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(state.current == state.getReady){
            ctx.drawImage(pauseQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOver = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(state.current == state.over){
            ctx.drawImage(click2start,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW
function draw(){
    //BACKGROUND
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0,0,cvs.width,cvs.height);

    //TITILE OF CANVAS
    ctx.font = "30px Arial";
    ctx.strokeText("Counting Sort!",225,50);

    //DRAWING TABLES
    table_top.draw();table_middle.draw();table_bottom.draw();

    //DRAWING NUMBER OF NUMBER IN MIDDLE TABLE
    how_many_numbers_at_index0.draw();
    how_many_numbers_at_index1.draw();
    how_many_numbers_at_index2.draw();
    how_many_numbers_at_index3.draw();
    how_many_numbers_at_index4.draw();
    how_many_numbers_at_index5.draw();
    how_many_numbers_at_index6.draw();
    how_many_numbers_at_index7.draw();
    how_many_numbers_at_index8.draw();
    how_many_numbers_at_index9.draw();

    //DRAWING SORTED NUMBERS
    nr1.draw();nr2.draw();nr3.draw();nr4_a.draw();nr5.draw();nr6.draw();

    //DRAWING STATE
    getReady.draw();gameOver.draw();

    //DRAWING 1ST LINE OF INDEX
    index00.draw();index01.draw(); index02.draw(); index03.draw(); index04.draw(); index05.draw();

    //DRAWING 2ND LINE OF INDEX
    index10.draw();
    index11.draw();
    index12.draw();
    index13.draw();
    index14.draw();
    index15.draw();
    index16.draw();
    index17.draw();
    index18.draw();
    index19.draw();

    //DRAWING 3ND LINE OF INDEX
    index20.draw();index21.draw(); index22.draw(); index23.draw(); index24.draw(); index25.draw();

    //DRAWING ACTION FOR 'PIWOT' NUMBER
    // if(state.current == state.getReady){}
    // else{
    if(state.current == state.over ||state.current == state.getReady){

    }else{
        if(frames <= 2800   && frames > 10){
            red_circle01.draw();
            red_circle02.draw();

        }
        if(frames > 1300  && frames <=3000){
            // brown_circle01.draw();
            // brown_circle02.draw();
        }
    }

    // }


}
//UPDATE
function update(){
    nr1.update();
    nr2.update();
    nr3.update();
    nr4_a.update();
    nr6.update();
    nr5.update();
     how_many_numbers_at_index0.update();
    how_many_numbers_at_index1.update();
    how_many_numbers_at_index2.update();
    how_many_numbers_at_index3.update();
    how_many_numbers_at_index4.update();
    how_many_numbers_at_index5.update();
    how_many_numbers_at_index6.update();
    how_many_numbers_at_index7.update();
    how_many_numbers_at_index8.update();
    how_many_numbers_at_index9.update();
    red_circle01.update();
    red_circle02.update();
    // brown_circle01.update();
    // brown_circle02.update();
    //c2n.update();
    //line.update();
    if(frames == 3000){
        state.current = 2;
    };


}
//LOOP
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();