var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.configure(function(){

app.set('views', __dirname + '/server/veiews');
app.set('view engine', 'jade');
});

app.get('*', function(req, res){
res.render('index');

});