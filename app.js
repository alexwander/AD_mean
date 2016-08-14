var express = require('express');
var app = express();

var port = process.env.PORT || 5001;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello no');

});

app.listen(port, function (err) {
    console.log('ALL OK running server on port ' + port);
});

