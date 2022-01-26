var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

var port = PORT;

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT);
console.log('Express server running at http://127.0.0.1:'.PORT);


/*const http = require('http');
const fs = require('fs');
const express = require('express');


app.use(express.static('/public'));


const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream('index.html').pipe(res);
});

server.listen(process.env.PORT || 3000);
console.log('Server running at http://127.0.0.1:3000'); 
*/
