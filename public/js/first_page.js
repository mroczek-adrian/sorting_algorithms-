





function myFunction() {

    //VALIDATION
    var validation1 = document.forms["myForm"]["fname"].value;

    if (validation1 == "") {
        alert("Name must be filled out");
        return false;
    }

    var x1 = parseInt(document.getElementById("numb").value);

    //document.style.fontsize("20px");

    var uporzadkowany10x = [];
    var uporzadkowany100x = [];
    var uporzadkowany1000x = [];


    var uporzadkowany = [];
    var losowo = [];
    var odwrotnie_upo = [];
    var uporzadkowany1 = [];
    var losowo1 = [];
    var odwrotnie_upo1 = [];
    var uporzadkowany2 = [];
    var losowo2 = [];
    var odwrotnie_upo2 = [];
    var uporzadkowany3 = [];
    var losowo3 = [];
    var odwrotnie_upo3 = [];
    var uporzadkowany4 = [];
    var losowo4 = [];
    var odwrotnie_upo4 = [];
    var uporzadkowany5 = [];
    var losowo5 = [];
    var odwrotnie_upo5 = [];
    var uporzadkowany6 = [];
    var losowo6 = [];
    var odwrotnie_upo6 = [];
    var uporzadkowany7 = [];
    var losowo7 = [];
    var odwrotnie_upo7 = [];
    var uporzadkowany8 = [];
    var losowo8 = [];
    var odwrotnie_upo8 = [];
    var uporzadkowany9 = [];
    var losowo9 = [];
    var odwrotnie_upo9 = [];
    var uporzadkowany10 = [];
    var losowo10 = [];
    var odwrotnie_upo10 = [];
    //10x100x1000x
    var x10 = x1 * 10;
    for (var i = 1; i <= x10; i++) {
        uporzadkowany10x.push(i);
    }
    var x100 = x1 * 100;
    for (var i = 1; i <= x100; i++) {
        uporzadkowany100x.push(i);
    }
    var x1000 = x1 * 1000;
    for (var i = 1; i <= x1000; i++) {
        uporzadkowany1000x.push(i);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo.push(j);
        }else{
            losowo.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo.push(j);
    }
    //end
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany1.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo1.push(j);
        }else{
            losowo1.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo1.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany2.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo2.push(j);
        }else{
            losowo2.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo2.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany3.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo3.push(j);
        }else{
            losowo3.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo3.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany4.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo4.push(j);
        }else{
            losowo4.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo4.push(j);
    }

    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany5.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo5.push(j);
        }else{
            losowo5.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo5.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany6.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo6.push(j);
        }else{
            losowo6.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo6.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany7.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo7.push(j);
        }else{
            losowo7.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo7.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany8.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo8.push(j);
        }else{
            losowo8.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo8.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany9.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo9.push(j);
        }else{
            losowo9.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo9.push(j);
    }
    //start
    for (var i = 1; i <= x1; i++) {
        uporzadkowany10.push(i);
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        if(i%2==0){
            losowo10.push(j);
        }else{
            losowo10.push(i);
        }
    }
    for (var i = 1,j=x1; i <= x1; i++,j--) {

        odwrotnie_upo10.push(j);
    }
//
// //sprawdzenie ze dziala
//     text = " uporzadkowany [0]=  "+uporzadkowany[0]+
//         "[1]= "+uporzadkowany[1]+ " [2]=   "+uporzadkowany[2]+
//         " [3]=   "+uporzadkowany[3]+ " [4]=   "+uporzadkowany[4]+
//         " [5]=   "+uporzadkowany[5]+ " [6]=   "+uporzadkowany[6]+
//         " [7]=   "+uporzadkowany[7]+ " [8]=   "+uporzadkowany[8]+
//         " [9]=   "+uporzadkowany[9]+ " [10]=   "+uporzadkowany[10]
//     document.getElementById("demo01").innerHTML = text;
//     text = " losowo [0]=  "+losowo[0]+
//         "[1]= "+losowo[1]+ " [2]=   "+losowo[2]+
//         " [3]=   "+losowo[3]+ " [4]=   "+losowo[4]+
//         " [5]=   "+losowo[5]+ " [6]=   "+losowo[6]+
//         " [7]=   "+losowo[7]+ " [8]=   "+losowo[8]+
//         " [9]=   "+losowo[9]+ " [10]=   "+losowo[10]
//     document.getElementById("demo02").innerHTML = text;
//
//
//     text = " odwrotnie_upo [0]=  "+odwrotnie_upo[0]+
//         "[1]= "+odwrotnie_upo[1]+ " [2]=   "+odwrotnie_upo[2]+
//         " [3]=   "+odwrotnie_upo[3]+ " [4]=   "+odwrotnie_upo[4]+
//         " [5]=   "+odwrotnie_upo[5]+ " [6]=   "+odwrotnie_upo[6]+
//         " [7]=   "+odwrotnie_upo[7]+ " [8]=   "+odwrotnie_upo[8]+
//         " [9]=   "+odwrotnie_upo[9]+ " [10]=   "+odwrotnie_upo[10]
//     document.getElementById("demo03").innerHTML = text;
//
//

//wyklucz x=1 bo wywala bledy...
    var kwadrat =parseInt( x1 * x1);

    var text00 = "Proste wstawianie"
    var wstPoMin = parseInt(x1 - 1);
        var a1 = parseInt(9 * x1);
        var a2 = parseInt(3 * x1);
    var wstPoMax = parseInt((kwadrat/2)-1);
    var text01 = "Liczba potrzebnych porównan kluczy: minimalnie="+ wstPoMin+"  maksymalnie="+wstPoMax
    var wstPrMin = parseInt(2*(x1 - 1));
    var wstPrMax = parseInt((kwadrat + a2 - 4) / 2);
    var text02 = "Liczba potrzebnych przesunięć obiektów: minimalnie="+ wstPrMin+"  maksymalnie="+wstPrMax
    document.getElementById("demo00").innerHTML = text00;
    document.getElementById("demo01").innerHTML = text01;
    document.getElementById("demo02").innerHTML = text02;

    var text03 = "Proste wybieranie"
    var wybPoMin = parseInt((kwadrat - x1)/2);
    var wybPoMax = parseInt((kwadrat - x1)/2);
    var text04 = "Liczba potrzebnych porównan kluczy: minimalnie="+ wybPoMin+"  maksymalnie="+wybPoMax
    var wybPrMin = parseInt(3*(x1 -1));
    var wybPrMax = parseInt((kwadrat/4) + 3*(x1 -1));
    var text05 = "Liczba potrzebnych przesunięć obiektów: minimalnie="+ wybPrMin+"  maksymalnie="+wybPrMax
    document.getElementById("demo03").innerHTML = text03;
    document.getElementById("demo04").innerHTML = text04;
    document.getElementById("demo05").innerHTML = text05;



    var text06 = "Prosta zamiana"
    var zamPoMin = parseInt((kwadrat - x1)/2);
    var zamPoMax = parseInt((kwadrat - x1)/2);
    var text07 = "Liczba potrzebnych porównan kluczy: minimalnie="+ zamPoMin+"  maksymalnie="+zamPoMax
    var zamPrMin = 0;
    var zamPrMax = parseInt((kwadrat - x1)*1.5);
    var text08 = "Liczba potrzebnych przesunięć obiektów: minimalnie="+ zamPrMin+"  maksymalnie="+zamPrMax
    document.getElementById("demo06").innerHTML = text06;
    document.getElementById("demo07").innerHTML = text07;
    document.getElementById("demo08").innerHTML = text08;

    // TEMPORARY VARIABLE
    var x, text;







    function prostaZamiana_sortowanieBabelkowe( A) {
        var temp;
        let n = A.length;
        for(var k = 0; k< n-1; k++) {
             for(var i = 0; i < n-k-1; i++) {
                if(A[ i ] > A[ i+1] ) {
                    temp = A[ i ];
                    A[ i ] = A[ i+1 ];
                    A[ i + 1] = temp;
                }
            }
        }
    }



    function prosteWstawianie(a) {
        let n = a.length;
        for (let i = 1; i < n; i++) {
            let x = a[i];
            let j = i-1;
            while (j > -1) {
                if(x > a[j]){
                    break;
                }
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = x;
        }
        return a;
    }


    function prosteWybieranie(A) {
        let n = A.length;
        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i+1; j < n; j++){
                if(A[j] < A[min]) {
                    min=j;
                }
            }
             if (min != i) {
                let tmp = A[i];
                A[i] = A[min];
                A[min] = tmp;
            }
        }
        return A;
    }


    //insertion sort
    var start1 = new Date().getTime();
    prosteWstawianie(losowo1);
    var elapsed1 = new Date().getTime() - start1;
    var text1 = "ZŁOŻONOŚĆ O(n^2) PROSTE WSTAWIANIE CZAS: "+elapsed1+ " ms";
    document.getElementById("demo1").innerHTML = text1;

    //dla uporzadkowanego
    //uporzadkowany10x
    //uporzadkowany100x
    //uporzadkowany1000x
    prosteWstawianie(uporzadkowany1);
    prosteWstawianie(uporzadkowany1);
    var start11 = new Date().getTime();
    prosteWstawianie(uporzadkowany1);
    var elapsed11 = new Date().getTime() - start11;
    var text11 = "ZŁOŻONOŚĆ O(n) PROSTE WSTAWIANIE CZAS: "+elapsed11+ " ms";
    document.getElementById("demo1a").innerHTML = text11;

    prosteWstawianie(uporzadkowany10x);
    prosteWstawianie(uporzadkowany10x);
    var start11 = new Date().getTime();
    prosteWstawianie(uporzadkowany10x);
    var elapsed11 = new Date().getTime() - start11;
    var text11 = "ZŁOŻONOŚĆ O(n) PROSTE WSTAWIANIE CZAS (dla 10*n): "+elapsed11+ " ms";
    document.getElementById("demo1aa").innerHTML = text11;

    prosteWstawianie(uporzadkowany100x);
    prosteWstawianie(uporzadkowany100x);
    var start11 = new Date().getTime();
    prosteWstawianie(uporzadkowany100x);
    var elapsed11 = new Date().getTime() - start11;
    var text11 = "ZŁOŻONOŚĆ O(n) PROSTE WSTAWIANIE CZAS (dla 100*n): "+elapsed11+ " ms";
    document.getElementById("demo1aaa").innerHTML = text11;


    prosteWstawianie(uporzadkowany1000x);
    prosteWstawianie(uporzadkowany1000x);
    var start11 = new Date().getTime();
    prosteWstawianie(uporzadkowany1000x);
    var elapsed11 = new Date().getTime() - start11;
    var text11 = "ZŁOŻONOŚĆ O(n) PROSTE WSTAWIANIE CZAS (dla 1000*n): "+elapsed11+ " ms";
    document.getElementById("demo1aaaa").innerHTML = text11;





    var start111 = new Date().getTime();
     prosteWstawianie(odwrotnie_upo1);
     var elapsed111 = new Date().getTime() - start111;
     var text111 = "ZŁOŻONOŚĆ O(n^2)  PROSTE WSTAWIANIE CZAS: "+elapsed111+ " ms";
     document.getElementById("demo1b").innerHTML = text111;



    var text111=" Przypadek odwrotnie uporządkowany "
    var text111a = " Przypadek losowo uporządkowany "
    var text111b = " Przypadek uporządkowany "
   // var text111c =p.style.fontsize(100);
    var span1 = document.getElementById("demo111a");
    var span2 = document.getElementById("demo111b");


    var span = document.getElementById("demo111c");
    span.style.fontSize="25px";
    span1.style.fontSize="25px";
    span2.style.fontSize="25px";
    span.innerHTML=" Przypadek odwrotnie uporządkowany ";
    span1.innerHTML=" Przypadek losowo uporządkowany ";
    span2.innerHTML=" Przypadek uporządkowany ";

    //  sprawdzenie ze dziala
    //title of canvas
    // ctxBUBBLE.font = "20px Arial";
    //
    // ctxBUBBLE.strokeText("Sortowanie ",25,50);
    // ctxBUBBLE.strokeText("bąbelkowe!",25,75);



   //sortowanie babelkowe
    var start4 = new Date().getTime();
    prostaZamiana_sortowanieBabelkowe(losowo4);
    var elapsed4 = new Date().getTime() - start4;
    var text4 = "ZŁOŻONOŚĆ O(n^2) PROSTA ZAMIANA CZAS: "+elapsed4+ " ms";
    document.getElementById("demo4").innerHTML = text4;

    var start44 = new Date().getTime();
    prostaZamiana_sortowanieBabelkowe(uporzadkowany4);
    var elapsed44 = new Date().getTime() - start44;
    var text44 = "ZŁOŻONOŚĆ O(n^2) PROSTA ZAMIANA CZAS: "+elapsed44+ " ms";
    document.getElementById("demo4a").innerHTML = text44;

    var start444 = new Date().getTime();
    prostaZamiana_sortowanieBabelkowe(odwrotnie_upo4);
    var elapsed444 = new Date().getTime() - start444;
    var text444 = "ZŁOŻONOŚĆ O(n^2) PROSTA ZAMIANA CZAS: "+elapsed444+ " ms";
    document.getElementById("demo4b").innerHTML = text444;

  //proste wybieranie
    var start3 = new Date().getTime();
    prosteWybieranie(losowo3);
    var elapsed3 = new Date().getTime() - start3;
    var text3 = "ZŁOŻONOŚĆ O(n^2) PROSTE WYBIERANIE CZAS: "+elapsed3+ " ms";
    document.getElementById("demo3").innerHTML = text3;


    var start33 = new Date().getTime();
    prosteWybieranie(uporzadkowany3);
    var elapsed33 = new Date().getTime() - start33;
    var text33 = "ZŁOŻONOŚĆ O(n^2) PROSTE WYBIERANIE CZAS: "+elapsed33+ " ms";
    document.getElementById("demo3a").innerHTML = text33;

    var start333 = new Date().getTime();
    prosteWybieranie(odwrotnie_upo3);
    var elapsed333 = new Date().getTime() - start333;
    var text333 = "ZŁOŻONOŚĆ O(n^2) PROSTE WYBIERANIE CZAS: "+elapsed333+ " ms";
    document.getElementById("demo3b").innerHTML = text333;

}

