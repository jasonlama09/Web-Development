/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function calculateDistance() {
  let x1 = Number(document.getElementById("x1").value);
  let y1 = Number(document.getElementById("y1").value);
  let x2 = Number(document.getElementById("x2").value);
  let y2 = Number(document.getElementById("y2").value);

  let distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );

  document.getElementById("calculateBtn").textContent = distance.toFixed(2);
}

// hook button click to function
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateDistance);



/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/



