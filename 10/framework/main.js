var Framework = {
    append: function(target, what) {
        target.appendChild(what);
    },
    prepend: function(target, what) {
        target.insertBefore(what, target.firstChild);
    },
    replace: function(target, what) {
        (what.parentNode).replaceChild(target, what);
    },
    create: function(elem) {
        var elem = document.createElement(elem);
        return elem;
    },
    remove: function(target) {
        (target.parentNode).removeChild(target);
    },
    event: function(target, e, func) {
        if (typeof target.attachEvent == 'function')
            target.attachEvent(e, func);
        else target.addEventListener(e, func);
    },
    unevent: function(target, e, func) {
        if (typeof target.detachEvent == 'function')
            target.detachEvent(e, func);
        else target.removeEventListener(e, func);
    },
    dispatch: function(target, ev, func) {
        if (typeof target.attachEvent == 'function') {
            target.attachEvent(ev, func);
            e.dispatchEvent(ev);
        } else {
            target.addEventListener(ev, func);
            e.dispatchEvent(ev);
        }
    },
    get width() {
        return (this.getBoundingClientRect().right - this.getBoundingClientRect().left);
    },
    get height() {
        return (this.getBoundingClientRect().bottom - this.getBoundingClientRect().top);
    },
    pageTop: function(elem) {
        var length = 0;
        while (elem.offsetParent != null) {
            length += elem.offsetTop;
            elem = elem.offsetParent;
        }
        return length;
    },
    pageLeft: function(elem) {
        var length = 0;
        while (elem.offsetParent != null) {
            length = elem.offsetLeft;
            e = elem.offsetParent;
        }
        return length;
    },
    css: function(elem, prop, val) {
        if (arguments.length == 2) {
            var style = window.getComputedStyle(elem);
            return style[prop];
        }
        if (argumants.length == 3) {
            elem.style[prop] = val;
        }
    },
    ajax: function(path, method, callBackFunction) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, path, true);
        xhr.onload = function() {
            callBackFunction(xhr.responseText);
        };
        xhr.send(null);
    }
};
Object.defineProperties(Framework, {
    ById: {
        get: function(id) {
            return (document.getElementById(id));
        }
    },
    ByClass: {
        get: function(className) {
            return (document.getElementsByClassName(className));
        }
    },
    ByTag: {
        get: function(tag) {
            return (document.getElementsByTagName(tag));
        }
    },
    BySelector: {
        get: function(selector) {
            return (document.querySelector(selector));
        }
    },
    BySelectorAll: {
        get: function(selector) {
            return (document.querySelectorAll(selector));
        }
    }
});

Framework.ajax('file.html', 'GET', function(t){document.body.innerHTML = t;});
