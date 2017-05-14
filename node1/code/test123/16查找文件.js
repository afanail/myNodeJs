const fs = require("fs");

fs.readdir('./',function(err,files){
  if(!err){
      let fileArr = [];

     !function recursion(i){
        if(i == files.length){
          return;
        }
        const fileName = files[i];
        fs.stat(`./${fileName}`,function(err,stats){
          if(stats.isDirectory()){
            fileArr.push(fileName);
          }
        })
        recursion(i+1);
     }(0);


  }
})