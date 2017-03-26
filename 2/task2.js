function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log(" ");
console.log(Number(null));
console.log("task with array: ");
console.log(" ");

var n = Number(prompt("Enter the number of elements"));
var p = Number(prompt("Enter percents"));
var p = (isNumeric(p)) ? Number((p / 100).toFixed(2)) : 100;
console.log("percent : " + p);

var array = (isNumeric(n) && (n != 0)) ? new Array(n) : 0;

function task(array, n, p) {
    if (!(array === 0)) {
        for (var i = 0; i < n; i++) {
            array[i] = Math.round(Math.random() * ((n + n * p) - (n - n * p) + 1) + (n - n * p));
        }

        console.log("array: ");
        console.log(" ");

        for (i = 0; i < n; i++) {
            console.log(array[i]);
        }

        var avg = 0;
        for (i = 0; i < n; i++) {
            avg += array[i];
        }

        return avg = (avg / array.length).toFixed(5);

    } else {
        console.log("invalid data");
        return 0;
    }
}

var result = task(array, n, p);

console.log("result = " + result);
