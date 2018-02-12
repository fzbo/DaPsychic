//HERE WE ARE CREATING A LIST OF SIX OPTIONS FOR LUNCH CHOICES
 	var lunch = ["Pizza", "Sub", "Wings", "Salad", "Fried Chicken", "Hamburger"];
//THIS ARRAY WILL HOLD WHAT WE GUESS
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
	updateLetterToGuess();
	updateGuessesLeft();
	
