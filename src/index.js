"use strict";
// var prompt = require("prompt-sync")();
// //
// // get input from the user.
// //
// let num1 = parseInt(prompt("Enter Your first number "));
// let num2 = parseInt(prompt("Enter Your second number "));
// let operators = prompt("Enter operator (+, - , * , /)");
// if (operators == "+") {
//   console.log(`the answer of ${num1} ${operators} ${num2} = ${num1 + num2}`);
// } else if (operators == "-") {
//   console.log(`the answer of ${num1} ${operators} ${num2} = ${num1 - num2}`);
// } else if (operators == "*") {
//   console.log(`the answer of ${num1} ${operators} ${num2} = ${num1 * num2}`);
// } else if (operators == "/") {
//   console.log(`the answer of ${num1} ${operators} ${num2} = ${num1 / num2}`);
// } else {
//   console.log("Please Enter Your Correct Operator");
// }
Object.defineProperty(exports, "__esModule", { value: true });
// export {};
function clock() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    console.log(`${hour}  : ${min} : ${sec}`);
}
clock();
