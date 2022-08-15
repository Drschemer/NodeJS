const express = require('express');
const app = express();
const port = 3000;

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:id', (req, res) => {
    var sqldata = 'SELECT f_name FROM tbl_node where f_id = ' + req.params.id;
    connection.query(sqldata, function (error, results, fields) {
        if (error) throw error;
        var nameOfUser = results[0];
        res.send('The name is:' + JSON.stringify(nameOfUser));
    //res.send('Login page');
});
});
app.post('/', (req, res) => {
    res.send('About page');
});

app.post('/:id/:name', (req, res) => {
    var sqldata = 'SELECT * FROM tbl_node where f_id = ' + req.params.id + ' and f_name = "' + req.params.name +'"';
    connection.query(sqldata, function (error, results, fields) {
        if (error) throw error;
        res.json({
            user: results[0],
        });
    //res.send('Login page');
});
});

app.get('/', (req, res) => {
    res.json({
        id: 1,
        name: 'Metin'
    });
});
app.get('/new',(req, res)=>{
   console.log('param = > ',req.body)
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});