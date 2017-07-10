var x = 180;
var y = 180;

var xspeed = 5;
var yspeed = 5;
var radius = 20;

function setup(){
	// 90% Width
	var canvas = createCanvas(window.innerWidth*.9, 300);
	canvas.parent('p5_example_holder')
	background(63, 42, 20);
	frameRate(60);

	// Remember to account for the radius
	x = random(21, window.innerWidth*.9 - 21);
	y = random(21, 300 - 21);
}

function draw(){
	background(63,42,20);

	// Distance from bottom
	var d = dist(width/2, height/2, 10, 10);
	fill(170, 113, 56);
	ellipse(x, y, radius*2,radius*2);

	// Bounce vertically
	y = y + yspeed;

	if((y + radius) > height || (y - radius) < 0){
		yspeed = -yspeed;
	}

	// Bounce horizontally
	x = x + xspeed;

	if((x + radius) > width || (x - radius) < 0){
		xspeed = -xspeed;
	}


}