function checkPrimeNumber(number){
  if(typeof number === 'number' && typeof number !== 'string' && !isNaN(number)){
    if(number >= 1000 || number <= 1){
        return 'Данные неверны'
      }

      for(let i = 2; i < number; i++){
          if(number % i === 0){
            return('Число' + " " + number + ' - ' + 'составное число');
          }
      }
    return('Число' + " " + number + ' - ' + 'простое число');
  }
  return undefined;
};

module.exports = checkPrimeNumber;