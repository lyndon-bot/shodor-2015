/* Author: Aaron Weeden, Shodor, 2014 */
/* Modifier: Phil List, Shodor, Lyndon Bowen, Shodor 2015 */

var N_ROWS = 16;
var N_COLS = 20;
var WIDTH  = 32;
var HEIGHT = 32;
var INTERVAL_SIZE = 150;
var N_SEALS = 10;
var N_FISH = 25;
var N_TaggedSEALS = 10;
var N_UntaggedFISH = 20;
var FISH_HUNGER_DURATION = 300;
var SEAL_HUNGER_DURATION = 120;
var theSeals = [];
var theFish = [];
var TheTaggedSeals = [];
var TheUntaggedFish = [];
var theCells = [];	// an array representing every location (cell) an animal can be
var vol = []; // an array representing the vol of fish tags at every location (cell)
var TAG_VOLUME = 40;
var Canvas;          // HTML5 Canvas
var Context;   // Drawing context of the HTML5 Canvas
var fishImg = new Image();
fishImg.src = "img/fishT.gif";
var sealImg = new Image();
sealImg.src = "img/seals.gif";
var UntaggedFishImg = new Image();
 UntaggedFishImg.src = "img/fish.gif";
var TaggedSealsImg = new Image();
TaggedSealsImg.src = "img/sealsT.gif";
var anyGreen = 10;
var Interval;


// each of these numbers, when added to an animal's location, shows the cell in that direction
var above = -N_COLS;
var below = N_COLS;
var toTheLeft = -1;
var toTheRight = 1;

/*
 * This function creates a fish object. When using it, you must pass in a location for
 * the fish. If you do not pass in the age or volume (of the fish's tag), default values
 * are set for those properties.
 */
fishObj = function(locationInGrid, howOld, howLoud){
	this.species		= 'fish';
	this.eatChance		= .9;
	this.reprodChance	= .2;
	this.hunger			= FISH_HUNGER_DURATION;
	this.loc			= locationInGrid;
	if(typeof howOld === "undefined" || typeof howOld !== "number"){
		this.age		= 0;
	}else{
		this.age		= howOld;
	}
	if(typeof howLoud === "undefined" || typeof howLoud !== "number"){
		this.vol			= TAG_VOLUME;
	}else{
		this.vol			= howLoud;
	}
}

UntaggedFishObj = function(locationInGrid, howOld, howLoud){
	this.species		= 'fish';
	this.eatChance		= .9;
	this.reprodChance	= .05;
	this.hunger			= FISH_HUNGER_DURATION;
	this.loc			= locationInGrid;
	if(typeof howOld === "undefined" || typeof howOld !== "number"){
		this.age		= 0;
	}else{
		this.age		= howOld;
	}
	
/*
 * This function creates a seal object. When using it, you must pass in a location for
 * the seal. If you do not pass in the age, a default value is set for that property.
 */
sealObj = function(locationInGrid, howOld){
	this.species		= 'seal';
	this.eatChance		= .5;
	this.reprodChance	= .04;
	this.hunger			= SEAL_HUNGER_DURATION;
	this.loc			= locationInGrid;
	if(typeof howOld === "undefined" || typeof howOld !== "number"){
		this.age		= 0;
	}else{
		this.age		= howOld;
	}
}

TaggedSealObj = function(locationInGrid, howOld){
	this.species		= 'seal';
	this.eatChance		= .1;
	this.reprodChance	= .05;
	this.hunger			= SEAL_HUNGER_DURATION;
	this.loc			= locationInGrid;
	if(typeof howOld === "undefined" || typeof howOld !== "number"){
		this.age		= 0;
	}else{
		this.age		= howOld;
	}
	}
	if(typeof howLoud === "undefined" || typeof howLoud !== "number"){
		this.vol			= TAG_VOLUME;
	}else{
		this.vol			= howLoud;
	}
}

/*
 * This function is called when the webpage loads (or reloads).
 */
onload = function() {
	reset();
}

/*
 * This function initializes values for the canvas.
 */
initCanvas = function() {
	theCells = [];
	vol = [];
	Canvas = document.getElementById("canvas");
	Canvas.width = N_COLS * WIDTH;
	Canvas.height = N_ROWS * HEIGHT + anyGreen;
	Context = Canvas.getContext("2d");
}

/*
 * This function places agents in the canvas at random locations.
 */
placeAgents = function() {
	var agentCounter;
	var location;
	var vacantSpot = true;

	/* 
	 * To keep track of where seals and fish are on the canvas,
	 * we create a big array that has a cell that represents every
	 * possible location that an animal can be. Since we are just 
	 * starting, we place 'empty' in every cell of the array. Later,
	 * we will change values of the array as animals are placed in
	 * certain locations.
	 */
	for(location = 0; location < N_ROWS*N_COLS; location++){
		theCells[location] = "empty";
		vol[location] = 0;
	}

	/* 
	 * For each fish you want to create:
	 * 1. create random location,
	 * 2. test if that location is occupied by another animal,
	 * 3a. if so, repeat 1 & 2, 
	 * 3b. if not, assign the fish to that spot.
	 */
	for(agentCounter = 0; agentCounter < N_FISH; agentCounter++){

		location = Math.floor(Math.random()*(N_ROWS*N_COLS));
		
		while(theCells[location] != "empty"){
			location = Math.floor(Math.random()*(N_ROWS*N_COLS));
		}

		// add a fish object into this array of fish objects, give it a random start age
		theFish[agentCounter] = new fishObj(location, Math.floor(25*Math.random()), TAG_VOLUME);
		// mark in the location array that a fish is here
		theCells[location] = "fish";
		vol[location] = theFish[agentCounter].vol;
		
		TheUntaggedFish[agentCounter] = new UntaggedFishObj(location, Math.floor(25*Math.random()), TAG_VOLUME);
		// mark in the location array that a fish is here
		theCells[location] = "Tfish";
		vol[location] = TheUntaggedFish[agentCounter].vol;
	}

	// Repeat steps for seals
	for(agentCounter = 0; agentCounter < N_SEALS; agentCounter++){

		location = Math.floor(Math.random()*(N_ROWS*N_COLS));
		
		while(theCells[location] != "empty"){
			location = Math.floor(Math.random()*(N_ROWS*N_COLS));
		}
		// mark that a seal is here
		theCells[location] = "seal";
		// add a fish object into this array of seal objects, give it a random start age
		theSeals[agentCounter] = new sealObj(location, Math.floor(25*Math.random()));
	}

	drawAnimals();
}

/*
 * Draw all the animals (and background) on the canvas
 */
drawAnimals = function(){
	var i;
	// Draw background
	Context.fillStyle = "blue";
	Context.fillRect(0, 0, Canvas.width, Canvas.height-anyGreen);

	// Optional: if you want to indicate the volume of a tag at a given spot in the
	// water, here is a decent spot to do it.
	
	//Context.fillStyle = "black";
    //for(i = 0; i<N_ROWS*N_COLS; i++){
    //Context.fillText(vol[i], xPos(i)*WIDTH, yPos(i)*HEIGHT);
    //} 
	
	if(anyGreen>0){
		var randNum = Math.random();
  		var output;
		Context.fillStyle = "green";
		Context.fillRect(0, Canvas.height-anyGreen, Canvas.width, Canvas.height);
	}

	for(i = 0; i < theFish.length; i++){
		Context.drawImage(fishImg, xPos(theFish[i].loc)*WIDTH, yPos(theFish[i].loc)*HEIGHT);
	}
	for(i = 0; i < theSeals.length; i++){
		Context.drawImage(sealImg, xPos(theSeals[i].loc)*WIDTH, yPos(theSeals[i].loc)*HEIGHT);
	}
}

/*
 * Given the number in the "grid" of the canvas, return the x-position
 */
xPos = function(num){
	return (num % N_COLS);
}

/*
 * Given the number in the "grid" of the canvas, return the y-position
 */
yPos = function(num){
	return Math.floor(num/N_COLS);
}

/*
 * An animal array is passed in, and a location on the canvas.
 * This returns which animal in the array is at that location,
 * or -1 if there is no animal there.
 */
whichIsAt = function(arrayOfAnimals, certainLocation){
	var agentCounter;
	for(agentCounter = 0; agentCounter < arrayOfAnimals.length; agentCounter++){
		if(arrayOfAnimals[agentCounter].loc == certainLocation){
			return agentCounter;
		}
	}
	return -1;
}

/*
 * This function is called repeatedly every so many milliseconds; it calls functions
 * that have the animals do what they should do each step: get hungrier (possibly die), 
 * get older (and possibly die again), try to eat (if near something edible), try to
 * reproduce, compute sound, and move. Then the canvas should be redrawn with the new data.
 */
simulate = function() {
	checkHungryF();
	checkHungryS();
	checkAgeF();
	checkAgeS();
	tryEatF();
	tryEatS();
	tryReproduceF();
	tryReproduceS();
	computeSound();
	strongestSoundS();
	move();
	drawAnimals();
	
}

/*
 * Checks each fish and seal object to see if the animal dies froms starvation.
 * If not, reduce the counter of how many time steps left before such a death.
 * 
 * To do: currently, only fish die from hunger, implement this for the seals too.
 */
checkHungryF = function() {
	var agentCounter;

	for(agentCounter=0; agentCounter<theFish.length; agentCounter++){
		if(theFish[agentCounter].hunger == 0){
			theFish.splice(agentCounter,1);
		}else{
			theFish[agentCounter].hunger--;
		}
	}

}

checkHungryS = function() {
	var agentCounter;

	for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){
		if(theSeals[agentCounter].hunger == 0){
			theSeals.splice(agentCounter,1);
		}else{
			theSeals[agentCounter].hunger--;
		}
	}

}

/*
 * Checks each fish and seal object to see if the animal dies froms old age.
 * If not, increase the age, to approach the looming death.
 * 
 * To do: implement seal death for old age
 */
checkAgeF = function() {
	var agentCounter;

	for(agentCounter=0; agentCounter<theFish.length; agentCounter++){
		if(theFish[agentCounter].age > 80){
			theCells[theFish[agentCounter].loc] = "empty";
			vol[theFish[agentCounter].loc] = 0; // what once was a source of sound is now "gone"
			theFish.splice(agentCounter,1);
		}else{
			theFish[agentCounter].age++;
		}
	}
	for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){
		// is there a command in the fish code above that is not applicable for seals?
	}
}

checkAgeS = function() {
	var agentCounter;

	for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){
		if(theSeals[agentCounter].age > 80){
			theCells[theSeals[agentCounter].loc] = "empty";
			vol[theSeals[agentCounter].loc] = 0; // what once was a source of sound is now "gone"
			theSeals.splice(agentCounter,1);
		}else{
			theSeals[agentCounter].age++;
		}
	}
	//for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){
		// is there a command in the fish code above that is not applicable for seals?
	//}
}

/*
 * You see how seals eat: by eating fish. How do fish eat? by eating the seaweed at the
 * bottom of the screen. 
 * 
 * To do: In this function, ensure that fish can eat when they are on the "bottom"
 * of the canvas. When a fish eats, make sure its hunger property is reset to
 * FISH_HUNGER_DURATION.
 */
tryEatS = function() {
	var agentCounter;

	// Test for eating: loop through fish, if at the bottom, eat! The seaweed does not 
	// need to disappear or diminish in any way upon being eaten.
	for(agentCounter=0; agentCounter<theFish.length; agentCounter++){
		// If the fish is on the bottom of the screen
		
	}
	// More complicated test for eating: seals finding fish to eat
	for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){
		// If the seal is next to a fish
		if(theCells[theSeals[agentCounter].loc+above] == "fish" && theSeals[agentCounter].eatChance>=Math.random()){
			theFish.splice(whichIsAt(theFish,theSeals[agentCounter].loc+above),1);
			theCells[theSeals[agentCounter].loc+above] = "empty";
			vol[theSeals[agentCounter].loc+above] = 0;
			theSeals[agentCounter].hunger = SEAL_HUNGER_DURATION;
		}else if(theCells[theSeals[agentCounter].loc+toTheRight] == "fish" && theSeals[agentCounter].eatChance>=Math.random()){
			theFish.splice(whichIsAt(theFish,theSeals[agentCounter].loc+toTheRight),1);
			theCells[theSeals[agentCounter].loc+toTheRight] = "empty";
			vol[theSeals[agentCounter].loc+toTheRight] = 0;
			theSeals[agentCounter].hunger = SEAL_HUNGER_DURATION;
		}else if(theCells[theSeals[agentCounter].loc+below] == "fish" && theSeals[agentCounter].eatChance>=Math.random()){
			theFish.splice(whichIsAt(theFish,theSeals[agentCounter].loc+below),1);
			theCells[theSeals[agentCounter].loc+below] = "empty";
			vol[theSeals[agentCounter].loc+below] = 0;
			theSeals[agentCounter].hunger = SEAL_HUNGER_DURATION;
		}else if(theCells[theSeals[agentCounter].loc+toTheLeft] == "fish" && theSeals[agentCounter].eatChance>=Math.random()){
			theFish.splice(whichIsAt(theFish,theSeals[agentCounter].loc+toTheLeft),1);
			theCells[theSeals[agentCounter].loc+toTheLeft] = "empty";
			vol[theSeals[agentCounter].loc+toTheLeft] = 0;
			theSeals[agentCounter].hunger = SEAL_HUNGER_DURATION;
		}
	}
}

tryEatF = function() {
	var agentCounter;

// Test for eating: loop through fish, if at the bottom, eat! The seaweed does not 
	// need to disappear or diminish in any way upon being eaten.
	for(agentCounter=0; agentCounter<theFish.length; agentCounter++){
		
		if ( theFish[agentCounter].hunger <= 50 && yPos(theFish[agentCounter].loc) !== N_ROWS - 1){
			console.log("im here in the loop" + theFish[agentCounter].loc);
			theFish[agentCounter].loc += below;
			
		}
	}
}

/*
 * This function has all the animals check for neighbors of their own species.
 * If conditions are right, they reproduce.
 * 
 * To do: implement reproduction for seals
 */
tryReproduceF = function() {
	var agentCounter;

	for(agentCounter=0; agentCounter<theFish.length; agentCounter++){

		// If the fish is next to another fish, if there is room to give birth,
		// and if the probability is met, then give birth.
		// Why do I check for fish in only two directions?
		if(theFish[agentCounter].reprodChance>=Math.random() && 
			yPos(theFish[agentCounter].loc) != N_ROWS-1 &&
			xPos(theFish[agentCounter].loc) != 0 &&
			theCells[theFish[agentCounter].loc+below+toTheLeft] == "empty" &&
			(theCells[theFish[agentCounter].loc+above] == "fish" || 
				theCells[theFish[agentCounter].loc+toTheRight] == "fish")){
			
			theFish.push(new fishObj(theFish[agentCounter].loc+below+toTheLeft, 0, 0));	// baby fish added to the array of fish
			theCells[theFish[agentCounter].loc+below+toTheLeft] = "fish";		// baby fish added to the array of all creatures
		}
	}
}
	
tryReproduceS= function() {
	for(agentCounter=0; agentCounter<theSeals.length; agentCounter++){

		// If the seal is next to another seal, and if there is room to give birth
		// And the probability is met, then give birth
		// why do I check in only two directions?
		if(theSeals[agentCounter].reprodChance>=Math.random() && 
			yPos(theSeals[agentCounter].loc) != N_ROWS-1 &&
			xPos(theSeals[agentCounter].loc) != 0 &&
			theCells[theSeals[agentCounter].loc+below+toTheLeft] == "empty" &&
			(theCells[theSeals[agentCounter].loc+above] == "seal" || 
				theCells[theSeals[agentCounter].loc+toTheRight] == "seal")){

			theSeals.push(new sealObj(theSeals[agentCounter].loc+below+toTheLeft, 0, 0));	// baby seals added to the array of fish
			theCells[theSeals[agentCounter].loc+below+toTheLeft] = "fish";		// baby seals added to the array of all creatures
			
			}
		}
	}


/*
 * This function has all the animals move. 
 * If a sound is heard, the animal moves accordingly; else it moves randomly.
 */
move = function(){
	var agentCounter;
	var dest = -1;
	for(agentCounter = 0; agentCounter < theFish.length; agentCounter++){
		
		dest = moveRandom(theFish[agentCounter].loc);
		
		if(dest>0){
			theCells[theFish[agentCounter].loc] = "empty";
			theCells[dest] = "fish";
			theFish[agentCounter].loc = dest;
			vol[dest] = theFish[agentCounter].vol;
		}
	}
	dest = -1;
	for(agentCounter = 0; agentCounter < theSeals.length; agentCounter++){

		if(strongestSoundS(theSeals[agentCounter].loc)>0){
			switch(strongestSoundS(theSeals[agentCounter].loc)){
				case 1:
					dest = theSeals[agentCounter].loc+above;
					break;
				case 2:
					dest = theSeals[agentCounter].loc+toTheRight;
					break;
				case 3:
					dest = theSeals[agentCounter].loc+below;
					break;
				case 4:
					dest = theSeals[agentCounter].loc+toTheLeft;
			}
		}else{
			dest = moveRandom(theSeals[agentCounter].loc);
		}
		if(dest>0 && theCells[dest] == "empty" ){
			theCells[theSeals[agentCounter].loc] = "empty";
			theCells[dest] = "seal";
			theSeals[agentCounter].loc = dest;
		}
	}
}

/*
 * Passing in current location of an animal, returns a randomly assigned
 * neighboring cell if it is empty, else, -1 is returned.
 *
 * This allows for "wrap around" movement around the canvas. Is this 
 * realistic? how could you prevent this? 
 */
moveRandom = function(origin) {
	var dir = Math.floor(4*Math.random());
	var spot = origin;
	switch(dir){
		case 0:
			spot += toTheLeft;
			break;
		case 1:
			spot += above;
			break;
		case 2:
			spot += toTheRight;
			break;
		case 3:
			spot += below;
	}
	if(spot >= 0 && spot < (N_ROWS*N_COLS) && theCells[spot] == "empty"){
		return spot;
	}
	return -1;
}
/*
 * Computes what the average volume is across the canvas.
 */
computeSound = function(){
	var counter;
	var dirs = [];
	var sum;
	for(counter = 0; counter < vol.length; counter++){
		sum = vol[counter];

		dirs[0] = counter + above;
		dirs[1] = counter + below;
		dirs[2] = counter + toTheLeft;
		dirs[3] = counter + toTheRight;
		for(var i = 3; i >= 0; i--){
			if(dirs[i]<0 || dirs[i]>=(N_ROWS*N_COLS)){
				dirs.splice(i,1);
			}
		}
		for(var i = 0; i < dirs.length; i++){
			sum += vol[dirs[i]];
		}
		vol[counter] = Math.floor(sum / (dirs.length+1));
	}
}

/*
 * Return 0 if strongest sound signal is where one is currently at; 
 * else: 1 for above, 2 for right, 3 for below, 4 for left
 *
 * To do: implement this function, or write something better :)
 */
strongestSoundS = function(location){
	var dirs = [];
	var max = 0;
	
	
	
	for(agentCounter = 0; agentCounter < theSeals.length; agentCounter++){
	
	if (vol[location + above] > vol[location + below] && vol[location + toTheLeft] && vol[location + toTheRight]) {
		max = 1;
	}
		
	else if (vol[location + below] > vol[location + above] && vol[location + toTheLeft] && vol[location + toTheRight]) {
		max = 2;
	}
	
	else if (vol[location + toTheLeft] > vol[location + above] && vol[location + below] && vol[location + toTheRight]) {
		max = 3;
	}
	
	else if (vol[location + toTheRight] > vol[location + above] && vol[location + toTheLeft] && vol[location + below]) {
		max = 4;
	}

}
	
	return max;
}

/*
 * This function starts calling the simulate() function every
 * so many milliseconds (defined by INTERVAL_SIZE). It also
 * changes the Play button to say 'Pause' and sets a
 * press of the 'Pause' button to call the pause() function
 */
play = function() {
	Interval = setInterval("simulate();", INTERVAL_SIZE);
	document.getElementById("playPause").innerHTML = "PAUSE";
	document.getElementById("playPause").onclick = pause;
	document.getElementById("step").disabled = true;
}

/*
 * This function stops the repeated calls to simulate(). It also
 * changes the Pause button to say 'Play' and sets a
 * press of the 'Play' button to call the play() function
 */
pause = function() {
	clearInterval(Interval);
	document.getElementById("playPause").innerHTML = "PLAY";
	document.getElementById("playPause").onclick = play;
	document.getElementById("step").disabled = false;
}

/*
 * This function sets (or resets) all the values to their defaults.
 */
setup = function() {
	N_ROWS = document.getElementById("ht").value;
	N_COLS = document.getElementById("wt").value;
	N_SEALS = document.getElementById("nums").value;
	N_FISH = document.getElementById("numf").value;
	reset();
}

refresh = function() {

	location.reload();
	
}

/*
 * This function sets (or resets) all the values to their defaults.
 */
reset = function() {
	theCells = [];
	theFish = [];
	theSeals = [];

	initCanvas();
	placeAgents();
}

/*
 * This function is a single time step in the simulation.
 */
step = function() {
	simulate();
}