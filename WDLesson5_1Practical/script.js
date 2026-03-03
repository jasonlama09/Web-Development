/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/
function calculateCompoundInterest() {
  let principal = parseFloat(document.getElementById('principal').value);
  let rate = parseFloat(document.getElementById('rate').value) / 100;
  let times = parseFloat(document.getElementById('times').value);
  let years = parseInt(document.getElementById('years').value);

  let build = ""; 

  for (let year = 1; year <= years; year += 1) {
    let balance = principal * Math.pow(1 + rate / times, times * year);
    build += "Year " + year + ": $" + balance + "<br>";
  }

  document.getElementById('output').innerHTML = build;
}