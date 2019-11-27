function Hangman(word) {
  this.word = word;
  this.arrWord = this.word.split('');
  this.mistakes = 6;
  this.wrongLetter = [];
  this.result = [];
  for(let i = 0; i < this.arrWord.length; i++){
    this.result.push("_")
  }
  
  this.guess = function (letter) {
    if (this.word.includes(letter)) {
      for (let i = 0; i < this.arrWord.length; i++) {
        if (this.arrWord[i] === letter) {
          this.result[i] = letter
        }
      }
      console.log(this.result.join(''));
    } else {
      if(this.wrongLetter.indexOf(letter) === -1){
        this.mistakes = this.mistakes - 1
        this.wrongLetter.push(letter)
        console.log(`wrong letter, errors left ${this.mistakes} | ${this.wrongLetter}`);
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
    return this.wrongLetter
  }
  this.getStatus = function () {
    console.log((`${this.result.join('')} | errors left ${this.mistakes}`));
  }

  this.startAgain = function (word) {
    this.word = word;
    this.arrWord = this.word.split('');
    this.mistakes = 6;
    this.wrongLetter = [];
    this.result = [];
    for(let i = 0; i < this.arrWord.length; i++){
      this.result.push("_")
    }
  }
}

module.exports = new Hangman('webpurple');
