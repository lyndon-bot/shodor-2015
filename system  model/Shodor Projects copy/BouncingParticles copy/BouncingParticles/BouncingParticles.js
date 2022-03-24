/*
 * This program simulates particles moving about in a confined space.
 *
 * Authors:
 *  Aaron Weeden, 2013
 *  Phil List, 2013
 * Lyndon Bowen, 2015
 */

// Global variables
var particleWidth = 7;     // the number of pixels wide each particle is.
var particleHeight = 7;    // the number of pixels tall each particle is.
var numParticles = 50;      // the number of particles to use.
var shouldBounce = true;   // says whether particles should bounce off each
                            //   other.
var particleColor = "orange"; // the CSS color of the particles.
var particleColor1 = "blue";
var particleColor2 = "red";
var particleColor3 = "green";
var particleColor4 = "purple";
var particleColor5 = "brown";
var particleColor6 = "yellow";




var followOne = false;      // says whether one particle should be highlighted.
var fParticleColor = "red"; // the CSS color of the particle being highlighted.
var interval = 20;          // the number of milliseconds in between frames of
                            //   animation.
var particles = [];         // an array holding the particles.
var canvas;                 // holds the HTML canvas.
var context;                // holds the context of the HTML canvas.

// This function that initializes the particles calls other needed functions.
onload = function() {
  // Declare local variables
  var i; // loop control variable
  var j; // loop control variable
  var randomDir;  // holds a random direction

  // Store the HTML canvas and its context in variables.
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // Generate random starting locations and directions for the particles.
  for (i = 0; i < numParticles; i++) {

    // Each particle is an object.
    particles[i] = {};

    // Each particle object has an (x, y) position and a color.
    particles[i].x =
      Math.floor(Math.random() * (canvas.width - particleWidth));
    particles[i].y =
      Math.floor(Math.random() * (canvas.height - particleHeight));
    particles[i].color = particleColor;
    particles[i].color1 = particleColor1;
    particles[i].color2 = particleColor2;
    particles[i].color3 = particleColor3;
    particles[i].color4 = particleColor4;
    particles[i].color5 = particleColor5;
    particles[i].color6 = particleColor6;

    // Generate a random number between 0 and 4, which will represent the
    // direction of the particle.
    randomDir = Math.floor(Math.random() * 4);

    // Based on the random number, decide whether the particle should be
    // moving to the top-left, top-right, bottom-left, or bottom-right.
    switch (randomDir) {
      case 0:
        particles[i].xDirection = "left";
        particles[i].yDirection = "up";
        break;
      case 1:
        particles[i].xDirection = "right";
        particles[i].yDirection = "up";
        break;
      case 2:
        particles[i].xDirection = "left";
        particles[i].yDirection = "down";
        break;
      case 3:
        particles[i].xDirection = "right";
        particles[i].yDirection = "down";
        break;
    }
  }

  // If we are following a particle (e.g. particle 0), set that color's
  // particle.
  if (followOne) {
    particles[0].color = fParticleColor;
  }

  // Start the animation by calling the animate function every interval.
  setInterval("animate();", interval);
}

// This function determines whether or not two particles have intersected.
// If particles should not be bouncing, this function returns false.
intersects = function(particle1, particle2) {
  if (shouldBounce) {
    return false;
  }
  else {
    return (particle1.x < particle2.x + particleWidth &&
            particle2.x < particle1.x + particleWidth &&
            particle1.y < particle2.y + particleHeight &&
            particle2.y < particle1.y + particleHeight);
  }
}

// This function computes the direction each particle will travel.
// Then the drawing function is called.
animate = function() {
  var i; // loop control variable
  var j; // loop control variable

  // Loop over each pair of particles that intersect.
  for (i = 0; i < numParticles; i++) {
    for (j = 0; j < numParticles; j++) {
      if (i != j) {
        if (intersects(particles[i], particles[j])) {
          // Decide the new x direction of the particles
          if (particles[i].x < particles[j].x) {
            particles[i].xDirection = "left";
            particles[j].xDirection = "right";
          }

          // Decide the new y direction of the particles
          if (particles[i].y < particles[j].y) {
            particles[i].yDirection = "up";
            particles[j].yDirection = "down";
          }
        }
      }
    }

    // Bounce particles off left/right walls
    if ((particles[i].xDirection == "left") && (particles[i].x == 0)) {
      particles[i].xDirection = "right";
    }
    else if ((particles[i].xDirection == "right") &&
        (particles[i].x == canvas.width - particleWidth)) {
      particles[i].xDirection = "left";
    }

    // Bounce particles off top/bottom walls
    if ((particles[i].yDirection == "up") && (particles[i].y == 0)) {
      particles[i].yDirection = "down";
    }
    else if ((particles[i].yDirection == "down") &&
        (particles[i].y == canvas.height - particleHeight)) {
      particles[i].yDirection = "up";
    }

    // Move particles to new x-positions
    if (particles[i].xDirection == "left") {
      particles[i].x--;
    }
    else if (particles[i].xDirection == "right") {
      particles[i].x++;
    }

    // Move particles to new y-positions
    if (particles[i].yDirection == "up") {
      particles[i].y--;
    }
    else if (particles[i].yDirection == "down") {
      particles[i].y++;
    }
  }

  // Draw the particles on the screen.
  draw();
}

// This function clears the canvas and draws the particles on the screen.
draw = function() {
  var i; // loop control variable

  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);
 var randNum = Math.random();
 
  // Draw each particle.
  for (i = 0; i < numParticles; i++) {
	randNum = Math.random();
	if (randNum < 1/7) {
	context.fillStyle = particles[i].color;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else if (randNum < 2/7) {
	context.fillStyle = particles[i].color1;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else if (randNum < 3/7) {
	context.fillStyle = particles[i].color2;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else if (randNum < 4/7) {
	context.fillStyle = particles[i].color3;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else if (randNum < 5/7) {
	context.fillStyle = particles[i].color4;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else if (randNum < 6/7) {
	context.fillStyle = particles[i].color5;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);

}
else {
context.fillStyle = particles[i].color6;
    context.fillRect(particles[i].x, particles[i].y, particleWidth,
      particleHeight);





}

}
}
