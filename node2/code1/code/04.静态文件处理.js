const http = require('http');
// 操作url
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
  // 过滤chrome的收藏夹图标请求
  if (req.url == '/favicon.ico'){
    return;
  }
  //1 req.url 就是请求过来的url地址, 过滤掉参数的
  const pathname = url.parse(req.url).pathname;
  // 获取扩展名
  const extname = path.extname(pathname);



// 根据扩展名获取mine类型
  getMime(extname, function(mime){
    fs.readFile(path.join(__dirname, 'demo', pathname), function(err, data){
      if(!err){
        res.writeHead(200, {'Content-type': `${mime};charset=uft-8`});
        res.end(data);
      }else{
        res.writeHead(404, {'Content-type': 'text/html;charset=uft-8'});
        res.end('404');
      }
    });
  });
}).listen(3000);


// 这里的callback就是一个函数,而且函数需要一个参数
function getMime(extname, callback){
  // 异步不能用return 
  // 获取mime.json文件里的数据
  fs.readFile(path.join(__dirname, 'mime.json'), function(err, data){
    const mimeObj = JSON.parse(data.toString());
     callback(mimeObj[extname]);
  });
}