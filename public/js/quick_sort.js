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




//NUMBERS
const nr1 = {

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
    bsX : 40,
    bsY : 27,
    bsWidth : 80 - 35,
    bsHeight : 81 - 27,
    bdY : 70+15,
    bdX : 20+15,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctx.drawImage(numbers,nr1.sX,nr1.sY,this.sWidth,this.sHeight,nr1.dX,nr1.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
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
            //this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1150 > frames && frames > 1050){

                this.dY +=1.5*globalSpeed;
                this.dX -=4.8*globalSpeed;


            }

            //2ND STEP
            if(1700 > frames && frames > 1600){
                this.dY +=1.6*globalSpeed;
                this.dX -=1.5*globalSpeed;

            }


            //2ND STEP
            if(1850 > frames && frames > 1750){
                this.dY +=1.6*globalSpeed;
                this.bdY +=1.6*globalSpeed;
                //this.dX -=1.5*globalSpeed;

            }
            // //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =100;
            //
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
    dY : 70,
    dX : 180,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    //blue number
    bsX : 165,
    bsY : 27,
    bsWidth : 80 - 35,
    bsHeight : 81 - 27,
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

            ctx.drawImage(numbers,nr2.sX,nr2.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
        ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            this.bdWidth,this.bdHeight);
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
            //2ND STEP
            if(1350 > frames && frames > 1250){

                this.dY +=1.6*globalSpeed;
                this.dX -=1.3*globalSpeed;
                this.bdX -=1.3*globalSpeed;
                this.bdY +=1.6*globalSpeed;

            }

            // //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =180;
            //     this.bdX =195;
            // }
        }


    }
}
const nr3 = {

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
    bsX : 290,
    bsY : 27,
    bsWidth : 80 - 35,
    bsHeight : 81 - 27,
    bdY : 70+15,
    bdX : 20+15,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,

    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
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
            if(650 > frames && frames > 350){
                this.dX +=1.6*globalSpeed;
                this.dY +=globalSpeed/2;
                this.bdX +=1.6*globalSpeed;
                this.bdY +=globalSpeed/2;

            }



            // //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =100;
            //
            // }
        }

    }
}
const nr4 = {
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
    bsX : 415,
    bsY : 27,
    bsWidth : 80 - 35,
    bsHeight : 81 - 27,
    bdY : 70+15+75,
    bdX : 100+15+250,
    bdWidth : 100 - 54,
    bdHeight :100 - 54 ,
    //frame can change the image of the images
    frame : 0,

    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    piwot_draw : function(){
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
            if(850 > frames && frames > 700){
                this.dY +=globalSpeed;
                this.dX +=3.3*globalSpeed;
            }

            //2ND STEP
            if(1500 > frames && frames > 1400){
                this.dY +=1.6*globalSpeed;
              //  this.dX -=1.3*globalSpeed;
              //  this.bdX -=1.3*globalSpeed;
                this.bdY +=1.6*globalSpeed;
            }

            // //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =100;
            //
            // }
        }

    }
}
const nr9 = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dY : 70,
    dX : 260,
    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    //frame can change the image of the images
    frame : 0,


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
            //2ND STEP
            if(1600 > frames && frames > 1500){
                this.dY +=1.6*globalSpeed;
                //this.dX +=3.3*globalSpeed;

            }


            // //THE END OF SIMULATION
            // if( frames == 4999){
            //     this.dX =100;
            //
            // }
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

    //title of canvas
    ctx.font = "30px Arial";
    ctx.strokeText("Quick Sort!",225,50);

    //draw function
    bg.draw();
    //c2n.draw();

    nr1.draw();
    nr2.draw();
    nr3.draw();
    nr4.draw();
    nr9.draw();
    //line.draw();
    // nr3.piwot_draw();
    getReady.draw();
    gameOver.draw();


    //DRAWING ACTION FOR 'PIWOT' NUMBER
    if(state.current == state.getReady){}
    else{
        if(13650 > frames && frames > 150){
            nr3.piwot_draw();

        }
        if(13650 > frames && frames > 1200){
            nr2.piwot_draw();

        }
        if(13650 > frames && frames > 1350){
            nr4.piwot_draw();

        }
        if(13650 > frames && frames > 1700){
            nr1.piwot_draw();

        }
    }


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