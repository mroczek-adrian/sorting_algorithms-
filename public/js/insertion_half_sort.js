







function myFunction() {

    //VALIDATION
    var validation1 = document.forms["myForm"]["fname"].value;

    if (validation1 == "") {
        alert("Name must be filled out");
        return false;
    }

    x1 = document.getElementById("numb").value;

    // if(x1 > 9 || x1 < 1 || x2 < 1 || x2 > 9  || x3 < 1 || x3 > 9  || x4 < 1 || x4 > 9  || x5 < 1 || x5 > 9   ){
    //     alert("To big or to small number - write a property number from [1-9]");
    //     return false;
    // }
    // if(x1 == x2 || x1 == x3  || x1 == x4 || x1 == x5 || x2 == x3 || x2 == x4 || x2 == x5 || x3 == x4 ||  x3 == x5 || x4 == x5   ){
    //     alert("There is a repetition - write numbers without repetition");
    //     return false;
    // }
    // if(x1 == 1 ||x1 == 2 || x1 == 3 ||x1 == 4 ||x1 == 5 ||x1 == 6 ||x1 == 7 ||x1 == 8 ||x1 == 9  ){
    // }else{
    //     alert(" Write the numbers");
    //     return false;
    // }
    // if(x2 == 1 ||x2 == 2 || x2 == 3 ||x2 == 4 ||x2 == 5 ||x2 == 6 ||x2 == 7 ||x2 == 8 ||x2 == 9  ){
    // }else{
    //     alert(" Write the numbers");
    //     return false;
    // }
    // if(x3 == 1 ||x3 == 2 || x3 == 3 ||x3 == 4 ||x3 == 5 ||x3 == 6 ||x3 == 7 ||x3 == 8 ||x3 == 9  ){
    // }else{
    //     alert(" Write the numbers");
    //     return false;
    // }
    // if(x4 == 1 ||x4 == 2 || x4 == 3 ||x4 == 4 ||x4 == 5 ||x4 == 6 ||x4 == 7 ||x4 == 8 ||x4 == 9  ){
    // }else{
    //     alert(" Write the numbers");
    //     return false;
    // }
    // if(x5 == 1 ||x5 == 2 || x5 == 3 ||x5 == 4 ||x5 == 5 ||x5 == 6 ||x5 == 7 ||x5 == 8 ||x5 == 9  ){
    // }else{
    //     alert(" Write the numbers");
    //     return false;
    // }










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
    //const cvsBUBBLE = document.getElementById("birdBUBBLE");
    // cvsBUBBLE.style.display = "block";
    // if (cvsBUBBLE.style.display === "none") {
    //     cvsBUBBLE.style.display = "block";
    // } else {
    //     cvsBUBBLE.style.display = "none";
    // }
    //const ctxBUBBLE = cvsBUBBLE.getContext("2d");

    // If x is Not a Number or less than one or greater than 10





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


        //fill the table
        for(var i = 0;i<5;i++){
            tab_step4[i]=A[i];
        }

    }













    function insertionHALFSort(inputArr) {
        let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
        return inputArr;
    }





    // var array = new Array(10)
    //tablica liczb
    for (var array=[],i=0;i<x1;++i) array[i]=i;

// http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    array = shuffle(array);
    text = "array [0]=   "+array[0];
    document.getElementById("demo4").innerHTML = text;

    var start = new Date().getTime();
    //bubble_sort(numbers_to_sort,5);
    //const numbers_to_sort1=[312,2,3,1,2,3,21312,123,12,312,312,31,23,12,31,23,12,31,23,12,31,23,123,12,3,123,123,1,2312,31,231,23,123,123,123];
    //bubble_sort(array,array.length);
    insertionHALFSort(array);
    var elapsed = new Date().getTime() - start;
    text = "Time of the algorithm: "+elapsed+ " ms";
    document.getElementById("demo5").innerHTML = text;






}









// INSERTIONHALF CVS
const cvsINSERTIONHALF = document.getElementById("birdINSERTIONHALF");
const restartINSERTIONHALF = document.getElementById("img4");
const startINSERTIONHALF = document.getElementById("img5");

const ctxINSERTIONHALF = cvsINSERTIONHALF.getContext("2d");
// GAME VARS AND CONSTS
let framesINSERTIONHALF = 0;
let globalSpeedINSERTIONHALF = 0.5 ;
let framesRememberINSERTIONHALF=0;

//IMAGE OF THE BIRD
const spriteINSERTIONHALF=document.getElementById("image");
//IMAGE OF NUMBERS
const numbersINSERTIONHALF=document.getElementById("numbers");
//IMAGE OF THE BLUE NUMBERS
const blue_numbersINSERTIONHALF=document.getElementById("blue_numbers");
//IMAGE OF THE COMPARISON 2 NUMBER
const compare2numbersINSERTIONHALF=document.getElementById("compare2numbers");
//IMAGE OF THE GET READY STATE
const click2startINSERTIONHALF=document.getElementById("click2start");
//IMAGE OF THE GET OVER STATE
const pauseINSERTIONHALF=document.getElementById("pause");
//IMAGE OF THE TABLE WITH RED CIRCLE
const red_circle=document.getElementById("red_circle");
//IMAGE OF THE TABLE WITH BROWN CIRCLE
const brown_circle=document.getElementById("brown_circle");

const img1=document.getElementById("img1");//rectangle
const img2=document.getElementById("img2");//steps
const img3=document.getElementById("img3");//sorted,unsorted
const img4=document.getElementById("img4");//RESTART
const img5=document.getElementById("img5");//START

const stateINSERTIONHALF = {
    current : 2 ,
    getReady : 0,
    game : 1,
    over : 2
}


//CONTROL THE GAME
cvsINSERTIONHALF.addEventListener("click",function(evt){
    switch(stateINSERTIONHALF.current){
        case stateINSERTIONHALF.getReady:
            stateINSERTIONHALF.current = stateINSERTIONHALF.game;
            framesINSERTIONHALF = framesRememberINSERTIONHALF;
            framesRememberINSERTIONHALF=framesINSERTIONHALF;
            break;
        case stateINSERTIONHALF.game:
            stateINSERTIONHALF.current = stateINSERTIONHALF.getReady;
            framesRememberINSERTIONHALF=framesINSERTIONHALF;
            //HERE I WILL WRITE THE ALGORITHM
            //  bird.flap();
            nr1INSERTIONHALF.INSERTIONHALFSort();
            break;
        case stateINSERTIONHALF.over:
            stateINSERTIONHALF.current = stateINSERTIONHALF.game;
            framesINSERTIONHALF = 0;
            break;
    }
});
restartINSERTIONHALF.addEventListener("click",function(evt){
    switch(stateINSERTIONHALF.current){
        case stateINSERTIONHALF.getReady:
        case stateINSERTIONHALF.game:
            stateINSERTIONHALF.current = 2;

            bgRectangle.dX =185;
            bgRectangle.dY =10;
            bgRectangle.dHeight =30;
            red_circle01.dX =10;
            red_circle01.dY =190;
            brown_circle01.dX =85;
            brown_circle01.dY =265;
            nr1INSERTIONHALF.dX =260;
            nr1INSERTIONHALF.dY =200;
            nr2INSERTIONHALF.dX =338;
            nr2INSERTIONHALF.dY =200;
            nr3INSERTIONHALF.dX =180;
            nr3INSERTIONHALF.dY =200;
            nr4INSERTIONHALF.dX =20;
            nr4INSERTIONHALF.dY =200;
            nr9INSERTIONHALF.dX =100;
            nr9INSERTIONHALF.dY =200;
            lineINSERTIONHALF.dX =6;





            framesINSERTIONHALF = 0;


            break;
    }
});


//BACKGROUD
//COMPARE 2 NUMBERS
const bgRectangle = {

    sX : 33,
    sY : 33,
    sWidth : 670-33,
    sHeight : 270-33,
    dY : 10,
    dX : 185,
    dWidth : 420,
    dHeight :30  ,

    draw : function(){
        ctxINSERTIONHALF.drawImage(img1,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){

        }else{
            // go to 2nd
            if(200 > framesINSERTIONHALF && framesINSERTIONHALF > 150){
                this.dHeight +=2*globalSpeedINSERTIONHALF;
                this.dY += globalSpeedINSERTIONHALF;
            }
            // go to 3rd
            if(300 > framesINSERTIONHALF && framesINSERTIONHALF > 250){
                this.dHeight -=0.5*globalSpeedINSERTIONHALF;
                this.dY +=2.8* globalSpeedINSERTIONHALF;
            }  // go to 1rd
            if(550 > framesINSERTIONHALF && framesINSERTIONHALF > 500){
                this.dY -=3.8* globalSpeedINSERTIONHALF;
                this.dHeight -=1.5*globalSpeedINSERTIONHALF;
            }
            if(700 > framesINSERTIONHALF && framesINSERTIONHALF > 650){
                  this.dHeight +=2*globalSpeedINSERTIONHALF;
                this.dY += globalSpeedINSERTIONHALF;

            }
            if(800 > framesINSERTIONHALF && framesINSERTIONHALF > 750){
                 this.dHeight -=0.5*globalSpeedINSERTIONHALF;
                this.dY +=2.8* globalSpeedINSERTIONHALF;
            }
            if(1600 > framesINSERTIONHALF && framesINSERTIONHALF > 1550){
                this.dY -=3.8* globalSpeedINSERTIONHALF;
                this.dHeight -=1.5*globalSpeedINSERTIONHALF;

            }
            if(1750 > framesINSERTIONHALF && framesINSERTIONHALF > 1700){
                  this.dHeight +=2*globalSpeedINSERTIONHALF;
                this.dY += globalSpeedINSERTIONHALF;

            }
            if(2000 > framesINSERTIONHALF && framesINSERTIONHALF > 1950){
                 this.dHeight -=0.5*globalSpeedINSERTIONHALF;
                this.dY +=2.8* globalSpeedINSERTIONHALF;
            }
            if(2800 > framesINSERTIONHALF && framesINSERTIONHALF > 2750){
                this.dY -=3.8* globalSpeedINSERTIONHALF;
                this.dHeight -=1.5*globalSpeedINSERTIONHALF;
            }
            if(2900 > framesINSERTIONHALF && framesINSERTIONHALF > 2850){
                  this.dHeight +=2*globalSpeedINSERTIONHALF;
                this.dY += globalSpeedINSERTIONHALF;
            }
            if(3200 > framesINSERTIONHALF && framesINSERTIONHALF > 3150){
                 this.dHeight -=0.5*globalSpeedINSERTIONHALF;
                this.dY +=2.8* globalSpeedINSERTIONHALF;
            }
            // if(1200 > framesINSERTIONHALF && framesINSERTIONHALF > 850){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // if(1800 > framesINSERTIONHALF && framesINSERTIONHALF > 1450){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesINSERTIONHALF == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2300){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // if(3250 > framesINSERTIONHALF && framesINSERTIONHALF > 2900){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesINSERTIONHALF == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesINSERTIONHALF && framesINSERTIONHALF > 3750){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesINSERTIONHALF == 4250){
            //     this.dX =50;
            // }
            // //finish
            if(framesINSERTIONHALF==3998){
                this.dX =185;
                this.dY =10;
                this.dHeight =30;

            }
        }


    }
}
const bgSteps = {

    sX : 100,
    sY : 100,
    sWidth :724 -100,
    sHeight : 338-100,
    dY : 10,
    dX : 200,
    dWidth : 400,
    dHeight :150  ,
    draw : function(){

        ctxINSERTIONHALF.drawImage(img2,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            // if(600 > framesINSERTIONHALF && framesINSERTIONHALF > 250){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // if(1200 > framesINSERTIONHALF && framesINSERTIONHALF > 850){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // if(1800 > framesINSERTIONHALF && framesINSERTIONHALF > 1450){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-2nd run
            // if( framesINSERTIONHALF == 2050){
            //     this.dX =50;
            // }
            // if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2300){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // if(3250 > framesINSERTIONHALF && framesINSERTIONHALF > 2900){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-3rd run
            // if( framesINSERTIONHALF == 3500){
            //     this.dX =50;
            // }
            // if(4000 > framesINSERTIONHALF && framesINSERTIONHALF > 3750){
            //     this.dX +=globalSpeedINSERTIONHALF;
            // }
            // //COMPARISON VALUE OF NUMBERS-4th run
            // if(framesINSERTIONHALF == 4250){
            //     this.dX =50;
            // }
            // //finish
            // if(framesINSERTIONHALF==3998){
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
        ctxINSERTIONHALF.drawImage(red_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
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
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // if(450 > framesINSERTIONHALF && framesINSERTIONHALF > 350){
            //     this.dX +=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(850 > framesINSERTIONHALF && framesINSERTIONHALF > 750){
            //     this.dX -=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            if(1450 > framesINSERTIONHALF && framesINSERTIONHALF > 1350){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(1850 > framesINSERTIONHALF && framesINSERTIONHALF > 1750){
                this.dX -=1.6* globalSpeedINSERTIONHALF;

            }
            if(2750 > framesINSERTIONHALF && framesINSERTIONHALF > 2650){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            // if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2550){
            //     this.dX +=4.8* globalSpeedINSERTIONHALF;
            //     // this.dX -=4.8* globalSpeedINSERTIONHALF;
            // }
            if(3050 > framesINSERTIONHALF && framesINSERTIONHALF > 2950){
                this.dX -=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            if(3250 > framesINSERTIONHALF && framesINSERTIONHALF > 3150){
                this.dX -=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            if(3450 > framesINSERTIONHALF && framesINSERTIONHALF > 3350){
                this.dX -=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }



            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =10;
                this.dY =190;

            }
        }

    }
}
//RIGHT CIRCLE
const brown_circle01 = {

    //circle
    sX : 310,
    sY : 90,
    sWidth : 490 - 310,
    sHeight : 270 - 90,
    dY : 265,
    dX : 85,
    dWidth : 100,
    dHeight :100 ,

    //frame can change the image of the images
    frame : 0,

    smaller : [{ dWidth : 40,
        dHeight :40 }],

    draw : function(){
        //2/3 CODE WHICH IS IMPORTANT FOR ANIMATION
        //let nr1 = this.animation[this.frame];
        ctxINSERTIONHALF.drawImage(brown_circle,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    bubbleSort : function(){

    },
    startPosition : function(){
        brown_circle01.dX =85;
        brown_circle01.dY =265;
    },

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            if(450 > framesINSERTIONHALF && framesINSERTIONHALF > 350){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(1450 > framesINSERTIONHALF && framesINSERTIONHALF > 1350){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2550){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
                // this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            // if(550 > framesINSERTIONHALF && framesINSERTIONHALF > 450){
            //     this.dX +=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(750 > framesINSERTIONHALF && framesINSERTIONHALF > 650){
            //     this.dX +=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(1150 > framesINSERTIONHALF && framesINSERTIONHALF > 1050){
            //     this.dX +=3.2* globalSpeedINSERTIONHALF;
            //
            // }
            // if(1450 > framesINSERTIONHALF && framesINSERTIONHALF > 1350){
            //     this.dX -=4.8 * globalSpeedINSERTIONHALF;
            //
            // }
            // //2nd
            // if(1750 > framesINSERTIONHALF && framesINSERTIONHALF > 1650){
            //     this.dX +=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(2550 > framesINSERTIONHALF && framesINSERTIONHALF > 2450){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(3150 > framesINSERTIONHALF && framesINSERTIONHALF > 3050){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =85;
                this.dY =265;

            }
        }

    }
}

//COMPARE 2 NUMBERS
const c2nINSERTIONHALF = {

    sX : 328,
    sY : 200,
    sWidth : 510-328,
    sHeight : 300-200,
    dY : 280,
    dX : 50,
    dWidth : 100,
    dHeight :50  ,
    draw : function(){

        ctxINSERTIONHALF.drawImage(compare2numbersINSERTIONHALF,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },


    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){

        }else{
            // this.speed += this.gravity;
            //COMPARISON VALUE OF NUMBERS-1st run
            if(600 > framesINSERTIONHALF && framesINSERTIONHALF > 250){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            if(1200 > framesINSERTIONHALF && framesINSERTIONHALF > 850){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            if(1800 > framesINSERTIONHALF && framesINSERTIONHALF > 1450){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            //COMPARISON VALUE OF NUMBERS-2nd run
            if( framesINSERTIONHALF == 2050){
                this.dX =50;
            }
            if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2300){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            if(3250 > framesINSERTIONHALF && framesINSERTIONHALF > 2900){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            //COMPARISON VALUE OF NUMBERS-3rd run
            if( framesINSERTIONHALF == 3500){
                this.dX =50;
            }
            if(4000 > framesINSERTIONHALF && framesINSERTIONHALF > 3750){
                this.dX +=globalSpeedINSERTIONHALF;
            }
            //COMPARISON VALUE OF NUMBERS-4th run
            if(framesINSERTIONHALF == 4250){
                this.dX =50;
            }
            //finish
            if(framesINSERTIONHALF==3998){
                this.dX =50;
            }
        }


    }
}
//NUMBERS
const nr1INSERTIONHALF = {
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
        ctxINSERTIONHALF.drawImage(numbersINSERTIONHALF,nr1INSERTIONHALF.sX,nr1INSERTIONHALF.sY,this.sWidth,this.sHeight,nr1INSERTIONHALF.dX,nr1INSERTIONHALF.dY,
            this.dWidth,this.dHeight);
    },

    INSERTIONHALFSort : function(){

    },
    startPosition : function(){
        nr1INSERTIONHALF.dX =260;
    },

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(1650 > framesINSERTIONHALF && framesINSERTIONHALF > 1550){
                this.dY +=1.6* globalSpeedINSERTIONHALF;

            }
            if(2450 > framesINSERTIONHALF && framesINSERTIONHALF > 2350){
                this.dY -=1.6* globalSpeedINSERTIONHALF;
                this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =260;
                this.dY =this.dY;

            }
        }

    }
}
const nr2INSERTIONHALF = {
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

    dX : 338,
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

        ctxINSERTIONHALF.drawImage(numbersINSERTIONHALF,nr2INSERTIONHALF.sX,nr2INSERTIONHALF.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);

        // ctx.drawImage(blue_numbers,this.bsX,this.bsY,this.bsWidth,this.bsHeight,this.bdX,this.bdY,
        //     this.bdWidth,this.bdHeight);



    },
    INSERTIONHALFSort : function(){

    },
    startPosition : function(){
        nr2INSERTIONHALF.dX =338;

    },

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // this.speed += this.gravity;

            if(2850 > framesINSERTIONHALF && framesINSERTIONHALF > 2750){
                this.dY +=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            if(3650 > framesINSERTIONHALF && framesINSERTIONHALF > 3550){
                this.dY -=1.6* globalSpeedINSERTIONHALF;
                this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =338;
                this.dY =this.dY;

            }
        }

    }
}
const nr3INSERTIONHALF = {
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
    dX : 180,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,



    //frame can change the image of the images
    frame : 0,


    draw : function(){
        //let nr3 = this.animation[this.frame];
        ctxINSERTIONHALF.drawImage(numbersINSERTIONHALF,nr3INSERTIONHALF.sX,nr3INSERTIONHALF.sY,this.sWidth,this.sHeight,nr3INSERTIONHALF.dX,nr3INSERTIONHALF.dY,
            this.dWidth,this.dHeight);
    },
    INSERTIONHALFSort : function(){

    },
    startPosition : function(){
        nr3INSERTIONHALF.dX =180;


    },




    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(650 > framesINSERTIONHALF && framesINSERTIONHALF > 550){
                this.dY +=1.6* globalSpeedINSERTIONHALF;

            }
            if(1250 > framesINSERTIONHALF && framesINSERTIONHALF > 1150){
                this.dX -=3.2* globalSpeedINSERTIONHALF;
                this.dY -=1.6* globalSpeedINSERTIONHALF;
            }
            if(2250 > framesINSERTIONHALF && framesINSERTIONHALF > 2150){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(3450 > framesINSERTIONHALF && framesINSERTIONHALF > 3350){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =180;
                this.dY =this.dY;

            }
        }

    }
}
const nr4INSERTIONHALF = {
    sX : 24,
    sY : 215,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dX : 20,
    dY : 200,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxINSERTIONHALF.drawImage(numbersINSERTIONHALF,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    startPosition : function(){
        nr4INSERTIONHALF.dX =20;
       // this.dY =this.dY;

    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // this.speed += this.gravity;
            //2nd
            if(950 > framesINSERTIONHALF && framesINSERTIONHALF > 850){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(2150 > framesINSERTIONHALF && framesINSERTIONHALF > 2050){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(3350 > framesINSERTIONHALF && framesINSERTIONHALF > 3250){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =20;
                this.dY =this.dY;

            }
        }

    }
}
const nr9INSERTIONHALF = {
    sX : 430,
    sY : 400,
    sWidth : 168 - 24,
    sHeight : 168 - 24,
    dX : 100,
    dY : 200,

    dWidth : 100 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        ctxINSERTIONHALF.drawImage(numbersINSERTIONHALF,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    startPosition : function(){
        nr9INSERTIONHALF.dX =100;

    },
    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;




        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(150 > framesINSERTIONHALF && framesINSERTIONHALF > 50){
                this.dY +=1.6* globalSpeedINSERTIONHALF;

            }
            if(350 > framesINSERTIONHALF && framesINSERTIONHALF > 250){
                this.dY -=1.6* globalSpeedINSERTIONHALF;

            }

            if(850 > framesINSERTIONHALF && framesINSERTIONHALF > 750){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(2050 > framesINSERTIONHALF && framesINSERTIONHALF > 1950){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(3250 > framesINSERTIONHALF && framesINSERTIONHALF > 3150){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
                //this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =100;
                this.dY =this.dY;
            }
        }

    }
}

const lineINSERTIONHALF = {
    sX : 100,
    sY : 10,
    sWidth : 350-100,
    sHeight : 180-10,
    dY : 150,
    dX : 6,
    dWidth : 200,
    dHeight :200  ,
    draw : function(){
        ctxINSERTIONHALF.drawImage(img3,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
            this.dWidth,this.dHeight);
    },
    startPosition : function(){
        lineINSERTIONHALF.dX =6;

    },

    //frame can change the image of the images
    frame : 0,

    update: function(){
        //IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        //this.period = state.current == state.getReady ? 10 : 5;

        //SPEED DEPENDS ON THE NUMBER OF PERIOD
        this.period = stateINSERTIONHALF.current == stateINSERTIONHALF.getReady ? 0 : 55;
        //WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += framesINSERTIONHALF % this.period == 0 ? 1 : 0;
        //FRAME GOES FROM 0 TO 4, THEN AGAIN TO 0
        //this.frame = this.frame % this.animation.length;


        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){

        }else{
            // this.speed += this.gravity;
            //50ms DELAY BEFORE MOVING THE NUMBER
            if(450 > framesINSERTIONHALF && framesINSERTIONHALF > 350){
                    this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(1450 > framesINSERTIONHALF && framesINSERTIONHALF > 1350){
                this.dX +=1.6* globalSpeedINSERTIONHALF;

            }
            if(2650 > framesINSERTIONHALF && framesINSERTIONHALF > 2550){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
               // this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            if(3850 > framesINSERTIONHALF && framesINSERTIONHALF > 3750){
                this.dX +=1.6* globalSpeedINSERTIONHALF;
             //   this.dX -=4.8* globalSpeedINSERTIONHALF;
            }
            // if(1450 > framesINSERTIONHALF && framesINSERTIONHALF > 1350){
            //     this.dX +=1.6 * globalSpeedINSERTIONHALF;
            //
            // }
            // if(2250 > framesINSERTIONHALF && framesINSERTIONHALF > 2150){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(2850 > framesINSERTIONHALF && framesINSERTIONHALF > 2750){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(3150 > framesINSERTIONHALF && framesINSERTIONHALF > 3050){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            // if(3350 > framesINSERTIONHALF && framesINSERTIONHALF > 3250){
            //     this.dX+=1.6* globalSpeedINSERTIONHALF;
            //
            // }
            //THE END OF SIMULATION
            if( framesINSERTIONHALF == 3998){
                this.dX =6;
             //   this.dY =this.dY;

            }
        }


    }
}


//GET READY MESSAGE
const getReadyINSERTIONHALF = {
    sX : 273,
    sY : 110,
    sWidth : 436 - 273,
    sHeight : 177 - 110,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,
    draw : function(){
        if(stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){
            ctxINSERTIONHALF.drawImage(pauseINSERTIONHALF,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}
const gameOverINSERTIONHALF = {

    sX : 390,
    sY : 230,
    sWidth : 760 - 390,
    sHeight : 380 - 230,
    dY : 160,
    dX : 220,
    dWidth : 200 - 24,
    dHeight :100 - 24 ,

    draw : function(){
        if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ){
            ctxINSERTIONHALF.drawImage(click2startINSERTIONHALF,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,
                this.dWidth,this.dHeight);
        }
    }
}

//DRAW - dopisac drawBUBBLE
function drawINSERTIONHALF(){
    //background
    ctxINSERTIONHALF.fillStyle = "#70c5ce";
    ctxINSERTIONHALF.fillRect(0,0,cvsINSERTIONHALF.width,cvsINSERTIONHALF.height);

    //title of canvas
    ctxINSERTIONHALF.font = "20px Arial";

    ctxINSERTIONHALF.strokeText("Insertion Half Sort! ",25,70);
    //ctxINSERTIONHALF.strokeText("Click to pause ",25,100);
    //draw function
    // bg.draw();
   // c2nINSERTIONHALF.draw();
    bgSteps.draw();
    bgRectangle.draw();

    if(250 > framesINSERTIONHALF && framesINSERTIONHALF > 150){
        brown_circle01.draw();
        red_circle01.draw();
    }
    if(750 > framesINSERTIONHALF && framesINSERTIONHALF > 650){
        brown_circle01.draw();
        red_circle01.draw();
    }
    if(1950 > framesINSERTIONHALF && framesINSERTIONHALF > 1650){
        brown_circle01.draw();
        red_circle01.draw();
    }
    if(3150 > framesINSERTIONHALF && framesINSERTIONHALF > 2850){
        brown_circle01.draw();
        red_circle01.draw();
    }

    nr1INSERTIONHALF.draw();
    nr2INSERTIONHALF.draw();
    nr3INSERTIONHALF.draw();
    nr4INSERTIONHALF.draw();
    nr9INSERTIONHALF.draw();
    lineINSERTIONHALF.draw();
    getReadyINSERTIONHALF.draw();
    gameOverINSERTIONHALF.draw();
}
function updateINSERTIONHALF(){

    bgRectangle.update();
    red_circle01.update();
    brown_circle01.update();
    nr1INSERTIONHALF.update();
    nr2INSERTIONHALF.update();
    nr3INSERTIONHALF.update();
    nr4INSERTIONHALF.update();
    nr9INSERTIONHALF.update();
  //  c2nINSERTIONHALF.update();
    lineINSERTIONHALF.update();
    if(stateINSERTIONHALF.current == stateINSERTIONHALF.over ||stateINSERTIONHALF.current == stateINSERTIONHALF.getReady){

    }else{
        if(framesINSERTIONHALF == 4000){
            stateINSERTIONHALF.current = stateINSERTIONHALF.over;
        };
    }



}

//LOOP
function loop(){
    updateINSERTIONHALF();

    drawINSERTIONHALF();

    if (stateINSERTIONHALF.current == stateINSERTIONHALF.over || stateINSERTIONHALF.current == stateINSERTIONHALF.getReady) {
    }else{
        framesINSERTIONHALF++;
       //framesINSERTIONHALF++;
    }

    requestAnimationFrame(loop);
}

loop();