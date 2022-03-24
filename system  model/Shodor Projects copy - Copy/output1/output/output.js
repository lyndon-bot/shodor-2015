/* Author: Aaron Weeden, Shodor, 2015 */

/* This code runs when the user clicks the "Run" button */
run = function() {

  /* Generate a random number */
  var randNum = Math.random();
  var output;

  output = randNum;

  /* Print the computed output in HTML */
  document.getElementById("output-box").innerHTML = output;
}
