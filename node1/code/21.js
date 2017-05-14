
const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function(req, res){

  


  if(req.url == '/1.html'){
    // 读取1.html中的内容
    
    fs.readFile(path.join(__dirname, '1.html'), function(err, data){

      if(!err){
        res.writeHead(200, {'Content-type':'text/html;charset=utf-8;'});
        res.end(data)
      }else{
        res.writeHead(200, {'Content-type':'text/html;charset=utf-8;'});
        res.end('读取失败');
      }
    });
  }else{
    res.writeHead(404, {'Content-type':'text/html;charset=utf-8;'});
    res.end('404了呦');
  }


}).listen(3000);