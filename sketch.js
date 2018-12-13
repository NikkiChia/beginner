function setup() {
	createCanvas(350, 380);
	background(0, 128, 128);
	//color from 
		//http://www.javascripter.net/faq/hextorgb.htm
		//https://p5js.org/reference/#/p5/fill
	

}

function draw() {
	noStroke();
	colorMode(HSL)
		var c = color(156, 100, 65, 1)
		fill(c);
	ellipse (150, 250, 250, 250); 
		var c = color(156, 100, 75, 1)
		fill(c);
	ellipse (200, 250, 200, 200);
		var c = color(156, 100, 90, 1)
		fill(c);
	ellipse (250, 250, 100, 100);
		var c = color(156, 100, 105, 1)
		fill(c);
	ellipse (300, 250, 50, 50);
}
