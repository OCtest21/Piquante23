const http = require('http');

const server = http.createServer((req, res) => {
    res.end('voici ta nouvelle réponse !');
});

server.listen(process.env.PORT || 3000);