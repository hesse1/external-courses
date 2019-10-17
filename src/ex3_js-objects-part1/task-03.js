function checkPropertyObj(nameString, obj){
   if(nameString in obj){
     return true;
   }
  return false;
 }

 module.exports = checkPropertyObj;