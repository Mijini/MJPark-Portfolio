$(document).ready(function(){

    // bxslider
    $('.bxslider').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        pause:5000,
        touchEnabled:false,
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

    //fadein
    $( '.fadein' ).hide();
    setTimeout(mmm(),1000);
    function mmm(){
    $( '.fadein' ).fadeIn( 2000 );
  }

    // fadein
    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
      }
      
      function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
          if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
          } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
          }
        })
      }
      
      window.addEventListener('scroll', handleScroll);

    //   슬라이드
    $(window).fadeThis({speed:1000,
      reverse:false});

}); /* 제이커리 끝 */