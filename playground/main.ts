// function log(message) {
//   console.log(message);
// }
// let message = "Hello TS"
// log(message);

//if use let, typescirpt using the var in the loop for componenting older version

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true, "a", false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0, Green = 1, Purple = 2, Blue = 3};
// let backgroundColor = Color.Red;


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

// class Point {
//   x: number;
//   y: number;

//   draw() {
//     console.log('x: ' + this.x, "y:" + this.y);
//   }

//   getDistance(another: Point ) {
//     // ...
//   }
// }


// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

// type PlayerSet = {
//   readonly name: string,
//   age?: number
// }

// const playerMaker = (name: string) : PlayerSet => ({name})
// const yun = playerMaker("Yun")
// yun.age = 12
// yun.name = "d"

// console.log(yun)
const player : [string, number, boolean] = ["yun", 12, true]
