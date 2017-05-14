const fs = require("fs");
fs.readdir('./',function(err,files){
  if(!err){
    let fileNameArr = [];
    !function recursion(i){
      if( i == fileNameArr.length){return;}
      fs.stat(`./${fileName}`,function(err,stats){
        if(stats.isDirectory()){
          fileNameArr.push(fileName);
        }
      })
      recursion(i+1);
    }(0);
  }
})