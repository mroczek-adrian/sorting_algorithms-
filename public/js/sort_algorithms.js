var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters


    // direction: 'vertical',
    // loop: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

const next_swiper = document.getElementById("next_swiper");
//PAGE
const pages = {
    current : 1 ,
    first : 1,
    second: 2,
    third : 3
}
//CONTROL THE GAME
next_swiper.addEventListener("click",function(evt){
    switch(pages.current){
        case pages.first:
            pages.current = pages.second;
            // $.getScript("SA_quick_sort.js",function () {
            //
            // });
            break;
        // case stateQUICK.game:
        //
        //     //HERE I WILL WRITE THE ALGORITHM
        //     //  bird.flap();
        //     nr1QUICK.bubbleSort();
        //     break;

    }
});