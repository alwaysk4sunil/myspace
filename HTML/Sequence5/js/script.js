$(document).ready(function() {
    var clickHandler = 'tap';
    $(".TouchPoint").bind(clickHandler, function(e) {
        var pageNo = $(this).attr("goToPage");
        parent.loadPageFromChildPage(pageNo);
    });




    var myswiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        resistance: false,
        onSlideChangeStart: function(swiper) {

            //console.log("start")
        },
        onSlideChangeEnd: function(swiper) {
            if ($("#first").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $('.child2tab_2').css("visibility", "hidden").hide();
                $('.child2tab_1').css("visibility", "visible").show();
                $("#main_wrapper").addClass("active_1")
            } else if ($("#second").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $('.child3tab_2').css("visibility", "hidden").hide();
                $('.child3tab_1').css("visibility", "visible").show();
                $("#main_wrapper").addClass("active_2")
            } else if ($("#third").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $('.child2tab_2').css("visibility", "hidden").hide();
                $('.child2tab_1').css("visibility", "visible").show();
                $('.child4tab_2').css("visibility", "hidden").hide();
                $('.child4tab_1').css("visibility", "visible").show();
                $("#main_wrapper").addClass("active_3")
            } else if ($("#fourth").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $('.child3tab_2').css("visibility", "hidden").hide();
                $('.child3tab_1').css("visibility", "visible").show();
                $("#main_wrapper").addClass("active_4")
            } else if ($("#fifth").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $("#main_wrapper").addClass("active_5")
            } else if ($("#sixth").hasClass("swiper-slide-active")) {
                removeClassWrap()
                $("#main_wrapper").addClass("active_6")
            }
            console.log("end")
        }
    });

    function removeClassWrap() {
        $("#main_wrapper").removeClass("active_1 active_2 active_3 active_4 active_5 active_6 active_7 active_8 active_9 active_10");
    }

    // LOCALHOST LINKING STANDARD-tab-1
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
    $('#ckd-btn1,#ckd-btn1_d').on(clickHandler, function() {
        localStorage.setItem("goToSlide", 2 - 1);
        parent.loadPageFromChildPage(3);
    })
    $('#ckd-btn4,#ckd-btn4_d').on(clickHandler, function() {
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

    //child2tab_2btn //
    $('.child2tab_2btn').bind(clickHandler, function() {
        $('.child2tab_2').css("visibility", "visible").show();
        $('.child2tab_1').css("visibility", "hidden").hide();
    });
    $('.child2tab_1btn').bind(clickHandler, function() {
        $('.child2tab_2').css("visibility", "hidden").hide();
        $('.child2tab_1').css("visibility", "visible").show();
    });
    //child2tab_2btn End//

    // Local-storage

    // LOCALHOST WORKS HERE
    if (localStorage.goToSlide == 3 - 1) {

        if ((localStorage.page5child2 != null || localStorage.page5child2 !== undefined) && localStorage.page5child2) {
            $('.child2tab_2btn').trigger(clickHandler);
            localStorage.removeItem("page5child2");
        } else {
            $('.child2tab_1btn').trigger(clickHandler);
        }
        myswiper.slideTo(1, 0)
        localStorage.removeItem('goToSlide')
    }
    if (localStorage.goToSlide == 3 - 2) {
        myswiper.slideTo(2, 0)
        localStorage.removeItem('goToSlide')
    }
    if (localStorage.goToSlide == 3 - 3) {
        myswiper.slideTo(3, 0)
        localStorage.removeItem('goToSlide')
    }
    if (localStorage.goToSlide == 3 - 4) {
        myswiper.slideTo(4, 0)
        localStorage.removeItem('goToSlide')
    }


    function fuctionCloseAll() {
        $('.reference_p').css("visibility", "hidden").hide();
        $('.si_p').css("visibility", "hidden").hide();
        closeAllPopup()
    }
    //References popup//
    $('#reference_btn').bind(clickHandler, function() {
        fuctionCloseAll()
        $('.reference_p').css("visibility", "visible").show();
    });
    $('.close_r').bind(clickHandler, function() {
        $('.reference_p').css("visibility", "hidden").hide();
    });
    //References popup//

    //Study popup//
    $('#si_btn').bind(clickHandler, function() {
        fuctionCloseAll()
        $('.si_p').css("visibility", "visible").show();
    });
    $('.close_s').bind(clickHandler, function() {
        $('.si_p').css("visibility", "hidden").hide();
    });
    //Study popup//


    //child3tab_2btn //
    $('.child3tab_2btn').bind(clickHandler, function() {
        $('.child3tab_2').css("visibility", "visible").show();
        $('.child3tab_1').css("visibility", "hidden").hide();
    });
    $('.child3tab_1btn').bind(clickHandler, function() {
        $('.child3tab_2').css("visibility", "hidden").hide();
        $('.child3tab_1').css("visibility", "visible").show();
    });
    //child3tab_2btn End//

    //child4tab_2btn //
    $('.child4tab_2btn').bind(clickHandler, function() {
        $('.child4tab_2').css("visibility", "visible").show();
        $('.child4tab_1').css("visibility", "hidden").hide();
    });
    $('.child4tab_1btn').bind(clickHandler, function() {
        $('.child4tab_2').css("visibility", "hidden").hide();
        $('.child4tab_1').css("visibility", "visible").show();
    });
    //child4tab_2btn End//

    //child5tab_2btn //
    $('.child5tab_2btn').bind(clickHandler, function() {
        $('.child5tab_2').css("visibility", "visible").show();
        $('.child5tab_1').css("visibility", "hidden").hide();
    });
    $('.child5tab_1btn').bind(clickHandler, function() {
        $('.child5tab_2').css("visibility", "hidden").hide();
        $('.child5tab_1').css("visibility", "visible").show();
    });
    //child4tab_2btn End//

    //child6tab_2btn //
    $('.child6tab_2btn').bind(clickHandler, function() {
        $('.child6tab_2').css("visibility", "visible").show();
        $('.child6tab_1').css("visibility", "hidden").hide();
    });
    $('.child6tab_1btn').bind(clickHandler, function() {
        $('.child6tab_2').css("visibility", "hidden").hide();
        $('.child6tab_1').css("visibility", "visible").show();
    });
    //child4tab_2btn End//


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
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $('.panel').each(function(e) {
            if (this.style.maxHeight) {
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
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        var panel = this.nextElementSibling;
        this.classList.toggle("active");

        if (panel.style.maxHeight) {
            $('.accordion').removeClass('active');
            panel.style.maxHeight = null;
        } else {
            $('.panel').each(function(e) {
                if (this.style.maxHeight) {
                    this.style.maxHeight = null;
                }
            });
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    }
}
