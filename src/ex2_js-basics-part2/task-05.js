function returnMaxValue(array){
  let maxValue = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] > maxValue){
      maxValue = array[i];
    }
  }
  return maxValue
}
module.exports = returnMaxValue;