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

function code() {
    var str = input.value;
    input.setAttribute('value', '');
    str = str.toUpperCase();
    var res = [];
    var l = null;
    for (var i = 0; i < str.length; i++) {
        res[i] = vocab[str[i]];
    }
    out.setAttribute('value', res);
    unbtn.removeAttribute('disabled');
    btn.setAttribute('disabled', 'true');
}

function unCode() {
    var str = out.value;
    out.setAttribute('value', '');
    var arr = str.split(',');
    console.log(arr);
    var res = '';
    for (i = 0; i < arr.length; i++) {
        for (var key in vocab) {
            if (vocab[key] == arr[i]) {
                res += key;
            }
        }
    }
    res = res.toLowerCase();
    console.log(res);
    input.setAttribute('value', res);
    btn.removeAttribute('disabled');
    unbtn.setAttribute('disabled', 'true');
}

function onFocusForm() {
    if (this.value == '') {
        btn.removeAttribute('disabled');
    }
}
var input = document.getElementById('input');
var btn = document.getElementById('code');
var out = document.getElementById('output');
var unbtn = document.getElementById('uncode');

input.addEventListener('keydown', onFocusForm);
btn.addEventListener('click', code);
unbtn.addEventListener('click', unCode);
