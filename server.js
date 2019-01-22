const express = require('express')
const app = express();
var appRoute = require('./route');

//var cors=require('cors');

//app.use(cors());

//both index.js and things.js should be in same directory
app.use('/post', appRoute);

app.listen(3000);