// 导入模块

const fs = require('fs');

// 先读取文件夹
fs.readdir('./', function(err, files){
// 用来存放文件的数组
  let fileArr = [];
  // 自执行函数 =-> 用来递归
  !function recursion(i){
    // 当我们的i == file.length的时候就是遍历完成了
    if (i == files.length){
      console.log(fileArr);
      return;  // 没必要往下走
    }
    // 获取数组中的第i项
    const filename = files[i];
    fs.stat(`./${filename}`, function(err, stats){
      // 判断是否是文件
      if(stats.isDirectory()){
        fileArr.push(filename);
      }
      recursion(i + 1);
    })
  }(0)

});