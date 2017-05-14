// node为了追求极致把很多功能划分各个模块.我们在开发中药用到谁就导入谁

//跟文件相关的操作就用FS模块

const fs = require('fs');

// 读取文件内容

// 参数1 读取的文件路径
// fs.readFile('./test.js', function(err, data){
//   // 当如果没有出现错误的情况就是读取成功
//   if (!err){
//     console.log(data.toString());
//   }
// });

// 同步方法 会阻塞线程,后面的代码没法执行
const data = fs.readFileSync('./test.js');
console.log(data);

console.log('1');