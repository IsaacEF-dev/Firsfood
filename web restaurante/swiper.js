var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1060: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
        200: {
            slidesPerView: 1,
        }
    }
});