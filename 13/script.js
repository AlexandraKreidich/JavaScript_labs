var div = document.getElementById('container');
div.contentEditable = true;

var selectSize = document.getElementById('selectSize');
var selectFont = document.getElementById('selectFont');
var selectColorText = document.getElementById('selectColorText');
var selectColorBg = document.getElementById('selectColorBg');

function getSelectionText() {
    var txt = '';
    if (txt = window.getSelection) {
        txt = window.getSelection().toString();
    } else {
        txt = document.selection.createRange().text;
    }
    return txt;
}

selectSize.addEventListener('change', onSelectSize);
selectFont.addEventListener('change', onSelectFont);
selectColorText.addEventListener('change', onSelectColorText);
selectColorBg.addEventListener('change', onSelectColorBg);
var navBtns = document.getElementsByClassName('nav-btn');
[].forEach.call(navBtns, function(elem) {
    elem.addEventListener('click', onNavBtn);
});

div.addEventListener('dblclick', function() {
    window.getSelection().removeAllRanges();
});
div.addEventListener('mouseup', function() {
    if (window.getSelection().toString() != '') {
        var str = window.getSelection().toString();
        console.log(str);
        [].forEach.call(navBtns, function(elem) {
            switch (elem.value) {
                case 'Bold':
                    if (document.queryCommandState('bold') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case 'Underline':
                    if (document.queryCommandState('underline') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case 'Coursive':
                    if (document.queryCommandState('italic') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case 'ul':
                    if (document.queryCommandState('insertUnorderedList') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case 'ol':
                    if (document.queryCommandState('insertOrderedList') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case '-->':
                    if (document.queryCommandState('justifyRight') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case '<--':
                    if (document.queryCommandState('justifyLeft') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case '<->':
                    if (document.queryCommandState('justifyFull') == true) {
                        elem.classList.add('active');
                    }
                    break;
                case '>-<':
                    if (document.queryCommandState('justifyCenter') == true) {
                        elem.classList.add('active');
                    }
                    break;
            }
        });
        var tColor = document.queryCommandValue('foreColor');
        selectColorText.setAttribute('value', tColor);
        var size = document.queryCommandValue('fontsize');
        selectSize.value = size;
        var font = document.queryCommandValue('fontname');
        console.log(font);
        var arr = font.split(', ');
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < selectFont.options.length; j++) {
                if (arr[i] == selectFont.options[j].textContent) {
                    selectFont.selectedIndex = j;
                }
            }
        };
    }
});
div.addEventListener('mousedown', function() {
    if (window.getSelection().toString() != '') {
        window.getSelection().removeAllRanges();
    }
    [].forEach.call(navBtns, function(elem) {
        elem.classList.remove('active');
    });
    selectColorText.setAttribute('value', '#6495ED');
    selectSize.selectedIndex = 0;
    selectFont.selectedIndex = 0;
})

function onNavBtn(e) {
    e.stopPropagation;
    var command = e.target.value;
    var str = getSelectionText();
    switch (command) {
        case 'Bold':
            document.execCommand('bold', false, null);
            e.target.classList.add('active');
            break;
        case 'Underline':
            document.execCommand('underline', false, null);
            e.target.classList.add('active');
            break;
        case 'Coursive':
            document.execCommand('italic', false, null);
            e.target.classList.add('active');
            break;
        case 'A+':
            var fSize = Number(document.queryCommandValue('fontsize'));
            if (fSize < 7) {
                document.execCommand('fontsize', false, ++fSize);
            }
            e.target.classList.add('active');
            break;
        case 'A-':
            var fSize = Number(document.queryCommandValue('fontsize'));
            if (fSize > 1) {
                document.execCommand('fontsize', false, --fSize);
            }
            e.target.classList.add('active');
            break;
        case '-':
            document.execCommand('insertHorizontalRule', false, null);
            e.target.classList.add('active');
            break;
        case 'ul':
            document.execCommand('insertUnorderedList', false, null);
            e.target.classList.add('active');
            break;
        case 'ol':
            document.execCommand('insertOrderedList', false, null);
            e.target.classList.add('active');
            break;
        case '-->':
            document.execCommand('justifyRight', false, null);
            e.target.classList.add('active');
            break;
        case '<--':
            document.execCommand('justifyLeft', false, null);
            e.target.classList.add('active');
            break;
        case '<->':
            document.execCommand('justifyFull', false, null);
            e.target.classList.add('active');
            break;
        case '>-<':
            document.execCommand('justifyCenter', false, null);
            e.target.classList.add('active');
            break;
        case '✎':
            var link = prompt('Введите ссылку', '#');
            document.execCommand('createLink', false, link);
            e.target.classList.add('active');
            break;
        case 'space+':
            document.execCommand('indent', false, null);
            e.target.classList.add('active');
            break;
        case 'space-':
            document.execCommand('outdent', false, null);
            e.target.classList.add('active');
            break;
    }
};

function onSelectColorBg(e) {
    var color = e.target.value;
    document.execCommand('hiliteColor', false, color);
}

function onSelectColorText(e) {
    var color = e.target.value;
    document.execCommand('foreColor', false, color);
}

function onSelectSize() {
    var size = this.options[this.selectedIndex].value;
    document.execCommand('fontsize', false, size);
}

function onSelectFont() {
    var font = this.options[this.selectedIndex].value;
    document.execCommand('fontname', false, font);
}
