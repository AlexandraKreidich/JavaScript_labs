var elements = document.documentElement.childNodes;
var textElem = 0; //количество тектовых
var commentElem = 0; //количество коментариев
var tags = 0;

function rec(elements) {
    [].forEach.call(elements, function(elem) {
        if (elem.nodeName == '#text') {
            textElem++;
        } else if (elem.nodeName == '#comment') {
            commentElem++;
        } else {
            tags++;
            console.log(elem); //elem.nodeName
            return rec(elem.childNodes);
        }
    });
}
rec(elements);
console.log(' ');
console.log('количество текстовых элементов: ' + textElem);
console.log('количество комментариев: ' + commentElem);
console.log('количество элементов: ' + tags);
