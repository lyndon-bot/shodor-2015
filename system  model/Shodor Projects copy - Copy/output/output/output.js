/* Author: Aaron Weeden, Shodor, 2015 */

/* This code runs when the user clicks the "Run" button */
run = function() {

var sum = 0
for (i = 1; i <= 999; i++) {
	if (i%3 == 0 || i%5 == 0) {
	
		tmp = i
		sum += tmp

}
}
var output = sum;

  /* Print the computed output in HTML */
  document.getElementById("output-box").innerHTML = output;
}
