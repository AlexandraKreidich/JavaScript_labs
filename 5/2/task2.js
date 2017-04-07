var json = '[{\
        "name": "Belarus",\
        "population": "9466000",\
        "code": "+375",\
        "flag": "belarus.jpg"\
    },\
    {\
        "name": "Poland",\
        "population": "38530000",\
        "code": "+48",\
        "flag": "poland.jpg"\
    },\
    {\
        "name": "Ukraine",\
        "population": "45490000",\
        "code": "+380",\
        "flag": "ukraine.jpg"\
    },\
    {\
        "name": "Russia",\
        "population": "143500000",\
        "code": "+7",\
        "flag": "russia.jpg"\
    },\
    {\
        "name": "Germany",\
        "population": "806200000",\
        "code": "+49",\
        "flag": "germany.jpg"\
    }]';

var countries = JSON.parse(json);

function generateTable(countries) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = null;
    var th = null;
    for (var key in countries[0]) {
        th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var i = 0; i < countries.length; i++) {
        tr = document.createElement('tr');
        for (var key in countries[i]) {
            if (key == 'flag') {
                var img = document.createElement('img');
                img.setAttribute('src', 'img/' + countries[i][key]);
                tr.appendChild(img);
            } else {
                td = document.createElement('td');
                td.innerText = countries[i][key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

generateTable(countries);
