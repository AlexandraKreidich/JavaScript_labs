var goods = [];
var showGoods = function(arr) {
    var div = document.getElementById('goods');
    var str = '<ul>';
    arr.forEach(function(elem) {
        str += '<li><p>name: ' + elem.name + '</p><p>price: ' + elem.price + '</p></li><input type="number" value="1" id="number"><input type="button" value="add" class="addBtn" data-id="' + elem.id + '"></form>';
    });
    str += '</ul>';
    div.innerHTML = str;
    initScript();
}

var addToBasket = function(e) {
    var id = (e.target).getAttribute('data-id');
    var amount = Number(e.target.previousElementSibling.value);
    var basket = document.getElementById('basket');
    var elements = document.getElementsByClassName('basket-element');
    console.log(elements);
    for (var el in goods) {
        if (goods[el].id == id) {
            var name = goods[el].name;
            var price = goods[el].price;
        }
    }
    var flag = 1;
    var regexp = /.{7}([0-9]+)/;
    if (elements.length != 0) {
        [].forEach.call(elements, function(el) {
            if (el.firstElementChild.innerText == name) {
              var am = el.children[1].innerText;
              var result = am.match(regexp);
              console.log()
              amount +=Number(result[1]);
              price *= amount;
                var str = "<p>" + name + "</p><p>Amount: " + amount + "</p><p>Price: " + price + "</p>";
                el.innerHTML = str;
                flag = 0;
            }
        });
        if (flag == 1) {
            price *= amount;
            var str = "<p>" + name + "</p><p>Amount: " + amount + "</p><p>Price: " + price + "</p>";
            var div = document.createElement('div');
            div.classList.add('basket-element');
            div.innerHTML = str;
            basket.appendChild(div);
        }
    } else {
        price *= amount;
        var str = "<p>" + name + "</p><p>Amount: " + amount + "</p><p>Price: " + price + "</p>";
        var div = document.createElement('div');
        div.classList.add('basket-element');
        div.innerHTML = str;
        basket.appendChild(div);
    }
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
