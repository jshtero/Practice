document.getElementById('revealButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('rickRollVideo');
    if (videoContainer.classList.contains('hidden')) {
        videoContainer.classList.remove('hidden');
        video.play();
    }
});

document.getElementById('revealButton').addEventListener('click', function() {
    var image = document.getElementById('goldImage');
    var audio = document.getElementById('popAudio');

    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');

        setTimeout(function() {
            audio.play();
        }, 1000); // 2 seconds delay
    }
});
