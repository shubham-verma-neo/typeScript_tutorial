/*
=========================================== Core Types ===========================================
    |---------------|---------------|-------------------------------------------------------------|
    |    number     |  1, 5.3, -10  |  All numbers, no differentiation between integer or float   |
    |---------------|---------------|-------------------------------------------------------------|
    |    string     |'Hi',"Hi",`Hi` |                        All text values                      |
    |---------------|---------------|-------------------------------------------------------------|
    |    boolean    |  true, false  |          Just these two,  "truthy" or "falsy" values        |
    |---------------|---------------|-------------------------------------------------------------|
    |    object     |   {age: 29}   | Any JavaScript object, more specific types (types of object)|
    |               |               |                          are possible                       |
    |---------------|---------------|-------------------------------------------------------------|
    |    array      |   [1,2,3]     |      Any JavaScript array, type can be flexible or strict   |
    |               |               |                  (regarding the element types)              |
    |---------------|---------------|-------------------------------------------------------------|
    |    tuple      |    [1,2]      |          Added by TypeScript: Fixed-length Array            |
    |---------------|---------------|-------------------------------------------------------------|
    |    eums       |enum{NEW, OLD} |          Added by TypeScript: Automatically enumerated      |
    |               |               |                  global constraint identifier               |
    |---------------|---------------|-------------------------------------------------------------|
    |     any       |        *      |        Any kind of value no specific kind type assignment   |
    |---------------|---------------|-------------------------------------------------------------|
*/

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

// Data Types

console.log('Data Types');

const number1 = 5;
const number2 = 2;
const printResult = true;
const resultPhrase = 'Result is : ';

const result = add(number1, number2, printResult, resultPhrase);

// Object & Array & Enum

console.log('Object & Array & Enum');

enum Role { ADMIN, READ_ONLY_USER, AUTHOR };

const person
    // : {
    // name: string;
    // age: number;
    // hobby: string[];
    // role: [number, string]; 
    // }
    = {
    name: 'shubham',
    age: 29,
    hobby: ['RubikCube', 'learningNewThing'],
    // role: [2, 'author'] // ['author', 2] will not work we need to define according to data type array // fixed-array
    role: [Role.ADMIN] // enum
}

console.log(typeof person.name, typeof person.hobby);
console.log(person);

// Any Types

console.log('Any Type');

let arr: any[];

arr = [1, 'two', true, [2, 4], { key: 'value' }];
console.log(arr);

// Union Types

console.log('Union Type');
function add1(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}


const number3 = 5;
const number4 = 2;
const string1 = 'shubham';
const string2 = 'verma';


const result1 = add1(number3, number4);
console.log('number: ', result1);

const result2 = add1(string1, string2);
console.log('string: ', result2);

// Literal Types


console.log('Literal Type');
function combine(input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}


const number5 = 5;
const number6 = 2;
const string3 = '5';
const string4 = '8';


const combineAges = combine(number5, number6, 'as-number');
console.log('combineAges: ', combineAges);

const combineStringAges = combine(string3, string4, 'as-string');
console.log('combineStringAges: ', combineStringAges);

// Type Aliases / Custom Type

console.log('Type Aliases / Custom Type');

type custom = number | string;

let input: custom;
input = 1;
console.log(typeof input);

input = 'one';
console.log(typeof input);