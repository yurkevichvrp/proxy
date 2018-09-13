const http = require('http'),

server = http.createServer().listen(80);

const baseUrl = 'www.google.com';
var tmp = {};
server.on('request', (req, res) => {

if (req.method == 'POST') {
var jsonString = '';

req.on('data', function (data) {
    jsonString += data;
});

req.on('end', function () {
  tmp = JSON.parse(jsonString);
    console.log('tmp.endpoint-> ' + tmp.endpoint);
    console.log('tmp.body ->' + tmp.body);
});
console.log(`server is listening body request ` + req.body + ' method ' + req.method + ' headers ' + req.headers);
var connector = http.request({
host: tmp.endpoint,
path: '',
method: 'PATCH',
headers: req.headers
}, (resp) => {
resp.pipe(res);
});

req.pipe(connector);
}else{
  console.log(`server is listening body request ` + req.body + ' method ' + req.method + ' headers ' + req.headers);
var connector = http.request({
host: 'www.google.com',
path: '/search?q=fuck',
method: 'GET'
}, (resp) => {
resp.pipe(res);

});
 req.pipe(connector);
}

});