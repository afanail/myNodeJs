const randomstring = require("randomstring");

for(let i= 0; i< 10; i++){
  console.log(randomstring.generate({
  length: 15,
  charset: 'numeric'
  }))
}