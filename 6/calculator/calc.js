//работают с памятью только те числа, которые записываются в верхнее поле
//нижнее поле - для вывода значений

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
