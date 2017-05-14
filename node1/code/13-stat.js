const fs = require('fs');

// 判断指定的文件是属于文件还是文件夹

fs.stat('./test123', function(err, stats){
  // 判断是否文件或者是否文件
  console.log(stats.isDirectory());
});