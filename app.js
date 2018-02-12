//HERE WE ARE CREATING A LIST OF SIX OPTIONS FOR LUNCH CHOICES
 	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//THIS ARRAY WILL HOLD USER GUESSES
 	var guessedLetters = [];
//THIS VARIABLE WILL BE RANDOMLY ASSIGNED ONE OF THE SIX FOOD CHOICES
	var letterToGuess = null;
//THIS IS WHAT WE'LL USE TO COUNT DOWN
	var guessesLeft = 9;
//THIS IS THE COUNTER FOR WINS/LOSSES
	var wins = 0;
	var losses = 0;
//BELOW ARE 3 FUNCTIONS TO UPDATGUESSES, UPDATEGUESSES, UPDATEGUESSESLEFT AND UPDATEGUESSESSOFAR
	var updateGuessesLeft = function(){
//HERE WE ARE GRABBING THE HMTL ELEMENT AND SETTING IT TO EQUAL TO THE GUESSESLEFT. GUESSESLEFT WILL BE DISPLAYED IN HTML.
		document.querySelector("#guesses-left").innerHTML = guessesLeft;
};
	var updateLetterToGuess = function(){
		letterToGuess = letters[Math.floor(Math.random() * letters.length)];

};

	var updateGuessesSoFar = function(){
//HERE WE TAKE THE GUESSES THE USER HAD TRIED AND THEN DISPLAY IT AS CHOICES SEPARATED BY COMMA
		document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

//FUNCTION WILL BE CALLED WHEN WE RESET EVERYTHING
	var reset = function(){

		guessesLeft = 9;
		guessedLetters = [];
		updateLetterToGuess();
		updateGuessesLeft();
		updateGuessesSoFar();

};

//EXECUTE ON PAGE LOAD
	updateLetterToGuess();
	updateGuessesLeft();
	
//THIS FUNCTION WILL CAPTURE THE KEYBOARD CLICKS
	document.onkeyup = function(event) {
//THIS FUNCTION IS GOING TO REDUCE THE GUESSES BY ONE
	guessesLeft--;

//THIS METHOD UPON USER ENTRY WILL DROP TO LOWERCASE
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
//THEN ADD THE GUESS TO THE guessedLunch ARRAY
	guessedLetters.push(letter);
//THEN ITS GOING TO RUN THE UPDATE FUNCTIONS
	updateGuessesLeft();
	updateGuessesSoFar();
//WE'LL CHECK IF THERE IS A MATCH
	if (letter === letterToGuess) {
//IF THERE IS A MATCH WE WIN AND WE'LL UPDATE THE HTML TO DISPLAY THE WIN
	wins++;
	document.querySelector("#wins").innerHTML = wins;
	alert("Yes, you are psychic!")
//THEN WE WILL RESET THE GAME
	reset();
	}
//IF WE ARE OUT OF GUESSES
	else if (guessesLeft === 0){
//THEN WE WILL LOSE AND WE WILL UPDATE THE HTML TO DISPLAY THE LOSS. 
	losses++;
	document.querySelector("#losses").innerHTML = losses;
	alert("Sorry, your stars are not aligned. Try again.")
//THEN WE WIL CALL THE RESET
	reset();
	}

};