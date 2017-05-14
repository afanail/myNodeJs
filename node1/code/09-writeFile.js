// 导入fs

const fs = require('fs');


// 写入文件

// 参数1:  要写入的文件路径, 如果不存在会自己创建
// 参数2: 要写入的内容
// 参数3: 回调函数
fs.writeFile('./1.txt', '小强1', function(err){
  if(!err){
    console.log('写入成功');
  }
});

//同步方法

// fs.writeFileSync('./1.txt', '哈哈');
