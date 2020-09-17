// SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;
let globalSpeed = 0.25;


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

//GAME STATE
const state = {
    current : 0 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvs.addEventListener("click",function(evt){
   switch(state.current){
       case state.getReady:
           state.current = state.game;
           frames = 0;
           break;
       case state.game:

           //HERE I WILL WRITE THE ALGORITHM
         //  bird.flap();
           nr1.bubbleSort();
           break;
       case state.over:
           state.current = state.getReady;
           break;
   }
});

//CIRCLE
//RED CIRCLE
const red_circle01 = {

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
            ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            //1ST STEM
            if (350 > frames && frames > 300) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }


            //THE END OF SIMULATION
            // if( frames == 2599){
            //
            //     this.sX = 310;
            //     this.sY = 90;
            //     this.sWidth = 490 - 310;
            //     this.sHeight = 270 - 90;
            //     this.dY = 55;
            //     this.dX = 17;
            //     this.dWidth = 100 - 24;
            //     this.dHeight =100 - 24 ;
            //
            //
            //
            // }

        }


    }
}
const red_circle02 = {

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
            ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            //1ST STEM
            if (350 > frames && frames > 300) {

                //this.dY += 1.5 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }


            //THE END OF SIMULATION
            // if( frames == 2599){
            //
            //     this.sX = 310;
            //     this.sY = 90;
            //     this.sWidth = 490 - 310;
            //     this.sHeight = 270 - 90;
            //     this.dY = 55;
            //     this.dX = 17;
            //     this.dWidth = 100 - 24;
            //     this.dHeight =100 - 24 ;
            //
            //
            //
            // }

        }


    }
}
//BACKGROUND
//TOP TABLE OF NUMBERS
const table_top = {

    sX : 25,
    sY : 40,
    sWidth : 876 - 25,
    sHeight : 222 - 40,
    dY : 60,
    dX : 200,
    dWidth : 250,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//2nd TABLE OF NUMBERS
const table_2nd_a = {

    sX : 25,
    sY : 40,
    sWidth : 545 - 25,
    sHeight : 222 - 40,
    dY : 140,
    dX : 100,
    dWidth : 150,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//2nd TABLE OF NUMBERS
const table_2nd_b = {

    sX : 25,
    sY : 40,
    sWidth : 380 - 25,
    sHeight : 222 - 40,
    dY : 140,
    dX : 450,
    dWidth : 100,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//3rd TABLE OF NUMBERS
const table_3rd_a = {

    sX : 25,
    sY : 40,
    sWidth : 380 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 60,
    dWidth : 100,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_b = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 220,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_c = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 420,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_3rd_d = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 220,
    dX : 520,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//table level 4
const table_4th_a = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 300,
    dX : 20,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
const table_4th_b = {

    sX : 25,
    sY : 40,
    sWidth : 213 - 25,
    sHeight : 222 - 40,
    dY : 300,
    dX : 120,
    dWidth : 50,
    dHeight :50  ,

    draw : function(){
        ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    }
}
//INDEX OF THE TABLE level 1
const index00 = {
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
    bdY : 110,
    bdX : 265,
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
    bdY : 110,
    bdX : 315,
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
    bdY : 110,
    bdX : 365,
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
    bdY : 110,
    bdX : 415,
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
//index - level 2
const index10a = {
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
const index11a = {
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
const index12a = {
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
const index10b = {
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
const index11b = {
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
//index  - level 3
const index20a = {
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
const index21a = {
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
const index20b = {
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
const index20c = {
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
const index20d = {
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
//index -level 4
const index30a = {
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
const index30b = {
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

//NUMBERS
const nr1 = {


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
        if(state.current == state.getReady){

        }else{

            if(250 > frames && frames > 200){
                this.dX -=8*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(400 > frames && frames > 350){
                this.dX -=3.5*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(550 > frames && frames > 500){
                this.dX -=3.5*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =180;
            //     this.bdX =195;
            // }
        }
    }
}
const nr2 = {

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
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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


        if(state.current == state.getReady){

        }else{
            if(250 > frames && frames > 200){
                this.dX -=8.5*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(400 > frames && frames > 350){
                this.dX +=2*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
        }


    }
}
const nr3 = {


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
        ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
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




        if(state.current == state.getReady){
        }else{
            if(250 > frames && frames > 200){
                this.dX -=8.2*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(400 > frames && frames > 350){
                this.dX -=3.5*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(550 > frames && frames > 500){
                this.dX +=1.5*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
        }

    }
}
const nr4 = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 350,
    dWidth : 50,
    dHeight :50 ,
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




        if(state.current == state.getReady){
        }else{
            if(250 > frames && frames > 200){
                this.dX +=8*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(1400 > frames && frames > 1350){
                this.dX -=2*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
        }

    }
}
const nr9 = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 60,
    dX : 400,
    dWidth : 50,
    dHeight :50 ,
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




        if(state.current == state.getReady){
        }else{
            if(250 > frames && frames > 200){
                this.dX +=8*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
            if(1400 > frames && frames > 1350){
                this.dX +=2*globalSpeed;
                this.dY +=6.5*globalSpeed;

            }
        }

    }
}



//GET READY MESSAGE
const getReady = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(state.current == state.getReady){
            ctx.drawImage(click2start,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOver = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(state.current == state.over){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW
function draw(){
    //background
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0,0,cvs.width,cvs.height);
    table_top.draw();
    index00.draw();index01.draw();index02.draw();index03.draw();index04.draw();




    //DRAWING ACTION FOR 'PIWOT' NUMBER
    if(state.current == state.getReady){}
    else{
        if( frames > 100 && frames <=20000){
            table_2nd_a.draw();
            index10a.draw();index11a.draw();index12a.draw();
            table_2nd_b.draw();
            index10b.draw();index11b.draw();

        }
        if( frames > 300 && frames <=20000){
            table_3rd_a.draw();
            index20a.draw();    index21a.draw();
            table_3rd_b.draw();
            index20b.draw();


        }
        if( frames > 450 && frames <=20000){
            table_4th_a.draw();
            index30a.draw();
            table_4th_b.draw();
            index30b.draw();

        }

        if( frames > 1450 && frames <=20000){
            table_3rd_c.draw();
            index20c.draw();
            table_3rd_d.draw();
            index20d.draw();

        }
    }

    //title of canvas
    ctx.font = "30px Arial";
    ctx.strokeText("Merging Sort!",225,50);

    //draw function
   // bg.draw();
    //c2n.draw();

    nr1.draw();
    nr2.draw();
    nr3.draw();
    nr4.draw();
    nr9.draw();
    if( frames > 550 && frames <=20000){
        red_circle01.draw();
        red_circle02.draw();

    }

    //line.draw();
    getReady.draw();
    gameOver.draw();
}
//UPDATE
function update(){
    nr1.update();
    nr2.update();
    nr3.update();
    nr4.update();
    nr9.update();
    //c2n.update();
    //line.update();
    if(frames == 5000){
        state.current = state.getReady;
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