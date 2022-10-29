var express = require('express');
var app = express();
var fs = require('fs');
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());


app.get('/', function(req, res){
    fs.readFile(__dirname + "/" + "index.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data);
    });
})

// Create a server to listen at port 8080
var server = app.listen(port, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})