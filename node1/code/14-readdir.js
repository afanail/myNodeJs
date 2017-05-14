const fs = require('fs');

//读取文件夹内容
fs.readdir('./', function(err, files){

  // 此时files是一个数组. 里面包含了所有的文件包括文件夹
  console.log(files);
})