var routes = {
    '#calc': 'calculator.html',
    '#shifr': 'shifrator.html',
    '#form': 'form.html',
    '#contacts': 'contacts.html'
}

var initScript = function(p) {
    switch (p) {
        case 'calculator.html':
            var op = null;
            var tmp = null;
            var calcMem = 0;

            function add() {
                if (!tmp) {
                    var input = document.getElementById('user_input');
                    tmp = Number(input.value);
                    input.setAttribute('value', '');
                    op = '+';
                    var output = document.getElementById('output');
                    output.setAttribute('value', tmp + op);
                } else {}
            }

            function minus() {
                if (!tmp) {
                    var input = document.getElementById('user_input');
                    tmp = Number(input.value);
                    op = '-';
                    input.setAttribute('value', '');
                    var output = document.getElementById('output');
                    output.setAttribute('value', tmp + op);
                }
            }

            function multiply() {
                if (!tmp) {
                    var input = document.getElementById('user_input');
                    tmp = Number(input.value);
                    op = '*';
                    input.setAttribute('value', '');
                    var output = document.getElementById('output');
                    output.setAttribute('value', tmp + op);
                }
            }

            function divide() {
                if (!tmp) {
                    var input = document.getElementById('user_input');
                    tmp = Number(input.value);
                    op = '/';
                    input.setAttribute('value', '');
                    var output = document.getElementById('output');
                    output.setAttribute('value', tmp + op);
                }
            }

            function calculate() {
                var input = document.getElementById('user_input');
                var n = Number(input.value);
                input.setAttribute('value', '');
                var output = document.getElementById('output');
                var res = 0;
                if (!op) op = '?';
                switch (op) {
                    case '+':
                        res = tmp + n;
                        break;
                    case '-':
                        res = tmp - n;
                        break;
                    case '*':
                        res = tmp * n;
                        break;
                    case '/':
                        res = (tmp / n).toFixed(5);
                        break;
                    case '?':
                        res = n;
                        break;
                }
                output.setAttribute('value', res);
                tmp = null;
                op = null;
            }



            function func(event) {
                if (isNumeric(Number(event.target.value))) {
                    var input = document.getElementById('user_input');
                    var val = input.value;
                    val += event.target.value;
                    input.setAttribute('value', val);
                    event.stopPropagation();
                }
            }

            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            function memoryAdd() {
                var input = document.getElementById('user_input');
                calcMem += Number(input.value);
                input.setAttribute('value', '');
            }

            function memoryAddReverce() {
                var input = document.getElementById('user_input');
                calcMem += -Number(input.value);
                input.setAttribute('value', '');
            }

            function memoryClear() {
                calcMem = 0;
            }

            function memoryRead() {
                var output = document.getElementById('output');
                output.setAttribute('value', calcMem);
            }

            var buttons = document.querySelector('.calc_btns');
            buttons.addEventListener('click', func);

            var plusBtn = document.getElementById('plus');
            plusBtn.addEventListener('click', add);

            var minusBtn = document.getElementById('minus');
            minusBtn.addEventListener('click', minus);

            var multBtn = document.getElementById('mult');
            multBtn.addEventListener('click', multiply);

            var divideBtn = document.getElementById('divd');
            divideBtn.addEventListener('click', divide);

            var calcbtn = document.querySelector('.calculate_btn');
            calcbtn.addEventListener('click', calculate);

            var memAdd = document.getElementById('memoryAdd');
            memAdd.addEventListener('click', memoryAdd);

            var memAddRev = document.getElementById('memoryAddReverce');
            memAddRev.addEventListener('click', memoryAddReverce);

            var memClr = document.getElementById('memoryClear');
            memClr.addEventListener('click', memoryClear);

            var memRead = document.getElementById('memoryRead');
            memRead.addEventListener('click', memoryRead);
            break;

        case 'shifrator.html':
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

            break;
        case 'form.html':
            var form = document.getElementById('form');
            var btn = form.children[1];
            var onForm = function() {
                alert(form.elements.input.value);
            }
            btn.addEventListener('click', onForm);
            break;
        case 'contacts.html':
            break;
        default:
            break;
    }

}

var callBackFunction = function(text, p) {
    var div = document.getElementById('content');
    div.innerHTML = text;
    initScript(p);
}

var doLoad = function(p) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'rotes/' + p, true);
    xhr.onload = function() {
        callBackFunction(xhr.responseText, p);
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
