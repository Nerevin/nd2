$(document).ready(function() {

    $('.switch').click(function() {
        $(this).toggleClass("switchOn");
        if ($(this)[0].classList.contains('switchOn')) {
            $(this)[0].parentNode.querySelector('.content__text').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__text_on').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__img').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__img_on').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__desc').style.visibility = 'visible';
        }
        else {
            $(this)[0].parentNode.querySelector('.content__text').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__text_on').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__img').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__img_on').classList.toggle('hidden');
            $(this)[0].parentNode.querySelector('.content__desc').style.visibility = 'hidden';
        }
    });
});