






    var x, text;
    // BUBBLE CVS
    const cvsBUBBLE = document.getElementById("birdBUBBLE");
    cvsBUBBLE.style.display = "block";
    // if (cvsBUBBLE.style.display === "none") {
    //     cvsBUBBLE.style.display = "block";
    // } else {
    //     cvsBUBBLE.style.display = "none";
    // }
    const ctxBUBBLE = cvsBUBBLE.getContext("2d");
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
    let framesBUBBLE = 0;
    let globalSpeedBUBBLE = 0.5;
    let framesRememberBUBBLE=0;

//IMAGE OF THE BIRD
    const spriteBUBBLE=document.getElementById("image");
//IMAGE OF NUMBERS
    const numbersBUBBLE=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
    const blue_numbersBUBBLE=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
    const compare2numbersBUBBLE=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
    const click2startBUBBLE=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
    const pauseBUBBLE=document.getElementById("pause");
    const red_circle=document.getElementById("red_circle");
    const restartBUBBLE = document.getElementById("img4");
//GAME STATE
    const stateBUBBLE = {
        current : 2 ,
        getReady : 0,
        game : 1,
        over : 2
    }


//CONTROL THE GAME
    cvsBUBBLE.addEventListener("click",function(evt){
        switch(stateBUBBLE.current){
            case stateBUBBLE.getReady:
                stateBUBBLE.current = stateBUBBLE.game;
                framesBUBBLE = framesRememberBUBBLE;
                framesRememberBUBBLE=framesBUBBLE;
                break;
            case stateBUBBLE.game:
                stateBUBBLE.current = stateBUBBLE.getReady;
                framesRememberBUBBLE=framesBUBBLE;
                //HERE I WILL WRITE THE ALGORITHM
                //  bird.flap();
                nr1BUBBLE.bubbleSort();
                break;
            case stateBUBBLE.over:
                stateBUBBLE.current = stateBUBBLE.game;
                framesBUBBLE = 0;
                break;
        }
    });
    restartBUBBLE.addEventListener("click",function(evt){
        switch(stateBUBBLE.current){
            case stateBUBBLE.getReady:
            case stateBUBBLE.game:
                stateBUBBLE.current = 2;
                red_circle01.dX=10;
                red_circle02.dX=90;
                // bgRectangle.dX =185;
               // bgRectangle.dY =5;
                // bgRectangle.dHeight =30;
                // red_circle01.dX =10;
                // red_circle01.dY =190;
                //brown_circle01.dX =5;
                //brown_circle01.dY =265;
                nr1BUBBLE.dX =340;
                //nr1BUBBLE.dY =200;
                nr2BUBBLE.dX =180;
                //   nr2BUBBLE.dY =200;
                nr3BUBBLE.dX =100;
                //  nr3BUBBLE.dY =200;
                nr4BUBBLE.dX =260;
                //  nr4BUBBLE.dY =200;
                nr9BUBBLE.dX =20;
                //  nr9BUBBLE.dY =200;
                lineBUBBLE.dX =310;
                bgRectangle.dY=5;




                framesBUBBLE = 0;


                break;
        }
    });
    const bgRectangle = {

        sX : 33,
        sY : 33,
        sWidth : 670-33,
        sHeight : 270-33,
        dY : 2,
        dX : 185,
        dWidth : 420,
        dHeight :75  ,

        draw : function(){
            ctxBUBBLE.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // go to 2nd

                if(1000 > framesBUBBLE && framesBUBBLE > 950){
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY += 2.8*globalSpeedBUBBLE;
                }
                if(1100 > framesBUBBLE && framesBUBBLE > 1050) {
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY -= 2.8 * globalSpeedBUBBLE;
                }
                if(1600 > framesBUBBLE && framesBUBBLE > 1550) {
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY += 2.8 * globalSpeedBUBBLE;
                }
                if(1700 > framesBUBBLE && framesBUBBLE > 1650) {
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY -= 2.8 * globalSpeedBUBBLE;
                }
                if(2000 > framesBUBBLE && framesBUBBLE > 1950){
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY += 2.8*globalSpeedBUBBLE;
                }
                if(2100 > framesBUBBLE && framesBUBBLE > 2050){
                    //this.dHeight +=2*globalSpeedBUBBLE;
                    this.dY -= 2.8*globalSpeedBUBBLE;
                }
                // // go to 3rd
                // if(300 > framesBUBBLE && framesBUBBLE > 250){
                //     this.dHeight -=0.5*globalSpeedBUBBLE;
                //     this.dY +=2.8* globalSpeedBUBBLE;
                // }  // go to 1rd
                // if(550 > framesBUBBLE && framesBUBBLE > 500){
                //     this.dY -=3.8* globalSpeedBUBBLE;
                //     this.dHeight -=1.5*globalSpeedBUBBLE;
                // }
                // if(700 > framesBUBBLE && framesBUBBLE > 650){
                //     this.dHeight +=2*globalSpeedBUBBLE;
                //     this.dY += globalSpeedBUBBLE;
                //
                // }
                // if(800 > framesBUBBLE && framesBUBBLE > 750){
                //     this.dHeight -=0.5*globalSpeedBUBBLE;
                //     this.dY +=2.8* globalSpeedBUBBLE;
                // }
                // if(1600 > framesBUBBLE && framesBUBBLE > 1550){
                //     this.dY -=3.8* globalSpeedBUBBLE;
                //     this.dHeight -=1.5*globalSpeedBUBBLE;
                //
                // }
                // if(1750 > framesBUBBLE && framesBUBBLE > 1700){
                //     this.dHeight +=2*globalSpeedBUBBLE;
                //     this.dY += globalSpeedBUBBLE;
                //
                // }
                // if(2000 > framesBUBBLE && framesBUBBLE > 1950){
                //     this.dHeight -=0.5*globalSpeedBUBBLE;
                //     this.dY +=2.8* globalSpeedBUBBLE;
                // }
                // if(2800 > framesBUBBLE && framesBUBBLE > 2750){
                //     this.dY -=3.8* globalSpeedBUBBLE;
                //     this.dHeight -=1.5*globalSpeedBUBBLE;
                // }
                // if(2900 > framesBUBBLE && framesBUBBLE > 2850){
                //     this.dHeight +=2*globalSpeedBUBBLE;
                //     this.dY += globalSpeedBUBBLE;
                // }
                // if(3200 > framesBUBBLE && framesBUBBLE > 3150){
                //     this.dHeight -=0.5*globalSpeedBUBBLE;
                //     this.dY +=2.8* globalSpeedBUBBLE;
                // }
                // if(1200 > framesBUBBLE && framesBUBBLE > 850){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // if(1800 > framesBUBBLE && framesBUBBLE > 1450){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( framesBUBBLE == 2050){
                //     this.dX =50;
                // }
                // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( framesBUBBLE == 3500){
                //     this.dX =50;
                // }
                // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(framesBUBBLE == 4250){
                //     this.dX =50;
                // }
                // //finish
                if(framesBUBBLE==2599){
                    //this.dX =185;
                    this.dY =5;
                    //this.dHeight =30;

                }
            }


        }
    }
    const bgSteps = {

        sX : 23,
        sY : 26,
        sWidth :650 -23,
        sHeight : 176-26,
        dY : 10,
        dX : 200,
        dWidth : 400,
        dHeight :130  ,
        draw : function(){

            ctxBUBBLE.drawImage(img2,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                // if(600 > framesBUBBLE && framesBUBBLE > 250){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // if(1200 > framesBUBBLE && framesBUBBLE > 850){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // if(1800 > framesBUBBLE && framesBUBBLE > 1450){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( framesBUBBLE == 2050){
                //     this.dX =50;
                // }
                // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( framesBUBBLE == 3500){
                //     this.dX =50;
                // }
                // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                //     this.dX +=globalSpeedBUBBLE;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(framesBUBBLE == 4250){
                //     this.dX =50;
                // }
                // //finish
                // if(framesBUBBLE==2599){
                //     this.dX =50;
                // }
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
            ctxBUBBLE.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(450 > framesBUBBLE && framesBUBBLE > 350){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(650 > framesBUBBLE && framesBUBBLE > 550){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(850 > framesBUBBLE && framesBUBBLE > 750){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if(1050 > framesBUBBLE && framesBUBBLE > 950){
                    this.dX -=4.8*globalSpeedBUBBLE;
                }
                if(1250 > framesBUBBLE && framesBUBBLE > 1150){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(1450 > framesBUBBLE && framesBUBBLE > 1350){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if(1650 > framesBUBBLE && framesBUBBLE > 1550){
                    this.dX -=3.2*globalSpeedBUBBLE;
                }
                if(1850 > framesBUBBLE && framesBUBBLE > 1750){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(2050 > framesBUBBLE && framesBUBBLE > 1950){
                    this.dX -=1.6*globalSpeedBUBBLE;
                }
                //finish
                if(framesBUBBLE==2498){
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
            ctxBUBBLE.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(450 > framesBUBBLE && framesBUBBLE > 350){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(650 > framesBUBBLE && framesBUBBLE > 550){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(850 > framesBUBBLE && framesBUBBLE > 750){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if(1050 > framesBUBBLE && framesBUBBLE > 950){
                    this.dX -=4.8*globalSpeedBUBBLE;
                }
                if(1250 > framesBUBBLE && framesBUBBLE > 1150){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                if(1450 > framesBUBBLE && framesBUBBLE > 1350){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if(1650 > framesBUBBLE && framesBUBBLE > 1550){
                    this.dX -=3.2*globalSpeedBUBBLE;
                }
                if(1850 > framesBUBBLE && framesBUBBLE > 1750){
                    this.dX +=1.6*globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(2050 > framesBUBBLE && framesBUBBLE > 1950){
                    this.dX -=1.6*globalSpeedBUBBLE;
                }
                //finish
                if(framesBUBBLE==2498){
                    this.dX =90;
                }
            }

        }
    }
//BACKGROUD
    const bgBUBBLE = {
        sX : 0,
        sY : 0,
        w : 275,
        h : 226,
        x : 0,
        y : cvsBUBBLE.height - 226,

        draw : function(){
            ctxBUBBLE.drawImage(spriteBUBBLE,this.sX,this.sY,this.w,this.h,this.x,this.y,
                this.w,this.h);
        }
    }
//COMPARE 2 NUMBERS
    const c2nBUBBLE = {

        sX : 328,
        sY : 200,
        sWidth : 510-328,
        sHeight : 300-200,
        dY : 280,
        dX : 50,
        dWidth : 100,
        dHeight :50  ,
        draw : function(){

            ctxBUBBLE.drawImage(compare2numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesBUBBLE && framesBUBBLE > 250){
                    this.dX +=globalSpeedBUBBLE;
                }
                if(1200 > framesBUBBLE && framesBUBBLE > 850){
                    this.dX +=globalSpeedBUBBLE;
                }
                if(1800 > framesBUBBLE && framesBUBBLE > 1450){
                    this.dX +=globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesBUBBLE == 2050){
                    this.dX =50;
                }
                if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    this.dX +=globalSpeedBUBBLE;
                }
                if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    this.dX +=globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesBUBBLE == 3500){
                    this.dX =50;
                }
                if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    this.dX +=globalSpeedBUBBLE;
                }
                //COMPARISON VALUE OF NUMBERS-4th run

                //finish
                if(framesBUBBLE==2599){
                    this.dX =50;
                }
            }


        }
    }



//NUMBERS
    const nr1BUBBLE = {
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
            ctxBUBBLE.drawImage(numbersBUBBLE,nr1BUBBLE.sX,nr1BUBBLE.sY,this.sWidth,this.sHeight,nr1BUBBLE.dX,nr1BUBBLE.dY,
                this.dWidth,this.dHeight);
        },

        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
            //this.frame = this.frame % this.animation.length;
            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(950 > framesBUBBLE && framesBUBBLE > 850){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1550 > framesBUBBLE && framesBUBBLE > 1450){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1950 > framesBUBBLE && framesBUBBLE > 1850){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(2150 > framesBUBBLE && framesBUBBLE > 2050){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =340;

                }
            }

        }
    }
    const nr2BUBBLE = {
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

            ctxBUBBLE.drawImage(numbersBUBBLE,nr2BUBBLE.sX,nr2BUBBLE.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);

            // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);



        },
        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(550 > framesBUBBLE && framesBUBBLE > 450){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1150 > framesBUBBLE && framesBUBBLE > 1050){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(2150 > framesBUBBLE && framesBUBBLE > 2050){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =180;

                }
            }


        }
    }
    const nr3BUBBLE = {
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
            ctxBUBBLE.drawImage(numbersBUBBLE,nr3BUBBLE.sX,nr3BUBBLE.sY,this.sWidth,this.sHeight,nr3BUBBLE.dX,nr3BUBBLE.dY,
                this.dWidth,this.dHeight);
        },
        bubbleSort : function(){

        },





        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(350 > framesBUBBLE && framesBUBBLE > 250){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1150 > framesBUBBLE && framesBUBBLE > 1050){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                if(1950 > framesBUBBLE && framesBUBBLE > 1850){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =100;

                }
            }

        }
    }
    const nr4BUBBLE = {
        sX : 24,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(750 > framesBUBBLE && framesBUBBLE > 650){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1550 > framesBUBBLE && framesBUBBLE > 1450){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =260;

                }
            }

        }
    }
    const nr9BUBBLE = {
        sX : 430,
        sY : 400,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,

        dX : 20,

        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(350 > framesBUBBLE && framesBUBBLE > 250){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                if(550 > framesBUBBLE && framesBUBBLE > 450){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                if(750 > framesBUBBLE && framesBUBBLE > 650){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                if(950 > framesBUBBLE && framesBUBBLE > 850){
                    this.dX +=1.6*globalSpeedBUBBLE;

                }
                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =20;

                }
            }

        }
    }

    const lineBUBBLE = {
        sX : 140,
        sY : 12,
        sWidth : 390-140,
        sHeight : 190-12,
        dY : 150,
        dX : 310,
        dWidth : 200,
        dHeight :200  ,
        draw : function(){
            ctxBUBBLE.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        //frame can change the image of the images
        frame : 0,

        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateBUBBLE.current == stateBUBBLE.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesBUBBLE % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(1050 > framesBUBBLE && framesBUBBLE > 950){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(1650 > framesBUBBLE && framesBUBBLE > 1550){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }
                if(2050 > framesBUBBLE && framesBUBBLE > 1950){
                    this.dX -=1.6*globalSpeedBUBBLE;

                }

                //THE END OF SIMULATION
                if( framesBUBBLE == 2599){
                    this.dX =320;
                  //  this.dY =150;

                }
            }


        }
    }


//GET READY MESSAGE
    const getReadyBUBBLE = {
        sX : 273,
        sY : 110,
        sWidth : 436 - 273,
        sHeight : 177 - 110,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            if(stateBUBBLE.current == stateBUBBLE.getReady){
                ctxBUBBLE.drawImage(pauseBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }
    const gameOverBUBBLE = {

        sX : 390,
        sY : 230,
        sWidth : 760 - 390,
        sHeight : 380 - 230,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,

        draw : function(){
            if(stateBUBBLE.current == stateBUBBLE.over ){
                ctxBUBBLE.drawImage(click2startBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }

//DRAW
    function draw(){
        //background
        ctxBUBBLE.fillStyle = "#70c5ce";
        ctxBUBBLE.fillRect(0,0,cvsBUBBLE.width,cvsBUBBLE.height);

        //title of canvas
        ctxBUBBLE.font = "20px Arial";

        ctxBUBBLE.strokeText("Sortowanie ",25,50);
        ctxBUBBLE.strokeText("bąbelkowe!",25,75);

        //draw function
        // bg.draw();
       // c2nBUBBLE.draw();
        if(2300 > framesBUBBLE && framesBUBBLE > 0){
            red_circle01.draw();
            red_circle02.draw();
            lineBUBBLE.draw();
            bgRectangle.draw();

        }

        nr1BUBBLE.draw();
        nr2BUBBLE.draw();
        nr3BUBBLE.draw();
        nr4BUBBLE.draw();
        nr9BUBBLE.draw();
        bgSteps.draw();
        getReadyBUBBLE.draw();
        gameOverBUBBLE.draw();
    }
//UPDATE
    function update(){
        nr1BUBBLE.update();
        nr2BUBBLE.update();
        nr3BUBBLE.update();
        nr4BUBBLE.update();
        nr9BUBBLE.update();
       // c2nBUBBLE.update();
        lineBUBBLE.update();
        bgRectangle.update();
        bgSteps.update();
        red_circle01.update();
        red_circle02.update();
        if(framesBUBBLE == 2600){
            stateBUBBLE.current = stateBUBBLE.over;
        };


    }
//LOOP
    function loop(){
        update();
        draw();

        if (stateBUBBLE.current == stateBUBBLE.over || stateBUBBLE.current == stateBUBBLE.getReady) {
        }else{
            framesBUBBLE++;

        }


        requestAnimationFrame(loop);
    }
    loop();



