const nunjucks = require('nunjucks');
const http = require('http');

http.createServer((req, res)=>{
  // 模板数据绑定
  // 能把数据跟模板进行绑定,生成新的html
  const html = nunjucks.render('index.njk', 
  {
    'news':[
      {'title':'新闻标题1', 'date':'2017年5月14日19:06:49'},
      {'title':'新闻标题2', 'date':'2017年5月14日19:06:49'},
      {'title':'新闻标题3', 'date':'2017年5月14日19:06:49'},
      {'title':'新闻标题4', 'date':'2017年5月14日19:06:49'},
      {'title':'新闻标题5', 'date':'2017年5月14日19:06:49'},
    ]
  });
  res.end(html);
}).listen(80);
