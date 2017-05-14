const fs = require('fs');


// 往已有的文件夹拼接数据
fs.appendFile('./1.txt', '\r\naaaa', function(err){
  if (!err){
    console.log('追加成功');
  }
}); 