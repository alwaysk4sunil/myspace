var clickHandler = 'click';
$(document).ready(function() {
    if ('ontouchstart' in document.documentElement) {
        clickHandler = "touchstart";
    }
    $("body").bind('touchmove', function(event) {
        event.preventDefault()
    });
    $(document).swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            //This only fires when the user swipes left
            // var closestViewport = $(event.target).closest('.content');
			if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable')) {
				if (direction == 'left') {
				   
						if (parent.pageNo < parent.totalPage) {
							parent.pageNo++;
							setTimeout(function() {
								parent.loadPage();
							}, 100);
	
						}
					
				} else if (direction == 'right') {
					
						if (parent.pageNo > 1) {
							parent.pageNo--;
							setTimeout(function() {
								parent.loadPage();
							}, 100);
						}
	
					
				}else if (direction == 'up') {
					
						
	
					
				}else if (direction == 'down') {
					
						
					
				}
			}

        }
    });
});
