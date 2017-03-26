/*вывести число минут и сеукунд до конца сегодняшнего дня*/

var now = new Date();

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

console.log(now);
console.log("minutes = " + minutes);
console.log("seconds = " + seconds);

var ammountOfSec = 24*3600;
var todayAmmountOfSec = hours*3600 + minutes*60 + seconds;
var diff = ammountOfSec - todayAmmountOfSec;

console.log(" ");
console.log("seconds per day: " + ammountOfSec);
console.log("seconds from today: " + todayAmmountOfSec);

function time() {
  var minutesEnd = Math.floor(diff/60);
  var secEnd = diff - minutesEnd*60;

  var p1 = document.getElementById('minutes');
  var p2 = document.getElementById('seconds');

  p1.innerHTML = 'количество минут до конца дня: ' + minutesEnd;
  p2.innerHTML = 'количество секунд до конца дня: ' + secEnd;
}

time();
