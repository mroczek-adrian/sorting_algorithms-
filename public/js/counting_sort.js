// SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;
let globalSpeed = 0.5;


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
    dY : 155,
    dX : 420,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if (1150 > frames && frames > 1050) {

                this.dY += 1.5 * globalSpeed;
                this.dX -= 4.8 * globalSpeed;


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
    dY : 55,
    dX : 420,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,

    //frame can change the image of the images
    frame : 0,


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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if (1150 > frames && frames > 1050) {

                this.dY += 1.5 * globalSpeed;
                this.dX -= 4.8 * globalSpeed;


            }
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
    bdX : 35,
    bdWidth : 55,
    bdHeight :55 ,

    nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],


    //frame can change the image of the images
    frame : 0,

    draw : function(){
        if (state.current == state.getReady) {
        } else {

            if ( frames > 150) {
                let how_many_numbers_at_index0 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index0.bsX,how_many_numbers_at_index0.bsY,how_many_numbers_at_index0.bsWidth,how_many_numbers_at_index0.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if ( frames == 150) {



            }
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
    sWidth : 1037 - 25,
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
    dX : 420,
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

        if(state.current == state.getReady){
        }else {
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if (1150 > frames && frames > 1050) {

                this.dY += 1.5 * globalSpeed;
                this.dX -= 4.8 * globalSpeed;


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
    dX : 520,
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


        if(state.current == state.getReady){

        }else{
           // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > frames && frames > 850){
                this.dY +=1.5*globalSpeed;

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




        if(state.current == state.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(650 > frames && frames > 350){
                this.dX +=1.6*globalSpeed;
                this.dY +=globalSpeed/2;
                this.bdX +=1.6*globalSpeed;
                this.bdY +=globalSpeed/2;

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
    dX : 120,
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




        if(state.current == state.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(850 > frames && frames > 700){
                this.dY +=globalSpeed;
                this.dX +=3.3*globalSpeed;
            }


        }

    }
}
const nr4_b = {
    //green number
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 55,
    dX : 220,
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




        if(state.current == state.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(850 > frames && frames > 700){
                this.dY +=globalSpeed;
                this.dX +=3.3*globalSpeed;
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
    dX : 320,
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




        if(state.current == state.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


            }
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > frames && frames > 950){

                this.dY +=1.5*globalSpeed;
                this.dX +=3.3*globalSpeed;


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

    //DRAWING SORTED NUMBERS
    nr1.draw();nr2.draw();nr3.draw();nr4_a.draw();nr4_b.draw();nr5.draw();

    //DRAWING STATE
    getReady.draw();gameOver.draw();

    //DRAWING 1ST LINE OF INDEX
    index00.draw();index01.draw(); index02.draw(); index03.draw(); index04.draw(); index05.draw();

    //DRAWING 2ND LINE OF INDEX
    index10.draw();index11.draw(); index12.draw(); index13.draw(); index14.draw(); index15.draw();

    //DRAWING 3ND LINE OF INDEX
    index20.draw();index21.draw(); index22.draw(); index23.draw(); index24.draw(); index25.draw();

    //DRAWING ACTION FOR 'PIWOT' NUMBER
    if(state.current == state.getReady){}
    else{
        if(13650 > frames && frames > 10){
            red_circle01.draw();
            red_circle02.draw();
        }
    }


}
//UPDATE
function update(){
    nr1.update();
    nr2.update();
    nr3.update();
    nr4_a.update();
    nr4_b.update();
    nr5.update();
    how_many_numbers_at_index0.update();
    //c2n.update();
    //line.update();
    if(frames == 2300){
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