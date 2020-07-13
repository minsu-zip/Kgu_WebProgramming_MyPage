var slideIndex = 0;
window.onload = function () {

    //슬라이더효과
    showSlides();

    //버튼 색 제거,추가
    $('.tab_menu_btn').on('click', function () {
        $('.tab_menu_btn').removeClass('on');
        $(this).addClass('on')
    });


    //1번 컨텐츠
    $('.tab_menu_btn1').on('click', function () {
        $('.tab_box').hide();
        $('.tab_box1').show();
    });

    //2번 컨텐츠
    $('.tab_menu_btn2').on('click', function () {
        $('.tab_box').hide();
        $('.tab_box2').show();
    });


    //3번 컨텐츠
    $('.tab_menu_btn3').on('click', function () {
        $('.tab_box').hide();
        $('.tab_box3').show();
    });



    $('.tab_menu_btn1').on('click', function () {
        $('.tab_menu_btn1').removeClass('on');
        $(this).addClass('on')
    });

    //4번 컨텐츠
    $('.tab_menu_btn4').on('click', function () {
        $('.tab_box_1').hide();
        $('.tab_box4').show();
    });


    //5번 컨텐츠
    $('.tab_menu_btn5').on('click', function () {
        $('.tab_box_1').hide();
        $('.tab_box5').show();
    });


    //6번 컨텐츠
    $('.tab_menu_btn6').on('click', function () {
        $('.tab_box_1').hide();
        $('.tab_box6').show();
    });


    $('.btn').on('click', function () {
        location.href='./buy.html';
    });

}

//슬라이드 화면 전환
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}