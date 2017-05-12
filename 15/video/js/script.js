var video = document.getElementsByTagName('video')[0];
var playBtn = document.getElementById('play');
playBtn.addEventListener('click', play);
var stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stop);
var forwardBtn = document.getElementById('forward');
forwardBtn.addEventListener('click', forward);
var backwardBtn = document.getElementById('backward');
backwardBtn.addEventListener('click', backward);
var volumeoffBtn = document.getElementById('volumeoff');
volumeoffBtn.addEventListener('click', volumeoff);
var playContainer = document.getElementById('container');
var time = document.getElementById('time');
var volumerangeBtn = document.getElementById('volumerange');
volumerangeBtn.addEventListener('input', volumerange);
video.addEventListener('loadedmetadata', function() {
    time.innerHTML = Math.floor(video.currentTime / 60) + '.' + Math.floor(video.currentTime - Math.floor(video.currentTime / 60) * 60) + '/' + Math.floor(video.duration / 60) + '.' + Math.floor(video.duration - Math.floor(video.duration / 60) * 60);
});

var timer = 0;

function createInterval() {
    timer = setInterval(function() {
        playContainer.style.width = String(150 * video.currentTime / video.duration) + 'px';
        time.innerHTML = Math.floor(video.currentTime / 60) + '.' + Math.floor(video.currentTime - Math.floor(video.currentTime / 60) * 60) + '/' + Math.floor(video.duration / 60) + '.' + Math.floor(video.duration - Math.floor(video.duration / 60) * 60);
    }, 1000);
}

function play(e) {
    if (this.classList.contains('glyphicon-play')) {
        video.play();
        this.classList.remove('glyphicon-play');
        this.classList.add('glyphicon-pause');
        createInterval();
    } else {
        video.pause();
        this.classList.remove('glyphicon-pause');
        this.classList.add('glyphicon-play');
        clearInterval(timer);
    }
}

function stop() {
    video.pause();
    video.currentTime = 0;
    time.innerHTML = Math.floor(video.currentTime / 60) + '.' + Math.floor(video.currentTime - Math.floor(video.currentTime / 60) * 60) + '/' + Math.floor(video.duration / 60) + '.' + Math.floor(video.duration - Math.floor(video.duration / 60) * 60);
    playBtn.classList.remove('glyphicon-pause');
    playBtn.classList.add('glyphicon-play');
    playContainer.style.width = String(150 * video.currentTime / video.duration) + 'px';
    clearInterval(timer);
}

function volumeoff() {
    if (this.classList.contains('glyphicon-volume-off')) {
        video.muted = true;
        this.classList.remove('glyphicon-volume-off');
        this.classList.add('glyphicon-volume-up');
    } else {
        video.muted = false;
        this.classList.remove('glyphicon-volume-up');
        this.classList.add('glyphicon-volume-off');
    }
}

function forward() {
    video.playbackRate = (video.playbackRate < 2.5) ? video.playbackRate + 0.25 : 2.25;
}

function backward() {
    video.playbackRate = (video.playbackRate > 0.6) ? video.playbackRate - 0.2 : 0.6;
}

function volumerange() {
  video.volume = this.value;
}
