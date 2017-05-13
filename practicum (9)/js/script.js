var tests = [];
var htmlQ = [];
var rAnsw = [];
var uAnsw = [];
var currTest = null;
var timer = null;

window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'tests.json', true);
    xhr.onload = function() {
        callBackFunction(xhr.responseText);
    };
    xhr.send(null);
};

function callBackFunction(text) {
    tests = JSON.parse(text);
    console.log(tests);
    showTests();
}

function showTests() {
    var container = document.getElementById('container');
    container.innerHTML = '';
    var str = '';
    tests.forEach(function(elem) {
        var div = document.createElement('div');
        div.setAttribute('class', 'div');
        str = '<div class="jumbotron"><h2>' + elem.name + '</h2><img src="' + elem.img + '" class="img-circle  center-block"><p>' +
            elem.description + '</p><p>Время на выполнение теста: ' + elem.time + ' мин. Количество вопросов: ' +
            elem.questions.length + '</p><input type="button" class="btn btn-success start" value="Начать тест" data-id="' +
            elem.id + '"></div>';
        div.innerHTML = str;
        container.appendChild(div);
    });
    var btns = document.getElementsByTagName('input');
    [].forEach.call(btns, function(elem) {
        elem.addEventListener('click', startTest);
    });
}

function startTest(e) {
    e.stopPropagation();
    uAnsw = new Array();
    rAnsw = [];
    var testId = e.target.getAttribute('data-id');
    var questions = [];
    tests.forEach(function(elem) {
        if (elem.id == testId) {
            questions = elem.questions;
            currTest = elem;
        }
    })
    var ms = currTest.time * 60000;
    timer = setInterval(function() {
        finishTest(currTest);
    }, ms);
    htmlQ = generateHTML(questions);
    console.log(htmlQ);
    console.log(rAnsw);
    var container = document.getElementById('container');
    container.innerHTML = htmlQ[0];
    container.addEventListener('click', function(event) {
        e.stopPropagation();
        if (event.target.value == 'ответить') {
            var id = event.target.getAttribute('data-id');
            if (id != htmlQ.length - 1) {
                //СОХРАНЯЕМ ДАННЫЕ ОБ ОТВЕТЕ
                var labels = document.getElementsByTagName('label');
                var answer = '';
                [].forEach.call(labels, function(elem) {
                    if (elem.firstElementChild.checked) {
                        answer += elem.firstElementChild.value;
                    }
                });
                if (answer == "") {} else {
                    uAnsw.push(answer);
                }
                console.log(uAnsw);
                container.innerHTML = htmlQ[++id];
            } else {
                //СОХРАНЯЕМ ДАННЫЕ + ОТПРАВЛЯЕМ ВСЕ НА ПРОВЕРКУ
                var labels = document.getElementsByTagName('label');
                var answer = '';
                [].forEach.call(labels, function(elem) {
                    if (elem.firstElementChild.checked) {
                        answer += elem.firstElementChild.value;
                    }
                });
                if (answer == "") {} else {
                    uAnsw.push(answer);
                }
                console.log(uAnsw);
                finishTest(currTest);
            }
        }
    })
}

function generateHTML(questions) {
    var HTMLQuestions = [];
    var str = '';
    for (var elem in questions) {
        var answers = '';
        var i = 1;
        rAnsw.push(questions[elem].numbers);
        if (Number(questions[elem].numbers) > 10) {
            questions[elem].answers.forEach(function(el) {
                answers += '<div class="checkbox"><label><input type="checkbox" name="answer" value="' + i + '">' + el + '</label></div>';
                i++;
            });
        } else {
            questions[elem].answers.forEach(function(el) {
                answers += '<div class="radio"><label><input type="radio" name="answer" value="' + i + '">' + el + '</label></div>';
                i++;
            });
        }
        str = '<div class="panel panel-default"><div class="panel-heading"><h2 class="panel-title">' +
            questions[elem].text + '</h2></div><div class="panel-body"><form>' + answers +
            '<input type="button" class="btn btn-success" id="testBtn" data-id="' + elem + '" value="ответить"/></form></div></div>';
        HTMLQuestions.push(str);
    }
    return HTMLQuestions;
}

function finishTest(currTest) {
    clearInterval(timer);
    while (uAnsw.length != rAnsw.length) {
        uAnsw.push("0");
    }
    var count = 0;
    for (var i = 0; i < rAnsw.length; i++) {
        if (uAnsw[i] == rAnsw[i]) count++;
    }
    console.log(count);
    showFinishPage(currTest, count);
}

function showFinishPage(currTest, count) {
    var container = document.getElementById('container');
    container.innerHTML = '<div class="panel panel-info"><div class="panel-heading"><h3 class="panel-title">Тест "' +
        currTest.name + '" завершен!</h3></div><div class="panel-body"><p>Всего вопросов: ' +
        currTest.questions.length + '</p><p>Правильно отвечено: ' + count + '</p><p>Результат: ' + count + '/' + currTest.questions.length + '</p><input type="button" class="btn btn-success" id="toMainPage" value="Вернуться на главную"/></div></div>';
    var toMainPageBtn = document.getElementById('toMainPage');
    toMainPageBtn.addEventListener('click', showTests);
}
