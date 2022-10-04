// Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// let array = []
// function sortArray() {
//     console.log(array.sort());
// }
// sortArray();



// 2. Write a function that returns the reading status of each of the following books:
//     var library = [
//         {
//             author: 'Bill Gates',
//             title: 'The Road Ahead',
//             readingStatus: true
//         },
//         {
//             author: 'Steve Jobs',
//             title: 'Walter Isaacson',
//             readingStatus: true
//         },
//         {
//             author: 'Suzanne Collins',
//             title:  'Mockingjay: The Final Book of The Hunger Games',
//             readingStatus: false
//         }];


// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

function timesFour(input) {
    if (isNaN(input)){
        return false;
    }
    else if (typeof(input)==="number" || parseInt(input)){
        return Number(input) * 4
    }
    else{
        return false;
    }
}
// Define a function named convertDaystoHours that takes in one input Days. Return the
// conversion of the number of days into total hours. If the input is not numeric or
// a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function daysToHours(input) {
    if (isNaN(input)){
        return false;
    }
    else if (typeof(input)==="number" || parseInt(input)){
        return "Days to hours = " + input * 24 + "hours."
    }
    else{
        return false;
    }


}
console.log(daysToHours("5"));
// Write a function named calculateTax that takes in two inputs
// representing the totalPaid and the taxPercent. If both inputs
// are numeric or numeric strings, calculateTax should return the
// total with tax added in a string looking like: “$XX.XX”. If either
// or both inputs are not numeric or numeric strings, calculateTax
// should return false.
// calculateTax(25, 8)               // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)           // “$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false
function calculateTax(totalPaid, taxPercent) {
    if (isNaN(totalPaid, taxPercent)){
        return false;
    }
    else if (typeof(totalPaid, taxPercent)==="number" || parseInt(totalPaid, taxPercent)){
        return totalPaid + (totalPaid * (taxPercent/100))
    }
    else{
        return false;
    }
}
console.log(calculateTax(25, 8));

// Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]
// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArray = [];
// for (let x = 1; x <= 10; x++) {
//     if (x % 2 !== 0) {
//        newArray.push(myArray[x]);
//     }
// }
// console.log(newArray);

//alternate method #1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const even = arr.filter(number => {
//     return number % 2 === 0;
// });
//
// console.log(even);

//alternate method #2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const even = [];
//
// arr.forEach(function(number){
//     if (number % 2 === 0) {
//         even.push(number);
//     }
// });
//
// console.log(even);


// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’
// and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
//     example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand',
//     continent: 'Asia' }]
let objectsArray = [];
let continent = "Asia"
function createObject(cit, count){
 let newObject = { city: cit, country: count}
objectsArray.push(newObject)
}
console.log(objectsArray);
createObject("Tokyo", "Japan");
createObject("Bangkok", "Thailand");
// function addObject() {
//     objectsArray.forEach(function (object) {
//         console.log(objectsArray + continent)
//     })
// }
// addObject(objectsArray);
// re-write the following using a for loop: var i = 20; while (i >= 0)
// { console.log(i); i--; }
for (let i = 20; i >= 0; i--) {
    console.log(i);
}
// Add ‘strawberry’ to the beginning, middle, and end of the array. var
// fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];
fruits.unshift("strawberry");
fruits.push("strawberry");
fruits.splice(4, 0, "strawberry")
console.log(fruits);