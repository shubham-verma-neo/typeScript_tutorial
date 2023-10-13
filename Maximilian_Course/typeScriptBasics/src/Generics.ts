// Built-in Generic Type

const names: Array<string> = [] // string[]
// names[0].split();

const promise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise<string> decide the type of resolve data type')
    }, 2000)
})

promise.then(data => {
    data.split(' ')
});

// Own Generic Type

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

// const mergeObj = merge<string, number>({ name: 'Shubham' }, { age: 28 });
// const mergeObj = merge<{name: string}, {age: number}>({ name: 'Shubham' }, { age: 28 });
const mergeObj = merge({ name: 'Shubham' }, { age: 28 });
console.log(mergeObj);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} element`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Shubham', 'Kushal']));

// 'keyOf' Constraint

// function extractAndConvert(obj: object, key: string) {
function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}

// console.log(extractAndConvert({}, 'name'));
console.log(extractAndConvert({ name: 'shubham' }, 'name'));

// Generic Classes 

// class DataStorage<T> {
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>;
textStorage.addItem('Shubham');
textStorage.addItem('Max');
console.log(textStorage.getItems());
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>;
numberStorage.addItem(12);
numberStorage.addItem(4);
console.log(numberStorage.getItems());
numberStorage.removeItem(12);
console.log(numberStorage.getItems());


// Object not properly works in Generic Classes because object are non-primitive data type 
//for this we need Generic classes that only work with object 

// const obj = new DataStorage<object>;
// // obj.addItem({ name: 'Shubham' });
// // obj.addItem({ name: 'Max' });
// const ShubhamObj = { name: 'Shubham' };
// const MaxObj = { name: 'Max' };
// obj.addItem(ShubhamObj);
// obj.addItem(MaxObj);

// console.log(obj.getItems());

// obj.removeItem(ShubhamObj);
// // obj.removeItem({ name: 'Shubham' });
// console.log(obj.getItems());

// Partial Generic

interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

// Readonly 

const nameS: Readonly<string[]> = ['Shubham', 'Max'];
// nameS.push('Manu');
// nameS.pop();