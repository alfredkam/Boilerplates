console.log("Proxy Server Starting");

var http = require("http");
var request = require("request");
var express = require("express");

var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static('./app')); /* need to indicate the directory you will be serving */
app.use(express.logger());

/* Example of proxy http GET */
app.get("/", function(req, res){
    /* proxy your desired response */
    request("http://localhost:3000/", function(error, response){
        //returns message back to client
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        } else {
            console.log(error);
            res.send(error);
        }
    });
});

/* Example of proxy http POST */
app.post("/", function(req, res){
    /* return your desired response */
    request({
        method : "POST",
        uri : "http://localhost:3000/",
        json : req.body
    }, function (error, response, body) {
        //return response here 
        // using either res.send() or res.json()
       // eg: res.json(JSON.parse(response));
    });
});

/* Example of proxy http PUT */
app.put("/", function(req, res){
    /* return your desired response */
    request({
        method : "PUT",
        uri : "http://localhost:3000/",
        json : req.body
    }, function (error, response, body) {
        //return response here 
        // using either res.send() or res.json()
       // eg: res.json(JSON.parse(response));
    });
});

/* Example of proxy http DELETE */
app.delete("/", function(req, res){
    /* return your desired response */
    request({
        method : "DELETE",
        uri : "http://localhost:3000/",
        json : req.body
    }, function (error, response, body) {
        //return response here 
        // using either res.send() or res.json()
       // eg: res.json(JSON.parse(response));
    });
});

console.log("Listening, by default port 3000");
app.listen(3000);