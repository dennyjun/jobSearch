var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('port',process.env.PORT || 8888);

app.use(express.static('./src'));
app.use(bodyParser.json());

app.get('*',function(req, res){
  res.sendFile('index.html', {'root':'src'})
});



app.listen(app.get('port'), function(){
  console.log('Express server listening on ' , app.get('port'));
});
