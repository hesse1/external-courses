function checkPropertyObj(nameString, obj){
  for(let key in obj){
   if(key === nameString){
     return true;
   }
  }
  return false;
 }

 module.exports = checkPropertyObj;