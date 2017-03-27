function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var n = Number(prompt("enter n"));
var x = Number(prompt("enter x"));

var arr = (isNumeric(n) && (n != 0)) ? new Array(n) : 0;

for (var i = 0; i < n; i++) {
    var tmp = Number(prompt("enter an element"));
    if (isNumeric(tmp)) {
        arr[i] = tmp;
    } else arr[i] = 0;
}

for(i=0; i<n;i++){
  console.log(arr[i]);
}

if(arr.length != 0){
  var num=0;
  for(i=1; i<=n; i++){
    num+=arr[i-1]*Math.pow(x, i);
  }
  num+=arr[0];
}

console.log(num);
