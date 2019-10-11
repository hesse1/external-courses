function slice(array,begin, end) {
  let newArray = [];
  let value, value2;

  if(begin >= 0 && typeof end === 'undefined'){
    for(let i = begin; i < array.length; i++ ){
        newArray.push(array[i])
    }
  }else if(typeof begin === 'undefined' && 
          typeof end === 'undefined'){
            return Object.assign(newArray, array)
  }else if(begin >=0 && end > 0){
   
        
        for(let i = begin; i < end; i++){
        newArray.push(array[i])
      }
    
  }
  
  if(begin < 0 && typeof end === 'undefined'){
     value = array.length + begin;
    for(let i = value; i < array.length; i++){
      newArray.push(array[i])
    }
  }

  if(begin >= 0 && end < 0){
    value = array.length + end;
    for(let i = begin; i < value; i++){
     newArray.push(array[i])
    }
  }

  if(begin < 0 && end < 0){
    value = array.length + begin;
    value2 = array.length + end;
    for(let i = value; i < value2; i++){
      newArray.push(array[i])
    }
  }
  return newArray;
}

module.exports = slice;