
var mysql = require('mysql');

var node_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  insecureAuth : true,
  database:"parveen"
});

node_connection.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
});


module.exports = node_connection
