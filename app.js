var express = require('express');
var router = express.Router();
var app = express();
app.use(express.static('node_modules'));
app.use(express.static('src'));
app.use(express.static('router'));
// app.use('/',router);
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});


var server = app.listen(18080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express server listening on port', port);
});

module.exports = router;

