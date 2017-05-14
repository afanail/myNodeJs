const nunjucks = require('nunjucks');
const http = require('http');

http.createServer((req, res)=>{
  // 模板数据绑定
  // 能把数据跟模板进行绑定,生成新的html
  const html = nunjucks.render('index.njk');
  res.end(html);
}).listen(80);

