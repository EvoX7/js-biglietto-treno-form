const submitButton = document.querySelector("#generate-btn");
const outputCost = document.querySelector("#ticketCost");

submitButton.addEventListener("click", function () {
  // User input
  const distanceKm = document.getElementById("inputDistance").value;
  const userAge = document.getElementById("inputAge").value;

  // Message to user input
  let message;

  // Defined initial ticket cost
  let cost = distanceKm * 0.21;
  // console.log("Ticket cost is:"+ cost.toFixed(2) + "€");

  // Discount conditions
  if (userAge <= 17) {
    cost = cost - (cost * 20) / 100;
    message =
      "You are entitled to a 20% discount! Ticket cost is:" +
      cost.toFixed(2) +
      "€";
  } else if (userAge >= 65) {
    cost = cost - (cost * 40) / 100;
    message =
      "You are entitled to a 40% discount! Ticket cost is:" +
      cost.toFixed(2) +
      "€";
  } else {
    message = "Ticket cost is:" + cost.toFixed(2) + "€";
  }

  console.log(message);

  console.log(document.getElementById("inputName").value);
  console.log(document.getElementById("inputDistance").value);
  console.log(document.getElementById("inputAge").value);
});
