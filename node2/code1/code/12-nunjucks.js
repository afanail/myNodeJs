// 为什么要用模板引擎
// 模板 + 数据  = html
const nunjucks = require('nunjucks');
const http = require('http');

http.createServer(function(req, res){
  // 第一个参数就要渲染的模板页面  
  // 第二个参数是一个对象, 最终是绑定到页面中对应的变量
  // const html = nunjucks.render('index.njk', {'person':{'name':'小强', 'age':20}});
  // const html = nunjucks.render('index.njk', {'news':['新闻标题1啊','新闻标题3啊','新闻标题2啊','新闻标题4啊']});

  const html = nunjucks.render('index1.njk');
  res.end(html);
}).listen(80);


