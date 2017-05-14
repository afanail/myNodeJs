
// Buffer =>  二进制数据的暂缓区


const str = '小码哥';
// 把字符串转换成Buffer类型
const strBuffer = Buffer.from(str);

console.log(strBuffer);

// 转成字符串

const str1 = strBuffer.toString();

console.log(str1);