const fs = require('fs');

// 读取文件 当出现错误的情况下err有值
// fs.readFile('./test.js', function(err, data){
//   console.log(data.toString());
// });

// fs.readFile('./02-http.js', function(err, data){
//   console.log(data.toString());
// });

// 那个先执行是不一定的,因为都是耗时操作, 都放在线程池里



// 同步的方法会阻塞线程 所以test先打印
const data1 = fs.readFileSync('./test.js');
const data2 = fs.readFileSync('./02-http.js');
