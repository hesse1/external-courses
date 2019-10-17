function checkPropInProto(nameProp, obj) {
  let objKey;
  for (let key in obj) {
    if(key === nameProp && !obj.hasOwnProperty(key)) {
      objKey = obj[key]
    }
  }
  return objKey;
} 

module.exports = checkPropInProto;