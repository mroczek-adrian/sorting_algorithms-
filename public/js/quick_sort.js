// SELECT CVS
const cvsQUICK = document.getElementById("birdQUICK");
const ctxQUICK = cvsQUICK.getContext("2d");

// GAME VARS AND CONSTS
let framesQUICK = 0;
let globalSpeedQUICK = 0.5;


//IMAGE OF THE BIRD
const spriteQUICK=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersQUICK=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersQUICK=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersQUICK=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startQUICK=document.getElementById("click2start");


//GAME STATE
const stateQUICK = {
    current : 0 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsQUICK.addEventListener("click",function(evt){
   switch(stateQUICK.current){
       case stateQUICK.getReady:
           stateQUICK.current = stateQUICK.game;
           framesQUICK = 0;
           break;
       case stateQUICK.game:

           //HERE I WILL WRITE THE ALGORITHM
         //  bird.flap();
           nr1QUICK.bubbleSort();
           break;
       case stateQUICK.over:
           stateQUICK.current = stateQUICK.getReady;
           break;
   }
});


//BACKGROUD
const bgQUICK = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : cvsQUICK.height - 226,

    draw : function(){
        ctxQUICK.drawImage(spriteQUICK,this.sX,this.sY,this.w,this.h,this.x,this.y,
            this.w,this.h);
    }
}




//NUMBERS
const nr1QUICK = {

    //green number
    sX : 24,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 340,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 15,
    bsY : 11,
    bsWidth : 107 - 15,
    bsHeight : 101 - 11,
    bdY : 70+15+155,
    bdX : 20+15+10,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxQUICK.drawImage(numbersQUICK,nr1QUICK.sX,nr1QUICK.sY,this.sWidth,this.sHeight,nr1QUICK.dX,nr1QUICK.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },

    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
        //this.frame = this.frame % this.animation.length;

        if(stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1150 > framesQUICK && framesQUICK > 1050){

                this.dY +=1.5*globalSpeedQUICK;
                this.dX -=4.8*globalSpeedQUICK;


            }

            //2ND STEP
            if(1700 > framesQUICK && framesQUICK > 1600){
                this.dY +=1.6*globalSpeedQUICK;
                this.dX -=1.5*globalSpeedQUICK;

            }


            //3ND STEP
            if(1850 > framesQUICK && framesQUICK > 1750){
                this.dY +=1.6*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=3.2*globalSpeedQUICK;
                this.bdY -=3.2*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 24;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 340;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+155;
                this.bdX = 30+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }

    }
}
const nr2QUICK = {

    //green number
    sX : 230,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 180,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 140,
    bsY : 11,
    bsWidth : 234 - 140,
    bsHeight : 104 - 11,
    bdY : 70+15+75,
    bdX : 180+15,
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

            ctxQUICK.drawImage(numbersQUICK,nr2QUICK.sX,nr2QUICK.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },
    bubbleSort : function(){

    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateQUICK.current == stateQUICK.getReady){

        }else{
           // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(950 > framesQUICK && framesQUICK > 850){
                this.dY +=1.5*globalSpeedQUICK;

            }
            //2ND STEP
            if(1350 > framesQUICK && framesQUICK > 1250){

                this.dY +=1.6*globalSpeedQUICK;
                this.dX -=1.3*globalSpeedQUICK;
                this.bdX -=1.3*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;

            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=1.6*globalSpeedQUICK;
                this.bdY -=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 230;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 180;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+75;
                this.bdX = 180+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }


    }
}
const nr3QUICK = {

    //green number
    sX : 430,
    sY : 24,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 20,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 266,
    bsY : 11,
    bsWidth : 360 - 266,
    bsHeight : 99 - 11,
    bdY : 70+15,
    bdX : 20+15,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxQUICK.drawImage(numbersQUICK,nr3QUICK.sX,nr3QUICK.sY,this.sWidth,this.sHeight,nr3QUICK.dX,nr3QUICK.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },





    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(650 > framesQUICK && framesQUICK > 350){
                this.dX +=1.6*globalSpeedQUICK;
                this.dY +=globalSpeedQUICK/2;
                this.bdX +=1.6*globalSpeedQUICK;
                this.bdY +=globalSpeedQUICK/2;

            }



            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 430;
                this.sY = 24;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 20;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15;
                this.bdX = 20+15;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;




            }
        }

    }
}
const nr4QUICK = {
    //green number
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 100,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 387,
    bsY : 11,
    bsWidth : 485 - 387,
    bsHeight : 100 - 11,
    bdY : 70+15+75,
    bdX : 100+15+250,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxQUICK.drawImage(numbersQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(850 > framesQUICK && framesQUICK > 700){
                this.dY +=globalSpeedQUICK;
                this.dX +=3.3*globalSpeedQUICK;
            }

            //2ND STEP
            if(1500 > framesQUICK && framesQUICK > 1400){
                this.dY +=1.6*globalSpeedQUICK;
              //  this.dX -=1.3*globalSpeed;
              //  this.bdX -=1.3*globalSpeed;
                this.bdY +=1.6*globalSpeedQUICK;
            }
            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=1.6*globalSpeedQUICK;
                this.bdY -=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 24;
                this.sY = 215;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 100;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+75;
                this.bdX = 100+15+250;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;


            }
        }

    }
}
const nr9QUICK = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,


    //blue number
    bsX : 15,
    bsY : 260,
    bsWidth : 110 - 15,
    bsHeight : 350 - 260,
    bdY : 70+15+155,
    bdX : 20+15+10+400-7,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctxQUICK.drawImage(numbersQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },

    piwot_draw : function(){
        ctxQUICK.drawImage(blue_numbersQUICK,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
    },



    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesQUICK % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateQUICK.current == stateQUICK.getReady){
        }else{
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1050 > framesQUICK && framesQUICK > 950){

                this.dY +=1.5*globalSpeedQUICK;
                this.dX +=3.3*globalSpeedQUICK;


            }
            //2ND STEP
            if(1600 > framesQUICK && framesQUICK > 1500){
                this.dY +=1.6*globalSpeedQUICK;
                //this.dX +=3.3*globalSpeed;

            }
            //3ND STEP
            if(2050 > framesQUICK && framesQUICK > 1950){
                this.dY +=1.6*globalSpeedQUICK;
                this.bdY +=1.6*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }

            //4TH STEP
            if(2200 > framesQUICK && framesQUICK > 2100){
                this.dY -=3.2*globalSpeedQUICK;
                this.bdY -=3.2*globalSpeedQUICK;
                //this.dX -=1.5*globalSpeed;

            }
            //THE END OF SIMULATION
            if( framesQUICK == 2299){

                this.sX = 430;
                this.sY = 400;
                this.sWidth = 168 - 24;
                this.sHeight = 168 - 24;
                this.dY = 70;
                this.dX = 260;
                this.dWidth = 100 - 24;
                this.dHeight =100 - 24 ;
                //blue number

                this.bdY = 70+15+155;
                this.bdX = 20+15+10+400-7;
                this.bdWidth = 100 - 54;
                this.bdHeight =100 - 54 ;
            }
        }

    }
}



//GET READY MESSAGE
const getReadyQUICK = {
    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateQUICK.current == stateQUICK.getReady){
            ctxQUICK.drawImage(click2startQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverQUICK = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 200,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateQUICK.current == stateQUICK.over){
            ctxQUICK.drawImage(numbersQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW
function draw(){
    //background
    ctxQUICK.fillStyle = "#70c5ce";
    ctxQUICK.fillRect(0,0,cvsQUICK.width,cvsQUICK.height);

    //title of canvas
    ctxQUICK.font = "30px Arial";
    ctxQUICK.strokeText("Quick Sort!",225,50);

    //draw function
    bgQUICK.draw();
    //c2n.draw();

    nr1QUICK.draw();
    nr2QUICK.draw();
    nr3QUICK.draw();
    nr4QUICK.draw();
    nr9QUICK.draw();
    //line.draw();
    // nr3.piwot_draw();
    getReadyQUICK.draw();
    gameOverQUICK.draw();


    //DRAWING ACTION FOR 'PIWOT' NUMBER
    if(stateQUICK.current == stateQUICK.getReady){}
    else{
        if(13650 > framesQUICK && framesQUICK > 150){
            nr3QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1200){
            nr2QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1350){
            nr4QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1700){
            nr1QUICK.piwot_draw();

        }
        if(13650 > framesQUICK && framesQUICK > 1850){
            nr9QUICK.piwot_draw();

        }
    }


}
//UPDATE
function update(){
    nr1QUICK.update();
    nr2QUICK.update();
    nr3QUICK.update();
    nr4QUICK.update();
    nr9QUICK.update();
    //c2n.update();
    //line.update();
    if(framesQUICK == 2300){
        stateQUICK.current = stateQUICK.getReady;
    };


}
//LOOP
function loop(){
    update();
    draw();
    framesQUICK++;
    requestAnimationFrame(loop);
}
loop();