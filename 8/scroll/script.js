var container = document.getElementById('container');
var fixed = document.getElementById('fixed-block');
window.onscroll = function() {
    console.log(container.getBoundingClientRect().top);
    if (window.pageYOffset >= 3000 && window.pageYOffset <= 7000) {
          fixed.classList.add('fixed');
    }
    else fixed.classList.remove('fixed');
}
