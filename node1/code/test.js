
const http = require('http');


let a = 0;


// 每次请求只会调用createServer里面的回调函数
const server = http.createServer(function(request, response){

  a += 1;
  response.end(`${a}`)
});

server.listen(3000, '127.0.0.1', function(){
  console.log('服务器成功启动,并在3000端口监听');
});


