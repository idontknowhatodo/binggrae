
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