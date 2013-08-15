// Root Controller for all routes
// Any sub routes must be defined and assigned from here

var app = require('express')();
var path = require('path');
var fs = require('fs');
var thisName = path.basename(__filename);
console.log(thisName);
fs.readdir(__dirname, function(err, files){
    for ( var i in files ) {
        var name = files[i];

        if ( name !== thisName) {
            // console.log(name);
           require('./' + name)(app);
        }
    }
});

module.exports = app;