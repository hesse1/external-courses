const Calculator =(function calc()  {
  let sum = 0;

  function add(number = 0){
    if(+number){
      sum += number;
    }
    return add;
  };

  function subtract(number = 0){
    if(+number){
      sum -= number;
    }
    return subtract;
  };

  function divide(number = 1){
    if(+number){
      sum /= number;
    }
    return divide;
  };

  function multiply(number = 1){
    if(+number){
      sum *= number;
    }
    return multiply;
  };

  function getResult(){
    return sum;
  };

  function reset(){
    sum = 0;
    return sum;
  }
  return{add, subtract, divide, multiply, getResult, reset}
}())

module.exports = Calculator;