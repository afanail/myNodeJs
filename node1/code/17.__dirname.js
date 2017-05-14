console.log(__dirname); // dirname指向当前文件所在的路径

// ./16.js   

const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname, '16.js'), function(err, data){
  if(!err){
    console.log(data.toString());
  }else{
    console.log('err');
  }
});