const http = require('http')
var port = process.env.PORT || 5000;
const requestHandler = (request, response) => {
console.log(request.url)
response.end(request.url)
 response.end(request.method)
}
const server = http.createServer(requestHandler)
server.on('request', (req, res) => {
var connector = http.request({
host: '',
path: req.url,
method: req.method,
headers: req.headers
}, (resp) => {
resp.pipe(res);
});

req.pipe(connector);
});