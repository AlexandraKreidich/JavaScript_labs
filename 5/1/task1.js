var table = document.createElement('table');
var tr = document.createElement('tr');
var td = null;
for (var i = 0; i < 10; i++) {
    tr = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
        td = document.createElement('td');
        var n = (i * j) ? (i * j) : (j == 0) ? i : j;
        td.innerText = n;
        if (i == j)
            td.setAttribute('class', 'diagonal');
            if(j == 0 || i == 0) td.setAttribute('class', 'start');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.appendChild(table);
