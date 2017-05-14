const http = require('http');

http.createServer(function(req, res){

  // 怎么拿到客户端的请求地址
  // req.url 能拿到客户端发送url地址

  // console.log(req.url);
  // 判断url == '/favicon.ico'

  // chrome浏览器的细节. 忽略收藏夹图标的请求


  res.writeHead(200, {'Content-type':'text/html;charset=utf-8;'});

  if (req.url == '/favicon.ico'){
    return;
  }


  if(req.url == '/'){
    res.end('首页');
  }else if(req.url == '/haha'){
    res.end('哈哈页面');
  }else{
    res.writeHead(404, {'Content-type':'text/html;charset=utf-8;'});
    res.end('404, 亲~~~');
  }



}).listen(3000);