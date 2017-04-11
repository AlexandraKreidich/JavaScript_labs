var names = new Array(
    "Allen", "Bob", "Carlton",
    "David", "Ernie", "Foster",
    "George", "Howard", "Ian",
    "Jeffery", "Kenneth", "Lawrence",
    "Michael", "Nathen", "Orson",
    "Peter", "Quinten", "Reginald",
    "Stephen", "Thomas", "Morris",
    "Victor", "Walter", "Xavier",
    "Charles", "Anthony", "Gordon",
    "Percy", "Conrad", "Quincey",
    "Armand", "Jamal", "Andrew",
    "Matthew", "Mark", "Gerald",
    "Alice", "Bonnie", "Cassie",
    "Donna", "Ethel", "Grace",
    "Heather", "Jan", "Katherine",
    "Julie", "Marcia", "Patricia",
    "Mabel", "Jennifer", "Dorthey",
    "Mary Ellen", "Jacki", "Jean",
    "Betty", "Diane", "Annette",
    "Dawn", "Jody", "Karen",
    "Mary Jane", "Shannon", "Stephanie",
    "Kathleen", "Emily", "Tiffany",
    "Angela", "Christine", "Debbie",
    "Karla", "Sandy", "Marilyn",
    "Brenda", "Hayley", "Linda"
);

var cities = new Array(
    "Wrangell", "White Earth", "Murrysville",
    "Doney Park", "Grayling", "Coldfoot",
    "Lucky", "Amberg", "Mountain Village",
    "Robards", "Moncure", "Bouton",
    "Papaikou", "Berne", "Temple City", "Woodacre",
    "Trezevant", "Derby Line", "Pleasant Dale",
    "Put-in-Bay", "Meno", "Springerton",
    "East Palestine", "Sorrento", "Rio Pinar",
    "Emigsville", "Crown Heights", "South Miami Heights",
    "Gambier", "Gunter", "St. Jacob",
    "Syracuse", "Grand Meadow", "Bellville",
    "Edenborn", "Dubach", "Nisswa",
    "Piffard", "Fruit Cove", "Bailey's Crossroads",
    "Cortland", "Dennison", "Quinter", "Ohkay Owingeh",
    "Danielson", "Scappoose", "Castleton-on-Hudson",
    "Redmon", "Huslia", "Amenia"
);

function randomNuber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};

var goods = [{
        name: "newspaper table",
        img: "roundTable.jpg"
    },
    {
        name: "table",
        img: "squareTable.jpg"
    },
    {
        name: "desk",
        img: "desk.jpg"
    },
    {
        name: "bed",
        img: "bed.jpg"
    },
    {
        name: "comfortable bed",
        img: "bed2.jpg"
    },
    {
        name: "super bed",
        img: "bed3.jpg"
    },
    {
        name: "chair",
        img: "chair1.jpg"
    },
    {
        name: "small chair",
        img: "chair2.jpg"
    },
    {
        name: "children chair",
        img: "chair4.jpg"
    },
    {
        name: "new chair",
        img: "chair5.jpg"
    },
    {
        name: "wood chair",
        img: "chair6.jpg"
    },
    {
        name: "big sofa",
        img: "sofa.jpg"
    },
    {
        name: "beautifull sofa",
        img: "sofa1.jpg"
    },
    {
        name: "sofa",
        img: "sofa2.jpg"
    },
    {
        name: "sofa whith love",
        img: "sofa3.jpg"
    }
];

function generateBlock(names, cities, goods) {
    var post = document.createElement('div');
    post.setAttribute('class', 'post');
    var post__img = document.createElement('div');
    post__img.setAttribute('class', 'post__img');
    var img = document.createElement('img');
    var n = randomNuber(0, goods.length);
    img.setAttribute('src', 'img/' + goods[n].img);
    post__img.appendChild(img);
    post.appendChild(post__img);
    var post__text = document.createElement('div');
    var post__delBtn = document.createElement('input');
    post__delBtn.setAttribute('class', 'del');
    post__delBtn.setAttribute('type', 'button');
    post__delBtn.setAttribute('value', 'X');
    post__text.setAttribute('class', 'post__text');
    post__text.innerHTML = '<p>Пользователь ' + names[randomNuber(0, names.length)] + ' из города ' + cities[randomNuber(0, cities.length)] + ' купил товар ' + goods[n].name + ' в количестве ' + randomNuber(1, 10) + '</p>';
    post.appendChild(post__text);
    post.appendChild(post__delBtn);
    return post;
}

function deleteArticle(event) {
    if (event.target.type !== 'button') {
        return;
    }
    var articleToDelete = event.target.parentElement;
    this.removeChild(articleToDelete);
}

var posts = document.getElementById('container');
posts.addEventListener('click', deleteArticle);

var time = randomNuber(2700, 4800);
var timerId = setTimeout(function insertPost() {
    time = randomNuber(2700, 4800);
    var post = generateBlock(names, cities, goods);
    console.log(post);
    var container = document.getElementById('container');
    container.appendChild(post);
    timerId = setTimeout(insertPost, time);
}, time);
