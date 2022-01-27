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

//get query
/*
app.get('/search', function(req,res){
    var queryKeywords = req.query.searchTerms;
    var queryDataType = req.query.dataType
    //debug
    console.log("DEBUG:\n" + 
                "SearchTerms: " + queryKeywords + "\n" +
                "dataType: " + queryDataType
    );
});
*/

//recieve form data
app.post('/search', function(req,res){
    console.log("search has been performed");
    console.log(req.body);
    
    //extract object into individual strings
    var searchTerms = req.body.searchTerms;
    var dataType = req.body.dataType;

    //prepare AJAX request
    




    /*
    //run python script to query data.gov.uk api
    let {PythonShell} = require('python-shell');

    let options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: 'pythonscripts',
        args: [JSON.stringify(req.body)]
    };

    PythonShell.run('query_api.py', options, function(err, results){
        if (err) throw err;
        console.log('results: %j', results);
    });
    */

    /*
    pyshell.on('message', function(message){
        console.log(message);
    });
    */
    //return res.redirect('/');
});

app.listen(PORT);
console.log('Express server running at http://127.0.0.1:'.PORT);

/**
 * Resources used:
 * https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js
 * https://stackoverflow.com/questions/20089582/how-to-get-a-url-parameter-in-express
 * 
 */

// ===== old code being commented out =====
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
