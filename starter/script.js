/*let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Jay");
console.log(20);

let firstName = "May";
console.log(firstName);
console.log(firstName);
console.log(firstName);
const Pi = 3.1415;
console.log(Pi);

let javascriptIsFun = false;
console.log(typeof javascriptIsFun);
console.log(typeof false);
console.log(typeof 23);
console.log(typeof "Epharus");

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;
console.log(age);
console.log(typeof age);

const birthYear = 2000;
 birthYear = 2001;
 const job;

var job = "programmer";
job = "teacher";
*/

// // Basic Operators
// logical
// arithmetic
// assignment
// comparison

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// const firstName = "Jay";
// const lastName = "keep";
// console.log(firstName + " " + lastName);

// //assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x -= 10; // x = x -10
// x++;
// x--;
// console.log(x);

//comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);

// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
//BMI = mass / (height * height);

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// const BMIMark = massMark / (heightMark * heightMark); //mass/height  78/1.69

// console.log(BMIMark);

// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIJohn);

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// console.log(BMIMark > BMIJohn);
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// 46.15384615384615
// 47.17948717948718
// false
//  TEMPLATE LITERAL
// const lastName = "Ndumia";
// const job = "swimmer";
// const birthYear = 2002;

// const ndumia = "I'm" + " " + lastName + ",a" + " " + job;
// console.log(ndumia);

// const newNdumia = `I'm ${lastName}, a ${job}!`;

// console.log(newNdumia);

// const age = 15;
// //const isOldEnough = (age) => 18;
// if (age >= 18) {
//   console.log(`Sarah is of age 🎉 `);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is not of age. Wait another ${yearsLeft} years 😢`);
// }

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's BMI");
// } else {
//   console.log("John's BMI is higher than mark's BMI");
// }

// //type conversion
// const inputYear = 1991;
// console.log(Number(inputYear) + 20);

// //type coercion
// console.log("I am " + 23 + "years old");
// console.log("23");

// let n = "1" + 1; //'11'
// n = n - 1; //10
// console.log(n);

//note
//when a number preceeds a string, we get a string
//when a string preceeds a number, we get a number

//5 falsy values: 0, '', undefined, null, NaN and false

// console.log(Boolean(0)); //false
// console.log(Boolean("Epharus")); //true
// console.log(Boolean({})); //true
// console.log(Boolean("")); //false
// console.log(Boolean(undefined)); //false

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("Get a job");
// }

// let height; //or 0//Height is undefined
// //let height //
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = 18;

// if (age === 18) {
//   console.log("You are an adult 🎉");
// }
// if (age == 18) {
//   console.log("You are an adulty 😘");
// }

// const favourite = Number(prompt("whats your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("YEAH");
// } else if (favourite === 7) {
//   console.log("7 is a number");
// } else {
//   console.log("Number is not either 7 or 23");
// }

//Basic logic operators THE AND, OR 7 NOT OPERATORS
// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(hasDriversLicense);
// console.log(hasGoodVision);

// if (hasDriversLicense || hasGoodVision) {
//   console.log("sarah is a driver🎉");
// } else {
//   console.log("someone else should driver 😢");
// }

//CHALLENGE THREE

// gymnastics teams
// Dolphins && Koalas
// compete against each other 3 times
// winner is the one with the highest average score
// how do we get average?

// we get average from adding the three score from each team and dividing by 2

//Dolphins = 96 + 108 + 89; //293

// Koalas = 88 + 91 + 110; //289

// let scoreDolphins = (97 + 112 + 80) / 3;
// let scoreKoalas = (109 + 95 + 50) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreDolphins >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No winner 😢");
// }

//The switch statement

// const day = "sunday";
// switch (day) {
//   case "monday":
//     console.log("plan your day");
//     console.log("Go to meeting");
//     break;
//   case "tuesday":
//     console.log("welcome to tuesday");
//     break;
//   case "wednesday":
//     console.log("almost there");
//     break;
//   default:
//     console.log("Not a day");
// }

// statements and expressions
//  expressions provide a value
//  example
//  3 + 4 = 7
//  true
//  false
//  1991

//  statements eg else if etc

//ternary operator

// const age = 10;
// // age >= 15 ? console.log("Go out 🎉") : console.log("I like staying indoors");

// const drink = age >= 18 ? "wine 💋" : "milk 🥛";
// console.log(drink);

// //Challenge 4

//amount spent = 275,40, 430

//const bill = 430
//tip = (430*100)/20

// tip = 15% (50 = 300)
// 20% over 300 meaning 301+

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill} the tip was ${tip}, and the total value ${bill + tip}`
);
