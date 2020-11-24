

    x1 = 5;
    x2 = 4;
    x3 = 1;
    x4 = 3;
    x5 = 2;



    // TEMPORARY VARIABLE
    var x, text;
    // TABLE OF 5 NUMBERS (FROM 'nr1BUBBLE') : dY,dX,dWidth,dHeight
    const destination_number_table = [
        [60,205, 50,50],//3
        [60,250, 50,50],//9
        [60,303, 50,50],//2
        [60,350, 50,50],//4
        [60,397, 50,50],//1

    ];
    const tree_destination_number_table = [
        [160,300, 50,50],//3
        [210,240, 50,50],//9
        [210,360, 50,50],//2
        [260,185, 50,50],//4
        [260,295, 50,50],//1
    ];








// SELECT CVS
    const cvs = document.getElementById("bird");
    const ctx = cvs.getContext("2d");
    cvs.style.display = "block";



    //GLOBAL TABLE WHICH IS SORTED IN THE BACKGROUND
    const numbers_to_sort=[x1,x2,x3,x4,x5];

    //DECLARE 4 GLOBAL TABLES WITH SOLUTION OF THE BUBBLE SORT STEP - step 0 is without changes
    const tab_step1=[];
    const tab_step2=[];
    const tab_step3=[];

    //numbers which are sorted
    const tab_step4=[];

    //FUNCTION WHICH IS BUBBLE SORT
    function bubble_sort( A,  n ) {
        var temp;
        for(var k = 0; k< n-1; k++) {
            // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations
            if(k==0)
            {
                text = "k == 0    [0]=   "+A[0]+"[1]=   "+A[1]+"[2]=   "+A[2]+"[3]=   "+A[3]+"[4]=   "+A[4];
                document.getElementById("demo").innerHTML = text;
            }
            if(k==1)
            {
                text = "k == 1    [0]=   "+A[0]+"[1]=   "+A[1]+"[2]=   "+A[2]+"[3]=   "+A[3]+"[4]=   "+A[4];
                document.getElementById("demo1").innerHTML = text;

                //fill the table
                for(var i = 0;i<5;i++){
                    tab_step1[i]=A[i];
                }


            }
            if(k==2)
            {
                text = "k == 2    [0]=   "+A[0]+"[1]=   "+A[1]+"[2]=   "+A[2]+"[3]=   "+A[3]+"[4]=   "+A[4];
                document.getElementById("demo2").innerHTML = text;
                //fill the table
                for(var i = 0;i<5;i++){
                    tab_step2[i]=A[i];
                }
            }
            if(k==3)
            {
                text = "k == 3    [0]=   "+A[0]+"[1]=   "+A[1]+"[2]=   "+A[2]+"[3]=   "+A[3]+"[4]=   "+A[4];
                document.getElementById("demo3").innerHTML = text;
                //fill the table
                for(var i = 0;i<5;i++){
                    tab_step3[i]=A[i];
                }
            }

            for(var i = 0; i < n-k-1; i++) {
                if(A[ i ] > A[ i+1] ) {
                    //nr1BUBBLE.update()
                    // here swapping of positions is being done.
                    temp = A[ i ];
                    A[ i ] = A[ i+1 ];
                    A[ i + 1] = temp;
                }
            }
        }


        text = "[0]=   "+A[0]+"[1]=   "+A[1]+"[2]=   "+A[2]+"[3]=   "+A[3]+"[4]=   "+A[4];
        document.getElementById("demo4").innerHTML = text;
        //fill the table
        for(var i = 0;i<5;i++){
            tab_step4[i]=A[i];
        }

    }
    bubble_sort(numbers_to_sort,5);

    text = "tab_step1-values      [0]=   "+tab_step1[0]+"[1]=   "+tab_step1[1]+"[2]=   "+tab_step1[2]+"[3]=   "+tab_step1[3]+"[4]=   "+tab_step1[4];
    document.getElementById("demo5").innerHTML = text;




// GAME VARS AND CONSTS
    let frames = 0;
    let a = 0;
    let globalSpeed = 0.125;//speed of movement
    let simulation_speed = 1 // number of frame
    let frame_speed = 0.5 // speed of simulation

    let framesRemember=0;
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
//IMAGE OF THE GET OVER STATE
    const pauseHEAP=document.getElementById("pause");
    const restartHEAP = document.getElementById("restart_img");
    const bg_steps=document.getElementById("bg");
    const img1=document.getElementById("img1");//rectangle
    //GAME STATE
    const state = {
        current : 2 ,
        getReady : 0,
        game : 1,
        over : 2
    }


//CONTROL THE GAME
    cvs.addEventListener("click",function(evt){
        switch(state.current){
            case state.getReady:
                state.current = state.game;
                frames = framesRemember;
                framesRemember=frames;
                break;
            case state.game:
                state.current = state.getReady;
                framesRemember=frames;
                //HERE I WILL WRITE THE ALGORITHM
                //  bird.flap();
                //nr1.bubbleSort();
                break;
            case state.over:
                state.current = state.game;
                frames = 0;
                break;
        }
    });
    restartHEAP.addEventListener("click",function(evt){
        switch(state.current){
            case state.getReady:
            case state.game:
                state.current = 2;

                // bgRectangle.dX =100;
                bgRectangle.dY =95;
                bgRectangle.dHeight =50;
                red_circle01.dX = 195;
                red_circle01.dY = 55;
                red_circle02.dX = 290;
                red_circle02.dY = 155;
                brown_circle01.dX = 195;
                brown_circle01.dY = 55;
                brown_circle02.dX = 245;
                brown_circle02.dY = 55;



                //red_circle01.dY =190;
                // brown_circle01.dX =85;
                // brown_circle01.dY =265;
                nr1.dX =397;
                nr1.tdY =260;
                nr1.tdX =295;


                // nr1HEAP.dY =200;
                nr2.dX =303;
                nr2.tdY =210;
                nr2.tdX =360;


                // nr2HEAP.dY =200;
                nr3.dX =205;
                nr3.tdY =160;
                nr3.tdX =300;


                //  nr3HEAP.dY =200;
                nr4.dX =350;
                nr4.tdY =260;
                nr4.tdX =185;


                //  nr4HEAP.dY =200;
                nr5.dX =250;
                nr5.tdY =210;
                nr5.tdX =240;

                //   nr9HEAP.dY =200;
                //   lineHEAP.dX =410;
                //  lineleftHEAP.dX= -70;
                frames = 0;


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

            if(state.current == state.over ||state.current == state.getReady){

            }else {

                if(350*simulation_speed > frames && frames > 250*simulation_speed){
                    this.dX +=2*globalSpeed;
                    // this.dY -=6.5*globalSpeed;
                }

                if(500*simulation_speed > frames && frames > 400*simulation_speed){
                    this.dX +=2*globalSpeed;
                    // this.dY -=6.5*globalSpeed;
                }
                if(650*simulation_speed > frames && frames > 550*simulation_speed){
                    this.dX +=2*globalSpeed;
                    // this.dY -=6.5*globalSpeed;
                }
                if(800*simulation_speed > frames && frames > 700*simulation_speed){
                    this.dX +=2*globalSpeed;
                    // this.dY -=6.5*globalSpeed;
                }
                //SWAP
                if(950*simulation_speed > frames && frames > 850*simulation_speed){
                    this.dX -=6.6*globalSpeed;
                    this.dY +=6*globalSpeed;
                }
                if(1150*simulation_speed > frames && frames > 1100*simulation_speed){
                    this.dX -=4.4*globalSpeed;
                    this.dY +=4.2*globalSpeed;

                }
                if(1350*simulation_speed > frames && frames > 1300*simulation_speed){
                    this.dX +=9*globalSpeed;

                }
                if(1550*simulation_speed > frames && frames > 1500*simulation_speed){
                    this.dX -=4.4*globalSpeed;
                    this.dY -=4.2*globalSpeed;
                }
                if(1750*simulation_speed > frames && frames > 1700*simulation_speed){
                    this.dX -=4.4*globalSpeed;
                    this.dY +=4.2*globalSpeed;
                }
                if(2200*simulation_speed > frames && frames > 2150*simulation_speed){
                    this.dX +=4.4*globalSpeed;
                    this.dY -=4.2*globalSpeed;
                }

                if (2400*simulation_speed > frames && frames > 2350*simulation_speed) {

                    this.dX +=4.8*globalSpeed;
                    this.dY -=4.2*globalSpeed;


                }
                if (2600*simulation_speed > frames && frames > 2550*simulation_speed) {

                    this.dX -=4.8*globalSpeed;
                    this.dY +=4.2*globalSpeed;


                }
                //FINISH
                if( frames ==2999*simulation_speed){


                    this.dX =195;
                    this.dY =55;


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

            if(state.current == state.over ||state.current == state.getReady){

            }else {

                if(1150*simulation_speed > frames && frames > 1100*simulation_speed){
                    this.dX -=4.8*globalSpeed;
                    this.dY +=4.2*globalSpeed;

                }
                if(1350*simulation_speed > frames && frames > 1300*simulation_speed){
                    this.dX +=4.8*globalSpeed;
                    this.dY -=4.2*globalSpeed;
                }
                if(1750*simulation_speed > frames && frames > 1700*simulation_speed){
                    this.dX -=4.8*globalSpeed;
                    this.dY +=4.2*globalSpeed;
                }
                if(2050*simulation_speed > frames && frames > 2000*simulation_speed){
                    this.dX +=4.8*globalSpeed;
                    this.dY -=4.2*globalSpeed;
                }
                if (2400*simulation_speed > frames && frames > 2350*simulation_speed) {

                    this.dX +=4.8*globalSpeed;
                    this.dY +=4.2*globalSpeed;


                }
                if (2600*simulation_speed > frames && frames > 2550*simulation_speed) {

                    this.dX -=4.8*globalSpeed;
                    this.dY -=4.2*globalSpeed;


                }
                //FINISH
                if( frames ==2999*simulation_speed){


                    this.dX =290;
                    this.dY =155;


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

            if(state.current == state.over ||state.current == state.getReady){

            }else {

                if (1200*simulation_speed > frames && frames > 1150*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1400*simulation_speed > frames && frames > 1350*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX -= 4 * globalSpeed;


                }
                if (1800*simulation_speed > frames && frames > 1750*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1950*simulation_speed > frames && frames > 1900*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX -= 4 * globalSpeed;


                }
                //FINISH
                if( frames ==2999*simulation_speed){

                    this.dX =195;
                    this.dY =55;


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

            if(state.current == state.over ||state.current == state.getReady){

            }else {


                if (1200 *simulation_speed> frames && frames > 1150*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 8 * globalSpeed;


                }
                if (1400*simulation_speed > frames && frames > 1350*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1550 *simulation_speed> frames && frames > 1500*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX -= 12 * globalSpeed;


                }
                if (1800*simulation_speed > frames && frames > 1750*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 8 * globalSpeed;


                }
                if (2250 *simulation_speed> frames && frames > 2200*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX -= 8 * globalSpeed;


                }
                if (2400*simulation_speed > frames && frames > 2350*simulation_speed) {

                    //this.dY -= 4 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (2600 *simulation_speed> frames && frames > 2550*simulation_speed) {

                    this.dX -= 4 * globalSpeed;


                }
                //FINISH
                if( frames ==2999*simulation_speed){

                    this.dX =245;
                    this.dY =55;


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

        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 1){
                nr1.dY = destination_number_table[4][0];
                nr1.dX = destination_number_table[4][1];
                nr1.dWidth = destination_number_table[4][2];
                nr1.dHeight = destination_number_table[4][3];
                nr1.tdY = tree_destination_number_table[4][0];
                nr1.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 1){
                nr1.dY = destination_number_table[2][0];
                nr1.dX = destination_number_table[2][1];
                nr1.dWidth = destination_number_table[2][2];
                nr1.dHeight = destination_number_table[2][3];
                nr1.tdY = tree_destination_number_table[2][0];
                nr1.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 1){
                nr1.dY = destination_number_table[0][0];
                nr1.dX = destination_number_table[0][1];
                nr1.dWidth = destination_number_table[0][2];
                nr1.dHeight = destination_number_table[0][3];
                nr1.tdY = tree_destination_number_table[0][0];
                nr1.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 1){
                nr1.dY = destination_number_table[3][0];
                nr1.dX = destination_number_table[3][1];
                nr1.dWidth = destination_number_table[3][2];
                nr1.dHeight = destination_number_table[3][3];
                nr1.tdY = tree_destination_number_table[3][0];
                nr1.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 1){
                nr1.dY = destination_number_table[1][0];
                nr1.dX = destination_number_table[1][1];
                nr1.dWidth = destination_number_table[1][2];
                nr1.dHeight = destination_number_table[1][3];
                nr1.tdY = tree_destination_number_table[1][0];
                nr1.tdX = tree_destination_number_table[1][1];
            }
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
            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 1){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 1){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                       this.logic();

                    }
                }else if(tab_step4[2] == 1){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 1){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 1){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 2){
                nr2.dY = destination_number_table[4][0];
                nr2.dX = destination_number_table[4][1];
                nr2.dWidth = destination_number_table[4][2];
                nr2.dHeight = destination_number_table[4][3];
                nr2.tdY = tree_destination_number_table[4][0];
                nr2.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 2){
                nr2.dY = destination_number_table[2][0];
                nr2.dX = destination_number_table[2][1];
                nr2.dWidth = destination_number_table[2][2];
                nr2.dHeight = destination_number_table[2][3];
                nr2.tdY = tree_destination_number_table[2][0];
                nr2.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 2){
                nr2.dY = destination_number_table[0][0];
                nr2.dX = destination_number_table[0][1];
                nr2.dWidth = destination_number_table[0][2];
                nr2.dHeight = destination_number_table[0][3];
                nr2.tdY = tree_destination_number_table[0][0];
                nr2.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 2){
                nr2.dY = destination_number_table[3][0];
                nr2.dX = destination_number_table[3][1];
                nr2.dWidth = destination_number_table[3][2];
                nr2.dHeight = destination_number_table[3][3];
                nr2.tdY = tree_destination_number_table[3][0];
                nr2.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 2){
                nr2.dY = destination_number_table[1][0];
                nr2.dX = destination_number_table[1][1];
                nr2.dWidth = destination_number_table[1][2];
                nr2.dHeight = destination_number_table[1][3];
                nr2.tdY = tree_destination_number_table[1][0];
                nr2.tdX = tree_destination_number_table[1][1];
            }
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


            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 2){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 2){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 2){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 2){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 2){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
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

        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 3){
                nr3.dY = destination_number_table[4][0];
                nr3.dX = destination_number_table[4][1];
                nr3.dWidth = destination_number_table[4][2];
                nr3.dHeight = destination_number_table[4][3];
                nr3.tdY = tree_destination_number_table[4][0];
                nr3.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 3){
                nr3.dY = destination_number_table[2][0];
                nr3.dX = destination_number_table[2][1];
                nr3.dWidth = destination_number_table[2][2];
                nr3.dHeight = destination_number_table[2][3];
                nr3.tdY = tree_destination_number_table[2][0];
                nr3.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 3){
                nr3.dY = destination_number_table[0][0];
                nr3.dX = destination_number_table[0][1];
                nr3.dWidth = destination_number_table[0][2];
                nr3.dHeight = destination_number_table[0][3];
                nr3.tdY = tree_destination_number_table[0][0];
                nr3.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 3){
                nr3.dY = destination_number_table[3][0];
                nr3.dX = destination_number_table[3][1];
                nr3.dWidth = destination_number_table[3][2];
                nr3.dHeight = destination_number_table[3][3];
                nr3.tdY = tree_destination_number_table[3][0];
                nr3.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 3){
                nr3.dY = destination_number_table[1][0];
                nr3.dX = destination_number_table[1][1];
                nr3.dWidth = destination_number_table[1][2];
                nr3.dHeight = destination_number_table[1][3];
                nr3.tdY = tree_destination_number_table[1][0];
                nr3.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 3){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 3){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 3){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 3){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 3){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 4){
                nr4.dY = destination_number_table[4][0];
                nr4.dX = destination_number_table[4][1];
                nr4.dWidth = destination_number_table[4][2];
                nr4.dHeight = destination_number_table[4][3];
                nr4.tdY = tree_destination_number_table[4][0];
                nr4.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 4){
                nr4.dY = destination_number_table[2][0];
                nr4.dX = destination_number_table[2][1];
                nr4.dWidth = destination_number_table[2][2];
                nr4.dHeight = destination_number_table[2][3];
                nr4.tdY = tree_destination_number_table[2][0];
                nr4.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 4){
                nr4.dY = destination_number_table[0][0];
                nr4.dX = destination_number_table[0][1];
                nr4.dWidth = destination_number_table[0][2];
                nr4.dHeight = destination_number_table[0][3];
                nr4.tdY = tree_destination_number_table[0][0];
                nr4.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 4){
                nr4.dY = destination_number_table[3][0];
                nr4.dX = destination_number_table[3][1];
                nr4.dWidth = destination_number_table[3][2];
                nr4.dHeight = destination_number_table[3][3];
                nr4.tdY = tree_destination_number_table[3][0];
                nr4.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 4){
                nr4.dY = destination_number_table[1][0];
                nr4.dX = destination_number_table[1][1];
                nr4.dWidth = destination_number_table[1][2];
                nr4.dHeight = destination_number_table[1][3];
                nr4.tdY = tree_destination_number_table[1][0];
                nr4.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 4){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 4){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 4){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 4){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 4){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }


            }

        }
    }
    const nr5 = {
        sX : 227,
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 5){
                nr5.dY = destination_number_table[4][0];
                nr5.dX = destination_number_table[4][1];
                nr5.dWidth = destination_number_table[4][2];
                nr5.dHeight = destination_number_table[4][3];
                nr5.tdY = tree_destination_number_table[4][0];
                nr5.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 5){
                nr5.dY = destination_number_table[2][0];
                nr5.dX = destination_number_table[2][1];
                nr5.dWidth = destination_number_table[2][2];
                nr5.dHeight = destination_number_table[2][3];
                nr5.tdY = tree_destination_number_table[2][0];
                nr5.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 5){
                nr5.dY = destination_number_table[0][0];
                nr5.dX = destination_number_table[0][1];
                nr5.dWidth = destination_number_table[0][2];
                nr5.dHeight = destination_number_table[0][3];
                nr5.tdY = tree_destination_number_table[0][0];
                nr5.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 5){
                nr5.dY = destination_number_table[3][0];
                nr5.dX = destination_number_table[3][1];
                nr5.dWidth = destination_number_table[3][2];
                nr5.dHeight = destination_number_table[3][3];
                nr5.tdY = tree_destination_number_table[3][0];
                nr5.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 5){
                nr5.dY = destination_number_table[1][0];
                nr5.dX = destination_number_table[1][1];
                nr5.dWidth = destination_number_table[1][2];
                nr5.dHeight = destination_number_table[1][3];
                nr5.tdY = tree_destination_number_table[1][0];
                nr5.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 5){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 5){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 5){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 5){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 5){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }


            }

        }
    }
    const nr6 = {
        sX : 431,
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 6){
                nr6.dY = destination_number_table[4][0];
                nr6.dX = destination_number_table[4][1];
                nr6.dWidth = destination_number_table[4][2];
                nr6.dHeight = destination_number_table[4][3];
                nr6.tdY = tree_destination_number_table[4][0];
                nr6.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 6){
                nr6.dY = destination_number_table[2][0];
                nr6.dX = destination_number_table[2][1];
                nr6.dWidth = destination_number_table[2][2];
                nr6.dHeight = destination_number_table[2][3];
                nr6.tdY = tree_destination_number_table[2][0];
                nr6.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 6){
                nr6.dY = destination_number_table[0][0];
                nr6.dX = destination_number_table[0][1];
                nr6.dWidth = destination_number_table[0][2];
                nr6.dHeight = destination_number_table[0][3];
                nr6.tdY = tree_destination_number_table[0][0];
                nr6.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 6){
                nr6.dY = destination_number_table[3][0];
                nr6.dX = destination_number_table[3][1];
                nr6.dWidth = destination_number_table[3][2];
                nr6.dHeight = destination_number_table[3][3];
                nr6.tdY = tree_destination_number_table[3][0];
                nr6.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 6){
                nr6.dY = destination_number_table[1][0];
                nr6.dX = destination_number_table[1][1];
                nr6.dWidth = destination_number_table[1][2];
                nr6.dHeight = destination_number_table[1][3];
                nr6.tdY = tree_destination_number_table[1][0];
                nr6.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 6){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 6){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 6){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 6){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 6){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }


            }

        }
    }
    const nr7 = {
        sX : 34,
        sY : 403,
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 7){
                nr7.dY = destination_number_table[4][0];
                nr7.dX = destination_number_table[4][1];
                nr7.dWidth = destination_number_table[4][2];
                nr7.dHeight = destination_number_table[4][3];
                nr7.tdY = tree_destination_number_table[4][0];
                nr7.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 7){
                nr7.dY = destination_number_table[2][0];
                nr7.dX = destination_number_table[2][1];
                nr7.dWidth = destination_number_table[2][2];
                nr7.dHeight = destination_number_table[2][3];
                nr7.tdY = tree_destination_number_table[2][0];
                nr7.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 7){
                nr7.dY = destination_number_table[0][0];
                nr7.dX = destination_number_table[0][1];
                nr7.dWidth = destination_number_table[0][2];
                nr7.dHeight = destination_number_table[0][3];
                nr7.tdY = tree_destination_number_table[0][0];
                nr7.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 7){
                nr7.dY = destination_number_table[3][0];
                nr7.dX = destination_number_table[3][1];
                nr7.dWidth = destination_number_table[3][2];
                nr7.dHeight = destination_number_table[3][3];
                nr7.tdY = tree_destination_number_table[3][0];
                nr7.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 7){
                nr7.dY = destination_number_table[1][0];
                nr7.dX = destination_number_table[1][1];
                nr7.dWidth = destination_number_table[1][2];
                nr7.dHeight = destination_number_table[1][3];
                nr7.tdY = tree_destination_number_table[1][0];
                nr7.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 7){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 7){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 7){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 7){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 7){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }


            }

        }
    }
    const nr8 = {
        sX : 230,
        sY : 403,
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 8){
                nr8.dY = destination_number_table[4][0];
                nr8.dX = destination_number_table[4][1];
                nr8.dWidth = destination_number_table[4][2];
                nr8.dHeight = destination_number_table[4][3];
                nr8.tdY = tree_destination_number_table[4][0];
                nr8.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 8){
                nr8.dY = destination_number_table[2][0];
                nr8.dX = destination_number_table[2][1];
                nr8.dWidth = destination_number_table[2][2];
                nr8.dHeight = destination_number_table[2][3];
                nr8.tdY = tree_destination_number_table[2][0];
                nr8.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 8){
                nr8.dY = destination_number_table[0][0];
                nr8.dX = destination_number_table[0][1];
                nr8.dWidth = destination_number_table[0][2];
                nr8.dHeight = destination_number_table[0][3];
                nr8.tdY = tree_destination_number_table[0][0];
                nr8.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 8){
                nr8.dY = destination_number_table[3][0];
                nr8.dX = destination_number_table[3][1];
                nr8.dWidth = destination_number_table[3][2];
                nr8.dHeight = destination_number_table[3][3];
                nr8.tdY = tree_destination_number_table[3][0];
                nr8.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 8){
                nr8.dY = destination_number_table[1][0];
                nr8.dX = destination_number_table[1][1];
                nr8.dWidth = destination_number_table[1][2];
                nr8.dHeight = destination_number_table[1][3];
                nr8.tdY = tree_destination_number_table[1][0];
                nr8.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 8){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 8){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 8){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 8){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 8){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
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
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 9){
                nr9.dY = destination_number_table[4][0];
                nr9.dX = destination_number_table[4][1];
                nr9.dWidth = destination_number_table[4][2];
                nr9.dHeight = destination_number_table[4][3];
                nr9.tdY = tree_destination_number_table[4][0];
                nr9.tdX = tree_destination_number_table[4][1];
            }else if(tab_step4[1] == 9){
                nr9.dY = destination_number_table[2][0];
                nr9.dX = destination_number_table[2][1];
                nr9.dWidth = destination_number_table[2][2];
                nr9.dHeight = destination_number_table[2][3];
                nr9.tdY = tree_destination_number_table[2][0];
                nr9.tdX = tree_destination_number_table[2][1];
            }else if(tab_step4[2] == 9){
                nr9.dY = destination_number_table[0][0];
                nr9.dX = destination_number_table[0][1];
                nr9.dWidth = destination_number_table[0][2];
                nr9.dHeight = destination_number_table[0][3];
                nr9.tdY = tree_destination_number_table[0][0];
                nr9.tdX = tree_destination_number_table[0][1];
            }else if(tab_step4[3] == 9){
                nr9.dY = destination_number_table[3][0];
                nr9.dX = destination_number_table[3][1];
                nr9.dWidth = destination_number_table[3][2];
                nr9.dHeight = destination_number_table[3][3];
                nr9.tdY = tree_destination_number_table[3][0];
                nr9.tdX = tree_destination_number_table[3][1];
            }else if(tab_step4[4] == 9){
                nr9.dY = destination_number_table[1][0];
                nr9.dX = destination_number_table[1][1];
                nr9.dWidth = destination_number_table[1][2];
                nr9.dHeight = destination_number_table[1][3];
                nr9.tdY = tree_destination_number_table[1][0];
                nr9.tdX = tree_destination_number_table[1][1];
            }
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




            if(state.current == state.over ||state.current == state.getReady){

            }else{
                if(tab_step4[0] == 9){
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX -=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;
                    }
                    if( frames ==1600*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX -=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();
                    }
                }else if(tab_step4[1] == 9){
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2600*simulation_speed && frames <=2650*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2700*simulation_speed){

                        this.tdX =240;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();

                    }
                }else if(tab_step4[2] == 9){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX +=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =185;
                        this.tdY =260;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX +=7.7*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    if( frames ==1800*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;
                    }
                    //SWAP IN TABLE
                    if( frames >1850*simulation_speed && frames <=1900*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2200*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >2250*simulation_speed && frames <=2300*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE
                    if( frames >2450*simulation_speed && frames <=2500*simulation_speed){
                        this.dX +=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2500*simulation_speed){

                        this.tdX =360;
                        this.tdY =210;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[3] == 9){
                    //SWAP
                    if( frames ==1200*simulation_speed){
                        this.tdX =240;
                        this.tdY =210;

                    }
                    //SWAP IN TABLE
                    if( frames >1250*simulation_speed && frames <=1300*simulation_speed){
                        this.dX -=8*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==1600*simulation_speed){

                        this.tdX =300;
                        this.tdY =160;
                    }
                    //SWAP IN TABLE
                    if( frames >1650*simulation_speed && frames <=1700*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP IN TABLE - REMOVE THE NODE
                    if( frames >1950*simulation_speed && frames <=2000*simulation_speed){
                        this.dX +=12*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //SWAP
                    if( frames ==2050*simulation_speed){

                        this.tdX =185;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }else if(tab_step4[4] == 9){
                    //SWAP
                    if( frames ==1000*simulation_speed){
                        this.tdX =300;
                        this.tdY =160;

                    }
                    //SWAP IN TABLE
                    if( frames >1050*simulation_speed && frames <=1100*simulation_speed){
                        this.dX -=4*globalSpeed;
                        //  this.dY +=6.5*globalSpeed;

                    }
                    //REMOVE THE NODE
                    if( frames >1400*simulation_speed && frames < 1450*simulation_speed){
                        this.dX +=16*globalSpeed;
                        // this.tdY =160;
                    }
                    if( frames ==1450*simulation_speed){
                        this.tdX =295;
                        this.tdY =260;
                    }
                    //FINISH
                    if( frames ==2999*simulation_speed){

                        this.logic();


                    }
                }


            }

        }
    }
    const bgRectangle = {

        sX : 33,
        sY : 33,
        sWidth : 670-33,
        sHeight : 270-33,
        dY : 95,
        dX : 8,
        dWidth : 200,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = state.current == state.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += frames % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(state.current == state.over ||state.current == state.getReady){

            }else{
                // go to 2nd
                if(1050 > frames && frames > 1000){
                    this.dHeight +=3.6*globalSpeed;
                    this.dY +=3.5* globalSpeed;
                }
                if(1450 > frames && frames > 1400){
                    this.dHeight -=2*globalSpeed;
                    this.dY +=7* globalSpeed;
                }
                if(1550 > frames && frames > 1500){
                    this.dHeight +=2*globalSpeed;
                    this.dY -=7* globalSpeed;
                }
                if(2000 > frames && frames > 1950){
                    this.dHeight -=2*globalSpeed;
                    this.dY +=7* globalSpeed;
                }
                if(2100 > frames && frames > 2050){
                    this.dHeight +=2*globalSpeed;
                    this.dY -=7* globalSpeed;
                }
                if(2600 > frames && frames > 2550){
                    this.dHeight -=2*globalSpeed;
                    this.dY +=7* globalSpeed;
                }
                if(2700 > frames && frames > 2650){
                    this.dHeight +=2*globalSpeed;
                    this.dY -=7* globalSpeed;
                }
                if(2850 > frames && frames > 2800){
                    this.dHeight -=2*globalSpeed;
                    this.dY +=7* globalSpeed;
                }
                if(2950 > frames && frames > 2900){
                    this.dHeight +=2*globalSpeed;
                    this.dY -=7* globalSpeed;
                }
                // if(1200 > frames && frames > 1150){
                //     this.dY -=2.7* globalSpeed;
                // }
                // if(1200 > frames && frames > 1150){
                //     this.dHeight -=1.5*globalSpeed;
                //     this.dY +=2.4* globalSpeed;
                // }
                // if(1300 > frames && frames > 1250){
                //     this.dHeight +=1.5*globalSpeed;
                //     this.dY -=5.5* globalSpeed;
                // }
                // // go to 3rd
                // if(400 > frames && frames > 350){
                //     this.dHeight -=0.5*globalSpeed;
                //     this.dY +=2.5* globalSpeed;
                // }  // go to 1rd
                // if(600 > frames && frames > 550){
                //     this.dY -=3.9* globalSpeed;
                //     this.dHeight -=1*globalSpeed;
                // }
                // if(800 > frames && frames > 750){
                //     this.dHeight +=1.5*globalSpeed;
                //     this.dY +=1.4* globalSpeed;
                //
                // }
                // if(1200 > frames && frames > 1150){
                //     this.dHeight -=0.5*globalSpeed;
                //     this.dY +=2.5* globalSpeed;
                // }
                // if(1600 > frames && frames > 1550){
                //     this.dY -=3.9* globalSpeed;
                //     this.dHeight -=1*globalSpeed;
                //
                // }
                // if(1800 > frames && frames > 1750){
                //     this.dHeight +=1.5*globalSpeed;
                //     this.dY +=1.4* globalSpeed;
                //
                // }
                // if(2500 > frames && frames > 2450){
                //     this.dHeight -=0.5*globalSpeed;
                //     this.dY +=2.5* globalSpeed;
                // }
                // if(2800 > frames && frames > 2750){
                //     this.dY -=3.9* globalSpeed;
                //     this.dHeight -=1*globalSpeed;
                // }
                // if(3000 > frames && frames > 2950){
                //     this.dHeight +=1.5*globalSpeed;
                //     this.dY +=1.4* globalSpeed;
                // }
                // if(3600 > frames && frames > 3550){
                //     this.dHeight -=0.5*globalSpeed;
                //     this.dY +=2.5* globalSpeed;
                // }
                // // if(1200 > frames && frames > 850){
                //     this.dX +=globalSpeed;
                // }
                // if(1800 > frames && frames > 1450){
                //     this.dX +=globalSpeed;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( frames == 2050){
                //     this.dX =50;
                // }
                // if(2650 > frames && frames > 2300){
                //     this.dX +=globalSpeed;
                // }
                // if(3250 > frames && frames > 2900){
                //     this.dX +=globalSpeed;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( frames == 3500){
                //     this.dX =50;
                // }
                // if(4000 > frames && frames > 3750){
                //     this.dX +=globalSpeed;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(frames == 4250){
                //     this.dX =50;
                // }
                // //finish
                if(frames==2998){

                    this.dY =95;


                }
            }


        }
    }

    const bgsteps1 = {

        sX : 42,
        sY : 32,
        sWidth : 504,
        sHeight : 321,
        dY : 100,
        dX : 20,
        dWidth : 200,
        dHeight :200  ,
        draw : function(){

            ctx.drawImage(bg_steps,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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


            if(state.current == state.over ||state.current == state.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > frames && frames > 250){
                    this.dX +=globalSpeed;
                }
                if(1200 > frames && frames > 850){
                    this.dX +=globalSpeed;
                }
                if(1800 > frames && frames > 1450){
                    this.dX +=globalSpeed;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( frames == 2050){
                    this.dX =50;
                }
                if(2650 > frames && frames > 2300){
                    this.dX +=globalSpeed;
                }
                if(3250 > frames && frames > 2900){
                    this.dX +=globalSpeed;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( frames == 3500){
                    this.dX =50;
                }
                if(4000 > frames && frames > 3750){
                    this.dX +=globalSpeed;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(frames == 4250){
                    this.dX =50;
                }
                //finish
                if(frames==2498){
                    this.dX =110;
                    this.dY =0;
                    this.dWidth =500;
                    this.dHeight =150;

                }
            }


        }
    }

//GET READY MESSAGE
    const getReady = {
        sX : 273,
        sY : 110,
        sWidth : 436 - 273,
        sHeight : 177 - 110,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,

        draw : function(){
            if(state.current == state.getReady){
                ctx.drawImage(pauseHEAP,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }
    const gameOver = {
        sX : 390,
        sY : 230,
        sWidth : 760 - 390,
        sHeight : 380 - 230,
        dY : 160,
        dX : 220,
        dWidth : 200 - 24,
        dHeight :100 - 24 ,
        draw : function(){
            if(state.current == state.over){
                ctx.drawImage(click2start,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }
        }
    }

//DRAW
    function draw(){
        //background
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0,0,cvs.width,cvs.height);
        bgRectangle.draw();
        table_top.draw();
        index00.draw();index01.draw();index02.draw();index03.draw();index04.draw();





        //DRAWING ACTION FOR 'PIWOT' NUMBER
        // if(state.current == state.getReady){}
        // else{

        if( frames > 200*simulation_speed && frames <=2498*simulation_speed){
            red_circle01.draw();

        }
        if( frames > 200*simulation_speed && frames <=350*simulation_speed){
            if(tab_step4[2] == 1){
                nr1.drawTree();
            } else if(tab_step4[2] == 2){
                nr2.drawTree();
            } else if(tab_step4[2] == 3){
                nr3.drawTree();
            } else if(tab_step4[2] == 4) {
                nr4.drawTree();
            }else if(tab_step4[2] == 5){
                    nr5.drawTree();
            } else if(tab_step4[2] == 6){
                nr6.drawTree();
            } else if(tab_step4[2] == 7){
                nr7.drawTree();
            } else if(tab_step4[2] == 8){
                nr8.drawTree();
            }else if(tab_step4[2] == 9){
                nr9.drawTree();
            }


        }
        if( frames > 350*simulation_speed && frames <=500*simulation_speed){
            branch01left.draw();

            //next
            if(tab_step4[2] == 1){
                nr1.drawTree();
            } else if(tab_step4[2] == 2){
                nr2.drawTree();
            } else if(tab_step4[2] == 3){
                nr3.drawTree();
            } else if(tab_step4[2] == 4){
                nr4.drawTree();
            } else if(tab_step4[2] == 5){
                nr5.drawTree();
            }else if(tab_step4[2] == 6){
                nr6.drawTree();
            }else if(tab_step4[2] == 7){
                nr7.drawTree();
            }else if(tab_step4[2] == 8){
                nr8.drawTree();
            }else if(tab_step4[2] == 9){
                nr9.drawTree();
            }


            //next
            if(tab_step4[4] == 1){
                nr1.drawTree();
            } else if(tab_step4[4] == 2){
                nr2.drawTree();
            } else if(tab_step4[4] == 3){
                nr3.drawTree();
            } else if(tab_step4[4] == 4){
                nr4.drawTree();
            }else if(tab_step4[4] == 5){
                nr5.drawTree();
            }else if(tab_step4[4] == 6){
                nr6.drawTree();
            } else if(tab_step4[4] == 7){
                nr7.drawTree();
            }else if(tab_step4[4] == 8){
                nr8.drawTree();
            }else if(tab_step4[4] == 9){
                nr9.drawTree();
            }


        }
        if( frames > 500*simulation_speed && frames <=650*simulation_speed){
            branch01left.draw();
            branch01right.draw();
            //next
            if(tab_step4[2] == 1){
                nr1.drawTree();
            } else if(tab_step4[2] == 2){
                nr2.drawTree();
            } else if(tab_step4[2] == 3){
                nr3.drawTree();
            } else if(tab_step4[2] == 4){
                nr4.drawTree();
            }else if(tab_step4[2] == 5){
                nr5.drawTree();
            }else if(tab_step4[2] == 6){
                nr6.drawTree();
            }else if(tab_step4[2] == 7){
                nr7.drawTree();
            } else if(tab_step4[2] == 8){
                nr8.drawTree();
            }else if(tab_step4[2] == 9){
                nr9.drawTree();
            }


            //next
            if(tab_step4[4] == 1){
                nr1.drawTree();
            } else if(tab_step4[4] == 2){
                nr2.drawTree();
            } else if(tab_step4[4] == 3){
                nr3.drawTree();
            } else if(tab_step4[4] == 4){
                nr4.drawTree();
            }else if(tab_step4[4] == 5){
                nr5.drawTree();
            } else if(tab_step4[4] == 6){
                nr6.drawTree();
            }else if(tab_step4[4] == 7){
                nr7.drawTree();
            }else if(tab_step4[4] == 8){
                nr8.drawTree();
            }else if(tab_step4[4] == 9){
                nr9.drawTree();
            }

            //next
            if(tab_step4[1] == 1){
                nr1.drawTree();
            } else if(tab_step4[1] == 2){
                nr2.drawTree();
            } else if(tab_step4[1] == 3){
                nr3.drawTree();
            } else if(tab_step4[1] == 4){
                nr4.drawTree();
            }else if(tab_step4[1] == 5){
                nr5.drawTree();
            }else if(tab_step4[1] == 6){
                nr6.drawTree();
            } else if(tab_step4[1] == 7){
                nr7.drawTree();
            }else if(tab_step4[1] == 8){
                nr8.drawTree();
            }else if(tab_step4[1] == 9){
                nr9.drawTree();
            }
        }
        if( frames > 650*simulation_speed && frames <=800*simulation_speed){
            branch01left.draw();branch01left.draw2();
            branch01right.draw();


            //next
            if(tab_step4[2] == 1){
                nr1.drawTree();
            } else if(tab_step4[2] == 2){
                nr2.drawTree();
            } else if(tab_step4[2] == 3){
                nr3.drawTree();
            } else if(tab_step4[2] == 4){
                nr4.drawTree();
            } else if(tab_step4[2] == 5){
                nr5.drawTree();
            }else if(tab_step4[2] == 6){
                nr6.drawTree();
            }else if(tab_step4[2] == 7){
                nr7.drawTree();
            }else if(tab_step4[2] == 8){
                nr8.drawTree();
            }else if(tab_step4[2] == 9){
                nr9.drawTree();
            }


            //next
            if(tab_step4[4] == 1){
                nr1.drawTree();
            } else if(tab_step4[4] == 2){
                nr2.drawTree();
            } else if(tab_step4[4] == 3){
                nr3.drawTree();
            } else if(tab_step4[4] == 4){
                nr4.drawTree();
            }else if(tab_step4[4] == 5){
                nr5.drawTree();
            } else if(tab_step4[4] == 6){
                nr6.drawTree();
            }else if(tab_step4[4] == 7){
                nr7.drawTree();
            }else if(tab_step4[4] == 8){
                nr8.drawTree();
            }else if(tab_step4[4] == 9){
                nr9.drawTree();
            }

            //next
            if(tab_step4[1] == 1){
                nr1.drawTree();
            } else if(tab_step4[1] == 2){
                nr2.drawTree();
            } else if(tab_step4[1] == 3){
                nr3.drawTree();
            } else if(tab_step4[1] == 4){
                nr4.drawTree();
            } else if(tab_step4[1] == 5){
                nr5.drawTree();
            }else if(tab_step4[1] == 6){
                nr6.drawTree();
            }else if(tab_step4[1] == 7){
                nr7.drawTree();
            }else if(tab_step4[1] == 8){
                nr8.drawTree();
            }else if(tab_step4[1] == 9){
                nr9.drawTree();
            }
            //next
            if(tab_step4[3] == 1){
                nr1.drawTree();
            } else if(tab_step4[3] == 2){
                nr2.drawTree();
            } else if(tab_step4[3] == 3){
                nr3.drawTree();
            } else if(tab_step4[3] == 4){
                nr4.drawTree();
            }else if(tab_step4[3] == 5){
                nr5.drawTree();
            }else if(tab_step4[3] == 6){
                nr6.drawTree();
            } else if(tab_step4[3] == 7){
                nr7.drawTree();
            }else if(tab_step4[3] == 8){
                nr8.drawTree();
            }else if(tab_step4[3] == 9){
                nr9.drawTree();
            }

        }
        if( frames > 800*simulation_speed && frames <=2999*simulation_speed){


            if( frames < 2550 *simulation_speed){
                branch01right.draw();
            }
            if( frames < 2800*simulation_speed ){
                branch01left.draw();
            }

            if( frames > 650 *simulation_speed&& frames <=2100*simulation_speed){
                branch01left.draw2();
                if( frames > 800*simulation_speed && frames <=1450*simulation_speed){
                    branch01right.draw2();
                }
                //next
                if(tab_step4[3] == 1){
                    nr1.drawTree();
                } else if(tab_step4[3] == 2){
                    nr2.drawTree();
                } else if(tab_step4[3] == 3){
                    nr3.drawTree();
                } else if(tab_step4[3] == 4){
                    nr4.drawTree();
                } else if(tab_step4[3] == 5){
                    nr5.drawTree();
                }else if(tab_step4[3] == 6){
                    nr6.drawTree();
                }else if(tab_step4[3] == 7){
                    nr7.drawTree();
                }else if(tab_step4[3] == 8){
                    nr8.drawTree();
                }else if(tab_step4[3] == 9){
                    nr9.drawTree();
                }
                if( frames > 800*simulation_speed && frames <=1450*simulation_speed){
                    //next
                    if(tab_step4[4] == 1){
                        nr1.drawTree();
                    } else if(tab_step4[4] == 2){
                        nr2.drawTree();
                    } else if(tab_step4[4] == 3){
                        nr3.drawTree();
                    } else if(tab_step4[4] == 4){
                        nr4.drawTree();
                    }else if(tab_step4[4] == 5){
                        nr5.drawTree();
                    }else if(tab_step4[4] == 6){
                        nr6.drawTree();
                    } else if(tab_step4[4] == 7){
                        nr7.drawTree();
                    }else if(tab_step4[4] == 8){
                        nr8.drawTree();
                    }else if(tab_step4[4] == 9){
                        nr9.drawTree();
                    }
                }
            }
            if( frames < 2550 *simulation_speed){
                //next
                if(tab_step4[2] == 1){
                    nr1.drawTree();
                } else if(tab_step4[2] == 2){
                    nr2.drawTree();
                } else if(tab_step4[2] == 3){
                    nr3.drawTree();
                } else if(tab_step4[2] == 4){
                    nr4.drawTree();
                }else if(tab_step4[2] == 5){
                    nr5.drawTree();
                }else if(tab_step4[2] == 6){
                    nr6.drawTree();
                }else if(tab_step4[2] == 7){
                    nr7.drawTree();
                }else if(tab_step4[2] == 8){
                    nr8.drawTree();
                } else if(tab_step4[2] == 9){
                    nr9.drawTree();
                }
            }
            if( frames < 2800 *simulation_speed){

                //next
                if(tab_step4[1] == 1){
                    nr1.drawTree();
                } else if(tab_step4[1] == 2){
                    nr2.drawTree();
                } else if(tab_step4[1] == 3){
                    nr3.drawTree();
                } else if(tab_step4[1] == 4){
                    nr4.drawTree();
                }else if(tab_step4[1] == 5){
                    nr5.drawTree();
                } else if(tab_step4[1] == 6){
                    nr6.drawTree();
                }else if(tab_step4[1] == 7){
                    nr7.drawTree();
                }else if(tab_step4[1] == 8){
                    nr8.drawTree();
                }else if(tab_step4[1] == 9){
                    nr9.drawTree();
                }
            }
            //next
            if(tab_step4[0] == 1){
                nr1.drawTree();
            } else if(tab_step4[0] == 2){
                nr2.drawTree();
            } else if(tab_step4[0] == 3){
                nr3.drawTree();
            } else if(tab_step4[0] == 4){
                nr4.drawTree();
            }else if(tab_step4[0] == 5){
                nr5.drawTree();
            }else if(tab_step4[0] == 6){
                nr6.drawTree();
            } else if(tab_step4[0] == 7){
                nr7.drawTree();
            }else if(tab_step4[0] == 8){
                nr8.drawTree();
            }else if(tab_step4[0] == 9){
                nr9.drawTree();
            }

        }
        if( frames > 950*simulation_speed && frames <=2850*simulation_speed){
            red_circle02.draw();
        }
        if( frames > 1000 *simulation_speed&& frames <=2850*simulation_speed){
            brown_circle01.draw();
            brown_circle02.draw();
        }






        //title of canvas
        ctx.font = "20px Arial";
        ctx.strokeText("Sortowanie ",25,50);
        ctx.strokeText("stogowe! ",25,75);
        //draw function
        // bg.draw();
        //c2n.draw();

        //if user write the first number into form
        if(x1==1 || x2==1|| x3==1|| x4==1|| x5==1){
            nr1.draw();
        }
        if(x1==2 || x2==2|| x3==2|| x4==2|| x5==2){
            nr2.draw();
        }
        if(x1==3 || x2==3|| x3==3|| x4==3|| x5==3){
            nr3.draw();
        }
        if(x1==4 || x2==4|| x3==4|| x4==4|| x5==4){
            nr4.draw();
        }
        if(x1==5 || x2==5|| x3==5|| x4==5|| x5==5){
            nr5.draw();
        }
        if(x1==6 || x2==6|| x3==6|| x4==6|| x5==6){
            nr6.draw();
        }
        if(x1==7 || x2==7|| x3==7|| x4==7|| x5==7){
            nr7.draw();
        }
        if(x1==8 || x2==8|| x3==8|| x4==8|| x5==8){
            nr8.draw();
        }
        if(x1==9 || x2==9|| x3==9|| x4==9|| x5==9){
            nr9.draw();
        }

        bgsteps1.draw();
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
        nr5.update();
        nr6.update();
        nr7.update();
        nr8.update();
        nr9.update();
        bgRectangle.update();
        red_circle01.update();
        red_circle02.update();
        brown_circle01.update();
        brown_circle02.update();
        //c2n.update();
        //line.update();
        if(frames == 3000*simulation_speed){
            state.current = 2;
        };


    }
    //FUCTION WHICH CHOSE PROPERTY NUMBERS INTO ALGORITHM
    function logic_for_all(){
        nr1.logic();
        nr2.logic();
        nr3.logic();
        nr4.logic();
         nr5.logic();
         nr6.logic();
         nr7.logic();
         nr8.logic();
        nr9.logic();
    }
//LOOP
    function loop(){
        update();
        draw();
        if(state.current == state.over ||state.current == state.getReady){

        }else{
            frames=frames + frame_speed;

        }

        requestAnimationFrame(loop);
    }
    logic_for_all();
    loop();

