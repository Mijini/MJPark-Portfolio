$(document).ready(function(){
    // $('.center').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 4,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '50px',
    //           slidesToShow: 4
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<img class='a-left control-c prev sick-prev' src='../images/con8_btn_left.png'>",
        nextArrow:"<img class='a-right control-c next sick-next' src='../images/con8_btn_right.png'>"
      });

    // scrolTop
    $('.topbtn').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >=500){
            $('.topbtn').fadeIn();
        }else{
            $('.topbtn').fadeOut();

        }
    });
    $('.topbtn').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500);
    });
    
    //fade in
    $(window).fadeThis({
      speed:2500,
      reverse:false});
    

    // 엘리먼트 스타일 변경
    $('.a-right').css("display", "none");

});