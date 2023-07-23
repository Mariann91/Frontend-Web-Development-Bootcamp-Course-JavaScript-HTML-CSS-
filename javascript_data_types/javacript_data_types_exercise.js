const myBoolean = true;

const myString = 'hello word';

const first_number = 20;

let secondNumber = 40;
secondNumber = 80;

const myArray = [myBoolean, myString];

const myObject = {firstProperty: myArray, sumProperty: first_number + secondNumber};

console.log(myObject)
console.log(myObject.sumProperty)
console.log(myObject.firstProperty[1])