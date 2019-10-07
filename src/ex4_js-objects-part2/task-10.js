function turnString(string){ 
  let newString = ''; 
  for(let i = string.length - 1; i >= 0; i--){ 
    newString = newString + string.charAt(i) 
  } 
  return newString 
}

module.exports = turnString;