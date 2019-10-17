function concatString(string1, string2, index) { 
  let str = string1.split(" "); 
  let str1 = string2.split(" ") 
  let array = []; 
  
  for(let i = 0; i < str.length; i++){ 
    if(i <= index ){ 
      array[i] = str[i] 
    }else if( i > index){ 
      array[i + 1] = str[i] 
    } 
    array[index + 1] = string2 
  } 
  
  return array.join(" ") 
} 
  
module.exports = concatString;