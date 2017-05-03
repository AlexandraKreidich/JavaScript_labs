var id = 0;

function Product(name, type, price, dateOfProd) {
    this.id = ++id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.dateOfProd = new Date(dateOfProd);
};

function FoodProduct(name, type, price, dateOfProd, exp, store) {
    Product.apply(this, [name, type, price, dateOfProd]);
    this.exp = new Date(exp);
    Object.defineProperty(this, 'store', {
        value: store,
        configurable: false,
        writable: false,
        enumerable: true
    });
};

FoodProduct.prototype = new Product();
FoodProduct.prototype.constructor = FoodProduct;

function Shop(name, adress, markup, income) {
    this.name = name;
    this.adress = adress;
    this.products = new Array();
    this.markup = markup;
    this.income = income;
    this.addProduct = function(prod, am) {
        am = am || 1;
        this.products.push({
            product: prod,
            ammount: am
        });
    };
    this.deleteProduct = function(prodName, am) {
        var price = 0;
        this.products = this.products.filter(function(elem) {
            if (elem.product.name == prodName) {
                if (elem.ammount <= am) {
                    price = elem.product.price * elem.ammount;
                    return false;
                } else {
                    elem.ammount -= am;
                    price = elem.product.price * am;
                }
            }
            return true;
        });
        this.income -= price;
    };
    this.cellProduct = function(prodName, am) {
        var price = 0;
        var tmp = this.markup;
        this.products = this.products.filter(function(elem) {
            if (elem.product.name == prodName) {
                if (elem.ammount <= am) {
                    price = (elem.product.price + tmp) * elem.ammount;
                    return false;
                } else {
                    elem.ammount -= am;
                    price = (elem.product.price + tmp) * am;
                }
            }
            return true;
        });
        this.income += price;
    };
    Object.defineProperty(this, 'toString', {
        get: function() {
            var str = '';
            this.products.forEach(function(elem) {
                str += 'продукт ' + elem.product.name + ' в количестве: ' + elem.ammount;
            });
            return "[магазин " + this.name + " находится по адресу " + this.adress + ". Список продуктов: " + str + ". Наценка магазина: " + this.markup + ", доход: " + this.income + ']';
        },
        set: function(e) {
            console.log("you can't change this property into " + e);
        }
    });
    Object.defineProperty(this, 'priceOfProducts', {
        get: function() {
            var sum = 0;
            this.products.forEach(function(elem) {
                sum += elem.product.price * elem.ammount;
            });
            return sum;
        }
    });
};
/*
  Prouct - (name, type, price, dateOfProd)
  FoodProduct - (name, type, price, dateOfProd, exp, store)
  Shop - (name, adress, markup, income)
*/
/*---------------------SHOP BELARUS--------------------------*/
var Belarus = new Shop("Belarus", "st.Dzerzhinskogo h.163", 15, 0);
var goodsForShopBelarus = new Array(new FoodProduct("eggs", "milk product", 3, "Apr 4, 2017", "Apr 14, 2017", 10), new FoodProduct("milk", "milk product", 2, "May 5, 2017", "May 25, 2017", 20), new FoodProduct("tomatoes", "vegetables", 3.5, "May 5, 2017", "Jun 5, 2017", 30),
    new FoodProduct("cucumbers", "vegetables", 3.9, "May 5, 2017", "Jun 5, 2017", 30), new FoodProduct("carrot", "vegetables", 0.5, "May 5, 2017", "Nov 5, 2017", 180),
    new FoodProduct("peach", "fruits", 4, "May 5, 2017", "May 20, 2017", 15), new FoodProduct("blueberry", "fruits", 10, "May 5, 2017", "May 19, 2017", 14),
    new FoodProduct("bread", "bread", 1.2, "May 5, 2017", "May 12, 2017", 7), new FoodProduct("donuts", "bread", 3, "May 5, 2017", "May 12, 2017", 7),
    new Product("pants", "clothes", 80, "May 5, 2017"), new Product("skirt", "clothes", 40, "May 5, 2017"),
    new Product("socks", "clothes", 2.23, "May 5, 2017"), new Product("shoes", "clothes", 140, "May 5, 2017"));
goodsForShopBelarus.forEach(function(elem) {
    Belarus.addProduct(elem, Math.floor(Math.random() * 100));
});

/*----------------------SHOP WAKEUP----------------------------*/
var Wakeup = new Shop("Wakeup", "st.Vrublevskogo h.190", 10, 0);
var goodsForShopWakeup = new Array(new FoodProduct("ice-cream", "milk product", 2, "Apr 4, 2017", "Aug 4, 2017", 90), new FoodProduct("milk", "milk product", 2, "May 5, 2017", "May 25, 2017", 20), new FoodProduct("potato", "vegetables", 1.5, "May 5, 2017", "Nov 5, 2017", 180),
    new FoodProduct("cucumbers", "vegetables", 5, "May 5, 2017", "Jun 5, 2017", 30), new FoodProduct("spinach", "vegetables", 0.5, "May 5, 2017", "May 11, 2017", 6),
    new FoodProduct("peach", "fruits", 4.4, "May 5, 2017", "May 20, 2017", 15), new FoodProduct("strawberry", "fruits", 10, "May 5, 2017", "May 19, 2017", 14),
    new FoodProduct("bread", "bread", 1, "May 5, 2017", "May 12, 2017", 7), new FoodProduct("donuts", "bread", 3, "May 5, 2017", "May 12, 2017", 7),
    new Product("shorts", "clothes", 35, "May 5, 2017"), new Product("skirt", "clothes", 45, "May 5, 2017"),
    new Product("socks", "clothes", 2.23, "May 5, 2017"), new Product("shoes", "clothes", 90, "May 5, 2017"));
goodsForShopWakeup.forEach(function(elem) {
    Wakeup.addProduct(elem, Math.floor(Math.random() * 100));
});

/*-----------------------------SHOP ALBUS------------------------*/
var Albus = new Shop("Albus", "st.Tisovaya h.9.3/4", 25, 0);
var goodsForShopAlbus = new Array(new FoodProduct("ice-cream", "milk product", 2, "Apr 4, 2017", "Aug 4, 2017", 90), new FoodProduct("cottage cheese", "milk product", 1.34, "May 5, 2017", "May 25, 2017", 20), new FoodProduct("potato", "vegetables", 1.5, "May 5, 2017", "Nov 5, 2017", 180),
    new FoodProduct("zucchini", "vegetables", 5.5, "May 5, 2017", "May 25, 2017", 20), new FoodProduct("spinach", "vegetables", 0.5, "May 5, 2017", "May 11, 2017", 6),
    new FoodProduct("pear", "fruits", 4, "May 5, 2017", "May 20, 2017", 15), new FoodProduct("strawberry", "fruits", 10, "May 5, 2017", "May 19, 2017", 14),
    new FoodProduct("bread", "bread", 1, "May 5, 2017", "May 12, 2017", 7), new FoodProduct("cake", "bread", 10, "May 5, 2017", "May 9, 2017", 4),
    new Product("shorts", "clothes", 35, "May 5, 2017"), new Product("skirt", "clothes", 69, "May 5, 2017"),
    new Product("socks", "clothes", 2.23, "May 5, 2017"), new Product("shoes", "clothes", 90, "May 5, 2017"));
goodsForShopAlbus.forEach(function(elem) {
    Albus.addProduct(elem, Math.floor(Math.random() * 100));
});

var onShop = function(e) {
    if (this != e.target)
        Market.showProductsForShop(e.target.value);
};

var onProduct = function(e) {
    var regexp = /\d+\s(.+)/;
    if (this != e.target) {
        var result = e.target.textContent.match(regexp);
        var prodName = result[1];
    }
}

var Market = {
    shops: new Array(),
    addShop: function(shop) {
        this.shops.push(shop);
    },
    generateListOfShops: function() {
        var row = document.getElementById('shops');
        var str = '<div class="btn-group">'
        this.shops.forEach(function(elem) {
            str += '<input type="button" class="btn btn-default shops-names" value="' + elem.name + '">';
        });
        str += '</div>';
        row.innerHTML = str;
        row.addEventListener('click', onShop);
    },
    showProductsForShop: function(nameOfShop) {
        var div = document.getElementById('goods');
        var str = '<div class="list-group">'
        this.shops.forEach(function(elem) {
            if (nameOfShop == elem.name) {
                elem.products.forEach(function(elem) {
                    str += '<a class="list-group-item"><span class="badge">' + elem.ammount + '</span> ' + elem.product.name + '</a>';
                });
            };
        });
        str += '</div>';
        div.innerHTML = str;
        div.addEventListener('click', onProduct);
    },
    showInfoAboutProduct: function (nameOfProd) {
      var div = document.getElementById('info');
      var str = '<div class="input-group">'
      this.
    }
};

Market.addShop(Belarus);
Market.addShop(Wakeup);
Market.addShop(Albus);
Market.generateListOfShops();
