

//导入
const path = require('path');

// basename

const lujing = 'c:\\123\\1.txt';

// 获取路径中的文件名和后缀名
console.log(path.basename(lujing));
// 取文件所在的路径
console.log(path.dirname(lujing));

const  wenjianming = 'index.php';
// 获取文件的扩展名
console.log(path.extname(wenjianming));

const mypath = path.join(__dirname, '05-url.js');
console.log(mypath);