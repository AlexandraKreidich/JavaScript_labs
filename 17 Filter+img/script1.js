var app = {
    filterBtn: function() {
        var imgData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height);
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
            imgData.data[i + 3] = 255;
        }
        app.ctx.putImageData(imgData, 0, 0);
    },

    initCanvas: function() {
        var img = document.getElementById('img');
        app.canvas.width = img.width;
        app.canvas.height = img.width;
        app.ctx.drawImage(img, 0, 0);

        var btn = document.getElementById('inverse');
        btn.addEventListener('click', app.filterBtn);
    },

    initContainer: function() {
        app.container.dragable = true;
        app.container.addEventListener('drop', app.onDrop);
        app.container.addEventListener('dragover', app.prevent);
        app.initCanvas();
    },

    onDrop: function(e) {
        app.prevent(e);

        var file = e.dataTransfer.files[0];
        var reader = new FileReader();
        var src = '';

        reader.onload = function() {
            src = reader.result;
            var img = document.getElementById('img');
            img.setAttribute('src', src);
        }
        reader.readAsDataURL(file);
        app.initCanvas();
    },

    prevent: function(e) {
        e.preventDefault();
    }
};

Object.defineProperty(app, 'canvas', {
    get: function() {
        return document.getElementById('canvas');
    }
});

Object.defineProperty(app, 'ctx', {
    get: function() {
        return app.canvas.getContext('2d');
    }
});

Object.defineProperty(app, 'container', {
    get: function() {
        return document.getElementById('container');
    }
});

app.initContainer();
