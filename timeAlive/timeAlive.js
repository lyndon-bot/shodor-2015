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
	var msFromBDayToToday = msFrom1970ToToday - msFrom1970ToBDay ;
	
	// Once msFromBDayToToday is computed, this will print the age (in ms) to the console
	
	// Questions you should be able to answer to complete this task:
	// How many milliseconds are in a second? 1000
	// How many seconds are in a minute? 60
	// How many minutes are in a hour? 60
	// How many hours are in a day? 24
	// How many days are in a year? 365.25 (we will use this approximation for now)
	var years = msFromBDayToToday/ (1000*60*60*24*365.25);
	var days = msFromBDayToToday / (1000*60*60*24);
	var hours = msFromBDayToToday / (1000*60*60);
	var minutes = msFromBDayToToday/ (1000*60);
	var seconds = msFromBDayToToday / (1000);
	// Don't be afraid to use extra variables to hold values from intermediate steps
	// that don't have significance at the end of the program
	var intermediateValue;
	
	
	var roundedYears = Math.floor(years);
	var roundedDays = Math.floor(days);
	var roundedHours = Math.floor(hours);
	var roundedMinutes = Math.floor(minutes);
	var roundedSeconds = Math.floor(seconds);
	var roundedmsFromBDayToToday  = Math.floor(msFromBDayToToday );
	
	console.log("You are " + years+ " years old at this moment!");
	console.log("You are " + days+ " days old at this moment!");
	console.log("You are " + hours+ " hours old at this moment!");
	console.log("You are " + minutes+ " minutes old at this moment!");
	console.log("You are " + seconds+ " seconds old at this moment!");
	console.log("You are " + msFromBDayToToday + " milliseconds old at this moment!");
	console.log("You are aproximatly " + roundedYears+ " years old at this moment!");
	
	
	
	
	// In order to have whole numbers for your last output, you may want to round
	// Example use of a rounding function called Math.floor()
	// var ageInYears = 15.8564356;
	// var aWholeNumber = Math.floor(ageInYears);
	// aWholeNumber is equal to 15
	// Example use of modulus to get a remainder
	// var notAFullYear = ageInYears % 1;
	// notAFullYear is equal to 0.8564356
	var notAFullYear = years - roundedYears;
	var days2 = notAFullYear * 365.25;
	console.log("Number of days since last birthdy: " + days2);
	
	
	// Bonus: use expressions to measure age and print out messages based on this
	if(msFromBDayToToday < 1){
		console.log("You aren't even a millisecond old! You should be napping.");
	}
}
