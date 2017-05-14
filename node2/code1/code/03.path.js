//和路径相关的操作就要用到path
const path = require('path');

// 1.txt
const filename = path.basename('c:\\windows\\1.txt');


const mypath = path.join(__dirname, '123');
console.log(mypath)