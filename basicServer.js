/**
 * Created by nisum-user on 4/22/15.
 */
/*var express = require('express');
var fs = require('fs');
var index = fs.readFileSync('factorial.html');
var app = express();
app.use(express.static(__dirname + '/public'));

<link rel="stylesheet" type="text/css" href="css/style.css" />


app.get('/', function (req, res) {

    var statusList = {

        "list" : [

            { "id": "ID2",
                "name": "Priyanka Acharya"
            },
            { "id": "ID2",
                "name": "Shaurya Acharya"
            }

        ],
        "totalRecords": 2
    };
    res.end(index);
    res.write(JSON.stringify(statusList));
    res.end();

});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});*/

var http = require('http'),
    fs = require('fs');
var express=require("express"),
    app=express();


//app.use(express.compress());

app.use(express.static('public'));
  app.listen("1337");

var employees=
    [{"name":"Messi", "goals":8},
        {"name":"Ronaldo", "goals":22},
        {"name":"Costa", "goals":20},
        {"name":"Neymar", "goals":13},
        {"name":"Arabi", "goals":6},
        {"name":"Bale", "goals":3},
        {"name":"Toquero", "goals":0}];



/*http.createServer(function (req, res) {
        console.log( __dirname+req.url);
        fs.readFile(__dirname + req.url, function (err, data) {
            if (err) console.log(err);
            res.end(data);
        });






}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/

app.get('/employees', function(req, res) {
    res.contentType('application/json');
    res.send(JSON.stringify(employees));

});




