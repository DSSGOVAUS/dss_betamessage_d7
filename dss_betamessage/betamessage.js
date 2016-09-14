jQuery(function($) {$(document).ready(function(){     
	$('#wrapper').append('<a href="#" class="betamessage-tag betamessage-open">Beta</a>');
	if((typeof(Storage)!=="undefined") && (localStorage.getItem('betamessage') != 'closed')) {
		// Show the message
		$('.betamessage').css('display','block');
	}            
	// Clicks the Beta link
	$('.betamessage-open').click(function(){
		localStorage.setItem('betamessage', '');
		$('.betamessage').slideDown(500);
	});   
	// Clicks the Close
	$('.betamessage-close').click(function(){
		$('.betamessage').slideUp(500);
		localStorage.setItem('betamessage', 'closed');
	});
});});