





function myFunction() {
    //VALIDATION
    var validation1 = document.forms["myForm"]["fname"].value;
    var validation2 = document.forms["myForm"]["fname1"].value;
    var validation3 = document.forms["myForm"]["fname2"].value;
    var validation4 = document.forms["myForm"]["fname3"].value;
    var validation5 = document.forms["myForm"]["fname4"].value;
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
    x1 = document.getElementById("numb").value;
    x2 = document.getElementById("numb1").value;
    x3 = document.getElementById("numb2").value;
    x4 = document.getElementById("numb3").value;
    x5 = document.getElementById("numb4").value;
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










    // TEMPORARY VARIABLE
    var x, text;
    // TABLE OF 5 NUMBERS (FROM 'nr1BUBBLE') : dY,dX,dWidth,dHeight
    const destination_number_table = [
        [200,20, 100-24,100-24],
        [200,100, 100-24,100-24],
        [200,180, 100-24,100-24],
        [200,260, 100-24,100-24],
        [200,340, 100-24,100-24],
    ];



//EXAMPLE AND CONST VARIABLE
    // SELECT CVS
    const cvsBUBBLE = document.getElementById("birdBUBBLE");
    cvsBUBBLE.style.display = "block";
    // if (cvsBUBBLE.style.display === "none") {
    //     cvsBUBBLE.style.display = "block";
    // } else {
    //     cvsBUBBLE.style.display = "none";
    // }
    const ctxBUBBLE = cvsBUBBLE.getContext("2d");

    // If x is Not a Number or less than one or greater than 10




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
                if(framesBUBBLE == 4250){
                    this.dX =50;
                }
                //finish
                if(framesBUBBLE==4998){
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

        //TRUE VALUE
        value:1,


        sX : 24,
        sY : 24,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 20,
        dX : 20,
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

        logic : function(){
            //decreasing basic position
             if(tab_step4[4] == 1){
                nr1BUBBLE.dY = destination_number_table[0][0];
                nr1BUBBLE.dX = destination_number_table[0][1];
                nr1BUBBLE.dWidth = destination_number_table[0][2];
                nr1BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3] == 1){
                 nr1BUBBLE.dY = destination_number_table[1][0];
                 nr1BUBBLE.dX = destination_number_table[1][1];
                 nr1BUBBLE.dWidth = destination_number_table[1][2];
                 nr1BUBBLE.dHeight = destination_number_table[1][3];
             }else if(tab_step4[2] == 1){
                 nr1BUBBLE.dY = destination_number_table[2][0];
                 nr1BUBBLE.dX = destination_number_table[2][1];
                 nr1BUBBLE.dWidth = destination_number_table[2][2];
                 nr1BUBBLE.dHeight = destination_number_table[2][3];
             }else if(tab_step4[1] == 1){
                 nr1BUBBLE.dY = destination_number_table[3][0];
                 nr1BUBBLE.dX = destination_number_table[3][1];
                 nr1BUBBLE.dWidth = destination_number_table[3][2];
                 nr1BUBBLE.dHeight = destination_number_table[3][3];
             }else if(tab_step4[0] == 1){
                 nr1BUBBLE.dY = destination_number_table[4][0];
                 nr1BUBBLE.dX = destination_number_table[4][1];
                 nr1BUBBLE.dWidth = destination_number_table[4][2];
                 nr1BUBBLE.dHeight = destination_number_table[4][3];
             }
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

            //choose the way of moving which depends on position on canvas
            //the biggest number

            if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){

            }else{
                if(tab_step4[4] == 1){

                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[3] == 1){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                }else if(tab_step4[2] == 1){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 1){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                }else if(tab_step4[0] == 1){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
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

        logic : function(){

            if(tab_step4[4]  == 2){
                nr2BUBBLE.dY = destination_number_table[0][0];
                nr2BUBBLE.dX = destination_number_table[0][1];
                nr2BUBBLE.dWidth = destination_number_table[0][2];
                nr2BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3] == 2){
                nr2BUBBLE.dY = destination_number_table[1][0];
                nr2BUBBLE.dX = destination_number_table[1][1];
                nr2BUBBLE.dWidth = destination_number_table[1][2];
                nr2BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2] == 2){
                nr2BUBBLE.dY = destination_number_table[2][0];
                nr2BUBBLE.dX = destination_number_table[2][1];
                nr2BUBBLE.dWidth = destination_number_table[2][2];
                nr2BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1] == 2){
                nr2BUBBLE.dY = destination_number_table[3][0];
                nr2BUBBLE.dX = destination_number_table[3][1];
                nr2BUBBLE.dWidth = destination_number_table[3][2];
                nr2BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0] == 2){
                nr2BUBBLE.dY = destination_number_table[4][0];
                nr2BUBBLE.dX = destination_number_table[4][1];
                nr2BUBBLE.dWidth = destination_number_table[4][2];
                nr2BUBBLE.dHeight = destination_number_table[4][3];
            }
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
                if(tab_step4[4] == 2){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 2){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[2] == 2){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 2){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 2){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
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
        logic : function(){

            if(tab_step4[4]  == 3){
                nr3BUBBLE.dY = destination_number_table[0][0];
                nr3BUBBLE.dX = destination_number_table[0][1];
                nr3BUBBLE.dWidth = destination_number_table[0][2];
                nr3BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 3){
                nr3BUBBLE.dY = destination_number_table[1][0];
                nr3BUBBLE.dX = destination_number_table[1][1];
                nr3BUBBLE.dWidth = destination_number_table[1][2];
                nr3BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 3){
                nr3BUBBLE.dY = destination_number_table[2][0];
                nr3BUBBLE.dX = destination_number_table[2][1];
                nr3BUBBLE.dWidth = destination_number_table[2][2];
                nr3BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 3){
                nr3BUBBLE.dY = destination_number_table[3][0];
                nr3BUBBLE.dX = destination_number_table[3][1];
                nr3BUBBLE.dWidth = destination_number_table[3][2];
                nr3BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 3){
                nr3BUBBLE.dY = destination_number_table[4][0];
                nr3BUBBLE.dX = destination_number_table[4][1];
                nr3BUBBLE.dWidth = destination_number_table[4][2];
                nr3BUBBLE.dHeight = destination_number_table[4][3];
            }
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
                if(tab_step4[4] == 3){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 3){

                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                }else if(tab_step4[2] == 3){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 3){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                }else if(tab_step4[0] == 3){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
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
        logic : function(){

            if(tab_step4[4]  == 4){
                nr4BUBBLE.dY = destination_number_table[0][0];
                nr4BUBBLE.dX = destination_number_table[0][1];
                nr4BUBBLE.dWidth = destination_number_table[0][2];
                nr4BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 4){
                nr4BUBBLE.dY = destination_number_table[1][0];
                nr4BUBBLE.dX = destination_number_table[1][1];
                nr4BUBBLE.dWidth = destination_number_table[1][2];
                nr4BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 4){
                nr4BUBBLE.dY = destination_number_table[2][0];
                nr4BUBBLE.dX = destination_number_table[2][1];
                nr4BUBBLE.dWidth = destination_number_table[2][2];
                nr4BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 4){
                nr4BUBBLE.dY = destination_number_table[3][0];
                nr4BUBBLE.dX = destination_number_table[3][1];
                nr4BUBBLE.dWidth = destination_number_table[3][2];
                nr4BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 4){
                nr4BUBBLE.dY = destination_number_table[4][0];
                nr4BUBBLE.dX = destination_number_table[4][1];
                nr4BUBBLE.dWidth = destination_number_table[4][2];
                nr4BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 4){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 4){
                    // if( framesBUBBLE == 2050){
                    //     this.dX =50;
                    // }
                    // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[2] == 4){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 4){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 4){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                }
            }

        }
    }
    const nr5BUBBLE = {
        sX : 227,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        logic : function(){

            if(tab_step4[4]  == 5){
                nr5BUBBLE.dY = destination_number_table[0][0];
                nr5BUBBLE.dX = destination_number_table[0][1];
                nr5BUBBLE.dWidth = destination_number_table[0][2];
                nr5BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 5){
                nr5BUBBLE.dY = destination_number_table[1][0];
                nr5BUBBLE.dX = destination_number_table[1][1];
                nr5BUBBLE.dWidth = destination_number_table[1][2];
                nr5BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 5){
                nr5BUBBLE.dY = destination_number_table[2][0];
                nr5BUBBLE.dX = destination_number_table[2][1];
                nr5BUBBLE.dWidth = destination_number_table[2][2];
                nr5BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 5){
                nr5BUBBLE.dY = destination_number_table[3][0];
                nr5BUBBLE.dX = destination_number_table[3][1];
                nr5BUBBLE.dWidth = destination_number_table[3][2];
                nr5BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 5){
                nr5BUBBLE.dY = destination_number_table[4][0];
                nr5BUBBLE.dX = destination_number_table[4][1];
                nr5BUBBLE.dWidth = destination_number_table[4][2];
                nr5BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 5){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 5){
                    // if( framesBUBBLE == 2050){
                    //     this.dX =50;
                    // }
                    // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[2] == 5){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 5){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 5){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                }
            }

        }
    }
    const nr6BUBBLE = {
        sX : 431,
        sY : 215,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        logic : function(){

            if(tab_step4[4]  == 6){
                nr6BUBBLE.dY = destination_number_table[0][0];
                nr6BUBBLE.dX = destination_number_table[0][1];
                nr6BUBBLE.dWidth = destination_number_table[0][2];
                nr6BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 6){
                nr6BUBBLE.dY = destination_number_table[1][0];
                nr6BUBBLE.dX = destination_number_table[1][1];
                nr6BUBBLE.dWidth = destination_number_table[1][2];
                nr6BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 6){
                nr6BUBBLE.dY = destination_number_table[2][0];
                nr6BUBBLE.dX = destination_number_table[2][1];
                nr6BUBBLE.dWidth = destination_number_table[2][2];
                nr6BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 6){
                nr6BUBBLE.dY = destination_number_table[3][0];
                nr6BUBBLE.dX = destination_number_table[3][1];
                nr6BUBBLE.dWidth = destination_number_table[3][2];
                nr6BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 6){
                nr6BUBBLE.dY = destination_number_table[4][0];
                nr6BUBBLE.dX = destination_number_table[4][1];
                nr6BUBBLE.dWidth = destination_number_table[4][2];
                nr6BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 6){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 6){
                    // if( framesBUBBLE == 2050){
                    //     this.dX =50;
                    // }
                    // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[2] == 6){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 6){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 6){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                }
            }

        }
    }
    const nr7BUBBLE = {
        sX : 34,
        sY : 403,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        logic : function(){

            if(tab_step4[4]  == 7){
                nr7BUBBLE.dY = destination_number_table[0][0];
                nr7BUBBLE.dX = destination_number_table[0][1];
                nr7BUBBLE.dWidth = destination_number_table[0][2];
                nr7BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 7){
                nr7BUBBLE.dY = destination_number_table[1][0];
                nr7BUBBLE.dX = destination_number_table[1][1];
                nr7BUBBLE.dWidth = destination_number_table[1][2];
                nr7BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 7){
                nr7BUBBLE.dY = destination_number_table[2][0];
                nr7BUBBLE.dX = destination_number_table[2][1];
                nr7BUBBLE.dWidth = destination_number_table[2][2];
                nr7BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 7){
                nr7BUBBLE.dY = destination_number_table[3][0];
                nr7BUBBLE.dX = destination_number_table[3][1];
                nr7BUBBLE.dWidth = destination_number_table[3][2];
                nr7BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 7){
                nr7BUBBLE.dY = destination_number_table[4][0];
                nr7BUBBLE.dX = destination_number_table[4][1];
                nr7BUBBLE.dWidth = destination_number_table[4][2];
                nr7BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 7){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 7){
                    // if( framesBUBBLE == 2050){
                    //     this.dX =50;
                    // }
                    // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[2] == 7){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 7){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 7){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                }
            }

        }
    }
    const nr8BUBBLE = {
        sX : 230,
        sY : 403,
        sWidth : 168 - 24,
        sHeight : 168 - 24,
        dY : 200,
        dX : 260,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        logic : function(){

            if(tab_step4[4]  == 8){
                nr8BUBBLE.dY = destination_number_table[0][0];
                nr8BUBBLE.dX = destination_number_table[0][1];
                nr8BUBBLE.dWidth = destination_number_table[0][2];
                nr8BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 8){
                nr8BUBBLE.dY = destination_number_table[1][0];
                nr8BUBBLE.dX = destination_number_table[1][1];
                nr8BUBBLE.dWidth = destination_number_table[1][2];
                nr8BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 8){
                nr8BUBBLE.dY = destination_number_table[2][0];
                nr8BUBBLE.dX = destination_number_table[2][1];
                nr8BUBBLE.dWidth = destination_number_table[2][2];
                nr8BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 8){
                nr8BUBBLE.dY = destination_number_table[3][0];
                nr8BUBBLE.dX = destination_number_table[3][1];
                nr8BUBBLE.dWidth = destination_number_table[3][2];
                nr8BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 8){
                nr8BUBBLE.dY = destination_number_table[4][0];
                nr8BUBBLE.dX = destination_number_table[4][1];
                nr8BUBBLE.dWidth = destination_number_table[4][2];
                nr8BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 8){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[3] == 8){
                    // if( framesBUBBLE == 2050){
                    //     this.dX =50;
                    // }
                    // if(2650 > framesBUBBLE && framesBUBBLE > 2300){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(3250 > framesBUBBLE && framesBUBBLE > 2900){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }


                }else if(tab_step4[2] == 8){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 8){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 8){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
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
        dX : 340,
        dWidth : 100 - 24,
        dHeight :100 - 24 ,
        logic : function(){

            if(tab_step4[4]  == 9){
                nr9BUBBLE.dY = destination_number_table[0][0];
                nr9BUBBLE.dX = destination_number_table[0][1];
                nr9BUBBLE.dWidth = destination_number_table[0][2];
                nr9BUBBLE.dHeight = destination_number_table[0][3];
            }else if(tab_step4[3]  == 9){
                nr9BUBBLE.dY = destination_number_table[1][0];
                nr9BUBBLE.dX = destination_number_table[1][1];
                nr9BUBBLE.dWidth = destination_number_table[1][2];
                nr9BUBBLE.dHeight = destination_number_table[1][3];
            }else if(tab_step4[2]  == 9){
                nr9BUBBLE.dY = destination_number_table[2][0];
                nr9BUBBLE.dX = destination_number_table[2][1];
                nr9BUBBLE.dWidth = destination_number_table[2][2];
                nr9BUBBLE.dHeight = destination_number_table[2][3];
            }else if(tab_step4[1]  == 9){
                nr9BUBBLE.dY = destination_number_table[3][0];
                nr9BUBBLE.dX = destination_number_table[3][1];
                nr9BUBBLE.dWidth = destination_number_table[3][2];
                nr9BUBBLE.dHeight = destination_number_table[3][3];
            }else if(tab_step4[0]  == 9){
                nr9BUBBLE.dY = destination_number_table[4][0];
                nr9BUBBLE.dX = destination_number_table[4][1];
                nr9BUBBLE.dWidth = destination_number_table[4][2];
                nr9BUBBLE.dHeight = destination_number_table[4][3];
            }
        },
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
                if(tab_step4[4] == 9){
                    // if(600 > framesBUBBLE && framesBUBBLE > 250){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(1200 > framesBUBBLE && framesBUBBLE > 850){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    // if(1800 > framesBUBBLE && framesBUBBLE > 1450){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[3] == 9){
                    if(250 > framesBUBBLE && framesBUBBLE > 150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[2] == 9){
                    if(800 > framesBUBBLE && framesBUBBLE > 700){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2250 > framesBUBBLE && framesBUBBLE > 2150){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    // if( framesBUBBLE == 3500){
                    //     this.dX =50;
                    // }
                    // if(4000 > framesBUBBLE && framesBUBBLE > 3750){
                    //     this.dX +=globalSpeedBUBBLE;
                    // }
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[1] == 9){
                    if(1400 > framesBUBBLE && framesBUBBLE > 1300){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(2850 > framesBUBBLE && framesBUBBLE > 2750){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(3700 > framesBUBBLE && framesBUBBLE > 3600){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    // if(framesBUBBLE == 4250){
                    //     this.dX =50;
                    // }
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX +=3.2*globalSpeedBUBBLE;

                    }

                }else if(tab_step4[0] == 9){
                    if(2000 > framesBUBBLE && framesBUBBLE > 1900){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //2ND STEP
                    if(3450 > framesBUBBLE && framesBUBBLE > 3350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //3RD STEP
                    if(4200 > framesBUBBLE && framesBUBBLE > 4100){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                    //4TH STEP
                    if(4450 > framesBUBBLE && framesBUBBLE > 4350){
                        this.dX -=3.2*globalSpeedBUBBLE;

                    }
                }
            }

        }
    }

    const lineBUBBLE = {
        sX : 115,
        sY : 47,
        sWidth : 5,
        sHeight : 60,
        dY : 150,
        dX : 450,
        dWidth : 10,
        dHeight :200  ,
        draw : function(){
            ctxBUBBLE.drawImage(numbersBUBBLE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
                if(2500 > framesBUBBLE && framesBUBBLE > 2050){
                    this.dX -=globalSpeedBUBBLE;

                }
                if(3850 > framesBUBBLE && framesBUBBLE > 3500){
                    this.dX -=globalSpeedBUBBLE;

                }
                if(4600 > framesBUBBLE && framesBUBBLE > 4250){
                    this.dX -=globalSpeedBUBBLE;

                }

                //THE END OF SIMULATION
                if( framesBUBBLE == 4998){
                    this.dX =450;
                    this.dY =150;

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

        ctxBUBBLE.strokeText("Bubble Sort! - click if you want to pause or start simulation",25,50);

        //draw function
        // bg.draw();
        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
        }else {
            if (framesBUBBLE > 100 && framesBUBBLE < 4700) {
                c2nBUBBLE.draw();
            }
        }

        //if user write the first number into form
        if(x1==1 || x2==1|| x3==1|| x4==1|| x5==1){
            nr1BUBBLE.draw();
        }
        if(x1==2 || x2==2|| x3==2|| x4==2|| x5==2){
            nr2BUBBLE.draw();
        }
        if(x1==3 || x2==3|| x3==3|| x4==3|| x5==3){
            nr3BUBBLE.draw();
        }
        if(x1==4 || x2==4|| x3==4|| x4==4|| x5==4){
            nr4BUBBLE.draw();
        }
        if(x1==5 || x2==5|| x3==5|| x4==5|| x5==5){
            nr5BUBBLE.draw();
        }
        if(x1==6 || x2==6|| x3==6|| x4==6|| x5==6){
            nr6BUBBLE.draw();
        }
        if(x1==7 || x2==7|| x3==7|| x4==7|| x5==7){
            nr7BUBBLE.draw();
        }
        if(x1==8 || x2==8|| x3==8|| x4==8|| x5==8){
            nr8BUBBLE.draw();
        }
        if(x1==9 || x2==9|| x3==9|| x4==9|| x5==9){
            nr9BUBBLE.draw();
        }
        if(stateBUBBLE.current == stateBUBBLE.over ||stateBUBBLE.current == stateBUBBLE.getReady){
        }else{
            if(framesBUBBLE > 100 && framesBUBBLE<4700){
                lineBUBBLE.draw();
            }
        }

        getReadyBUBBLE.draw();
        gameOverBUBBLE.draw();
    }
//UPDATE
    function update(){
        nr1BUBBLE.update();
        nr2BUBBLE.update();
        nr3BUBBLE.update();
        nr4BUBBLE.update();
        nr5BUBBLE.update();
        nr6BUBBLE.update();
        nr7BUBBLE.update();
        nr8BUBBLE.update();
        nr9BUBBLE.update();
        c2nBUBBLE.update();
        lineBUBBLE.update();
        if(framesBUBBLE == 5000){
            stateBUBBLE.current = stateBUBBLE.over;
        };


    }
//FUCTION WHICH CHOSE PROPERTY NUMBERS INTO ALGORITHM
    function logic_for_all(){
        nr1BUBBLE.logic();
        nr2BUBBLE.logic();
        nr3BUBBLE.logic();
        nr4BUBBLE.logic();
        nr5BUBBLE.logic();
        nr6BUBBLE.logic();
        nr7BUBBLE.logic();
        nr8BUBBLE.logic();
        nr9BUBBLE.logic();
    }
//LOOP
    function loop(){
        update();
        draw();
        framesBUBBLE++;
        framesBUBBLE++;
        requestAnimationFrame(loop);
    }
    logic_for_all();
    loop();

}

