





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
    }

    function bubble_sort_with_flag( A,  n ) {
        var temp;
        for(var k = 0; k< n-1; k++) {
            // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations
            var flag = 0;
            for(var i = 0; i < n-k-1; i++) {
                if(A[ i ] > A[ i+1] ) {
                    flag++;
                    //nr1BUBBLE.update()
                    // here swapping of positions is being done.
                    temp = A[ i ];
                    A[ i ] = A[ i+1 ];
                    A[ i + 1] = temp;
                }

            }
            if(flag == 0)break; //  there is no changes in the last turn
        }
    }




    function insertionSort(inputArr) {
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



    function insertion_half_Sort(inputArr) {
        let n = inputArr.length;
        // text = " CZY TO DZIALA [0]=   "+ n;
        // document.getElementById("demo3").innerHTML = text;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];

            //let j = i-1;
            let l = 0 ,p = i -1;
            while (l<=p){
                let m = Math.round((l + p) /2 )       //uwaga bo moze byc 2.5 zamiast 2

                if(current < inputArr[m]){
                    p = m -1;
                }else{
                    l = m +1;
                }
            }
            // The last element of our sorted subarray
            for (let j = i -1 ; j>l ; j++){
                inputArr[j+1]=inputArr[j];
                inputArr[l] = current;
            }


            //
            // //to sie dzieje na koncu
            // while ((j > -1) && (current < inputArr[j])) {
            //     inputArr[j+1] = inputArr[j];
            //     j--;
            // }
            // inputArr[j+1] = current;
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





    arrayBUBBLE = shuffle(array);
    arrayINSERTION = shuffle(array);
    arrayINSERTION_HALF = shuffle(array);
    arrayBUBBLE_FLAG = shuffle(array);
    text = "array [0]=   "+array[0];
    document.getElementById("demo4").innerHTML = text;

    var start = new Date().getTime();
    insertionSort(arrayINSERTION);
    var elapsed = new Date().getTime() - start;
    text = "Time of the insertion sort: "+elapsed+ " ms";
    document.getElementById("demo6").innerHTML = text;

    var start = new Date().getTime();
    bubble_sort_with_flag(arrayBUBBLE_FLAG,arrayBUBBLE_FLAG.length);
    var elapsed = new Date().getTime() - start;
    text = "Time of the bubble sort with flag: "+elapsed+ " ms";
    document.getElementById("demo8").innerHTML = text;

    var start = new Date().getTime();
    bubble_sort(arrayBUBBLE,arrayBUBBLE.length);
    var elapsed = new Date().getTime() - start;
    text = "Time of the bubble sort: "+elapsed+ " ms";
    document.getElementById("demo5").innerHTML = text;

    var start = new Date().getTime();
    insertion_half_Sort(arrayINSERTION_HALF);
    var elapsed = new Date().getTime() - start;
    text = "Time of the insertion half sort: "+elapsed+ " ms";
    document.getElementById("demo7").innerHTML = text;







    //fill the table
    for(var i = 0;i<5;i++){
        tab_step3[i]=arrayBUBBLE[i];
    }
    text = " CZY TO DZIALA [0]=   "+arrayBUBBLE[0]+"[1]=   "+arrayBUBBLE[1]+"[2]=   "+arrayBUBBLE[2]+"[3]=   "+arrayBUBBLE[3]+"[4]=   "+arrayBUBBLE[4];
    document.getElementById("demo3").innerHTML = text;




}

