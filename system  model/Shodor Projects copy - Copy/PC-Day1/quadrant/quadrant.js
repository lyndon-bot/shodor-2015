// Compute the quadrant that a point is in, then send out that info by console.log()
// If there is time, determine if a point is on an axis or two, then log that.
function whichQuadrant() {
	
	// these lines grab the values inside the input fields in the HTML page
	var xCoordinate = document.getElementById("xVal").value;
	var yCoordinate = document.getElementById("yVal").value;
	
	// replace "true" with an expression (or two) that uses xCoordinate & yCoordinate 
	// to help you determine what quadrant the point is ins
	if(xCoordinate > 0 && yCoordinate > 0){
		console.log("Your point is in the first quadrant, buddy."); 
	}
		
		
	if (xCoordinate < 0 && yCoordinate > 0){
		console.log("Your point is in the second quadrant, buddy.");
		
	}
	
	if (xCoordinate < 0 && yCoordinate < 0){
		console.log("Your point is in the third quadrant, buddy.");
		
	}
	
	if (xCoordinate > 0 && yCoordinate < 0){
		console.log("Your point is in the fourth quadrant, buddy.");
		
	}
	
	
	
}
