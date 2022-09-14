"use strict";

console.log("Hello from external javascript");
alert('Welcome to my Website!');
let userInput = prompt("What is your favorite color?");
alert("Great, " + userInput.trim() + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
//and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will
//you have to pay?
let numberOfDays1;
numberOfDays1 = prompt("For how many days do you want to rent the movie The Little Mermaid for?");
let numberOfDays2;
numberOfDays2 = prompt("For how many days do you want to rent the movie Brother Bear for?");
let numberOfDays3;
numberOfDays3 = prompt("For how many days do you want to rent the movie Hercules for?");
let pricePerDay;
pricePerDay = 3;
let totalPay = (Number(numberOfDays1) + Number(numberOfDays2) + Number(numberOfDays3)) * 3;
alert("The total amount of money you will have to pay for renting 3 movies is: $" + totalPay);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per
//hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googleHourlyPay;
googleHourlyPay = prompt("As a contractor, how much do you get as the rate per hour from Google?");
let faceBookHourlyPay;
faceBookHourlyPay = prompt("As a contractor, how much do you get as the rate per hour from Facebook?");
let amazonHourlyPay;
amazonHourlyPay = prompt("As a contractor, how much do you get as the rate per hour from Amazon?");
let googleHours;
googleHours = prompt("How many hours did you work for Google?");
let faceBookHours;
faceBookHours = prompt("How many hours did you work for Facebook?");
let amazonHours;
amazonHours = prompt("How many hours did you work for Amazon?");
let totalWeeklyPayment = (Number(googleHourlyPay * googleHours) + Number(faceBookHourlyPay * faceBookHours) +
    Number(amazonHourlyPay * amazonHours));
alert("You will receive a payment of $" + totalWeeklyPayment + " for this week.")

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
// her current schedule.
let classIsNotFull = true;
classIsNotFull = prompt("Is the class not full?");
let noScheduleConflict = true;
noScheduleConflict = prompt("Does class schedule not conflict with her schedule?");
let studentCanEnroll = classIsNotFull && noScheduleConflict;
alert("She can enroll " + studentCanEnroll);

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members
//do not need to buy a specific amount of products.
let buysMoreThanTwoItems = true;
buysMoreThanTwoItems = prompt("Did the person buy more than two items?");
let offerHasNotExpired = true;
offerHasNotExpired = prompt("Has the offer not expired?");
let isAPremiumMember = true;
isAPremiumMember = prompt(" Is the person a premium member?");
let offerApplied = (isAPremiumMember || (buysMoreThanTwoItems && offerHasNotExpired));
alert("The premium offer can be applied to this person " + offerApplied);
