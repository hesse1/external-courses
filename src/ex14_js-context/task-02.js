function Hangman(word) {
  this.word = word;
  this.words = this.word.split('');
  this.mistakes = 6;
  this.wrongLetters = [];
  this.result = [];
  for(let i = 0; i < this.words.length; i++){
    this.result.push("_")
  }
  
  this.guess = function (letter) {
    if (this.word.includes(letter)) {
      for (let i = 0; i < this.words.length; i++) {
        if (this.words[i] === letter) {
          this.result[i] = letter
        }
      }
      console.log(this.result.join(''));
    } else {
      if(this.wrongLetters.indexOf(letter) === -1){
        this.mistakes = this.mistakes - 1
        this.wrongLetters.push(letter)
        console.log(`wrong letter, errors left ${this.mistakes} | ${this.wrongLetters}`);
      }
    }
    if (!this.result.includes("_")) {
      console.log('you are well done');
    }
    if (this.mistakes === 0) {
      console.log('game over, try again');
    }
    return this
  }

  this.getGuessedString = function () {
    return this.result.join('')
  }

  this.getErrorsLeft = function () {
    return this.mistakes;
  }
  this.getWrongSymbols = function () {
    return this.wrongLetters
  }
  this.getStatus = function () {
    console.log((`${this.result.join('')} | errors left ${this.mistakes}`));
  }

  this.startAgain = function (word) {
    this.word = word;
    this.words = this.word.split('');
    this.mistakes = 6;
    this.wrongLetters = [];
    this.result = [];
    for(let i = 0; i < this.words.length; i++){
      this.result.push("_")
    }
  }
}

module.exports = new Hangman('webpurple');
