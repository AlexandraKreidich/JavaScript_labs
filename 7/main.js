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
    }
};
