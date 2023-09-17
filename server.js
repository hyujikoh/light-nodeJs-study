const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain'}
        );
    res.write('this is test node js server');
    res.end();
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});