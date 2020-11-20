const target = document.getElementById('sunmedia');
let isVideoPlaying = false;
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */

//const videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');
/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
//onInsertVideoWhenTargetIsVisible(target, videoElm);
//Calculate when video is on the screen viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
//Listener to check when the video is on the viewport
document.addEventListener('scroll', function () {
    const messageText = isInViewport(target) ?
    createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4') :
        console.log("The box is not visible in the viewport");

    //message.textContent = messageText;

}, {
    passive: true
});
//Create and add the video to the container, use autoplay in true and muted in true(because without this the video will not start)
function createVideoElement(path)
{
    if(!isVideoPlaying)
    {
        var video = document.createElement('video');
        video.src = path;
        video.muted = true;
        video.autoplay = true;
        target.appendChild(video);
        //Listener to delete video when ended
        video.addEventListener('ended',
        function (e) {
            isVideoPlaying = false;
            target.remove(video);
        });
        isVideoPlaying = true;
    }
}

