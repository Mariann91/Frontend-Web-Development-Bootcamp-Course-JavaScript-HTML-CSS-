const myBoolean = true;

const myString = 'hello word';

const first_number = 20;

let secondNumber = 40;
secondNumber = 80;

const myArray = [myBoolean, myString];

const myObject = {firstProperty: myArray, sumProperty: first_number + secondNumber};

console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

const variable1 = 20;
const variable2 = "40";
const resultVariable = variable1 + variable2;
console.log(resultVariable);

const objectVariable = {
    property1: 'I am property one',
    property2: 'I am property two',
    property3: 'I am property three',
}

console.log(objectVariable.property2);

const myArray2 = [20, 30, 40];

console.log(myArray[2])