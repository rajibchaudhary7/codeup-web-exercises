// Prompt the u[ser for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user
// if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except
// for the number the user entered.
// var oddNumber = parseInt(prompt("Enter an odd number between 1 and 50 ?"))
// var checkNumber = (oddNumber % 2)
// for (let i = 1; i < 3; i++) {
//     if (checkNumber !== 0) {
//         alert(oddNumber + " is an odd number.");
//         break;
//     } else {
//         (alert(oddNumber + " is an invalid input"));
//     }
// }
var oddNumber = 0;
while (true) {
    oddNumber = parseInt(prompt("Enter an odd number between 1 and 50 ?"));
    if (oddNumber % 2 === 0 || oddNumber > 50 || oddNumber < 0) {
        alert("This is an invalid input");
    } else if (oddNumber % 2 > 0) {
        break;
    }

}

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except
// for the number the user entered.
console.log("Number to skip is: " + oddNumber);
for(let i = 1; i < 50;i++){
    if(i == oddNumber) {
        console.log("Yikes! Skipping number: " + i)
        continue;
    }else if(i % 2 !== 0){
        console.log("Here is an odd number: " + i)
    }
}