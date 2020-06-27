const express = require('express');
const bodyParser = require('body-parser');

var {mongoose}= require('./database/mongoose');

var app = express();
var studentrecord = require('./Controller-Student/studentrecord');

app.use(bodyParser.json());

app.use('/Student', studentrecord);

app.listen(3000,() => console.log("server started at port 3000"));
