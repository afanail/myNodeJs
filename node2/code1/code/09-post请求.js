const http = require('http');
const querystring = require('querystring');
// 不管get post都会进来这个方法
http.createServer(function(req, res){

  // 判断当前的请求是否是get或者POST

//  nodejs原生处理post请求的参数
  if (req.method.toLowerCase() == 'post'){

    // node为了追求极致把post的参数提分成多块 
    let  data = '';
    // on方法用来监听事件, 一旦接收到post参数那么就会调用data事件的回调方法
    req.on('data', function(chunk){
      data += chunk;
    });
    // 一旦全部接收完毕那么就会触发end事件
    req.on('end', function(){
      const obj = querystring.parse(data);
      console.log(obj);
      res.end();
    });

    
  }
}).listen(3000);