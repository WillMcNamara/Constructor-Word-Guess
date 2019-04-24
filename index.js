var Word = require("./word");
var inquirer = require("inquirer");
var wordsArr = ["cat", "dog", "chicken", "kitten", "pterodactyl", "coyote"];
var displayedWord;

function startGame(){
    var index = Math.floor(Math.random() * wordsArr.length);
    displayedWord = new Word(wordsArr[index]);
    displayedWord.show();
    propmtUser();
}

function propmtUser(){
    inquirer.prompt([
        {
            message: "Guess a letter!",
            name: "userGuess"
        }
    ]).then(function(res){
        displayedWord.userGuess(res.userGuess);
        displayedWord.show();
        propmtUser();
    })
}

startGame();
