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

http.createServer(function (req, res) {
        console.log( __dirname+req.url);
        fs.readFile(__dirname + req.url, function (err, data) {
            if (err) console.log(err);
            res.end(data);
        });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


