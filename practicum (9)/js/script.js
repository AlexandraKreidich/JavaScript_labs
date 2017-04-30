var items = [{
        name: "Шоколадный тарт",
        img: "cake3.jpg",
        price: "30$",
        category: "торты"
    },
    {
        name: "Торт с розочками",
        img: "cake4.jpg",
        price: "48$",
        category: "торты"
    },
    {
        name: "Летний тарт",
        img: "cake5.jpg",
        price: "64$",
        category: "торты"
    },
    {
        name: "Двойной торт",
        img: "cake6.jpg",
        price: "33$",
        category: "торты"
    },
    {
        name: "Ягодный торт",
        img: "cake7.jpg",
        price: "67$",
        category: "торты"
    },
    {
        name: "Шоколадные пончики",
        img: "donut.jpg",
        price: "46$",
        category: "пончики"
    },
    {
        name: "Пончики с белым шоколадом",
        img: "donut2.jpg",
        price: "23$",
        category: "пончики"
    },
    {
        name: "Пончик Маша Кухарчук",
        img: "donut3.jpg",
        price: "12$",
        category: "пончики"
    },
    {
        name: "Цветные пончики",
        img: "donut4.jpg",
        price: "9$",
        category: "пончики"
    },
    {
        name: "Ванильные пончики",
        img: "donut5.jpg",
        price: "46$",
        category: "пончики"
    },
    {
        name: "Пончики в глазури",
        img: "donut6.jpg",
        price: "23$",
        category: "пончики"
    },
    {
        name: "Мороженое на палочке с малиной",
        img: "ice.jpg",
        price: "3$",
        category: "мороженое"
    },
    {
        name: "Мороженое фруктовое ассорти",
        img: "ice2.jpg",
        price: "2$",
        category: "мороженое"
    },
    {
        name: "Мороженое в рожке",
        img: "ice3.jpg",
        price: "5$",
        category: "мороженое"
    },
    {
        name: "Мороженое в шоколаде",
        img: "ice4.jpg",
        price: "10$",
        category: "мороженое"
    },
    {
        name: "Мороженое из фруктов",
        img: "ice5.jpg",
        price: "3$",
        category: "мороженое"
    },
    {
        name: "Мороженое на палочке с карамелью",
        img: "ice6.jpg",
        price: "5$",
        category: "мороженое"
    },
    {
        name: "Мороженое в рожке с ванилью",
        img: "ice7.jpg",
        price: "5$",
        category: "мороженое"
    },
    {
        name: "Торт ко дню рождения",
        img: "cake.jpg",
        price: "70$",
        category: "торты"
    },
    {
        name: "Торт клубничный",
        img: "cake2.jpg",
        price: "74$",
        category: "торты"
    },
    {
        name: "Капкейки горький шоколад",
        img: "cupcake.jpg",
        price: "30$",
        category: "капкейки"
    },
    {
        name: "Капкейки с шоколадными каплями",
        img: "cupcake2.jpg",
        price: "70$",
        category: "капкейки"
    },
    {
        name: "Капкейки с малиной",
        img: "cupcake3.jpg",
        price: "20$",
        category: "капкейки"
    },
    {
        name: "Капкейки с какао",
        img: "cupcake4.jpg",
        price: "46$",
        category: "капкейки"
    },
    {
        name: "Капкейки весенний цветок",
        img: "cupcake5.jpg",
        price: "49$",
        category: "капкейки"
    },
    {
        name: "Капкейки шоколадные",
        img: "cupcake6.jpg",
        price: "16$",
        category: "капкейки"
    },
    {
        name: "Капкейки с посыпкой",
        img: "cupcake7.jpg",
        price: "66$",
        category: "капкейки"
    },
    {
        name: "Капкейки от Леры Шкляник",
        img: "cupcake8.jpg",
        price: "100$",
        category: "капкейки"
    }
];

var categories = ['торты', 'капкейки', 'пончики', 'мороженое'];
var n = 6;
var articles = document.getElementById('items');

function generateCategoryButtonsVert(categories) {
    var div = document.getElementById('btn-group-vert');
    var input = null;
    for (var elem in categories) {
        input = document.createElement('input');
        input.setAttribute('type', 'button');
        input.setAttribute('value', categories[elem]);
        input.classList.add('btn');
        input.classList.add('btn-default');
        div.appendChild(input);
    }
    div.addEventListener('click', onVertMenu);
}

function onVertMenu(e) {
    articles.innerHTML = "";
    var category = e.target.value;
    var i = (category == 'все') ? 1 : 0;
    items.forEach(function(item) {
        if (item.category == category || i) {
            showItem(item);
        }
    });
}

function generateCategoryButtons(categories) {
    var select = document.getElementById('categories');
    for (var elem in categories) {
        var opt = new Option(categories[elem], categories[elem]);
        select.appendChild(opt);
    }
}


function collectInfo() {
    articles.innerHTML = "";
    var keyWords = (!form.key.value) ? /.*/ : form.key.value;
    form.key.value = '';
    var regexp = new RegExp(keyWords, 'i');
    var from = form.elements.from.value;
    var to = form.elements.to.value;
    var select = form.select;
    var category = select.options[select.selectedIndex].value;
    var i = (category == 'все') ? 1 : 0;
    var selectedItems = items.filter(function(item) {
        if (regexp.test(item.name) && (item.category == category || i) && (parseInt(item.price) >= Number(from) && parseInt(item.price) <= Number(to))) return true;
        else return false;
    });
    selectedItems.forEach(function(e) {
        var i = 1;
        if (i % 3 == 0) showItem();
        else showItem(e);
        i++
    });
}

var form = document.forms.search;
var searchButton = form.searchButton;
searchButton.addEventListener('click', collectInfo);


function showItem(e) {
    if (arguments.length != 0) {
        var item = document.createElement('div');
        item.classList.add('col-md-4');
        item.innerHTML = '<a href="#" class="img-thumbnail"> <img src="img/' + e.img + '"></a> <div class="caption"> <h3>' + e.name + '</h3> <p>' + e.price + '</p></div>';
        articles.appendChild(item);
    } else {
        item = document.createElement('div');
        item.classList.add('clearfix');
        articles.appendChild(item);
    }
}

generateCategoryButtons(categories);
generateCategoryButtonsVert(categories);
collectInfo();
