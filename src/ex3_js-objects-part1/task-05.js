function returnCloneObj(obj){
  let newObj = {};
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

module.exports = returnCloneObj;