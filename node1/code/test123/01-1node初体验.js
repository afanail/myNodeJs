//node 只是一个运行环境
//所有要搭建服务器.可以利用http模块
//创建一个服务器分为三步
//1.导入模块
const http = require("http");
//2.创建一个服务器
const server = http.createServer(function(req,res){
  res.end("<h1>hello world</h1>");
});

//3启动服务器
server.listen(3000,"127.0.0.1",function(){
  console.log("服务器启动成功,并在3000端口监听")
})