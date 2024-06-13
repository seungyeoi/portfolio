
$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.select .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
       });


	//상단이동
		$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
                  var scroll = $(window).scrollTop(); //스크롤의 거리
                 
                 
                //   $('.text').text(scroll);

                  if(scroll>300){ //300이상의 거리가 발생되면
                      $('.move_top').fadeIn('slow');  //top보여라~~~~
                  }else{
                      $('.move_top').fadeOut('fast');//top안보여라~~~~
                  }
             });
           
              $('.move_top').click(function(e){
                 e.preventDefault();
                  //상단으로 스르륵 이동합니다.
                 $("html,body").stop().animate({"scrollTop":0},1000); 
              });
});

//