$(document).ready(function(){

	$('nav.menu-mobile h2, nav.menu-mobile a').click(function(){
		var menu = $('nav.menu-mobile ul');
		if ($(menu).is(':hidden') == true){
			$('nav.menu-mobile i').removeClass('fa-bars').addClass('fa-times');
			$('body').css('overflow', 'hidden');
		}else{
			$('nav.menu-mobile i').addClass('fa-bars').removeClass('fa-times');
			$('body').css('overflow', 'auto');
		}

		menu.slideToggle();

	});

	$('.menu-desktop a, .menu-mobile a, a.btn, div.logo a').click(function(event){
		event.preventDefault();
		var aid = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(aid).offset().top
		}, 800);
	});
});