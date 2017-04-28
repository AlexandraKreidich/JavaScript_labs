var id = 0;

function Product(name, type, price, dateOfProd) {
    this.id = ++id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.dateOfProd = new Date(dateOfProd);
};

function FoodProduct(name, price, dateOfProd, exp, store) {
    Product.apply(this, [name, 'food', price, dateOfProd]);
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

var a = new FoodProduct("eggs", 10000, "Apr 4, 2017", "Apr 14, 2017", 10);
console.log(a);
a.store = 11;
console.log(a);
