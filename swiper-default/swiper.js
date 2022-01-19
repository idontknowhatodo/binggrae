//메인비주얼 슬라이드
var swiper1 = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//제품 슬라이드

const elBtn = document.querySelectorAll('.product .productbtns .btn')
//console.log(elBtn.length);

elBtn.onclick = function(){
}
function aaa(n){
    var swiper2 = new Swiper(n,{
        autoplay: { delay: 5000 }, 
    });
}
aaa('.product1');

//홍보 슬라이드
var swiper3 = new Swiper(".slide_box", {
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 3000
    },
});