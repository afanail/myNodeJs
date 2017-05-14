function person (name){
  this.name = name;
}

let p1 = new person('xiaoqiang');

let p2 = {
  name: 'xiaohong'
};

console.log(p1.name);
console.log(p2.name);