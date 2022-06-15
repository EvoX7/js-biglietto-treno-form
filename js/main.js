// User input 
const distanceKm = parseInt("How far are you willing to travel (in km)");
const userAge = parseInt("Insert your age");

// Message to user input 
let message;

// Defined initial ticket cost
let cost = distanceKm * 0.21;
console.log("Your total Trip cost is:" + cost);

// Discount conditions 
if (userAge <= 17) {
    cost = cost - ((cost * 20) / 100);
    message = ("You are entitled to a 20% discount! Ticket cost is:" + cost.toFixed(2) + "€");

} else if (userAge >= 65) {
    cost = cost - ((cost * 40) / 100);
    message = ("You are entitled to a 40% discount! Ticket cost is:" + cost.toFixed(2) + "€");

} else {

    message = ("Ticket cost is:" + cost.toFixed(2) + "€");

}

console.log(message);



