const http = require('http');
const fs = require('fs');
const path = require('path');

const data = require('./data');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data))
    }
    else if(req.method === 'POST' && req.url === '/api/files') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            if (!fs.existsSync('./files')){
                fs.mkdirSync('./files');
            }
            fs.writeFile('./files/file-test.txt', body, err => {
                if(err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Fail');
                }
                else {
                    res.statusCode = 201;
                    res.end('Success');
                }
            })
        })
    }
    else if(req.method === 'DELETE' && req.url === '/api/files') {
        const filePath = path.join(__dirname, '/files/file-test.txt');
        if (fs.existsSync(filePath)){
            fs.unlink(filePath, err => {
                if(err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Fail');
                }
                else {
                    res.statusCode = 200;
                    res.end('Success');
                }
            })
        }
        else {
            res.statusCode = 500;
            res.end('File not found...');
        }
    }
    else if(req.method === 'GET' && req.url === '/api/files') {
        const filePath = path.join(__dirname, '/files/file-test.txt');
        if (fs.existsSync(filePath)){
           res.statusCode = 200;
           res.end(filePath);
        }
        else {
            res.statusCode = 500;
            res.end('File not found...');
        }
    }
});

server.listen(8080, () => {
    console.log('Server Initiated...');
})