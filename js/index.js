var express = require('express');  
var app = express();  
const httpsPort = 5050;  
var https = require('https');  
var fs = require('fs');  
var options = {  
    key: fs.readFileSync('../server.key', 'utf8'),  
    cert: fs.readFileSync('../server.cert', 'utf8')  
};  
var secureServer = https.createServer(options, app).listen(httpsPort, () => {  
    console.log(">> CentraliZr listening at port " + httpsPort);  
});  
app.get('/certificateLab', function(req, res) {  
    res.sendFile('C:/Users/nasty/Desktop/3/BPOMP/lab3/Certificate/index.html');  
});  