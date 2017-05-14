// 直接用引号导入的模块默认是系统
const foo = require('./module/foo.js');
const bar = require('./module/bar.js');


// 通过require导入的模块实际上导入了模块的exports对象
foo.ab();

let p1 = new bar('name');
console.log(p1.name);