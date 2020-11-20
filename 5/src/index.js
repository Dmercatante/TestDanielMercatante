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

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    const messageText = isInViewport(target) ?
    createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4') :
        console.log("The box is not visible in the viewport");

    //message.textContent = messageText;

}, {
    passive: true
});

function createVideoElement(path)
{
    if(!isVideoPlaying)
    {
        var video = document.createElement('video');
        video.id = "myVideo";
        video.src = path;
        video.muted = true;
        video.autoplay = true;
        target.appendChild(video);
        
        document.getElementById('myVideo').addEventListener('ended',myHandler,false);
        function myHandler(e) {
            target.remove(document.getElementById('myVideo'));
            isVideoPlaying = false;
        }
        isVideoPlaying = true;
    }
}

