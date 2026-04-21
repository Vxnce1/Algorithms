let numberInput, nameInput, next;
let userNum;
let userName;

function setup() {
	numberInput = createInput();
	numberInput.position(20, 20);
	numberInput.size(120);
	numberInput.attribute("placeholder", "Enter your number");
	userNum = numberInput;

	nameInput = createInput();
	nameInput.position(20, 50);
	nameInput.size(200);
	nameInput.attribute("placeholder", "Enter your Name");
	userName = nameInput;

	next = createButton('Next');
	next.position(20, 80);

	next.mousePressed(function() {
		print(userNum.value());
		print(userName.value());
	}
)
}

function draw() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

