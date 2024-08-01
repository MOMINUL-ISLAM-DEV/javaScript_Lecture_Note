//*************  Number ******************* */

// Note: In the case of numbers, The method() should be called by writing the variable

const score = 100;
//console.log(score);

const balance = new Number(350);
//console.log(balance);
//console.log(balance.toString());
//console.log(balance.toFixed(2));

const anoNum = 23.8996;
//console.log(anoNum.toPrecision(2));

const hundreds = 100000;
//console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++++++++++ Math  +++++++++++++++++++++++++++++/

// Note: In the case of Math, Variables must be passed to the Math method()

//console.log(Math);

//console.log(Math.abs(-4));   //its return absoulte value and its always positive
//console.log(Math.round(4.5));

//Math.round return avarage value. For lowest value ( 0.1 - 0.4 ) and highest value (  0.5 -0.9 )

//console.log(Math.floor(4.5));    //it's return lowest value
//console.log(Math.ceil(4.6));     //it's return highest value

//console.log(Math.random());
// Math.random() always between 0 to 1 range

let randomNum = Math.floor(Math.random() * 10) + 1;
let random = Math.ceil(Math.random() * 10); //we don't use Math.celi in random number because sometimes it's return 0.
//console.log(randomNum);

const min = 15;
const max = 25;

let rangeNum = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(rangeNum);

//+++++++++++++++++++++++++  Date  ++++++++++++++++++++++++++++++++

let myDate = new Date();
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toDateString);

let myCreateDate = new Date(2023, 7, 5);
//console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date(2023, 0, 19, 2, 0);
//
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
