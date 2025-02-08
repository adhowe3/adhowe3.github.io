document.addEventListener('click', function() {
    var audio = document.querySelector('audio');
    audio.muted = false;
    audio.play();
});