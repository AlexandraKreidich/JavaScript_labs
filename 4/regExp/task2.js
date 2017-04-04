inputButton.onclick = function() {
    var str = document.getElementById('inputText').value;
    console.log(str);
    if (str != "") {
        var t = /(\+?\d{1,3})[(]?(\d{1,2})[)]?[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})/;
        if (t.exec(str)) {
            var res = "";
            var answer = t.exec(str);
            for (var i = 1; i < answer.length; i++) {
                res += answer[i];
            }
            var p = document.createElement('p');
            p.innerHTML = 'номер телефона: ' + res;
            container.appendChild(p);
        } else {
            var p = document.createElement('p');
            p.innerHTML = 'вы не ввели данные';
            container.appendChild(p);
        }
    }
}
