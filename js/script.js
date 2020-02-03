'use strict';

// function onYouTubePlayerAPIReady() {
//     var playerYoutube;
//
//     playerYoutube = new YT.Player("video-youtube__content", {
//         videoId: "cxXUEDbOxgo",
//         events: {
//             onReady: onYouTubePlayerReady
//         }
//     });
// }
//
// function onYouTubePlayerReady(event) {
//     // https://developers.google.com/youtube/iframe_api_reference#Events
//     var targetYoutubeVideo = event.target;
//     var videoDomElem = document.getElementById(
//         event.target.getIframe().getAttribute("id")
//     );
//     var newPlayBtn = videoDomElem.nextElementSibling;
//
//     newPlayBtn.addEventListener("click", function(event) {
//         targetYoutubeVideo.playVideo();
//         this.classList.add('hidden');
//         videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
//         videoDomElem.parentNode.classList.remove('video-youtube_overlay');
//     });
// }
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------
   Click Settings Account
 * ------------------------------------------------------------------------- */

$('#openset').on('click',function(event){
    event.preventDefault();
    $("#open-settings").fadeToggle().css("display", "flex");
});


/* -------------------------------------------------------------------------
  End Click Settings Account
 * ------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------
   Click Button Help
 * ------------------------------------------------------------------------- */
// function helpMe() {
//     let click = document.getElementById("help-me");
//     if (click.style.display === "none") {
//         click.style.display = "block";
//     } else {
//         click.style.display = "none";
//     }
// }

$('#help-btn').on('click',function(event){
    event.preventDefault();
    $(".ask-pannel").fadeToggle();
});



//  JQ 
$('.login_btn').on('click',function(event){
    event.preventDefault();
    $('.content_login').fadeOut();
    $('.log-mainwrp').fadeIn();

    $('.main-contain').addClass('another-bg');
    $('.nav-wrp').css('background', '#FAC2C2');

});

/* -------------------------------------------------------------------------
   Click Open chat with human
 * ------------------------------------------------------------------------- */

$('.ask-pannel a').on('click',function(event){
    event.preventDefault();
    $('.ask-pannel a').fadeOut();
    $('.form-ask').fadeIn();
    $('.close-window').css('display', "none");
    $('.arrow').fadeIn();


});

/* -------------------------------------------------------------------------
   Click button - back in Chat
 * ------------------------------------------------------------------------- */

$('.arrow').on('click',function(event){
    event.preventDefault();
    $('.form-ask').fadeOut();
    $('.ask-pannel a').fadeIn();
    $('.arrow').fadeOut();
    $('.close-window').css('display', "block");


});


// video-2

var p = $(".popup__overlay");

$(".popup__toggle").click(function() {
    p.css("display", "block");
});
p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css("display", "none");
    }
});
$(".popup__close").click(function() {
    p.css("display", "none");
});


//video popup


function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    //div.style.display = state == 'hide' ? 'none' : '';
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
        '{"event":"command","func":"' + func + '","args":""}',
        "*"
    );
}

$(".popup__toggle").click(function() {
    p.css("visibility", "visible").css("opacity", "1");
});

p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
        $(p)
            .css("visibility", "hidden")
            .css("opacity", "0");
        toggleVideo("hide");
    }
});

$(".popup__close").click(function() {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
});

var closeModalAnywhere = document.getElementById("myModal")
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == closeModalAnywhere) {
        closeModalAnywhere.style.display = "none";
    }
}


// Button ShowMore

$(".show-more").click(function() {
    $(".education-top").css({'height' : 'max-content', 'transition':'1s'});
});


// Close Carf on my-dating.html

$('#close-1').on('click',function(event){
    event.preventDefault();
    $(".close-1").fadeToggle().css("display", "flex");
    $(".close-2").css("margin-top", "37px");
});
$('#close-2').on('click',function(event){
    event.preventDefault();
    $(".close-2").fadeToggle().css("display", "flex");

});
$('#close-3').on('click',function(event){
    event.preventDefault();
    $(".close-3").fadeToggle().css("display", "flex");

});
$('#close-4').on('click',function(event){
    event.preventDefault();
    $(".close-4").fadeToggle().css("display", "flex");

});
$('#close-5').on('click',function(event){
    event.preventDefault();
    $(".close-5").fadeToggle().css("display", "flex");

});


// Close window


$('.close-window').on('click',function(event){
    let back =  $('.ask-pannel');
    back.fadeOut();
});



$('.click-for-video').click(function() {
    this.style.display = 'none';
    $('div.youtube').css('display', 'block');
    $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/cxXUEDbOxgo?autoplay=1');
});
