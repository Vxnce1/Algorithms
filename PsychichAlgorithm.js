let screen = 0;
let numberInput, nameInput, next;
let userNum, userName;
let numberGuess;

let answers = [];
let questions = [];
let currentQuestion = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

	numberInput = createInput();
	numberInput.position(20, 20);
	numberInput.attribute("placeholder", "Enter your number (1-100)");

	nameInput = createInput();
	nameInput.position(20, 50);
	nameInput.attribute("placeholder", "Enter your name");

	next = createButton('Next');
	next.position(20, 80);
	next.mousePressed(goToQuestion);

	questions = [
		new Question("Are you a glass-half-full person?", "yesno"),
		new Question("Do you like symmetry and organization?", "yesno"),
		new Question("Do you spot patterns easily?", "yesno"),
		new Question("If you were ordering a drink at Starbucks, would you order a Tall, Grande, or Venti?", "starbucks"),
		new Question("Are you an excessive shopper?", "yesno"),
		new Question("Are you an “I’m all in” kind of person?", "yesno"),
		new Question("Which season do you enjoy the most?", "season"),
		new Question("Do you have artistic abilities?", "yesno"),
		new Question("Are you extroverted?", "yesno"),
		new Question("Do you know who Triple T is?", "yesno"),
	];
}

function draw() {
	background(100);
	textSize(16);

	if (screen === 0) {
		text("Enter info to begin", 20, 120);
	}

	if (screen >= 1 && screen <= 10) {
		questions[currentQuestion].display();
	}

	if (screen === 11) {
		text("Your number: " + userNum, 20, 30);
		text("Predicted: " + numberGuess, 20, 60);
	}
}

function goToQuestion() {
	userNum = int(numberInput.value());
	userName = nameInput.value();

	numberInput.remove();
	nameInput.remove();
	next.remove();

	screen = 1;
	currentQuestion = 0;

	questions[currentQuestion].createButtons(answer);
}

function answer(val) {
	answers.push(val);

	questions[currentQuestion].removeButtons();
	currentQuestion++;

	if (currentQuestion < questions.length) {
		questions[currentQuestion].createButtons(answer);
		screen++;
	} else {
		calculateGuess();
		screen = 11;
	}
}

function calculateGuess() {
	let w1 = 8;
	let w2 = -12;
	let w3 = 0;
	let w4 = 17;
	let w5 = 0;
	let w6 = -50;
	let w7 = -18;
	let w8 = -20;
	let w9 = 54;
	let w10 = 5;
	

	let q1 = answers[0];
	let q2 = answers[1];
	let q3 = answers[2];
	let q4 = answers[3];
	let q5 = answers[4];
	let q6 = answers[5];
	let q7 = answers[6];
	let q8 = answers[7];
	let q9 = answers[8];
	let q10 = answers[9];

	numberGuess = (w1 * q1) + (w2 * q2) + (w3 * q3) + (w4 * q4) + (w5 * q5) + (w6 * q6) + (w7 * q7) + (w8 * q8) + (w9 * q9) + (w10 * q10);

	numberGuess = constrain(numberGuess, 1, 100);
	numberGuess = round(numberGuess);
}