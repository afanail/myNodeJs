const fs = require('fs');
// 异步删除文件夹
fs.rmdir('./123', function(err){
  if(!err){
    console.log('删除成功');
  }
});


// 同步删除文件夹
fs.rmdirSync('./123')