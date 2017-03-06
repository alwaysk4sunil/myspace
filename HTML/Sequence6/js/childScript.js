parent.pageNo=6;
var clickHandler = 'click';
$(document).ready(function() {
    if ('ontouchstart' in document.documentElement) {
        clickHandler = "ontouchstart";
    }
   $("body").bind('touchmove', function(event) {
        event.preventDefault();
    });
    $(document).swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
                                    var popup = $(event.target).closest('.popup').hasClass("popup");
                                    if ( !$(".block").is(":visible") &&  !$(event.target).hasClass('noSwipe') && !$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable')&& popup!=true) {
                                                if (direction == 'left' && parent.pageNo < parent.totalPage) {
                                                                        parent.pageNo++;
                                                                        parent.loadPage();
                                                }else if (direction == 'right' && parent.pageNo>1) {                                                         
                                                                        event.preventDefault();
                                                                        parent.pageNo--;
                                                                        parent.loadPage();
                                                }
                                    }
                                    event.stopImmediatePropagation();
                                    event.preventDefault();
        }
    });
});

