const http = require('http');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs'
});
 
connection.connect();

http.createServer( (request, response) => {
    // query

    connection.query('SELECT * FROM tbl_node', function (error, results, fields) {
        if (error) throw error;
        console.log('The user name is: ', results[0]);
      });
       
      connection.end();

    //
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello NodeJS Drschemer New 99999');
}).listen(6969);


console.log('Server running at http://127.0.0.1:6969/');