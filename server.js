'use strict';

var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
    ecstatic({
        root: __dirname + '/public'
    })
).listen(2122);