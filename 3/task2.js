var house = {
    capacity: 100,
    members: [],
}

function Flat(area, floor) {
    this.area = area;
    this.floor = floor;
    this.peoples = [];
}

house.flats = [];
for (var i = 0; i < house.capacity; i++) {
    house.flats[i] = new Flat(Math.floor(Math.random() * 50), Math.floor(i / 4 + 1));
}

//номер квартиры = порядковый номер в массиве

house.setMember = function(name, flat) {
    if (flat <= 100) {
        (this.members).push(name);
        (this.flats)[flat - 1].peoples.push(name);
    } else {
        console.log("there is no such flat!");
    }
}

house.getMembers = function(flat) {
    if ((this.flats)[flat - 1].peoples.length) {
        for (var i = 0; i < (this.flats)[flat - 1].peoples.length; i++) {
            console.log("members of " + flat + " flat : " + (this.flats)[flat - 1].peoples[i]);
        }
    } else console.log("the flat " + flat + " is empty");
}

house.clearFlat = function(flat) {
    if (flat <= 100) {
        (this.flats)[flat - 1].peoples.length = 0;
        console.log("the flat " + flat + " was cleared");
    } else {
        console.log("there is no such flat!");
    }
}

house.countPayments = function(ammount) {
    var count = 0;
    for (var i = 0; i < house.capacity; i++) {
        if (this.flats[i].peoples.length != 0) count++;
    }
    if (count) {
        var priceForFlat = (ammount / count).toFixed(5);
        console.log("price for flat: " + priceForFlat);
        for (var i = 0; i < house.capacity; i++) {
            if (this.flats[i].peoples.length != 0) {
              var pricePerPerson = (priceForFlat/this.flats[i].peoples.length).toFixed(5);
                for (a = 0; a < this.flats[i].peoples.length; a++) {
                      console.log(this.flats[i].peoples[a] + " from flat " + (i+1) + " should pay " + pricePerPerson);
                }
                console.log(" ");
            }
        }
    }
}
house.setMember("Sasha", 5);
house.setMember("Masha", 5);
house.setMember("Dasha", 5);
house.setMember("Alex", 10);
house.setMember("Pasha", 20);
house.setMember("Vasya", 101);
house.setMember("Alexey", 1);
house.getMembers(5);
house.countPayments(1234500);
house.clearFlat(5);
house.getMembers(5);
