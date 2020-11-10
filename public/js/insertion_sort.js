// INSERTION CVS
const cvsINSERTION = document.getElementById("birdINSERTION");
const ctxINSERTION = cvsINSERTION.getContext("2d");
// GAME VARS AND CONSTS
let framesINSERTION = 0;
let globalSpeedINSERTION = 0.5 ;
let framesRememberINSERTION=0;

//IMAGE OF THE BIRD
const spriteINSERTION=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersINSERTION=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersINSERTION=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersINSERTION=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startINSERTION=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
const pauseINSERTION=document.getElementById("pause");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circle=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circle=document.getElementById("brown_circle");


const stateINSERTION = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsINSERTION.addEventListener("click",function(evt){
    switch(stateINSERTION.current){
        case stateINSERTION.getReady:
            stateINSERTION.current = stateINSERTION.game;
            framesINSERTION = framesRememberINSERTION;
            framesRememberINSERTION=framesINSERTION;
            break;
        case stateINSERTION.game:
            stateINSERTION.current = stateINSERTION.getReady;
            framesRememberINSERTION=framesINSERTION;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1INSERTION.INSERTIONSort();
            break;
        case stateINSERTION.over:
            stateINSERTION.current = stateINSERTION.game;
            framesINSERTION = 0;
            break;
    }
});


//BACKGROUD
const bgINSERTION = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsINSERTION.height - 226,

    draw : function(){
        ctxINSERTION.drawImage(spriteINSERTION,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}

const red_circle01 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 190,
    dX : 10,
    dWidth : 90,
    dHeight :90 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame]
        ctxINSERTION.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            // if(450 > framesINSERTION && framesINSERTION > 350){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(650 > framesINSERTION && framesINSERTION > 550){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(850 > framesINSERTION && framesINSERTION > 750){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(1050 > framesINSERTION && framesINSERTION > 950){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(1450 > framesINSERTION && framesINSERTION > 1350){
            //     this.dX -=4.8 * globalSpeedINSERTION;
            //
            // }
            // if(1650 > framesINSERTION && framesINSERTION > 1550){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(1850 > framesINSERTION && framesINSERTION > 1750){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2050 > framesINSERTION && framesINSERTION > 1950){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2250 > framesINSERTION && framesINSERTION > 2150){
            //     this.dX-=3.2* globalSpeedINSERTION;
            //
            // }//3rd
            // if(2450 > framesINSERTION && framesINSERTION > 2350){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2650 > framesINSERTION && framesINSERTION > 2550){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2850 > framesINSERTION && framesINSERTION > 2750){
            //     this.dX-=1.6* globalSpeedINSERTION;
            //
            // }
            // //4th
            // if(3050 > framesINSERTION && framesINSERTION > 2950){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }

            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =10;
                this.dY =this.dY;

            }
        }

    }
}
//RIGHT CIRCLE
const brown_circle01 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 185,
    dX : 5,
    dWidth : 100,
    dHeight :100 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxINSERTION.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            // if(550 > framesINSERTION && framesINSERTION > 450){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(750 > framesINSERTION && framesINSERTION > 650){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(1150 > framesINSERTION && framesINSERTION > 1050){
            //     this.dX +=3.2* globalSpeedINSERTION;
            //
            // }
            // if(1450 > framesINSERTION && framesINSERTION > 1350){
            //     this.dX -=4.8 * globalSpeedINSERTION;
            //
            // }
            // //2nd
            // if(1750 > framesINSERTION && framesINSERTION > 1650){
            //     this.dX +=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2550 > framesINSERTION && framesINSERTION > 2450){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(3150 > framesINSERTION && framesINSERTION > 3050){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =5;
                this.dY =this.dY;

            }
        }

    }
}

//COMPARE 2 NUMBERS
const c2nINSERTION = {

    sX : 328,
    sY : 200,
    sWidth : 510-328,
    sHeight : 300-200,
    dY : 280,
    dX : 50,
    dWidth : 100,
    dHeight :50  ,
    draw : function(){

        ctxINSERTION.drawImage(compare2numbersINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            if(600 > framesINSERTION && framesINSERTION > 250){
                this.dX +=globalSpeedINSERTION;
            }
            if(1200 > framesINSERTION && framesINSERTION > 850){
                this.dX +=globalSpeedINSERTION;
            }
            if(1800 > framesINSERTION && framesINSERTION > 1450){
                this.dX +=globalSpeedINSERTION;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if( framesINSERTION == 2050){
                this.dX =50;
            }
            if(2650 > framesINSERTION && framesINSERTION > 2300){
                this.dX +=globalSpeedINSERTION;
            }
            if(3250 > framesINSERTION && framesINSERTION > 2900){
                this.dX +=globalSpeedINSERTION;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if( framesINSERTION == 3500){
                this.dX =50;
            }
            if(4000 > framesINSERTION && framesINSERTION > 3750){
                this.dX +=globalSpeedINSERTION;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(framesINSERTION == 4250){
                this.dX =50;
            }
            //finish
            if(framesINSERTION==3998){
                this.dX =50;
            }
        }


    }
}
//NUMBERS
const nr1INSERTION = {
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

    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxINSERTION.drawImage(numbersINSERTION,nr1INSERTION.sX,nr1INSERTION.sY,this.sWidth,this.sHeight,nr1INSERTION.dX,nr1INSERTION.dY,
            this.dWidth,this.dHeight);
    },

    INSERTIONSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1650 > framesINSERTION && framesINSERTION > 1550){
                this.dY +=1.6* globalSpeedINSERTION;

            }
            if(2450 > framesINSERTION && framesINSERTION > 2350){
                this.dY -=1.6* globalSpeedINSERTION;
                this.dX -=4.8* globalSpeedINSERTION;
            }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =338;
                this.dY =this.dY;

            }
        }

    }
}
const nr2INSERTION = {
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

    dX : 338,
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

        ctxINSERTION.drawImage(numbersINSERTION,nr2INSERTION.sX,nr2INSERTION.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);

        // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //     this.bdWidth,this.bdHeight);



    },
    INSERTIONSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;

            if(2850 > framesINSERTION && framesINSERTION > 2750){
                this.dY +=1.6* globalSpeedINSERTION;
                //this.dX -=4.8* globalSpeedINSERTION;
            }
            if(3650 > framesINSERTION && framesINSERTION > 3550){
                this.dY -=1.6* globalSpeedINSERTION;
                this.dX -=4.8* globalSpeedINSERTION;
            }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =180;
                this.dY =this.dY;

            }
        }

    }
}
const nr3INSERTION = {
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
    dX : 180,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,



    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxINSERTION.drawImage(numbersINSERTION,nr3INSERTION.sX,nr3INSERTION.sY,this.sWidth,this.sHeight,nr3INSERTION.dX,nr3INSERTION.dY,
            this.dWidth,this.dHeight);
    },
    INSERTIONSort : function(){

    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(650 > framesINSERTION && framesINSERTION > 550){
                this.dY +=1.6* globalSpeedINSERTION;

            }
            if(1250 > framesINSERTION && framesINSERTION > 1150){
                this.dX -=3.2* globalSpeedINSERTION;
                this.dY -=1.6* globalSpeedINSERTION;
            }
            if(2250 > framesINSERTION && framesINSERTION > 2150){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(3450 > framesINSERTION && framesINSERTION > 3350){
                this.dX +=1.6* globalSpeedINSERTION;
                //this.dX -=4.8* globalSpeedINSERTION;
            }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =260;
                this.dY =this.dY;

            }
        }

    }
}
const nr4INSERTION = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dX : 20,
    dY : 200,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxINSERTION.drawImage(numbersINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //2nd
            if(1050 > framesINSERTION && framesINSERTION > 950){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(2050 > framesINSERTION && framesINSERTION > 1950){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(3250 > framesINSERTION && framesINSERTION > 3150){
                this.dX +=1.6* globalSpeedINSERTION;
                //this.dX -=4.8* globalSpeedINSERTION;
            }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =100;
                this.dY =this.dY;

            }
        }

    }
}
const nr9INSERTION = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dX : 100,
    dY : 200,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxINSERTION.drawImage(numbersINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(150 > framesINSERTION && framesINSERTION > 50){
                this.dY +=1.6* globalSpeedINSERTION;

            }
            if(350 > framesINSERTION && framesINSERTION > 250){
                this.dY -=1.6* globalSpeedINSERTION;

            }

            if(850 > framesINSERTION && framesINSERTION > 750){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(1850 > framesINSERTION && framesINSERTION > 1750){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(3050 > framesINSERTION && framesINSERTION > 2950){
                this.dX +=1.6* globalSpeedINSERTION;
                //this.dX -=4.8* globalSpeedINSERTION;
            }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =20;
                this.dY =this.dY;
            }
        }

    }
}

const lineINSERTION = {
    sX : 115,
    sY : 47,
    sWidth : 5,
    sHeight : 60,
    dY : 150,
    dX : 90,
    dWidth : 10,
    dHeight :200  ,
    draw : function(){
        ctxINSERTION.drawImage(numbersINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    //frame can change the image of the images
    frame : 0,

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTION.current == stateINSERTION.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTION % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(450 > framesINSERTION && framesINSERTION > 350){
                    this.dX +=1.6* globalSpeedINSERTION;

            }
            if(1450 > framesINSERTION && framesINSERTION > 1350){
                this.dX +=1.6* globalSpeedINSERTION;

            }
            if(2650 > framesINSERTION && framesINSERTION > 2550){
                this.dX +=1.6* globalSpeedINSERTION;
               // this.dX -=4.8* globalSpeedINSERTION;
            }
            if(3850 > framesINSERTION && framesINSERTION > 3750){
                this.dX +=1.6* globalSpeedINSERTION;
             //   this.dX -=4.8* globalSpeedINSERTION;
            }
            // if(1450 > framesINSERTION && framesINSERTION > 1350){
            //     this.dX +=1.6 * globalSpeedINSERTION;
            //
            // }
            // if(2250 > framesINSERTION && framesINSERTION > 2150){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(2850 > framesINSERTION && framesINSERTION > 2750){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(3150 > framesINSERTION && framesINSERTION > 3050){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            // if(3350 > framesINSERTION && framesINSERTION > 3250){
            //     this.dX+=1.6* globalSpeedINSERTION;
            //
            // }
            //THE END OF SIMULATION
            if( framesINSERTION == 3998){
                this.dX =10;
                this.dY =this.dY;

            }
        }


    }
}


//GET READY MESSAGE
const getReadyINSERTION = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateINSERTION.current == stateINSERTION.getReady){
            ctxINSERTION.drawImage(pauseINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverINSERTION = {

    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateINSERTION.current == stateINSERTION.over ){
            ctxINSERTION.drawImage(click2startINSERTION,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW - dopisac drawBUBBLE
function drawINSERTION(){
    //background
    ctxINSERTION.fillStyle = "#70c5ce";
    ctxINSERTION.fillRect(0,0,cvsINSERTION.width,cvsINSERTION.height);

    //title of canvas
    ctxINSERTION.font = "20px Arial";

    ctxINSERTION.strokeText("INSERTION Sort! - click if you want to pause or start simulation",25,50);

    //draw function
    // bg.draw();
   // c2nINSERTION.draw();
    red_circle01.draw();
    brown_circle01.draw();
    nr1INSERTION.draw();
    nr2INSERTION.draw();
    nr3INSERTION.draw();
    nr4INSERTION.draw();
    nr9INSERTION.draw();
    lineINSERTION.draw();
    getReadyINSERTION.draw();
    gameOverINSERTION.draw();
}
function updateINSERTION(){

    red_circle01.update();
    brown_circle01.update();
    nr1INSERTION.update();
    nr2INSERTION.update();
    nr3INSERTION.update();
    nr4INSERTION.update();
    nr9INSERTION.update();
  //  c2nINSERTION.update();
    lineINSERTION.update();
    if(stateINSERTION.current == stateINSERTION.over ||stateINSERTION.current == stateINSERTION.getReady){

    }else{
        if(framesINSERTION == 4000){
            stateINSERTION.current = stateINSERTION.over;
        };
    }



}

//LOOP
function loop(){
    updateINSERTION();

    drawINSERTION();

    if (stateINSERTION.current == stateINSERTION.over || stateINSERTION.current == stateINSERTION.getReady) {
    }else{
        framesINSERTION++;
       //framesINSERTION++;
    }

    requestAnimationFrame(loop);
}

loop();