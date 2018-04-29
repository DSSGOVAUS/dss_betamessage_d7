jQuery(function($) {
	$(document).ready(function() {
		var wrapper_element = $('.betamessage').data('attach-to');

		$(wrapper_element).css('position', 'relative');
		$(wrapper_element).append('<a href="#" class="betamessage-tag betamessage-open" aria-label="Display beta message">Beta</a>');

		if((typeof(Storage)!=='undefined') && (localStorage.getItem('betamessage') != 'closed')) {
			// Show the message
			if($('body').hasClass('front')) {
			  $('.betamessage').slideDown(500);
			}
			else {
				$('.betamessage').css('display','block');
			}
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
	});
});
