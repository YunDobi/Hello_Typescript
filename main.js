// function log(message) {
//   console.log(message);
// }
// let message = "Hello TS"
// log(message);
//if use let, typescirpt using the var in the loop for componenting older version
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// let message;
// message = 'abc';
// let endWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('C');
// //Convention always have to bew Capitalize
// interface Point {
//   x: number
//   y: number
// }
// let drawPoint = (point: Point) => {
//   //...
// }
// drawPoint({
//   x: 1,
//   y: 2
// })
//Cohesion
