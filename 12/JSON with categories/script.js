var goods = [];
var showGoods = function(arr) {
    var div = document.getElementById('goods');
    var str = '<ul>';
    arr.forEach(function(elem) {
        str += '<li><p>mane: ' + elem.name + '</p><p>price: ' + elem.price + '</p></li><input type="number" value="1" id="number"><input type="button" value="add" class="addBtn" data-id="' + elem.id + '"></form>';
    });
    str += '</ul>';
    div.innerHTML = str;
    initScript();
}

var addToBasket = function(e) {
    var id = (e.target).getAttribute('data-id');
    var amount = e.target.previousElementSibling.value;
    var basket = document.getElementById('basket');
    for (var el in goods) {
        if (goods[el].id == id) {
            var name = goods[el].name;
            var price = amount * goods[el].price;
        }
    }
    var str = "<p>" + name + ": " + amount + "</p><p>price: " + price + "</p>";
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

var getGoods = function(adr) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', adr, true);
    xhr.onload = function() {
        goods = JSON.parse(xhr.responseText);
        showGoods(goods);
    };
    xhr.send(null);
}

var generateMenu = function(arr) {
    var ul = document.getElementById('navbar');
    var str = '<li>'
    arr.forEach(function(elem) {
        str += '<a href="#">' + elem.name + '</a>';
    });
    str += '</li>';
    ul.addEventListener('click', function(e) {
        if (this != e.target) {
            arr.forEach(function(elem) {
                if (elem.name == e.target.textContent) {
                    var adr = elem.adress;
                    getGoods(adr);
                }
            })
        }
    });
    ul.innerHTML = str;
}

var callBackFunction = function(str) {
    var arr = JSON.parse(str);
    generateMenu(arr);
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
