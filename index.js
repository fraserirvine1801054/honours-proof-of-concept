//new code using express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var router = express.Router();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8080;

var port = PORT;

//render the page in ejs
app.get('/', function(req,res){
    res.render('index.ejs');
});



/**
//old code for rendering page in .html
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});
/*

//getting information from the search form
router.post('/search', function(req,res,next) {
    console.log(req.body);
});

//getting information from search form (old code)
/**
app.post('/search', function(req,res){
    console.log("search has been performed");
});
*/

app.listen(PORT);
console.log('Express server running at http://127.0.0.1:'.PORT);





//old code being commented out
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
