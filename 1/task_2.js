function calculate() {
    var numF = Number(prompt("Enter a number"));
    var numS = Number(prompt("Enter a number"));
    var op = prompt("Enter an operation");
    var res = 0;
    if (isNaN(numF) || isNaN(numS)) {
        console.log('неверные данные');
    } else {
        switch (op) {
            case '+':
                res = numF + numS;
                console.log(numF + op + numS + '=' + res);
                break;
            case '-':
                res = numF - numS;
                console.log(numF + op + numS + '=' + res);
                break;
            case '*':
                res = numF * numS;
                console.log(numF + op + numS + '=' + res);
                break;
            case '/':
                res = numF / numS;
                res = +res.toFixed(10);
                console.log(numF + op + numS + '=' + res);
                break;
            default:
                console.log('вы ввели неверную операцию');
                break;
        }

    }
}
calculate();
