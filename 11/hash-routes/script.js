var routes = {
    '#info': 'info.html',
    '#contacts': 'contacts.html'
}

var callBackFunction = function(text) {
    var div = document.getElementById('content');
    div.innerHTML = text;
}

var doLoad = function(p) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', p, true);
    xhr.onload = function() {
        callBackFunction(xhr.responseText);
    };
    xhr.send(null);
}

var route = function() {
    var hash = location.hash;
    for (var h in routes) {
        if (h == hash) {
            doLoad(routes[h]);
        }
    }
};

window.onhashchange = route;
route();
