var i = 0;
var N = 4;
var generateHTML = function(elem) {
    var div = document.createElement('div');
    var flag = (elem.flag) ? "Is available" : "Is NOT available";
    var str = "<img src='img/" + elem.img + "'><p>Name: " + elem.name + "</p><p>Price: " + elem.price + "</p><p>" + flag + "</p><p>" + elem.text + "</p><form><input type='number' value='1' id='number'><input type='button' value='add' class='addBtn' data-id='" + elem.id + "'></form><br>";
    div.innerHTML = str;
    return div;
}
var arr = [];
var addToBasket = function(e) {

    var id = (e.target).getAttribute('data-id');
    var amount = e.target.previousElementSibling.value;
    var basket = document.getElementById('basket');
    for (var el in arr) {
        if (arr[el].id == id) var name = arr[el].name;
    }
    var str = "<p>" + name + ": " + amount + "</p>";
    var p = document.createElement(p);
    p.innerHTML = str;
    basket.appendChild(p);
}


var initScript = function() {
    var btns = document.getElementsByClassName('addBtn');
    [].forEach.call(btns, function(elem) {
        elem.addEventListener('click', addToBasket);
    });
}

var callBackFunction = function(str) {
    arr = JSON.parse(str);
    console.log(arr);
    var container = document.getElementById('container');
    for (var a = i; a < i + N; a++) {
        var html = generateHTML(arr[a]);
        container.appendChild(html);
    }
    i += N;
    initScript();
}

var request = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'info.json', true);
    xhr.onload = function() {
        callBackFunction(xhr.responseText);
    };
    xhr.send(null);
}

request();
window.onscroll = function(){
  var cont = document.getElementById('container');
  cont.getBoundingClientRect();
  console.log(cont.getBoundingClientRect().bottom);
  if(cont.getBoundingClientRect().bottom == window.innerHeight){
    request();
  }
}
