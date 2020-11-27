






    var x, text;
    // SELECT CVS
    const cvsMIX = document.getElementById("birdMIX");
    const restartMIX = document.getElementById("restart_img");
    cvsMIX.style.display = "block";
    // if (cvsMIX.style.display === "none") {
    //     cvsMIX.style.display = "block";
    // } else {
    //     cvsMIX.style.display = "none";
    // }
    const ctxMIX = cvsMIX.getContext("2d");
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
    let framesMIX = 0;
    let globalSpeedMIX = 0.5;
    let framesRememberMIX=0;

//IMAGE OF THE BIRD
    const spriteMIX=document.getElementById("image");
//IMAGE OF NUMBERS
    const numbersMIX=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
    const blue_numbersMIX=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
    const compare2numbersMIX=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
    const click2startMIX=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
    const pauseMIX=document.getElementById("pause");
//RECTANGLE
    const img1=document.getElementById("img1");//rectangle
    //IMAGE OF THE TABLE WITH RED CIRCLE
    const red_circle=document.getElementById("red_circle");
    //IMAGE OF THE TABLE WITH RED CIRCLE
    const bg_steps=document.getElementById("bg");

    const img3=document.getElementById("img3");//sorted,unsorted
    const img4=document.getElementById("img4");//RESTART
    const img5=document.getElementById("img5");//START



    //GAME STATE
    const stateMIX = {
        current : 2 ,
        getReady : 0,
        game : 1,
        over : 2
    }


//CONTROL THE GAME
    cvsMIX.addEventListener("click",function(evt){
        switch(stateMIX.current){
            case stateMIX.getReady:
                stateMIX.current = stateMIX.game;
                framesMIX = framesRememberMIX;
                framesRememberMIX=framesMIX;
                break;
            case stateMIX.game:
                stateMIX.current = stateMIX.getReady;
                framesRememberMIX=framesMIX;
                //HERE I WILL WRITE THE ALGORITHM
                //  bird.flap();
                nr1MIX.MIXSort();
                break;
            case stateMIX.over:
                stateMIX.current = stateMIX.game;
                framesMIX = 0;
                break;
        }
    });
    restartMIX.addEventListener("click",function(evt){
        switch(stateMIX.current){
            case stateMIX.getReady:
            case stateMIX.game:
                stateMIX.current = 2;

                //bgRectangle.dX =100;
                bgRectangle.dY =-10;
                bgRectangle.dHeight =62;
                red_circle01.dX = 250;
                red_circle02.dX = 330;
                //red_circle01.dY =190;
                // brown_circle01.dX =85;
                // brown_circle01.dY =265;
                //nr1MIX.dX =260;
               // nr1MIX.dY =200;
                nr2MIX.dX =340;
               // nr2MIX.dY =200;
                nr3MIX.dX =260;
              //  nr3MIX.dY =200;
                nr4MIX.dX =180;
              //  nr4MIX.dY =200;
                nr9MIX.dX =100;
             //   nr9MIX.dY =200;
                lineMIX.dX =290;
                lineleftMIX.dX= -70;
                framesMIX = 0;


                break;
        }
    });
//CIRCLE


    const red_circle01 = {

        //circle
        sX : 310,
        sY : 90,
        sWidth : 490 - 310,
        sHeight : 270 - 90,
        dY : 190,
        dX : 250,
        dWidth : 90,
        dHeight :90 ,

        //frame can change the image of the images
        frame : 0,

        smaller : [{ dWidth : 40,
            dHeight :40 }],

        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame]
            ctxMIX.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        startPosition : function(){
            red_circle01.dX =10;
            red_circle01.dY =190;
        },

        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){
            }else{
                if(250 > framesMIX && framesMIX > 150){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(450 > framesMIX && framesMIX > 350){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(650 > framesMIX && framesMIX > 550){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(750 > framesMIX && framesMIX > 650){
                    this.dX +=3.2*globalSpeedMIX;

                }
                if(1050 > framesMIX && framesMIX > 950){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(1250 > framesMIX && framesMIX > 1150){
                    this.dX -=1.6*globalSpeedMIX;

                }
                // if(850 > framesMIX && framesMIX > 750){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                // if(1450 > framesMIX && framesMIX > 1350){
                //     this.dX +=3.2* globalSpeedMIX;
                //
                // }
                // if(1850 > framesMIX && framesMIX > 1750){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                // if(2050 > framesMIX && framesMIX > 1950){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                if(2650 > framesMIX && framesMIX > 2550){
                    this.dX +=4.8* globalSpeedMIX;
                    // this.dX -=4.8* globalSpeedMIX;
                }
                if(3050 > framesMIX && framesMIX > 2950){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }
                if(3250 > framesMIX && framesMIX > 3150){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }
                if(3450 > framesMIX && framesMIX > 3350){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }



                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =250;


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
        dX : 330,
        dWidth : 90,
        dHeight :90 ,

        //frame can change the image of the images
        frame : 0,

        smaller : [{ dWidth : 40,
            dHeight :40 }],

        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame]
            ctxMIX.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        startPosition : function(){
            red_circle02.dX =10;
            red_circle02.dY =190;
        },

        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){
            }else{
                if(250 > framesMIX && framesMIX > 150){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(450 > framesMIX && framesMIX > 350){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(650 > framesMIX && framesMIX > 550){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(750 > framesMIX && framesMIX > 650){
                    this.dX +=3.2*globalSpeedMIX;

                }
                if(1050 > framesMIX && framesMIX > 950){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(1250 > framesMIX && framesMIX > 1150){
                    this.dX -=1.6*globalSpeedMIX;

                }
                // if(850 > framesMIX && framesMIX > 750){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                // if(1450 > framesMIX && framesMIX > 1350){
                //     this.dX +=3.2* globalSpeedMIX;
                //
                // }
                // if(1850 > framesMIX && framesMIX > 1750){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                // if(2050 > framesMIX && framesMIX > 1950){
                //     this.dX -=1.6* globalSpeedMIX;
                //
                // }
                // if(2650 > framesMIX && framesMIX > 2550){
                //     this.dX +=4.8* globalSpeedMIX;
                //     // this.dX -=4.8* globalSpeedMIX;
                // }
                if(3050 > framesMIX && framesMIX > 2950){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }
                if(3250 > framesMIX && framesMIX > 3150){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }
                if(3450 > framesMIX && framesMIX > 3350){
                    this.dX -=1.6* globalSpeedMIX;
                    //this.dX -=4.8* globalSpeedMIX;
                }



                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =     330;


                }
            }

        }
    }
//BACKGROUD
    const bgRectangle = {

        sX : 33,
        sY : 33,
        sWidth : 670-33,
        sHeight : 270-33,
        dY : -10,
        dX : 130,
        dWidth : 480,
        dHeight :62  ,

        draw : function(){
            ctxMIX.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // go to 2nd
                if(700 > framesMIX && framesMIX > 650){
                    this.dHeight -=1.5*globalSpeedMIX;
                    this.dY +=2.4* globalSpeedMIX;
                }
                if(800 > framesMIX && framesMIX > 750){
                    this.dHeight +=1.5*globalSpeedMIX;
                    this.dY +=0.5* globalSpeedMIX;
                }
                if(1200 > framesMIX && framesMIX > 1150){
                    this.dHeight -=1.5*globalSpeedMIX;
                    this.dY +=2.4* globalSpeedMIX;
                }
                if(1300 > framesMIX && framesMIX > 1250){
                    this.dHeight +=1.5*globalSpeedMIX;
                    this.dY -=5.3* globalSpeedMIX;
                }
                // // go to 3rd
                // if(400 > framesMIX && framesMIX > 350){
                //     this.dHeight -=0.5*globalSpeedMIX;
                //     this.dY +=2.5* globalSpeedMIX;
                // }  // go to 1rd
                // if(600 > framesMIX && framesMIX > 550){
                //     this.dY -=3.9* globalSpeedMIX;
                //     this.dHeight -=1*globalSpeedMIX;
                // }
                // if(800 > framesMIX && framesMIX > 750){
                //     this.dHeight +=1.5*globalSpeedMIX;
                //     this.dY +=1.4* globalSpeedMIX;
                //
                // }
                // if(1200 > framesMIX && framesMIX > 1150){
                //     this.dHeight -=0.5*globalSpeedMIX;
                //     this.dY +=2.5* globalSpeedMIX;
                // }
                // if(1600 > framesMIX && framesMIX > 1550){
                //     this.dY -=3.9* globalSpeedMIX;
                //     this.dHeight -=1*globalSpeedMIX;
                //
                // }
                // if(1800 > framesMIX && framesMIX > 1750){
                //     this.dHeight +=1.5*globalSpeedMIX;
                //     this.dY +=1.4* globalSpeedMIX;
                //
                // }
                // if(2500 > framesMIX && framesMIX > 2450){
                //     this.dHeight -=0.5*globalSpeedMIX;
                //     this.dY +=2.5* globalSpeedMIX;
                // }
                // if(2800 > framesMIX && framesMIX > 2750){
                //     this.dY -=3.9* globalSpeedMIX;
                //     this.dHeight -=1*globalSpeedMIX;
                // }
                // if(3000 > framesMIX && framesMIX > 2950){
                //     this.dHeight +=1.5*globalSpeedMIX;
                //     this.dY +=1.4* globalSpeedMIX;
                // }
                // if(3600 > framesMIX && framesMIX > 3550){
                //     this.dHeight -=0.5*globalSpeedMIX;
                //     this.dY +=2.5* globalSpeedMIX;
                // }
                // // if(1200 > framesMIX && framesMIX > 850){
                //     this.dX +=globalSpeedMIX;
                // }
                // if(1800 > framesMIX && framesMIX > 1450){
                //     this.dX +=globalSpeedMIX;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( framesMIX == 2050){
                //     this.dX =50;
                // }
                // if(2650 > framesMIX && framesMIX > 2300){
                //     this.dX +=globalSpeedMIX;
                // }
                // if(3250 > framesMIX && framesMIX > 2900){
                //     this.dX +=globalSpeedMIX;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( framesMIX == 3500){
                //     this.dX =50;
                // }
                // if(4000 > framesMIX && framesMIX > 3750){
                //     this.dX +=globalSpeedMIX;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(framesMIX == 4250){
                //     this.dX =50;
                // }
                // //finish
                if(framesMIX==3998){
                    this.dX =185;
                    this.dY =1;
                    this.dHeight =30;

                }
            }


        }
    }
    const bgsteps1 = {

        sX : 6,
        sY : 16,
        sWidth : 723,
        sHeight : 310,
        dY : 0,
        dX : 150,
        dWidth : 440,
        dHeight :150  ,
        draw : function(){

            ctxMIX.drawImage(bg_steps,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesMIX && framesMIX > 250){
                    this.dX +=globalSpeedMIX;
                }
                if(1200 > framesMIX && framesMIX > 850){
                    this.dX +=globalSpeedMIX;
                }
                if(1800 > framesMIX && framesMIX > 1450){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesMIX == 2050){
                    this.dX =50;
                }
                if(2650 > framesMIX && framesMIX > 2300){
                    this.dX +=globalSpeedMIX;
                }
                if(3250 > framesMIX && framesMIX > 2900){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesMIX == 3500){
                    this.dX =50;
                }
                if(4000 > framesMIX && framesMIX > 3750){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(framesMIX == 4250){
                    this.dX =50;
                }
                //finish
                if(framesMIX==1798){
                    this.dX =110;
                    this.dY =0;
                    this.dWidth =500;
                    this.dHeight =150;

                }
            }


        }
    }
//COMPARE 2 NUMBERS
    const c2nMIX = {

        sX : 328,
        sY : 200,
        sWidth : 510-328,
        sHeight : 300-200,
        dY : 280,
        dX : 50,
        dWidth : 100,
        dHeight :50  ,
        draw : function(){

            ctxMIX.drawImage(compare2numbersMIX,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesMIX && framesMIX > 250){
                    this.dX +=globalSpeedMIX;
                }
                if(1200 > framesMIX && framesMIX > 850){
                    this.dX +=globalSpeedMIX;
                }
                if(1800 > framesMIX && framesMIX > 1450){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesMIX == 2050){
                    this.dX =50;
                }
                if(2650 > framesMIX && framesMIX > 2300){
                    this.dX +=globalSpeedMIX;
                }
                if(3250 > framesMIX && framesMIX > 2900){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesMIX == 3500){
                    this.dX =50;
                }
                if(4000 > framesMIX && framesMIX > 3750){
                    this.dX +=globalSpeedMIX;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(framesMIX == 4250){
                    this.dX =50;
                }
                //finish
                if(framesMIX==4998){
                    this.dX =50;
                }
            }


        }
    }
//FLAG
    const l_MIX = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 65,
        bdX : 100,
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
            if (  framesMIX <= 2100 && framesMIX > 700) {
                let l_MIX = this.nr01[0];
                ctxMIX.drawImage(blue_numbersMIX,l_MIX.bsX,l_MIX.bsY,l_MIX.bsWidth,l_MIX.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxMIX.drawImage(blue_numbersMIX,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const p_MIX = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 65,
        bdX : 30,
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
            if (  framesMIX <= 2100 && framesMIX > 700) {
                let p_MIX = this.nr01[0];
                ctxMIX.drawImage(blue_numbersMIX,p_MIX.bsX,p_MIX.bsY,p_MIX.bsWidth,p_MIX.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxMIX.drawImage(blue_numbersMIX,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const k_MIX = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 65,
        bdX : 170,
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
            if (  framesMIX <= 2100 && framesMIX > 700) {
                let k_MIX = this.nr01[0];
                ctxMIX.drawImage(blue_numbersMIX,k_MIX.bsX,k_MIX.bsY,k_MIX.bsWidth,k_MIX.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxMIX.drawImage(blue_numbersMIX,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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

//NUMBERS
    const nr1MIX = {
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
        dX : 20,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,


        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctxMIX.drawImage(numbersMIX,nr1MIX.sX,nr1MIX.sY,this.sWidth,this.sHeight,nr1MIX.dX,nr1MIX.dY,
                this.dWidth,this.dHeight);
        },

        MIXSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
            //this.frame = this.frame % this.animation.length;

        }
    }
    const nr2MIX = {
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
        dX : 340,

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

            ctxMIX.drawImage(numbersMIX,nr2MIX.sX,nr2MIX.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);

            // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);



        },
        MIXSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(150 > framesMIX && framesMIX > 50){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(350 > framesMIX && framesMIX > 250){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(550 > framesMIX && framesMIX > 450){
                    this.dX -=1.6*globalSpeedMIX;

                }
                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =340;

                }
            }


        }
    }
    const nr3MIX = {
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
            ctxMIX.drawImage(numbersMIX,nr3MIX.sX,nr3MIX.sY,this.sWidth,this.sHeight,nr3MIX.dX,nr3MIX.dY,
                this.dWidth,this.dHeight);
        },
        MIXSort : function(){

        },





        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(150 > framesMIX && framesMIX > 50){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(1150 > framesMIX && framesMIX > 1050){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(1450 > framesMIX && framesMIX > 1350){
                    this.dX -=1.6*globalSpeedMIX;

                }
                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =260;

                }
            }

        }
    }
    const nr4MIX = {
        sX : 24,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 180,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxMIX.drawImage(numbersMIX,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                // if(150 > framesMIX && framesMIX > 50){
                //     this.dX -=globalSpeedMIX;
                //
                // }
                if(350 > framesMIX && framesMIX > 250){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(950 > framesMIX && framesMIX > 850){
                    this.dX -=1.6*globalSpeedMIX;

                }
                if(1450 > framesMIX && framesMIX > 1350){
                    this.dX +=1.6*globalSpeedMIX;

                }
                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =180;

                }
            }


        }
    }
    const nr9MIX = {
        sX : 430,
        sY : 400,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 100,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxMIX.drawImage(numbersMIX,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                // if(150 > framesMIX && framesMIX > 50){
                //     this.dX -=globalSpeedMIX;
                //
                // }
                // if(350 > framesMIX && framesMIX > 250){
                //     this.dX +=1.6*globalSpeedMIX;
                //
                // }
                if(550 > framesMIX && framesMIX > 450){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(950 > framesMIX && framesMIX > 850){
                    this.dX +=1.6*globalSpeedMIX;

                }
                if(1150 > framesMIX && framesMIX > 1050){
                    this.dX +=1.6*globalSpeedMIX;

                }
                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =100;

                }
            }


        }
    }

    const lineMIX = {
        sX : 140,
        sY : 12,
        sWidth : 400-140,
        sHeight : 190-12,
        dY : 150,
        dX : 290,
        dWidth : 250,
        dHeight :190  ,
        draw : function(){
            ctxMIX.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        //frame can change the image of the images
        frame : 0,

        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER

                // if(3850 > framesMIX && framesMIX > 3500){
                //     this.dX -=globalSpeedMIX;
                //
                // }
                // if(4600 > framesMIX && framesMIX > 4250){
                //     this.dX -=globalSpeedMIX;
                //
                // }
                if(1250 > framesMIX && framesMIX > 1150){
                    this.dX -=1.6*globalSpeedMIX;

                }
                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =290;
                   // this.dY =150;

                }
            }


        }
    }
    const lineleftMIX = {
        sX : 30,
        sY : 15,
        sWidth : 260-30,
        sHeight : 200-15,
        dY : 150,
        dX :-70,
        dWidth : 200,
        dHeight :200  ,
        draw : function(){
            ctxMIX.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        //frame can change the image of the images
        frame : 0,

        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateMIX.current == stateMIX.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesMIX % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateMIX.current == stateMIX.over ||stateMIX.current == stateMIX.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(750 > framesMIX && framesMIX > 650){
                    this.dX +=3.2*globalSpeedMIX;

                }
                // if(3850 > framesMIX && framesMIX > 3500){
                //     this.dX -=globalSpeedMIX;
                //
                // }
                // if(4600 > framesMIX && framesMIX > 4250){
                //     this.dX -=globalSpeedMIX;
                //
                // }

                //THE END OF SIMULATION
                if( framesMIX == 1798){
                    this.dX =-70;
                    //this.dY =150;

                }
            }


        }
    }

//GET READY MESSAGE
    const getReadyMIX = {
        sX : 273,
        sY : 110,
        sWidth : 436 - 273,
        sHeight : 177 - 110,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            if(stateMIX.current == stateMIX.getReady){
                ctxMIX.drawImage(pauseMIX,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }
    const gameOverMIX = {

        sX : 390,
        sY : 230,
        sWidth : 760 - 390,
        sHeight : 380 - 230,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,

        draw : function(){
            if(stateMIX.current == stateMIX.over ){
                ctxMIX.drawImage(click2startMIX,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }

//DRAW
    function draw(){
        //background
        ctxMIX.fillStyle = "#70c5ce";
        ctxMIX.fillRect(0,0,cvsMIX.width,cvsMIX.height);

        //title of canvas
        ctxMIX.font = "20px Arial";

        ctxMIX.strokeText("Sortowanie",10,50);
        ctxMIX.strokeText("mieszane!",10,75);

        //draw function
        // bg.draw();
        if(1550 > framesMIX && framesMIX > 0){
           // c2nMIX.draw();
            lineMIX.draw();
            lineleftMIX.draw();
            bgRectangle.draw();
        }
        if(650 > framesMIX && framesMIX > 0){
            // c2nMIX.draw();

            red_circle01.draw();
            red_circle02.draw();
        }
        if(1150 > framesMIX && framesMIX > 750){
            // c2nMIX.draw();

            red_circle01.draw();
            red_circle02.draw();
        }
        if(1550 > framesMIX && framesMIX > 1250){
            // c2nMIX.draw();

            red_circle01.draw();
            red_circle02.draw();
        }
        // l_MIX.draw();
        // p_MIX.draw();
        // k_MIX.draw();
        nr1MIX.draw();
        nr2MIX.draw();
        nr3MIX.draw();
        nr4MIX.draw();
        nr9MIX.draw();
        bgsteps1.draw();
        //bgRectangle.draw();
        getReadyMIX.draw();
        gameOverMIX.draw();
    }
//UPDATE
    function update(){
        red_circle01.update();
        red_circle02.update();
        nr1MIX.update();
        nr2MIX.update();
        nr3MIX.update();
        nr4MIX.update();
        nr9MIX.update();
        c2nMIX.update();
        lineMIX.update();
        bgRectangle.update();
        lineleftMIX.update();
        if(framesMIX == 1800){
            stateMIX.current = stateMIX.over;
        };


    }
//LOOP
    function loop(){
        update();
        draw();
        if (stateMIX.current == stateMIX.over || stateMIX.current == stateMIX.getReady) {
        }else{
            framesMIX++;
          //  framesMIX++;
        }


        requestAnimationFrame(loop);
    }
    loop();



