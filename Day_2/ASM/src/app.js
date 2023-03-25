var http = require('http');
var fs = require('fs');
var url = require('url');
var listUsers = require('./models/user')

const server = http.createServer((req, res) => {
    // Parse the request url
    const reqUrl = url.parse(req.url).pathname
    console.log(reqUrl)
    // Compare our request method
    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write((JSON.stringify(listUsers.users)))
            res.end()
        }
        else if(reqUrl == "/api/files"){
            fs.readFile('C:\\Users\\hoang\\Documents\\GitHub\\2023-it1-nodejs-topics\\Day_2\\ASM\\src\\files\\file-test.txt',function(err,data){
                if(err){
                    throw err
                }
                res.write(data.toString())
                res.end()               
            }) 
        }
    } else if (req.method == "POST") {
        if (reqUrl == "/api/files") {
            fs.appendFile('C:\\Users\hoang\\Documents\\GitHub\\2023-it1-nodejs-topics\\Day_2\\ASM\\src\\files\\file-test.txt','abc',function(err){
                if(err){
                    throw err
                }
                res.write("success")
                res.end()
            })
            
        }
        else if(reqUrl == "/api/files/delete")
        {
            fs.unlink('C:\\Users\\hoang\\Documents\\GitHub\\2023-it1-nodejs-topics\\Day_2\\ASM\\src\\files\\file-test.txt',function(err){

                if(err){
                    throw err;
                }
                res.write("sucess");
                res.end();
            });
        }
        
    }
})
server.listen(8080,function () {
    console.log('listening on port 8080');
    
})