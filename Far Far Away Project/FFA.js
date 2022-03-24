//global variables
var color= document.body.style.backgroundColor = "green";

var witch= [];
var numWitch=2;
var prince= [];
var numPrince=4;
var princess= [];
var numPrincess=4;
var frog= [];
var numFrog=10;

var Interval=20;
var canvas; 
var context;         

function onload() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	}

	function drawLake() {
		ctx.fillStyle="blue";
		var lakex=500;
		var lakey=500;
		var laker=200;
		ctx.beginPath();
		
		ctx.arc(lakex, lakey,laker,0,2*Math.PI);
		//ctx.stroke();
		ctx.fill();
	}

	drawLake();

	//
	//
	//sets properties for the objects
	//
	//
	
	for (var i = 0; i < numFrog; i++) {
		
		// Each frog is an object.
		frog[i] = {};
		//sets frog radius
		frog[i].r=10;
		// Each frog object has an (x, y) position and a color.
		frog[i].x =
			Math.floor(Math.random() * (canvas.width - frog[i].r));
		frog[i].y =
			Math.floor(Math.random() * (canvas.height - frog[i].r));
			
			
			
			
			
			
					//SETTING DIRECTION
	  
				  // Generate a random number between 0 and 4, which will represent the
				// direction of the particle.
				randomDir = Math.floor(Math.random() * 4);
			
				// Based on the random number, decide whether the particle should be
				// moving to the top-left, top-right, bottom-left, or bottom-right.
				switch (randomDir) {
				  case 0:
					frog[i].xDirection = "left";
					frog[i].yDirection = "up";
					break;
				  case 1:
					frog[i].xDirection = "right";
					frog[i].yDirection = "up";
					break;
				  case 2:
					frog[i].xDirection = "left";
					frog[i].yDirection = "down";
					break;
				  case 3:
					frog[i].xDirection = "right";
					froggs[i].yDirection = "down";
					break;
				
				}
				
				
				
		
	  }
	
	for (var i = 0; i < numPrince; i++) {
		
		// Each prince is an object.
		prince[i] = {};
		//sets prince width and height
		prince[i].w=20;
		prince[i].h=20;
		
		// Each prince object has an (x, y) position and a color.
		prince[i].x =
			Math.floor(Math.random() * (canvas.width - prince[i].w));
		prince[i].y =
			Math.floor(Math.random() * (canvas.height - prince[i].h));
			
		/*for (var j=0; j < i; j++) {
		
			
			if ((prince[i].x==prince[j].x)) {
				prince[i].x = 
			}
		}*/
		
	}
	
	for (var i = 0; i < numPrincess; i++) {
		
		// Each princess is an object.
		princess[i] = {};
		//sets princess width and height
		princess[i].w=20;
		princess[i].h=20;
		// Each princess object has an (x, y) position and a color.
		princess[i].x =
			Math.floor(Math.random() * (canvas.width - princess[i].w));
		princess[i].y =
			Math.floor(Math.random() * (canvas.height - princess[i].h));
	  }
	  
	  for (var i = 0; i < numWitch; i++) {
		
		// Each princess is an object.
		witch[i] = {};
		//sets princess radius
		witch[i].w=30;
		witch[i].h=30;
		// Each princess object has an (x, y) position and a color.
		witch[i].x =
			Math.floor(Math.random() * (canvas.width - witch[i].w));
		witch[i].y =
			Math.floor(Math.random() * (canvas.height - witch[i].h));
		
	  }
	  
	  
	  //
	  //END OF OBJECT PROPERTIES
	  //
	  
	  
			
			  // Start the animation by calling the animate function every Interval.
			  setInterval("animate();", Interval);
			
			
			// This function determines whether or not two particles have intersected.
			// If particles should not be bouncing, this function returns false.
			intersects = function (frog1, frog2) {
				return (particle1.x < particle2.x + ParticleWidth &&
						particle2.x < particle1.x + ParticleWidth &&
						particle1.y < particle2.y + ParticleHeight &&
						particle2.y < particle1.y + ParticleHeight);
			}
				  
				  setInterval("animate();", Interval);
				  
				  
			}
	animate = function () {
  
  // Draw the particles on the canvas.
		draw();
	}
  

  
  
	function draw () {
	
	  // Clear the canvas.
	  ctx.fillStyle = "green";
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  
	  drawLake();
	
		//console.log(frog[1].x);
	  // Draw each frog
		  for (var i = 0; i < numFrog; i++) {
			ctx.beginPath();
			ctx.fillStyle = "lightblue";//getRandomColor(); /*Particles[i].color;*/
			ctx.arc(frog[i].x, frog[i].y, frog[i].r, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
		  }
		  
	//Draw each prince
		for (var i = 0; i < numPrince; i++) {
			ctx.beginPath();
			ctx.fillStyle = "purple";//getRandomColor(); /*Particles[i].color;*/
			ctx.fillRect(prince[i].x, prince[i].y, prince[i].w, prince[i].h);
			ctx.closePath();
		  }
		  
	//Draw each princess
		for (var i = 0; i < numPrincess; i++) {
			ctx.beginPath();
			ctx.fillStyle = "pink";//getRandomColor(); /*Particles[i].color;*/
			ctx.fillRect(princess[i].x, princess[i].y, princess[i].w, princess[i].h);
			ctx.closePath();
		  }
	
	//Draw each witch
		for (var i = 0; i < numWitch; i++) {
			ctx.beginPath();
			ctx.fillStyle = "black";//getRandomColor(); /*Particles[i].color;*/
			ctx.fillRect(witch[i].x, witch[i].y, witch[i].w, witch[i].h);
			ctx.closePath();
		  }
	
	
	
	
	
	
	
	
	
	}
