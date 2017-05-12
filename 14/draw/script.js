var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ACF';
ctx.lineWidth = 3;

function draw(e) {
    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY);
    ctx.stroke();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY);
}

canvas.addEventListener('mousedown', function(e) {
    e.preventDefault();
    ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY);
    canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw);
});

var saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', save);

function save() {
    var imageData = ctx.getImageData(0, 0, 800, 500);
    var newWin = window.open("/", "hello", "width=500,height=800");
    newWin.onload = function() {
        newWin.document.body.innerHTML = '<canvas id="newCanvas" width="800" height="500"></canvas>';
        var newCanvas = newWin.document.getElementById('newCanvas');
        var newCtx = newCanvas.getContext('2d');
        newCtx.putImageData(imageData, 0, 0);
    }
}
