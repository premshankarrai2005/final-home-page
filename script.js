new Swiper('.card-wrapper', {
    loop: true,

    spaceBetween: 40,

    //pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //responsive breakspoints
    breakspoints: {
        0: {
            slidesPerview: 3
        },

    }


});




// for count
function updateCount(input) {
    const count = input.value.length;
    document.getElementById('char-count').textContent = `${count}/1000`;
}