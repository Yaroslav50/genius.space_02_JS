// console.log("Перший рядок");

// Типи

// number BigInt string boolean null undefined Object naN Symbol

/*let a = 5;
var b = true;
const c = "WORD";
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
*/
// Приведення до числа

/*const value = false;
console.log(typeof value);
console.log(Number(value));
console.log(typeof Number(value));
*/
// Перевірка на число

/*let a = 31;
console.log(a);
const number = Number("51");
console.log(number);
console.log(Number.isNaN(number));

const string = Number("qweqwe");
console.log(string);
console.log(Number.isNaN(string));
*/
// Number.parseInt() і Number.parseFloat()
/*
console.log(Number.parseInt("j4ggggg"));
console.log(Number.parseInt("5ddd"));
console.log(Number.parseInt("12qg994"));
console.log(Number.parseInt("11.6qwfe79"));
console.log(Number.parseInt("zzxxc"));

console.log(Number.parseInt("j4ggggg"));
console.log(Number.parseFloat("5.7689405ddd"));
console.log(Number.parseFloat("12.7qg994"));
console.log(Number.parseFloat("11.60000qwfe79"));
console.log(Number.parseFloat("0.878zzxxc"));
*/

// додавання з крапкою
/*
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);
*/
// Math object
/*
console.log(Math.floor(3.98)); //3
console.log(Math.ceil(0.01)); //1
console.log(Math.round(1.2)); //1
console.log(Math.round(1.5)); //2
console.log(Math.max(1,5,99,54,76,23)); //99
console.log(Math.min(99,76,55.4,0.1,1,5)); //0.1
console.log(Math.pow(2, 4)); //16
console.log(Math.random() * (10 - 1) + 1); // дробове
console.log(Math.floor(Math.random() * (10 - 1) + 1)); // ціле
*/

// STRING

/*
let str = 'Hello!!!';
let phrase = `Here we insert ${str}`;
console.log(phrase);

const message = 'JavaScript' + ' is ' +'awesome';
console.log(message);
*/
// КОНКАТЕНАЦІЯ

/*
let result;

result = 5 + "5";
console.log(result);
console.log(typeof result);

result = 5 + "5" + 5;
console.log(result);
console.log(typeof result);

result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);
*/

// METHODS OF THE STRINGS

// length
// toLowerCase()
// toUpperCase()
// indexOf()
// includes()

/*
const js = 'JavaScript';
const message = 'Welcome to Bahamas';
console.log(message.length);
console.log("another string example".length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf('t'));
console.log(message.indexOf('hello'));
console.log(message.includes("welcome"));
console.log(message.includes("Welcome"));
*/

// BigInt

/*
const num = 984975846584549584958n;
console.log(typeof num);
*/

// OBJECTS
/*
let user = {
  name: "Ivan",
  age: 30,
  work: "false",
};

user.car = true;
user["favourite color"] = "violet";
console.log(user);
console.log(user.work);
delete user.age;
console.log(user.age);
console.log(user);
console.log(user["favourite color"]);
for (let key in user) {
  console.log(key);
  console.log(user[key]);
  console.log(`${key}: ${user[key]}`);
}
*/

/*
let codes = {
  49: "Germany",
  41: "Swiss",
  44: "GB",
  1: "Usa",
};

for (let code in codes) {
  console.log(code);
} */

//ВИВЕДЕННЯ ДАНИХ (console.log or alert)

/*
const message = "JavaScript is awesome!";
console.log(message);
alert(message);
*/

//ОТРИМАННЯ ДАНИХ (confirm or prompt)

const isConfirmed = confirm("Are You OK?");
