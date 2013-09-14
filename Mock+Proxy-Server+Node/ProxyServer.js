'use strict'

var http = require("http"),
    request = require("request"),
    express = require("express"),
    path = require('path');

var app = express();

//common configurations
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
});

app.configure('development', function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    /* need to indicate the directory you will be serving */
    app.use(express.static('../'));
    app.use(express.errorHandler());
});

/* start of proxy routes */

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

/* end of proxy routes */

//set server to listen to ...
http.createServer(app).listen(app.get('port'), function(){
    console.info('Express server listening on port '+ app.get('port'));
});