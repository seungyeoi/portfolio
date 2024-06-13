//홍보센터 스와이퍼
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows : false
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  swiper.on('transitionEnd', function() {
     //console.log(swiper.realIndex);
     $('#content .media li').css({'background':'#e8e8e8','color':'#333'});
     $('#content .media li a').css({'color':'#333'});

     $('#content .media li:eq('+swiper.realIndex+')').css({'background':'#333','color':'#fff'});
     $('#content .media li:eq('+swiper.realIndex+') a').css({'color':'#fff'});

  });







//이동거시기



//공지사항