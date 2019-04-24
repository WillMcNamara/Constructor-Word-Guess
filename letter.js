var Letter = function(char){
    //assigned letter
    this.character = char,
    //default display
    this.display = "_ ",
    //default has been guessed
    this.guessed = false,
    //if has been guessed, display is assigned letter
    this.reveal = function(){
        if (this.guessed){
        this.display = this.character + " ";
        console.log(this.display);
        }
    }
    //checks if the guess is the letter, sets check to true if true, then changes display
    this.check = function(guess){
        if (guess === this.character){
            this.guessed = true;
            this.reveal();
        }
    }
}

var a = new Letter("a");
console.log(a);
a.check("a");

module.exports = Letter;


