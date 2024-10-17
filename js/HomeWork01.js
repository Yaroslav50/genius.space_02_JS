//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
/*
let namen;
let city;
namen = "Ivan";
city = namen;
console.log(city);
*/

//***2***
//Який буде результат виконання скрипта?
/*
let name = "Olga";
console.log(`привіт ${1}`); // привіт 1
console.log(`привіт ${"name"}`); // привіт нейм
console.log(`привіт ${name}`); // ? привіт ольга
*/

//***3***
//Видобути число зі змінних
/*
let a = "5";
let aNum = Number(a);
console.log(aNum);
console.log(typeof aNum);

let b = "13cvb";
let bNum = parseInt(b);
console.log(bNum);
console.log(typeof bNum);
console.log(typeof aNum.toString(10));

let c = "12.9sxdcfgv";
let cNum = parseFloat(c);
console.log(cNum);
console.log(typeof cNum);
*/
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
/*
let summ = (0.1 * 10 + 0.2 * 10) / 10;
console.log(summ);
*/

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
/*
let biggest = Math.max(20, 100, 50, 40);
console.log(biggest);
*/

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
/*
console.log(Math.random() * (4 - 2) + 2);
console.log(Math.round(Math.random() * (10 - 1) + 1));
*/
//***7**
//дізнатись довжину message
/*
const message = "Welcome to Bahamas!";
console.log(message.length);
*/
//***8**
//вивести в консоль message  великими літерами
/*const message = "Welcome to Bahamas!";
console.log(message.toUpperCase());
*/
//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
/*
let myUser = {
  userName: "Yaroslav",
  userAge: 33,
  userCity: "Kyiv",
};
console.log(myUser);
delete myUser.userCity;
myUser["like flowers"] = true;
console.log(myUser);
*/
//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
/*for (let key in myUser) {
  console.log(myUser);
  console.log(myUser[key]);
}
for (let key in myUser) {
  if (myUser.hasOwnProperty(key)) {
    console.log(`${key} : ${myUser[key]}`);
  }
}
*/
