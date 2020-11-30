





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
    function bubble_sort( A) {
        var temp;
        let n = A.length;
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

    function bubble_sort_with_flag( A) {
        var temp;
        let n = A.length;
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




//NIE DZIALA
    function mixSort(inputArr) {
        var n = inputArr.length   - 1;
        var l = 1 ;
        var p = n ;
        var k = n;
        while(l<=p) {
            for (var j = p; j >= l; j--) {
                if (inputArr[j - 1] > inputArr[j]) {

                    // zmiana
                    x = inputArr[j - 1];
                    inputArr[j - 1] = inputArr[j];
                    inputArr[j] = x;

                    //zapamietanie ostatniej zmiany na danym indeksie
                    k = j;
                }
            }


           // l = l + 1;
            l = k+1;
            for (let j = l; j <= p; j++) {
                if (inputArr[j - 1] > inputArr[j]) {
                    x = inputArr[j - 1];
                    inputArr[j - 1] = inputArr[j];
                    inputArr[j] = x;
                    k = j;
                }
            }
            p = k-1;
           // p = p - 1;
        }
        return inputArr;
    }


    // //
    //
    // for (var array1=[],i=10,j=0;i>0;--i,j++) array1[j]=i*11;
    //
    // text = "arrayMIX przed sortowaniu [0]=  "+array1[0]+
    //     "[1]= "+array1[1]+ " [2]=   "+array1[2]+
    //     " [3]=   "+array1[3]+ " [4]=   "+array1[4]+
    //     " [5]=   "+array1[5]+ " [6]=   "+array1[6]+
    //     " [7]=   "+array1[7]+ " [8]=   "+array1[8]+
    //     " [9]=   "+array1[9]
    // document.getElementById("demo10").innerHTML = text;
    //
    //

    function shellSort(arr) {
        var increment = arr.length / 2;
        while (increment > 0) {
            for (i = increment; i < arr.length; i++) {
                var j = i;
                var temp = arr[i];

                while (j >= increment && arr[j-increment] > temp) {
                    arr[j] = arr[j-increment];
                    j = j - increment;
                }

                arr[j] = temp;
            }

            if (increment == 2) {
                increment = 1;
            } else {
                increment = parseInt(increment*5 / 11);
            }
        }
        return arr;
    }



    // /* function to sort arr using shellSort */
    // function shellSort(arr)
    // {
    //     var n = arr.length ;
    //     // Start with a big gap, then reduce the gap
    //     for (var gap = n/2; gap > 0; gap /= 2)
    //     {
    //         // Do a gapped insertion sort for this gap size.
    //         // The first gap elements a[0..gap-1] are already in gapped order
    //         // keep adding one more element until the entire array is
    //         // gap sorted
    //         for (var i = gap; i < n; i += 1)
    //         {
    //             // add a[i] to the elements that have been gap sorted
    //             // save a[i] in temp and make a hole at position i
    //             var temp = arr[i];
    //
    //             // shift earlier gap-sorted elements up until the correct
    //             // location for a[i] is found
    //             var j;
    //             for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
    //                 arr[j] = arr[j - gap];
    //
    //             //  put temp (the original a[i]) in its correct location
    //             arr[j] = temp;
    //         }
    //     }
    //     return arr;
    // }



// create max heap
    function maxHeap(input, i) {
        const left = 2 * i + 1
        const right = 2 * i + 2
        let max = i

        if (left < arrLength && input[left] > input[max]) {
            max = left
        }

        if (right < arrLength && input[right] > input[max])     {
            max = right
        }

        if (max != i) {
            swap(input, i, max)
            maxHeap(input, max)
        }
    }

    function swap(input, indexA, indexB) {
        const temp = input[indexA]

        input[indexA] = input[indexB]
        input[indexB] = temp
    }

    function heapSort(input) {
        arrLength = input.length

        for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      {
            maxHeap(input, i)
        }

        for (i = input.length - 1; i > 0; i--) {
            swap(input, 0, i)
            arrLength--

            maxHeap(input, 0)
        }
        return input;
    }


    //const list = [4, 2, 3, 1, 5]

    //const sorted = heapSort(list)

    //console.log(list)


    function selectionSort(inputArr) {
        let n = inputArr.length;

        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(inputArr[j] < inputArr[min]) {
                    min=j;
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = inputArr[i];
                inputArr[i] = inputArr[min];
                inputArr[min] = tmp;
            }
        }
        return inputArr;
    }

//Quick sort runs with the Time Complexity of O(nlogn).
    function partition(arr, start, end){
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                // Swapping elements
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                // Moving to next element
                pivotIndex++;
            }
        }

        // Putting the pivot value in the middle
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
        return pivotIndex;
    }
    //https://stackabuse.com/quicksort-in-javascript/
    function quickSortRecursive(arr, start, end) {
        // Base case or terminating case
        if (start >= end) {
            return;
        }

        // Returns pivotIndex
        let index = partition(arr, start, end);

        // Recursively apply the same logic to the left and right subarrays
        quickSortRecursive(arr, start, index - 1);
        quickSortRecursive(arr, index + 1, end);
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


    function merge(arr1, arr2){
        let result = []; // the array to hold results.
        let i = 0;
        let j = 0;

// as the pseudo-code implies, we have to loop through the
// arrays at the same time and it has to be done once.
// note that if one array completes its iteration, we will
// have to stop the while loop.

        while(i < arr1.length && j < arr2.length){
// compare the elements one at a time.
            if(arr1[i] > arr2[j]) {
                result.push(arr2[j]);
                j++;
            } else {
                result.push(arr1[i]);
                i++;
            }
        }

        // these other while loops checks if there's some item left
        // in the arrays so that we can push their elements in the result array.
        while(i < arr1.length){
            result.push(arr1[i]);
            i++;
        }

        while(j < arr2.length){
            result.push(arr2[j]);
            j++;
        }

        return result;
    }
    function mergeSort(arr){

// recursion base case
// it checks if the array length is less than or equal to 1.
// if that's the case return the arr else keep splicing.

        if(arr.length <= 1) return arr;
        // remember that we said merge sort uses divide and conquer
// algorithm pattern

// it firsts know the half point of the array.
        let halfPoint = Math.ceil(arr.length / 2);

// and then splice the array from the beginning up to the half point.
// but for the fact that merge sort needs the array to be of one element, it will keep splicing that half till it fulfills the condition of having one element array.

        let firstHalf = mergeSort(arr.splice(0, halfPoint));

// second array from the half point up to the end of the array.
        let secondHalf = mergeSort(arr.splice(-halfPoint));

// merge the array back and return the result.
// note that we are using the helper function we created above.
        return merge(firstHalf, secondHalf);
    }


    arrayINSERTION = shuffle(array);//wstawianie proste
    arrayINSERTION_HALF = shuffle(array);//wstawianie polowkowe
    arraySELECT = shuffle(array)//wybieranie proste
    arrayBUBBLE = shuffle(array);//sortowanie babelkowe
    arrayBUBBLE_FLAG = shuffle(array);//sortowanie babelkowe ze znacznikiem
    arrayMIX = shuffle(array);//sort mieszane
    arraySHELL = shuffle(array);//sort metoda shela
    arrayHEAP = shuffle(array);//sortowanie stogowe
    arrayQUICK = shuffle(array);//sortowanie szybkie
    arrayMERGE= shuffle(array);//sortowanie przez laczenie

    text = "6. arrayMIX przed sortowaniem [0]=  "+arrayMIX[0]+
        "[1]= "+arrayMIX[1]+ " [2]=   "+arrayMIX[2]+
        " [3]=   "+arrayMIX[3]+ " [4]=   "+arrayMIX[4]+
        " [5]=   "+arrayMIX[5]+ " [6]=   "+arrayMIX[6]+
        " [7]=   "+arrayMIX[7]+ " [8]=   "+arrayMIX[8]+
        " [9]=   "+arrayMIX[9]+ " [10]=   "+arrayMIX[10]
    document.getElementById("demo11").innerHTML = text;

    text = "4. arrayBUBBLE przed sortowaniem [0]=  "+arrayBUBBLE[0]+
        "[1]= "+arrayBUBBLE[1]+ " [2]=   "+arrayBUBBLE[2]+
        " [3]=   "+arrayBUBBLE[3]+ " [4]=   "+arrayBUBBLE[4]+
        " [5]=   "+arrayBUBBLE[5]+ " [6]=   "+arrayBUBBLE[6]+
        " [7]=   "+arrayBUBBLE[7]+ " [8]=   "+arrayBUBBLE[8]+
        " [9]=   "+arrayBUBBLE[9]+ " [10]=   "+arrayBUBBLE[10]
    document.getElementById("demo12").innerHTML = text;

    text = "1. arrayINSERTION przed sortowaniem [0]=  "+arrayINSERTION[0]+
        "[1]= "+arrayINSERTION[1]+ " [2]=   "+arrayINSERTION[2]+
        " [3]=   "+arrayINSERTION[3]+ " [4]=   "+arrayINSERTION[4]+
        " [5]=   "+arrayINSERTION[5]+ " [6]=   "+arrayINSERTION[6]+
        " [7]=   "+arrayINSERTION[7]+ " [8]=   "+arrayINSERTION[8]+
        " [9]=   "+arrayINSERTION[9]+ " [10]=   "+arrayINSERTION[10]
    document.getElementById("demo13").innerHTML = text;

    text = "2. arrayINSERTION_HALF przed sortowaniem [0]=  "+arrayINSERTION_HALF[0]+
        "[1]= "+arrayINSERTION_HALF[1]+ " [2]=   "+arrayINSERTION_HALF[2]+
        " [3]=   "+arrayINSERTION_HALF[3]+ " [4]=   "+arrayINSERTION_HALF[4]+
        " [5]=   "+arrayINSERTION_HALF[5]+ " [6]=   "+arrayINSERTION_HALF[6]+
        " [7]=   "+arrayINSERTION_HALF[7]+ " [8]=   "+arrayINSERTION_HALF[8]+
        " [9]=   "+arrayINSERTION_HALF[9]+ " [10]=   "+arrayINSERTION_HALF[10]
    document.getElementById("demo14").innerHTML = text;


    text = "5. arrayBUBBLE_FLAG przed sortowaniem [0]=  "+arrayBUBBLE_FLAG[0]+
        "[1]= "+arrayBUBBLE_FLAG[1]+ " [2]=   "+arrayBUBBLE_FLAG[2]+
        " [3]=   "+arrayBUBBLE_FLAG[3]+ " [4]=   "+arrayBUBBLE_FLAG[4]+
        " [5]=   "+arrayBUBBLE_FLAG[5]+ " [6]=   "+arrayBUBBLE_FLAG[6]+
        " [7]=   "+arrayBUBBLE_FLAG[7]+ " [8]=   "+arrayINSERTION[8]+
        " [9]=   "+arrayBUBBLE_FLAG[9]+ " [10]=   "+arrayBUBBLE_FLAG[10]
    document.getElementById("demo15").innerHTML = text;


    text = "7. arraySHELL przed sortowaniem [0]=  "+arraySHELL[0]+
        "[1]= "+arraySHELL[1]+ " [2]=   "+arraySHELL[2]+
        " [3]=   "+arraySHELL[3]+ " [4]=   "+arraySHELL[4]+
        " [5]=   "+arraySHELL[5]+ " [6]=   "+arraySHELL[6]+
        " [7]=   "+arraySHELL[7]+ " [8]=   "+arraySHELL[8]+
        " [9]=   "+arraySHELL[9]+ " [10]=   "+arraySHELL[10]
    document.getElementById("demo16").innerHTML = text;

    //
    text = "8. arrayHEAP przed sortowaniem [0]=  "+arrayHEAP[0]+
        "[1]= "+arrayHEAP[1]+ " [2]=   "+arrayHEAP[2]+
        " [3]=   "+arrayHEAP[3]+ " [4]=   "+arrayHEAP[4]+
        " [5]=   "+arrayHEAP[5]+ " [6]=   "+arrayHEAP[6]+
        " [7]=   "+arrayHEAP[7]+ " [8]=   "+arrayHEAP[8]+
        " [9]=   "+arrayHEAP[9]+ " [10]=   "+arrayHEAP[10]
    document.getElementById("demo23").innerHTML = text;

    text = "3. arraySELECT przed sortowaniem [0]=  "+arraySELECT[0]+
        "[1]= "+arraySELECT[1]+ " [2]=   "+arraySELECT[2]+
        " [3]=   "+arraySELECT[3]+ " [4]=   "+arraySELECT[4]+
        " [5]=   "+arraySELECT[5]+ " [6]=   "+arraySELECT[6]+
        " [7]=   "+arraySELECT[7]+ " [8]=   "+arraySELECT[8]+
        " [9]=   "+arraySELECT[9]+ " [10]=   "+arraySELECT[10]
    document.getElementById("demo25").innerHTML = text;

    text = "9. arrayQUICK przed sortowaniem [0]=  "+arrayQUICK[0]+
        "[1]= "+arrayQUICK[1]+ " [2]=   "+arrayQUICK[2]+
        " [3]=   "+arrayQUICK[3]+ " [4]=   "+arrayQUICK[4]+
        " [5]=   "+arrayQUICK[5]+ " [6]=   "+arrayQUICK[6]+
        " [7]=   "+arrayQUICK[7]+ " [8]=   "+arrayQUICK[8]+
        " [9]=   "+arrayQUICK[9]+ " [10]=   "+arrayQUICK[10]
    document.getElementById("demo27").innerHTML = text;

    text = "10. arrayMERGE przed sortowaniem [0]=  "+arrayMERGE[0]+
        "[1]= "+arrayMERGE[1]+ " [2]=   "+arrayMERGE[2]+
        " [3]=   "+arrayMERGE[3]+ " [4]=   "+arrayMERGE[4]+
        " [5]=   "+arrayMERGE[5]+ " [6]=   "+arrayMERGE[6]+
        " [7]=   "+arrayMERGE[7]+ " [8]=   "+arrayMERGE[8]+
        " [9]=   "+arrayMERGE[9]+ " [10]=   "+arrayMERGE[10]
    document.getElementById("demo29").innerHTML = text;

//szybkosc dzialania
    var start = new Date().getTime();
    insertionSort(arrayINSERTION);
    var elapsed = new Date().getTime() - start;
    text = "1. Time of the insertion sort: "+elapsed+ " ms";
    document.getElementById("demo1").innerHTML = text;

    text = "1. arrayINSERTION po sortowaniem [0]=  "+arrayINSERTION[0]+
        "[1]= "+arrayINSERTION[1]+ " [2]=   "+arrayINSERTION[2]+
        " [3]=   "+arrayINSERTION[3]+ " [4]=   "+arrayINSERTION[4]+
        " [5]=   "+arrayINSERTION[5]+ " [6]=   "+arrayINSERTION[6]+
        " [7]=   "+arrayINSERTION[7]+ " [8]=   "+arrayINSERTION[8]+
        " [9]=   "+arrayINSERTION[9]+ " [10]=   "+arrayINSERTION[10]
    document.getElementById("demo17").innerHTML = text;

    var start = new Date().getTime();
    bubble_sort_with_flag(arrayBUBBLE_FLAG);
    var elapsed = new Date().getTime() - start;
    text = "5. Time of the bubble sort with flag: "+elapsed+ " ms";
    document.getElementById("demo5").innerHTML = text;
    text = "5. arrayBUBBLE_FLAG po sortowaniem [0]=  "+arrayBUBBLE_FLAG[0]+
        "[1]= "+arrayBUBBLE_FLAG[1]+ " [2]=   "+arrayBUBBLE_FLAG[2]+
        " [3]=   "+arrayBUBBLE_FLAG[3]+ " [4]=   "+arrayBUBBLE_FLAG[4]+
        " [5]=   "+arrayBUBBLE_FLAG[5]+ " [6]=   "+arrayBUBBLE_FLAG[6]+
        " [7]=   "+arrayBUBBLE_FLAG[7]+ " [8]=   "+arrayINSERTION[8]+
        " [9]=   "+arrayBUBBLE_FLAG[9]+ " [10]=   "+arrayBUBBLE_FLAG[10]
    document.getElementById("demo18").innerHTML = text;



    var start = new Date().getTime();
    bubble_sort(arrayBUBBLE);
    var elapsed = new Date().getTime() - start;
    text = "4. Time of the bubble sort: "+elapsed+ " ms";
    document.getElementById("demo4").innerHTML = text;
    text = "4. arrayBUBBLE po sortowaniem [0]=  "+arrayBUBBLE[0]+
        "[1]= "+arrayBUBBLE[1]+ " [2]=   "+arrayBUBBLE[2]+
        " [3]=   "+arrayBUBBLE[3]+ " [4]=   "+arrayBUBBLE[4]+
        " [5]=   "+arrayBUBBLE[5]+ " [6]=   "+arrayBUBBLE[6]+
        " [7]=   "+arrayBUBBLE[7]+ " [8]=   "+arrayBUBBLE[8]+
        " [9]=   "+arrayBUBBLE[9]+ " [10]=   "+arrayBUBBLE[10]
    document.getElementById("demo19").innerHTML = text;



    var start = new Date().getTime();
    insertion_half_Sort(arrayINSERTION_HALF);
    var elapsed = new Date().getTime() - start;
    text = "2. Time of the insertion half sort: "+elapsed+ " ms";
    document.getElementById("demo2").innerHTML = text;
    //sprawdzenie array mix
    text = "2. arrayINSERTION_HALF po sortowaniem [0]=  "+arrayINSERTION_HALF[0]+
        "[1]= "+arrayINSERTION_HALF[1]+ " [2]=   "+arrayINSERTION_HALF[2]+
        " [3]=   "+arrayINSERTION_HALF[3]+ " [4]=   "+arrayINSERTION_HALF[4]+
        " [5]=   "+arrayINSERTION_HALF[5]+ " [6]=   "+arrayINSERTION_HALF[6]+
        " [7]=   "+arrayINSERTION_HALF[7]+ " [8]=   "+arrayINSERTION_HALF[8]+
        " [9]=   "+arrayINSERTION_HALF[9]+ " [10]=   "+arrayINSERTION_HALF[10]
    document.getElementById("demo20").innerHTML = text;


    var start = new Date().getTime();
    mixSort(arrayMIX);
    var elapsed = new Date().getTime() - start;
    text = "6. Time of the MIX  sort: "+elapsed+ " ms";
    document.getElementById("demo6").innerHTML = text;
    //sprawdzenie array mix
    text = "6. arrayMIX po sortowaniu [0]=  "+arrayMIX[0]+
        "[1]= "+arrayMIX[1]+ " [2]=   "+arrayMIX[2]+
        " [3]=   "+arrayMIX[3]+ " [4]=   "+arrayMIX[4]+
        " [5]=   "+arrayMIX[5]+ " [6]=   "+arrayMIX[6]+
        " [7]=   "+arrayMIX[7]+ " [8]=   "+arrayMIX[8]+
        " [9]=   "+arrayMIX[9]+ " [10]=   "+arrayMIX[10]
    document.getElementById("demo21").innerHTML = text;

    var start = new Date().getTime();
    shellSort(arraySHELL);
    var elapsed = new Date().getTime() - start;
    text = "7. Time of the SHELL  sort: "+elapsed+ " ms";
    document.getElementById("demo7").innerHTML = text;
    text = "7. arraySHELL po sortowaniem [0]=   "+arraySHELL[0]+
        "[1]= "+arraySHELL[1]+ " [2]=   "+arraySHELL[2]+
        " [3]=   "+arraySHELL[3]+ " [4]=   "+arraySHELL[4]+
        " [5]=   "+arraySHELL[5]+ " [6]=   "+arraySHELL[6]+
        " [7]=   "+arraySHELL[7]+ " [8]=   "+arraySHELL[8]+
        " [9]=   "+arraySHELL[9]+ " [10]=   "+arraySHELL[10]
    document.getElementById("demo22").innerHTML = text;

    var start = new Date().getTime();
    heapSort(arrayHEAP);
    var elapsed = new Date().getTime() - start;
    text = "8. Time of the HEAP  sort: "+elapsed+ " ms";
    document.getElementById("demo8").innerHTML = text;
    text = "8. arrayHEAP po sortowaniem [0]=   "+arrayHEAP[0]+
        "[1]= "+arrayHEAP[1]+ " [2]=   "+arrayHEAP[2]+
        " [3]=   "+arrayHEAP[3]+ " [4]=   "+arrayHEAP[4]+
        " [5]=   "+arrayHEAP[5]+ " [6]=   "+arrayHEAP[6]+
        " [7]=   "+arrayHEAP[7]+ " [8]=   "+arrayHEAP[8]+
        " [9]=   "+arrayHEAP[9]+ " [10]=   "+arrayHEAP[10]
    document.getElementById("demo24").innerHTML = text;




    var start = new Date().getTime();
    selectionSort(arraySELECT);
    var elapsed = new Date().getTime() - start;
    text = "3. Time of the SELECT  sort: "+elapsed+ " ms";
    document.getElementById("demo3").innerHTML = text;
    text = "3. arraySELECT po sortowaniem [0]=   "+arraySELECT[0]+
        "[1]= "+arraySELECT[1]+ " [2]=   "+arraySELECT[2]+
        " [3]=   "+arraySELECT[3]+ " [4]=   "+arraySELECT[4]+
        " [5]=   "+arraySELECT[5]+ " [6]=   "+arraySELECT[6]+
        " [7]=   "+arraySELECT[7]+ " [8]=   "+arraySELECT[8]+
        " [9]=   "+arraySELECT[9]+ " [10]=   "+arraySELECT[10]
    document.getElementById("demo26").innerHTML = text;




    var start = new Date().getTime();
    quickSortRecursive(arrayQUICK,0,arrayQUICK.length);
    var elapsed = new Date().getTime() - start;
    text = "9. Time of the QUICK  sort: "+elapsed+ " ms";
    document.getElementById("demo9").innerHTML = text;
    text = "9. arrayQUICK po sortowaniem [0]=   "+arrayQUICK[0]+
        "[1]= "+arrayQUICK[1]+ " [2]=   "+arrayQUICK[2]+
        " [3]=   "+arrayQUICK[3]+ " [4]=   "+arrayQUICK[4]+
        " [5]=   "+arrayQUICK[5]+ " [6]=   "+arrayQUICK[6]+
        " [7]=   "+arrayQUICK[7]+ " [8]=   "+arrayQUICK[8]+
        " [9]=   "+arrayQUICK[9]+ " [10]=   "+arrayQUICK[10]
    document.getElementById("demo28").innerHTML = text;


    var start = new Date().getTime();
    arrayMERGE=mergeSort(arrayMERGE);
    var elapsed = new Date().getTime() - start;
    text = "10. Time of the MERGE  sort: "+elapsed+ " ms";
    document.getElementById("demo10").innerHTML = text;
    text = "10. arrayMERGE po sortowaniem [0]=   "+arrayMERGE[0]+
        "[1]= "+arrayMERGE[1]+ " [2]=   "+arrayMERGE[2]+
        " [3]=   "+arrayMERGE[3]+ " [4]=   "+arrayMERGE[4]+
        " [5]=   "+arrayMERGE[5]+ " [6]=   "+arrayMERGE[6]+
        " [7]=   "+arrayMERGE[7]+ " [8]=   "+arrayMERGE[8]+
        " [9]=   "+arrayMERGE[9]+ " [10]=   "+arrayMERGE[10]
    document.getElementById("demo30").innerHTML = text;

    //
    // var start = new Date().getTime();
    // mergeSort(arrayMERGE);
    // var elapsed = new Date().getTime() - start;
    // text = "10. Time of the MERGE  sort: "+elapsed+ " ms";
    // document.getElementById("demo10").innerHTML = text;
    // text = "10. arrayMERGE po sortowaniem [0]=   "+arrayMERGE[0]+
    //     "[1]= "+arrayMERGE[1]+ " [2]=   "+arrayMERGE[2]+
    //     " [3]=   "+arrayMERGE[3]+ " [4]=   "+arrayMERGE[4]+
    //     " [5]=   "+arrayMERGE[5]+ " [6]=   "+arrayMERGE[6]+
    //     " [7]=   "+arrayMERGE[7]+ " [8]=   "+arrayMERGE[8]+
    //     " [9]=   "+arrayMERGE[9]+ " [10]=   "+arrayMERGE[10]
    // document.getElementById("demo30").innerHTML = text;



}

