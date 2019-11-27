function Calculator() {
  this.sum = 0;

  this.add = function (num) {
    if (+num) {
      this.sum += num;
    }
    return this;
  };

  this.multiply = function (num = 1) {
    if (+num) {
      this.sum *= num;
    }
    return this;
  };

  this.divide = function (num = 1) {
    if (+num) {
      this.sum /= num;
    }
    return this;
  };

  this.subtract = function (num) {
    if (+num) {
      this.sum -= num;
    }
    return this;
  };

  this.getResult = function () {
    return this.sum;
  };

  this.reset = function () {
    this.sum = 0;
    return this;
  };

  this.setState = function (num) {
    if (+num) {
      this.sum = num;
    }
    return this;
  };

  this.fetchData = function (callback) {
    setTimeout(function () {
      callback(500)
    }, 1000)
  };
}

const calculator = new Calculator();
module.exports = calculator;