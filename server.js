var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const db = require("./backend/database/db.js");
app.use(bodyParser.json());


// adding the bookroutes
require('./backend/route/book.route')(app);


app.listen(3000,() =>{
  console.log('server is running in 3000 port')
})