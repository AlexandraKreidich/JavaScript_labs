var time = 10;
var scroll=10;
/*var i = setInterval(function() {
        window.scrollBy(0, 50);
        if (window.scrollY + window.innerHeight >= 3000) {
          clearInterval(i);
        }
}, time);*/
var timerId = setTimeout(function tick() {
    window.scrollBy(0, 40);
    time+=5;
    if (window.scrollY + window.innerHeight >= 3000) {} else {
        timerId = setTimeout(tick, time);
    }
}, time);
