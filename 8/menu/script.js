var mainMenu = document.getElementById('main-menu');
var subFirst = [];
var subSecond = [];
var initElems = function() {
    var arr = document.getElementsByClassName('submenu');
    var i = 0;
    var j = 0;
    [].forEach.call(arr, function(elem) {
        if (elem.className == "submenu") subFirst[i++] = elem;
        else subSecond[j++] = elem;
    })
}

var delClass = function(arr, cls) {
    arr.forEach(function(elem) {
        elem.classList.remove(cls);
    })
}

var onMainMenu = function(e) {
    if (Number(e.target.name) < 10) {
        delClass(subFirst, "display-submenu");
        delClass(subSecond, "display-submenu");
    }
    if (Number(e.target.name) < 100) {
        delClass(subSecond, "display-submenu");
    }
    if (e.target.nextElementSibling)
        e.target.nextElementSibling.classList.toggle("display-submenu");
}
initElems();
mainMenu.addEventListener('click', onMainMenu);
