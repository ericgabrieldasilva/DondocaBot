$(document).ready(function(){
	
		
	function animation(){
		$('section').each(function(){
			var posicaoDiv = $(this).offset().top,						//Pegando a posição da div
				alturaDiv = $(this).height() / 2,						//Pegando a altura da div
				alturaTela = $(window).height(),						//Pegando altura da tela
				posicaoScroll = $(window).scrollTop() + alturaTela; 	//Pegando a posição do scroll
			//Se a posição do scroll for maior que a posicao da div
			if ((posicaoScroll - alturaDiv) >= posicaoDiv){
				//Fazendo a div aparecer
				$(this).addClass('active');
			}else {
				//Fazendo a div desaparecer
				$(this).removeClass('active');
			}
		});
	
	}

	//Chamando a função animation assim que a página atualizar
	animation();

	//Chamando a função toda vez que a página for scrollada
	$(window).scroll(function(){
		animation();
	});

});