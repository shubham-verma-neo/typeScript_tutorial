// Functions return types and void

function add1(n1: number, n2: number): number {
    return n1 + n2;
}

function add2(n1: number, n2: number): string {
    return n1.toString() + n2.toString();
}

function add3(n1: number, n2: number): void {
    console.log(n1.toString() + n2.toString());
}

// Functions as a Type

console.log('Functions as a Type');


function printResult(num1: number, num2: number): void {
    console.log('Result: ' + (num1 + num2));
}


// printResult(add1(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add1;
// combineValues = printResult;

console.log(combineValues(5, 12));

// Function Type and Callback

console.log('Function Type and Callback');

function addAndHandler(num1: number, num2: number, cb: (num: number) => void) {
    let result = num1 + num2;
    cb(result);
}

addAndHandler(2, 6, (result) => {
    console.log(result);
})

// unknown Type

console.log('unknown Type');

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'shubham';

if (typeof userInput === 'string') {
    userName = userInput;
}

// never Type

console.log('never Type');

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code };
    // while(true) {};
}

generateError('testing purpose', 500);