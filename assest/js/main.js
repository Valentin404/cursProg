// Тут пиши описание курса
function paintThecurrentCours(index) {
    // window.scrollTo(pageYOffset, pageYOffset + 500)
    let e = list_Our_Courses[index];
    document.querySelector(
        ".root__courses"
    ).innerHTML = `<div class='description'>
    <div class='description-title' >${e.title}</div>
       <a name="currentCurs"> 
       <img src='${e.img}' class='description-img'alt=''/>
        </a>
        <div class='description-text font20'> ${e.text}</div>
        <div class='description-text font20'> 
        <h4>В курсе будет ${e.duration.number_of_lessons} уроков  (${e.duration.hours} часов)</h4>
        <p>Которые вы можете просмотреть в удобное время</p>
        <h4>Длительность курса ${e.duration.months} месяцев (${e.duration.quanity_per_week} раз в неделю)</р>
        </div>
        
        <div class='description-data font20'>Дата начала курса: ${e.start}</div>
        <div class='description-price font20'> ${e.price.$_max}$</div>
    </div>`;
}

const AllEventForIndex = () => {
    const containre_courses = document.getElementById("containre_courses")
    if (containre_courses) {

        containre_courses.addEventListener("click", (e) => {
            if (e.target.value + 1) {
                paintThecurrentCours(+e.target.value);
            }
        });


        containre_courses.addEventListener("touchstart", (e) => {
            if (e.target.value + 1) {
                paintThecurrentCours(+e.target.value);
            }

        });
    }
}
AllEventForIndex()


document.querySelector(".submenu").addEventListener("Touch", (e) => {
    console.log(e.target.className);
    if (e.target.className + 1) {
        paintThecurrentCours(+e.target.className);
    }
});

jQuery(document).on(
    "ready",
    (function ($) {
        "use strict";

        /*--------------------------
                                                                                                                                                                                                                    STICKY MAINMENU
                                                                                                                                                                                                                ---------------------------*/
        $("#mainmenu-area").sticky({
            topSpacing: 0,
        });

        /*---------------------------
                                                                                                                                                                                                                    SMOOTH SCROLL
                                                                                                                                                                                                                -----------------------------*/
        // $(
        //     'ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop, a.enroll-button'
        // ).on("click", function (event) {
        //     var id = $(this).attr("href");
        //     var offset = 60;
        //     var target = $(id).offset().top - offset;
        //     $("html, body").animate({
        //             scrollTop: target,
        //         },
        //         1500,
        //         "easeInOutExpo"
        //     );
        //     event.preventDefault();
        // });

        /*----------------------------
                                                                                                                                                                                                                    MOBILE & DROPDOWN MENU
                                                                                                                                                                                                                ------------------------------*/
        jQuery(".stellarnav").stellarNav({
            theme: "dark",
            breakpoint: 900,
        });

        /*----------------------------
                                                                                                                                                                                                                    SCROLL TO TOP
                                                                                                                                                                                                                ------------------------------*/
        // $(window).scroll(function () {
        //     var $totalHeight = $(window).scrollTop();
        //     var $scrollToTop = $(".scrolltotop");
        //     if ($totalHeight > 300) {
        //         $(".scrolltotop").fadeIn();
        //     } else {
        //         $(".scrolltotop").fadeOut();
        //     }

        //     if ($totalHeight + $(window).height() === $(document).height()) {
        //         $scrollToTop.css("bottom", "90px");
        //     } else {
        //         $scrollToTop.css("bottom", "20px");
        //     }
        // });

        /*--------------------------
                                                                                                                                                                                                                   PARALLAX BACKGROUND
                                                                                                                                                                                                                ----------------------------*/
        // $(window).stellar({
        //     responsive: true,
        //     positionProperty: "position",
        //     horizontalScrolling: false,
        // });

        /*---------------------------
	    HOME SLIDER
	-----------------------------*/
        var $homeSlider = $(".welcome-slider-area");
        $homeSlider.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            autoplay: true,
            autoplayTimeout: 8000,
            margin: 0,
            /*animateIn: 'fadeIn',
                                                                                                                                                                                                                                                                                                                          animateOut: 'fadeOut',*/
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
            },
        });

        /*------------------------------
                                                                                                                                                                                                                    VIDEO POPUP
                                                                                                                                                                                                                --------------------------------*/
        // var $videoModal = $(".video-area-popup");
        // $videoModal.modalVideo({
        //     channel: "youtube",
        // });
        const contVideo = document.querySelector('.contVideo')
        let isFirstStart = true;
        const video = document.querySelector('.video-area-popup')
        if (contVideo && video) {


            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: 'Dv7gLpW91DM',
                    playerVars: {
                        'playsinline': 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }

            function onPlayerReady(event) {
                event.target.playVideo();
            }
            var done = false;

            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !done) {
                    //   window.stopVideo = player.stopVideo
                    if (isFirstStart) {
                        // setTimeout(window.stopVideo, 2000);
                        isFirstStart = false
                    }
                    done = true;
                }
            }


            window.stopVideo = function stopVideo() {
                player.stopVideo();

            }

            setTimeout(onYouTubeIframeAPIReady, 2000)


            video.onclick = () => {
                contVideo.classList.add('active')
            }
            contVideo.onclick = e => {
                if (e.target.className.includes('contVideo')) {
                    contVideo.classList.remove('active')
                    window.stopVideo()
                }

            }

        }
        /*---------------------------
                                                                                                                                                                                                                  MICHIMP INTEGRATION
                                                                                                                                                                                                              -----------------------------*/
        $("#mc-form").ajaxChimp({
            url: "http://intimissibd.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=4af1f9af4c", //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === "success") {
                    $(".subscriber-form input, .subscriber-form button").hide();
                }
            },
        });

        /*---------------------------
                                                                                                                                                                                                                    COURSE SLIDER
                                                                                                                                                                                                                -----------------------------*/
        var $courseCarousel = $(".course-list");
        $courseCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: true,
            navText: [
                '<i class="fa fa-long-arrow-left"></i> Prev',
                'Next <i class="fa fa-long-arrow-right"></i>',
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
                1900: {
                    items: 4,
                },
            },
        });

        /*---------------------------
                                                                                                                                                                                                                    TESTMONIAL SLIDER
                                                                                                                                                                                                                -----------------------------*/
        var $testmonialCarousel = $(".testmonial-slider");
        $testmonialCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: false,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
            },
        });

        /*---------------------------
                                                                                                                                                                                                                    CLIENT SLIDER
                                                                                                                                                                                                                -----------------------------*/
        var $clientCarousel = $(".client-slider");
        $clientCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: true,
            navText: [
                '<i class="fa fa-long-arrow-left"></i> Prev',
                'Next <i class="fa fa-long-arrow-right"></i>',
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
                1200: {
                    items: 5,
                },
                1900: {
                    items: 5,
                },
            },
        });

        /*--------------------------
                                                                                                                                                                                                                    FACT COUNTERING
                                                                                                                                                                                                                ---------------------------*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*--------------------------
                                                                                                                                                                                                                    ACTIVE WOW JS
                                                                                                                                                                                                                ----------------------------*/
        new WOW().init();

        /*---------------------------
                                                                                                                                                                                                                    PLACEHOLDER ANIMATION
                                                                                                                                                                                                                ----------------------------*/
        Placeholdem(document.querySelectorAll("[placeholder]"));
    })(jQuery)
);

jQuery(window).on("load", function () {
    "use strict";
    /*--------------------------
                                                                                                              PRE LOADER
                                                                                                          ----------------------------*/
    $(".preeloader").fadeOut(1000);
});

// buttonSumbit

// document.getElementById("contact-form").addEventListener("click", (e) => {
//     if (e.target.id == "buttonSumbit") {
//         document.getElementById("form-name").value = "";
//         document.getElementById("form-email").value = "";
//         document.getElementById("form-phone").value = "";
//         document.getElementById("form-message").value = "";
//     }
// });