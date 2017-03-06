/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var clickHandler = "click";
var currentGroup = 0;
var pageNo = 1;
var totalPage = 7;
var fileName = "";
var isPageLoaded = false;
var isMinimised = false;
$(document).ready(function() {
    if ('ontouchstart' in document.documentElement) {
        clickHandler = "touchstart";
    }
    $("body").bind('touchmove', function(event) {
        event.preventDefault()
    });
    loadPage();
    $(document).swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            //This only fires when the user swipes left
            if (direction == 'left') {
                //var wrapper = $(event.target).closest('.wrapperClass').attr("class"); // && wrapper != 'wrapperClass'
                if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable')) {
                    if (pageNo < totalPage) {
                        pageNo++;
                        setTimeout(function() {
                            loadPage();
                        }, 200);
                    }
                }
            } else if (direction == 'right') {
                if (!$(event.target).hasClass('dragable_icon') && !$(event.target).hasClass('ui-draggable')) {
                    if (pageNo > 1) {
                        pageNo--;
                        setTimeout(function() {
                            loadPage();
                        }, 200);
                    }
                }
            }
        }
    });

});

var frameToShow, frameShowing;
function loadPage() {
	
    fileName = "Sequence" + pageNo + "/index"+ ".html";

	
    var frameObj;
	
    if ($("#frameContent1").is(":visible")) {
        frameObj = $("#frameContent2", window.parent.document).attr("src", fileName);
        frameToShow = 'frameContent2';
        frameShowing = "frameContent1";
    } else {
        frameObj = $("#frameContent1", window.parent.document).attr("src", fileName);
        frameToShow = 'frameContent1';
        frameShowing = "frameContent2";
    }
    frameObj.unbind().bind("load", function() {
        $("#" + frameToShow).show();
        $("#" + frameShowing).hide();
        $("#MainWrapper").show();
    });
	
}

function loadPageFromChildPage(_pageNo){
	pageNo=_pageNo;
	loadPage();
}

