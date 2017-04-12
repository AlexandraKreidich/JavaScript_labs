var vocab = {
    A: '*-',
    B: '-***',
    C: '-*-*',
    D: '-**',
    E: '*',
    F: '**-*',
    G: '--*',
    H: '****',
    I: '**',
    J: '*---',
    K: '-*-',
    L: '*-**',
    M: '--',
    N: '-*',
    O: '---',
    P: '*--*',
    Q: '--*-',
    R: '*-*',
    S: '***',
    T: '-',
    U: '**-',
    V: '***-',
    W: '*--',
    X: '-**-',
    Y: '-*--',
    Z: '--**'
}
var uncodedText = document.getElementById('uncodedText');
var toCodeBtn = document.getElementById('toCodeBtn');
var codedText = document.getElementById('codedText');
var unCodeBtn = document.getElementById('unCodeBtn');
var div = document.getElementById('userInput');

uncodedText.addEventListener('click', function(e) {
    this.value = '';
})
toCodeBtn.addEventListener('click', codeText);
unCodeBtn.addEventListener('click', unCodeText);

/*-----------------codeText-function-------*/
function codeText(e) {
    var str = uncodedText.value;
    var p = document.createElement('p');
    p.innerText = 'ваш текст: ' + str;
    div.appendChild(p);
    uncodedText.value = '';
    str = str.toUpperCase();
    var res = [];
    var l = null;
    for (var i = 0; i < str.length; i++) {
        res[i] = vocab[str[i]];
    }
    res = res.join(' ');
    codedText.setAttribute('value', 'код: ' + res);
    e.stopPropagation();
}
/*--------------------------------------*/

/*-------------------unCodeText-function--------------*/
function unCodeText(e) {
    var str = codedText.value;
    codedText.setAttribute('value', '');
    var arr = str.split(' ');
    var res = '';
    for (i = 0; i < arr.length; i++) {
        for (var key in vocab) {
            if (vocab[key] == arr[i]) {
                res += key;
            }
        }
    }
    res = res.toLowerCase();
    uncodedText.value = '';
    var p = document.createElement('p');
    p.innerText = 'ваш раскодированный текст: ' + res;
    div.appendChild(p);
}
/*-------------------------------------------*/
