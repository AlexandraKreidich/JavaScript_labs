function fiterBtn() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  for (var i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255 - imgData.data[i];
      imgData.data[i + 1] = 255 - imgData.data[i + 1];
      imgData.data[i + 2] = 255 - imgData.data[i + 2];
      imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
}

function initCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("img");
  c.width = img.width;
  c.height = img.width;
  ctx.drawImage(img, 0, 0);

  var btn = document.getElementById('inverse');
  btn.addEventListener('click', filterBtn);
}

function prevent(e) {
  e.preventDefault();
}

var container = document.getElementById('container');
container.dragable = true;
container.addEventListener('drop', onDrop);
container.addEventListener('dragover', prevent);
function onDrop(e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];

  var reader = new FileReader();
  var src = '';

  reader.onload = function() {
      src = reader.result;
      var img = document.getElementById('img');
      img.setAttribute('src', src);
      initCanvas();
  }

  reader.readAsDataURL(file);
}
