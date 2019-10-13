function changeFirstLetEachWord(string){ 
  let str = string.split(" ") 
  let newWord = [];
    for(let i = 0; i < str.length; i++){ 
      let words = str[i];
      let firstLetWords = words.charAt(0).toUpperCase()
      let pieceOfWords = words.slice(1)
      let newString = firstLetWords + pieceOfWords
      newWord.push(newString)    
    } 
    return newWord.join(' ')
  }

module.exports = changeFirstLetEachWord;