// SELECT CVSMERGE
const cvsMERGE = document.getElementById("birdMERGE");
const ctxMERGE = cvsMERGE.getContext("2d");

// GAME VARS AND CONSTS
let framesMERGE = 0;
let globalSpeedMERGE = 0.25;
let framesRememberMERGE=0;

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
//GAME STATE
const stateMERGE = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsMERGE.addEventListener("click",function(evt){
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
//LOOP
function loop(){
    updateMERGE();
    drawMERGE();

    if(stateMERGE.current == stateMERGE.over ||stateMERGE.current == stateMERGE.getReady){
    }else {
        framesMERGE++;
    }
    requestAnimationFrame(loop);
}
loop();