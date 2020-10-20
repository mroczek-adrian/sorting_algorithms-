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
        [60,200, 50,50],
        [60,253, 50,50],
        [60,305, 50,50],
        [60,350, 50,50],
        [60,400, 50,50],
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

    text = "tab_step1-values      [0]=   "+tab_step4[0]+"[1]=   "+tab_step4[1]+"[2]=   "+tab_step4[2]+"[3]=   "+tab_step4[3]+"[4]=   "+tab_step4[4];
    document.getElementById("demo5").innerHTML = text;
















// GAME VARS AND CONSTS
    let frames = 0;
    let globalSpeed = 0.25;
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
    const pauseMERGE=document.getElementById("pause");
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

//CIRCLE
//RED CIRCLE
    const red_circle01 = {

        //circle
        sX : 310,
        sY : 90,
        sWidth : 490 - 310,
        sHeight : 270 - 90,
        dY : 300,
        dX : 17,
        dWidth : 50,
        dHeight :50 ,

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
                //BACK
                if(850 > frames && frames > 800){
                    this.dX +=3.5*globalSpeed;
                    this.dY -=6.5*globalSpeed;

                }
                if(1000 > frames && frames > 950){
                    this.dX +=4*globalSpeed;
                    //this.dY -=6.5*globalSpeed;

                }
                if(1450 > frames && frames > 1400){
                    this.dX +=25.7*globalSpeed;
                    //this.dY +=2*globalSpeed;

                }
                if(1750 > frames && frames > 1700){
                    this.dX -=26.3*globalSpeed;
                    this.dY -=6.5*globalSpeed;
                    //this.dY +=2*globalSpeed;

                }
                if(1900 > frames && frames > 1850){

                    //this.dY +=2*globalSpeed;
                    this.dX +=4*globalSpeed;
                }
                if(2050 > frames && frames > 2000){

                    //this.dY +=2*globalSpeed;
                    this.dX +=4*globalSpeed;
                }


                //FINISH
                if(2599==frames){
                    this.dY = 300;
                    this.dX = 17;


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
        dY : 300,
        dX : 127,
        dWidth : 50,
        dHeight :50 ,

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
                //BACK
                if(850 > frames && frames > 800){
                    this.dX +=8*globalSpeed;
                    this.dY -=6.5*globalSpeed;

                }

                if(1450 > frames && frames > 1400){
                    this.dX +=24*globalSpeed;
                    //this.dY +=2*globalSpeed;

                }
                if(1750 > frames && frames > 1700){
                    this.dX -=6*globalSpeed;
                    this.dY -=6.8*globalSpeed;
                }

                if(2350 > frames && frames > 2300){
                    this.dX +=4*globalSpeed;
                }
                //FINISH
                if(2599==frames){
                    this.dY = 300;
                    this.dX = 127;


                }

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
//2nd TABLE OF NUMBERS
    const table_2nd_a = {

        sX : 25,
        sY : 40,
        sWidth : 545 - 25,
        sHeight : 222 - 40,
        dY : 140,
        dX : 100,
        dWidth : 150,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
//2nd TABLE OF NUMBERS
    const table_2nd_b = {

        sX : 25,
        sY : 40,
        sWidth : 380 - 25,
        sHeight : 222 - 40,
        dY : 140,
        dX : 450,
        dWidth : 100,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
//3rd TABLE OF NUMBERS
    const table_3rd_a = {

        sX : 25,
        sY : 40,
        sWidth : 380 - 25,
        sHeight : 222 - 40,
        dY : 220,
        dX : 60,
        dWidth : 100,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
    const table_3rd_b = {

        sX : 25,
        sY : 40,
        sWidth : 213 - 25,
        sHeight : 222 - 40,
        dY : 220,
        dX : 220,
        dWidth : 50,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
    const table_3rd_c = {

        sX : 25,
        sY : 40,
        sWidth : 213 - 25,
        sHeight : 222 - 40,
        dY : 220,
        dX : 420,
        dWidth : 50,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
    const table_3rd_d = {

        sX : 25,
        sY : 40,
        sWidth : 213 - 25,
        sHeight : 222 - 40,
        dY : 220,
        dX : 520,
        dWidth : 50,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
//table level 4
    const table_4th_a = {

        sX : 25,
        sY : 40,
        sWidth : 213 - 25,
        sHeight : 222 - 40,
        dY : 300,
        dX : 20,
        dWidth : 50,
        dHeight :50  ,

        draw : function(){
            ctx.drawImage(table_and_numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
    const table_4th_b = {

        sX : 25,
        sY : 40,
        sWidth : 213 - 25,
        sHeight : 222 - 40,
        dY : 300,
        dX : 120,
        dWidth : 50,
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




            if(state.current == state.over ||state.current == state.getReady){

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
//index - level 2
    const index10a = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 190,
        bdX : 115,
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
    const index11a = {
        //blue number
        bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9,
        bdY : 190,
        bdX : 165,
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
    const index12a = {
        //blue number
        bsX : 140,
        bsY : 9,
        bsWidth : 236 - 140,
        bsHeight : 100 - 9,
        bdY : 190,
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
    const index10b = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 190,
        bdX : 465,
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
    const index11b = {
        //blue number
        bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9,
        bdY : 190,
        bdX : 515,
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
//index  - level 3
    const index20a = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 270,
        bdX : 75,
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
    const index21a = {
        //blue number
        bsX : 17,
        bsY : 9,
        bsWidth : 105 - 17,
        bsHeight : 100 - 9,
        bdY : 270,
        bdX : 125,
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
    const index20b = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 270,
        bdX : 235,
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
    const index20c = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 270,
        bdX : 435,
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
    const index20d = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 270,
        bdX : 535,
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
//index -level 4
    const index30a = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 350,
        bdX : 35,
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
    const index30b = {
        //blue number
        bsX : 145,
        bsY : 255,
        bsWidth : 236 - 145,
        bsHeight : 354 - 255,
        bdY : 350,
        bdX : 135,
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
        dY : 60,
        dX : 200,
        dWidth : 50,
        dHeight :50 ,

        //frame can change the image of the images
        frame : 0,


        draw : function(){
            //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
            //let nr1 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);

        },

        bubbleSort : function(){

        },

        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 1){
                nr1.dY = destination_number_table[0][0];
                nr1.dX = destination_number_table[0][1];
                nr1.dWidth = destination_number_table[0][2];
                nr1.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 1){
                nr1.dY = destination_number_table[2][0];
                nr1.dX = destination_number_table[2][1];
                nr1.dWidth = destination_number_table[2][2];
                nr1.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 1){
                nr1.dY = destination_number_table[1][0];
                nr1.dX = destination_number_table[1][1];
                nr1.dWidth = destination_number_table[1][2];
                nr1.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 1){
                nr1.dY = destination_number_table[3][0];
                nr1.dX = destination_number_table[3][1];
                nr1.dWidth = destination_number_table[3][2];
                nr1.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 1){
                nr1.dY = destination_number_table[4][0];
                nr1.dX = destination_number_table[4][1];
                nr1.dWidth = destination_number_table[4][2];
                nr1.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 1){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 1){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 1){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 1){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 1){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        dX : 305,
        dWidth : 50,
        dHeight :50 ,


        //frame can change the image of the images
        frame : 0,

        //temporary variable
        gravity : 0.25,
        jump : 4.6,
        speed : 0.25,

        draw : function(){
            //let nr2 = this.animation[this.frame];
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);



        },
        bubbleSort : function(){

        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 2){
                nr2.dY = destination_number_table[0][0];
                nr2.dX = destination_number_table[0][1];
                nr2.dWidth = destination_number_table[0][2];
                nr2.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 2){
                nr2.dY = destination_number_table[2][0];
                nr2.dX = destination_number_table[2][1];
                nr2.dWidth = destination_number_table[2][2];
                nr2.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 2){
                nr2.dY = destination_number_table[1][0];
                nr2.dX = destination_number_table[1][1];
                nr2.dWidth = destination_number_table[1][2];
                nr2.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 2){
                nr2.dY = destination_number_table[3][0];
                nr2.dX = destination_number_table[3][1];
                nr2.dWidth = destination_number_table[3][2];
                nr2.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 2){
                nr2.dY = destination_number_table[4][0];
                nr2.dX = destination_number_table[4][1];
                nr2.dWidth = destination_number_table[4][2];
                nr2.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 2){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 2){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 2){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 2){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 2){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        dX : 253,
        dWidth : 50,
        dHeight :50 ,



        //frame can change the image of the images
        frame : 0,


        draw : function(){
            //let nr3 = this.animation[this.frame];
            ctx.drawImage(numbers,nr3.sX,nr3.sY,this.sWidth,this.sHeight,nr3.dX,nr3.dY,
                this.dWidth,this.dHeight);
        },
        bubbleSort : function(){

        },


        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 3){
                nr3.dY = destination_number_table[0][0];
                nr3.dX = destination_number_table[0][1];
                nr3.dWidth = destination_number_table[0][2];
                nr3.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 3){
                nr3.dY = destination_number_table[2][0];
                nr3.dX = destination_number_table[2][1];
                nr3.dWidth = destination_number_table[2][2];
                nr3.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 3){
                nr3.dY = destination_number_table[1][0];
                nr3.dX = destination_number_table[1][1];
                nr3.dWidth = destination_number_table[1][2];
                nr3.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 3){
                nr3.dY = destination_number_table[3][0];
                nr3.dX = destination_number_table[3][1];
                nr3.dWidth = destination_number_table[3][2];
                nr3.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 3){
                nr3.dY = destination_number_table[4][0];
                nr3.dX = destination_number_table[4][1];
                nr3.dWidth = destination_number_table[4][2];
                nr3.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 3){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 3){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 3){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 3){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 3){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 4){
                nr4.dY = destination_number_table[0][0];
                nr4.dX = destination_number_table[0][1];
                nr4.dWidth = destination_number_table[0][2];
                nr4.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 4){
                nr4.dY = destination_number_table[2][0];
                nr4.dX = destination_number_table[2][1];
                nr4.dWidth = destination_number_table[2][2];
                nr4.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 4){
                nr4.dY = destination_number_table[1][0];
                nr4.dX = destination_number_table[1][1];
                nr4.dWidth = destination_number_table[1][2];
                nr4.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 4){
                nr4.dY = destination_number_table[3][0];
                nr4.dX = destination_number_table[3][1];
                nr4.dWidth = destination_number_table[3][2];
                nr4.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 4){
                nr4.dY = destination_number_table[4][0];
                nr4.dX = destination_number_table[4][1];
                nr4.dWidth = destination_number_table[4][2];
                nr4.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 4){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 4){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 4){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 4){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 4){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 5){
                nr5.dY = destination_number_table[0][0];
                nr5.dX = destination_number_table[0][1];
                nr5.dWidth = destination_number_table[0][2];
                nr5.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 5){
                nr5.dY = destination_number_table[2][0];
                nr5.dX = destination_number_table[2][1];
                nr5.dWidth = destination_number_table[2][2];
                nr5.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 5){
                nr5.dY = destination_number_table[1][0];
                nr5.dX = destination_number_table[1][1];
                nr5.dWidth = destination_number_table[1][2];
                nr5.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 5){
                nr5.dY = destination_number_table[3][0];
                nr5.dX = destination_number_table[3][1];
                nr5.dWidth = destination_number_table[3][2];
                nr5.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 5){
                nr5.dY = destination_number_table[4][0];
                nr5.dX = destination_number_table[4][1];
                nr5.dWidth = destination_number_table[4][2];
                nr5.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 5){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 5){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 5){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 5){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 5){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 6){
                nr6.dY = destination_number_table[0][0];
                nr6.dX = destination_number_table[0][1];
                nr6.dWidth = destination_number_table[0][2];
                nr6.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 6){
                nr6.dY = destination_number_table[2][0];
                nr6.dX = destination_number_table[2][1];
                nr6.dWidth = destination_number_table[2][2];
                nr6.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 6){
                nr6.dY = destination_number_table[1][0];
                nr6.dX = destination_number_table[1][1];
                nr6.dWidth = destination_number_table[1][2];
                nr6.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 6){
                nr6.dY = destination_number_table[3][0];
                nr6.dX = destination_number_table[3][1];
                nr6.dWidth = destination_number_table[3][2];
                nr6.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 6){
                nr6.dY = destination_number_table[4][0];
                nr6.dX = destination_number_table[4][1];
                nr6.dWidth = destination_number_table[4][2];
                nr6.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 6){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 6){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 6){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 6){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 6){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 7){
                nr7.dY = destination_number_table[0][0];
                nr7.dX = destination_number_table[0][1];
                nr7.dWidth = destination_number_table[0][2];
                nr7.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 7){
                nr7.dY = destination_number_table[2][0];
                nr7.dX = destination_number_table[2][1];
                nr7.dWidth = destination_number_table[2][2];
                nr7.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 7){
                nr7.dY = destination_number_table[1][0];
                nr7.dX = destination_number_table[1][1];
                nr7.dWidth = destination_number_table[1][2];
                nr7.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 7){
                nr7.dY = destination_number_table[3][0];
                nr7.dX = destination_number_table[3][1];
                nr7.dWidth = destination_number_table[3][2];
                nr7.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 7){
                nr7.dY = destination_number_table[4][0];
                nr7.dX = destination_number_table[4][1];
                nr7.dWidth = destination_number_table[4][2];
                nr7.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 7){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 7){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 7){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 7){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 7){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 8){
                nr8.dY = destination_number_table[0][0];
                nr8.dX = destination_number_table[0][1];
                nr8.dWidth = destination_number_table[0][2];
                nr8.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 8){
                nr8.dY = destination_number_table[2][0];
                nr8.dX = destination_number_table[2][1];
                nr8.dWidth = destination_number_table[2][2];
                nr8.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 8){
                nr8.dY = destination_number_table[1][0];
                nr8.dX = destination_number_table[1][1];
                nr8.dWidth = destination_number_table[1][2];
                nr8.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 8){
                nr8.dY = destination_number_table[3][0];
                nr8.dX = destination_number_table[3][1];
                nr8.dWidth = destination_number_table[3][2];
                nr8.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 8){
                nr8.dY = destination_number_table[4][0];
                nr8.dX = destination_number_table[4][1];
                nr8.dWidth = destination_number_table[4][2];
                nr8.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 8){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 8){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 8){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 8){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 8){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
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
        dX : 400,
        dWidth : 50,
        dHeight :50 ,
        draw : function(){
            ctx.drawImage(numbers,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        },
        logic : function(){
            //decreasing basic position
            if(tab_step4[0] == 9){
                nr9.dY = destination_number_table[0][0];
                nr9.dX = destination_number_table[0][1];
                nr9.dWidth = destination_number_table[0][2];
                nr9.dHeight = destination_number_table[0][3];
            }else if(tab_step4[1] == 9){
                nr9.dY = destination_number_table[2][0];
                nr9.dX = destination_number_table[2][1];
                nr9.dWidth = destination_number_table[2][2];
                nr9.dHeight = destination_number_table[2][3];
            }else if(tab_step4[2] == 9){
                nr9.dY = destination_number_table[1][0];
                nr9.dX = destination_number_table[1][1];
                nr9.dWidth = destination_number_table[1][2];
                nr9.dHeight = destination_number_table[1][3];
            }else if(tab_step4[3] == 9){
                nr9.dY = destination_number_table[3][0];
                nr9.dX = destination_number_table[3][1];
                nr9.dWidth = destination_number_table[3][2];
                nr9.dHeight = destination_number_table[3][3];
            }else if(tab_step4[4] == 9){
                nr9.dY = destination_number_table[4][0];
                nr9.dX = destination_number_table[4][1];
                nr9.dWidth = destination_number_table[4][2];
                nr9.dHeight = destination_number_table[4][3];
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
                if(tab_step4[4] == 9){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1750 > frames && frames > 1700){
                        this.dX -=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2500 > frames && frames > 2450){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[3] == 9){
                    if(250 > frames && frames > 200){
                        this.dX +=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1450 > frames && frames > 1400){
                        this.dX -=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(1600 > frames && frames > 1550){
                        this.dX +=2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2350 > frames && frames > 2300){
                        this.dX -=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[2] == 9){
                    if(250 > frames && frames > 200){
                        this.dX -=8.2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX +=1.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(850 > frames && frames > 800){
                        this.dX -=1.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1300 > frames && frames > 1250){
                        this.dX +=7.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2200 > frames && frames > 2150){
                        this.dX +=8.2*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[1] == 9){
                    if(250 > frames && frames > 200){
                        this.dX -=8.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX +=2*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(1150 > frames && frames > 1100){
                        this.dX -=6*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(2050 > frames && frames > 2000){
                        this.dX +=8.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    } //FINISH
                    if(2599==frames){
                        this.logic();


                    }
                }else if(tab_step4[0] == 9){
                    if(250 > frames && frames > 200){
                        this.dX -=8*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(400 > frames && frames > 350){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    if(550 > frames && frames > 500){
                        this.dX -=3.5*globalSpeed;
                        this.dY +=6.5*globalSpeed;

                    }
                    //BACK
                    if(700 > frames && frames > 650){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1000 > frames && frames > 950){
                        this.dX +=3.5*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    if(1900 > frames && frames > 1850){
                        this.dX +=8*globalSpeed;
                        this.dY -=6.5*globalSpeed;

                    }
                    //FINISH
                    if(2599==frames){
                        this.logic();


                    }
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
                ctx.drawImage(pauseMERGE,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
        table_top.draw();
        index00.draw();index01.draw();index02.draw();index03.draw();index04.draw();




        //DRAWING ACTION FOR 'PIWOT' NUMBER
        // if(state.current == state.over ||state.current == state.getReady){
        //
        // }else{
        if( frames > 100 && frames <=20000){
            table_2nd_a.draw();
            index10a.draw();index11a.draw();index12a.draw();
            table_2nd_b.draw();
            index10b.draw();index11b.draw();

        }
        if( frames > 300 && frames <=20000){
            table_3rd_a.draw();
            index20a.draw();    index21a.draw();
            table_3rd_b.draw();
            index20b.draw();


        }
        if( frames > 450 && frames <=20000){
            table_4th_a.draw();
            index30a.draw();
            table_4th_b.draw();
            index30b.draw();

        }

        if( frames > 1350 && frames <=20000){
            table_3rd_c.draw();
            index20c.draw();
            table_3rd_d.draw();
            index20d.draw();

        }


        //title of canvas
        ctx.font = "30px Arial";
        ctx.strokeText("Merging Sort!",225,50);

        //draw function
        // bg.draw();
        //c2n.draw();
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

        if( frames > 550 && frames <=650){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 700 && frames <=800){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 850 && frames <=950){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1000 && frames <=1100){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1150 && frames <=1250){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1450 && frames <=1550){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1600 && frames <=1700){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1750 && frames <=1850){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 1900 && frames <=2000){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 2050 && frames <=2150){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 2200 && frames <=2300){
            red_circle01.draw();
            red_circle02.draw();

        }
        if( frames > 2350 && frames <=2450){
            red_circle01.draw();
            red_circle02.draw();

        }

        //line.draw();
        getReady.draw();
        gameOver.draw();
    }
//UPDATE
    function update(){
        nr1.update();
        nr2.update();
        nr3.update();
        nr4.update();
        nr5.update();
        nr6.update();
        nr7.update();
        nr8.update();
        nr9.update();
        red_circle01.update();
        red_circle02.update();
        //c2n.update();
        //line.update();
        if(frames == 2600){
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
        }else {
            frames++;
        }
        requestAnimationFrame(loop);
    }
    logic_for_all();
    loop();
}
