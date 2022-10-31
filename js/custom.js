

$(document).ready(function(){
	

    $(".main-menu ul li.parent")
    .mouseover(function() {
      $(this ).addClass('add-active-hover');
    }).mouseout(function() {
      $(this).removeClass('add-active-hover');
    });
    

    // map click zoom
    $('.map_section').click(function () {
	    $('#googleMap').css("pointer-events", "auto");
	});
});


$(document).ready(function(){

	/*--------------------swipe-menu------------------*/
	$('.swipe-control').click(function(){
    	if($('body').hasClass('ind'))
    	{
    		$('body').removeClass('ind');
    		$('.swipe').stop(true).animate({'left':'-237'},500,'easeOutCirc');
    		$('.swipe').removeClass('open');
    		$('body').removeClass('menu-overlay');

    	}
    	else
    	{
    		if($('.icon-search').hasClass('active'))
    		{
    			// $('.search-form form').stop(true).slideToggle();
    			$('.icon-search').toggleClass('active');
    		}	
    		if($('.main-wishlist-cart').hasClass('active'))
	    	{
	    		$('.main-wishlist-cart').removeClass('active');
	    		$('.cart-dropdown').stop(true).slideUp();
	    	}	
    		$('body').addClass('ind');
    		$('.swipe').addClass('open');
    		$('body').addClass('menu-overlay');
    		$('.swipe').stop(true).animate({'left':'0'},500,'easeOutCirc');
    	}	
    });
	$('.swipe-menu ul').find('li.parent').append('<strong></strong>');

	$(".swipe-menu ul li").click(function(event) {
		if (event.srcElement = event.currentTarget) {
			if($(this).hasClass('active'))
			{
				$(this).removeClass('active');
			    $(this).children("ul").stop(true).slideUp();
			    $(this).children('strong').removeClass('opened');
			}
			else
			{
				$(this).siblings(0).removeClass('active');
				$(this).siblings(0).find('ul').stop(true).slideUp();
				$(this).siblings(0).find('strong').removeClass('opened');
				
				$(this).addClass('active');
			    $(this).children("ul").stop(true).slideDown();
			    $(this).children('strong').addClass('opened');
			}
			event.stopPropagation();
		}
		
	    
	});
	/*-------------------complete swipe-menu------------------*/

});

/*--------------------swipe menu------------------*/
	$('.swipe').height($(window).height());




$(document).ready(function() {
	 $('#language-dropdown, #place-droopdown, #month-droopdown, #year-dropdown, #Country-dropdown, #adult-dropdown, #Children-dropdown').dropkick({
	 });
});




