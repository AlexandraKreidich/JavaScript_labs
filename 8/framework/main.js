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
    getById: function (id) {
      return (document.getElementById(id));
    },
    getByClass: function (className) {
      return (document.getElementsByClassName(className));
    },
    getByTag: function (tag) {
      return(document.getElementsByTagName(tag));
    },
    getBySelector: function (selector) {
      return(document.querySelector(selector));
    },
    getBySelectorAll: function (selector) {
      return(document.querySelectorAll(selector));
    },
    getWidth: function () {
      return (this.getBoundingClientRect().right - this.getBoundingClientRect().left);
    },
    getHeight: function () {
      return (this.getBoundingClientRect().bottom - this.getBoundingClientRect().top);
    },
    getPageTop: function (elem) {
      var length = 0;
      while(elem.offsetParent != null){
        length += elem.offsetTop;
        elem = elem.offsetParent;
      }
      return length;
    },
};
