function toLowerCamelCase(string) {
  let lowerCase = string.toLowerCase()
  let str = lowerCase.split(' ')
  let array = [];
  
  for (let i = 0; i < str.length; i++) {
    if (i === 0 ) {
      array.push(str[i])
    } else if (i >= 1) {
      let words = str[i]
      let wordSlice = words.slice(1)
      let wordUpLetter = words.charAt(0).toUpperCase()
      let newString = wordUpLetter + wordSlice
      array.push(newString)
    }
  }
  return array.join("")
}

module.exports = toLowerCamelCase;