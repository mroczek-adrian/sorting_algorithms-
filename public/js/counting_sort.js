

function myFunction(){



    //VALIDATION
    var validation1 = document.forms["myForm"]["fname"].value;
    var validation2 = document.forms["myForm"]["fname1"].value;
    var validation3 = document.forms["myForm"]["fname2"].value;
    var validation4 = document.forms["myForm"]["fname3"].value;
    var validation5 = document.forms["myForm"]["fname4"].value;
    var validation6 = document.forms["myForm"]["fname5"].value;
    if (validation1 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (validation2 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (validation3 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (validation4 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (validation5 == "") {
        alert("Name must be filled out");
        return false;
    }
    if (validation6 == "") {
        alert("Name must be filled out");
        return false;
    }
    x1 = document.getElementById("numb").value;
    x2 = document.getElementById("numb1").value;
    x3 = document.getElementById("numb2").value;
    x4 = document.getElementById("numb3").value;
    x5 = document.getElementById("numb4").value;
    x6 = document.getElementById("numb5").value;
    if(x1 > 9 || x1 < 1 || x2 < 1 || x2 > 9  || x3 < 1 || x3 > 9  || x4 < 1 || x4 > 9  || x5 < 1 || x5 > 9   ){
        alert("To big or to small number - write a property number from [1-9]");
        return false;
    }
    if(x1 == x2 || x1 == x3  || x1 == x4 || x1 == x5 || x2 == x3 || x2 == x4 || x2 == x5 || x3 == x4 ||  x3 == x5 || x4 == x5   ){
        alert("There is a repetition - write numbers without repetition");
        return false;
    }
    if(x1 == 1 ||x1 == 2 || x1 == 3 ||x1 == 4 ||x1 == 5 ||x1 == 6 ||x1 == 7 ||x1 == 8 ||x1 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }
    if(x2 == 1 ||x2 == 2 || x2 == 3 ||x2 == 4 ||x2 == 5 ||x2 == 6 ||x2 == 7 ||x2 == 8 ||x2 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }
    if(x3 == 1 ||x3 == 2 || x3 == 3 ||x3 == 4 ||x3 == 5 ||x3 == 6 ||x3 == 7 ||x3 == 8 ||x3 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }
    if(x4 == 1 ||x4 == 2 || x4 == 3 ||x4 == 4 ||x4 == 5 ||x4 == 6 ||x4 == 7 ||x4 == 8 ||x4 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }
    if(x5 == 1 ||x5 == 2 || x5 == 3 ||x5 == 4 ||x5 == 5 ||x5 == 6 ||x5 == 7 ||x5 == 8 ||x5 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }
    if(x6 == 1 ||x6 == 2 || x6 == 3 ||x6 == 4 ||x6 == 5 ||x6 == 6 ||x6 == 7 ||x6 == 8 ||x6 == 9  ){
    }else{
        alert(" Write the numbers");
        return false;
    }












    // TEMPORARY VARIABLE
    var x, text;
    // TABLE OF 5 NUMBERS (FROM 'nr1BUBBLE') : dY,dX,dWidth,dHeight
    const destination_number_table = [
        [55,20, 100-24,100-24],
        [55,115, 100-24,100-24],
        [55,215, 100-24,100-24],
        [55,315, 100-24,100-24],
        [55,415, 100-24,100-24],
        [55,515, 100-24,100-24],
    ];
    // TABLE OF 5 NUMBERS (FROM 'nr1BUBBLE') : bdY,bdX,bdWidth,bdHeight
    const small_destination_number_table = [
        [230,20, 30,30],
        [230,120, 30,30],
        [230,220, 30,30],
        [230,320, 30,30],
        [230,420, 30,30],
        [230,520, 30,30],

    ];



    // SELECT CVS
    const cvs = document.getElementById("bird1");
    cvs.style.display = "block";
    const ctx = cvs.getContext("2d");
//GLOBAL TABLE WHICH IS SORTED IN THE BACKGROUND
    const numbers_to_sort=[x1,x2,x3,x4,x5,x6];
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
        for(var i = 0;i<6;i++){
            tab_step4[i]=A[i];
        }

    }
    bubble_sort(numbers_to_sort,6);

    text = "tab_step1-values      [0]=   "+tab_step4[0]+"[1]=   "+tab_step4[1]+"[2]=   "+tab_step4[2]+"[3]=   "+tab_step4[3]+"[4]=   "+tab_step4[4]+"[5]=   "+tab_step4[5];
    document.getElementById("demo5").innerHTML = text;








// GAME VARS AND CONSTS
    let frames = 0;
    let globalSpeed = 0.5;
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

//IMAGE OF THE GET OVER STATE
    const pauseQUICK=document.getElementById("pause");
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
                nr1.bubbleSort();
                break;
            case state.over:
                state.current = state.game;
                frames = 0;
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
        dY : 55,
        dX : 17,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,

        smaller : [{ dWidth : 40,
            dHeight :40 }],

        draw : function() {
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            // if ( frames > 1300) {
            //     let smaller_cycle = this.smaller[0];
            //     ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            //         smaller_cycle.dWidth,smaller_cycle.dHeight);
            // }else{
            ctx.drawImage(red_circle, this.sX, this.sY, this.sWidth, this.sHeight, this.dX, this.dY,
                this.dWidth, this.dHeight);
            //}
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
                //1ST STEM
                if (350 > frames && frames > 300) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (450 > frames && frames > 400) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (550 > frames && frames > 500) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (650 > frames && frames > 600) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (750 > frames && frames > 700) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                //2ND STEP
                if (850 > frames && frames > 800) {

                    this.dY += 4 * globalSpeed;
                    this.dX -= 20 * globalSpeed;


                }
                if (950 > frames && frames > 900) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1050 > frames && frames > 1000) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1150 > frames && frames > 1100) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1250 > frames && frames > 1200) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }

                // if (1350 > frames && frames > 1300) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1450 > frames && frames > 1400) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1550 > frames && frames > 1500) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1650 > frames && frames > 1600) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                //3RD STEP -  CIRCLE
                if  (1350 > frames && frames > 1300) {

                    this.dY -= 4 * globalSpeed;
                    this.dX -= 16 * globalSpeed;


                }
                if  (1450 > frames && frames > 1400) {


                    this.dX += 4 * globalSpeed;


                }
                if  (1550 > frames && frames > 1500) {


                    this.dX += 4 * globalSpeed;


                }
                if  (1650 > frames && frames > 1600) {


                    this.dX += 4 * globalSpeed;


                }
                if  (1750 > frames && frames > 1700) {


                    this.dX += 4 * globalSpeed;


                }
                if  (1850 > frames && frames > 1800) {


                    this.dX += 4 * globalSpeed;


                }


                // if (2550 > frames && frames > 2500) {
                //
                //
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1550 > frames && frames > 1500) {
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (1750 > frames && frames > 1700) {
                //
                //     this.dX += 16 * globalSpeed;
                //
                // }
                // if (1950 > frames && frames > 1900) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2350 > frames && frames > 2300) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                //THE END OF SIMULATION
                if( frames == 2999){


                    this.dY = 55;
                    this.dX = 17;




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
        dY : 225,
        dX : 20,
        dWidth : 40,
        dHeight :40 ,

        //frame can change the image of the images
        frame : 0,

        bigger : [{ dWidth : 100-24,
            dHeight :100-24 }],

        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            if ( frames > 800) {
                let bigger_cycle = this.bigger[0];
                ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    bigger_cycle.dWidth,bigger_cycle.dHeight);
            }else{
                ctx.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
            }

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
                // this.speed += this.gravity;
                // 50ms DELAY BEFORE MOVING THE NUMBER
                if (350 > frames && frames > 300) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (450 > frames && frames > 400) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (550 > frames && frames > 500) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (650 > frames && frames > 600) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX += 8 * globalSpeed;


                }
                if (750 > frames && frames > 700) {

                    //this.dY += 1.5 * globalSpeed;
                    this.dX -= 4 * globalSpeed;


                }
                //2ND STEP
                if (850 > frames && frames > 800) {

                    this.dY -= 3 * globalSpeed;
                    this.dX -= 12 * globalSpeed;


                }
                if (950 > frames && frames > 900) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4* globalSpeed;


                }
                if (1050 > frames && frames > 1000) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1150 > frames && frames > 1100) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                if (1250 > frames && frames > 1200) {

                    //this.dY -= 3 * globalSpeed;
                    this.dX += 4 * globalSpeed;


                }
                // if (1350 > frames && frames > 1300) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1450 > frames && frames > 1400) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1550 > frames && frames > 1500) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                // if (1650 > frames && frames > 1600) {
                //
                //     //this.dY -= 3 * globalSpeed;
                //     this.dX += 4 * globalSpeed;
                //
                //
                // }
                //3RD STEP - SMALL CIRCLE
                if (1350 > frames && frames > 1300) {


                    this.dX -= 20.5 * globalSpeed;


                }
                if (1450 > frames && frames > 1400) {


                    this.dX += 4 * globalSpeed;


                }
                if (1550 > frames && frames > 1500) {


                    this.dX += 4 * globalSpeed;


                }
                if (1650 > frames && frames > 1600){


                    this.dX += 4 * globalSpeed;


                }
                if (1750 > frames && frames > 1700) {


                    this.dX += 8 * globalSpeed;


                }
                if (1850 > frames && frames > 1800) {


                    this.dX -= 4 * globalSpeed;


                }
                // if (2550 > frames && frames > 2500) {
                //
                //
                //     this.dX += 2.4 * globalSpeed;
                //
                //
                // }

                //THE END OF SIMULATION


                if( frames == 2999){


                    this.dY = 225;
                    this.dX = 20;




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
        dY : 155,
        dX : 217,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

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

                // if (1550 > frames && frames > 1500) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //     this.dX -= 4 * globalSpeed;
                //
                //
                // }
                // if (1750 > frames && frames > 1700) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX += 16 * globalSpeed;
                //
                // }
                // if (1950 > frames && frames > 1900) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2350 > frames && frames > 2300) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // //THE END OF SIMULATION
                // if( frames == 2599){
                //
                //     this.sX = 310;
                //     this.sY = 90;
                //     this.sWidth = 490 - 310;
                //     this.sHeight = 270 - 90;
                //     this.dY = 155;
                //     this.dX = 217;
                //     this.dWidth = 100 - 24;
                //     this.dHeight =100 - 24 ;
                //
                //
                //
                // }

            }
        }
    }
    const brown_circle02 = {

        //circle
        sX: 310,
        sY: 90,
        sWidth: 490 - 310,
        sHeight: 270 - 90,
        dY: 155,
        dX: 217,
        dWidth: 100 - 24,
        dHeight: 100 - 24,

        //frame can change the image of the images
        frame: 0,


        smaller : [{ dWidth : 40,
            dHeight :40 }],

        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            if ( frames > 1300) {
                let smaller_cycle = this.smaller[0];
                ctx.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    smaller_cycle.dWidth,smaller_cycle.dHeight);
            }else{
                ctx.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                    this.dWidth,this.dHeight);
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
                //1ST STEM - SMALLER CIRCLE
                // if (1350 > frames && frames > 1300) {
                //
                //     this.dY += 7 * globalSpeed;
                //
                //     this.dX -= 3 * globalSpeed;
                //
                // }
                // if (1550 > frames && frames > 1500) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //     this.dX -= 4 * globalSpeed;
                //
                //
                // }
                // if (1750 > frames && frames > 1700) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX += 20 * globalSpeed;
                //
                // }
                // if (1950 > frames && frames > 1900) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2150 > frames && frames > 2100) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // if (2350 > frames && frames > 2300) {
                //
                //     //this.dY -= 4 * globalSpeed;
                //
                //     this.dX -= 4 * globalSpeed;
                //
                // }
                // //THE END OF SIMULATION
                // if( frames == 2599){
                //
                //     this.sX = 310;
                //     this.sY = 90;
                //     this.sWidth = 490 - 310;
                //     this.sHeight = 270 - 90;
                //     this.dY = 155;
                //     this.dX = 217;
                //     this.dWidth = 100 - 24;
                //     this.dHeight =100 - 24 ;
                //
                //
                //
                // }
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
        bdX : 20,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],


        //frame can change the image of the images
        frame : 0,

        draw : function(){
            // if(state.current == state.over ||state.current == state.getReady){
            //
            // } else {
            if (  frames > 250 && frames <=1350) {
                let how_many_numbers_at_index0 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index0.bsX,how_many_numbers_at_index0.bsY,how_many_numbers_at_index0.bsWidth,how_many_numbers_at_index0.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            } else if (  frames > 1350 && frames <=24000) {
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            //}


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
    const how_many_numbers_at_index1 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 120,
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

        //frame can change the image of the images
        frame : 0,

        draw : function(){
            // if(state.current == state.over ||state.current == state.getReady){
            //
            // } else {
            if (  frames > 350 && frames <=875) {
                let how_many_numbers_at_index1 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames <=1450 && frames > 875){

                let how_many_numbers_at_index1 = this.nr02[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames <12331 && frames > 1450){

                let how_many_numbers_at_index1 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if ( frames > 675 && frames <= 1500) {
            //     let how_many_numbers_at_index1 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index1.bsX,how_many_numbers_at_index1.bsY,how_many_numbers_at_index1.bsWidth,how_many_numbers_at_index1.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }
            // else{

            //}
            //}


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
    const how_many_numbers_at_index2 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 220,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        nr03 : [{  bsX : 267,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        nr02 : [{  bsX : 145,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        //frame can change the image of the images
        frame : 0,

        draw : function(){
            // if(state.current == state.over ||state.current == state.getReady){
            //
            // } else {


            if ( frames <= 975 && frames > 450) {
                let how_many_numbers_at_index2 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index2.bsX,how_many_numbers_at_index2.bsY,how_many_numbers_at_index2.bsWidth,how_many_numbers_at_index2.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if ( frames <= 1550 && frames > 975) {
                let how_many_numbers_at_index2 = this.nr03[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index2.bsX, how_many_numbers_at_index2.bsY, how_many_numbers_at_index2.bsWidth, how_many_numbers_at_index2.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else if ( frames >1550 && frames < 22975) {
                let how_many_numbers_at_index2 = this.nr02[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index2.bsX, how_many_numbers_at_index2.bsY, how_many_numbers_at_index2.bsWidth, how_many_numbers_at_index2.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // }else if ( frames > 1300 ) {
            //     let how_many_numbers_at_index2 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index2.bsX,how_many_numbers_at_index2.bsY,how_many_numbers_at_index2.bsWidth,how_many_numbers_at_index2.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // } else{

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
    const how_many_numbers_at_index3 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 320,
        bdWidth : 55,
        bdHeight :55 ,
        nr04 : [{  bsX : 392,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        nr03 : [{  bsX : 267,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],
        nr02 : [{  bsX : 145,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        //frame can change the image of the images
        frame : 0,

        draw : function(){
            // if(state.current == state.over ||state.current == state.getReady){
            //
            // } else {

            if (frames <= 1075 && frames > 550 ) {
                let how_many_numbers_at_index3 = this.nr01[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index3.bsX, how_many_numbers_at_index3.bsY, how_many_numbers_at_index3.bsWidth, how_many_numbers_at_index3.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            } else if ( frames > 1075 && frames <= 1650) {
                let how_many_numbers_at_index3 = this.nr04[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index3.bsX,how_many_numbers_at_index3.bsY,how_many_numbers_at_index3.bsWidth,how_many_numbers_at_index3.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if ( frames < 12075 && frames >= 1650) {
                let how_many_numbers_at_index3 = this.nr03[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index3.bsX, how_many_numbers_at_index3.bsY, how_many_numbers_at_index3.bsWidth, how_many_numbers_at_index3.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // } else if ( frames > 2300) {
            //     let how_many_numbers_at_index3 = this.nr02[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index3.bsX,how_many_numbers_at_index3.bsY,how_many_numbers_at_index3.bsWidth,how_many_numbers_at_index3.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else{

            // }
            //}


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
    const how_many_numbers_at_index4 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 420,
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
            if (  frames <= 1175 && frames > 750) {
                let how_many_numbers_at_index4 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index4.bsX,how_many_numbers_at_index4.bsY,how_many_numbers_at_index4.bsWidth,how_many_numbers_at_index4.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            } else if ( frames > 1175 && frames <= 1850) {
                let how_many_numbers_at_index4 = this.nr05[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index4.bsX, how_many_numbers_at_index4.bsY, how_many_numbers_at_index4.bsWidth, how_many_numbers_at_index4.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            }else if ( frames < 11175 && frames > 1850) {
                let how_many_numbers_at_index4 = this.nr04[0];
                ctx.drawImage(blue_numbers, how_many_numbers_at_index4.bsX, how_many_numbers_at_index4.bsY, how_many_numbers_at_index4.bsWidth, how_many_numbers_at_index4.bsHeight, this.bdX, this.bdY,
                    this.bdWidth, this.bdHeight);
            } else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
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
    const how_many_numbers_at_index5 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 520,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        nr06 : [{  bsX : 146,
            bsY : 135,
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
            if ( frames <= 1275 && frames > 650) {
                let how_many_numbers_at_index5 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames <= 1750 && frames > 1275){
                let how_many_numbers_at_index5 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if(frames < 22250 && frames > 1750){
                let how_many_numbers_at_index5 = this.nr05[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //     this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
            //}


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
    const how_many_numbers_at_index6 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 365,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        nr06 : [{  bsX : 146,
            bsY : 135,
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
            if ( frames <= 1375 && frames > 475) {
                let how_many_numbers_at_index6 = this.nr01[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if( frames <= 2100 && frames > 1375){
                let how_many_numbers_at_index6 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else if( frames < 22100 && frames > 2100){
                let how_many_numbers_at_index6 = this.nr05[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index6.bsX,how_many_numbers_at_index6.bsY,how_many_numbers_at_index6.bsWidth,how_many_numbers_at_index6.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            } else{
                ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }

            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
            //}


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
    const how_many_numbers_at_index7 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 425,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        nr06 : [{  bsX : 146,
            bsY : 135,
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
            if( frames <= 3000 && frames > 1475){
                let how_many_numbers_at_index7 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index7.bsX,how_many_numbers_at_index7.bsY,how_many_numbers_at_index7.bsWidth,how_many_numbers_at_index7.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,how_many_numbers_at_index7.bsX,how_many_numbers_at_index7.bsY,how_many_numbers_at_index7.bsWidth,how_many_numbers_at_index7.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
            //}


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
    const how_many_numbers_at_index8 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 485,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        nr06 : [{  bsX : 146,
            bsY : 135,
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
            if( frames <= 3000 && frames > 1575){
                let how_many_numbers_at_index8 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index8.bsX,how_many_numbers_at_index8.bsY,how_many_numbers_at_index8.bsWidth,how_many_numbers_at_index8.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,how_many_numbers_at_index8.bsX,how_many_numbers_at_index8.bsY,how_many_numbers_at_index8.bsWidth,how_many_numbers_at_index8.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
            //}


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
    const how_many_numbers_at_index9 = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 165,
        bdX : 545,
        bdWidth : 55,
        bdHeight :55 ,

        nr01 : [{  bsX : 17,
            bsY : 9,
            bsWidth : 105 - 17,
            bsHeight : 100 - 9}],

        nr06 : [{  bsX : 146,
            bsY : 135,
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
            if( frames <= 3000 && frames > 1675){
                let how_many_numbers_at_index9 = this.nr06[0];
                ctx.drawImage(blue_numbers,how_many_numbers_at_index9.bsX,how_many_numbers_at_index9.bsY,how_many_numbers_at_index9.bsWidth,how_many_numbers_at_index9.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }else{
                ctx.drawImage(blue_numbers,how_many_numbers_at_index9.bsX,how_many_numbers_at_index9.bsY,how_many_numbers_at_index9.bsWidth,how_many_numbers_at_index9.bsHeight,this.bdX,this.bdY,
                    this.bdWidth,this.bdHeight);
            }
            // if(frames <= 575){
            //     ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1275 && frames > 575) {
            //     let how_many_numbers_at_index5 = this.nr01[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }else if ( frames <= 1700 && frames > 1275) {
            //     let how_many_numbers_at_index5 = this.nr06[0];
            //     ctx.drawImage(blue_numbers,how_many_numbers_at_index5.bsX,how_many_numbers_at_index5.bsY,how_many_numbers_at_index5.bsWidth,how_many_numbers_at_index5.bsHeight,this.bdX,this.bdY,
            //         this.bdWidth,this.bdHeight);
            // }if ( frames > 1700) {
            //     let how_many_numbers_at_index5 = this.nr05[0];

            // }
            //}


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
        dX : 20,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,


        bdY : 230,
        bdX : 20,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,nr1.sX,nr1.sY,this.sWidth,this.sHeight,nr1.dX,nr1.dY,
                this.dWidth,this.dHeight);
        },



        bubbleSort : function(){

        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 1){
                nr1.dY = destination_number_table[4][0];
                nr1.dX = destination_number_table[4][1];
                nr1.dWidth = destination_number_table[4][2];
                nr1.dHeight = destination_number_table[4][3];
                nr1.bdY = small_destination_number_table[4][0];
                nr1.bdX = small_destination_number_table[4][1];
                nr1.bdWidth = small_destination_number_table[4][2];
                nr1.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[4] == 1){


                nr1.dY = destination_number_table[5][0];
                nr1.dX = destination_number_table[5][1];
                nr1.dWidth = destination_number_table[5][2];
                nr1.dHeight = destination_number_table[5][3];
                nr1.bdY = small_destination_number_table[5][0];
                nr1.bdX = small_destination_number_table[5][1];
                nr1.bdWidth = small_destination_number_table[5][2];
                nr1.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[3] == 1){
                nr1.dY = destination_number_table[3][0];
                nr1.dX = destination_number_table[3][1];
                nr1.dWidth = destination_number_table[3][2];
                nr1.dHeight = destination_number_table[3][3];
                nr1.bdY = small_destination_number_table[3][0];
                nr1.bdX = small_destination_number_table[3][1];
                nr1.bdWidth = small_destination_number_table[3][2];
                nr1.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 1){
                nr1.dY = destination_number_table[2][0];
                nr1.dX = destination_number_table[2][1];
                nr1.dWidth = destination_number_table[2][2];
                nr1.dHeight = destination_number_table[2][3];
                nr1.bdY = small_destination_number_table[2][0];
                nr1.bdX = small_destination_number_table[2][1];
                nr1.bdWidth = small_destination_number_table[2][2];
                nr1.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 1){
                nr1.dY = destination_number_table[1][0];
                nr1.dX = destination_number_table[1][1];
                nr1.dWidth = destination_number_table[1][2];
                nr1.dHeight = destination_number_table[1][3];
                nr1.bdY = small_destination_number_table[1][0];
                nr1.bdX = small_destination_number_table[1][1];
                nr1.bdWidth = small_destination_number_table[1][2];
                nr1.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 1){
                nr1.dY = destination_number_table[0][0];
                nr1.dX = destination_number_table[0][1];
                nr1.dWidth = destination_number_table[0][2];
                nr1.dHeight = destination_number_table[0][3];
                nr1.bdY = small_destination_number_table[0][0];
                nr1.bdX = small_destination_number_table[0][1];
                nr1.bdWidth = small_destination_number_table[0][2];
                nr1.bdHeight = small_destination_number_table[0][3];
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

            }else {
                if(tab_step4[5] == 1){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==1){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==1){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==1){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==1){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==1){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
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
        dY : 55,
        dX : 115,
        //dY : 55,
        //dX : 515,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,


        //frame can change the image of the images
        frame : 0,

        bdY : 230,
        bdX : 120,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            //let nr2 = this.animation[this.frame];

            ctx.drawImage(numbers,nr2.sX,nr2.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },

        bubbleSort : function(){

        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 2){
                nr2.dY = destination_number_table[4][0];
                nr2.dX = destination_number_table[4][1];
                nr2.dWidth = destination_number_table[4][2];
                nr2.dHeight = destination_number_table[4][3];
                nr2.bdY = small_destination_number_table[4][0];
                nr2.bdX = small_destination_number_table[4][1];
                nr2.bdWidth = small_destination_number_table[4][2];
                nr2.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[4] == 2){


                nr2.dY = destination_number_table[5][0];
                nr2.dX = destination_number_table[5][1];
                nr2.dWidth = destination_number_table[5][2];
                nr2.dHeight = destination_number_table[5][3];
                nr2.bdY = small_destination_number_table[5][0];
                nr2.bdX = small_destination_number_table[5][1];
                nr2.bdWidth = small_destination_number_table[5][2];
                nr2.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[3] == 2){
                nr2.dY = destination_number_table[3][0];
                nr2.dX = destination_number_table[3][1];
                nr2.dWidth = destination_number_table[3][2];
                nr2.dHeight = destination_number_table[3][3];
                nr2.bdY = small_destination_number_table[3][0];
                nr2.bdX = small_destination_number_table[3][1];
                nr2.bdWidth = small_destination_number_table[3][2];
                nr2.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 2){
                nr2.dY = destination_number_table[2][0];
                nr2.dX = destination_number_table[2][1];
                nr2.dWidth = destination_number_table[2][2];
                nr2.dHeight = destination_number_table[2][3];
                nr2.bdY = small_destination_number_table[2][0];
                nr2.bdX = small_destination_number_table[2][1];
                nr2.bdWidth = small_destination_number_table[2][2];
                nr2.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 2){
                nr2.dY = destination_number_table[1][0];
                nr2.dX = destination_number_table[1][1];
                nr2.dWidth = destination_number_table[1][2];
                nr2.dHeight = destination_number_table[1][3];
                nr2.bdY = small_destination_number_table[1][0];
                nr2.bdX = small_destination_number_table[1][1];
                nr2.bdWidth = small_destination_number_table[1][2];
                nr2.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 2){
                nr2.dY = destination_number_table[0][0];
                nr2.dX = destination_number_table[0][1];
                nr2.dWidth = destination_number_table[0][2];
                nr2.dHeight = destination_number_table[0][3];
                nr2.bdY = small_destination_number_table[0][0];
                nr2.bdX = small_destination_number_table[0][1];
                nr2.bdWidth = small_destination_number_table[0][2];
                nr2.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 2){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==2){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==2){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==2){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==2){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==2){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
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
        //dY : 55,
        //dX : 20,
        dY : 55,
        dX : 215,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,


        //frame can change the image of the images
        frame : 0,

        bdY : 230,
        bdX : 220,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            //let nr3 = this.animation[this.frame];
            ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
                this.dWidth,this.dHeight);
        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 3){
                nr3.dY = destination_number_table[4][0];
                nr3.dX = destination_number_table[4][1];
                nr3.dWidth = destination_number_table[4][2];
                nr3.dHeight = destination_number_table[4][3];
                nr3.bdY = small_destination_number_table[4][0];
                nr3.bdX = small_destination_number_table[4][1];
                nr3.bdWidth = small_destination_number_table[4][2];
                nr3.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[4] == 3){


                nr3.dY = destination_number_table[5][0];
                nr3.dX = destination_number_table[5][1];
                nr3.dWidth = destination_number_table[5][2];
                nr3.dHeight = destination_number_table[5][3];
                nr3.bdY = small_destination_number_table[5][0];
                nr3.bdX = small_destination_number_table[5][1];
                nr3.bdWidth = small_destination_number_table[5][2];
                nr3.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[3] == 3){
                nr3.dY = destination_number_table[3][0];
                nr3.dX = destination_number_table[3][1];
                nr3.dWidth = destination_number_table[3][2];
                nr3.dHeight = destination_number_table[3][3];
                nr3.bdY = small_destination_number_table[3][0];
                nr3.bdX = small_destination_number_table[3][1];
                nr3.bdWidth = small_destination_number_table[3][2];
                nr3.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 3){
                nr3.dY = destination_number_table[2][0];
                nr3.dX = destination_number_table[2][1];
                nr3.dWidth = destination_number_table[2][2];
                nr3.dHeight = destination_number_table[2][3];
                nr3.bdY = small_destination_number_table[2][0];
                nr3.bdX = small_destination_number_table[2][1];
                nr3.bdWidth = small_destination_number_table[2][2];
                nr3.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 3){
                nr3.dY = destination_number_table[1][0];
                nr3.dX = destination_number_table[1][1];
                nr3.dWidth = destination_number_table[1][2];
                nr3.dHeight = destination_number_table[1][3];
                nr3.bdY = small_destination_number_table[1][0];
                nr3.bdX = small_destination_number_table[1][1];
                nr3.bdWidth = small_destination_number_table[1][2];
                nr3.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 3){
                nr3.dY = destination_number_table[0][0];
                nr3.dX = destination_number_table[0][1];
                nr3.dWidth = destination_number_table[0][2];
                nr3.dHeight = destination_number_table[0][3];
                nr3.bdY = small_destination_number_table[0][0];
                nr3.bdX = small_destination_number_table[0][1];
                nr3.bdWidth = small_destination_number_table[0][2];
                nr3.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 3){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==3){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==3){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==3){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==3){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==3){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
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
        dX : 315,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 320,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 4){
                nr4_a.dY = destination_number_table[4][0];
                nr4_a.dX = destination_number_table[4][1];
                nr4_a.dWidth = destination_number_table[4][2];
                nr4_a.dHeight = destination_number_table[4][3];
                nr4_a.bdY = small_destination_number_table[4][0];
                nr4_a.bdX = small_destination_number_table[4][1];
                nr4_a.bdWidth = small_destination_number_table[4][2];
                nr4_a.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[4] == 4){


                nr4_a.dY = destination_number_table[5][0];
                nr4_a.dX = destination_number_table[5][1];
                nr4_a.dWidth = destination_number_table[5][2];
                nr4_a.dHeight = destination_number_table[5][3];
                nr4_a.bdY = small_destination_number_table[5][0];
                nr4_a.bdX = small_destination_number_table[5][1];
                nr4_a.bdWidth = small_destination_number_table[5][2];
                nr4_a.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[3] == 4){
                nr4_a.dY = destination_number_table[3][0];
                nr4_a.dX = destination_number_table[3][1];
                nr4_a.dWidth = destination_number_table[3][2];
                nr4_a.dHeight = destination_number_table[3][3];
                nr4_a.bdY = small_destination_number_table[3][0];
                nr4_a.bdX = small_destination_number_table[3][1];
                nr4_a.bdWidth = small_destination_number_table[3][2];
                nr4_a.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 4){
                nr4_a.dY = destination_number_table[2][0];
                nr4_a.dX = destination_number_table[2][1];
                nr4_a.dWidth = destination_number_table[2][2];
                nr4_a.dHeight = destination_number_table[2][3];
                nr4_a.bdY = small_destination_number_table[2][0];
                nr4_a.bdX = small_destination_number_table[2][1];
                nr4_a.bdWidth = small_destination_number_table[2][2];
                nr4_a.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 4){
                nr4_a.dY = destination_number_table[1][0];
                nr4_a.dX = destination_number_table[1][1];
                nr4_a.dWidth = destination_number_table[1][2];
                nr4_a.dHeight = destination_number_table[1][3];
                nr4_a.bdY = small_destination_number_table[1][0];
                nr4_a.bdX = small_destination_number_table[1][1];
                nr4_a.bdWidth = small_destination_number_table[1][2];
                nr4_a.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 4){
                nr4_a.dY = destination_number_table[0][0];
                nr4_a.dX = destination_number_table[0][1];
                nr4_a.dWidth = destination_number_table[0][2];
                nr4_a.dHeight = destination_number_table[0][3];
                nr4_a.bdY = small_destination_number_table[0][0];
                nr4_a.bdX = small_destination_number_table[0][1];
                nr4_a.bdWidth = small_destination_number_table[0][2];
                nr4_a.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 4){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==4){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==4){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==4){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==4){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==4){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }


            }

        }
    }
    const nr6 = {
        //green number
        sX : 429,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,

        dY : 55,
        dX : 410,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,

        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 520,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 6){
                nr6.dY = destination_number_table[4][0];
                nr6.dX = destination_number_table[4][1];
                nr6.dWidth = destination_number_table[4][2];
                nr6.dHeight = destination_number_table[4][3];
                nr6.bdY = small_destination_number_table[5][0];
                nr6.bdX = small_destination_number_table[5][1];
                nr6.bdWidth = small_destination_number_table[5][2];
                nr6.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[4] == 6){


                nr6.dY = destination_number_table[5][0];
                nr6.dX = destination_number_table[5][1];
                nr6.dWidth = destination_number_table[5][2];
                nr6.dHeight = destination_number_table[5][3];
                nr6.bdY = small_destination_number_table[4][0];
                nr6.bdX = small_destination_number_table[4][1];
                nr6.bdWidth = small_destination_number_table[4][2];
                nr6.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[3] == 6){
                nr6.dY = destination_number_table[3][0];
                nr6.dX = destination_number_table[3][1];
                nr6.dWidth = destination_number_table[3][2];
                nr6.dHeight = destination_number_table[3][3];
                nr6.bdY = small_destination_number_table[3][0];
                nr6.bdX = small_destination_number_table[3][1];
                nr6.bdWidth = small_destination_number_table[3][2];
                nr6.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 6){
                nr6.dY = destination_number_table[2][0];
                nr6.dX = destination_number_table[2][1];
                nr6.dWidth = destination_number_table[2][2];
                nr6.dHeight = destination_number_table[2][3];
                nr6.bdY = small_destination_number_table[2][0];
                nr6.bdX = small_destination_number_table[2][1];
                nr6.bdWidth = small_destination_number_table[2][2];
                nr6.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 6){
                nr6.dY = destination_number_table[1][0];
                nr6.dX = destination_number_table[1][1];
                nr6.dWidth = destination_number_table[1][2];
                nr6.dHeight = destination_number_table[1][3];
                nr6.bdY = small_destination_number_table[1][0];
                nr6.bdX = small_destination_number_table[1][1];
                nr6.bdWidth = small_destination_number_table[1][2];
                nr6.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 6){
                nr6.dY = destination_number_table[0][0];
                nr6.dX = destination_number_table[0][1];
                nr6.dWidth = destination_number_table[0][2];
                nr6.dHeight = destination_number_table[0][3];
                nr6.bdY = small_destination_number_table[0][0];
                nr6.bdX = small_destination_number_table[0][1];
                nr6.bdWidth = small_destination_number_table[0][2];
                nr6.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 6){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==6){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==6){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==6){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==6){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==6){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
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
        dX : 515,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,




        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 420,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
            // ctx.drawImage(numbers, -190, 0);
        },


        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 5){
                nr5.dY = destination_number_table[4][0];
                nr5.dX = destination_number_table[4][1];
                nr5.dWidth = destination_number_table[4][2];
                nr5.dHeight = destination_number_table[4][3];
                nr5.bdY = small_destination_number_table[4][0];
                nr5.bdX = small_destination_number_table[4][1];
                nr5.bdWidth = small_destination_number_table[4][2];
                nr5.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[4] == 5){


                nr5.dY = destination_number_table[5][0];
                nr5.dX = destination_number_table[5][1];
                nr5.dWidth = destination_number_table[5][2];
                nr5.dHeight = destination_number_table[5][3];
                nr5.bdY = small_destination_number_table[5][0];
                nr5.bdX = small_destination_number_table[5][1];
                nr5.bdWidth = small_destination_number_table[5][2];
                nr5.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[3] == 5){
                nr5.dY = destination_number_table[3][0];
                nr5.dX = destination_number_table[3][1];
                nr5.dWidth = destination_number_table[3][2];
                nr5.dHeight = destination_number_table[3][3];
                nr5.bdY = small_destination_number_table[3][0];
                nr5.bdX = small_destination_number_table[3][1];
                nr5.bdWidth = small_destination_number_table[3][2];
                nr5.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 5){
                nr5.dY = destination_number_table[2][0];
                nr5.dX = destination_number_table[2][1];
                nr5.dWidth = destination_number_table[2][2];
                nr5.dHeight = destination_number_table[2][3];
                nr5.bdY = small_destination_number_table[2][0];
                nr5.bdX = small_destination_number_table[2][1];
                nr5.bdWidth = small_destination_number_table[2][2];
                nr5.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 5){
                nr5.dY = destination_number_table[1][0];
                nr5.dX = destination_number_table[1][1];
                nr5.dWidth = destination_number_table[1][2];
                nr5.dHeight = destination_number_table[1][3];
                nr5.bdY = small_destination_number_table[1][0];
                nr5.bdX = small_destination_number_table[1][1];
                nr5.bdWidth = small_destination_number_table[1][2];
                nr5.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 5){
                nr5.dY = destination_number_table[0][0];
                nr5.dX = destination_number_table[0][1];
                nr5.dWidth = destination_number_table[0][2];
                nr5.dHeight = destination_number_table[0][3];
                nr5.bdY = small_destination_number_table[0][0];
                nr5.bdX = small_destination_number_table[0][1];
                nr5.bdWidth = small_destination_number_table[0][2];
                nr5.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 5){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==5){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==5){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==5){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==5){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==5){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
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

        dY : 55,
        dX : 515,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,




        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 420,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
            // ctx.drawImage(numbers, -190, 0);
        },


        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 7){
                nr7.dY = destination_number_table[4][0];
                nr7.dX = destination_number_table[4][1];
                nr7.dWidth = destination_number_table[4][2];
                nr7.dHeight = destination_number_table[4][3];
                nr7.bdY = small_destination_number_table[5][0];
                nr7.bdX = small_destination_number_table[5][1];
                nr7.bdWidth = small_destination_number_table[5][2];
                nr7.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[4] == 7){



                nr7.dY = destination_number_table[5][0];
                nr7.dX = destination_number_table[5][1];
                nr7.dWidth = destination_number_table[5][2];
                nr7.dHeight = destination_number_table[5][3];
                nr7.bdY = small_destination_number_table[4][0];
                nr7.bdX = small_destination_number_table[4][1];
                nr7.bdWidth = small_destination_number_table[4][2];
                nr7.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[3] == 7){
                nr7.dY = destination_number_table[3][0];
                nr7.dX = destination_number_table[3][1];
                nr7.dWidth = destination_number_table[3][2];
                nr7.dHeight = destination_number_table[3][3];
                nr7.bdY = small_destination_number_table[3][0];
                nr7.bdX = small_destination_number_table[3][1];
                nr7.bdWidth = small_destination_number_table[3][2];
                nr7.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 7){
                nr7.dY = destination_number_table[2][0];
                nr7.dX = destination_number_table[2][1];
                nr7.dWidth = destination_number_table[2][2];
                nr7.dHeight = destination_number_table[2][3];
                nr7.bdY = small_destination_number_table[2][0];
                nr7.bdX = small_destination_number_table[2][1];
                nr7.bdWidth = small_destination_number_table[2][2];
                nr7.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 7){
                nr7.dY = destination_number_table[1][0];
                nr7.dX = destination_number_table[1][1];
                nr7.dWidth = destination_number_table[1][2];
                nr7.dHeight = destination_number_table[1][3];
                nr7.bdY = small_destination_number_table[1][0];
                nr7.bdX = small_destination_number_table[1][1];
                nr7.bdWidth = small_destination_number_table[1][2];
                nr7.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 7){
                nr7.dY = destination_number_table[0][0];
                nr7.dX = destination_number_table[0][1];
                nr7.dWidth = destination_number_table[0][2];
                nr7.dHeight = destination_number_table[0][3];
                nr7.bdY = small_destination_number_table[0][0];
                nr7.bdX = small_destination_number_table[0][1];
                nr7.bdWidth = small_destination_number_table[0][2];
                nr7.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 7){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==7){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==7){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==7){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==7){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==7){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
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

        dY : 55,
        dX : 515,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,




        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 420,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
            // ctx.drawImage(numbers, -190, 0);
        },


        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 8){
                nr8.dY = destination_number_table[4][0];
                nr8.dX = destination_number_table[4][1];
                nr8.dWidth = destination_number_table[4][2];
                nr8.dHeight = destination_number_table[4][3];
                nr8.bdY = small_destination_number_table[5][0];
                nr8.bdX = small_destination_number_table[5][1];
                nr8.bdWidth = small_destination_number_table[5][2];
                nr8.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[4] == 8){



                nr8.dY = destination_number_table[5][0];
                nr8.dX = destination_number_table[5][1];
                nr8.dWidth = destination_number_table[5][2];
                nr8.dHeight = destination_number_table[5][3];
                nr8.bdY = small_destination_number_table[4][0];
                nr8.bdX = small_destination_number_table[4][1];
                nr8.bdWidth = small_destination_number_table[4][2];
                nr8.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[3] == 8){
                nr8.dY = destination_number_table[3][0];
                nr8.dX = destination_number_table[3][1];
                nr8.dWidth = destination_number_table[3][2];
                nr8.dHeight = destination_number_table[3][3];
                nr8.bdY = small_destination_number_table[3][0];
                nr8.bdX = small_destination_number_table[3][1];
                nr8.bdWidth = small_destination_number_table[3][2];
                nr8.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 8){
                nr8.dY = destination_number_table[2][0];
                nr8.dX = destination_number_table[2][1];
                nr8.dWidth = destination_number_table[2][2];
                nr8.dHeight = destination_number_table[2][3];
                nr8.bdY = small_destination_number_table[2][0];
                nr8.bdX = small_destination_number_table[2][1];
                nr8.bdWidth = small_destination_number_table[2][2];
                nr8.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 8){
                nr8.dY = destination_number_table[1][0];
                nr8.dX = destination_number_table[1][1];
                nr8.dWidth = destination_number_table[1][2];
                nr8.dHeight = destination_number_table[1][3];
                nr8.bdY = small_destination_number_table[1][0];
                nr8.bdX = small_destination_number_table[1][1];
                nr8.bdWidth = small_destination_number_table[1][2];
                nr8.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 8){
                nr8.dY = destination_number_table[0][0];
                nr8.dX = destination_number_table[0][1];
                nr8.dWidth = destination_number_table[0][2];
                nr8.dHeight = destination_number_table[0][3];
                nr8.bdY = small_destination_number_table[0][0];
                nr8.bdX = small_destination_number_table[0][1];
                nr8.bdWidth = small_destination_number_table[0][2];
                nr8.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 8){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==8){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==8){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==8){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==8){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==8){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
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

        dY : 55,
        dX : 515,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,




        //frame can change the image of the images
        frame : 0,
        bdY : 230,
        bdX : 420,
        bdWidth : 30,
        bdHeight :30 ,
        how_many_draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.bdX,this.bdY,
                this.bdWidth,this.bdHeight);
        },
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
            // ctx.drawImage(numbers, -190, 0);
        },


        logic : function(){
            //decreasing basic position
            if(tab_step4[5] == 9){
                nr9.dY = destination_number_table[4][0];
                nr9.dX = destination_number_table[4][1];
                nr9.dWidth = destination_number_table[4][2];
                nr9.dHeight = destination_number_table[4][3];
                nr9.bdY = small_destination_number_table[5][0];
                nr9.bdX = small_destination_number_table[5][1];
                nr9.bdWidth = small_destination_number_table[5][2];
                nr9.bdHeight = small_destination_number_table[5][3];
            }else if(tab_step4[4] == 9){



                nr9.dY = destination_number_table[5][0];
                nr9.dX = destination_number_table[5][1];
                nr9.dWidth = destination_number_table[5][2];
                nr9.dHeight = destination_number_table[5][3];
                nr9.bdY = small_destination_number_table[4][0];
                nr9.bdX = small_destination_number_table[4][1];
                nr9.bdWidth = small_destination_number_table[4][2];
                nr9.bdHeight = small_destination_number_table[4][3];
            }else if(tab_step4[3] == 9){
                nr9.dY = destination_number_table[3][0];
                nr9.dX = destination_number_table[3][1];
                nr9.dWidth = destination_number_table[3][2];
                nr9.dHeight = destination_number_table[3][3];
                nr9.bdY = small_destination_number_table[3][0];
                nr9.bdX = small_destination_number_table[3][1];
                nr9.bdWidth = small_destination_number_table[3][2];
                nr9.bdHeight = small_destination_number_table[3][3];
            }else if(tab_step4[2] == 9){
                nr9.dY = destination_number_table[2][0];
                nr9.dX = destination_number_table[2][1];
                nr9.dWidth = destination_number_table[2][2];
                nr9.dHeight = destination_number_table[2][3];
                nr9.bdY = small_destination_number_table[2][0];
                nr9.bdX = small_destination_number_table[2][1];
                nr9.bdWidth = small_destination_number_table[2][2];
                nr9.bdHeight = small_destination_number_table[2][3];
            }else if(tab_step4[1] == 9){
                nr9.dY = destination_number_table[1][0];
                nr9.dX = destination_number_table[1][1];
                nr9.dWidth = destination_number_table[1][2];
                nr9.dHeight = destination_number_table[1][3];
                nr9.bdY = small_destination_number_table[1][0];
                nr9.bdX = small_destination_number_table[1][1];
                nr9.bdWidth = small_destination_number_table[1][2];
                nr9.bdHeight = small_destination_number_table[1][3];
            }else if(tab_step4[0] == 9){
                nr9.dY = destination_number_table[0][0];
                nr9.dX = destination_number_table[0][1];
                nr9.dWidth = destination_number_table[0][2];
                nr9.dHeight = destination_number_table[0][3];
                nr9.bdY = small_destination_number_table[0][0];
                nr9.bdX = small_destination_number_table[0][1];
                nr9.bdWidth = small_destination_number_table[0][2];
                nr9.bdHeight = small_destination_number_table[0][3];
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
                if(tab_step4[5] == 9){
                    if  (1850 > frames && frames > 1800) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[4]==9){
                    if  (1950 > frames && frames > 1900) {

                        this.dY += 8 * globalSpeed;
                        this.dX -= 4 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[3]==9){
                    if  (1750 > frames && frames > 1700) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[2]==9){
                    if  (1650 > frames && frames > 1600) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
                }else if(tab_step4[1]==9){

                    if  (1550 > frames && frames > 1500) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    } //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }

                }else if(tab_step4[0]==9){
                    if  (1450 > frames && frames > 1400) {

                        this.dY += 8 * globalSpeed;
                        this.dX += 0 *  globalSpeed;


                    }
                    //THE END OF SIMULATION
                    if( frames == 2999){
                        this.logic();



                    }
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
        bdX : 20,
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
    const index11 = {
        //blue number
        bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9,
        bdY : 230,
        bdX : 80,
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
    const index12 = {
        //blue number
        bsX : 140,
        bsY : 9,
        bsWidth : 236 - 140,
        bsHeight : 100 - 9,
        bdY : 230,
        bdX : 140,
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
    const index13 = {
        //blue number
        bsX : 270,
        bsY : 9,
        bsWidth : 360 - 270,
        bsHeight : 100 - 9,
        bdY : 230,
        bdX : 200,
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
    const index14 = {
        //blue number
        bsX : 390,
        bsY : 9,
        bsWidth : 490 - 390,
        bsHeight : 100 - 9,
        bdY : 230,
        bdX : 260,
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
    const index15 = {
        //blue number
        bsX : 17,
        bsY : 135,
        bsWidth : 110 - 17,
        bsHeight : 225 - 135,
        bdY : 230,
        bdX : 320,
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
    const index16 = {
        //blue number
        bsX : 144,
        bsY : 135,
        bsWidth : 110 - 17,
        bsHeight : 225 - 135,
        bdY : 230,
        bdX : 380,
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
    const index17 = {
        //blue number
        bsX : 272,
        bsY : 135,
        bsWidth : 110 - 17,
        bsHeight : 225 - 135,
        bdY : 230,
        bdX : 440,
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
    const index18 = {
        //blue number
        bsX : 392,
        bsY : 135,
        bsWidth : 110 - 17,
        bsHeight : 225 - 135,
        bdY : 230,
        bdX : 500,
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
    const index19 = {
        //blue number
        bsX : 20,
        bsY : 260,
        bsWidth : 110 - 17,
        bsHeight : 225 - 135,
        bdY : 230,
        bdX : 560,
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
                ctx.drawImage(pauseQUICK,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
        how_many_numbers_at_index1.draw();
        how_many_numbers_at_index2.draw();
        how_many_numbers_at_index3.draw();
        how_many_numbers_at_index4.draw();
        how_many_numbers_at_index5.draw();
        // how_many_numbers_at_index6.draw();
        // how_many_numbers_at_index7.draw();
        // how_many_numbers_at_index8.draw();
        // how_many_numbers_at_index9.draw();

        //DRAWING SORTED NUMBERS
        //if user write the first number into form
        if(x1==1 || x2==1|| x3==1|| x4==1|| x5==1 || x6==1){
            nr1.draw();nr1.how_many_draw();
        }
        if(x1==2 || x2==2|| x3==2|| x4==2|| x5==2 || x6==2){
            nr2.draw();nr2.how_many_draw();
        }
        if(x1==3 || x2==3|| x3==3|| x4==3|| x5==3 || x6==3){
            nr3.draw();nr3.how_many_draw();
        }
        if(x1==4 || x2==4|| x3==4|| x4==4|| x5==4 || x6==4){
            nr4_a.draw();nr4_a.how_many_draw();
        }
        if(x1==5 || x2==5|| x3==5|| x4==5|| x5==5 || x6==5){
            nr5.draw();nr5.how_many_draw();
        }
        if(x1==6 || x2==6|| x3==6|| x4==6|| x5==6 || x6==6){
            nr6.draw();nr6.how_many_draw();
        }
        if(x1==7 || x2==7|| x3==7|| x4==7|| x5==7 || x6==7){
            nr7.draw();nr7.how_many_draw();
        }
        if(x1==8 || x2==8|| x3==8|| x4==8|| x5==8 || x6==8){
            nr8.draw();nr8.how_many_draw();
        }
        if(x1==9 || x2==9|| x3==9|| x4==9|| x5==9 || x6==9){
            nr9.draw();nr9.how_many_draw();
        }
        //DRAWING STATE
        getReady.draw();gameOver.draw();

        //DRAWING 1ST LINE OF INDEX
        index00.draw();index01.draw(); index02.draw(); index03.draw(); index04.draw(); index05.draw();

        //DRAWING 2ND LINE OF INDEX
        // index10.draw();
        // index11.draw();
        // index12.draw();
        // index13.draw();
        // index14.draw();
        // index15.draw();
        // index16.draw();
        // index17.draw();
        // index18.draw();
        // index19.draw();

        //DRAWING 3ND LINE OF INDEX
        index20.draw();index21.draw(); index22.draw(); index23.draw(); index24.draw(); index25.draw();

        //DRAWING ACTION FOR 'PIWOT' NUMBER
        // if(state.current == state.getReady){}
        // else{
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // }else{
        if(frames <= 2000   && frames > 10){
            red_circle01.draw();
            red_circle02.draw();

        }
        if(frames > 1300  && frames <=3000){
            // brown_circle01.draw();
            // brown_circle02.draw();
        }
        //}

        // }


    }
//UPDATE
    function update(){
        nr1.update();
        nr2.update();
        nr3.update();
        nr4_a.update();
        nr6.update();
        nr5.update();
        nr7.update();
        nr8.update();
        nr9.update();
        how_many_numbers_at_index0.update();
        how_many_numbers_at_index1.update();
        how_many_numbers_at_index2.update();
        how_many_numbers_at_index3.update();
        how_many_numbers_at_index4.update();
        how_many_numbers_at_index5.update();
        how_many_numbers_at_index6.update();
        how_many_numbers_at_index7.update();
        how_many_numbers_at_index8.update();
        how_many_numbers_at_index9.update();
        red_circle01.update();
        red_circle02.update();
        // brown_circle01.update();
        // brown_circle02.update();
        //c2n.update();
        //line.update();
        if(frames == 3000){
            state.current = 2;
        };


    }

    function logic_for_all(){
        nr1.logic();
        nr2.logic();
        nr3.logic();
        nr4_a.logic();
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

        }else {
            frames++;
        }

        requestAnimationFrame(loop);
    }
    logic_for_all();
    loop();
}

