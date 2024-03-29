var express = require('express');

var app = express();
var routes=require('./routes/route.js');

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


app.get('/',routes.home);
app.get('/:city',routes.city);

var port = process.env.PORT || 8080;

var server = app.listen(port, function (req, res) {
  console.log('Server is up and running at http://localhost:' + port)
});