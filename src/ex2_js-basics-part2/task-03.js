function countEvenOddNum(array){
  let even = 0;
  let odd = 0;
  let zero = 0;
  let arr = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === 0 && typeof(array[i]) === 'number'){
     zero++
    }else if (array[i] % 2 === 0 && typeof(array[i]) === 'number'){
      even++
    }else if(array[i] % 2 !== 0 && typeof(array[i]) === 'number'){
      odd++
    }
  }
   arr.push(even, odd, zero);
   return arr;
}
module.exports = countEvenOddNum;