'use strict';

function onYouTubePlayerAPIReady() {
    var playerYoutube;

    playerYoutube = new YT.Player("video-youtube__content", {
        videoId: "cxXUEDbOxgo",
        events: {
            onReady: onYouTubePlayerReady
        }
    });
}

function onYouTubePlayerReady(event) {
    // https://developers.google.com/youtube/iframe_api_reference#Events
    var targetYoutubeVideo = event.target;
    var videoDomElem = document.getElementById(
        event.target.getIframe().getAttribute("id")
    );
    var newPlayBtn = videoDomElem.nextElementSibling;

    newPlayBtn.addEventListener("click", function(event) {
        targetYoutubeVideo.playVideo();
        this.classList.add('hidden');
        videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
        videoDomElem.parentNode.classList.remove('video-youtube_overlay');
    });
}
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------
   Click Settings Account
 * ------------------------------------------------------------------------- */

function openSettings() {
    let click = document.getElementById("open-settings");
    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {
        click.style.display = "none";
    }
}

/* -------------------------------------------------------------------------
  End Click Settings Account
 * ------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------
   Click Button Help
 * ------------------------------------------------------------------------- */
function helpMe() {
    let click = document.getElementById("help-me");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else { 
        click.style.display = "none";
    }
}


//  JQ 
$('.login_btn').on('click',function(event){
    event.preventDefault();
    $('.content_login').fadeOut();
    $('.log-mainwrp').fadeIn();

    $('.main-contain').addClass('another-bg');
  
});

// $('.ask-pannel a').click()

$('.ask-pannel a').on('click',function(event){
    event.preventDefault();
    $('.ask-pannel a').fadeOut();
    $('.form-ask').fadeIn();


});
