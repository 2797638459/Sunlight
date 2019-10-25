$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
    	var index = $(this).index();
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        $(this).parent().siblings().children().eq(index).show()
　　　　.siblings().hide();
$(".right").eq(0).show()
        
       
        
  	
    })
})