var tests = null;

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

var htmlQ = [];
var rAnsw = [];
var uAnsw = [];
var test = null;
var timer = null;

function timerStart() {
    var timer = document.getElementById('timer');
    var i = setInterval(function functionName() {
        var date = new Date();
        var m = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        var s = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        timer.innerHTML = m + ':' + s;
        var t = setTimeout(function() {
            timer.innerHTML = m + ' ' + s;
        }, 500);
    }, 1000);
    return i;
}

function stopTimer() {
    clearInterval(timer);
}

function startTest(e) {
    e.stopPropagation();
    var id = e.target.getAttribute('data-id');
    tests.forEach(function(elem) {
        if (elem.id == id) {
            htmlQ = createHTMLForQuestions(elem.questions);
            rAnsw = getRightAnswersForQ(elem.questions);
            test = elem;
            console.log(rAnsw);
        }
    });
    setTimeout(endOfTime, test.time * 60 * 1000);
    var timerCont = document.getElementById('timer');
    timerCont.classList.add('display');
    timer = timerStart();
    var container = document.getElementById('container');
    container.innerHTML = htmlQ[0];
    container.addEventListener('click', function(event) {
        var id = event.target.getAttribute('data-id');
        if (event.target.value == 'ответить' && id < htmlQ.length) {
            if (id == htmlQ.length - 1) {
                var labels = document.getElementsByTagName('label');
                var arr = [];
                [].forEach.call(labels, function(elem) {
                    if (elem.firstElementChild.checked) {
                        arr.push(Number(elem.firstElementChild.value));
                    }
                })
                uAnsw.push(arr);
                console.log(uAnsw);
                finishTest(test);
            } else {
                var labels = document.getElementsByTagName('label');
                var arr = [];
                [].forEach.call(labels, function(elem) {
                    if (elem.firstElementChild.checked) {
                        arr.push(Number(elem.firstElementChild.value));
                    }
                })
                uAnsw.push(arr);
                console.log(uAnsw);
                container.innerHTML = htmlQ[++id];
            }
        }
        /*if (event.target.name == 'answer') {
            var testBtn = document.getElementById('testBtn');
            testBtn.classList.remove('disabled');
            testBtn.classList.add('active');
        }*/
    })
}

function finishTest(test) {
    stopTimer();
    var raiting = 0;
    flag = true;
    for (var i = 0; i < rAnsw.length; i++) {
        for (var j = 0; j < rAnsw[i].length; j++) {
            if (uAnsw[i][j] != rAnsw[i][j]) {
                flag = false;
                break;
            }
        }
        if (flag) raiting++;
    }
    console.log(raiting);
    uAnsw.length = 0;
    rAnsw.length = 0;
    console.log(uAnsw);
    //generate finish page
    var container = document.getElementById('container');
    container.innerHTML = '<div class="panel panel-info"><div class="panel-heading"><h3 class="panel-title">Тест "' +
        test.name + '" завершен!</h3></div><div class="panel-body"><p>Всего вопросов: ' +
        test.questions.length + '</p><p>Правильно отвечено: ' + raiting + '</p><input type="button" class="btn btn-success" id="toMainPage" value="Вернуться на главную"/></div></div>';
    var toMainPageBtn = document.getElementById('toMainPage');
    toMainPageBtn.addEventListener('click', showTests);
}

function endOfTime() {
    var arr = [];
    arr.push(0);
    while (uAnsw.length != rAnsw.length) {
        uAnsw.push(arr);
    }
    finishTest(test);
    stopTimer(timer);
}

function getRightAnswersForQ(questions) {
    var arr = [];
    questions.forEach(function(elem) {
        arr.push(elem.numbers);
    })
    return arr;
}

function createHTMLForQuestions(questions) {
    console.log(questions);
    var HTMLQuestions = [];
    var str = '';
    for (var elem in questions) {
        var answers = '';
        var i = 1;
        if (questions[elem].numbers.length != 1) {
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
            '<input type="button" class="btn btn-success disabled" id="testBtn" data-id="' + elem + '" value="ответить"/></form></div></div>';
        HTMLQuestions.push(str);
    }
    return HTMLQuestions;
}
