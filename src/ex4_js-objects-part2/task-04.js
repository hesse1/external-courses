function changeFirstLetter(str){
  let firstLetter = str[0];
  firstLetter = firstLetter.toUpperCase()
  let newStr = firstLetter + str.slice(1)
  return newStr;
}

module.exports = changeFirstLetter;
