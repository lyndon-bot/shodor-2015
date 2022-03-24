var imagecount = 1;
var total = 2;

function slide(x) {

	var Image = document.getElementById('img');
	imagecount = imagecount + x;
	if(imagecount> total){imagecount=1;}
	if(imagecount< 1){ imagecount = total;}
	Image.src = "Images/img" + imagecount + ".jpg";
}
window.setInterval (function slideA() {

	var Image = document.getElementById('img');
	imagecount = imagecount + 1;
	if(imagecount> total){imagecount=1;}
	if(imagecount< 1){ imagecount = total;}
	Image.src = "Images/img" + imagecount + ".jpg";
}, 5000);