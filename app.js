'use strict';

var express = require('express'), 
    port = 9999,
    app = express();

var testRoute = require('./api/route/TestRoute');
testRoute(app);

app.listen(port);
console.log('api server started on' + port);