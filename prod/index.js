"use strict";
/*
//Exercicio 1

let pi = "3.14159" //declared as a string, it can be resolved removing the quotation marks or simply by using the method number that converts a string into a number variable
let tau = Number(pi) * 2

console.log(`${tau} is ${pi} times two.`)
*/
/*
//Exercicio 2

let pie: string //the "problem" should be resolved just by specifying the type of data that the let pie should receive, making it impossible to assign a number to it"

pie = "blueberry"

console.log(`i like to eat ${pie}-flavored pie.`)
*/
/*
//Exercicio 3
let isDouglas: boolean //the problem should be resolved adding a value to the boolean let "isDouglas"

isDouglas = false

console.log(`${isDouglas ? "Oh, Hi Douglas" : "Who are u ?"}`)
*/
//Exercicio 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber,
];
members[0] = Number("12345");
console.log(members);
