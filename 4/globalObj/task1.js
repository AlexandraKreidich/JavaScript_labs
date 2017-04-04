var table = document.body.children[0].children[1];
console.log(table);
table.rows[1].cells[0].innerHTML = 'window.location.href';
table.rows[1].cells[1].innerHTML = window.location.href;

table.rows[2].cells[0].innerHTML = 'window.location.host';
table.rows[2].cells[1].innerHTML = window.location.host;

table.rows[3].cells[0].innerHTML = 'window.location.hash';
table.rows[3].cells[1].innerHTML = window.location.hash;

table.rows[4].cells[0].innerHTML = 'window.location.port';
table.rows[4].cells[1].innerHTML = window.location.port;

table.rows[5].cells[0].innerHTML = 'window.location.protocol';
table.rows[5].cells[1].innerHTML = window.location.protocol;

table.rows[6].cells[0].innerHTML = 'window.location.search';
table.rows[6].cells[1].innerHTML = window.location.search;

table.rows[7].cells[0].innerHTML = 'window.location.assign';
table.rows[7].cells[1].innerHTML = window.location.assign;

table.rows[7].cells[0].innerHTML = 'window.screen.width';
table.rows[7].cells[1].innerHTML = window.screen.width;

table.rows[9].cells[0].innerHTML = 'window.screen.height';
table.rows[9].cells[1].innerHTML = window.screen.height;

table.rows[10].cells[0].innerHTML = 'window.screen.availHeight';
table.rows[10].cells[1].innerHTML = window.screen.availHeight;

table.rows[11].cells[0].innerHTML = 'window.screen.colorDepth';
table.rows[11].cells[1].innerHTML = window.screen.colorDepth;

table.rows[12].cells[0].innerHTML = 'window.screen.orientation';
table.rows[12].cells[1].innerHTML = window.screen.orientation;

table.rows[13].cells[0].innerHTML = 'window.history.forward';
table.rows[13].cells[1].innerHTML = window.history.forward;

table.rows[14].cells[0].innerHTML = 'window.history.length';
table.rows[14].cells[1].innerHTML = window.history.length;

table.rows[15].cells[0].innerHTML = 'window.navigator.appCodeName';
table.rows[15].cells[1].innerHTML = window.navigator.appCodeName;

table.rows[16].cells[0].innerHTML = 'window.navigator.appName';
table.rows[16].cells[1].innerHTML = window.navigator.appName;

table.rows[17].cells[0].innerHTML = 'window.navigator.cookieEnabled';
table.rows[17].cells[1].innerHTML = window.navigator.cookieEnabled;

table.rows[18].cells[0].innerHTML = 'window.navigator.javaEnabled';
table.rows[18].cells[1].innerHTML = window.navigator.javaEnabled();

table.rows[19].cells[0].innerHTML = 'window.navigator.onLine';
table.rows[19].cells[1].innerHTML = window.navigator.onLine;

table.rows[20].cells[0].innerHTML = 'window.navigator.userAgent';
table.rows[20].cells[1].innerHTML = window.navigator.userAgent;
