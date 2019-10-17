function deepCloneObj(obj) {
  let clone = {};

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if(obj.length > -1) {
    clone = [];
    for(let i = 0; i < obj.length; i++) {
      clone[i] = deepCloneObj(obj[i]);
    }
  } 

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      clone[key] = deepCloneObj(obj[key])
    }
  }
  return clone;
};

module.exports = deepCloneObj;