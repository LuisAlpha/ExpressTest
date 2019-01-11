const express = require('express');
const app = express();

app.set('views','./views')
app.set('view engine', 'pug');

app.get('/', function(req, res){
res.render('index',{title:'Hey', message: 'Saca las lolis',label :'ndc'});
});
app.listen(3000);
