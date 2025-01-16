//1

const celsius = 14;
const fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//2 

const daysInMonth = 31;
const hoursInMonth = (daysInMonth * 24);
console.log(hoursInMonth);

//3

const health = 100;
const enegry = 80;
const attackHealth = (health - 50);
const attackEnegry = (enegry - 30);
console.log("Здоров'я після атаки", attackHealth);
console.log("Енергія після атаки", attackEnegry);

//4

const totalPrice = 4999;
const discount = (totalPrice * 0.9);
console.log(discount)

//5

const floatNumber = 12.78;
console.log(Math.floor(floatNumber));

//6

const floatString = "45.67";
console.log(Number.parseFloat(floatString));

//7

const intString = "123";
console.log(Number.parseInt(intString));

//8

const number = "88";
console.log(Math.sqrt(number));

//9

const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(integer);
console.log(convertedInt);

const convertedString = stringNumber.toString();
console.log(convertedString);