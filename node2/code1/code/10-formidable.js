var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
 
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    // 设置上传的文件夹
    form.uploadDir = "./img";
    // 设置保存扩展名
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      console.log(fields);
      res.end();
    });
 
    return;
  }
 
  // show a file upload form 
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);