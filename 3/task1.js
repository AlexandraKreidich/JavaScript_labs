var firstName = new Array(
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
var lastName = new Array(
    "Adams", "Bowden", "Conway",
    "Darden", "Edwards", "Flynn",
    "Gilliam", "Holiday", "Ingram",
    "Johnson", "Kraemer", "Hunter",
    "McDonald", "Nichols", "Pierce",
    "Sawyer", "Saunders", "Schmidt",
    "Schroeder", "Smith", "Douglas",
    "Ward", "Watson", "Williams",
    "Winters", "Yeager", "Ford",
    "Forman", "Dixon", "Clark",
    "Churchill", "Brown", "Blum",
    "Anderson", "Black", "Cavenaugh",
    "Hampton", "Jenkins", "Prichard"
);

var cityName = new Array(
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

function randonNuber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};

function randomName() {
    return firstName[randonNuber(0, firstName.length)] + " " + lastName[randonNuber(0, lastName.length)];
};

var names = [];
var cities = [];

var N = Number(prompt("Введите число имён: "));
var M = Math.floor(N / 2);

if (!(isNaN(N)) && isFinite(N)) {
    for (var i = 0; i < N; i++) {
        names[i] = randomName();
    }
}
for (i = 0; i < M; i++) {
    cities[i] = cityName[randonNuber(0, cityName.length)];
}

console.log(names);
console.log(cities);

var persons = [];

for (var i = 0; i < N; i++) {
    persons[i] = {};
    persons[i].name = names[i];
    persons[i].city = cities[randonNuber(0, M)];
    persons[i].age = randonNuber(0, 99);
}

persons.sort(function(a, b) {
    return -(a.age - b.age);
});

console.log(persons);

function generateHtml(persons) {
    for (i = 0; i < N; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = '<p>'+persons[i].name+'</p><p>'+persons[i].city+'</p><p>'+persons[i].age+'</p></p>'
        list.appendChild(newLi);
    }
}
generateHtml(persons);
