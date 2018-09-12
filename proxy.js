var http = require ('http');

http.get ({
    host: 'my.proxy.com',
    port: 8080,
    path: 'http://nodejs.org/'
}, function (response) {
    console.log (response);
});