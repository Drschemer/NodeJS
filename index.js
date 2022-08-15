const http = require('http');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs'
});
 
connection.connect(function(err) {
  if (err) throw err;
});
//Select
connection.query('SELECT * FROM tbl_node', function (error, results, fields) {
  if (error) throw error;
  console.log('The user name is: ', results);

});
//insert
var sqlinsert = "insert into tbl_node (f_name) values ('Joe Doe')";
connection.query(sqlinsert , function (error, results) {
  if (error) throw error;
  console.log('insert complete', results);
});
//update
var sqlupdate = "update tbl_node set f_name = 'sunee8' where f_id = 3";
connection.query(sqlupdate , function (error, results) {
  if (error) throw error;
  console.log('update complete', results);
});
//delete
var sqldelete = "delete from tbl_node where f_name = 'sunee8'";
connection.query(sqldelete , function (error, results) {
  if (error) throw error;
  console.log('delete complete', results);
});

http.createServer( (request, response) => {
    // query

 
       
      


     

     //

    //
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello NodeJS Drschemer New 99999');
}).listen(6969);




connection.end();
console.log('Server running at http://127.0.0.1:6969/');
