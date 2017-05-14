// 导入模块

const fs = require('fs');

// 先读取文件夹
fs.readdir('./', function(err, files){
  let fileArr = [];
  // files 包含所有的文件和文件夹
  for(let i = 0; i< files.length; i++){
    // 取出数组其中的一个
    const filename = files[i];
    // 判断文件的状态
    fs.stat(`./${filename}`, function(err, stats){
      if(!err){
        // 判断只要是文件就添加到数组
        if(stats.isFile()){
          fileArr.push(filename);
        }
      }
    })
  }

  console.log(fileArr);
});