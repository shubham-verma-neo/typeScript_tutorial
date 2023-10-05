console.log('Interface and Custom type as data type');

// interface Admin {
type Admin = {
    name: string;
    privileges: string[];
}

// interface Employee {
type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'shubham',
    privileges: ['SoftwareDeveloper'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number  // function overloading
function add(a: string, b: string): string  // function overloading
function add(a: Combinable, b: Combinable) {
    // Type Guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

const result = add('1', '4');
result.split(' ')

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ', emp.startDate);

    }
}

printEmployeeInformation({ name: "shubham", startDate: new Date() });

class Car {
    drive() {
        console.log('Driving a Car...');
    }
}

class Truck {
    drive() {
        console.log('Driving a Truck...');
    }

    loadCargo(n: number) {
        console.log('Loading Cargo with:', n);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

const a1: Animal = { type: 'bird', flyingSpeed: 1000 };
const a2: Animal = { type: 'horse', runningSpeed: 1200 };

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Speed of ${animal.type} is: `, speed);
}

moveAnimal(a1);
moveAnimal(a2);

const paragraph = document.querySelector('p')!;
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

 // index type type-casting

interface ErrorContainer { //{ email: 'Not valid email', username: 'Must start with capital letter' }
    [prop: string]: string | number; // index type type-casting
}

const errorBag: ErrorContainer = {
    email: 'Not valid email',
    username: 'Must start with capital letter'
}

console.log('Function Overloading');

// Optional Chaning

const fetchData = {
    id: 'u1',
    name: 'shubham',
    job: {title: "SE", description: 'NeoSoft'}
}

console.log(fetchData?.job?.title);

// Nullish Coalescing

const userInput1 = '';
const userInput2 = null;

const storeData1 = userInput1 || 'DEFAULT';
const storeData2 = userInput2 || 'DEFAULT';
const storeData3 = userInput1 ?? 'DEFAULT';
const storeData4 = userInput2 ?? 'DEFAULT'; // only null or undefined

console.log('userInput1 with || : ' + storeData1);
console.log('userInput2 with || : ' + storeData2);
console.log('userInput1 with ?? : ' + storeData3);
console.log('userInput2 with ?? : ' + storeData4);

