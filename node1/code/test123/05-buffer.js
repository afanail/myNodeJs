//buffer 二進制數據的緩存區域
const str = "小碼哥";
//轉換buffer類型
const strBuffer = Buffer.from(str);
console.log(strBuffer);
//轉換字符串類型學
const str1 = strBuffer.toString();

//readFile方法
const fs = require("fs");
fs.readFile("./01-1node初体验.js",function(err,data){
  if(!err){
    console.log(data.toString());
  }
})
fs.readFileSync("./02-write.js")