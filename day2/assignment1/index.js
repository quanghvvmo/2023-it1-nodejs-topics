const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // API GET users
    if (req.url === "/api/users" && req.method === "GET") {
        const users = [
            { name: "Nguyen Van A", age: 20 },
            { name: "Nguyen Van B", age: 21 },
            { name: "Nguyen Van C", age: 22 },
            { name: "Nguyen Van D", age: 23 },
        ];
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(users));
    }

    // API POST createFile
    if (req.url === "/api/files" && req.method === "POST") {
        fs.writeFile("files/file-test.txt", "Hello content!", function (err) {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end("Fail");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("Success");
            }
        });
    }

    // API DELETE deleteFile
    if (req.url === "/api/files" && req.method === "DELETE") {
        const filePath = path.join(__dirname, "files", "file-test.txt");
        fs.unlink(filePath, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end("Fail");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("Success");
            }
        });
    }

    // API GET getFile
    if (req.url === "/api/files" && req.method === "GET") {
        const filePath = path.join(__dirname, "files", "file-test.txt");
        res.setHeader("Content-Type", "text/plain");
        res.end(filePath);
    }
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
