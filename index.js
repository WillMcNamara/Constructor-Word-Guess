var Word = require("./word");
var inquirer = require("inquirer");
var wordsArr = ["cat", "dog", "chicken", "kitten", "pterodactyl", "coyote"];
var displayedWord;

function startGame(){
    var index = Math.floor(Math.random() * wordsArr.length);
    displayedWord = new Word(wordsArr[index]);
    displayedWord.show();
    userGuess();
}

function userGuess(){
    inquirer.prompt([
        {
            message: "Guess a letter!",
            name: "userGuess"
        }
    ]).then(function(res){
        for (i = 0; i < displayedWord.letterArray.length; i++){
            displayedWord.letterArray[i].check(res.userGuess);
        }
        displayedWord.show();
        userGuess();
    })
}

startGame();
