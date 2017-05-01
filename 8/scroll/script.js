var container = document.getElementById('container');
var fixed = document.getElementById('fixed-block');
window.onscroll = function() {
    console.log(container.getBoundingClientRect().top);
    if(window.pageYOffset < 3000){
      fixed.classList.remove('fixed');
      fixed.classList.remove('absolute-bottom');
    }
    if (window.pageYOffset >= 3000 && window.pageYOffset <= 7000) {
        fixed.classList.add('fixed');
    }
    if(window.pageYOffset >= 7000){
      fixed.classList.add('absolute-bottom');
      fixed.classList.remove('fixed');
    }
}
