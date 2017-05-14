
const http = require('http');
const url = require('url');

http.createServer(function(req, res){

// 解析url
  const pathname = url.parse(req.url).pathname;
  // url.parse第二个参数如果为true 那么query将自己转成对象
  const query = url.parse(req.url, true).query;

  console.log(query);

  console.log(pathname);

  res.end();
}).listen(3000);