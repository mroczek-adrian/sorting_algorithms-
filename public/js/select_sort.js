// SELECT CVS
const cvsSELECT = document.getElementById("birdSELECT");
const ctxSELECT = cvsSELECT.getContext("2d");
// GAME VARS AND CONSTS
let framesSELECT = 0;
let globalSpeedSELECT = 0.5;
let framesRememberSELECT=0;

//IMAGE OF THE BIRD
const spriteSELECT=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersSELECT=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersSELECT=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersSELECT=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startSELECT=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
const pauseSELECT=document.getElementById("pause");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circle=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circle=document.getElementById("brown_circle");
const restartSELECT = document.getElementById("img4");


const stateSELECT = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsSELECT.addEventListener("click",function(evt){
    switch(stateSELECT.current){
        case stateSELECT.getReady:
            stateSELECT.current = stateSELECT.game;
            framesSELECT = framesRememberSELECT;
            framesRememberSELECT=framesSELECT;
            break;
        case stateSELECT.game:
            stateSELECT.current = stateSELECT.getReady;
            framesRememberSELECT=framesSELECT;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1SELECT.SELECTSort();
            break;
        case stateSELECT.over:
            stateSELECT.current = stateSELECT.game;
            framesSELECT = 0;
            break;
    }
});

restartSELECT.addEventListener("click",function(evt){
    switch(stateSELECT.current){
        case stateSELECT.getReady:
        case stateSELECT.game:
            stateSELECT.current = 2;
            red_circle01.dX=10
           // bgRectangle.dX =185;
            bgRectangle.dY =5;
           // bgRectangle.dHeight =30;
           // red_circle01.dX =10;
           // red_circle01.dY =190;
            brown_circle01.dX =5;
            //brown_circle01.dY =265;
            nr1SELECT.dX =338;
            //nr1SELECT.dY =200;
            nr2SELECT.dX =180;
         //   nr2SELECT.dY =200;
            nr3SELECT.dX =260;
          //  nr3SELECT.dY =200;
            nr4SELECT.dX =100;
          //  nr4SELECT.dY =200;
            nr9SELECT.dX =20;
          //  nr9SELECT.dY =200;
            lineSELECT.dX =-80;





            framesSELECT = 0;


            break;
    }
});

//BACKGROUD
const bgSELECT = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsSELECT.height - 226,

    draw : function(){
        ctxSELECT.drawImage(spriteSELECT,this.sX,this.sY,this.w,this.h,this.x,this.y,
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
        ctxSELECT.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(450 > framesSELECT && framesSELECT > 350){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(650 > framesSELECT && framesSELECT > 550){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(850 > framesSELECT && framesSELECT > 750){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(1050 > framesSELECT && framesSELECT > 950){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(1450 > framesSELECT && framesSELECT > 1350){
                this.dX -=4.8 * globalSpeedSELECT;

            }
            if(1650 > framesSELECT && framesSELECT > 1550){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(1850 > framesSELECT && framesSELECT > 1750){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(2050 > framesSELECT && framesSELECT > 1950){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(2250 > framesSELECT && framesSELECT > 2150){
                this.dX-=3.2* globalSpeedSELECT;

            }//3rd
            if(2450 > framesSELECT && framesSELECT > 2350){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(2650 > framesSELECT && framesSELECT > 2550){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(2850 > framesSELECT && framesSELECT > 2750){
                this.dX-=1.6* globalSpeedSELECT;

            }
            //4th
            if(3050 > framesSELECT && framesSELECT > 2950){
                this.dX+=1.6* globalSpeedSELECT;

            }

            //THE END OF SIMULATION
            if( framesSELECT == 3998){
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
        ctxSELECT.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(550 > framesSELECT && framesSELECT > 450){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(750 > framesSELECT && framesSELECT > 650){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(1150 > framesSELECT && framesSELECT > 1050){
                this.dX +=3.2* globalSpeedSELECT;

            }
            if(1450 > framesSELECT && framesSELECT > 1350){
                this.dX -=4.8 * globalSpeedSELECT;

            }
            //2nd
            if(1750 > framesSELECT && framesSELECT > 1650){
                this.dX +=1.6* globalSpeedSELECT;

            }
            if(2550 > framesSELECT && framesSELECT > 2450){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(3150 > framesSELECT && framesSELECT > 3050){
                this.dX+=1.6* globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =5;
                this.dY =this.dY;

            }
        }

    }
}
const bgRectangle = {

    sX : 33,
    sY : 33,
    sWidth : 670-33,
    sHeight : 270-33,
    dY : 5,
    dX : 185,
    dWidth : 420,
    dHeight :75  ,

    draw : function(){
        ctxSELECT.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);


    },
    startPosition : function(){
        bgRectangle.dX =185;
        bgRectangle.dHeight =30;
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){

        }else{
            // go to 2nd

                if(1450 > framesSELECT && framesSELECT > 1400){
                    //this.dHeight +=2*globalSpeedSELECT;
                    this.dY += 3*globalSpeedSELECT;
                }
            if(1550 > framesSELECT && framesSELECT > 1500) {
                //this.dHeight +=2*globalSpeedSELECT;
                this.dY -= 3 * globalSpeedSELECT;
            }
            if(2300 > framesSELECT && framesSELECT > 2250) {
                //this.dHeight +=2*globalSpeedSELECT;
                this.dY += 3 * globalSpeedSELECT;
            }
                if(2400 > framesSELECT && framesSELECT > 2350) {
                    //this.dHeight +=2*globalSpeedSELECT;
                    this.dY -= 3 * globalSpeedSELECT;
                }
            if(2900 > framesSELECT && framesSELECT > 2850){
                //this.dHeight +=2*globalSpeedSELECT;
                this.dY += 3*globalSpeedSELECT;
            }
            if(3000 > framesSELECT && framesSELECT > 2950){
                //this.dHeight +=2*globalSpeedSELECT;
                this.dY -= 3*globalSpeedSELECT;
            }
                // // go to 3rd
            // if(300 > framesSELECT && framesSELECT > 250){
            //     this.dHeight -=0.5*globalSpeedSELECT;
            //     this.dY +=2.8* globalSpeedSELECT;
            // }  // go to 1rd
            // if(550 > framesSELECT && framesSELECT > 500){
            //     this.dY -=3.8* globalSpeedSELECT;
            //     this.dHeight -=1.5*globalSpeedSELECT;
            // }
            // if(700 > framesSELECT && framesSELECT > 650){
            //     this.dHeight +=2*globalSpeedSELECT;
            //     this.dY += globalSpeedSELECT;
            //
            // }
            // if(800 > framesSELECT && framesSELECT > 750){
            //     this.dHeight -=0.5*globalSpeedSELECT;
            //     this.dY +=2.8* globalSpeedSELECT;
            // }
            // if(1600 > framesSELECT && framesSELECT > 1550){
            //     this.dY -=3.8* globalSpeedSELECT;
            //     this.dHeight -=1.5*globalSpeedSELECT;
            //
            // }
            // if(1750 > framesSELECT && framesSELECT > 1700){
            //     this.dHeight +=2*globalSpeedSELECT;
            //     this.dY += globalSpeedSELECT;
            //
            // }
            // if(2000 > framesSELECT && framesSELECT > 1950){
            //     this.dHeight -=0.5*globalSpeedSELECT;
            //     this.dY +=2.8* globalSpeedSELECT;
            // }
            // if(2800 > framesSELECT && framesSELECT > 2750){
            //     this.dY -=3.8* globalSpeedSELECT;
            //     this.dHeight -=1.5*globalSpeedSELECT;
            // }
            // if(2900 > framesSELECT && framesSELECT > 2850){
            //     this.dHeight +=2*globalSpeedSELECT;
            //     this.dY += globalSpeedSELECT;
            // }
            // if(3200 > framesSELECT && framesSELECT > 3150){
            //     this.dHeight -=0.5*globalSpeedSELECT;
            //     this.dY +=2.8* globalSpeedSELECT;
            // }
            // if(1200 > framesSELECT && framesSELECT > 850){
            //     this.dX +=globalSpeedSELECT;
            // }
            // if(1800 > framesSELECT && framesSELECT > 1450){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesSELECT == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesSELECT && framesSELECT > 2300){
            //     this.dX +=globalSpeedSELECT;
            // }
            // if(3250 > framesSELECT && framesSELECT > 2900){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesSELECT == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesSELECT && framesSELECT > 3750){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesSELECT == 4250){
            //     this.dX =50;
            // }
            // //finish
            if(framesSELECT==3998){
                this.dX =185;
                this.dY =10;
                this.dHeight =30;

            }
        }


    }
}
const bgSteps = {

    sX : 43,
    sY : 8,
    sWidth :724 -43,
    sHeight : 238-8,
    dY : 10,
    dX : 200,
    dWidth : 400,
    dHeight :150  ,
    draw : function(){

        ctxSELECT.drawImage(img2,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            // if(600 > framesSELECT && framesSELECT > 250){
            //     this.dX +=globalSpeedSELECT;
            // }
            // if(1200 > framesSELECT && framesSELECT > 850){
            //     this.dX +=globalSpeedSELECT;
            // }
            // if(1800 > framesSELECT && framesSELECT > 1450){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesSELECT == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesSELECT && framesSELECT > 2300){
            //     this.dX +=globalSpeedSELECT;
            // }
            // if(3250 > framesSELECT && framesSELECT > 2900){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesSELECT == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesSELECT && framesSELECT > 3750){
            //     this.dX +=globalSpeedSELECT;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesSELECT == 4250){
            //     this.dX =50;
            // }
            // //finish
            // if(framesSELECT==3998){
            //     this.dX =50;
            // }
        }


    }
}
//COMPARE 2 NUMBERS
const c2nSELECT = {

    sX : 328,
    sY : 200,
    sWidth : 510-328,
    sHeight : 300-200,
    dY : 280,
    dX : 50,
    dWidth : 100,
    dHeight :50  ,
    draw : function(){

        ctxSELECT.drawImage(compare2numbersSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            if(600 > framesSELECT && framesSELECT > 250){
                this.dX +=globalSpeedSELECT;
            }
            if(1200 > framesSELECT && framesSELECT > 850){
                this.dX +=globalSpeedSELECT;
            }
            if(1800 > framesSELECT && framesSELECT > 1450){
                this.dX +=globalSpeedSELECT;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if( framesSELECT == 2050){
                this.dX =50;
            }
            if(2650 > framesSELECT && framesSELECT > 2300){
                this.dX +=globalSpeedSELECT;
            }
            if(3250 > framesSELECT && framesSELECT > 2900){
                this.dX +=globalSpeedSELECT;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if( framesSELECT == 3500){
                this.dX =50;
            }
            if(4000 > framesSELECT && framesSELECT > 3750){
                this.dX +=globalSpeedSELECT;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(framesSELECT == 4250){
                this.dX =50;
            }
            //finish
            if(framesSELECT==3998){
                this.dX =50;
            }
        }


    }
}
//NUMBERS
const nr1SELECT = {
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
    dX : 338,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxSELECT.drawImage(numbersSELECT,nr1SELECT.sX,nr1SELECT.sY,this.sWidth,this.sHeight,nr1SELECT.dX,nr1SELECT.dY,
            this.dWidth,this.dHeight);
    },

    SELECTSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1350 > framesSELECT && framesSELECT > 1250){
                this.dX -=6.5 * globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =338;
                this.dY =this.dY;

            }
        }

    }
}
const nr2SELECT = {
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

        ctxSELECT.drawImage(numbersSELECT,nr2SELECT.sX,nr2SELECT.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);

        // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //     this.bdWidth,this.bdHeight);



    },
    SELECTSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;

            //2nd
            if(2150 > framesSELECT && framesSELECT > 2050){
                this.dX-=1.6* globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =180;
                this.dY =this.dY;

            }
        }

    }
}
const nr3SELECT = {
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
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,



    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxSELECT.drawImage(numbersSELECT,nr3SELECT.sX,nr3SELECT.sY,this.sWidth,this.sHeight,nr3SELECT.dX,nr3SELECT.dY,
            this.dWidth,this.dHeight);
    },
    SELECTSort : function(){

    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(2750 > framesSELECT && framesSELECT > 2650){
                this.dX-=1.6* globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =260;
                this.dY =this.dY;

            }
        }

    }
}
const nr4SELECT = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,

    dY : 200,
    dX : 100,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxSELECT.drawImage(numbersSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //2nd
            if(2150 > framesSELECT && framesSELECT > 2050){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(2750 > framesSELECT && framesSELECT > 2650){
                this.dX+=1.6* globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =100;
                this.dY =this.dY;

            }
        }

    }
}
const nr9SELECT = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,

    dY : 200,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxSELECT.drawImage(numbersSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1350 > framesSELECT && framesSELECT > 1250){
                this.dX +=6.5 * globalSpeedSELECT;

            }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =20;
                this.dY =this.dY;
            }
        }

    }
}
const lineSELECT = {
    sX : 100,
    sY : 10,
    sWidth : 350-100,
    sHeight : 180-10,
    dY : 150,
     dX : -80,
    dWidth : 200,
    dHeight :200  ,
    draw : function(){
        ctxSELECT.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    startPosition : function(){
        lineSELECT.dX =6;

    },

    //frame can change the image of the images
    frame : 0,

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesSELECT % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1450 > framesSELECT && framesSELECT > 1350){
                this.dX +=1.6 * globalSpeedSELECT;

            }
            if(2250 > framesSELECT && framesSELECT > 2150){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(2850 > framesSELECT && framesSELECT > 2750){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(3150 > framesSELECT && framesSELECT > 3050){
                this.dX+=1.6* globalSpeedSELECT;

            }
            if(3350 > framesSELECT && framesSELECT > 3250){
                this.dX+=1.6* globalSpeedSELECT;

            }
            // if(1450 > framesSELECT && framesSELECT > 1350){
            //     this.dX +=1.6 * globalSpeedSELECT;
            //
            // }
            // if(2250 > framesSELECT && framesSELECT > 2150){
            //     this.dX+=1.6* globalSpeedSELECT;
            //
            // }
            // if(2850 > framesSELECT && framesSELECT > 2750){
            //     this.dX+=1.6* globalSpeedSELECT;
            //
            // }
            // if(3150 > framesSELECT && framesSELECT > 3050){
            //     this.dX+=1.6* globalSpeedSELECT;
            //
            // }
            // if(3350 > framesSELECT && framesSELECT > 3250){
            //     this.dX+=1.6* globalSpeedSELECT;
            //
            // }
            //THE END OF SIMULATION
            if( framesSELECT == 3998){
                this.dX =6;
                //   this.dY =this.dY;

            }
        }


    }
}

// const lineSELECT = {
//     sX : 115,
//     sY : 47,
//     sWidth : 5,
//     sHeight : 60,
//     dY : 150,
//     dX : 10,
//     dWidth : 10,
//     dHeight :200  ,
//     draw : function(){
//         ctxSELECT.drawImage(numbersSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
//             this.dWidth,this.dHeight);
//     },
//
//
//     //frame can change the image of the images
//     frame : 0,
//
//     update: function(){
//         //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
//         //this.period = state.current == state.getReady ? 10 : 5;
//
//         //SPEED DEPENDS ON THE NUMBER OF PERIOD
//         this.period = stateSELECT.current == stateSELECT.getReady ? 0 : 55;
//         //WE INCREMENT THE FRAME BY 1, EACH PERIOD
//         this.frame += framesSELECT % this.period == 0 ? 1 : 0;
//         //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
//         //this.frame = this.frame % this.animation.length;
//
//
//         if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){
//
//         }else{
//             // this.speed += this.gravity;
//             //50ms DELAY BEFORE MOVING THE NUMBER
//             if(1450 > framesSELECT && framesSELECT > 1350){
//                 this.dX +=1.6 * globalSpeedSELECT;
//
//             }
//             if(2250 > framesSELECT && framesSELECT > 2150){
//                 this.dX+=1.6* globalSpeedSELECT;
//
//             }
//             if(2850 > framesSELECT && framesSELECT > 2750){
//                 this.dX+=1.6* globalSpeedSELECT;
//
//             }
//             if(3150 > framesSELECT && framesSELECT > 3050){
//                 this.dX+=1.6* globalSpeedSELECT;
//
//             }
//             if(3350 > framesSELECT && framesSELECT > 3250){
//                 this.dX+=1.6* globalSpeedSELECT;
//
//             }
//             //THE END OF SIMULATION
//             if( framesSELECT == 3998){
//                 this.dX =10;
//                 this.dY =this.dY;
//
//             }
//         }
//
//
//     }
// }


//GET READY MESSAGE
const getReadySELECT = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateSELECT.current == stateSELECT.getReady){
            ctxSELECT.drawImage(pauseSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverSELECT = {

    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateSELECT.current == stateSELECT.over ){
            ctxSELECT.drawImage(click2startSELECT,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW - dopisac drawBUBBLE
function drawSELECT(){
    //background
    ctxSELECT.fillStyle = "#70c5ce";
    ctxSELECT.fillRect(0,0,cvsSELECT.width,cvsSELECT.height);

    //title of canvas
    ctxSELECT.font = "20px Arial";

    ctxSELECT.strokeText("Select Sort! ",25,50);

    //draw function
    // bg.draw();
   // c2nSELECT.draw();


    nr1SELECT.draw();
    nr2SELECT.draw();
    nr3SELECT.draw();
    nr4SELECT.draw();
    nr9SELECT.draw();
    getReadySELECT.draw();
    gameOverSELECT.draw();

    if(3700 > framesSELECT && framesSELECT > 0){
     //   this.dX +=1.6 * globalSpeedSELECT;
        red_circle01.draw();
        brown_circle01.draw();
        bgRectangle.draw();
        bgSteps.draw();
        lineSELECT.draw();

    }
}
function updateSELECT(){
    bgRectangle.update();
    bgSteps.update();
    red_circle01.update();
    brown_circle01.update();
    nr1SELECT.update();
    nr2SELECT.update();
    nr3SELECT.update();
    nr4SELECT.update();
    nr9SELECT.update();
  //  c2nSELECT.update();
    lineSELECT.update();
    if(stateSELECT.current == stateSELECT.over ||stateSELECT.current == stateSELECT.getReady){

    }else{
        if(framesSELECT == 4000){
            stateSELECT.current = stateSELECT.over;
        };
    }



}

//LOOP
function loop(){
    updateSELECT();

    drawSELECT();

    if (stateSELECT.current == stateSELECT.over || stateSELECT.current == stateSELECT.getReady) {
    }else{
        framesSELECT++;
       // framesSELECT++;
    }

    requestAnimationFrame(loop);
}

loop();