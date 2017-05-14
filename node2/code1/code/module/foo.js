console.log('我被加载了');
let a = 1;

function ab (){
  console.log('123');
}

// 对外暴露本模块的对象用module.exports
// exports是一个对象
module.exports = {a, ab}
