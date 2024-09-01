"use strict";
// let stringArr = ['one', 'two', 'three']
// let guitars = ['Strat', 'Les Paul', 5051]
// let mixedData = ['EVH', 1984, true]
// Literal types
let myName;
// It has to be Olamarx again
myName = 'Olamarx';
const add = (a, b) => {
    return a + b;
};
// Any function that is not returning anything should have a void type of data
const log = (message) => {
    console.log(message);
};
log('Hello');
log(add(2, 3));
log(add(3, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (e, f) {
    return e * f;
};
log(multiply(2, 5));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default parameter value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
log(addAll(2, 3, 2));
log(addAll(2, 3));
log(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
log(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
// Angle bracket
let d = 'world';
let e = 'world';
// The Angle bracket cant be used in React
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful, TS sees no problem here but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
// (10 as unknown) as string
// The DOM
const img = document.getElementById('img');
const myImg = document.getElementById('img');
img.src;
// First variation
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if(year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }
let year = document.getElementById('year');
let thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
