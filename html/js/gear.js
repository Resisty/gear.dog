(function( $ ) {
    'use strict';
    $(document).ready(function() {
	// Handle both known mouse wheel events
	$(window).bind('mousewheel DOMMouseScroll', function($event) {
	    // If it's rotating/loading, do nothing
	    if ($('#gear').hasClass('rotated-image') || $('#gear').hasClass('rotated-image-reverse')) {
		return false;
	    }
	    // If it's rolling up, rotate counter clockwise
	    if ($event.originalEvent.wheelDelta > 0 || $event.originalEvent.detail < 0) {
		$('#gear').removeClass('rotated-image-reverse')
			  .removeClass('rotated-image')
			  .addClass('rotated-image-reverse')
			  .delay(1900)
			  .queue(function() {
			      $(this).removeClass('rotated-image-reverse').dequeue() 
			  });
	    // Otherwise rotate clockwise
	    } else {
		$('#gear').removeClass('rotated-image')
			  .removeClass('rotated-image-reverse')
			  .addClass('rotated-image')
			  .delay(1900)
			  .queue(function() {
			      $(this).removeClass('rotated-image').dequeue()
			  });
	    }
	});
    });
})( jQuery );
