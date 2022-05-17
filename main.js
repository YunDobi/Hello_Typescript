// function log(message) {
//   console.log(message);
// }
// let message = "Hello TS"
// log(message);
var playerMaker = function (name) { return ({ name: name }); };
var yun = playerMaker("Yun");
yun.age = 12;
console.log(yun);
