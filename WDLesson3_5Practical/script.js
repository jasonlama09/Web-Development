/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
let length = document.getElementById("length");
let width = document.getElementById("width");
let output = document.getElementById("output");

let area = length.value * width.value;
output.innerHTML = area;
}

function recPerimeter(){
let length = document.getElementById("plength");
let width = document.getElementById("pwidth");
let output = document.getElementById("output");

let l = Number(length.value);
let w = Number(width.value);

let perimeter = 2 * (l + w);
output.innerHTML = perimeter;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){

}

function cirPerimeter(){

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}