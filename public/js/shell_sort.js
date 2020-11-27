






    var x, text;
    // SELECT CVS
    const cvsSHELL = document.getElementById("birdSHELL");
    const restartSHELL = document.getElementById("restart_img");
    cvsSHELL.style.display = "block";
    // if (cvsSHELL.style.display === "none") {
    //     cvsSHELL.style.display = "block";
    // } else {
    //     cvsSHELL.style.display = "none";
    // }
    const ctxSHELL = cvsSHELL.getContext("2d");
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
    let framesSHELL = 0;
    let globalSpeedSHELL = 0.5;
    let framesRememberSHELL=0;

//IMAGE OF THE BIRD
    const spriteSHELL=document.getElementById("image");
//IMAGE OF NUMBERS
    const numbersSHELL=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
    const blue_numbersSHELL=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
    const compare2numbersSHELL=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
    const click2startSHELL=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
    const pauseSHELL=document.getElementById("pause");
//RECTANGLE
    const img1=document.getElementById("img1");//rectangle
    //IMAGE OF THE TABLE WITH RED CIRCLE
    const red_circle=document.getElementById("red_circle");
    //IMAGE OF THE TABLE WITH RED CIRCLE
    const bg_steps=document.getElementById("bg");
    //IMAGE OF THE TABLE WITH BROWN CIRCLE
    const brown_circle=document.getElementById("brown_circle");

    const img3=document.getElementById("img3");//sorted,unsorted
    const img4=document.getElementById("img4");//RESTART
    const img5=document.getElementById("img5");//START



    //GAME STATE
    const stateSHELL = {
        current : 2 ,
        getReady : 0,
        game : 1,
        over : 2
    }


//CONTROL THE GAME
    cvsSHELL.addEventListener("click",function(evt){
        switch(stateSHELL.current){
            case stateSHELL.getReady:
                stateSHELL.current = stateSHELL.game;
                framesSHELL = framesRememberSHELL;
                framesRememberSHELL=framesSHELL;
                break;
            case stateSHELL.game:
                stateSHELL.current = stateSHELL.getReady;
                framesRememberSHELL=framesSHELL;
                //HERE I WILL WRITE THE ALGORITHM
                //  bird.flap();
                nr1SHELL.SHELLSort();
                break;
            case stateSHELL.over:
                stateSHELL.current = stateSHELL.game;
                framesSHELL = 0;
                break;
        }
    });
    restartSHELL.addEventListener("click",function(evt){
        switch(stateSHELL.current){
            case stateSHELL.getReady:
            case stateSHELL.game:
                stateSHELL.current = 2;

               // bgRectangle.dX =100;
                bgRectangle.dY =-3;
               // bgRectangle.dHeight =62;
                red_circle01.dX = 10;
                brown_circle01.dX = 170;
                //red_circle01.dY =190;
                // brown_circle01.dX =85;
                // brown_circle01.dY =265;
                nr1SHELL.dX =260;
               // nr1SHELL.dY =200;
                nr2SHELL.dX =340;
               // nr2SHELL.dY =200;
                nr3SHELL.dX =20;
              //  nr3SHELL.dY =200;
                nr4SHELL.dX =100;
              //  nr4SHELL.dY =200;
                nr9SHELL.dX =180;
             //   nr9SHELL.dY =200;
             //   lineSHELL.dX =410;
              //  lineleftSHELL.dX= -70;
                framesSHELL = 0;


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
            ctxSHELL.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){
            }else{
                if(250 > framesSHELL && framesSHELL > 150){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(550 > framesSHELL && framesSHELL > 450){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(850 > framesSHELL && framesSHELL > 750){
                    this.dX -=3.2*globalSpeedSHELL;

                }
                if(1550 > framesSHELL && framesSHELL > 1450){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(1750 > framesSHELL && framesSHELL > 1650){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(1950 > framesSHELL && framesSHELL > 1850){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                // if(650 > framesSHELL && framesSHELL > 550){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(750 > framesSHELL && framesSHELL > 650){
                //     this.dX +=3.2*globalSpeedSHELL;
                //
                // }
                // if(1050 > framesSHELL && framesSHELL > 950){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(1250 > framesSHELL && framesSHELL > 1150){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(850 > framesSHELL && framesSHELL > 750){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                // if(1450 > framesSHELL && framesSHELL > 1350){
                //     this.dX +=3.2* globalSpeedSHELL;
                //
                // }
                // if(1850 > framesSHELL && framesSHELL > 1750){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                // if(2050 > framesSHELL && framesSHELL > 1950){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                if(2650 > framesSHELL && framesSHELL > 2550){
                    this.dX +=4.8* globalSpeedSHELL;
                    // this.dX -=4.8* globalSpeedSHELL;
                }
                if(3050 > framesSHELL && framesSHELL > 2950){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }
                if(3250 > framesSHELL && framesSHELL > 3150){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }
                if(3450 > framesSHELL && framesSHELL > 3350){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }



                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =10;


                }
            }

        }
    }
    const brown_circle01 = {

        //circle
        sX : 310,
        sY : 90,
        sWidth : 490 - 310,
        sHeight : 270 - 90,
        dY : 190,
        dX : 170,
        dWidth : 90,
        dHeight :90 ,

        //frame can change the image of the images
        frame : 0,

        smaller : [{ dWidth : 40,
            dHeight :40 }],

        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame]
            ctxSHELL.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        startPosition : function(){
            brown_circle01.dX =10;
            brown_circle01.dY =190;
        },

        bubbleSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){
            }else{
                if(250 > framesSHELL && framesSHELL > 150){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(550 > framesSHELL && framesSHELL > 450){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(850 > framesSHELL && framesSHELL > 750){
                    this.dX -=3.2*globalSpeedSHELL;

                }
                if(1250 > framesSHELL && framesSHELL > 1150){
                    this.dX -=1.6*globalSpeedSHELL;

                }
                if(1550 > framesSHELL && framesSHELL > 1450){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(1750 > framesSHELL && framesSHELL > 1650){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                if(1950 > framesSHELL && framesSHELL > 1850){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                // if(450 > framesSHELL && framesSHELL > 350){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(650 > framesSHELL && framesSHELL > 550){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(750 > framesSHELL && framesSHELL > 650){
                //     this.dX +=3.2*globalSpeedSHELL;
                //
                // }
                // if(1050 > framesSHELL && framesSHELL > 950){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(1250 > framesSHELL && framesSHELL > 1150){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(850 > framesSHELL && framesSHELL > 750){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                // if(1450 > framesSHELL && framesSHELL > 1350){
                //     this.dX +=3.2* globalSpeedSHELL;
                //
                // }
                // if(1850 > framesSHELL && framesSHELL > 1750){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                // if(2050 > framesSHELL && framesSHELL > 1950){
                //     this.dX -=1.6* globalSpeedSHELL;
                //
                // }
                // if(2650 > framesSHELL && framesSHELL > 2550){
                //     this.dX +=4.8* globalSpeedSHELL;
                //     // this.dX -=4.8* globalSpeedSHELL;
                // }
                if(3050 > framesSHELL && framesSHELL > 2950){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }
                if(3250 > framesSHELL && framesSHELL > 3150){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }
                if(3450 > framesSHELL && framesSHELL > 3350){
                    this.dX -=1.6* globalSpeedSHELL;
                    //this.dX -=4.8* globalSpeedSHELL;
                }



                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =     170;


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
        dY : -3,
        dX : 190,
        dWidth : 420,
        dHeight :100  ,

        draw : function(){
            ctxSHELL.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // go to 2nd
                if(1250 > framesSHELL && framesSHELL > 1200){
                   // this.dHeight -=1.5*globalSpeedSHELL;
                    this.dY +=3.5* globalSpeedSHELL;
                }
                // if(1200 > framesSHELL && framesSHELL > 1150){
                //     this.dY -=2.7* globalSpeedSHELL;
                // }
                // if(1200 > framesSHELL && framesSHELL > 1150){
                //     this.dHeight -=1.5*globalSpeedSHELL;
                //     this.dY +=2.4* globalSpeedSHELL;
                // }
                // if(1300 > framesSHELL && framesSHELL > 1250){
                //     this.dHeight +=1.5*globalSpeedSHELL;
                //     this.dY -=5.5* globalSpeedSHELL;
                // }
                // // go to 3rd
                // if(400 > framesSHELL && framesSHELL > 350){
                //     this.dHeight -=0.5*globalSpeedSHELL;
                //     this.dY +=2.5* globalSpeedSHELL;
                // }  // go to 1rd
                // if(600 > framesSHELL && framesSHELL > 550){
                //     this.dY -=3.9* globalSpeedSHELL;
                //     this.dHeight -=1*globalSpeedSHELL;
                // }
                // if(800 > framesSHELL && framesSHELL > 750){
                //     this.dHeight +=1.5*globalSpeedSHELL;
                //     this.dY +=1.4* globalSpeedSHELL;
                //
                // }
                // if(1200 > framesSHELL && framesSHELL > 1150){
                //     this.dHeight -=0.5*globalSpeedSHELL;
                //     this.dY +=2.5* globalSpeedSHELL;
                // }
                // if(1600 > framesSHELL && framesSHELL > 1550){
                //     this.dY -=3.9* globalSpeedSHELL;
                //     this.dHeight -=1*globalSpeedSHELL;
                //
                // }
                // if(1800 > framesSHELL && framesSHELL > 1750){
                //     this.dHeight +=1.5*globalSpeedSHELL;
                //     this.dY +=1.4* globalSpeedSHELL;
                //
                // }
                // if(2500 > framesSHELL && framesSHELL > 2450){
                //     this.dHeight -=0.5*globalSpeedSHELL;
                //     this.dY +=2.5* globalSpeedSHELL;
                // }
                // if(2800 > framesSHELL && framesSHELL > 2750){
                //     this.dY -=3.9* globalSpeedSHELL;
                //     this.dHeight -=1*globalSpeedSHELL;
                // }
                // if(3000 > framesSHELL && framesSHELL > 2950){
                //     this.dHeight +=1.5*globalSpeedSHELL;
                //     this.dY +=1.4* globalSpeedSHELL;
                // }
                // if(3600 > framesSHELL && framesSHELL > 3550){
                //     this.dHeight -=0.5*globalSpeedSHELL;
                //     this.dY +=2.5* globalSpeedSHELL;
                // }
                // // if(1200 > framesSHELL && framesSHELL > 850){
                //     this.dX +=globalSpeedSHELL;
                // }
                // if(1800 > framesSHELL && framesSHELL > 1450){
                //     this.dX +=globalSpeedSHELL;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( framesSHELL == 2050){
                //     this.dX =50;
                // }
                // if(2650 > framesSHELL && framesSHELL > 2300){
                //     this.dX +=globalSpeedSHELL;
                // }
                // if(3250 > framesSHELL && framesSHELL > 2900){
                //     this.dX +=globalSpeedSHELL;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( framesSHELL == 3500){
                //     this.dX =50;
                // }
                // if(4000 > framesSHELL && framesSHELL > 3750){
                //     this.dX +=globalSpeedSHELL;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(framesSHELL == 4250){
                //     this.dX =50;
                // }
                // //finish
                if(framesSHELL==2498){

                    this.dY =-3;


                }
            }


        }
    }
    const bgsteps1 = {

        sX : 17,
        sY : 21,
        sWidth : 690,
        sHeight : 241,
        dY : 0,
        dX : 210,
        dWidth : 400,
        dHeight :200  ,
        draw : function(){

            ctxSHELL.drawImage(bg_steps,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesSHELL && framesSHELL > 250){
                    this.dX +=globalSpeedSHELL;
                }
                if(1200 > framesSHELL && framesSHELL > 850){
                    this.dX +=globalSpeedSHELL;
                }
                if(1800 > framesSHELL && framesSHELL > 1450){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesSHELL == 2050){
                    this.dX =50;
                }
                if(2650 > framesSHELL && framesSHELL > 2300){
                    this.dX +=globalSpeedSHELL;
                }
                if(3250 > framesSHELL && framesSHELL > 2900){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesSHELL == 3500){
                    this.dX =50;
                }
                if(4000 > framesSHELL && framesSHELL > 3750){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(framesSHELL == 4250){
                    this.dX =50;
                }
                //finish
                if(framesSHELL==2498){
                    this.dX =110;
                    this.dY =0;
                    this.dWidth =500;
                    this.dHeight =150;

                }
            }


        }
    }
//COMPARE 2 NUMBERS
    const c2nSHELL = {

        sX : 328,
        sY : 200,
        sWidth : 510-328,
        sHeight : 300-200,
        dY : 280,
        dX : 50,
        dWidth : 100,
        dHeight :50  ,
        draw : function(){

            ctxSHELL.drawImage(compare2numbersSHELL,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesSHELL && framesSHELL > 250){
                    this.dX +=globalSpeedSHELL;
                }
                if(1200 > framesSHELL && framesSHELL > 850){
                    this.dX +=globalSpeedSHELL;
                }
                if(1800 > framesSHELL && framesSHELL > 1450){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesSHELL == 2050){
                    this.dX =50;
                }
                if(2650 > framesSHELL && framesSHELL > 2300){
                    this.dX +=globalSpeedSHELL;
                }
                if(3250 > framesSHELL && framesSHELL > 2900){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesSHELL == 3500){
                    this.dX =50;
                }
                if(4000 > framesSHELL && framesSHELL > 3750){
                    this.dX +=globalSpeedSHELL;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(framesSHELL == 4250){
                    this.dX =50;
                }
                //finish
                if(framesSHELL==4998){
                    this.dX =50;
                }
            }


        }
    }
//FLAG
    const l_SHELL = {
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
            if (  framesSHELL <= 2100 && framesSHELL > 700) {
                let l_SHELL = this.nr01[0];
                ctxSHELL.drawImage(blue_numbersSHELL,l_SHELL.bsX,l_SHELL.bsY,l_SHELL.bsWidth,l_SHELL.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxSHELL.drawImage(blue_numbersSHELL,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const p_SHELL = {
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
            if (  framesSHELL <= 2100 && framesSHELL > 700) {
                let p_SHELL = this.nr01[0];
                ctxSHELL.drawImage(blue_numbersSHELL,p_SHELL.bsX,p_SHELL.bsY,p_SHELL.bsWidth,p_SHELL.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxSHELL.drawImage(blue_numbersSHELL,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const k_SHELL = {
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
            if (  framesSHELL <= 2100 && framesSHELL > 700) {
                let k_SHELL = this.nr01[0];
                ctxSHELL.drawImage(blue_numbersSHELL,k_SHELL.bsX,k_SHELL.bsY,k_SHELL.bsWidth,k_SHELL.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                ctxSHELL.drawImage(blue_numbersSHELL,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const nr1SHELL = {
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
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,


        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctxSHELL.drawImage(numbersSHELL,nr1SHELL.sX,nr1SHELL.sY,this.sWidth,this.sHeight,nr1SHELL.dX,nr1SHELL.dY,
                this.dWidth,this.dHeight);
        },

        SHELLSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(450 > framesSHELL && framesSHELL > 350){
                    this.dX -=3.2*globalSpeedSHELL;

                }
                if(1450 > framesSHELL && framesSHELL > 1350){
                    this.dX -=1.6*globalSpeedSHELL;

                }
                // if(350 > framesSHELL && framesSHELL > 250){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(950 > framesSHELL && framesSHELL > 850){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(1450 > framesSHELL && framesSHELL > 1350){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =260;

                }
            }


        }
    }
    const nr2SHELL = {
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

            ctxSHELL.drawImage(numbersSHELL,nr2SHELL.sX,nr2SHELL.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);

            // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);



        },
        SHELLSort : function(){

        },


        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(750 > framesSHELL && framesSHELL > 650){
                    this.dX -=3.2*globalSpeedSHELL;

                }
                if(1050 > framesSHELL && framesSHELL > 950){
                    this.dX -=3.2*globalSpeedSHELL;

                }
                if(1450 > framesSHELL && framesSHELL > 1350){
                    this.dX +=1.6*globalSpeedSHELL;

                }
                // if(350 > framesSHELL && framesSHELL > 250){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(550 > framesSHELL && framesSHELL > 450){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =340;

                }
            }


        }
    }
    const nr3SHELL = {
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

        dX : 20,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,



        //frame can change the image of the images
        frame : 0,


        draw : function(){
            //let nr3 = this.animation[this.frame];
            ctxSHELL.drawImage(numbersSHELL,nr3SHELL.sX,nr3SHELL.sY,this.sWidth,this.sHeight,nr3SHELL.dX,nr3SHELL.dY,
                this.dWidth,this.dHeight);
        },
        SHELLSort : function(){

        },





        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;




            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){
            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                // if(150 > framesSHELL && framesSHELL > 50){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(1150 > framesSHELL && framesSHELL > 1050){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(1450 > framesSHELL && framesSHELL > 1350){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                if(1050 > framesSHELL && framesSHELL > 950){
                    this.dX +=3.2*globalSpeedSHELL;

                }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =20;

                }
            }

        }
    }
    const nr4SHELL = {
        sX : 24,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,

        dX : 100,

        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxSHELL.drawImage(numbersSHELL,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(450 > framesSHELL && framesSHELL > 350){
                    this.dX +=3.2*globalSpeedSHELL;

                }
                // if(350 > framesSHELL && framesSHELL > 250){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(950 > framesSHELL && framesSHELL > 850){
                //     this.dX -=1.6*globalSpeedSHELL;
                //
                // }
                // if(1450 > framesSHELL && framesSHELL > 1350){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =100;

                }
            }


        }
    }
    const nr9SHELL = {
        sX : 430,
        sY : 400,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 180,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            ctxSHELL.drawImage(numbersSHELL,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                if(750 > framesSHELL && framesSHELL > 650){
                    this.dX +=3.2*globalSpeedSHELL;

                }
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                // if(150 > framesSHELL && framesSHELL > 50){
                //     this.dX -=globalSpeedSHELL;
                //
                // }
                // if(350 > framesSHELL && framesSHELL > 250){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(550 > framesSHELL && framesSHELL > 450){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(950 > framesSHELL && framesSHELL > 850){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                // if(1150 > framesSHELL && framesSHELL > 1050){
                //     this.dX +=1.6*globalSpeedSHELL;
                //
                // }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =180;

                }
            }


        }
    }
    const flagSHELL = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 85,
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
            if (  framesSHELL <= 2100 && framesSHELL > 1200) {
                let flagSHELL = this.nr01[0];
                ctxSHELL.drawImage(blue_numbersSHELL,flagSHELL.bsX,flagSHELL.bsY,flagSHELL.bsWidth,flagSHELL.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }  else{
                let flagSHELL = this.nr02[0];
                ctxSHELL.drawImage(blue_numbersSHELL,flagSHELL.bsX,flagSHELL.bsY,flagSHELL.bsWidth,flagSHELL.bsHeight,this.bdX,this.bdY,
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
    const lineSHELL = {
        sX : 260,
        sY : 10,
        sWidth : 390-260,
        sHeight : 190-10,
        dY : 150,
        dX : 410,
        dWidth : 100,
        dHeight :200  ,
        draw : function(){
            ctxSHELL.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        //frame can change the image of the images
        frame : 0,

        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER

                // if(3850 > framesSHELL && framesSHELL > 3500){
                //     this.dX -=globalSpeedSHELL;
                //
                // }
                // if(4600 > framesSHELL && framesSHELL > 4250){
                //     this.dX -=globalSpeedSHELL;
                //
                // }
                if(1250 > framesSHELL && framesSHELL > 1150){
                    this.dX -=1.6*globalSpeedSHELL;

                }
                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =410;
                   // this.dY =150;

                }
            }


        }
    }
    const lineleftSHELL = {
        sX : 30,
        sY : 15,
        sWidth : 260-30,
        sHeight : 200-15,
        dY : 150,
        dX :-70,
        dWidth : 200,
        dHeight :200  ,
        draw : function(){
            ctxSHELL.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },


        //frame can change the image of the images
        frame : 0,

        update: function(){
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateSHELL.current == stateSHELL.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesSHELL % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateSHELL.current == stateSHELL.over ||stateSHELL.current == stateSHELL.getReady){

            }else{
                // this.speed += this.gravity;
                //50ms DELAY BEFORE MOVING THE NUMBER
                if(750 > framesSHELL && framesSHELL > 650){
                    this.dX +=3.2*globalSpeedSHELL;

                }
                // if(3850 > framesSHELL && framesSHELL > 3500){
                //     this.dX -=globalSpeedSHELL;
                //
                // }
                // if(4600 > framesSHELL && framesSHELL > 4250){
                //     this.dX -=globalSpeedSHELL;
                //
                // }

                //THE END OF SIMULATION
                if( framesSHELL == 2498){
                    this.dX =-70;
                    //this.dY =150;

                }
            }


        }
    }

//GET READY MESSAGE
    const getReadySHELL = {
        sX : 273,
        sY : 110,
        sWidth : 436 - 273,
        sHeight : 177 - 110,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            if(stateSHELL.current == stateSHELL.getReady){
                ctxSHELL.drawImage(pauseSHELL,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }
    const gameOverSHELL = {

        sX : 390,
        sY : 230,
        sWidth : 760 - 390,
        sHeight : 380 - 230,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,

        draw : function(){
            if(stateSHELL.current == stateSHELL.over ){
                ctxSHELL.drawImage(click2startSHELL,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }

//DRAW
    function draw(){
        //background
        ctxSHELL.fillStyle = "#70c5ce";
        ctxSHELL.fillRect(0,0,cvsSHELL.width,cvsSHELL.height);

        //title of canvas
        ctxSHELL.font = "20px Arial";

        ctxSHELL.strokeText("Sortowanie",25,50);
        ctxSHELL.strokeText("metodą Shella!",25,75);
        ctxSHELL.strokeText("Odstęp=   ",25,125);

        //draw function
        // bg.draw();
        if(2100 > framesSHELL && framesSHELL > 0){
           // c2nSHELL.draw();
          //  lineSHELL.draw();
           // lineleftSHELL.draw();
            bgRectangle.draw();
            flagSHELL.draw();
            red_circle01.draw();
            brown_circle01.draw();
        }
        // if(650 > framesSHELL && framesSHELL > 0){
        //     // c2nSHELL.draw();
        //
        //     red_circle01.draw();
        //     brown_circle01.draw();
        // }
        // if(1150 > framesSHELL && framesSHELL > 750){
        //     // c2nSHELL.draw();
        //
        //     red_circle01.draw();
        //     brown_circle01.draw();
        // }
        // if(1550 > framesSHELL && framesSHELL > 1250){
        //     // c2nSHELL.draw();
        //
        //     red_circle01.draw();
        //     brown_circle01.draw();
        // }
        // l_SHELL.draw();
        // p_SHELL.draw();
        // k_SHELL.draw();
        nr1SHELL.draw();
        nr2SHELL.draw();
        nr3SHELL.draw();
        nr4SHELL.draw();
        nr9SHELL.draw();
        bgsteps1.draw();
        //bgRectangle.draw();
        getReadySHELL.draw();
        gameOverSHELL.draw();
    }
//UPDATE
    function update(){
        red_circle01.update();
        brown_circle01.update();
        nr1SHELL.update();
        nr2SHELL.update();
        nr3SHELL.update();
        nr4SHELL.update();
        nr9SHELL.update();
        c2nSHELL.update();
        lineSHELL.update();
        bgRectangle.update();
        lineleftSHELL.update();
        if(framesSHELL == 2500){
            stateSHELL.current = stateSHELL.over;
        };


    }
//LOOP
    function loop(){
        update();
        draw();
        if (stateSHELL.current == stateSHELL.over || stateSHELL.current == stateSHELL.getReady) {
        }else{
            framesSHELL++;
          //  framesSHELL++;
        }


        requestAnimationFrame(loop);
    }
    loop();



