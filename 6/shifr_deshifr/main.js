//var key = Math.floor(Math.random()*100);
var key = 100;
console.log('key: ' + key);
key = key.toString(2);
key = parseInt(key);
console.log('binary code of key: ' + key);

var str = 'mon';
var charstr = '';
for (var i = 0; i < str.length; i++) {
    charstr += str.charCodeAt(i);
}
console.log('изначальная строка: ' + str);
console.log('посимвольное представление строки: ' + charstr);
//разбиваем троку на 32-битные числа, возвращаем массив из чисел(числа-коды элементов строки)
function parse(str) {
    var parsedStr = [];
    var biggestNum = 2147483647;
    var tmp = '0';
    var i = 0;
    while (i < str.length) {
        if (Number(tmp) < biggestNum) {
            tmp += str[i++];
        } else {
            parsedStr[parsedStr.length] = Number(tmp);
            tmp = '0';
        }
    }
    parsedStr[parsedStr.length] = Number(tmp);
    return parsedStr;
}
var arrNumb = parse(charstr); //посимвольное представление строки разбили на строки чтобы в кждая строка могла быть преобразована в 32-битное число
console.log(arrNumb);

var n = arrNumb[0];
console.log(n);
console.log(n^key);
console.log(n^key^key);
