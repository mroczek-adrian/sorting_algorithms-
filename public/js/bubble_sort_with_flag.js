






var x, text;
// BUBBLE_WITH_FLAG CVS
const cvsBUBBLE_WITH_FLAG = document.getElementById("birdBUBBLE_WITH_FLAG");
cvsBUBBLE_WITH_FLAG.style.display = "block";
// if (cvsBUBBLE_WITH_FLAG.style.display === "none") {
//     cvsBUBBLE_WITH_FLAG.style.display = "block";
// } else {
//     cvsBUBBLE_WITH_FLAG.style.display = "none";
// }
const ctxBUBBLE_WITH_FLAG = cvsBUBBLE_WITH_FLAG.getContext("2d");
// // Get the value of the input field with id="numb"
// x = document.getElementById("numb").value;
// x1 = document.getElementById("numb1").value;
// x2 = document.getElementById("numb2").value;
// // If x is Not a Number or less than one or greater than 10
// if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
// } else {
//     text = "Input OK" + x1 + "number" + x2  + x;
// }
// document.getElementById("demo").innerHTML = text;








// GAME VARS AND CONSTS
let framesBUBBLE_WITH_FLAG = 0;
let globalSpeedBUBBLE_WITH_FLAG = 0.5;
let framesRememberBUBBLE_WITH_FLAG=0;

//IMAGE OF THE BIRD
const spriteBUBBLE_WITH_FLAG=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersBUBBLE_WITH_FLAG=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersBUBBLE_WITH_FLAG=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersBUBBLE_WITH_FLAG=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startBUBBLE_WITH_FLAG=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
const pauseBUBBLE_WITH_FLAG=document.getElementById("pause");
const red_circle=document.getElementById("red_circle");
const restartBUBBLE_WITH_FLAG = document.getElementById("img4");
//GAME STATE
const stateBUBBLE_WITH_FLAG = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsBUBBLE_WITH_FLAG.addEventListener("click",function(evt){
    switch(stateBUBBLE_WITH_FLAG.current){
        case stateBUBBLE_WITH_FLAG.getReady:
            stateBUBBLE_WITH_FLAG.current = stateBUBBLE_WITH_FLAG.game;
            framesBUBBLE_WITH_FLAG = framesRememberBUBBLE_WITH_FLAG;
            framesRememberBUBBLE_WITH_FLAG=framesBUBBLE_WITH_FLAG;
            break;
        case stateBUBBLE_WITH_FLAG.game:
            stateBUBBLE_WITH_FLAG.current = stateBUBBLE_WITH_FLAG.getReady;
            framesRememberBUBBLE_WITH_FLAG=framesBUBBLE_WITH_FLAG;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1BUBBLE_WITH_FLAG.bubble_WITH_FLAGSort();
            break;
        case stateBUBBLE_WITH_FLAG.over:
            stateBUBBLE_WITH_FLAG.current = stateBUBBLE_WITH_FLAG.game;
            framesBUBBLE_WITH_FLAG = 0;
            break;
    }
});
restartBUBBLE_WITH_FLAG.addEventListener("click",function(evt){
    switch(stateBUBBLE_WITH_FLAG.current){
        case stateBUBBLE_WITH_FLAG.getReady:
        case stateBUBBLE_WITH_FLAG.game:
            stateBUBBLE_WITH_FLAG.current = 2;
            red_circle01.dX=10;
            red_circle02.dX=90;
            // bgRectangle.dX =185;
             bgRectangle.dY =5;
            bgRectangle.dHeight=50;
            // bgRectangle.dHeight =30;
            // red_circle01.dX =10;
            // red_circle01.dY =190;
            //brown_circle01.dX =5;
            //brown_circle01.dY =265;
            nr1BUBBLE_WITH_FLAG.dX =340;
            //nr1BUBBLE_WITH_FLAG.dY =200;
            nr2BUBBLE_WITH_FLAG.dX =180;
            //   nr2BUBBLE_WITH_FLAG.dY =200;
            nr3BUBBLE_WITH_FLAG.dX =100;
            //  nr3BUBBLE_WITH_FLAG.dY =200;
            nr4BUBBLE_WITH_FLAG.dX =260;
            //  nr4BUBBLE_WITH_FLAG.dY =200;
            nr9BUBBLE_WITH_FLAG.dX =20;
            //  nr9BUBBLE_WITH_FLAG.dY =200;
            lineBUBBLE_WITH_FLAG.dX =295;
            bgRectangle.dY=5;




            framesBUBBLE_WITH_FLAG = 0;


            break;
    }
});
const bgRectangle = {

    sX : 33,
    sY : 33,
    sWidth : 670-33,
    sHeight : 270-33,
    dY : 5,
    dX : 185,
    dWidth : 420,
    dHeight :50  ,

    draw : function(){
        ctxBUBBLE_WITH_FLAG.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // go to 2nd

            if(1000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 950){
                this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY +=1.8* globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1100 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1050) {
                this.dHeight -=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY -= 1.8 * globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1600 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1550) {
                //this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY +=1.8* globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1700 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1650) {
                //this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dHeight -=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY -= 1.8 * globalSpeedBUBBLE_WITH_FLAG;

            }
            if(2000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1950){
                //this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY +=1.8* globalSpeedBUBBLE_WITH_FLAG;
            }
            if(2100 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2050){
                //this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dHeight -=2*globalSpeedBUBBLE_WITH_FLAG;
                this.dY -= 1.8 * globalSpeedBUBBLE_WITH_FLAG;

            }
            // // go to 3rd
            // if(300 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 250){
            //     this.dHeight -=0.5*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY +=2.8* globalSpeedBUBBLE_WITH_FLAG;
            // }  // go to 1rd
            // if(550 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 500){
            //     this.dY -=3.8* globalSpeedBUBBLE_WITH_FLAG;
            //     this.dHeight -=1.5*globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(700 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 650){
            //     this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY += globalSpeedBUBBLE_WITH_FLAG;
            //
            // }
            // if(800 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 750){
            //     this.dHeight -=0.5*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY +=2.8* globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(1600 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1550){
            //     this.dY -=3.8* globalSpeedBUBBLE_WITH_FLAG;
            //     this.dHeight -=1.5*globalSpeedBUBBLE_WITH_FLAG;
            //
            // }
            // if(1750 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1700){
            //     this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY += globalSpeedBUBBLE_WITH_FLAG;
            //
            // }
            // if(2000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1950){
            //     this.dHeight -=0.5*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY +=2.8* globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(2800 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2750){
            //     this.dY -=3.8* globalSpeedBUBBLE_WITH_FLAG;
            //     this.dHeight -=1.5*globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(2900 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2850){
            //     this.dHeight +=2*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY += globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(3200 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 3150){
            //     this.dHeight -=0.5*globalSpeedBUBBLE_WITH_FLAG;
            //     this.dY +=2.8* globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(1200 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 850){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(1800 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1450){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesBUBBLE_WITH_FLAG == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2300){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(3250 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2900){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesBUBBLE_WITH_FLAG == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 3750){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesBUBBLE_WITH_FLAG == 4250){
            //     this.dX =50;
            // }
            // //finish
            if(framesBUBBLE_WITH_FLAG==2599){
                //this.dX =185;
                this.dY =5;
                //this.dHeight =30;

            }
        }


    }
}
const bgSteps = {

    sX : 2,
    sY : 33,
    sWidth :660 -2,
    sHeight : 321-33,
    dY : 10,
    dX : 200,
    dWidth : 400,
    dHeight :130  ,
    draw : function(){

        ctxBUBBLE_WITH_FLAG.drawImage(img2,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            // if(600 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 250){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(1200 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 850){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(1800 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1450){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesBUBBLE_WITH_FLAG == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2300){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // if(3250 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2900){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesBUBBLE_WITH_FLAG == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 3750){
            //     this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesBUBBLE_WITH_FLAG == 4250){
            //     this.dX =50;
            // }
            // //finish
            // if(framesBUBBLE_WITH_FLAG==2599){
            //     this.dX =50;
            // }
        }


    }
}
const flagBUBBLE_WITH_FLAG = {
    //blue number
    bsX : 145,
    bsY : 255,
    bsWidth : 236 - 145,
    bsHeight : 354 - 255,
    bdY : 70,
    bdX : 147,
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
        if (  framesBUBBLE_WITH_FLAG <= 450 && framesBUBBLE_WITH_FLAG > 250) {
            let flagBUBBLE_WITH_FLAG = this.nr01[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }  else if(  framesBUBBLE_WITH_FLAG <= 650 && framesBUBBLE_WITH_FLAG > 450){
            let flagBUBBLE_WITH_FLAG = this.nr02[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        } else if(  framesBUBBLE_WITH_FLAG <= 850 && framesBUBBLE_WITH_FLAG > 650){
            let flagBUBBLE_WITH_FLAG = this.nr03[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(  framesBUBBLE_WITH_FLAG <= 1000 && framesBUBBLE_WITH_FLAG > 850){
            let flagBUBBLE_WITH_FLAG = this.nr04[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(  framesBUBBLE_WITH_FLAG <= 950 && framesBUBBLE_WITH_FLAG > 850){
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        } else if(  framesBUBBLE_WITH_FLAG <= 1450 && framesBUBBLE_WITH_FLAG > 1050){
            let flagBUBBLE_WITH_FLAG = this.nr01[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        } else if(  framesBUBBLE_WITH_FLAG <= 1550 && framesBUBBLE_WITH_FLAG > 1450){
            let flagBUBBLE_WITH_FLAG = this.nr02[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(  framesBUBBLE_WITH_FLAG <= 1950 && framesBUBBLE_WITH_FLAG > 1850){
            let flagBUBBLE_WITH_FLAG = this.nr01[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else if(  framesBUBBLE_WITH_FLAG <= 3333 && framesBUBBLE_WITH_FLAG > 2050){
            let flagBUBBLE_WITH_FLAG = this.nr01[0];
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,flagBUBBLE_WITH_FLAG.bsX,flagBUBBLE_WITH_FLAG.bsY,flagBUBBLE_WITH_FLAG.bsWidth,flagBUBBLE_WITH_FLAG.bsHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        }else{
            ctxBUBBLE_WITH_FLAG.drawImage(blue_numbersBUBBLE_WITH_FLAG,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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

        // }


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
        ctxBUBBLE_WITH_FLAG.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubble_WITH_FLAGSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(450 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 350){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 550){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(850 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 750){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if(1050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 950){
                this.dX -=4.8*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1250 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1150){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1450 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1350){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if(1650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1550){
                this.dX -=3.2*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1850 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1750){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(2050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1950){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //finish
            if(framesBUBBLE_WITH_FLAG==2498){
                this.dX =10;
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
    dY : 190,
    dX : 90,
    dWidth : 90,
    dHeight :90 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame]
        ctxBUBBLE_WITH_FLAG.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubble_WITH_FLAGSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(450 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 350){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 550){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(850 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 750){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if(1050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 950){
                this.dX -=4.8*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1250 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1150){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1450 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1350){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if(1650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1550){
                this.dX -=3.2*globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1850 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1750){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(2050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1950){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;
            }
            //finish
            if(framesBUBBLE_WITH_FLAG==2498){
                this.dX =90;
            }
        }

    }
}
//BACKGROUD
const bgBUBBLE_WITH_FLAG = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsBUBBLE_WITH_FLAG.height - 226,

    draw : function(){
        ctxBUBBLE_WITH_FLAG.drawImage(spriteBUBBLE_WITH_FLAG,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}
//COMPARE 2 NUMBERS
const c2nBUBBLE_WITH_FLAG = {

    sX : 328,
    sY : 200,
    sWidth : 510-328,
    sHeight : 300-200,
    dY : 280,
    dX : 50,
    dWidth : 100,
    dHeight :50  ,
    draw : function(){

        ctxBUBBLE_WITH_FLAG.drawImage(compare2numbersBUBBLE_WITH_FLAG,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            if(600 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 250){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1200 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 850){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            if(1800 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1450){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if( framesBUBBLE_WITH_FLAG == 2050){
                this.dX =50;
            }
            if(2650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2300){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            if(3250 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2900){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if( framesBUBBLE_WITH_FLAG == 3500){
                this.dX =50;
            }
            if(4000 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 3750){
                this.dX +=globalSpeedBUBBLE_WITH_FLAG;
            }
            //COMPARISON VALUE OF NUMBERS-4th run

            //finish
            if(framesBUBBLE_WITH_FLAG==2599){
                this.dX =50;
            }
        }


    }
}



//NUMBERS
const nr1BUBBLE_WITH_FLAG = {
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
    dX : 340,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxBUBBLE_WITH_FLAG.drawImage(numbersBUBBLE_WITH_FLAG,nr1BUBBLE_WITH_FLAG.sX,nr1BUBBLE_WITH_FLAG.sY,this.sWidth,this.sHeight,nr1BUBBLE_WITH_FLAG.dX,nr1BUBBLE_WITH_FLAG.dY,
            this.dWidth,this.dHeight);
    },

    bubble_WITH_FLAGSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;
        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 850){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1550 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1450){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1950 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1850){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(2150 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2050){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =340;

            }
        }

    }
}
const nr2BUBBLE_WITH_FLAG = {
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

        ctxBUBBLE_WITH_FLAG.drawImage(numbersBUBBLE_WITH_FLAG,nr2BUBBLE_WITH_FLAG.sX,nr2BUBBLE_WITH_FLAG.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);

        // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //     this.bdWidth,this.bdHeight);



    },
    bubble_WITH_FLAGSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(550 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 450){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1150 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1050){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(2150 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 2050){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =180;

            }
        }


    }
}
const nr3BUBBLE_WITH_FLAG = {
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
        ctxBUBBLE_WITH_FLAG.drawImage(numbersBUBBLE_WITH_FLAG,nr3BUBBLE_WITH_FLAG.sX,nr3BUBBLE_WITH_FLAG.sY,this.sWidth,this.sHeight,nr3BUBBLE_WITH_FLAG.dX,nr3BUBBLE_WITH_FLAG.dY,
            this.dWidth,this.dHeight);
    },
    bubble_WITH_FLAGSort : function(){

    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(350 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 250){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1150 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1050){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1950 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1850){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =100;

            }
        }

    }
}
const nr4BUBBLE_WITH_FLAG = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxBUBBLE_WITH_FLAG.drawImage(numbersBUBBLE_WITH_FLAG,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(750 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 650){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1550 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1450){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =260;

            }
        }

    }
}
const nr9BUBBLE_WITH_FLAG = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,

    dX : 20,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxBUBBLE_WITH_FLAG.drawImage(numbersBUBBLE_WITH_FLAG,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(350 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 250){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(550 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 450){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(750 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 650){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(950 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 850){
                this.dX +=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =20;

            }
        }

    }
}

const lineBUBBLE_WITH_FLAG = {
    sX : 4,
    sY : 10,
    sWidth : 269-4,
    sHeight : 160-10,
    dY : 150,
    dX : 295,
    dWidth : 250,
    dHeight :220  ,
    draw : function(){
        ctxBUBBLE_WITH_FLAG.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    //frame can change the image of the images
    frame : 0,

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesBUBBLE_WITH_FLAG % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ||stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 950){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(1650 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1550){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }
            if(2050 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG > 1950){
                this.dX -=1.6*globalSpeedBUBBLE_WITH_FLAG;

            }

            //THE END OF SIMULATION
            if( framesBUBBLE_WITH_FLAG == 2599){
                this.dX =295;
                //  this.dY =150;

            }
        }


    }
}


//GET READY MESSAGE
const getReadyBUBBLE_WITH_FLAG = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady){
            ctxBUBBLE_WITH_FLAG.drawImage(pauseBUBBLE_WITH_FLAG,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverBUBBLE_WITH_FLAG = {

    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over ){
            ctxBUBBLE_WITH_FLAG.drawImage(click2startBUBBLE_WITH_FLAG,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW
function draw(){
    //background
    ctxBUBBLE_WITH_FLAG.fillStyle = "#70c5ce";
    ctxBUBBLE_WITH_FLAG.fillRect(0,0,cvsBUBBLE_WITH_FLAG.width,cvsBUBBLE_WITH_FLAG.height);

    //title of canvas
    ctxBUBBLE_WITH_FLAG.font = "20px Arial";
    ctxBUBBLE_WITH_FLAG.strokeText("Sortowanie  ",25,25);
    ctxBUBBLE_WITH_FLAG.strokeText("bąbelkowe ",25,50);
    ctxBUBBLE_WITH_FLAG.strokeText("ze znacznikiem! ",25,75);
    ctxBUBBLE_WITH_FLAG.strokeText("Ilość zmian:",25,100);
   // ctxBUBBLE_WITH_FLAG.strokeText("Flag = ",25,125);

    //draw function
    // bg.draw();
    // c2nBUBBLE_WITH_FLAG.draw();
    if(2300 > framesBUBBLE_WITH_FLAG && framesBUBBLE_WITH_FLAG >= 0){
        red_circle01.draw();
        red_circle02.draw();
        lineBUBBLE_WITH_FLAG.draw();
        bgRectangle.draw();
        flagBUBBLE_WITH_FLAG.draw();

    }
    nr1BUBBLE_WITH_FLAG.draw();
    nr2BUBBLE_WITH_FLAG.draw();
    nr3BUBBLE_WITH_FLAG.draw();
    nr4BUBBLE_WITH_FLAG.draw();
    nr9BUBBLE_WITH_FLAG.draw();
    bgSteps.draw();
    getReadyBUBBLE_WITH_FLAG.draw();
    gameOverBUBBLE_WITH_FLAG.draw();
}
//UPDATE
function update(){
    nr1BUBBLE_WITH_FLAG.update();
    nr2BUBBLE_WITH_FLAG.update();
    nr3BUBBLE_WITH_FLAG.update();
    nr4BUBBLE_WITH_FLAG.update();
    nr9BUBBLE_WITH_FLAG.update();
    // c2nBUBBLE_WITH_FLAG.update();
    lineBUBBLE_WITH_FLAG.update();
    bgRectangle.update();
    bgSteps.update();
    red_circle01.update();
    red_circle02.update();
    if(framesBUBBLE_WITH_FLAG == 2600){
        stateBUBBLE_WITH_FLAG.current = stateBUBBLE_WITH_FLAG.over;
    };


}
//LOOP
function loop(){
    update();
    draw();

    if (stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.over || stateBUBBLE_WITH_FLAG.current == stateBUBBLE_WITH_FLAG.getReady) {
    }else{
        framesBUBBLE_WITH_FLAG++;

    }


    requestAnimationFrame(loop);
}
loop();



