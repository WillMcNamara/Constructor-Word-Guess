var Letter = require("./letter")

var Word = function(hiddenWord){
    this.letterArray = [],
    //fill letterArray with relevant Letter objects
    this.fillArray = function(){
        for (i = 0; i < hiddenWord.length; i++){
            this.letterArray.push(new Letter(hiddenWord[i]));
        }
    }
    //show whole word in one line to console
    this.show = function(){
        var displayToUser = "";
        for (i = 0; i < this.letterArray.length; i++){
            displayToUser += this.letterArray[i].display;
        }
        console.log(displayToUser);
    }
    //checks vs guess input, will update letter display
    this.userGuess = function(guess){
        for (i = 0; i < this.letterArray.length; i++){
            this.letterArray[i].check(guess);
            console.log(this.letterArray[i].display);
        }
    }
    this.fillArray();
}

module.exports = Word;

