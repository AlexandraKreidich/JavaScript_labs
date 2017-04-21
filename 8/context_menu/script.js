var div = document.getElementById('container');
var menu = document.getElementById('context-menu');
var button = document.getElementById('click-button');
div.addEventListener('contextmenu', function (e) {
  if(e.target != this.target){
    menu.classList.add('display');
  }
  else e.preventDefault();
});
div.addEventListener('click', function () {
  menu.classList.add('display');
});
button.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.style.top = e.clientY + 'px';
  menu.style.left = e.clientX + 'px';
  menu.classList.remove('display');
  e.stopPropagation();
});
var list = document.getElementById('list');
list.addEventListener('click', onList);
function onList(e) {
  var color = e.target.name;
  list.style.backgroundColor = color;
}
