function test(string){
  let str = string.toLowerCase();
  let newStr = str.split('');
  let wordLetter = {};
  let letter;
  
  for(let i = 0; i < newStr.length; i++){
    letter = newStr[i];
    if(!wordLetter.hasOwnProperty(letter)){
      wordLetter[letter] = 1;
    }else{
      wordLetter[letter] += 1
    }
  }

  for(let key in wordLetter){
    if(wordLetter.hasOwnProperty(key)){
      console.log(`Буква ${key} потовряется ${wordLetter[key]}`);
    }
  }
 
}

module.exports = test;