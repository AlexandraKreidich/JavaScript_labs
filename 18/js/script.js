window.onload = function() {
    var audio = document.getElementsByTagName('audio')[0];
    var time = Number(localStorage.getItem('time'));
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
    audio.addEventListener('loadedmetadata', function() {
        var time = Number(localStorage.getItem('time'));
        audio.currentTime = Math.floor(time);
        time.innerHTML = Math.floor(audio.currentTime / 60) + '.' + Math.floor(audio.currentTime - Math.floor(audio.currentTime / 60) * 60) + '/' + Math.floor(audio.duration / 60) + '.' + Math.floor(audio.duration - Math.floor(audio.duration / 60) * 60);
    });

    var timer = 0;

    function createInterval() {
        timer = setInterval(function() {
            localStorage.setItem('time', audio.currentTime);
            console.log(audio.currentTime);
            playContainer.style.width = String(150 * audio.currentTime / audio.duration) + 'px';
            time.innerHTML = Math.floor(audio.currentTime / 60) + '.' + Math.floor(audio.currentTime - Math.floor(audio.currentTime / 60) * 60) + '/' + Math.floor(audio.duration / 60) + '.' + Math.floor(audio.duration - Math.floor(audio.duration / 60) * 60);
        }, 1000);
    }

    function play(e) {
        if (this.classList.contains('glyphicon-play')) {
            audio.play();
            var time = Number(localStorage.getItem('time'));
            console.log("time: " + time);
            audio.currentTime = (time != null) ? time : audio.currentTime;
            this.classList.remove('glyphicon-play');
            this.classList.add('glyphicon-pause');
            createInterval();
        } else {
            audio.pause();
            this.classList.remove('glyphicon-pause');
            this.classList.add('glyphicon-play');
            clearInterval(timer);
        }
    }

    function stop() {
        audio.pause();
        audio.currentTime = 0;
        time.innerHTML = Math.floor(audio.currentTime / 60) + '.' + Math.floor(audio.currentTime - Math.floor(audio.currentTime / 60) * 60) + '/' + Math.floor(audio.duration / 60) + '.' + Math.floor(audio.duration - Math.floor(audio.duration / 60) * 60);
        playBtn.classList.remove('glyphicon-pause');
        playBtn.classList.add('glyphicon-play');
        playContainer.style.width = String(150 * audio.currentTime / audio.duration) + 'px';
        clearInterval(timer);
    }

    function volumeoff() {
        if (this.classList.contains('glyphicon-volume-off')) {
            audio.muted = true;
            this.classList.remove('glyphicon-volume-off');
            this.classList.add('glyphicon-volume-up');
        } else {
            audio.muted = false;
            this.classList.remove('glyphicon-volume-up');
            this.classList.add('glyphicon-volume-off');
        }
    }

    function forward() {
        audio.playbackRate = (audio.playbackRate < 2.5) ? audio.playbackRate + 0.25 : 2.25;
    }

    function backward() {
        audio.playbackRate = (audio.playbackRate > 0.6) ? audio.playbackRate - 0.2 : 0.6;
    }

    function volumerange() {
        audio.volume = this.value;
    }


};
