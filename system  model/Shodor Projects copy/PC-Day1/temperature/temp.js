// Converts the input Celsius value into Fahrenheit, then puts it on the screen
function convertToF() {
	// 
	var F = document.getElementById("cTemp").value * 1.8 + 32;
	document.getElementById("fEquivalent").innerHTML = Math.round(F);
}

// This should convert the input Fahrenheit value into Celsius, then put it on the screen
function convertToC() {
	//
	var C = (document.getElementById("fTemp").value -32) / 1.8;
	document.getElementById("cEquivalent").innerHTML = Math.round(C);
}