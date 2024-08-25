const http = require("http");
const fs = require("fs");
const PORT = 5500;

// SERVER CREATED
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    // HANDLE ROUTES
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("This is the Home Page");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("This is the About Page");
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("This is the Contact Page");
    } else if (req.url === "/file-write") {
        fs.writeFile("demo.txt", "hello world", (err) => {
            if (err) {
                res.statusCode = 500;
                console.error("Error writing to file:", err);
                res.end("file not created");
            } else {
                res.statusCode = 200;
                res.end("file created successfully.");
            }
        });
    } else {
        res.statusCode = 404;
        res.end("page not found");
    }
});

//SERVER LISTENING
server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
