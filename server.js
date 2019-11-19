const http = require("http");
const fs = require("fs");

const server = http.createServer(
    (req, res) => {
        const file = fs.createReadStream("./myblog.txt");
        file.pipe(res);
    }
)

server.listen(8080, 'localhost');