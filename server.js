const express = require('express'); //라이브러리 첨부
const app = express(); //라이브러리 객체 생성


app.use(express.static(__dirname + '/public'));

app.listen(8080, function() {
    console.log('listening server');
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/write', function(req,res){
    res.sendFile(__dirname + '/public/write.html')
});
