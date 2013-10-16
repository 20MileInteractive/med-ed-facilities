	$(document).foundation()

	$('.description').addClass('animated');
	$('.sessionTrigger').click(function(){
		
    	$(this).next('.description').toggleClass( 'flipInX' );
  	});