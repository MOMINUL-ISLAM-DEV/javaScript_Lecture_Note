"use strict"; //treate all JS code as newer version
//alert  (3 +3)  //we are using nodejs, not browser...

let userName = "Mominul";
let age = 20;
let isLogedIn = true;
let state;

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undifined =>
//symbol => unique

//object
//console.log(typeof undefined);     //undefined
//console.log(typeof null);         // object

let score = "33a";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc" => Nan  but type is number
//true => 1   false => 0

let isLoggedIn = undefined;
//here, for srtring ""/null/undefined => false;
// but another all time true

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(typeof isLoggedIn);
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

let someNumber = true;
let stringInSomeNumber = String(someNumber);
//console.log(typeof someNumber);
//console.log(stringInSomeNumber);
//console.log(typeof stringInSomeNumber);

//**********************    Operations   *********************/
let value = 3;
let negValue = -value;
//console.log(typeof negValue);

// console.log(2 + 2);
// console.log(4 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(3 % 2);

let str1 = "Mominul";
let str2 = " Hello";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 1 + "2");
// console.log("1" + 1 + 2);

/******************* Comparision ******************** */

//   < >   <=   >=   ==   !=   ===   !==

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
//The reason is that an equality check == and comparisons > < >= <= work differently
//Comparisons convert null to a number, treatintg it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false

//********************** DataTye*************************** */
//Primitive : 7 types
//String, Number, Boolean, null, undefined, Symbol, Bigint

//Reference (Non primitive)
// Array, Objects, Functions

const phyMarks = 99;
const phyMarksValue = 99.8;
const isSigned = true;
const outSideTemp = null;
let userEmails;
const id = Symbol("123");
const anoId = Symbol("123");

//console.log(id == anoId);

const heros = ["shaktiman", "naagraj", "super man"];
let myObj = {
  name: "Mominul",
  age: 20
};
const myFunc = function() {
  console.log("Hello World");
};
// myFunc();           Calling function

/***********************  Memory Type    *********************/
// Stack (Primitive), Heap (Non-Primitive)

let youtubeName = "Ayman Sadiq";
let anotherYoutubeName = youtubeName;
anotherYoutubeName = "Sadman Sadik";

//console.log(youtubeName);
//Here, replace just secound string not first one

//console.log(anotherYoutubeName);
//It's because stack memory type

let object1 = {
  name: "Ayman",
  age: 29
};
let object2 = object1;
object2.age = 30;
//console.log(object2);
//Here, Change original value for Heap memory
//console.log(object1);

//++++++++++++++++++++++++  String ++++++++++++++++++++++/

let name = "Mominul";
let BioMarks = 92;
//console.log(`Student name is ${name} and his biology marks is ${BioMarks} `);

const gameName = new String("Hockey");
// console.log(gameName);
//console.log(gameName[3]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf("y"));

const newString = gameName.substring(0, 4);
//console.log(newString);

const anoString = gameName.slice(3, 6);
//console.log(anoString);

const newStringsOne = "        Srabon   ";
//console.log(newStringsOne);
//console.log(newStringsOne.trim());

const url = "htttps://mominul.com/mominul%20islam";
//console.log(url.replace("%20", "_"));
//console.log(url.includes("mominul"));
//console.log(url.includes("ayman"));
