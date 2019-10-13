function returnModObj(nameString, obj){
  let newObj = obj;
  for(let key in newObj){
   if(key !== nameString){
    newObj[nameString] = 'new';
   }
  }
  return newObj
 }

 module.exports = returnModObj;