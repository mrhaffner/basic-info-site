const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = q.pathname === '/' ? 'index.html' 
        : q.pathname === '/contact' ? 'contact.html'
        : q.pathname === '/about' ? 'about.html'
        : '404.html'
    fs.readFile(filename, (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Contet-Type': 'text/html'});
            res.write(data);
            return res.end();
    });
}).listen(8080);