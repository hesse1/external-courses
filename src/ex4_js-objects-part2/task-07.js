function cutLongString(str, number){ 
  let string;
  if(str.length > number){ 
    let sliceString = str.slice(0, number); 
    let dots = '…'; 
    let lengthNewString = sliceString.length - dots.length; 
    let newString = str.slice(0, lengthNewString) 
    let stringWithDots = newString + dots 
    string = stringWithDots;
  } 
  return string;
}

module.exports = cutLongString;