//HERE WE ARE CREATING A LIST OF SIX OPTIONS FOR LUNCH CHOICES
 	var lunch = ["Pizza", "Sub", "Wings", "Salad", "Fried Chicken", "Hamburger"];
//THIS ARRAY WILL HOLD USER GUESSES
 	var guessedLunch = [];
//THIS VARIABLE WILL BE RANDOMLY ASSIGNED ONE OF THE SIX FOOD CHOICES
	var lunchToGuess = null;
//THIS IS WHAT WE'LL USE TO COUNT DOWN
	var guessesLeft = 9;
//THIS IS THE COUNTER FOR WINS/LOSSES
	var wins = 0;
	var losses = 0;
//BELOW ARE 3 FUNCTIONS TO UPDATGUESSES, UPDATEGUESSES, UPDATEGUESSESLEFT AND UPDATEGUESSESSOFAR
	var updateGuessesLeft = function(){
//HERE WE ARE GRABBING THE HMTL ELEMENT AND SETTING IT TO EQUAL TO THE GUESSESLEFT. GUESSESLEFT WILL BE DISPLAYED IN HTML.
		document.querySelector("guesses-left").innerHTML = guessesLeft;
};
	var updateLunchToGuess = function(){
		lunchToGuess = lunch[Math.floor(Math.random() * lunch.length)];

};

	var updateGuessesSoFar = function(){
//HERE WE TAKE THE GUESSES THE USER HAD TRIED AND THEN DISPLAY IT AS CHOICES SEPARATED BY COMMA
		document.querySelector("#guesses-so-far").innerHTML = guessedLunch.join(", ");
};

//FUNCTION WILL BE CALLED WHEN WE RESET EVERYTHING
	var reset = function(){

		guessesLeft = 9;
		guessedLunch = [];
		updateLunchToGuess();
		updateGuessesLeft();
		updateGuessesSoFar();

};

//EXECUTE ON PAGE LOAD
	updateLunchToGuess();
	updateGuessesLeft();
	
//THIS FUNCTION WILL CAPTURE THE KEYBOARD CLICKS
	document.onkeyup = function(event) {
//THIS FUNCTION IS GOING TO REDUCE THE GUESSES BY ONE
	guessesLeft--;

//THIS METHOD UPON USER ENTRY WILL DROP TO LOWERCASE
	var lunches = String.fromCharCode(event.keyCode).toLowerCase();
//THEN ADD THE GUESS TO THE guessedLunch ARRAY
	guessedLunch.push(lunch);
//THEN ITS GOING TO RUN THE UPDATE FUNCTIONS
	updateGuessesLeft();
	updateGuessesSoFar();
//WE'LL CHECK IF THERE IS A MATCH
	if (lunches === lunchToGuess) {
//IF THERE IS A MATCH WE WIN AND WE'LL UPDATE THE HTML TO DISPLAY THE WIN
	wins++;
	document.querySelector("#wins").innerHTML = wins;
//THEN WE WILL RESET THE GAME
	reset();
	}
//IF WE ARE OUT OF GUESSES
	if (guessesLeft === 0){
//THEN WE WILL LOSE AND WE WILL UPDATE THE HTML TO DISPLAY THE LOSS. 
	losses++;
	document.querySelector("#losses").innerHTML = losses;
//THEN WE WIL CALL THE RESET
	reset();
	}

};