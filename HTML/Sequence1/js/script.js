﻿$(document).ready(function() {
    var clickHandler = 'tap';

    $(".link2").on('touchstart', function() {
        $(".sitemap, .sitemap_active").toggle();
    });

    $(".TouchPoint").bind(clickHandler, function(e) {
        var pageNo = $(this).attr("goToPage");
        parent.loadPageFromChildPage(pageNo);
    });


    // LOCALHOST LINKING STANDARD-tab-1
    $('#std-btn0').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 1 - 0);
        parent.loadPageFromChildPage(2);
    })
    $('#std-btn1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 1 - 1);
        parent.loadPageFromChildPage(2);
    })
    $('#std-btn2').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 1 - 2);
        parent.loadPageFromChildPage(2);
    })
    $('#std-btn3').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 1 - 3);
        parent.loadPageFromChildPage(2);
    })
    $('#std-btn4').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 1 - 4);
        parent.loadPageFromChildPage(2);
    })

    // LOCALHOST LINKING CKD-tab-2 Clinical DATA
    $('#ckd-btn1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 1);
        parent.loadPageFromChildPage(3);
    })
    $('#ckd-btn4').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 4);
        parent.loadPageFromChildPage(3);
    })
    $('#ckd-btn5').on(clickHandler, function() {
            localStorage.setItem("goToSlide", 2 - 5);
            parent.loadPageFromChildPage(3);
        })
        // LOCALHOST LINKING CKD-tab-2 Practical prescribing
    $('#ckd-btn6').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 5);
        parent.loadPageFromChildPage(4);
    })
    $('#ckd-btn7').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 6);
        parent.loadPageFromChildPage(4);
    })
    $('#ckd-btn8').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 7);
        parent.loadPageFromChildPage(4);
    })


    // LOCALHOST LINKING CKD-tab-3 Biosimilar
    $('#ckd-btn10,#ckd-btn10-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 8);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn11,#ckd-btn11-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 9);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn12,#ckd-btn12-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 10);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn13,#ckd-btn13-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 11);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn14,#ckd-btn14-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 12);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn15,#ckd-btn15-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 13);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn16,#ckd-btn16-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 14);
        parent.loadPageFromChildPage(7);
    })
    $('#ckd-btn17,#ckd-btn17-1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 15);
        parent.loadPageFromChildPage(7);
    })



    // LOCALHOST LINKING CIA-tab-1 CLINICAL-DATA
    $('#cia-btn1').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 1);
        parent.loadPageFromChildPage(5);
    })
    $('#cia-btn2').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 2);
        parent.loadPageFromChildPage(5);
    })
    $('#cia-btn3').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 3);
        parent.loadPageFromChildPage(5);
    })
    $('#cia-btn4').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 4);
        parent.loadPageFromChildPage(5);
    })

    // LOCALHOST LINKING CIA-tab-2  Practical prescribing
    $('#cia-btn6').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 6);
        parent.loadPageFromChildPage(6);
    })
    $('#cia-btn7').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 7);
        parent.loadPageFromChildPage(6);
    })
    $('#cia-btn8').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 3 - 8);
        parent.loadPageFromChildPage(6);
    })


    //Footnote popup//
    $('#footnote').bind(clickHandler, function() {
        closeAllPopup()
        $('.footnote_p').css("visibility", "visible").show();
        $("#main_wrapper").addClass("p_popup");
        $(this).addClass("active");
    });
    $('.close_r').bind(clickHandler, function() {
        closeAllPopup()
        $('.footnote_p').css("visibility", "hidden").hide();
    });
    //Footnote popup//    
    //Footnote popup//
    $('#pi_btn').bind(clickHandler, function() {
        closeAllPopup()
        $('.pi_p').css("visibility", "visible").show();
        $("#main_wrapper").addClass("p_popup");
        $(this).addClass("active");
    });
    $('.close_r').bind(clickHandler, function() {
        closeAllPopup()
        $('.pi_p').css("visibility", "hidden").hide();
    });
    //Footnote popup//

    function closeAllPopup() {
        $('.footnote_p').css("visibility", "hidden").hide();
        $('.pi_p').css("visibility", "hidden").hide();
        $("#main_wrapper").removeClass("p_popup");
        $("#pi_btn, #footnote ").removeClass("active");
    }


    // SITE NAV CODE START
    $('.logo').bind(clickHandler, function() {
        swithTab()
        $('.main_tab').toggle();
    });

    $('#tbutton_1').bind(clickHandler, function() {
        swithTab()
        $('.standing_tab').css("visibility", "visible").show();
        $(this).addClass("active");
    });
    $('#tbutton_2').bind(clickHandler, function() {
        swithTab()
        $('.ckd').css("visibility", "visible").show();
        $(this).addClass("active");
    });
    $('#tbutton_3').bind(clickHandler, function() {
        swithTab()
        $('.cia').css("visibility", "visible").show();
        $(this).addClass("active");
    });

    function swithTab() {
                $('.accordion').each(function(e) {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $('.panel').each(function(e) {
            if(this.style.maxHeight) {
                this.style.maxHeight = null;
            }
        });
        $('.standing_tab,.ckd,.cia').css("visibility", "hidden").hide();
        $("#tbutton_1,#tbutton_2,#tbutton_3").removeClass("active");
    }
    // SITE NAV CODE DONE



});


var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        $('.accordion').each(function(e) {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        var panel = this.nextElementSibling;
        this.classList.toggle("active");

        if(panel.style.maxHeight) {
            $('.accordion').removeClass('active');
            panel.style.maxHeight = null;
        }
        else {
            $('.panel').each(function(e) {
                if(this.style.maxHeight) {
                    this.style.maxHeight = null;
                }
            });
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    }
}
