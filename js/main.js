const submitButton = document.querySelector("#generate-btn");


  // Event listner 
submitButton.addEventListener("click", function () {
  // User input
  const userName = document.getElementById("inputName").value;
  const distanceKm = document.getElementById("inputDistance").value;
  const userAge = document.getElementById("inputAge").value;

  // Message to user input
  let message;

  // Defined initial ticket cost
  let cost = distanceKm * 0.26;

  // Discount conditions
  if (userAge <= 17) {
    cost = cost - (cost * 15) / 100;
    message =
      "You are entitled to a 20% discount! Ticket cost is: " +
      cost.toFixed(2) +
      "€";
  } else if (userAge >= 65) {
    cost = cost - (cost * 35) / 100;
    message =
      "You are entitled to a 40% discount! Ticket cost is: " +
      cost.toFixed(2) +
      "€";
  } else {
    message = "Ticket cost is: " + cost.toFixed(2) + "€";
  }

  console.log(document.getElementById("inputName").value);
  console.log(document.getElementById("inputDistance").value);
  console.log(document.getElementById("inputAge").value);

  document.getElementById("userName").innerHTML = `${userName}`;
  document.getElementById("userDistance").innerHTML = `${distanceKm}` + " km";
  document.getElementById("ticketCost").innerHTML = `${message}`;
  document.getElementById("coachNumber").innerHTML = "coach 7 - seat 34";
});
