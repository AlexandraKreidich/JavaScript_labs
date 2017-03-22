var str = prompt("Enter a string");
validateString(str);

function validateString(string) {
    if (string === null) console.log('пустая строка');
    else {
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            if (string[i] === '(') count++;
            if (string[i] === ')') count--;
        }
        if (count === 0) console.log('скобки расставлены правильно');
        else console.log('скобки расставлены неверно');
    }
}
