var mainMenu = document.getElementById('main-menu');
var onMainMenu = function(e) {
  console.log(document.querySelectorAll('.menu > li'));
    [].forEach.call(/*e.target.parentElement.parentElement.children*/document.querySelectorAll('.menu > li'), function(elem) {
        elem.children[1].classList.remove('display-sub-menu');
    });
    console.log(e.target.name);
    e.target.nextElementSibling.classList.toggle('display-sub-menu');
    if(Number(e.target.name)>10){
      e.target.nextElementSibling.style.left = '120px';
    }
}
mainMenu.addEventListener('click', onMainMenu);
