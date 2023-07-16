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

const age = 15;
//const isOldEnough = (age) => 18;
if (age >= 18) {
  console.log(`Sarah is of age 🎉 `);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is not of age. Wait another ${yearsLeft} years 😢`);
}

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's BMI");
} else {
  console.log("John's BMI is higher than mark's BMI");
}

//type conversion
const inputYear = 1991;
console.log(Number(inputYear) + 20);

//coercion
console.log("I am " + 23 + "years old");
