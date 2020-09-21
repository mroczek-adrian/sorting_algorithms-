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
//IMAGE OF THE SQUARE AND TRAINGLE
const square_triangle=document.getElementById("square-traingle");

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

            if(350 > frames && frames > 250){
                this.dX +=2*globalSpeed;
               // this.dY -=6.5*globalSpeed;
            }

            if(500 > frames && frames > 400){
                this.dX +=2*globalSpeed;
                // this.dY -=6.5*globalSpeed;
            }
            if(650 > frames && frames > 550){
                this.dX +=2*globalSpeed;
                // this.dY -=6.5*globalSpeed;
            }
            if(800 > frames && frames > 700){
                this.dX +=2*globalSpeed;
                // this.dY -=6.5*globalSpeed;
            }
            //SWAP
            if(950 > frames && frames > 850){
                this.dX -=6.6*globalSpeed;
                 this.dY +=6*globalSpeed;
            }
            if(1150 > frames && frames > 1100){
                this.dX -=4.4*globalSpeed;
                this.dY +=4.2*globalSpeed;

            }
            if(1350 > frames && frames > 1300){
                this.dX +=9*globalSpeed;

            }

        }


    }
}
//RIGHT CIRCLE
const red_circle02 = {

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

            if(1150 > frames && frames > 1100){
                this.dX -=4.8*globalSpeed;
                this.dY +=4.2*globalSpeed;

            }
            if(1350 > frames && frames > 1300){
                this.dX +=4.8*globalSpeed;
                this.dY -=4.2*globalSpeed;
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
    dY : 55,
    dX : 195,
    dWidth : 60,
    dHeight :60 ,

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

            if (1200 > frames && frames > 1150) {

                //this.dY -= 4 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }
            if (1400 > frames && frames > 1350) {

                //this.dY -= 4 * globalSpeed;
                this.dX -= 4 * globalSpeed;


            }


        }
    }
}
//BROWN CIRCLE
const brown_circle02 = {

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


            if (1200 > frames && frames > 1150) {

                //this.dY -= 4 * globalSpeed;
                this.dX += 8 * globalSpeed;


            }
            if (1400 > frames && frames > 1350) {

                //this.dY -= 4 * globalSpeed;
                this.dX += 4 * globalSpeed;


            }


        }
    }
}
//TREE AND BRANCHES
const branch01left = {

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
        ctx.drawImage(square_triangle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    draw2 : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(square_triangle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX2,this.dY2,
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
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady){
        }else {
            //BACK
            // if(850 > frames && frames > 800){
            //     this.dX +=8*globalSpeed;
            //     this.dY -=6.5*globalSpeed;
            //
            // }


        }


    }
}
const branch01right = {

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
        ctx.drawImage(square_triangle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    draw2 : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(square_triangle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX2,this.dY2,
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
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady){
        }else {
            //BACK
            // if(850 > frames && frames > 800){
            //     this.dX +=8*globalSpeed;
            //     this.dY -=6.5*globalSpeed;
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


//NUMBERS
const nr1 = {

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
        ctx.drawImage(numbers,nr1.sX,nr1.sY,this.sWidth,this.sHeight,nr1.dX,nr1.dY,
            this.dWidth,this.dHeight);
    },

    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr1.sX,nr1.sY,this.sWidth,this.sHeight,nr1.tdX,nr1.tdY,
            this.tdWidth,this.tdHeight);
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

            //REMOVE THE NODE
            if( frames >1400 && frames < 1450){
                this.dX -=16*globalSpeed;
               // this.tdY =160;
            }
            if( frames ==1450){
                this.tdX =300;
                this.tdY =160;
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
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);



    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr2.sX,nr2.sY,this.sWidth,this.sHeight,nr2.tdX,nr2.tdY,
            this.tdWidth,this.tdHeight);
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
const nr3 = {


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
        ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.tdX,nr3.tdY,
            this.tdWidth,this.tdHeight);
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
            //SWAP
            if( frames ==1000){
                this.tdX =240;
                this.tdY =210;

            }
            //SWAP IN TABLE
            if( frames >1050 && frames <=1100){
                    this.dX +=4*globalSpeed;
                  //  this.dY +=6.5*globalSpeed;

            }
            //SWAP
            if( frames ==1200){
                this.tdX =185;
                this.tdY =260;

            }
            //SWAP IN TABLE
            if( frames >1250 && frames <=1300){
                this.dX +=7.7*globalSpeed;
                //  this.dY +=6.5*globalSpeed;

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
    //tree
    tdY : 260,
    tdX : 185,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.tdX,this.tdY,
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
            //SWAP
            if( frames ==1200){
                this.tdX =240;
                this.tdY =210;

            }
            //SWAP IN TABLE
            if( frames >1250 && frames <=1300){
                this.dX -=8*globalSpeed;
                //  this.dY +=6.5*globalSpeed;

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
    dX : 250,
    //tree
    tdY : 210,
    tdX : 240,
    tdWidth : 50,
    tdHeight :50 ,
    dWidth : 50,
    dHeight :50 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    drawTree : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr9.sX,nr9.sY,this.sWidth,this.sHeight,nr9.tdX,nr9.tdY,
            this.tdWidth,this.tdHeight);
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
            //SWAP
            if( frames ==1000){
                this.tdX =300;
                this.tdY =160;

            }
            //SWAP IN TABLE
            if( frames >1050 && frames <=1100){
                this.dX -=4*globalSpeed;
                //  this.dY +=6.5*globalSpeed;

            }
            //REMOVE THE NODE
            if( frames >1400 && frames < 1450){
                this.dX +=16*globalSpeed;
                // this.tdY =160;
            }
            if( frames ==1450){
                this.tdX =295;
                this.tdY =260;
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

        if( frames > 200 && frames <=25000){
            red_circle01.draw();

        }
        if( frames > 200 && frames <=350){
            nr3.drawTree();

        }
        if( frames > 350 && frames <=500){
            branch01left.draw();
            nr3.drawTree();
            nr9.drawTree();
        }
        if( frames > 500 && frames <=650){
            branch01left.draw();
            branch01right.draw();
            nr3.drawTree();
            nr9.drawTree();
            nr2.drawTree();
        }
        if( frames > 650 && frames <=800){
            branch01left.draw();branch01left.draw2();
            branch01right.draw();
            nr3.drawTree();
            nr9.drawTree();
            nr2.drawTree();
            nr4.drawTree();
        }
        if( frames > 800 && frames <=65000){
            branch01left.draw();branch01left.draw2();
            branch01right.draw();branch01right.draw2()
            nr3.drawTree();
            nr9.drawTree();
            nr2.drawTree();
            nr4.drawTree();
            nr1.drawTree();
        }
        if( frames > 950 && frames <=65000){
             red_circle02.draw();
        }
        if( frames > 1000 && frames <=65000){
            brown_circle01.draw();
            brown_circle02.draw();
        }


    }

    //title of canvas
    ctx.font = "30px Arial";
    ctx.strokeText("Heap Sort!",225,50);

    //draw function
   // bg.draw();
    //c2n.draw();

    nr1.draw();
    nr2.draw();
    nr3.draw();
    nr4.draw();
    nr9.draw();

    //line.draw();
    getReady.draw();
    gameOver.draw();
}
//UPDATE
function update(){
    branch01left.update();
    nr1.update();
    nr2.update();
    nr3.update();
    nr4.update();
    nr9.update();
    red_circle01.update();
    red_circle02.update();
    brown_circle01.update();
    brown_circle02.update();
    //c2n.update();
    //line.update();
    if(frames == 26000){
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