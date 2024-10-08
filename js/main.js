document.querySelector('.burger').onclick = function () {
    document.querySelector('#menu-nav ul').classList.add('mob-menu');
}

document.querySelector('#close').onclick = function () {
    document.querySelector('#menu-nav ul').classList.remove('mob-menu');
}
document.querySelector('#menu-nav ul').onclick = function () {
    document.querySelector('#menu-nav ul').classList.remove('mob-menu');
}

new Swiper('.profile-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autohide: true
});