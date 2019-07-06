var express = require('express');
var router = express.Router();

var pg = require("pg")
var connectionString = "pg://postgres:1234@localhost:5432/prueba";
var client = new pg.Client(connectionString);
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


  var queryString = "SELECT name, age FROM alumnos " ;
var query = client.query(queryString);

query.on("row", (row, result)=> {
result.addRow(row);
});

query.on("end", function (result) {
//LOGIC
});
  
});

module.exports = router;
