


    x1 = 1;
    x2 = 2;
    x3 = 3;
    x4 = 4;
    x5 = 9;


// TEMPORARY VARIABLE
    var x, text;
    // TABLE OF 5 NUMBERS : dY,dX,dWidth,dHeight
    const destination_number_table = [
        [80,20, 100-24,100-24],
        [80,100, 100-24,100-24],
        [80,180, 100-24,100-24],
        [80,260, 100-24,100-24],
        [80,340, 100-24,100-24],
    ];

    // TABLE OF 5 NUMBERS : bdY,bdX,bdWidth,bdHeight
    const destination_number_table_blue = [
        [80 + 15,20 + 15, 100-54,100-54],
        [80 + 15 + 75,100 + 15 + 250, 100-54,100-54],
        [80 + 15 + 75,180 + 15, 100-54,100-54],
        [80 + 15 + 155,20 + 15 + 10 + 400 - 7, 100-54,100-54],
        [80 + 15 + 155,20 + 15 + 10, 100-54,100-54],
    ];


// SELECT CVS
    const cvsQUICK = document.getElementById("birdQUICK");
    cvsQUICK.style.display = "block";
    const ctxQUICK = cvsQUICK.getContext("2d");
    const bg_steps=document.getElementById("bg");




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
    let framesQUICK = 0;
    let globalSpeedQUICK = 0.5;
    let framesRememberQUICK = 0;


    const restart = document.getElementById("restart_img");

//IMAGE OF THE BIRD
    const spriteQUICK = document.getElementById("image");
//IMAGE OF NUMBERS
    const numbersQUICK = document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
    const blue_numbersQUICK = document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
    const compare2numbersQUICK = document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
    const click2startQUICK = document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
    const pauseQUICK = document.getElementById("pause");
    const img1=document.getElementById("img1");//rectangle
//GAME STATE
    const stateQUICK = {
        current: 2,
        getReady: 0,
        game: 1,
        over: 2
    }

    restart.addEventListener("click",function(evt){
        switch(stateQUICK.current){
            case stateQUICK.getReady:
            case stateQUICK.game:
                stateQUICK.current = 2;

                // bgRectangle.dX =100;
                // bgRectangle.dY =95;
                // bgRectangle.dHeight =50;
                // red_circle01.dX = 195;
                // red_circle01.dY = 55;
                // red_circle02.dX = 290;
                // red_circle02.dY = 155;
                // brown_circle01.dX = 195;
                // brown_circle01.dY = 55;
                // brown_circle02.dX = 245;
                // brown_circle02.dY = 55;



                // TABLE OF 5 NUMBERS : bdY,bdX,bdWidth,bdHeight

                bgRectangle.dX = 250;
                //red_circle01.dY =190;
                // brown_circle01.dX =85;
                // brown_circle01.dY =265;
                nr1QUICK.dX =340;
                nr1QUICK.dY =80;
                //nr1.tdY =260;
                //nr1.tdX =295;
                nr1QUICK.bdY= 80 + 15 + 155;
                nr1QUICK.bdX=20 + 15 + 10;

                // nr1HEAP.dY =200;
                nr2QUICK.dX =180;
                nr2QUICK.dY =80;
                nr2QUICK.bdY= 80 + 15 + 75;
                nr2QUICK.bdX=180 + 15;
                //nr2.tdY =210;
                //nr2.tdX =360;


                // nr2HEAP.dY =200;
                nr3QUICK.dX =20;
                nr3QUICK.dY =80;
                nr3QUICK.bdY= 80 + 15;
                nr3QUICK.bdX=20 + 15;
                //nr3.tdY =160;
                //nr3.tdX =300;


                //  nr3HEAP.dY =200;
                nr4QUICK.dX =100;
                nr4QUICK.dY =80;
                nr4QUICK.bdY= 80 + 15 + 75;
                nr4QUICK.bdX=100 + 15 + 250;
                //nr4.tdY =260;
                //nr4.tdX =185;


                //  nr4HEAP.dY =200;
                nr9QUICK.dX =260;
                nr9QUICK.dY =80;
                nr9QUICK.bdY= 80 + 15 + 155;
                nr9QUICK.bdX=20 + 15 + 10 + 400 - 7;
                //nr5.tdY =210;
                //nr5.tdX =240;

                //   nr9HEAP.dY =200;
                //   lineHEAP.dX =410;
                //  lineleftHEAP.dX= -70;
                framesQUICK = 0;


                break;
        }
    });
//CONTROL THE GAME
    cvsQUICK.addEventListener("click", function (evt) {
        switch (stateQUICK.current) {
            case stateQUICK.getReady:
                stateQUICK.current = stateQUICK.game;
                framesQUICK = framesRememberQUICK;
                framesRememberQUICK = framesQUICK;
                break;
            case stateQUICK.game:
                stateQUICK.current = stateQUICK.getReady;
                framesRememberQUICK = framesQUICK;
                //HERE I WILL WRITE THE ALGORITHM
                //  bird.flap();
                nr1QUICK.bubbleSort();
                break;
            case stateQUICK.over:
                stateQUICK.current = stateQUICK.game;
                framesQUICK = 0;
                break;
        }
    });


//BACKGROUD
    const bgQUICK = {
        sX: 0,
        sY: 0,
        w: 275,
        h: 226,
        x: 0,
        y: cvsQUICK.height - 226,

        draw: function () {
            ctxQUICK.drawImage(spriteQUICK, this.sX, this.sY, this.w, this.h, this.x, this.y,
                this.w, this.h);
        }
    }
    const bgRectangle = {

        sX : 33,
        sY : 33,
        sWidth : 670-33,
        sHeight : 270-33,
        dY : -20,
        dX : 250,
        dWidth : 170,
        dHeight :140  ,

        draw : function(){
            ctxQUICK.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if(stateQUICK.current == stateQUICK.over ||stateQUICK.current == stateQUICK.getReady){

            }else{
                // go to 2nd
                if(700 > framesQUICK && framesQUICK > 650){
                    //this.dHeight -=1.5*globalSpeedQUICK;
                    this.dX +=7.2* globalSpeedQUICK;
                }
                if(1200 > framesQUICK && framesQUICK > 1150){
                    this.dX -=7.2* globalSpeedQUICK;
                }
                if(1550 > framesQUICK && framesQUICK > 1500){
                    this.dX +=7.2* globalSpeedQUICK;
                }
                if(1750 > framesQUICK && framesQUICK > 1700){
                    this.dX -=7.2* globalSpeedQUICK;
                }
                if(1950 > framesQUICK && framesQUICK > 1900){
                    this.dX +=7.2* globalSpeedQUICK;
                }
                // if(1300 > framesQUICK && framesQUICK > 1250){
                //     this.dHeight +=1.5*globalSpeedQUICK;
                //     this.dY -=5.3* globalSpeedQUICK;
                // }
                // // go to 3rd
                // if(400 > framesQUICK && framesQUICK > 350){
                //     this.dHeight -=0.5*globalSpeedQUICK;
                //     this.dY +=2.5* globalSpeedQUICK;
                // }  // go to 1rd
                // if(600 > framesQUICK && framesQUICK > 550){
                //     this.dY -=3.9* globalSpeedQUICK;
                //     this.dHeight -=1*globalSpeedQUICK;
                // }
                // if(800 > framesQUICK && framesQUICK > 750){
                //     this.dHeight +=1.5*globalSpeedQUICK;
                //     this.dY +=1.4* globalSpeedQUICK;
                //
                // }
                // if(1200 > framesQUICK && framesQUICK > 1150){
                //     this.dHeight -=0.5*globalSpeedQUICK;
                //     this.dY +=2.5* globalSpeedQUICK;
                // }
                // if(1600 > framesQUICK && framesQUICK > 1550){
                //     this.dY -=3.9* globalSpeedQUICK;
                //     this.dHeight -=1*globalSpeedQUICK;
                //
                // }
                // if(1800 > framesQUICK && framesQUICK > 1750){
                //     this.dHeight +=1.5*globalSpeedQUICK;
                //     this.dY +=1.4* globalSpeedQUICK;
                //
                // }
                // if(2500 > framesQUICK && framesQUICK > 2450){
                //     this.dHeight -=0.5*globalSpeedQUICK;
                //     this.dY +=2.5* globalSpeedQUICK;
                // }
                // if(2800 > framesQUICK && framesQUICK > 2750){
                //     this.dY -=3.9* globalSpeedQUICK;
                //     this.dHeight -=1*globalSpeedQUICK;
                // }
                // if(3000 > framesQUICK && framesQUICK > 2950){
                //     this.dHeight +=1.5*globalSpeedQUICK;
                //     this.dY +=1.4* globalSpeedQUICK;
                // }
                // if(3600 > framesQUICK && framesQUICK > 3550){
                //     this.dHeight -=0.5*globalSpeedQUICK;
                //     this.dY +=2.5* globalSpeedQUICK;
                // }
                // // if(1200 > framesQUICK && framesQUICK > 850){
                //     this.dX +=globalSpeedQUICK;
                // }
                // if(1800 > framesQUICK && framesQUICK > 1450){
                //     this.dX +=globalSpeedQUICK;
                // }
                // //COMPARISON VALUE OF NUMBERS-2nd run
                // if( framesQUICK == 2050){
                //     this.dX =50;
                // }
                // if(2650 > framesQUICK && framesQUICK > 2300){
                //     this.dX +=globalSpeedQUICK;
                // }
                // if(3250 > framesQUICK && framesQUICK > 2900){
                //     this.dX +=globalSpeedQUICK;
                // }
                // //COMPARISON VALUE OF NUMBERS-3rd run
                // if( framesQUICK == 3500){
                //     this.dX =50;
                // }
                // if(4000 > framesQUICK && framesQUICK > 3750){
                //     this.dX +=globalSpeedQUICK;
                // }
                // //COMPARISON VALUE OF NUMBERS-4th run
                // if(framesQUICK == 4250){
                //     this.dX =50;
                // }
                // //finish
                if(framesQUICK==3998){
                    this.dX =185;
                    this.dY =-20;
                    this.dHeight =30;

                }
            }


        }
    }
    const bgsteps1 = {

        sX : 3,
        sY : 34,
        sWidth : 487-3,
        sHeight : 350-34,
        dY : -20,
        dX : 300,
        dWidth : 300,
        dHeight :150  ,
        draw : function(){

            ctxQUICK.drawImage(bg_steps,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
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


            if(stateQUICK.current == stateQUICK.over ||stateQUICK.current == stateQUICK.getReady){

            }else{
                // this.speed += this.gravity;
                //COMPARISON VALUE OF NUMBERS-1st run
                if(600 > framesQUICK && framesQUICK > 250){
                    this.dX +=globalSpeedQUICK;
                }
                if(1200 > framesQUICK && framesQUICK > 850){
                    this.dX +=globalSpeedQUICK;
                }
                if(1800 > framesQUICK && framesQUICK > 1450){
                    this.dX +=globalSpeedQUICK;
                }
                //COMPARISON VALUE OF NUMBERS-2nd run
                if( framesQUICK == 2050){
                    this.dX =50;
                }
                if(2650 > framesQUICK && framesQUICK > 2300){
                    this.dX +=globalSpeedQUICK;
                }
                if(3250 > framesQUICK && framesQUICK > 2900){
                    this.dX +=globalSpeedQUICK;
                }
                //COMPARISON VALUE OF NUMBERS-3rd run
                if( framesQUICK == 3500){
                    this.dX =50;
                }
                if(4000 > framesQUICK && framesQUICK > 3750){
                    this.dX +=globalSpeedQUICK;
                }
                //COMPARISON VALUE OF NUMBERS-4th run
                if(framesQUICK == 4250){
                    this.dX =50;
                }
                //finish
                if(framesQUICK==1798){
                    this.dX =110;
                    this.dY =0;
                    this.dWidth =500;
                    this.dHeight =150;

                }
            }


        }
    }

//NUMBERS
    const nr1QUICK = {

        //green number
        sX: 24,
        sY: 24,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 340,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 15,
        bsY: 11,
        bsWidth: 107 - 15,
        bsHeight: 101 - 11,
        bdY: 70 + 15 + 155,
        bdX: 20 + 15 + 10,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,


        draw: function () {
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctxQUICK.drawImage(numbersQUICK, nr1QUICK.sX, nr1QUICK.sY, this.sWidth, this.sHeight, nr1QUICK.dX, nr1QUICK.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },

        bubbleSort: function () {

        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 1){
                nr1QUICK.dY = destination_number_table[0][0];
                nr1QUICK.dX = destination_number_table[0][1];
                nr1QUICK.dWidth = destination_number_table[0][2];
                nr1QUICK.dHeight = destination_number_table[0][3];
                nr1QUICK.bdY = destination_number_table_blue[0][0];
                nr1QUICK.bdX = destination_number_table_blue[0][1];
                nr1QUICK.bdWidth = destination_number_table_blue[0][2];
                nr1QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 1){
                nr1QUICK.dY = destination_number_table[1][0];
                nr1QUICK.dX = destination_number_table[1][1];
                nr1QUICK.dWidth = destination_number_table[1][2];
                nr1QUICK.dHeight = destination_number_table[1][3];
                nr1QUICK.bdY = destination_number_table_blue[1][0];
                nr1QUICK.bdX = destination_number_table_blue[1][1];
                nr1QUICK.bdWidth = destination_number_table_blue[1][2];
                nr1QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 1){
                nr1QUICK.dY = destination_number_table[2][0];
                nr1QUICK.dX = destination_number_table[2][1];
                nr1QUICK.dWidth = destination_number_table[2][2];
                nr1QUICK.dHeight = destination_number_table[2][3];
                nr1QUICK.bdY = destination_number_table_blue[2][0];
                nr1QUICK.bdX = destination_number_table_blue[2][1];
                nr1QUICK.bdWidth = destination_number_table_blue[2][2];
                nr1QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 1){
                nr1QUICK.dY = destination_number_table[3][0];
                nr1QUICK.dX = destination_number_table[3][1];
                nr1QUICK.dWidth = destination_number_table[3][2];
                nr1QUICK.dHeight = destination_number_table[3][3];
                nr1QUICK.bdY = destination_number_table_blue[3][0];
                nr1QUICK.bdX = destination_number_table_blue[3][1];
                nr1QUICK.bdWidth = destination_number_table_blue[3][2];
                nr1QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 1){
                nr1QUICK.dY = destination_number_table[4][0];
                nr1QUICK.dX = destination_number_table[4][1];
                nr1QUICK.dWidth = destination_number_table[4][2];
                nr1QUICK.dHeight = destination_number_table[4][3];
                nr1QUICK.bdY = destination_number_table_blue[4][0];
                nr1QUICK.bdX = destination_number_table_blue[4][1];
                nr1QUICK.bdWidth = destination_number_table_blue[4][2];
                nr1QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //3/3 CODE WHICH IS IMPORTANT FOR ANIMATION-4 STATES
            //this.frame = this.frame % this.animation.length;

            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 1){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();

                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 1){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 1){

                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {

                        this.sX = 430;
                        this.sY = 24;
                        this.sWidth = 168 - 24;
                        this.sHeight = 168 - 24;
                        this.dY = 70;
                        this.dX = 20;
                        this.dWidth = 100 - 24;
                        this.dHeight = 100 - 24;
                        //blue number

                        this.bdY = 70 + 15;
                        this.bdX = 20 + 15;
                        this.bdWidth = 100 - 54;
                        this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[1] == 1){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 1){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }

            }

        }
    }
    const nr2QUICK = {

        //green number
        sX: 230,
        sY: 24,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 180,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 140,
        bsY: 11,
        bsWidth: 234 - 140,
        bsHeight: 104 - 11,
        bdY: 70 + 15 + 75,
        bdX: 180 + 15,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,

        //frame can change the image of the images
        frame: 0,

        //temporary variable
        gravity: 0.25,
        jump: 4.6,
        speed: 0.25,

        draw: function () {
            //let nr2 = this.animation[this.frame];

            ctxQUICK.drawImage(numbersQUICK, nr2QUICK.sX, nr2QUICK.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        bubbleSort: function () {

        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 2){
                nr2QUICK.dY = destination_number_table[0][0];
                nr2QUICK.dX = destination_number_table[0][1];
                nr2QUICK.dWidth = destination_number_table[0][2];
                nr2QUICK.dHeight = destination_number_table[0][3];
                nr2QUICK.bdY = destination_number_table_blue[0][0];
                nr2QUICK.bdX = destination_number_table_blue[0][1];
                nr2QUICK.bdWidth = destination_number_table_blue[0][2];
                nr2QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 2){
                nr2QUICK.dY = destination_number_table[1][0];
                nr2QUICK.dX = destination_number_table[1][1];
                nr2QUICK.dWidth = destination_number_table[1][2];
                nr2QUICK.dHeight = destination_number_table[1][3];
                nr2QUICK.bdY = destination_number_table_blue[1][0];
                nr2QUICK.bdX = destination_number_table_blue[1][1];
                nr2QUICK.bdWidth = destination_number_table_blue[1][2];
                nr2QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 2){
                nr2QUICK.dY = destination_number_table[2][0];
                nr2QUICK.dX = destination_number_table[2][1];
                nr2QUICK.dWidth = destination_number_table[2][2];
                nr2QUICK.dHeight = destination_number_table[2][3];
                nr2QUICK.bdY = destination_number_table_blue[2][0];
                nr2QUICK.bdX = destination_number_table_blue[2][1];
                nr2QUICK.bdWidth = destination_number_table_blue[2][2];
                nr2QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 2){
                nr2QUICK.dY = destination_number_table[3][0];
                nr2QUICK.dX = destination_number_table[3][1];
                nr2QUICK.dWidth = destination_number_table[3][2];
                nr2QUICK.dHeight = destination_number_table[3][3];
                nr2QUICK.bdY = destination_number_table_blue[3][0];
                nr2QUICK.bdX = destination_number_table_blue[3][1];
                nr2QUICK.bdWidth = destination_number_table_blue[3][2];
                nr2QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 2){
                nr2QUICK.dY = destination_number_table[4][0];
                nr2QUICK.dX = destination_number_table[4][1];
                nr2QUICK.dWidth = destination_number_table[4][2];
                nr2QUICK.dHeight = destination_number_table[4][3];
                nr2QUICK.bdY = destination_number_table_blue[4][0];
                nr2QUICK.bdX = destination_number_table_blue[4][1];
                nr2QUICK.bdWidth = destination_number_table_blue[4][2];
                nr2QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {

            } else {
                if(tab_step4[4] == 2){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 2){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 2){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 2){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 2){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }

            }


        }
    }
    const nr3QUICK = {

        //green number
        sX: 430,
        sY: 24,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 20,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 266,
        bsY: 11,
        bsWidth: 360 - 266,
        bsHeight: 99 - 11,
        bdY: 70 + 15,
        bdX: 20 + 15,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,

        //frame can change the image of the images
        frame: 0,


        draw: function () {
            //let nr3 = this.animation[this.frame];
            ctxQUICK.drawImage(numbersQUICK, nr3QUICK.sX, nr3QUICK.sY, this.sWidth, this.sHeight, nr3QUICK.dX, nr3QUICK.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 3){
                nr3QUICK.dY = destination_number_table[0][0];
                nr3QUICK.dX = destination_number_table[0][1];
                nr3QUICK.dWidth = destination_number_table[0][2];
                nr3QUICK.dHeight = destination_number_table[0][3];
                nr3QUICK.bdY = destination_number_table_blue[0][0];
                nr3QUICK.bdX = destination_number_table_blue[0][1];
                nr3QUICK.bdWidth = destination_number_table_blue[0][2];
                nr3QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 3){
                nr3QUICK.dY = destination_number_table[1][0];
                nr3QUICK.dX = destination_number_table[1][1];
                nr3QUICK.dWidth = destination_number_table[1][2];
                nr3QUICK.dHeight = destination_number_table[1][3];
                nr3QUICK.bdY = destination_number_table_blue[1][0];
                nr3QUICK.bdX = destination_number_table_blue[1][1];
                nr3QUICK.bdWidth = destination_number_table_blue[1][2];
                nr3QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 3){
                nr3QUICK.dY = destination_number_table[2][0];
                nr3QUICK.dX = destination_number_table[2][1];
                nr3QUICK.dWidth = destination_number_table[2][2];
                nr3QUICK.dHeight = destination_number_table[2][3];
                nr3QUICK.bdY = destination_number_table_blue[2][0];
                nr3QUICK.bdX = destination_number_table_blue[2][1];
                nr3QUICK.bdWidth = destination_number_table_blue[2][2];
                nr3QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 3){
                nr3QUICK.dY = destination_number_table[3][0];
                nr3QUICK.dX = destination_number_table[3][1];
                nr3QUICK.dWidth = destination_number_table[3][2];
                nr3QUICK.dHeight = destination_number_table[3][3];
                nr3QUICK.bdY = destination_number_table_blue[3][0];
                nr3QUICK.bdX = destination_number_table_blue[3][1];
                nr3QUICK.bdWidth = destination_number_table_blue[3][2];
                nr3QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 3){
                nr3QUICK.dY = destination_number_table[4][0];
                nr3QUICK.dX = destination_number_table[4][1];
                nr3QUICK.dWidth = destination_number_table[4][2];
                nr3QUICK.dHeight = destination_number_table[4][3];
                nr3QUICK.bdY = destination_number_table_blue[4][0];
                nr3QUICK.bdX = destination_number_table_blue[4][1];
                nr3QUICK.bdWidth = destination_number_table_blue[4][2];
                nr3QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {
                if(tab_step4[4] == 3){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 3){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 3){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 3){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 3){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr4QUICK = {
        //green number
        sX: 24,
        sY: 215,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 100,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 387,
        bsY: 11,
        bsWidth: 485 - 387,
        bsHeight: 100 - 11,
        bdY: 70 + 15 + 75,
        bdX: 100 + 15 + 250,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 4){
                nr4QUICK.dY = destination_number_table[0][0];
                nr4QUICK.dX = destination_number_table[0][1];
                nr4QUICK.dWidth = destination_number_table[0][2];
                nr4QUICK.dHeight = destination_number_table[0][3];
                nr4QUICK.bdY = destination_number_table_blue[0][0];
                nr4QUICK.bdX = destination_number_table_blue[0][1];
                nr4QUICK.bdWidth = destination_number_table_blue[0][2];
                nr4QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 4){
                nr4QUICK.dY = destination_number_table[1][0];
                nr4QUICK.dX = destination_number_table[1][1];
                nr4QUICK.dWidth = destination_number_table[1][2];
                nr4QUICK.dHeight = destination_number_table[1][3];
                nr4QUICK.bdY = destination_number_table_blue[1][0];
                nr4QUICK.bdX = destination_number_table_blue[1][1];
                nr4QUICK.bdWidth = destination_number_table_blue[1][2];
                nr4QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 4){
                nr4QUICK.dY = destination_number_table[2][0];
                nr4QUICK.dX = destination_number_table[2][1];
                nr4QUICK.dWidth = destination_number_table[2][2];
                nr4QUICK.dHeight = destination_number_table[2][3];
                nr4QUICK.bdY = destination_number_table_blue[2][0];
                nr4QUICK.bdX = destination_number_table_blue[2][1];
                nr4QUICK.bdWidth = destination_number_table_blue[2][2];
                nr4QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 4){
                nr4QUICK.dY = destination_number_table[3][0];
                nr4QUICK.dX = destination_number_table[3][1];
                nr4QUICK.dWidth = destination_number_table[3][2];
                nr4QUICK.dHeight = destination_number_table[3][3];
                nr4QUICK.bdY = destination_number_table_blue[3][0];
                nr4QUICK.bdX = destination_number_table_blue[3][1];
                nr4QUICK.bdWidth = destination_number_table_blue[3][2];
                nr4QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 4){
                nr4QUICK.dY = destination_number_table[4][0];
                nr4QUICK.dX = destination_number_table[4][1];
                nr4QUICK.dWidth = destination_number_table[4][2];
                nr4QUICK.dHeight = destination_number_table[4][3];
                nr4QUICK.bdY = destination_number_table_blue[4][0];
                nr4QUICK.bdX = destination_number_table_blue[4][1];
                nr4QUICK.bdWidth = destination_number_table_blue[4][2];
                nr4QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 4){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 4){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 4){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 4){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 4){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr5QUICK = {
        //green number
        sX: 230,
        sY: 215,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 100,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 20,
        bsY: 135,
        bsWidth: 485 - 387,
        bsHeight: 100 - 11,
        bdY: 70 + 15 + 75,
        bdX: 100 + 15 + 250,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 5){
                nr5QUICK.dY = destination_number_table[0][0];
                nr5QUICK.dX = destination_number_table[0][1];
                nr5QUICK.dWidth = destination_number_table[0][2];
                nr5QUICK.dHeight = destination_number_table[0][3];
                nr5QUICK.bdY = destination_number_table_blue[0][0];
                nr5QUICK.bdX = destination_number_table_blue[0][1];
                nr5QUICK.bdWidth = destination_number_table_blue[0][2];
                nr5QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 5){
                nr5QUICK.dY = destination_number_table[1][0];
                nr5QUICK.dX = destination_number_table[1][1];
                nr5QUICK.dWidth = destination_number_table[1][2];
                nr5QUICK.dHeight = destination_number_table[1][3];
                nr5QUICK.bdY = destination_number_table_blue[1][0];
                nr5QUICK.bdX = destination_number_table_blue[1][1];
                nr5QUICK.bdWidth = destination_number_table_blue[1][2];
                nr5QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 5){
                nr5QUICK.dY = destination_number_table[2][0];
                nr5QUICK.dX = destination_number_table[2][1];
                nr5QUICK.dWidth = destination_number_table[2][2];
                nr5QUICK.dHeight = destination_number_table[2][3];
                nr5QUICK.bdY = destination_number_table_blue[2][0];
                nr5QUICK.bdX = destination_number_table_blue[2][1];
                nr5QUICK.bdWidth = destination_number_table_blue[2][2];
                nr5QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 5){
                nr5QUICK.dY = destination_number_table[3][0];
                nr5QUICK.dX = destination_number_table[3][1];
                nr5QUICK.dWidth = destination_number_table[3][2];
                nr5QUICK.dHeight = destination_number_table[3][3];
                nr5QUICK.bdY = destination_number_table_blue[3][0];
                nr5QUICK.bdX = destination_number_table_blue[3][1];
                nr5QUICK.bdWidth = destination_number_table_blue[3][2];
                nr5QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 5){
                nr5QUICK.dY = destination_number_table[4][0];
                nr5QUICK.dX = destination_number_table[4][1];
                nr5QUICK.dWidth = destination_number_table[4][2];
                nr5QUICK.dHeight = destination_number_table[4][3];
                nr5QUICK.bdY = destination_number_table_blue[4][0];
                nr5QUICK.bdX = destination_number_table_blue[4][1];
                nr5QUICK.bdWidth = destination_number_table_blue[4][2];
                nr5QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 5){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 5){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 5){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 5){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 5){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr6QUICK = {
        //green number
        sX: 425,
        sY: 215,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 100,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 145,
        bsY: 135,
        bsWidth: 485 - 387,
        bsHeight: 100 - 11,
        bdY: 70 + 15 + 75,
        bdX: 100 + 15 + 250,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 6){
                nr6QUICK.dY = destination_number_table[0][0];
                nr6QUICK.dX = destination_number_table[0][1];
                nr6QUICK.dWidth = destination_number_table[0][2];
                nr6QUICK.dHeight = destination_number_table[0][3];
                nr6QUICK.bdY = destination_number_table_blue[0][0];
                nr6QUICK.bdX = destination_number_table_blue[0][1];
                nr6QUICK.bdWidth = destination_number_table_blue[0][2];
                nr6QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 6){
                nr6QUICK.dY = destination_number_table[1][0];
                nr6QUICK.dX = destination_number_table[1][1];
                nr6QUICK.dWidth = destination_number_table[1][2];
                nr6QUICK.dHeight = destination_number_table[1][3];
                nr6QUICK.bdY = destination_number_table_blue[1][0];
                nr6QUICK.bdX = destination_number_table_blue[1][1];
                nr6QUICK.bdWidth = destination_number_table_blue[1][2];
                nr6QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 6){
                nr6QUICK.dY = destination_number_table[2][0];
                nr6QUICK.dX = destination_number_table[2][1];
                nr6QUICK.dWidth = destination_number_table[2][2];
                nr6QUICK.dHeight = destination_number_table[2][3];
                nr6QUICK.bdY = destination_number_table_blue[2][0];
                nr6QUICK.bdX = destination_number_table_blue[2][1];
                nr6QUICK.bdWidth = destination_number_table_blue[2][2];
                nr6QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 6){
                nr6QUICK.dY = destination_number_table[3][0];
                nr6QUICK.dX = destination_number_table[3][1];
                nr6QUICK.dWidth = destination_number_table[3][2];
                nr6QUICK.dHeight = destination_number_table[3][3];
                nr6QUICK.bdY = destination_number_table_blue[3][0];
                nr6QUICK.bdX = destination_number_table_blue[3][1];
                nr6QUICK.bdWidth = destination_number_table_blue[3][2];
                nr6QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 6){
                nr6QUICK.dY = destination_number_table[4][0];
                nr6QUICK.dX = destination_number_table[4][1];
                nr6QUICK.dWidth = destination_number_table[4][2];
                nr6QUICK.dHeight = destination_number_table[4][3];
                nr6QUICK.bdY = destination_number_table_blue[4][0];
                nr6QUICK.bdX = destination_number_table_blue[4][1];
                nr6QUICK.bdWidth = destination_number_table_blue[4][2];
                nr6QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 6){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 6){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 6){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 6){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 6){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr7QUICK = {
        //green number
        sX: 32,
        sY: 404,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 100,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 272,
        bsY: 135,
        bsWidth: 485 - 387,
        bsHeight: 100 - 11,
        bdY: 70 + 15 + 75,
        bdX: 100 + 15 + 250,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 7){
                nr7QUICK.dY = destination_number_table[0][0];
                nr7QUICK.dX = destination_number_table[0][1];
                nr7QUICK.dWidth = destination_number_table[0][2];
                nr7QUICK.dHeight = destination_number_table[0][3];
                nr7QUICK.bdY = destination_number_table_blue[0][0];
                nr7QUICK.bdX = destination_number_table_blue[0][1];
                nr7QUICK.bdWidth = destination_number_table_blue[0][2];
                nr7QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 7){
                nr7QUICK.dY = destination_number_table[1][0];
                nr7QUICK.dX = destination_number_table[1][1];
                nr7QUICK.dWidth = destination_number_table[1][2];
                nr7QUICK.dHeight = destination_number_table[1][3];
                nr7QUICK.bdY = destination_number_table_blue[1][0];
                nr7QUICK.bdX = destination_number_table_blue[1][1];
                nr7QUICK.bdWidth = destination_number_table_blue[1][2];
                nr7QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 7){
                nr7QUICK.dY = destination_number_table[2][0];
                nr7QUICK.dX = destination_number_table[2][1];
                nr7QUICK.dWidth = destination_number_table[2][2];
                nr7QUICK.dHeight = destination_number_table[2][3];
                nr7QUICK.bdY = destination_number_table_blue[2][0];
                nr7QUICK.bdX = destination_number_table_blue[2][1];
                nr7QUICK.bdWidth = destination_number_table_blue[2][2];
                nr7QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 7){
                nr7QUICK.dY = destination_number_table[3][0];
                nr7QUICK.dX = destination_number_table[3][1];
                nr7QUICK.dWidth = destination_number_table[3][2];
                nr7QUICK.dHeight = destination_number_table[3][3];
                nr7QUICK.bdY = destination_number_table_blue[3][0];
                nr7QUICK.bdX = destination_number_table_blue[3][1];
                nr7QUICK.bdWidth = destination_number_table_blue[3][2];
                nr7QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 7){
                nr7QUICK.dY = destination_number_table[4][0];
                nr7QUICK.dX = destination_number_table[4][1];
                nr7QUICK.dWidth = destination_number_table[4][2];
                nr7QUICK.dHeight = destination_number_table[4][3];
                nr7QUICK.bdY = destination_number_table_blue[4][0];
                nr7QUICK.bdX = destination_number_table_blue[4][1];
                nr7QUICK.bdWidth = destination_number_table_blue[4][2];
                nr7QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 7){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 7){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 7){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 7){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 7){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr8QUICK = {
        //green number
        sX: 233,
        sY: 404,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 100,
        dWidth: 100 - 24,
        dHeight: 100 - 24,
        //blue number
        bsX: 392,
        bsY: 135,
        bsWidth: 485 - 387,
        bsHeight: 100 - 11,
        bdY: 70 + 15 + 75,
        bdX: 100 + 15 + 250,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,
        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },
        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 8){
                nr8QUICK.dY = destination_number_table[0][0];
                nr8QUICK.dX = destination_number_table[0][1];
                nr8QUICK.dWidth = destination_number_table[0][2];
                nr8QUICK.dHeight = destination_number_table[0][3];
                nr8QUICK.bdY = destination_number_table_blue[0][0];
                nr8QUICK.bdX = destination_number_table_blue[0][1];
                nr8QUICK.bdWidth = destination_number_table_blue[0][2];
                nr8QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 8){
                nr8QUICK.dY = destination_number_table[1][0];
                nr8QUICK.dX = destination_number_table[1][1];
                nr8QUICK.dWidth = destination_number_table[1][2];
                nr8QUICK.dHeight = destination_number_table[1][3];
                nr8QUICK.bdY = destination_number_table_blue[1][0];
                nr8QUICK.bdX = destination_number_table_blue[1][1];
                nr8QUICK.bdWidth = destination_number_table_blue[1][2];
                nr8QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 8){
                nr8QUICK.dY = destination_number_table[2][0];
                nr8QUICK.dX = destination_number_table[2][1];
                nr8QUICK.dWidth = destination_number_table[2][2];
                nr8QUICK.dHeight = destination_number_table[2][3];
                nr8QUICK.bdY = destination_number_table_blue[2][0];
                nr8QUICK.bdX = destination_number_table_blue[2][1];
                nr8QUICK.bdWidth = destination_number_table_blue[2][2];
                nr8QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 8){
                nr8QUICK.dY = destination_number_table[3][0];
                nr8QUICK.dX = destination_number_table[3][1];
                nr8QUICK.dWidth = destination_number_table[3][2];
                nr8QUICK.dHeight = destination_number_table[3][3];
                nr8QUICK.bdY = destination_number_table_blue[3][0];
                nr8QUICK.bdX = destination_number_table_blue[3][1];
                nr8QUICK.bdWidth = destination_number_table_blue[3][2];
                nr8QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 8){
                nr8QUICK.dY = destination_number_table[4][0];
                nr8QUICK.dX = destination_number_table[4][1];
                nr8QUICK.dWidth = destination_number_table[4][2];
                nr8QUICK.dHeight = destination_number_table[4][3];
                nr8QUICK.bdY = destination_number_table_blue[4][0];
                nr8QUICK.bdX = destination_number_table_blue[4][1];
                nr8QUICK.bdWidth = destination_number_table_blue[4][2];
                nr8QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {

                if(tab_step4[4] == 8){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 8){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 8){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 8){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 8){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }


            }

        }
    }
    const nr9QUICK = {
        sX: 430,
        sY: 400,
        sWidth: 168 - 24,
        sHeight: 168 - 24,
        dY: 70,
        dX: 260,
        dWidth: 100 - 24,
        dHeight: 100 - 24,


        //blue number
        bsX: 15,
        bsY: 260,
        bsWidth: 110 - 15,
        bsHeight: 350 - 260,
        bdY: 70 + 15 + 155,
        bdX: 20 + 15 + 10 + 400 - 7,
        bdWidth: 100 - 54,
        bdHeight: 100 - 54,

        //frame can change the image of the images
        frame: 0,

        draw: function () {
            ctxQUICK.drawImage(numbersQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
        },

        piwot_draw: function () {
            ctxQUICK.drawImage(blue_numbersQUICK, this.bsX, this.bsY, this.bsWidth, this.bsHeight, this.bdX, this.bdY,
                this.bdWidth, this.bdHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[2] == 9){
                nr9QUICK.dY = destination_number_table[0][0];
                nr9QUICK.dX = destination_number_table[0][1];
                nr9QUICK.dWidth = destination_number_table[0][2];
                nr9QUICK.dHeight = destination_number_table[0][3];
                nr9QUICK.bdY = destination_number_table_blue[0][0];
                nr9QUICK.bdX = destination_number_table_blue[0][1];
                nr9QUICK.bdWidth = destination_number_table_blue[0][2];
                nr9QUICK.bdHeight = destination_number_table_blue[0][3];
            }else if(tab_step4[3] == 9){
                nr9QUICK.dY = destination_number_table[1][0];
                nr9QUICK.dX = destination_number_table[1][1];
                nr9QUICK.dWidth = destination_number_table[1][2];
                nr9QUICK.dHeight = destination_number_table[1][3];
                nr9QUICK.bdY = destination_number_table_blue[1][0];
                nr9QUICK.bdX = destination_number_table_blue[1][1];
                nr9QUICK.bdWidth = destination_number_table_blue[1][2];
                nr9QUICK.bdHeight = destination_number_table_blue[1][3];
            }else if(tab_step4[1] == 9){
                nr9QUICK.dY = destination_number_table[2][0];
                nr9QUICK.dX = destination_number_table[2][1];
                nr9QUICK.dWidth = destination_number_table[2][2];
                nr9QUICK.dHeight = destination_number_table[2][3];
                nr9QUICK.bdY = destination_number_table_blue[2][0];
                nr9QUICK.bdX = destination_number_table_blue[2][1];
                nr9QUICK.bdWidth = destination_number_table_blue[2][2];
                nr9QUICK.bdHeight = destination_number_table_blue[2][3];
            }else if(tab_step4[4] == 9){
                nr9QUICK.dY = destination_number_table[3][0];
                nr9QUICK.dX = destination_number_table[3][1];
                nr9QUICK.dWidth = destination_number_table[3][2];
                nr9QUICK.dHeight = destination_number_table[3][3];
                nr9QUICK.bdY = destination_number_table_blue[3][0];
                nr9QUICK.bdX = destination_number_table_blue[3][1];
                nr9QUICK.bdWidth = destination_number_table_blue[3][2];
                nr9QUICK.bdHeight = destination_number_table_blue[3][3];
            }else if(tab_step4[0] == 9){
                nr9QUICK.dY = destination_number_table[4][0];
                nr9QUICK.dX = destination_number_table[4][1];
                nr9QUICK.dWidth = destination_number_table[4][2];
                nr9QUICK.dHeight = destination_number_table[4][3];
                nr9QUICK.bdY = destination_number_table_blue[4][0];
                nr9QUICK.bdX = destination_number_table_blue[4][1];
                nr9QUICK.bdWidth = destination_number_table_blue[4][2];
                nr9QUICK.bdHeight = destination_number_table_blue[4][3];
            }
        },

        update: function () {
            //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
            //this.period = state.current == state.getReady ? 10 : 5;

            //SPEED DEPENDS ON THE NUMBER OF PERIOD
            this.period = stateQUICK.current == stateQUICK.getReady ? 0 : 55;
            //WE INCREMENT THE FRAME BY 1, EACH PERIOD
            this.frame += framesQUICK % this.period == 0 ? 1 : 0;
            //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
            //this.frame = this.frame % this.animation.length;


            if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
            } else {
                if(tab_step4[4] == 9){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1050 > framesQUICK && framesQUICK > 950) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;


                    }
                    //2ND STEP
                    if (1600 > framesQUICK && framesQUICK > 1500) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //this.dX +=3.3*globalSpeed;

                    }
                    //3ND STEP
                    if (2050 > framesQUICK && framesQUICK > 1950) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 400;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 260;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 20 + 15 + 10 + 400 - 7;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;
                    }
                }else if(tab_step4[3] == 9){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (850 > framesQUICK && framesQUICK > 700) {
                        this.dY += globalSpeedQUICK;
                        this.dX += 3.3 * globalSpeedQUICK;
                    }

                    //2ND STEP
                    if (1500 > framesQUICK && framesQUICK > 1400) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        //  this.dX -=1.3*globalSpeed;
                        //  this.bdX -=1.3*globalSpeed;
                        this.bdY += 1.6 * globalSpeedQUICK;
                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 215;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 100;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 100 + 15 + 250;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[2] == 9){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (650 > framesQUICK && framesQUICK > 350) {
                        this.dX += 1.6 * globalSpeedQUICK;
                        this.dY += globalSpeedQUICK / 2;
                        this.bdX += 1.6 * globalSpeedQUICK;
                        this.bdY += globalSpeedQUICK / 2;

                    }


                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 430;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 20;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15;
                        // this.bdX = 20 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }

                }else if(tab_step4[1] == 9    ){
                    // this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (950 > framesQUICK && framesQUICK > 850) {
                        this.dY += 1.5 * globalSpeedQUICK;

                    }
                    //2ND STEP
                    if (1350 > framesQUICK && framesQUICK > 1250) {

                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.3 * globalSpeedQUICK;
                        this.bdX -= 1.3 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 1.6 * globalSpeedQUICK;
                        this.bdY -= 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }

                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 230;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 180;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 75;
                        // this.bdX = 180 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }else if(tab_step4[0] == 9 ){
                    //this.speed += this.gravity;
                    //50ms DELAY BEFORE MOVING THE NUMBER
                    if (1150 > framesQUICK && framesQUICK > 1050) {

                        this.dY += 1.5 * globalSpeedQUICK;
                        this.dX -= 4.8 * globalSpeedQUICK;


                    }

                    //2ND STEP
                    if (1700 > framesQUICK && framesQUICK > 1600) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.dX -= 1.5 * globalSpeedQUICK;

                    }


                    //3ND STEP
                    if (1850 > framesQUICK && framesQUICK > 1750) {
                        this.dY += 1.6 * globalSpeedQUICK;
                        this.bdY += 1.6 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //4TH STEP
                    if (2200 > framesQUICK && framesQUICK > 2100) {
                        this.dY -= 3.2 * globalSpeedQUICK;
                        this.bdY -= 3.2 * globalSpeedQUICK;
                        //this.dX -=1.5*globalSpeed;

                    }
                    //THE END OF SIMULATION
                    if (framesQUICK == 2299) {
                        this.logic();
                        // this.sX = 24;
                        // this.sY = 24;
                        // this.sWidth = 168 - 24;
                        // this.sHeight = 168 - 24;
                        // this.dY = 70;
                        // this.dX = 340;
                        // this.dWidth = 100 - 24;
                        // this.dHeight = 100 - 24;
                        // //blue number
                        //
                        // this.bdY = 70 + 15 + 155;
                        // this.bdX = 30 + 15;
                        // this.bdWidth = 100 - 54;
                        // this.bdHeight = 100 - 54;


                    }
                }




            }

        }
    }


//GET READY MESSAGE
    const getReadyQUICK = {
        sX: 273,
        sY: 110,
        sWidth: 436 - 273,
        sHeight: 177 - 110,
        dY: 160,
        dX: 220,
        dWidth: 200 - 24,
        dHeight: 100 - 24,

        draw: function () {
            if (stateQUICK.current == stateQUICK.getReady) {
                ctxQUICK.drawImage(pauseQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                    this.dWidth, this.dHeight);
            }
        }
    }
    const gameOverQUICK = {
        sX: 390,
        sY: 230,
        sWidth: 760 - 390,
        sHeight: 380 - 230,
        dY: 160,
        dX: 220,
        dWidth: 200 - 24,
        dHeight: 100 - 24,
        draw: function () {
            if (stateQUICK.current == stateQUICK.over) {
                ctxQUICK.drawImage(click2startQUICK, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                    this.dWidth, this.dHeight);
            }
        }
    }

//DRAW
    function draw() {
        //background
        ctxQUICK.fillStyle = "#70c5ce";
        ctxQUICK.fillRect(0, 0, cvsQUICK.width, cvsQUICK.height);

        //title of canvas
        ctxQUICK.font = "20px Arial";
        ctxQUICK.strokeText("Sortowanie", 25, 50);
        ctxQUICK.strokeText("szybkie!", 25, 75);
        bgRectangle.draw();
        bgsteps1.draw();

        //draw function
       // bgQUICK.draw();
        //c2n.draw();
        //if user write the first number into form
        if(x1==1 || x2==1|| x3==1|| x4==1|| x5==1){
            nr1QUICK.draw();
        }
        if(x1==2 || x2==2|| x3==2|| x4==2|| x5==2){
            nr2QUICK.draw();
        }
        if(x1==3 || x2==3|| x3==3|| x4==3|| x5==3){
            nr3QUICK.draw();
        }
        if(x1==4 || x2==4|| x3==4|| x4==4|| x5==4){
            nr4QUICK.draw();
        }
        if(x1==5 || x2==5|| x3==5|| x4==5|| x5==5){
            nr5QUICK.draw();
        }
        if(x1==6 || x2==6|| x3==6|| x4==6|| x5==6){
            nr6QUICK.draw();
        }
        if(x1==7 || x2==7|| x3==7|| x4==7|| x5==7){
            nr7QUICK.draw();
        }
        if(x1==8 || x2==8|| x3==8|| x4==8|| x5==8){
            nr8QUICK.draw();
        }
        if(x1==9 || x2==9|| x3==9|| x4==9|| x5==9){
            nr9QUICK.draw();
        }

        //line.draw();
        // nr3.piwot_draw();



        //DRAWING ACTION FOR 'PIWOT' NUMBER
        // if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
        // } else {

                if (2298 > framesQUICK && framesQUICK > 150) {
                    if(tab_step4[2]==3){nr3QUICK.piwot_draw();}
                    if(tab_step4[2]==1){nr1QUICK.piwot_draw();}
                    if(tab_step4[2]==2){nr2QUICK.piwot_draw();}
                    if(tab_step4[2]==4){nr4QUICK.piwot_draw();}
                    if(tab_step4[2]==5){nr5QUICK.piwot_draw();}
                    if(tab_step4[2]==6){nr6QUICK.piwot_draw();}
                    if(tab_step4[2]==7){nr7QUICK.piwot_draw();}
                    if(tab_step4[2]==8){nr8QUICK.piwot_draw();}
                    if(tab_step4[2]==9){nr9QUICK.piwot_draw();}

                }

            if (2298 > framesQUICK && framesQUICK > 1200) {
                if(tab_step4[1]==3){nr3QUICK.piwot_draw();}
                if(tab_step4[1]==1){nr1QUICK.piwot_draw();}
                if(tab_step4[1]==2){nr2QUICK.piwot_draw();}
                if(tab_step4[1]==4){nr4QUICK.piwot_draw();}
                if(tab_step4[1]==5){nr5QUICK.piwot_draw();}
                if(tab_step4[1]==6){nr6QUICK.piwot_draw();}
                if(tab_step4[1]==7){nr7QUICK.piwot_draw();}
                if(tab_step4[1]==8){nr8QUICK.piwot_draw();}
                if(tab_step4[1]==9){nr9QUICK.piwot_draw();}

            }
            if (2298 > framesQUICK && framesQUICK > 1350) {
                if(tab_step4[3]==3){nr3QUICK.piwot_draw();}
                if(tab_step4[3]==1){nr1QUICK.piwot_draw();}
                if(tab_step4[3]==2){nr2QUICK.piwot_draw();}
                if(tab_step4[3]==4){nr4QUICK.piwot_draw();}
                if(tab_step4[3]==5){nr5QUICK.piwot_draw();}
                if(tab_step4[3]==6){nr6QUICK.piwot_draw();}
                if(tab_step4[3]==7){nr7QUICK.piwot_draw();}
                if(tab_step4[3]==8){nr8QUICK.piwot_draw();}
                if(tab_step4[3]==9){nr9QUICK.piwot_draw();}

            }
            if (2298 > framesQUICK && framesQUICK > 1700) {
                if(tab_step4[0]==3){nr3QUICK.piwot_draw();}
                if(tab_step4[0]==1){nr1QUICK.piwot_draw();}
                if(tab_step4[0]==2){nr2QUICK.piwot_draw();}
                if(tab_step4[0]==4){nr4QUICK.piwot_draw();}
                if(tab_step4[0]==5){nr5QUICK.piwot_draw();}
                if(tab_step4[0]==6){nr6QUICK.piwot_draw();}
                if(tab_step4[0]==7){nr7QUICK.piwot_draw();}
                if(tab_step4[0]==8){nr8QUICK.piwot_draw();}
                if(tab_step4[0]==9){nr9QUICK.piwot_draw();}

            }
            if (2298 > framesQUICK && framesQUICK > 1850) {
                if(tab_step4[4]==3){nr3QUICK.piwot_draw();}
                if(tab_step4[4]==1){nr1QUICK.piwot_draw();}
                if(tab_step4[4]==2){nr2QUICK.piwot_draw();}
                if(tab_step4[4]==4){nr4QUICK.piwot_draw();}
                if(tab_step4[4]==5){nr5QUICK.piwot_draw();}
                if(tab_step4[4]==6){nr6QUICK.piwot_draw();}
                if(tab_step4[4]==7){nr7QUICK.piwot_draw();}
                if(tab_step4[4]==8){nr8QUICK.piwot_draw();}
                if(tab_step4[4]==9){nr9QUICK.piwot_draw();}

            }
       // }


        getReadyQUICK.draw();
        gameOverQUICK.draw();
    }

//UPDATE
    function update() {
        nr1QUICK.update();
        nr2QUICK.update();
        nr3QUICK.update();
        nr4QUICK.update();
        nr5QUICK.update();
        nr6QUICK.update();
        nr7QUICK.update();
        nr8QUICK.update();
        nr9QUICK.update();
        bgRectangle.update();
        //c2n.update();
        //line.update();
        if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {

        } else {
            if (framesQUICK == 2300) {
                stateQUICK.current = stateQUICK.over;
            }
            ;
        }

    }
//FUCTION WHICH CHOSE PROPERTY NUMBERS INTO ALGORITHM
    function logic_for_all(){
        nr1QUICK.logic();
        nr2QUICK.logic();
        nr3QUICK.logic();
        nr4QUICK.logic();
        nr5QUICK.logic();
        nr6QUICK.logic();
        nr7QUICK.logic();
        nr8QUICK.logic();
        nr9QUICK.logic();
    }
//LOOP
    function loop() {
        update();
        draw();
        if (stateQUICK.current == stateQUICK.over || stateQUICK.current == stateQUICK.getReady) {
        }else{
            framesQUICK++;
        }

        requestAnimationFrame(loop);
    }
    logic_for_all();
    loop();
