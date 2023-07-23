// Strings
const stringValue = 'javaScript string';
console.log(stringValue)

// Numbers
const numberValue = 20;
console.log(numberValue)

// Arrays
const arrayExample = [10, 20, 30, 40];
console.log(arrayExample)
// Arrays work like lists in Python and supports indexing, starting from 0;
// Arrays also can contain different type of variables
console.log(arrayExample[0])

// Objects
const objectVariable = {dictionary: 'python', price: 20}
// getting values from keys
console.log(objectVariable.dictionary)
console.log(objectVariable.price)
console.log(objectVariable['dictionary'])
console.log(objectVariable['price'])

// Nested Object

const nestedObject = {
    layer1: {
        key: 1,
        layer2: {
            layer3: {
                targetValue: 20,
            }
        }
    }
}

console.log(nestedObject.layer1.key)
console.log(nestedObject.layer1.layer2.layer3.targetValue)
console.log(nestedObject['layer1']['key'])
console.log(nestedObject['layer1']['layer2']['layer3']['targetValue'])

// functions

const functionContainerVariable = function() {
   console.log(100);
}

functionContainerVariable();