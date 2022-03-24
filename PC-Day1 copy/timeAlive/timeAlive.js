// Compute how long you have been alive, in seconds, minutes, hours, days, and years
// based on your birthday. 
// For instance, you may be 
// 16.325342625 years old, which is 
// 5962.83139378 days old, which is
// 143107.953451 hours old, etc.
// 
// Send this information to the console using console.log()
// 
// Also, compute your age in terms of whole numbers; for instance, you might be
// 16 years, 123 days, 2 hours, 4 minutes, and 52 seconds old
//
// Also, send this information to the console using console.log()
// 
// This code is executed because the button is clicked in the HTML page 
function timeAlive() {
	
	// These lines grab the values inside the input fields in the HTML page
	var bm = document.getElementById("mm").value;
	var bd = document.getElementById("dd").value;
	var by = document.getElementById("yyyy").value;
	
	var bDate = new Date(by, bm-1, bd);	 // This creates a Date object for your birthday
	
	var msFrom1970ToBDay  = bDate.getTime(); // Milliseconds from Jan 1 1970 to birthday
	var msFrom1970ToToday = new Date(); // Milliseconds from Jan 1 1970 to today
	
	// Your coding can begin here
	// What arithmetic operation will compute milliseconds from your birthday to today?
	var msFromBDayToToday;
	
	// Once msFromBDayToToday is computed, this will print the age (in ms) to the console
	console.log("You are " + msFromBDayToToday + " milliseconds old at this moment!");
	
	// Questions you should be able to answer to complete this task:
	// How many milliseconds are in a second? 
	// How many seconds are in a minute? 
	// How many minutes are in a hour? 
	// How many hours are in a day? 
	// How many days are in a year? 365.25 (we will use this approximation for now)
	var years;
	var days;
	var hours;
	var minutes;
	var seconds;
	// Don't be afraid to use extra variables to hold values from intermediate steps
	// that don't have significance at the end of the program
	var intermediateValue;
	
	
	
	
	// In order to have whole numbers for your last output, you may want to round
	// Example use of a rounding function called Math.floor()
	// var ageInYears = 15.8564356;
	// var aWholeNumber = Math.floor(ageInYears);
	// aWholeNumber is equal to 15
	// Example use of modulus to get a remainder
	// var notAFullYear = ageInYears % 1;
	// notAFullYear is equal to 0.8564356
	
	
	
	// Bonus: use expressions to measure age and print out messages based on this
	if(msFromBDayToToday < 1){
		console.log("You aren't even a millisecond old! You should be napping.");
	}
}
