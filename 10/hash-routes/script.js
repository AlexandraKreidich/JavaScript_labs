/*var createRequest = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'myFile.html', true);
    xhr.onload = function() {
        callBackFunction(xhr.responseText);
    };
    xhr.send(null);
};

var reqBtn = document.getElementById('request');
reqBtn.addEventListener('click', createRequest);

var initForm = function() {
    var form = document.forms.form;
    var btn = form.elements.btn;
    var onForm = function() {
        alert(form.elements.input.value);
    }
    btn.addEventListener('click', onForm);
}

var callBackFunction = function(text) {
    var div = document.getElementById('form');
    div.innerHTML = text;
    initForm();
};*/

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
