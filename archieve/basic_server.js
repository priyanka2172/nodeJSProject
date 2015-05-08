var http = require('http');
var port = 1337;
http.createServer(function(req, res) {
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
    console.log(req);
    console.log(statusList);
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    res.write(JSON.stringify(statusList));
    res.end();
}).listen(port);
